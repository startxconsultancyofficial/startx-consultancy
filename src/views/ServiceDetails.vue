<template>
  <div v-if="service" class="bg-white min-h-screen">
    <!-- Service Header Hero -->
    <section class="relative py-20 lg:py-24 bg-slate-50/60 border-b border-slate-100 dot-grid-pattern">
      <div class="mx-auto max-w-7xl px-6 sm:px-8">
        <!-- Breadcrumbs -->
        <div class="flex items-center space-x-2 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
          <router-link to="/services" class="hover:text-brand-orange transition-colors">Services</router-link>
          <span>/</span>
          <span class="text-slate-600">{{ service.title }}</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-8 space-y-5">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-orange/15 bg-brand-orange-light text-brand-orange shadow-sm">
              <component :is="getIcon(service.icon)" class="h-6 w-6" />
            </div>
            <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
              {{ service.title }}
            </h1>
            <p class="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-4xl">
              {{ service.shortDesc }}
            </p>
          </div>
          <div class="lg:col-span-4 flex lg:justify-end">
            <span class="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange-light px-4 py-2 rounded-xl border border-brand-orange/10">
              Practice Vertical: {{ service.category }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Layout -->
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <!-- Left Main Column (Takes 8 cols on desktop) -->
          <div class="lg:col-span-8 space-y-12">
            <!-- About the Service -->
            <div class="space-y-4">
              <h2 class="text-lg font-extrabold text-slate-900 border-l-4 border-brand-orange pl-3.5">Overview & Advisory Scope</h2>
              <p class="text-base text-slate-600 leading-relaxed font-medium">
                {{ service.longDesc }}
              </p>
            </div>

            <!-- Sub Services Tab Explorer (If available) -->
            <div v-if="service.subServices && service.subServices.length > 0" class="space-y-6">
              <h2 class="text-lg font-extrabold text-slate-900 border-l-4 border-brand-orange pl-3.5">Sub-Services Explorer</h2>
              <p class="text-sm text-slate-500 font-medium">Select an offering below to explore detailed highlights and deliverables.</p>
              
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button 
                  v-for="(sub, i) in service.subServices" 
                  :key="i"
                  class="text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer"
                  :class="selectedSubIndex === i 
                    ? 'border-brand-orange bg-brand-orange-light text-brand-orange shadow-xs font-semibold' 
                    : 'border-slate-100 hover:border-slate-200 bg-white hover:bg-slate-50 text-slate-600'"
                  @click="selectedSubIndex = i"
                >
                  <span class="text-xs font-bold block tracking-wide uppercase text-slate-400 mb-1">0{{ i + 1 }}</span>
                  <span class="text-xs font-extrabold block leading-snug">{{ sub.name }}</span>
                </button>
              </div>

              <!-- Selected Sub Service Detail card -->
              <transition name="page-fade" mode="out-in">
                <div 
                  :key="selectedSubIndex" 
                  class="rounded-3xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 space-y-5"
                >
                  <h3 class="text-base font-extrabold text-slate-900">{{ currentSubService.name }}</h3>
                  <p class="text-sm text-slate-600 leading-relaxed font-medium">{{ currentSubService.desc }}</p>
                  
                  <div class="space-y-3.5 pt-2 border-t border-slate-100">
                    <h4 class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Key Focus & Highlights</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div v-for="hl in currentSubService.highlights" :key="hl" class="flex items-center space-x-2.5 text-sm text-slate-600 font-medium">
                        <CheckCircle2 class="h-4.5 w-4.5 text-brand-orange shrink-0" />
                        <span>{{ hl }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Certifications & Licenses Grid (If available) -->
            <div v-if="service.certifications || service.licenses" class="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-100 pt-10">
              <div v-if="service.certifications" class="space-y-4">
                <h3 class="text-sm font-extrabold text-slate-900 border-l-4 border-brand-orange pl-3">Standard Certifications</h3>
                <ul class="space-y-3">
                  <li v-for="cert in service.certifications" :key="cert" class="flex items-center space-x-3 text-sm text-slate-650 font-medium bg-slate-50/50 border border-slate-100/50 p-3 rounded-xl">
                    <Award class="h-4.5 w-4.5 text-brand-orange shrink-0" />
                    <span>{{ cert }}</span>
                  </li>
                </ul>
              </div>
              <div v-if="service.licenses" class="space-y-4">
                <h3 class="text-sm font-extrabold text-slate-900 border-l-4 border-brand-orange pl-3">Required Licenses</h3>
                <ul class="space-y-3">
                  <li v-for="lic in service.licenses" :key="lic" class="flex items-center space-x-3 text-sm text-slate-650 font-medium bg-slate-50/50 border border-slate-100/50 p-3 rounded-xl">
                    <FileText class="h-4.5 w-4.5 text-brand-orange shrink-0" />
                    <span>{{ lic }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Supporting Processes list -->
            <div v-if="service.supportInclude" class="space-y-4 border-t border-slate-100 pt-10">
              <h2 class="text-lg font-extrabold text-slate-900 border-l-4 border-brand-orange pl-3.5">Our Operations & Support Scope</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="support in service.supportInclude" :key="support" class="p-4 bg-white border border-slate-100 rounded-xl shadow-2xs flex items-center space-x-3 hover:border-brand-orange/30 transition-colors">
                  <CheckSquare class="h-4.5 w-4.5 text-brand-orange shrink-0" />
                  <span class="text-xs font-bold text-slate-700 leading-tight">{{ support }}</span>
                </div>
              </div>
            </div>

            <!-- Key Benefits (If available) -->
            <div v-if="service.benefits" class="space-y-4 border-t border-slate-100 pt-10">
              <h2 class="text-lg font-extrabold text-slate-900 border-l-4 border-brand-orange pl-3.5">Strategic Business Benefits</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div v-for="benefit in service.benefits" :key="benefit" class="flex items-start space-x-3.5 p-5 bg-slate-50/50 border border-slate-100 rounded-2xl">
                  <Sparkles class="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                  <div class="space-y-1">
                    <h4 class="text-sm font-bold text-slate-900 leading-snug">{{ benefit }}</h4>
                    <p class="text-xs text-slate-500 leading-relaxed font-semibold">Optimized compliance management & processing speed guaranteed by StartX.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Bottom Full Width Redirect CTA Banner -->
            <div class="rounded-3xl border border-brand-orange/15 bg-brand-orange-light/40 p-8 sm:p-10 space-y-6 text-center shadow-xs">
              <div class="space-y-2 max-w-2xl mx-auto">
                <h3 class="text-2xl font-extrabold text-slate-900">Need help with {{ service.title }}?</h3>
                <p class="text-sm text-slate-500 font-medium leading-relaxed">
                  Connect with our licensed advisors, Chartered Accountants, and technology engineers to structure your filing report, audit preparation, or tech stack requirements today.
                </p>
              </div>
              <router-link 
                :to="`/contact?service=${service.id}`" 
                class="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-brand-orange text-white px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200"
              >
                Book Consultation For This Service
                <ArrowRight class="h-4 w-4" />
              </router-link>
            </div>
            
          </div>

          <!-- Right Sidebar (Takes 4 cols on desktop) -->
          <div class="lg:col-span-4 relative">
            <div class="sticky top-24 space-y-6">
              
              <!-- Quick Metadata sheet -->
              <div class="rounded-2xl border border-slate-100 bg-white p-6 space-y-5 shadow-2xs">
                <h3 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Processing Summary</h3>
                <ul class="space-y-3.5 text-xs">
                  <li class="flex justify-between py-1 border-b border-slate-50">
                    <span class="text-slate-500 font-medium">Filing Timeframe</span>
                    <span class="font-extrabold text-slate-800">2-4 Weeks</span>
                  </li>
                  <li class="flex justify-between py-1 border-b border-slate-50">
                    <span class="text-slate-500 font-medium">Regulatory Level</span>
                    <span class="font-extrabold text-slate-800">State & Central Govt</span>
                  </li>
                  <li class="flex justify-between py-1 border-b border-slate-50">
                    <span class="text-slate-500 font-medium">Support Mode</span>
                    <span class="font-extrabold text-slate-800">Dedicated Account Manager</span>
                  </li>
                  <li class="flex justify-between py-1">
                    <span class="text-slate-500 font-medium">Audit Readiness</span>
                    <span class="font-extrabold text-slate-800">Complete Preparation</span>
                  </li>
                </ul>
              </div>

              <!-- Quick CTA box in sidebar -->
              <div class="rounded-2xl border border-slate-100 bg-slate-50 p-6 space-y-4">
                <h4 class="text-sm font-bold text-slate-900 leading-tight">Expert Advisory</h4>
                <p class="text-xs text-slate-500 leading-relaxed font-semibold">
                  Get certified project analysis, documentation checklists, and direct liaison coordination.
                </p>
                <router-link
                  :to="`/contact?service=${service.id}`"
                  class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-brand-orange text-white py-3.5 text-xs font-bold transition-all duration-200 cursor-pointer text-center"
                >
                  Request Callback
                  <ArrowRight class="h-3.5 w-3.5" />
                </router-link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  </div>

  <div v-else class="min-h-[60vh] flex flex-col items-center justify-center bg-white px-6 text-center space-y-4">
    <AlertTriangle class="h-14 w-14 text-amber-500 animate-bounce" />
    <h2 class="text-2xl font-extrabold text-slate-900">Service Category Not Found</h2>
    <p class="text-sm text-slate-500 max-w-xs leading-relaxed font-semibold">The requested service category could not be located in our records. Please select from our list of practice verticals.</p>
    <router-link to="/services" class="rounded-xl bg-slate-900 hover:bg-brand-orange text-white px-6 py-3 text-xs font-extrabold uppercase tracking-wider transition-colors">
      Back to Services
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { 
  Coins, 
  FileCheck, 
  Building2, 
  Calculator, 
  Laptop, 
  TrendingUp, 
  Briefcase, 
  HeartHandshake, 
  ShieldAlert, 
  CalendarDays,
  CheckCircle2,
  Award,
  FileText,
  CheckSquare,
  Sparkles,
  AlertTriangle,
  ArrowRight
} from '@lucide/vue'
import { getServiceById } from '../data/servicesData'

const route = useRoute()
const serviceId = computed(() => route.params.id)
const service = computed(() => getServiceById(serviceId.value))

const selectedSubIndex = ref(0)

const currentSubService = computed(() => {
  if (service.value && service.value.subServices && service.value.subServices.length > 0) {
    return service.value.subServices[selectedSubIndex.value] || { name: "", desc: "", highlights: [] }
  }
  return { name: "", desc: "", highlights: [] }
})

watch(service, () => {
  selectedSubIndex.value = 0
}, { immediate: true })

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
</script>
