<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="py-24 relative overflow-hidden bg-[var(--color-brand-orange)]">
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZjliMjQ1IiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
    <div class="max-w-5xl mx-auto px-6 relative z-10 text-center">
      <h2 class="text-4xl md:text-6xl font-black text-black mb-8">Ready to Accelerate Your Growth?</h2>
      <p class="text-xl text-black/80 mb-10 font-medium max-w-2xl mx-auto">Join hundreds of businesses that have transformed their trajectory with our expert guidance and support.</p>
      <RouterLink to="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-black text-white hover:bg-gray-900 transition-all shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        Schedule Your Free Consultation Today
      </RouterLink>
    </div>
  </section>
</template>
