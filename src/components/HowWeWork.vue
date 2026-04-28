<script setup>
import { Search, CreditCard, FileText, Send } from 'lucide-vue-next'
import { howWeWork } from '../data/content'
</script>

<template>
  <section class="py-24 bg-[var(--color-brand-dark)] border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-sm font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-3">Our Process</h2>
        <p class="text-4xl font-bold text-white">How We Work</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(step, i) in howWeWork" :key="step.step" class="relative group">
          <!-- connecting line -->
          <div v-if="i !== howWeWork.length - 1" class="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-800 group-hover:bg-[var(--color-brand-orange)]/50 transition-colors z-0"></div>
          
          <div class="bg-[var(--color-brand-gray)] border border-gray-800 rounded-2xl p-8 relative z-10 hover:-translate-y-2 transition-transform duration-300 h-full">
            <div class="w-16 h-16 rounded-2xl bg-black border border-gray-700 flex items-center justify-center mb-6 shadow-inner text-[var(--color-brand-orange)]">
              <Search v-if="step.title === 'Eligibility Check'" class="w-8 h-8" />
              <CreditCard v-else-if="step.title === 'Payment'" class="w-8 h-8" />
              <FileText v-else-if="step.title === 'Documentation'" class="w-8 h-8" />
              <Send v-else class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3">
              <span class="text-gray-600 mr-2">0{{ step.step }}.</span>
              {{ step.title }}
            </h3>
            <p class="text-sm text-gray-400">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
