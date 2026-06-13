<template>
  <div class="relative overflow-hidden bg-white">
    <!-- Hero Section -->
    <section class="relative py-24 lg:py-40 border-b border-slate-100 dot-grid-pattern">
      <div class="mx-auto max-w-7xl px-6 sm:px-8">
        <div class="text-center space-y-8 max-w-4xl mx-auto">
          <!-- Premium Floating Badge -->
          <div class="inline-flex items-center space-x-2.5 rounded-full bg-slate-50 border border-slate-150/80 px-4.5 py-1.5 shadow-2xs hover:border-slate-200 transition-colors">
            <span class="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span class="text-xs font-bold text-slate-700 tracking-wide">Trusted Advisor to New Businesses</span>
          </div>

          <!-- Hero Heading -->
          <h1 class="text-5xl font-extrabold tracking-tight text-slate-905 sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight">
            Fast-track <span class="text-brand-orange">Government Funding</span> & Manage Corporate Compliance
          </h1>

          <!-- Hero Description -->
          <p class="mx-auto max-w-3xl text-lg sm:text-xl text-slate-500 font-medium leading-relaxed">
            We empower startups, MSMEs, NGOs, and corporations to secure subsidies, complete quality audits, register legal entities, and build enterprise software.
          </p>

          <!-- Hero CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <router-link 
              to="/services" 
              class="flex items-center justify-center rounded-2xl bg-slate-950 hover:bg-brand-orange text-white px-7 py-4 text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-sm shadow-slate-950/10"
            >
              Explore Solutions Portfolio
              <ArrowRight class="ml-2 h-4 w-4" />
            </router-link>
            <router-link 
              to="/contact" 
              class="flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-slate-650 hover:bg-slate-55 hover:border-slate-350 transition-all duration-200"
            >
              Get Free CA Review
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Bento Grid Section (Core Portfolios) -->
    <section class="py-24 lg:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 space-y-16">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div class="space-y-4 max-w-xl text-left">
            <span class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Core Competence</span>
            <h2 class="text-3xl font-extrabold text-slate-905 sm:text-4xl tracking-tight leading-tight">
              Single-Window Advisory Services
            </h2>
            <p class="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              We operate across specialized corporate verticals, securing capital lines and compliance frameworks for sustainable enterprise growth.
            </p>
          </div>
          <router-link
            to="/services"
            class="flex items-center gap-1.5 text-xs font-extrabold text-brand-orange hover:text-brand-orange-hover uppercase tracking-widest shrink-0"
          >
            All 10 services list <ArrowRight class="h-4 w-4" />
          </router-link>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Box 1: Government Funding (Takes 8 columns) -->
          <div class="lg:col-span-8 bg-slate-50/50 rounded-[2rem] border border-slate-100 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-200 transition-all duration-300">
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange-light border border-brand-orange/10 text-brand-orange">
                  <Coins class="h-5 w-5" />
                </div>
                <span class="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 bg-white border border-slate-100 px-3 py-1 rounded-lg">Subsidies & Loans</span>
              </div>
              <div class="space-y-3">
                <h3 class="text-2xl font-extrabold text-slate-905">Government Subsidies & Funding</h3>
                <p class="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
                  Get certified financial representation before nationalised banks and departments. We formulate CMA reports and project briefs for CGTMSE, Mudra, SIDBI capital, and technology upgrading grants.
                </p>
              </div>
              <div class="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100/50">
                <div v-for="item in ['MSME Loans Assistance', 'SIDBI Growth Loans', 'CGTMSE Security-Free', 'PMEGP Subsidy Files']" :key="item" class="flex items-center space-x-2 text-xs font-bold text-slate-650">
                  <CheckCircle class="h-4 w-4 text-brand-orange shrink-0" />
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>
            <div class="pt-8 flex items-center justify-between">
              <router-link to="/services/government-funding" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-orange hover:text-brand-orange-hover uppercase tracking-widest">
                Learn Filing Guidelines <ArrowRight class="h-3.5 w-3.5" />
              </router-link>
            </div>
          </div>

          <!-- Box 2: Certifications & Licenses (Takes 4 columns) -->
          <div class="lg:col-span-4 bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between hover:border-slate-200 transition-all duration-300 shadow-2xs">
            <div class="space-y-6">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                <FileCheck class="h-5 w-5" />
              </div>
              <div class="space-y-3">
                <h3 class="text-xl font-extrabold text-slate-905 leading-snug">Standard Audits & Licenses</h3>
                <p class="text-xs text-slate-500 font-semibold leading-relaxed">
                  Prepare for quality management inspections. We process ISO 9001 / 14001, BIS product validation codes, and FSSAI registry requirements.
                </p>
              </div>
              <ul class="space-y-2 pt-4 border-t border-slate-50">
                <li v-for="c in ['ISO certifications', 'BIS Quality Marks', 'FSSAI Registries']" :key="c" class="flex items-center space-x-2 text-xs font-semibold text-slate-600">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                  <span>{{ c }}</span>
                </li>
              </ul>
            </div>
            <div class="pt-8">
              <router-link to="/services/certifications-licenses" class="inline-flex items-center gap-1 text-xs font-extrabold text-slate-900 hover:text-brand-orange uppercase tracking-widest">
                Audit Checklist <ArrowRight class="h-3.5 w-3.5" />
              </router-link>
            </div>
          </div>

          <!-- Box 3: CA & Auditing (Takes 4 columns) -->
          <div class="lg:col-span-4 bg-white rounded-[2rem] border border-slate-100 p-8 flex flex-col justify-between hover:border-slate-200 transition-all duration-300 shadow-2xs">
            <div class="space-y-6">
              <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                <Calculator class="h-5 w-5" />
              </div>
              <div class="space-y-3">
                <h3 class="text-xl font-extrabold text-slate-905 leading-snug">CA & Tax Accounting</h3>
                <p class="text-xs text-slate-500 font-semibold leading-relaxed">
                  Maintain financial compliance logs. We manage GST return filings, corporate tax computations, TDS filings, and Virtual CFO frameworks.
                </p>
              </div>
              <ul class="space-y-2 pt-4 border-t border-slate-50">
                <li v-for="t in ['GST Return Filing', 'Income Tax Returns', 'Virtual CFO Systems']" :key="t" class="flex items-center space-x-2 text-xs font-semibold text-slate-650">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                  <span>{{ t }}</span>
                </li>
              </ul>
            </div>
            <div class="pt-8">
              <router-link to="/services/ca-financial-services" class="inline-flex items-center gap-1 text-xs font-extrabold text-slate-900 hover:text-brand-orange uppercase tracking-widest">
                Tax Deadlines <ArrowRight class="h-3.5 w-3.5" />
              </router-link>
            </div>
          </div>

          <!-- Box 4: IT & Tech Solutions (Takes 8 columns) -->
          <div class="lg:col-span-8 bg-slate-50/50 rounded-[2rem] border border-slate-100 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-200 transition-all duration-300">
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange-light border border-brand-orange/10 text-brand-orange">
                  <Laptop class="h-5 w-5" />
                </div>
                <span class="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 bg-white border border-slate-100 px-3 py-1 rounded-lg">IT & Tech</span>
              </div>
              <div class="space-y-3">
                <h3 class="text-2xl font-extrabold text-slate-905">IT Solutions & Tech Development</h3>
                <p class="text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
                  Streamline operational pipelines with custom business software. We design, code, and deploy secure ERP portals, CRM pipelines, business platforms, and mobile apps.
                </p>
              </div>
              <div class="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100/50">
                <div v-for="item in ['Secure Custom ERP Development', 'CRM Lead Management Portals', 'Fast Corporate Web Solutions', 'Operational Mobile Apps']" :key="item" class="flex items-center space-x-2 text-xs font-bold text-slate-650">
                  <CheckCircle class="h-4 w-4 text-brand-orange shrink-0" />
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>
            <div class="pt-8 flex items-center justify-between">
              <router-link to="/services/it-solutions" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-orange hover:text-brand-orange-hover uppercase tracking-widest">
                Explore Tech Stack <ArrowRight class="h-3.5 w-3.5" />
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Why Choose Us / Corporate Alignment -->
    <section class="py-24 lg:py-32 bg-slate-50/50 border-t border-b border-slate-100 relative overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div class="lg:col-span-7 space-y-6 text-left">
            <span class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Why Choose Us</span>
            <h3 class="text-3xl font-extrabold text-slate-905 sm:text-4xl tracking-tight leading-tight">
              Professionalism & Efficiency in Every Scheme Process
            </h3>
            <p class="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              Navigating bureaucratic guidelines, banking documentation, and compliance audits on your own can lead to rejections or costly delays. Our Chartered Accountants and industry expert advisors manage the complexity so you can focus on core operations.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div v-for="benefit in benefits" :key="benefit.title" class="flex space-x-3.5">
                <div class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange-light border border-brand-orange/15 text-brand-orange mt-0.5">
                  <CheckCircle class="h-3.5 w-3.5 text-brand-orange shrink-0" />
                </div>
                <div class="space-y-0.5">
                  <h4 class="text-sm font-bold text-slate-905 leading-tight">{{ benefit.title }}</h4>
                  <p class="text-xs text-slate-505 font-semibold leading-relaxed">{{ benefit.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature Matrix Box -->
          <div class="lg:col-span-5 relative">
            <div class="absolute -inset-1 rounded-[2rem] bg-slate-950/5 blur-xl"></div>
            <div class="relative bg-white border border-slate-100 rounded-[2rem] p-6 sm:p-8 space-y-6">
              <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Support Pillars Matrix</h4>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(support, idx) in supportGrid" :key="idx" class="p-4 rounded-2xl bg-slate-50/60 border border-slate-100 space-y-2 hover:border-brand-orange/20 transition-colors">
                  <span class="text-xs font-extrabold text-slate-400">0{{ idx + 1 }}</span>
                  <h5 class="text-xs font-extrabold text-slate-905 tracking-wide uppercase">{{ support.name }}</h5>
                  <p class="text-[10px] text-slate-500 font-semibold leading-normal">{{ support.desc }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 lg:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 space-y-12">
        <div class="text-center space-y-4 max-w-2xl mx-auto">
          <h2 class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Client Success</h2>
          <p class="text-3xl font-extrabold text-slate-905 tracking-tight leading-tight">What Our Partners Say</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(testimonial, i) in testimonials" 
            :key="i" 
            class="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 relative shadow-2xs hover:shadow-md transition-shadow duration-300 space-y-5"
          >
            <span class="text-6xl text-brand-orange/15 font-serif absolute top-3 left-4 select-none">“</span>
            <div class="relative space-y-5">
              <p class="text-sm italic text-slate-650 leading-relaxed font-medium">
                "{{ testimonial.quote }}"
              </p>
              <div class="flex items-center space-x-3 pt-4 border-t border-slate-50">
                <div class="h-9 w-9 rounded-xl border border-brand-orange/15 bg-brand-orange-light flex items-center justify-center font-bold text-brand-orange text-xs uppercase shadow-2xs">
                  {{ testimonial.author[0] }}
                </div>
                <div class="space-y-0.5">
                  <h4 class="text-xs font-extrabold text-slate-905 leading-none">{{ testimonial.author }}</h4>
                  <p class="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{{ testimonial.company }} ({{ testimonial.service }})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="mx-auto max-w-7xl px-6 sm:px-8 pb-20">
      <div class="relative overflow-hidden bg-slate-950 rounded-[2.5rem] py-16 px-8 sm:px-16 md:py-24 text-center shadow-xl">
        <!-- Grid pattern backdrop -->
        <div class="absolute inset-0 opacity-20 pattern-grid"></div>
        
        <div class="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-5xl leading-tight">
            Ready to Fast-track Your Business Funding & Registrations?
          </h2>
          <p class="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
            Connect with our Chartered Accountants and certified industry compliance consultants today for a comprehensive, free eligibility assessment.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <router-link 
              to="/contact" 
              class="rounded-xl bg-brand-orange px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-brand-orange-hover hover:scale-102 transition-all duration-200"
            >
              Get Free Eligibility Review
            </router-link>
            <router-link 
              to="/services" 
              class="rounded-xl border border-slate-800 bg-white/5 hover:bg-white/10 px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-200"
            >
              View Service Offerings
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ArrowRight, 
  CheckCircle, 
  Coins, 
  FileCheck, 
  Calculator, 
  Laptop 
} from '@lucide/vue'

const stats = [
  { value: "10+", label: "Years of Advisory" },
  { value: "500 Cr+", label: "Secured Funding" },
  { value: "1,200+", label: "Clients Empowered" },
  { value: "99.2%", label: "Filing Success" }
]

const steps = [
  { title: "Eligibility Assessment", desc: "Our analysts evaluate government scheme compatibility and verify financial profiles." },
  { title: "Document & Report Synthesis", desc: "Our CAs build solid CMA reports, project summaries, and required files." },
  { title: "Application & Coordination", desc: "We submit applications to the department/bank, handling audit compliance queries." }
]

const benefits = [
  { title: "Saves Time", desc: "We handle documentation, banking coordination, and file submissions completely." },
  { title: "Audit Verification Support", desc: "Prepare with confidence using our mock review sessions before certification checks." },
  { title: "Strategic Tax Shielding", desc: "Legally optimize direct/indirect taxes to boost reinvestment capacity." },
  { title: "Expert CA Advisory", desc: "Receive counsel from qualified Chartered Accountants and finance specialists." }
]

const supportGrid = [
  { name: "Scheme Selection", desc: "Matching your firm to matching grants." },
  { name: "CMA & Project Prep", desc: "Formulating detailed financial reports." },
  { name: "Bank Liasioning", desc: "Navigating processing departments." },
  { name: "Audit Support", desc: "Preparing locations for inspection." }
]

const testimonials = [
  {
    quote: "StartX-Consultancy helped us secure a SIDBI scheme of 5 Crore in record time. Their documentation and liaison support were absolutely seamless.",
    author: "Rajesh Kumar",
    company: "Apex Tech Engineering",
    service: "SIDBI Loan Assistance"
  },
  {
    quote: "Securing ISO 9001 and FSSAI licenses was stress-free. The audit preparation support from StartX helped our factory pass inspections on the first go.",
    author: "Shalini Sharma",
    company: "PureBites Food Corp",
    service: "ISO & FSSAI Support"
  },
  {
    quote: "Having a virtual CFO managed by StartX has changed our cashflow predictability. Their tax and audit advice is top-notch.",
    author: "Amit Patel",
    company: "IndoLogistics Pvt Ltd",
    service: "Virtual CFO Services"
  }
]
</script>
