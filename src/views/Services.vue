<template>
  <div class="bg-white min-h-screen">
    <!-- Services Hero Section -->
    <section class="relative py-20 lg:py-28 bg-slate-50/60 border-b border-slate-100 dot-grid-pattern">
      <div class="mx-auto max-w-5xl px-6 text-center space-y-4">
        <div class="inline-flex items-center space-x-2 rounded-full bg-brand-orange-light border border-brand-orange/15 px-4 py-1.5 text-xs font-bold text-brand-orange">
          <span>Practice Areas</span>
        </div>
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Corporate Solutions <span class="text-brand-orange">Tailored for Success</span>
        </h1>
        <p class="mx-auto max-w-3xl text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
          From securing capital via central schemes to obtaining international ISO quality certifications, corporate tax filings, and custom software—our certified specialists manage the full lifecycle.
        </p>
      </div>
    </section>

    <!-- Services Grid and Filtering -->
    <section class="py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 space-y-16">
        <!-- Filter Tabs / Pills -->
        <div class="flex flex-wrap justify-center gap-2 border-b border-slate-100 pb-8">
          <button 
            v-for="cat in categories" 
            :key="cat"
            class="rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider border transition-all duration-250 cursor-pointer"
            :class="selectedCategory === cat 
              ? 'bg-slate-900 border-slate-900 text-white shadow-sm shadow-slate-900/10' 
              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-350 hover:bg-slate-50'"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="service in filteredServices" 
            :key="service.id" 
            class="group bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-[0_4px_25px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
          >
            <div class="space-y-6">
              <!-- Top line icon & vertical -->
              <div class="flex items-center justify-between">
                <div class="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-700 group-hover:border-brand-orange/30 group-hover:bg-brand-orange-light group-hover:text-brand-orange transition-all duration-300">
                  <component :is="getIcon(service.icon)" class="h-5 w-5" />
                </div>
                <span class="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-lg">
                  {{ service.category }}
                </span>
              </div>
              
              <!-- Content -->
              <div class="space-y-2">
                <h3 class="text-lg font-extrabold text-slate-900 group-hover:text-brand-orange transition-colors duration-200">
                  {{ service.title }}
                </h3>
                <p class="text-sm leading-relaxed text-slate-500 font-medium line-clamp-3">
                  {{ service.shortDesc }}
                </p>
              </div>

              <!-- Offerings tags -->
              <div class="space-y-2.5 pt-4 border-t border-slate-50">
                <h4 class="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">Services Included:</h4>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="item in (service.servicesInclude || service.certifications || []).slice(0, 4)" 
                    :key="item"
                    class="inline-block rounded-lg bg-slate-50 border border-slate-100/80 px-2.5 py-1 text-xs text-slate-650 font-medium"
                  >
                    {{ item }}
                  </span>
                  <span 
                    v-if="(service.servicesInclude || service.certifications || []).length > 4" 
                    class="inline-block rounded-lg bg-brand-orange-light border border-brand-orange/10 px-2 py-1 text-xs text-brand-orange font-bold"
                  >
                    +{{ (service.servicesInclude || service.certifications || []).length - 4 }} More
                  </span>
                </div>
              </div>
            </div>

            <!-- Footer Details -->
            <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Comprehensive filing</span>
              <router-link 
                :to="`/services/${service.id}`" 
                class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-orange hover:text-brand-orange-hover uppercase tracking-wider"
              >
                Learn More <ArrowRight class="h-3.5 w-3.5" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Operational Workflow -->
    <section class="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 space-y-16">
        <div class="text-center space-y-4 max-w-2xl mx-auto">
          <h2 class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Process Workflow</h2>
          <p class="text-3xl font-extrabold text-slate-900">How We Engage With Our Clients</p>
          <p class="text-sm text-slate-500 font-medium leading-relaxed">
            A step-by-step corporate advisory framework ensuring zero compliance failures and optimized funding approval rates.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, idx) in workflow" :key="idx" class="relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-2xs space-y-5 hover:border-slate-200 transition-colors">
            <div class="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-extrabold text-white">
              0{{ idx + 1 }}
            </div>
            <h3 class="text-base font-extrabold text-slate-900 pt-2">{{ step.title }}</h3>
            <p class="text-sm text-slate-550 leading-relaxed font-medium">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
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
  ArrowRight
} from '@lucide/vue'
import { services } from '../data/servicesData'

const selectedCategory = ref("All")

const categories = [
  "All", "Funding", "Compliance", "Corporate", "Finance", "Tech", "Marketing"
]

const filteredServices = computed(() => {
  if (selectedCategory.value === "All") {
    return services
  }
  return services.filter(service => service.category === selectedCategory.value)
})

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

const workflow = [
  {
    title: "1. Diagnostic Audit",
    desc: "We review your corporate credentials, bank credit parameters, and product catalog to map eligible subsidies and certifications."
  },
  {
    title: "2. CMA & File Synthesis",
    desc: "Our financial analysts formulate credit reports, project statements, and compliance audits required by regulatory departments."
  },
  {
    title: "3. Submission & Follow-ups",
    desc: "We submit applications on digital portals, coordinate with bank branch inspectors, and handle technical queries raised by auditing bodies."
  },
  {
    title: "4. Approval & Delivery",
    desc: "We secure direct scheme sanction approvals, supply quality certification codes, or deliver fully checked custom web platforms."
  }
]
</script>
