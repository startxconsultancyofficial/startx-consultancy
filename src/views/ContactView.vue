<script setup>
import { reactive } from 'vue'
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'
import { contactDetails } from '../data/content'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const submitForm = () => {
  // Mock form submission
  alert('Thank you for reaching out, ' + form.name + '!\nYour enquiry has been submitted. We will contact you at ' + form.email + ' shortly.')
  form.name = ''
  form.email = ''
  form.phone = ''
  form.service = ''
  form.message = ''
}
</script>

<template>
  <div>
    <!-- Header -->
    <div class="bg-[var(--color-brand-dark)] pt-24 pb-16 border-b border-gray-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h1 class="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">Let's <span class="text-[var(--color-brand-orange)]">Connect</span></h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          We are ready to align with your vision and empower your business.
        </p>
      </div>
    </div>

    <section class="py-24 bg-[var(--color-brand-gray)]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
        
        <!-- Contact Info Side -->
        <div>
          <h2 class="text-3xl font-bold text-white mb-8">Contact Information</h2>
          <p class="text-gray-400 mb-12 text-lg">Whether you are an established business or a solo-entrepreneur looking for seed funds, our expert consultants are available to guide you.</p>
          
          <div class="space-y-10">
            <!-- Headquarters -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-brand-dark)] border border-gray-800 flex items-center justify-center text-[var(--color-brand-orange)]">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">{{ contactDetails.headquarters.title }}</h3>
                <p class="text-gray-400 leading-relaxed">{{ contactDetails.headquarters.address }}</p>
              </div>
            </div>

            <!-- Branch -->
            <div class="flex gap-4">
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-brand-dark)] border border-gray-800 flex items-center justify-center text-[var(--color-brand-orange)]">
                <MapPin class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-lg font-bold text-white mb-1">{{ contactDetails.branch.title }}</h3>
                <p class="text-gray-400 leading-relaxed">{{ contactDetails.branch.address }}</p>
              </div>
            </div>

            <!-- Contact Methods -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div class="bg-[var(--color-brand-dark)] p-5 rounded-2xl border border-gray-800">
                <Phone class="w-6 h-6 text-[var(--color-brand-orange)] mb-3" />
                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">New Clients</h4>
                <p class="text-lg text-white font-medium">{{ contactDetails.inquiryPhone }}</p>
              </div>
              
              <div class="bg-[var(--color-brand-dark)] p-5 rounded-2xl border border-gray-800">
                <Phone class="w-6 h-6 text-[var(--color-brand-orange)] mb-3" />
                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">Existing Support</h4>
                <p class="text-lg text-white font-medium">{{ contactDetails.supportPhone }}</p>
              </div>

              <div class="bg-[var(--color-brand-dark)] p-5 rounded-2xl border border-gray-800 sm:col-span-2">
                <Mail class="w-6 h-6 text-[var(--color-brand-orange)] mb-3" />
                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-1">Email Us</h4>
                <p class="text-lg text-white font-medium">{{ contactDetails.email }}</p>
              </div>
            </div>
            
            <div class="flex items-center gap-3 text-gray-400 pt-4 border-t border-gray-800">
              <Clock class="w-5 h-5 text-gray-500" />
              <span class="text-sm font-medium">{{ contactDetails.officeHours }}</span>
            </div>
          </div>
        </div>

        <!-- Form Side -->
        <div class="bg-[var(--color-brand-dark)] border border-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <h2 class="text-2xl font-bold text-white mb-8">Send an Enquiry</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="John Doe" class="w-full bg-[var(--color-brand-gray)] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-transparent transition-all" />
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" v-model="form.email" required placeholder="john@example.com" class="w-full bg-[var(--color-brand-gray)] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-transparent transition-all" />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input type="tel" id="phone" v-model="form.phone" required placeholder="+91 99999 99999" class="w-full bg-[var(--color-brand-gray)] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-transparent transition-all" />
              </div>
            </div>
            
            <div>
              <label for="service" class="block text-sm font-medium text-gray-300 mb-2">Service of Interest</label>
              <select id="service" v-model="form.service" required class="w-full bg-[var(--color-brand-gray)] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-transparent transition-all appearance-none cursor-pointer">
                <option value="" disabled>Select a service</option>
                <option value="aarambh">AARAMBH - Registration</option>
                <option value="kavach">KAVACH - Protection</option>
                <option value="pramanit">PRAMANIT - Certification</option>
                <option value="nidhi">NIDHI - Funds</option>
                <option value="vikas">VIKAS - Loans & Capital</option>
                <option value="vistar">VISTAR - Branding</option>
                <option value="prabandhit">PRABANDHIT - Compliance</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" v-model="form.message" rows="4" required placeholder="How can we help you grow?" class="w-full bg-[var(--color-brand-gray)] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-orange)] focus:border-transparent transition-all resize-none"></textarea>
            </div>
            
            <button type="submit" class="w-full btn-primary py-4 text-lg mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
