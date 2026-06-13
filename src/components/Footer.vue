<template>
  <footer class="bg-slate-50 border-t border-slate-100">
    <!-- Top CTA banner strip inside footer -->
    <div class="border-b border-slate-100 bg-white">
      <div class="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div class="space-y-1">
            <h3 class="text-lg font-extrabold text-slate-905">Ready to fast-track your business expansion?</h3>
            <p class="text-sm text-slate-500 font-medium">Get a free eligibility check and compliance diagnostic review from our CA partners.</p>
          </div>
          <router-link
            to="/contact"
            class="flex items-center gap-2 rounded-xl bg-slate-950 hover:bg-brand-orange text-white px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-205 shadow-2xs shrink-0"
          >
            Request Free Diagnostic
            <ArrowRight class="h-4 w-4" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- Main Footer Grid -->
    <div class="mx-auto max-w-7xl px-6 py-16 sm:px-8">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">

        <!-- Brand Info -->
        <div class="lg:col-span-4 space-y-6">
          <div class="flex items-center space-x-3">
            <div class="relative flex items-center justify-center rounded-xl bg-white p-1 border border-slate-100 shadow-2xs">
              <img
                src="/logo.jpg"
                alt="StartX Consultancy"
                class="h-10 w-auto object-contain"
              />
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-extrabold tracking-tight text-slate-905">
                StartX <span class="text-slate-400 font-normal">Consultancy</span>
              </span>
              <span class="text-[8px] uppercase font-bold tracking-widest text-slate-400">Advisory Group</span>
            </div>
          </div>
          <p class="text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
            India's premier single-window advisory consultancy assisting startups, MSMEs, NGOs, and corporations in government funding, scheme filings, ISO audits, taxation, and technology systems.
          </p>

          <!-- Social links -->
          <!-- <div class="flex gap-2.5 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-450 hover:bg-slate-950 hover:text-white transition-colors duration-200">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-450 hover:bg-slate-950 hover:text-white transition-colors duration-200">
              <svg class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               class="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-450 hover:bg-slate-950 hover:text-white transition-colors duration-200">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
            </a>
          </div> -->
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <router-link
                :to="link.to"
                class="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors duration-150"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Direct Support Scope -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Core Verticals</h4>
          <ul class="space-y-3">
            <li v-for="service in footerServices" :key="service.id">
              <router-link
                :to="`/services/${service.id}`"
                class="text-sm font-semibold text-slate-600 hover:text-brand-orange transition-colors duration-150 leading-snug block"
              >
                {{ service.title }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Newsletter Subscription -->
        <div class="lg:col-span-3 space-y-4">
          <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Policy Alerts</h4>
          <p class="text-xs text-slate-500 font-medium leading-relaxed">
            Subscribe to receive direct email alerts on government scheme deadlines, taxation cycles, and compliance audits.
          </p>
          <form @submit.prevent="handleSubscribe" class="space-y-2">
            <input
              v-model="email"
              type="email"
              placeholder="e.g. director@company.com"
              required
              class="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors"
            />
            <button
              type="submit"
              class="w-full rounded-xl bg-slate-905 hover:bg-brand-orange py-2.5 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Subscribe to Alerts
            </button>
          </form>
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
          >
            <p v-if="subscribed" class="mt-2 flex items-center gap-2 text-xs font-bold text-emerald-605">
              <CheckCircle class="h-4 w-4" />
              Subscribed to alerts successfully.
            </p>
          </transition>
        </div>

      </div>
    </div>

    <!-- Bottom strip -->
    <div class="border-t border-slate-100 bg-slate-100/30">
      <div class="mx-auto max-w-7xl px-6 py-8 sm:px-8">
        <div class="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p class="text-xs text-slate-400 font-semibold">
            &copy; {{ currentYear }} <span class="text-slate-700">StartX-Consultancy</span>. All rights reserved.
          </p>
          <div class="flex items-center gap-5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <span>CA Chartered Advisors</span>
            <span class="h-3 w-px bg-slate-250"></span>
            <span>Registered Subsidy Liasions</span>
            <span class="h-3 w-px bg-slate-250"></span>
            <span>ISO Audit Experts</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CheckCircle, ArrowRight } from '@lucide/vue'
import { services } from '../data/servicesData'

const footerServices = computed(() => services.slice(0, 5))

const quickLinks = [
  { label: 'Home Landing', to: '/' },
  { label: 'Corporate Profile', to: '/about' },
  { label: 'Practice Areas', to: '/services' },
  { label: 'Connect Desk', to: '/contact' },
  { label: 'Privacy Guidelines', to: '#' },
]

const email = ref('')
const subscribed = ref(false)
const currentYear = computed(() => new Date().getFullYear())

const handleSubscribe = () => {
  if (email.value.trim()) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => { subscribed.value = false }, 5000)
  }
}
</script>
