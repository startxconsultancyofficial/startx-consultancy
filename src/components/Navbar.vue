<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-slate-100/80 bg-white/90 backdrop-blur-lg transition-all duration-300"
    :class="isScrolled ? 'shadow-[0_2px_30px_-6px_rgba(15,23,42,0.03)] border-slate-200/50 py-3' : 'py-4'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8">
      
      <!-- Brand Logo -->
      <router-link to="/" class="flex items-center space-x-3 group outline-none">
        <div class="relative flex items-center justify-center rounded-xl bg-slate-50/50 p-1.5 border border-slate-100 group-hover:border-slate-200 transition-colors">
          <img
            src="/logo.jpg"
            alt="StartX Consultancy"
            class="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-base font-extrabold tracking-tight text-slate-905 group-hover:text-brand-orange transition-colors">
            StartX <span class="text-slate-400 font-normal">Consultancy</span>
          </span>
          <span class="text-[9px] uppercase font-extrabold tracking-widest text-brand-orange mt-[-1px]">Advisory Partner</span>
        </div>
      </router-link>

      <!-- Desktop Links -->
      <nav class="hidden items-center gap-1.5 lg:flex">
        <router-link
          to="/"
          class="relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-slate-50 hover:text-brand-orange"
          :class="isActiveRoute('/') ? 'text-brand-orange bg-brand-orange-light/80' : 'text-slate-600'"
        >
          Home
        </router-link>

        <router-link
          to="/about"
          class="relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-slate-50 hover:text-brand-orange"
          :class="isActiveRoute('/about') ? 'text-brand-orange bg-brand-orange-light/80' : 'text-slate-600'"
        >
          About Us
        </router-link>

        <!-- Services Dropdown (With Hover Bridge) -->
        <div class="relative" @mouseenter="openDropdown" @mouseleave="scheduleClose">
          <button
            class="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-slate-50 hover:text-brand-orange focus:outline-none cursor-pointer"
            :class="isActiveRoute('/services') || isServicesSubRoute ? 'text-brand-orange bg-brand-orange-light/80' : 'text-slate-600'"
            @click="$router.push('/services')"
          >
            Services
            <ChevronDown
              class="h-3.5 w-3.5 transition-transform duration-300"
              :class="showDropdown ? 'rotate-180 text-brand-orange' : ''"
            />
          </button>

          <!-- Hover safety bridge -->
          <div v-show="showDropdown" class="absolute left-0 right-0 h-4 top-full"></div>

          <!-- Services Mega Dropdown -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-3 scale-98"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-3 scale-98"
          >
            <div
              v-show="showDropdown"
              class="absolute left-1/2 top-[calc(100%+12px)] w-[680px] -translate-x-1/2 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
              @mouseenter="cancelClose"
              @mouseleave="scheduleClose"
            >
              <!-- Small top arrow -->
              <div class="absolute -top-[9px] left-1/2 -translate-x-1/2 h-4 w-4 rotate-45 bg-white border-l border-t border-slate-100"></div>

              <div class="relative z-10 space-y-4">
                <div class="flex items-center justify-between border-b border-slate-50 pb-3">
                  <div>
                    <span class="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Practice Portfolios</span>
                    <p class="text-xs font-bold text-slate-905 mt-0.5">Explore our 10 core vertical solutions</p>
                  </div>
                  <router-link
                    to="/services"
                    class="flex items-center gap-1 rounded-xl bg-slate-50 border border-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-950 hover:text-white transition-colors duration-200"
                    @click="closeDropdown"
                  >
                    View All <ArrowRight class="h-3 w-3" />
                  </router-link>
                </div>

                <div class="grid grid-cols-2 gap-x-6 gap-y-1">
                  <router-link
                    v-for="service in services"
                    :key="service.id"
                    :to="`/services/${service.id}`"
                    class="group flex items-center gap-3 rounded-2xl p-2 transition-all duration-200 hover:bg-slate-50/80"
                    @click="closeDropdown"
                  >
                    <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-600 group-hover:border-brand-orange/30 group-hover:bg-brand-orange-light group-hover:text-brand-orange transition-all duration-200">
                      <component :is="getIcon(service.icon)" class="h-4.5 w-4.5" />
                    </div>
                    <div class="min-w-0">
                      <h4 class="text-xs font-bold text-slate-800 group-hover:text-brand-orange transition-colors leading-tight">
                        {{ service.title }}
                      </h4>
                      <p class="mt-0.5 text-[10px] text-slate-400 line-clamp-1 leading-normal font-medium">
                        {{ service.shortDesc }}
                      </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <router-link
          to="/contact"
          class="relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-slate-50 hover:text-brand-orange"
          :class="isActiveRoute('/contact') ? 'text-brand-orange bg-brand-orange-light/80' : 'text-slate-600'"
        >
          Contact Us
        </router-link>
      </nav>

      <!-- Desktop Contact and CTA -->
      <div class="hidden items-center gap-3 lg:flex">
        <a
          href="tel:+91 9998171401"
          class="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-brand-orange transition-all duration-200"
        >
          <PhoneCall class="h-3.5 w-3.5 text-brand-orange" />
          <span>+91 9998171401</span>
        </a>
        <router-link
          to="/contact"
          class="flex items-center gap-1.5 rounded-xl bg-slate-950 hover:bg-brand-orange text-white px-5 py-2 text-[11px] font-extrabold uppercase tracking-wider transition-all duration-200 shadow-2xs"
        >
          Get Free Review
          <ArrowRight class="h-3.5 w-3.5" />
        </router-link>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 focus:outline-none lg:hidden cursor-pointer"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <Menu v-if="!isMobileMenuOpen" class="h-5 w-5" />
        <X v-else class="h-5 w-5" />
      </button>

    </div>

    <!-- Mobile Drawer -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-show="isMobileMenuOpen"
        class="fixed inset-x-0 top-[70px] z-40 max-h-[calc(100vh-70px)] overflow-y-auto bg-white border-t border-slate-100 shadow-2xl lg:hidden"
      >
        <div class="px-6 py-6 space-y-6">
          <div class="space-y-1">
            <router-link
              to="/"
              class="flex items-center rounded-xl px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-orange transition-colors"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex-1">Home</span>
              <ChevronRight class="h-4 w-4 text-slate-400" />
            </router-link>
            <router-link
              to="/about"
              class="flex items-center rounded-xl px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-orange transition-colors"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex-1">About Us</span>
              <ChevronRight class="h-4 w-4 text-slate-400" />
            </router-link>
            <router-link
              to="/services"
              class="flex items-center rounded-xl px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-orange transition-colors"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex-1">All Services</span>
              <ChevronRight class="h-4 w-4 text-slate-400" />
            </router-link>
            <router-link
              to="/contact"
              class="flex items-center rounded-xl px-4 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-brand-orange transition-colors"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex-1">Contact Us</span>
              <ChevronRight class="h-4 w-4 text-slate-400" />
            </router-link>
          </div>

          <!-- Services in mobile -->
          <div class="border-t border-slate-100 pt-4">
            <p class="px-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-3">All Services (10)</p>
            <div class="grid grid-cols-1 gap-0.5">
              <router-link
                v-for="service in services"
                :key="service.id"
                :to="`/services/${service.id}`"
                class="flex items-center gap-3 rounded-xl px-4 py-2 hover:bg-slate-50 hover:text-brand-orange transition-colors"
                @click="isMobileMenuOpen = false"
              >
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 text-slate-600">
                  <component :is="getIcon(service.icon)" class="h-4 w-4" />
                </div>
                <span class="text-xs font-semibold text-slate-700">{{ service.title }}</span>
              </router-link>
            </div>
          </div>

          <!-- Contact buttons in mobile -->
          <div class="space-y-3 border-t border-slate-100 pt-6">
            <a
              href="tel:+919876543210"
              class="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-705 hover:bg-slate-50"
            >
              <PhoneCall class="h-4 w-4 text-brand-orange" />
              Call: +91 98765 43210
            </a>
            <router-link
              to="/contact"
              class="flex items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-xs font-bold text-white hover:bg-brand-orange transition-colors"
              @click="isMobileMenuOpen = false"
            >
              Get Free Consultation
              <ArrowRight class="h-4 w-4" />
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  PhoneCall,
  ArrowRight,
  Coins,
  FileCheck,
  Building2,
  Calculator,
  Laptop,
  TrendingUp,
  Briefcase,
  HeartHandshake,
  ShieldAlert,
  CalendarDays
} from '@lucide/vue'
import { services } from '../data/servicesData'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const showDropdown = ref(false)
let closeTimer = null

const openDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  showDropdown.value = true
}

const scheduleClose = () => {
  closeTimer = setTimeout(() => {
    showDropdown.value = false
  }, 160)
}

const cancelClose = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

const closeDropdown = () => {
  showDropdown.value = false
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const isActiveRoute = (path) => route.path === path

const isServicesSubRoute = computed(() => route.path.startsWith('/services/'))

const getIcon = (iconName) => {
  const iconsMap = {
    Coins,
    FileCheck,
    Building2,
    Calculator,
    Laptop,
    LaptopCode: Laptop,
    TrendingUp,
    Briefcase,
    HeartHandshake,
    ShieldAlert,
    CalendarDays
  }
  return iconsMap[iconName] || Briefcase
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
