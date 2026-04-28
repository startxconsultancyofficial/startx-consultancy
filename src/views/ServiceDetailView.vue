<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { servicesData, contactDetails } from '../data/content'
import CTA from '../components/CTA.vue'
import HowWeWork from '../components/HowWeWork.vue'
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronRight, PieChart } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const serviceId = computed(() => route.params.id)

// Find the specific category from content data
const service = computed(() => {
  return servicesData.find(s => s.id.toLowerCase() === serviceId.value.toLowerCase())
})

// Quick links to other services
const otherServices = computed(() => {
  return servicesData.filter(s => s.id.toLowerCase() !== serviceId.value.toLowerCase())
})

// Description placeholders since the scraped data only gave titles for the sub-services
const getSubServiceDescription = (index) => {
  const descriptions = [
    "Navigate complex regulatory requirements and secure proper licensing efficiently.",
    "End-to-end assistance ensuring your business is fully compliant and legally protected.",
    "Comprehensive documentation, filing, and advisory support from industry experts.",
    "Fast-track your application and minimize risk of rejection with our proven methods."
  ]
  return descriptions[index % descriptions.length]
}
</script>

<template>
  <div v-if="service">
    <!-- Header -->
    <div class="bg-[var(--color-brand-dark)] pt-32 pb-24 border-b border-gray-800 relative overflow-hidden">
      <div class="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-brand-orange)]/5 to-transparent pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-orange)] mb-6 tracking-widest uppercase">
          <RouterLink to="/services" class="hover:text-white transition-colors">Services</RouterLink>
          <ChevronRight class="w-4 h-4" />
          <span class="text-gray-400">{{ service.title }}</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 max-w-4xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{{ service.title }}</span> Solutions
        </h1>
        <p class="text-xl lg:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed mb-10">
          {{ service.description }}
        </p>
        
        <div class="flex flex-wrap gap-4">
          <RouterLink to="/contact" class="btn-primary">
            Get Expert Help Now
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Main Content Layout -->
    <section class="py-24 bg-[var(--color-brand-gray)] border-t border-gray-800 relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="flex flex-col lg:flex-row gap-16">
          
          <!-- Detailed Services List (Left / Main) -->
          <div class="lg:w-2/3">
            <div class="mb-12">
              <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">Comprehensive {{ service.title }} Coverage</h2>
              <p class="text-gray-400 text-lg leading-relaxed">
                Whether you're looking to establish a new entity or require intricate compliance documentation, our {{ service.title }} packages are crafted to handle the bureaucratic heavy lifting, so you can focus on scaling your vision.
              </p>
            </div>
            
            <div class="space-y-6">
              <div v-for="(item, index) in service.list" :key="index" class="bg-[var(--color-brand-dark)] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all group">
                <div class="flex items-start gap-5">
                  <div class="mt-1 w-12 h-12 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[var(--color-brand-orange)] transition-colors">
                    <PieChart v-if="index % 2 === 0" class="w-6 h-6 text-[var(--color-brand-orange)]" />
                    <ShieldCheck v-else class="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-white mb-2">{{ item }}</h3>
                    <p class="text-gray-400 leading-relaxed">{{ getSubServiceDescription(index) }}</p>
                    
                    <RouterLink to="/contact" class="inline-flex items-center gap-1 text-[var(--color-brand-orange)] text-sm font-bold mt-4 hover:gap-2 transition-all">
                      Enquire specific to this <ArrowRight class="w-4 h-4" />
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Sidebar -->
          <div class="lg:w-1/3 space-y-8">
            <!-- Info Card -->
            <div class="bg-gradient-to-br from-gray-900 to-[var(--color-brand-dark)] p-8 rounded-2xl border border-gray-800 shadow-2xl relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)]/10 rounded-full blur-3xl"></div>
              
              <h3 class="text-xl font-bold text-white mb-4 relative z-10">Why Choose Us?</h3>
              <ul class="space-y-4 mb-8 relative z-10">
                <li class="flex items-start gap-3">
                  <CheckCircle2 class="w-5 h-5 text-green-500 shrink-0" />
                  <span class="text-sm text-gray-300">End-to-End Tracking</span>
                </li>
                <li class="flex items-start gap-3">
                  <CheckCircle2 class="w-5 h-5 text-green-500 shrink-0" />
                  <span class="text-sm text-gray-300">Dedicated Account Manager</span>
                </li>
                <li class="flex items-start gap-3">
                  <CheckCircle2 class="w-5 h-5 text-green-500 shrink-0" />
                  <span class="text-sm text-gray-300">100% Transparent Filing</span>
                </li>
              </ul>
              
              <div class="pt-6 border-t border-gray-800 relative z-10 text-center text-sm text-gray-400">
                Queries? Call <a :href="'tel:' + contactDetails.inquiryPhone" class="text-white font-bold hover:text-[var(--color-brand-orange)] transition-colors">{{ contactDetails.inquiryPhone }}</a>
              </div>
            </div>
            
            <!-- Quick Links -->
            <div class="bg-[var(--color-brand-dark)] p-8 rounded-2xl border border-gray-800">
              <h3 class="text-lg font-bold text-white mb-6 uppercase tracking-widest text-sm">Explore Other Services</h3>
              <ul class="space-y-3">
                <li v-for="other in otherServices" :key="other.id">
                  <RouterLink :to="'/services/' + other.id.toLowerCase()" class="flex items-center justify-between p-3 rounded-lg bg-gray-900 border border-gray-800 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] text-gray-300 font-medium transition-colors">
                    {{ other.title }}
                    <ChevronRight class="w-4 h-4 opacity-50" />
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <HowWeWork />
    
    <CTA />
  </div>
  
  <!-- 404 Fallback -->
  <div v-else class="min-h-[70vh] flex flex-col items-center justify-center bg-[var(--color-brand-dark)] px-6 text-center">
    <h1 class="text-6xl font-black text-white mb-4">404</h1>
    <p class="text-xl text-gray-400 mb-8">This service category could not be found.</p>
    <RouterLink to="/services" class="btn-primary">Return to Services</RouterLink>
  </div>
</template>
