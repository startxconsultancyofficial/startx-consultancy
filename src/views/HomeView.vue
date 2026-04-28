<script setup>
import { ArrowRight, Star, Users, Briefcase, Zap } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { coreValues, servicesData, contactDetails } from '../data/content'
import ServiceCard from '../components/ServiceCard.vue'
import ParticleNetwork from '../components/ParticleNetwork.vue'
import HowWeWork from '../components/HowWeWork.vue'
import CTA from '../components/CTA.vue'

// Let's just pick the top 3 services to highlight on the homepage
const highlightedServices = servicesData.slice(0, 3)
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative min-h-[90vh] flex items-center bg-[var(--color-brand-dark)] overflow-hidden">
      <!-- Interactive Particles Background -->
      <ParticleNetwork />
      
      <!-- Abstract Background Elements -->
      <div class="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[var(--color-brand-orange)]/10 blur-[120px] pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-10 pointer-events-none">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-auto">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-orange)]/30 bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] text-sm font-semibold mb-8 tracking-wide">
              <Zap class="w-4 h-4" /> Startx Consultancy
            </div>
            
            <h1 class="text-6xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              From <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-yellow-500">Registration</span><br />
              to Investor Pitch,
            </h1>
            
            <p class="text-xl md:text-2xl text-gray-400 mb-10 max-w-lg font-light leading-relaxed">
              We simplify everything. Elevate your brand with premium consultancy.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink to="/services" class="btn-primary group text-lg">
                Grow With Us 
                <ArrowRight class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink to="/contact" class="btn-outline text-lg backdrop-blur-sm">
                Book a Consultation
              </RouterLink>
            </div>
          </div>
          
          <div class="relative hidden lg:block">
            <!-- Simulated Hero Graphic -->
            <div class="w-full aspect-square relative rounded-full border border-gray-800 bg-[var(--color-brand-gray)]/10 p-8 flex items-center justify-center">
              
              <!-- Outer Ring (Orange) -->
              <div class="absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-brand-orange)]/30 animate-[spin_15s_linear_infinite] flex items-start justify-center">
                 <div class="w-5 h-5 bg-[var(--color-brand-orange)] rounded-full -mt-2.5 shadow-[0_0_25px_8px_#f97316]"></div>
              </div>
              
              <!-- Inner Ring (Blue) -->
              <div class="absolute inset-12 md:inset-16 rounded-full border border-dashed border-blue-500/30 animate-[spin_20s_linear_infinite_reverse] flex items-center justify-start">
                 <div class="w-4 h-4 bg-blue-500 rounded-full -ml-2 shadow-[0_0_20px_6px_#3b82f6]"></div>
              </div>
              
              <div class="absolute inset-0 flex items-center justify-center">
                <!-- Enlarged Review Card to reduce gap -->
                <div class="w-56 h-56 md:w-64 md:h-64 flex flex-col justify-center items-center text-center bg-gray-900/80 backdrop-blur p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-[var(--color-brand-orange)]/50 hover:-translate-y-2 transition-transform duration-500">
                  <div class="text-6xl font-black text-white mb-3">{{ contactDetails.googleRating.rating }}</div>
                  <div class="flex justify-center text-yellow-500 mb-2 gap-1">
                    <Star v-for="i in 5" :key="i" class="w-6 h-6 fill-current drop-shadow-md" />
                  </div>
                  <div class="text-sm font-semibold text-gray-400 mt-2 tracking-wide">Based on {{ contactDetails.googleRating.reviews }}+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Services Overview -->
    <section class="py-24 bg-[var(--color-brand-gray)] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-sm font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-3">Our Core Services</h2>
          <p class="text-4xl md:text-5xl font-bold text-white mb-6">Expert Solutions for Your Growth</p>
          <p class="text-gray-400 text-lg">We provide a comprehensive suite of services tailored to elevate your business from inception to expansion.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard v-for="service in highlightedServices" :key="service.id" :service="service" />
        </div>
        
        <div class="mt-16 text-center">
          <RouterLink to="/services" class="inline-flex items-center gap-2 text-white hover:text-[var(--color-brand-orange)] font-semibold transition-colors">
            View All Services <ArrowRight class="w-5 h-5" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-24 bg-[var(--color-brand-dark)]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 border-t border-gray-800 pt-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-sm font-bold tracking-widest text-[var(--color-brand-orange)] uppercase mb-3">Why Choose Us</h2>
            <p class="text-4xl font-bold text-white mb-8">Key benefits of our expert consultation and support services</p>
            <p class="text-gray-400 mb-10 leading-relaxed text-lg">
              We partner with you to navigate the complexities of business compliance, funding, and strategy, ensuring you have the edge you need.
            </p>
            <RouterLink to="/about" class="btn-primary">
              Learn deeper about our process
            </RouterLink>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div v-for="(value, index) in coreValues" :key="index" class="bg-[var(--color-brand-gray)] p-6 rounded-2xl border border-gray-800 hover:border-[var(--color-brand-orange)]/50 transition-colors">
              <component :is="index % 2 === 0 ? Users : Briefcase" class="w-10 h-10 text-[var(--color-brand-orange)] mb-4" />
              <h3 class="text-xl font-bold text-white mb-2">{{ value.title }}</h3>
              <p class="text-sm text-gray-400">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How we work -->
    <HowWeWork />

    <!-- Banner -->
    <CTA />
  </div>
</template>
