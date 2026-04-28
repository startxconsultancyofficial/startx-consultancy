<script setup>
import { Target, Building2, UserCircle, Users, Briefcase } from 'lucide-vue-next'
import { contactDetails, coreValues } from '../data/content'
import HowWeWork from '../components/HowWeWork.vue'
import CTA from '../components/CTA.vue'
</script>

<template>
  <div>
    <!-- Header -->
    <div class="bg-[var(--color-brand-dark)] pt-32 pb-24 border-b border-gray-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZjliMjQ1IiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTggMEwwIDhaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjFmIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-brand-dark)]"></div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">About <span class="text-[var(--color-brand-orange)]">Startx</span></h1>
        <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
          We combine tactical insight, vast regulatory network, and uncompromising precision.
        </p>
      </div>
    </div>

    <!-- Intro -->
    <section class="py-24 bg-[var(--color-brand-gray)]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-sm font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-3">Our Mission</h2>
          <h3 class="text-4xl font-bold text-white mb-6">Financial Strategies & Risk Management</h3>
          <p class="text-lg text-gray-400 mb-6 leading-relaxed">
            Tailored plans to meet your unique financial needs and goals. Based in Ahmedabad with a branch in Chennai, we deliver 360-degree consulting from startup establishment and business growth to compliance and funding.
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-4 text-gray-300">
              <div class="w-10 h-10 rounded-full bg-[var(--color-brand-orange)]/20 border border-[var(--color-brand-orange)]/50 flex items-center justify-center text-[var(--color-brand-orange)] shrink-0">
                <UserCircle class="w-5 h-5" />
              </div>
              <span class="font-medium text-lg">24/7 Dedicated Support</span>
            </li>
            <li class="flex items-center gap-4 text-gray-300">
              <div class="w-10 h-10 rounded-full bg-[var(--color-brand-orange)]/20 border border-[var(--color-brand-orange)]/50 flex items-center justify-center text-[var(--color-brand-orange)] shrink-0">
                <Target class="w-5 h-5" />
              </div>
              <span class="font-medium text-lg">Measurable Success Metrics</span>
            </li>
            <li class="flex items-center gap-4 text-gray-300">
              <div class="w-10 h-10 rounded-full bg-[var(--color-brand-orange)]/20 border border-[var(--color-brand-orange)]/50 flex items-center justify-center text-[var(--color-brand-orange)] shrink-0">
                <Building2 class="w-5 h-5" />
              </div>
              <span class="font-medium text-lg">Clear Corporate Communication</span>
            </li>
          </ul>
        </div>
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 relative group">
            <div class="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-dark)] flex items-center justify-center text-gray-600 font-bold uppercase tracking-widest text-xl">
              [ Office Snapshot ]
            </div>
          </div>
          <div class="absolute -bottom-6 -left-6 bg-[var(--color-brand-dark)] border border-[var(--color-brand-orange)]/30 p-6 rounded-2xl shadow-xl">
             <div class="text-3xl font-black text-[var(--color-brand-orange)] mb-1">{{ contactDetails.googleRating.rating }}</div>
             <p class="text-sm font-semibold text-white">Google Average</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-24 bg-[var(--color-brand-dark)] border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-sm font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-3">What Drives Us</h2>
          <p class="text-4xl font-bold text-white">Core Values</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(value, index) in coreValues" :key="index" class="bg-[var(--color-brand-gray)] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
            <component :is="index % 2 === 0 ? Users : Briefcase" class="w-10 h-10 text-[var(--color-brand-orange)] mb-6" />
            <h3 class="text-xl font-bold text-white mb-4">{{ value.title }}</h3>
            <p class="text-gray-400">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <HowWeWork />

    <!-- CTA -->
    <CTA />
  </div>
</template>
