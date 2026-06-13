<template>
  <div class="bg-white min-h-screen">
    <!-- Contact Hero Section -->
    <section class="relative py-20 lg:py-28 bg-slate-50/60 border-b border-slate-100 dot-grid-pattern">
      <div class="mx-auto max-w-5xl px-6 text-center space-y-4">
        <div class="inline-flex items-center space-x-2 rounded-full bg-brand-orange-light border border-brand-orange/15 px-4 py-1.5 text-xs font-bold text-brand-orange">
          <span>Get In Touch</span>
        </div>
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Connect With Our <span class="text-brand-orange">Advisory Partners</span>
        </h1>
        <p class="mx-auto max-w-2xl text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
          Ready to raise capital or audit your operations? Reach out to our Chartered Accountants and certified project managers for a detailed consultation.
        </p>
      </div>
    </section>

    <!-- Main Contact Grid -->
    <section class="py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          <!-- Left Column: Info Details -->
          <div class="lg:col-span-5">
            <div class="flex flex-col h-full justify-between space-y-6">
              <div class="space-y-4">
                <span class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Direct Contacts</span>
                <h2 class="text-3xl font-extrabold text-slate-900">Reach Us Directly</h2>
                <p class="text-sm text-slate-500 leading-relaxed">
                  Have an urgent inquiry? Call or visit our corporate office. Our client coordinators are active from 9:30 AM to 6:30 PM, Monday through Saturday.
                </p>
              </div>
              
              <!-- Contact Cards -->
              <div class="flex-grow flex flex-col justify-between gap-5 mt-2">
                <div v-for="info in contactInfos" :key="info.title" class="flex items-start space-x-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-slate-200 transition-all duration-300 flex-1 flex flex-col justify-center">
                  <div class="flex items-start space-x-4 w-full">
                    <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange border border-brand-orange/10">
                      <component :is="info.icon" class="h-5 w-5" />
                    </div>
                    <div class="space-y-1.5 flex-grow">
                      <h4 class="text-sm font-bold text-slate-900 leading-none">{{ info.title }}</h4>
                      <p class="text-sm text-slate-600 font-medium mt-1" v-html="info.desc"></p>
                      <p class="text-[11px] text-slate-400 font-semibold leading-none">{{ info.note }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Submission Form -->
          <div class="lg:col-span-7">
            <div class="rounded-3xl border border-slate-150 bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-6 h-full flex flex-col justify-between">
              <div>
                <h3 class="text-2xl font-extrabold text-slate-900">Submit an Inquiry</h3>
                <p class="text-sm text-slate-500 mt-1 font-medium">Submit your company information. Our financial planning specialists will review your filing needs and respond.</p>
              </div>
              
              <form @submit.prevent="handleSubmit" class="space-y-5 flex-grow flex flex-col justify-between">
                <div class="space-y-5 flex-grow mb-6">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Your Name</label>
                      <input 
                        v-model="form.name" 
                        type="text" 
                        required 
                        placeholder="e.g. Priyank Patel" 
                        class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange bg-slate-50/30 transition-colors" 
                      />
                    </div>
                    <div>
                      <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Company Name</label>
                      <input 
                        v-model="form.company" 
                        type="text" 
                        required 
                        placeholder="e.g. StarX Logistics Ltd" 
                        class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange bg-slate-50/30 transition-colors" 
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                      <input 
                        v-model="form.email" 
                        type="email" 
                        required 
                        placeholder="priyank@starx.com" 
                        class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange bg-slate-50/30 transition-colors" 
                      />
                    </div>
                    <div>
                      <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Phone Number</label>
                      <input 
                        v-model="form.phone" 
                        type="tel" 
                        required 
                        placeholder="9998171401" 
                        class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange bg-slate-50/30 transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Select Service of Interest</label>
                    <select 
                      v-model="form.interest" 
                      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors cursor-pointer"
                    >
                      <option v-for="opt in serviceOptions" :key="opt" :value="opt">
                        {{ opt }}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">Brief Description of Project</label>
                    <textarea 
                      v-model="form.msg" 
                      rows="4" 
                      required
                      placeholder="Describe your capital expansion requirements, desired ISO auditing dates, or software timeline expectations..." 
                      class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange bg-slate-50/30 transition-colors"
                    ></textarea>
                  </div>
                </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full rounded-xl bg-slate-900 hover:bg-brand-orange disabled:opacity-60 text-white py-4 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm shadow-slate-900/10 mt-auto"
              >
                {{ isSubmitting ? 'Submitting...' : 'Submit Inquiry Form' }}
              </button>
              </form>

              <!-- Form Success Overlay -->
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div v-show="submitSuccess" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
                  <div class="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl border border-slate-100 space-y-5">
                    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600">
                      <CheckCircle class="h-7 w-7" />
                    </div>
                    <div class="space-y-2">
                      <h4 class="text-lg font-bold text-slate-900">Inquiry Request Logged</h4>
                      <p class="text-sm text-slate-500 leading-relaxed font-medium">
                        Thank you, {{ form.name }}. Your consultation request has been sent successfully. Our consultants will contact you via phone (<strong>{{ form.phone }}</strong>) or email (<strong>{{ form.email }}</strong>) within 2 business hours.
                      </p>
                    </div>
                    <button 
                      @click="closeSuccessModal" 
                      class="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </transition>
            </div>
          </div>

        </div>

        <!-- Google Map Section -->
        <div class="mt-16 space-y-6">
          <div class="rounded-3xl border border-slate-150 bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 class="text-xl font-extrabold text-slate-900">Corporate HQ Location</h3>
                <p class="text-xs text-slate-500 mt-1 font-medium">Visit our corporate office for in-person advisory sessions. Prior appointment is highly recommended.</p>
              </div>
              <a 
                href="https://maps.app.goo.gl/R4Mb6Am7LX1oHU9J7" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange/95 text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto hover:-translate-y-0.5 hover:shadow-md"
              >
                <span>Open in Google Maps</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>

            <!-- Map Iframe Wrapper -->
            <div class="w-full h-[450px] rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
              <iframe 
                src="https://maps.google.com/maps?q=S%20G%20Business%20Hub,%20Ahmedabad,%20Gujarat,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                class="w-full h-full border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- FAQs Section -->
    <section class="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
      <div class="mx-auto max-w-4xl px-6 sm:px-8 space-y-12">
        <div class="text-center space-y-3">
          <h2 class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">FAQ Directory</h2>
          <p class="text-3xl font-extrabold text-slate-900">Common Support Queries</p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, i) in faqs" 
            :key="i" 
            class="rounded-2xl border bg-white p-5 sm:p-6 transition-all duration-200"
            :class="activeFaq === i ? 'border-brand-orange shadow-[0_4px_20px_rgba(249,115,22,0.03)]' : 'border-slate-100 shadow-2xs hover:border-slate-200'"
          >
            <button 
              class="flex w-full items-center justify-between text-left focus:outline-none cursor-pointer"
              @click="toggleFaq(i)"
            >
              <span class="text-base font-bold text-slate-800 group-hover:text-brand-orange transition-colors">{{ faq.q }}</span>
              <span class="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50">
                <ChevronDown 
                  class="h-4 w-4 text-slate-500 transition-transform duration-300" 
                  :class="{ 'rotate-180 text-brand-orange': activeFaq === i }"
                />
              </span>
            </button>
            
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div 
                v-show="activeFaq === i" 
                class="mt-4 border-t border-slate-50 pt-4 text-sm leading-relaxed text-slate-500 font-medium"
              >
                <p>{{ faq.a }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import { useRoute } from 'vue-router'
import { 
  MapPin, 
  Mail, 
  Phone, 
  ChevronDown, 
  CheckCircle 
} from '@lucide/vue'

const route = useRoute()
const activeFaq = ref(null)
const submitSuccess = ref(false)
const isSubmitting = ref(false)
const contactInfos = [
  {
    icon: Phone,
    title: "Telephone Support",
    desc: '<a href="tel:+91 9998171401" class="hover:underline hover:text-brand-orange transition-colors font-semibold text-slate-800">+91 9998171401</a>',
    note: "Monday - Saturday: 9:30 AM to 6:30 PM"
  },
  {
    icon: Mail,
    title: "Official Email Inquiries",
    desc: '<a href="info@startx-consultancy.com" class="hover:underline hover:text-brand-orange transition-colors font-semibold text-slate-800">info@startx-consultancy.com</a>',
    note: "Response within 2 working hours"
  },
  {
    icon: MapPin,
    title: "Ahmedabad HQ Office",
    desc: "N 301 SG Buisness Hub Near Indian Oil Petrol Pump Near Vasant Nagar Township, Ahmedabad Gujarat, 380060",
    note: "Prior appointment recommended"
  }
]

const serviceOptions = [
  "Government Funding Consultancy",
  "Government Certifications & Licenses",
  "Business Registration Services",
  "CA & Financial Services",
  "IT Solutions & Tech Development",
  "Digital Marketing Services",
  "Government Tender & GeM Consultancy",
  "NGO & Foundation Consultancy",
  "Facility Management Services",
  "Event Management Services"
]

const faqs = [
  {
    q: "What initial documents do we need to prepare for a Government MSME/SIDBI funding application?",
    a: "Usually, you will need to supply three years of audited financial statements, PAN & GST records, Udyam registration, current bank loan track records, and a brief description of the capital project. Our Chartered Accountants will utilize these to formulate your CMA report and detailed project report."
  },
  {
    q: "How long does the ISO quality management certification process take to finalize?",
    a: "Standard ISO certifications like ISO 9001 or 14001 typically require 2 to 3 weeks. This includes the formulation of standard operating procedures, documentation gap audit preparation, employee sensitization, and final certification approval by qualified external inspection registries."
  },
  {
    q: "Can StartX-Consultancy manage monthly GST filings and corporate tax audits simultaneously?",
    a: "Yes, our dedicated CA services team manages monthly/quarterly GST return filings, TDS reporting, corporate tax computations, and statutory audits. We allocate a dedicated accounting manager to your dashboard to handle monthly calendar tasks."
  },
  {
    q: "What are the costs associated with the initial schemes eligibility assessment?",
    a: "Our initial diagnostic eligibility consultation is completely free of charge. We analyze your company's profile against current central and state guidelines to find matching subsidies. If you choose to file, we charge a nominal advisory retainer or structure a service milestone fee."
  }
]

const form = ref({
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: "Government Funding Consultancy",
  msg: ""
})

// Map query parameter slug to option value
const serviceSlugMap = {
  "government-funding": "Government Funding Consultancy",
  "certifications-licenses": "Government Certifications & Licenses",
  "business-registration": "Business Registration Services",
  "ca-financial-services": "CA & Financial Services",
  "it-solutions": "IT Solutions & Tech Development",
  "digital-marketing": "Digital Marketing Services",
  "government-tender-gem": "Government Tender & GeM Consultancy",
  "ngo-foundation": "NGO & Foundation Consultancy",
  "facility-management": "Facility Management Services",
  "event-management": "Event Management Services"
}

onMounted(() => {
  const selectedSlug = route.query.service
  if (selectedSlug && serviceSlugMap[selectedSlug]) {
    form.value.interest = serviceSlugMap[selectedSlug]
  }
})

const toggleFaq = (idx) => {
  if (activeFaq.value === idx) {
    activeFaq.value = null
  } else {
    activeFaq.value = idx
  }
}

const handleSubmit = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true

  try {
    const templateParams = {
      name: form.value.name,
      company: form.value.company,
      email: form.value.email,
      phone: form.value.phone,
      interest: form.value.interest,
      message: form.value.msg
    }

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    submitSuccess.value = true

  } catch (error) {
    console.error('EmailJS Error:', error)
    alert('Failed to send inquiry. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const closeSuccessModal = () => {
  submitSuccess.value = false

  form.value = {
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Government Funding Consultancy",
    msg: ""
  }
}
</script>
