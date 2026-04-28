<script setup>
import { servicesData } from '../data/content'
import ServiceCard from '../components/ServiceCard.vue'
import CTA from '../components/CTA.vue'
import { BriefcaseBusiness, TrendingUp, HandCoins } from 'lucide-vue-next'
</script>

<template>
  <div>
    <!-- Header -->
    <div class="bg-[var(--color-brand-dark)] pt-32 pb-24 border-b border-gray-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">Our <span class="text-[var(--color-brand-orange)]">Services</span></h1>
        <p class="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
          Explore our comprehensive catalogue of compliance, funding, registration, and advisory packages.
        </p>
      </div>
    </div>

    <!-- Introductory Approach -->
    <section class="py-24 bg-[var(--color-brand-dark)]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <BriefcaseBusiness class="w-12 h-12 text-[var(--color-brand-orange)] mx-auto md:mx-0 mb-6" />
            <h3 class="text-2xl font-bold text-white mb-4">Strategic Advisory</h3>
            <p class="text-gray-400">We analyze your trajectory and optimize your compliance structures to maintain agility and growth.</p>
          </div>
          <div>
            <TrendingUp class="w-12 h-12 text-blue-500 mx-auto md:mx-0 mb-6" />
            <h3 class="text-2xl font-bold text-white mb-4">Scalable Structure</h3>
            <p class="text-gray-400">From a single person company to large scale private entities, we provide the foundations your company needs.</p>
          </div>
          <div>
            <HandCoins class="w-12 h-12 text-yellow-500 mx-auto md:mx-0 mb-6" />
            <h3 class="text-2xl font-bold text-white mb-4">Funding Mastery</h3>
            <p class="text-gray-400">We connect you directly to NIDHI, VIKAS, and other pivotal government resources to power innovation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="pt-12 pb-24 bg-[var(--color-brand-gray)] border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-sm font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-3">Service Catalogue</h2>
          <p class="text-4xl font-bold text-white">Full Spectrum Solutions</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <ServiceCard v-for="service in servicesData" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTA />
  </div>
</template>
