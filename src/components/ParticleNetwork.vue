<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHandTrackingStore } from '../stores/handTracking'

const handStore = useHandTrackingStore()
const canvasRef = ref(null)
let animationFrameId = null
let fireflies = []
let canvasWidth = 0
let canvasHeight = 0
let mouse = { x: null, y: null, radius: 150 }

class Firefly {
  constructor() {
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.radius = Math.random() * 2.5 + 1.5
    this.vx = (Math.random() - 0.5) * 1.5
    this.vy = (Math.random() - 0.5) * 1.5
    
    // Meander properties
    this.wanderAngle = Math.random() * Math.PI * 2
    
    this.alpha = Math.random() * 0.5 + 0.5 // Fixed glow, no blinking
    this.hue = Math.random() > 0.7 ? 60 : 40 
  }

  update() {
    // Erratic, meandering motion
    this.wanderAngle += (Math.random() - 0.5) * 0.5
    this.vx += Math.cos(this.wanderAngle) * 0.1
    this.vy += Math.sin(this.wanderAngle) * 0.1
    
    // Determine pointer coordinates and radius based on hand tracking or mouse fallback
    let pointerX = handStore.isHandPresent ? (handStore.isGrabbing ? handStore.palmX : null) : mouse.x
    let pointerY = handStore.isHandPresent ? (handStore.isGrabbing ? handStore.palmY : null) : mouse.y
    let targetRadius = handStore.isHandPresent 
      ? (handStore.isGrabbing ? 500 : 0) 
      : mouse.radius * 2.5

    // Mouse/Hand Attraction (Follow the point)
    if (pointerX !== null && pointerY !== null && targetRadius > 0) {
      let dx = pointerX - this.x
      let dy = pointerY - this.y
      let distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < targetRadius) {
        let maxDistance = targetRadius
        let force = (maxDistance - distance) / maxDistance
        
        // Hand has stronger pull
        let pullFactor = handStore.isHandPresent ? 0.35 : 0.15

        // Pull smoothly towards the cursor
        this.vx += (dx / distance) * force * pullFactor
        this.vy += (dy / distance) * force * pullFactor
      }
    }
    
    // Apply speed limits
    const maxSpeed = 1.8
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
    if (speed > maxSpeed) {
      this.vx = (this.vx / speed) * maxSpeed
      this.vy = (this.vy / speed) * maxSpeed
    }

    this.x += this.vx
    this.y += this.vy
    
    // Wrap around screen edges seamlessly
    if (this.x < -10) this.x = canvasWidth + 10
    if (this.x > canvasWidth + 10) this.x = -10
    if (this.y < -10) this.y = canvasHeight + 10
    if (this.y > canvasHeight + 10) this.y = -10
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.shadowBlur = 12
    ctx.shadowColor = `hsla(${this.hue}, 100%, 60%, ${this.alpha})`
    ctx.fillStyle = `hsla(${this.hue}, 100%, 80%, ${this.alpha})`
    ctx.fill()
  }
}

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext("2d")

  const resize = () => {
    canvasWidth = window.innerWidth
    canvasHeight = window.innerHeight
    canvas.width = canvasWidth
    canvas.height = canvasHeight
  }

  resize()
  window.addEventListener("resize", resize)

  const handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect()
    mouse.x = e.clientX - rect.left
    mouse.y = e.clientY - rect.top
  }
  
  const handleMouseLeave = () => {
    mouse.x = null
    mouse.y = null
  }

  window.addEventListener("mousemove", handleMouseMove)
  window.addEventListener("mouseleave", handleMouseLeave)

  fireflies = []
  const numFireflies = (window.innerWidth * window.innerHeight) / 8000
  for (let i = 0; i < numFireflies; i++) {
    fireflies.push(new Firefly())
  }

  const animate = () => {
    // Hard clear rect to prevent any weird layout blinking or trail issues
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    ctx.shadowBlur = 0 

    fireflies.forEach(firefly => {
      firefly.update()
      firefly.draw(ctx)
    })

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()

  onUnmounted(() => {
    window.removeEventListener("resize", resize)
    window.removeEventListener("mousemove", handleMouseMove)
    window.removeEventListener("mouseleave", handleMouseLeave)
    cancelAnimationFrame(animationFrameId)
    fireflies = []
  })
})
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 z-0 pointer-events-none h-full w-full"></canvas>
</template>
