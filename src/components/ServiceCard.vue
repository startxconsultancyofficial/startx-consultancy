<script setup>
import { CheckCircle2 } from 'lucide-vue-next'

defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card flex flex-col h-full group relative overflow-hidden">
    <!-- Accent background hover effect -->
    <div class="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-orange)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    
    <div class="relative z-10 flex-grow flex flex-col">
      <div class="mb-4">
        <h3 class="text-2xl font-bold font-serif text-[var(--color-brand-orange)] uppercase tracking-wider mb-2">
          {{ service.title }}
        </h3>
        <div class="h-1 w-12 bg-gray-700 group-hover:bg-[var(--color-brand-orange)] group-hover:w-20 transition-all duration-300 ease-out rounded"></div>
      </div>
      
      <p class="text-gray-300 mb-6 text-sm flex-grow">
        {{ service.description }}
      </p>
      
      <ul class="space-y-2 mt-auto">
        <li v-for="(item, index) in service.list.slice(0, 4)" :key="index" class="flex items-start gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
          <CheckCircle2 class="w-4 h-4 text-[var(--color-brand-orange)] shrink-0 mt-0.5" />
          <span class="leading-snug">{{ item }}</span>
        </li>
        <li v-if="service.list.length > 4" class="text-xs text-gray-500 italic mt-2 ml-6">
          + {{ service.list.length - 4 }} more services
        </li>
      </ul>
      
      <div class="mt-8 pt-4 border-t border-gray-800">
        <RouterLink :to="`/services/${service.id.toLowerCase()}`" class="text-[var(--color-brand-orange)] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          Explore complete list <span aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
