<script setup>
import { RouterView, useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HandTracker from './components/HandTracker.vue'
import { useHandTrackingStore } from './stores/handTracking'
import { Hand } from 'lucide-vue-next'

const handStore = useHandTrackingStore()
const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    
    <!-- Hidden ML Daemon -->
    <HandTracker />

    <!-- Navbar -->
    <Navbar v-if="!route.meta.hideLayout" />
    
    <!-- Main Content -->
    <main 
      class="flex-grow"
      :class="!route.meta.hideLayout ? 'pt-20' : ''"
    >
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer v-if="!route.meta.hideLayout" />

    <!-- Hand Tracking Toggle Button -->
    <button 
      v-if="!route.meta.hideLayout"
      @click="handStore.toggleTracking()"
      class="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 flex items-center justify-center group pointer-events-auto"
      :class="
        handStore.isActive
          ? 'bg-amber-500/20 border-amber-500/50 text-amber-500 hover:bg-amber-500/30'
          : 'bg-gray-900/50 border-gray-700 text-white/50 hover:bg-gray-800 focus:outline-none'
      "
      title="Toggle Hand Tracking"
    >
      <div 
        v-if="handStore.isActive" 
        class="absolute inset-0 rounded-full animate-ping bg-amber-500/30 opacity-50 pointer-events-none"
      ></div>

      <Hand 
        class="w-6 h-6" 
        :class="{ 'animate-pulse': handStore.isActive }" 
      />

      <span class="sr-only">Toggle Hand Tracking</span>
      
      <!-- User Guide Tooltip -->
      <div 
        class="absolute right-[calc(100%+1rem)] bottom-0 bg-gray-900 border border-gray-700 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-white shadow-2xl w-64 translate-y-2 group-hover:translate-y-0"
      >
        <div class="text-sm font-semibold mb-3 text-amber-500 border-b border-gray-700 pb-2">
          Air Touch Controls
        </div>

        <ul class="space-y-3 text-xs">
          <li class="flex items-center gap-3">
            <span class="text-xl">✊</span>
            <span>
              <strong class="text-white">Fist:</strong>
              Gather particles
            </span>
          </li>

          <li class="flex items-center gap-3">
            <span class="text-xl">✌️</span>
            <span>
              <strong class="text-white">2 Fingers:</strong>
              Scroll page
            </span>
          </li>

          <li class="flex items-center gap-3">
            <span class="text-xl">☝️</span>
            <span>
              <strong class="text-white">1 Finger:</strong>
              Move cursor
            </span>
          </li>

          <li class="flex items-center gap-3">
            <span class="text-xl">🤏</span>
            <span>
              <strong class="text-white">Pinch:</strong>
              Click screen
            </span>
          </li>
        </ul>

        <div class="mt-4 pt-2 border-t border-gray-800 text-[10px] text-gray-500 text-center">
          {{ handStore.isActive ? 'Click to Disable' : 'Click to Enable' }}
        </div>
      </div>
    </button>

    <!-- Custom Virtual Cursor -->
    <div
      v-if="
        !route.meta.hideLayout &&
        handStore.isActive &&
        handStore.isHandPresent
      "
      class="fixed z-[9999] pointer-events-none rounded-full border-2 transition-all duration-75"
      :class="[
        handStore.isPinching
          ? 'w-4 h-4 bg-amber-500 border-amber-300'
          : 'w-6 h-6 bg-white/30 border-white/80',
        {
          'opacity-0':
            handStore.gesture !== 'Pointing_Up' &&
            !handStore.isPinching
        }
      ]"
      :style="{
        left: `${handStore.cursorX}px`,
        top: `${handStore.cursorY}px`,
        transform: 'translate(-50%, -50%)'
      }"
    ></div>
  </div>
</template>