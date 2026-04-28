<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { navigation } from '../data/content'

const route = useRoute()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header 
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent"
    :class="{ 'bg-[var(--color-brand-dark)]/90 backdrop-blur-md border-gray-800 shadow-xl': isScrolled, 'bg-transparent py-4': !isScrolled }"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
      <div class="flex items-center justify-between h-16">
        <div class="flex lg:flex-1">
          <RouterLink to="/" class="-m-1.5 p-1.5 flex items-center gap-2 group">
            <span class="text-2xl font-black tracking-tighter text-white group-hover:text-[var(--color-brand-orange)] transition-colors">
              st<span class="text-[var(--color-brand-orange)] font-bold font-serif text-3xl">A</span>rtX
            </span>
            <span class="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">Consultancy</span>
          </RouterLink>
        </div>
        
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300" @click="toggleMobileMenu">
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!mobileMenuOpen" class="h-6 w-6" aria-hidden="true" />
            <X v-else class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div class="hidden lg:flex lg:gap-x-10">
          <RouterLink 
            v-for="item in navigation" 
            :key="item.name" 
            :to="item.path" 
            class="text-sm font-medium leading-6 transition-colors duration-200"
            :class="route.path === item.path ? 'text-[var(--color-brand-orange)]' : 'text-gray-300 hover:text-white'"
          >
            {{ item.name }}
          </RouterLink>
        </div>
        
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <RouterLink to="/contact" class="btn-primary py-2 px-5 text-sm">
            Get Consulting
          </RouterLink>
        </div>
      </div>
    </nav>
    
    <!-- Mobile menu -->
    <div v-show="mobileMenuOpen" class="lg:hidden bg-[var(--color-brand-gray)] border-b border-gray-800 shadow-2xl absolute inset-x-0 top-full">
      <div class="space-y-1 px-4 pb-6 pt-2">
        <RouterLink 
          v-for="item in navigation" 
          :key="item.name" 
          :to="item.path" 
          class="block rounded-lg px-3 py-2 text-base font-medium"
          :class="route.path === item.path ? 'bg-gray-800 text-[var(--color-brand-orange)]' : 'text-gray-300 hover:bg-gray-800 hover:text-white'"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </RouterLink>
        <RouterLink 
          to="/contact" 
          class="block rounded-lg px-3 py-2.5 text-base font-semibold text-[var(--color-brand-orange)] hover:bg-gray-800"
          @click="mobileMenuOpen = false"
        >
          Get Consulting &rarr;
        </RouterLink>
      </div>
    </div>
  </header>
</template>
