<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { GestureRecognizer, FilesetResolver } from '@mediapipe/tasks-vision'
import { useHandTrackingStore } from '../stores/handTracking'

const videoRef = ref(null)
const store = useHandTrackingStore()
let gestureRecognizer = null
let animationFrameId = null
let lastVideoTime = -1
let stream = null

// Smooth scroll variables
let isScrolling = false
let lastHandY = null

const initGestureRecognizer = async () => {
  try {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    )
    gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
        delegate: "GPU"
      },
      runningMode: "VIDEO",
      numHands: 1
    })
  } catch (err) {
    console.error("Failed to load GestureRecognizer:", err)
  }
}

const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ 
      video: { width: 640, height: 480, facingMode: "user" } 
    })
    if (videoRef.value) {
      videoRef.value.srcObject = stream
      videoRef.value.addEventListener('loadeddata', predictWebcam)
    }
  } catch (err) {
    console.error("Camera access denied or failed:", err)
    store.isActive = false // Turn off if failed
  }
}

const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop())
    stream = null
  }
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  store.updateHandState(false)
}

let lastClickTime = 0

const predictWebcam = () => {
  const video = videoRef.value
  if (!video || !gestureRecognizer || !store.isActive) return

  const nowInMs = Date.now()
  if (video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime
    const results = gestureRecognizer.recognizeForVideo(video, nowInMs)

    if (results.gestures.length > 0 && results.landmarks.length > 0) {
      const gesture = results.gestures[0][0].categoryName // e.g., 'Open_Palm', 'Closed_Fist', 'Victory', 'Pointing_Up'
      const landmarks = results.landmarks[0]
      
      // Palm center (for gathering)
      const rawPalmX = 1 - landmarks[9].x
      const rawPalmY = landmarks[9].y
      const palmX = rawPalmX * window.innerWidth
      const palmY = rawPalmY * window.innerHeight

      // Index fingertip (for cursor)
      const rawCursorX = 1 - landmarks[8].x
      const rawCursorY = landmarks[8].y
      const cursorX = rawCursorX * window.innerWidth
      const cursorY = rawCursorY * window.innerHeight

      // Pinch detection (distance between thumb tip [4] and index tip [8])
      const dx = landmarks[8].x - landmarks[4].x
      const dy = landmarks[8].y - landmarks[4].y
      const pinchDistance = Math.sqrt(dx*dx + dy*dy)
      const isPinching = pinchDistance < 0.05
      
      // Handle click event (debounce 500ms)
      if (isPinching && nowInMs - lastClickTime > 500) {
        lastClickTime = nowInMs
        // Find element under the cursor coordinates and click it
        const element = document.elementFromPoint(cursorX, cursorY)
        if (element) {
          element.click()
        }
      }

      const isGrabbing = gesture === 'Closed_Fist'

      store.updateHandState(true, {
        palmX,
        palmY,
        cursorX,
        cursorY,
        gesture,
        isGrabbing,
        isPinching
      })

      // Handle scrolling behavior, bound to 'Victory' gesture (two fingers)
      handleScroll(gesture, cursorY)

    } else {
      store.updateHandState(false)
      isScrolling = false
      lastHandY = null
    }
  }
  
  if (store.isActive) {
    animationFrameId = requestAnimationFrame(predictWebcam)
  }
}

const handleScroll = (gesture, screenY) => {
  if (gesture === 'Victory') {
    if (!isScrolling) {
      isScrolling = true
      lastHandY = screenY
    } else {
      // Calculate delta movement
      const deltaY = lastHandY - screenY // If hand moves up (screenY decreases), delta is positive -> scroll up
      
      // Multiply by a factor to make scrolling more responsive
      const scrollAmount = deltaY * 2.5 
      
      if (Math.abs(scrollAmount) > 2) {
         window.scrollBy({ top: -scrollAmount, behavior: 'instant' })
      }
      
      lastHandY = screenY
    }
  } else {
    isScrolling = false
    lastHandY = null
  }
}

// Watch store for tracking switches
watch(() => store.isActive, async (active) => {
  if (active) {
    if (!gestureRecognizer) await initGestureRecognizer()
    await startCamera()
  } else {
    stopCamera()
  }
})

onMounted(() => {
  // We initialize the recognizer lazily when the user turns it on, 
  // or we can pre-load it here so it's snappy later.
  initGestureRecognizer()
})

onUnmounted(() => {
  stopCamera()
})
</script>

<template>
  <div class="fixed top-0 left-0 w-0 h-0 overflow-hidden pointer-events-none z-0">
    <video ref="videoRef" autoplay playsinline></video>
  </div>
</template>
