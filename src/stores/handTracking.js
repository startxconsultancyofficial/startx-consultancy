import { defineStore } from 'pinia'

export const useHandTrackingStore = defineStore('handTracking', {
  state: () => ({
    isActive: false, // Whether the tracking is currently enabled by the user
    isHandPresent: false, // Whether a hand is currently detected in the frame
    palmX: null, // X coordinate for the palm (used for gathering)
    palmY: null, // Y coordinate for the palm (used for gathering)
    cursorX: null, // X coordinate for the index fingertip (used for pointing)
    cursorY: null, // Y coordinate for the index fingertip (used for pointing)
    gesture: null, // 'Open_Palm', 'Closed_Fist', 'Victory', 'Pointing_Up'
    isGrabbing: false, // Map to Closed_Fist for particle gather
    isPinching: false, // Map to thumb-index pinch for clicks
  }),
  actions: {
    toggleTracking() {
      this.isActive = !this.isActive
    },
    updateHandState(present, payload = {}) {
      this.isHandPresent = present
      if (present) {
        this.palmX = payload.palmX ?? null
        this.palmY = payload.palmY ?? null
        this.cursorX = payload.cursorX ?? null
        this.cursorY = payload.cursorY ?? null
        this.gesture = payload.gesture ?? null
        this.isGrabbing = payload.isGrabbing ?? false
        this.isPinching = payload.isPinching ?? false
      } else {
        this.palmX = null
        this.palmY = null
        this.cursorX = null
        this.cursorY = null
        this.gesture = null
        this.isGrabbing = false
        this.isPinching = false
      }
    }
  }
})
