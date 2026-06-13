<template>
  <div 
    id="social-floating-menu"
    class="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <!-- Main Toggle Button -->
    <button
      @click.stop="toggleMenu"
      aria-label="Contact Options Menu"
      class="relative z-20 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-brand-orange to-brand-orange-hover text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-110 active:scale-95 transition-all duration-300 ease-out focus:outline-none cursor-pointer"
    >
      <!-- Pulse Ring (only when closed) -->
      <span 
        v-if="!isOpen" 
        class="absolute inset-0 rounded-full bg-brand-orange/40 animate-ping duration-1000"
      ></span>
      
      <!-- Icon changes based on isOpen state with rotation -->
      <div 
        class="transition-transform duration-300 ease-out" 
        :class="{ 'rotate-90': isOpen }"
      >
        <svg 
          v-if="!isOpen" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2.5" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="w-6 h-6"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <svg 
          v-else 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2.5" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="w-6 h-6"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </button>

    <!-- WhatsApp Sub-button -->
    <div 
      class="relative transition-all duration-300 ease-out transform flex items-center justify-center group w-14"
      :class="isOpen ? 'h-14 opacity-100 scale-100 mb-3 pointer-events-auto' : 'h-0 opacity-0 scale-75 mb-0 pointer-events-none overflow-hidden'"
    >
      <!-- Tooltip -->
      <span class="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-slate-800">
        WhatsApp
      </span>
      <a
        href="https://wa.me/919998171401"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
        class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <svg
          class="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>

    <!-- Instagram Sub-button -->
    <div 
      class="relative transition-all duration-300 ease-out transform flex items-center justify-center group w-14"
      :class="isOpen ? 'h-14 opacity-100 scale-100 mb-3 pointer-events-auto' : 'h-0 opacity-0 scale-75 mb-0 pointer-events-none overflow-hidden'"
    >
      <!-- Tooltip -->
      <span class="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-slate-800">
        Instagram
      </span>
      <a
        href="https://www.instagram.com/startxconsultancy?igsh=aW9yYmxwN2lxa3Zx"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Profile"
        class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <svg
          class="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.8 9.9 67.6 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>
      </a>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

// Close the menu when clicking anywhere else on the screen
const handleClickOutside = (event) => {
  const el = document.getElementById('social-floating-menu')
  if (el && !el.contains(event.target)) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
