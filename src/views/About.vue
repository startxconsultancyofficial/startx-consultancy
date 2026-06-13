<template>
  <div class="bg-white min-h-screen">
    <!-- About Hero Section -->
    <section class="relative py-20 lg:py-28 bg-slate-50/60 border-b border-slate-100 dot-grid-pattern">
      <div class="mx-auto max-w-5xl px-6 text-center space-y-4">
        <div class="inline-flex items-center space-x-2 rounded-full bg-brand-orange-light border border-brand-orange/15 px-4 py-1.5 text-xs font-bold text-brand-orange">
          <span>Corporate Profile</span>
        </div>
        <h1 class="text-4xl font-extrabold tracking-tight text-slate-905 sm:text-5xl lg:text-6xl">
          Fueling Innovation, <span class="text-brand-orange">Securing Compliance</span>
        </h1>
        <p class="mx-auto max-w-3xl text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
          We are dedicated to simplifying funding pathways, complex certifications, financial accounts, and technology development for organizations of all sizes.
        </p>
      </div>
    </section>

    <!-- Who We Are Section -->
    <section class="py-20 lg:py-24">
      <div class="mx-auto max-w-7xl px-6 sm:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Text details -->
          <div class="lg:col-span-7 space-y-6 text-left">
            <span class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Who We Are</span>
            <h3 class="text-3xl font-extrabold text-slate-905 sm:text-4xl tracking-tight leading-tight">
              Partnering in Your Corporate Growth Journey
            </h3>
            <p class="text-sm sm:text-base leading-relaxed text-slate-500 font-medium">
              StartX-Consultancy was founded on the belief that securing financial resources and maintaining regulatory certifications shouldn't be a bottleneck for business ambition. Over the past decade, we have established ourselves as one of the most reliable advisory groups in India, bridging the gap between national financial institutions, compliance agencies, and active entrepreneurs.
            </p>
            <p class="text-sm sm:text-base leading-relaxed text-slate-500 font-medium">
              We employ a multidisciplinary team composed of Chartered Accountants, financial analysts, policy advisors, quality auditors, and tech developers. This holistic capability makes us uniquely suited to guide you from initial registration to long-term digital growth and tender acquisition.
            </p>
          </div>
          
          <!-- Graphic / Value drivers -->
          <div class="lg:col-span-5 bg-slate-50/60 border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-6">
            <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400">Core Capabilities</h4>
            <div class="space-y-5">
              <div v-for="(pillar, index) in drivePillars" :key="index" class="flex space-x-4">
                <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-orange-light border border-brand-orange/15 text-brand-orange shadow-2xs">
                  <component :is="pillar.icon" class="h-4 w-4" />
                </div>
                <div class="space-y-0.5">
                  <h5 class="text-sm font-bold text-slate-905 leading-none">{{ pillar.title }}</h5>
                  <p class="text-xs text-slate-500 font-semibold leading-relaxed">{{ pillar.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Blocks -->
    <section class="py-16 bg-slate-50/50 border-t border-b border-slate-100">
      <div class="mx-auto max-w-7xl px-6 sm:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xs space-y-4 hover:border-slate-200 transition-colors">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange-light border border-brand-orange/10 text-brand-orange shadow-2xs">
              <Target class="h-5 w-5" />
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-extrabold text-slate-905">Our Mission</h3>
              <p class="text-sm leading-relaxed text-slate-500 font-medium">
                To empower corporate clients, MSMEs, startups, and non-profits by matching them with optimized government funding channels, streamlining compliance certification overheads, and implementing robust IT architecture that promotes sustainable organizational scale.
              </p>
            </div>
          </div>

          <div class="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xs space-y-4 hover:border-slate-200 transition-colors">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-950 shadow-2xs">
              <Compass class="h-5 w-5" />
            </div>
            <div class="space-y-2">
              <h3 class="text-lg font-extrabold text-slate-905">Our Vision</h3>
              <p class="text-sm leading-relaxed text-slate-500 font-medium">
                To be recognized as India's leading single-window advisory consultancy for strategic corporate finance, absolute regulatory compliance, and scalable digital solutions, maintaining transparent corporate processes and an unmatched standard of service.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Section: Sectors We Serve (NEW CONTENT REPLACE timeline & leaders) -->
    <section class="py-24 lg:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 space-y-16">
        <div class="text-center space-y-4 max-w-2xl mx-auto">
          <span class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Industry Verticals</span>
          <h2 class="text-3xl font-extrabold text-slate-905 sm:text-4xl tracking-tight leading-tight">Sectors We Advise & Support</h2>
          <p class="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            We provide deep regulatory guidance and financial representation across key industry sectors, ensuring access to tailored grants and quality compliance systems.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="sector in sectors" :key="sector.title" class="p-6 rounded-3xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-[0_15px_30px_rgba(15,23,42,0.03)] transition-all duration-300 space-y-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
              <component :is="sector.icon" class="h-5 w-5" />
            </div>
            <div class="space-y-1.5">
              <h3 class="text-base font-extrabold text-slate-905 leading-snug">{{ sector.title }}</h3>
              <p class="text-xs text-slate-550 leading-relaxed font-semibold">{{ sector.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section: Our Engagement Methodology (NEW CONTENT REPLACE timeline & leaders) -->
    <section class="py-24 lg:py-32 bg-slate-50/50 border-t border-b border-slate-100">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 space-y-16">
        <div class="text-center space-y-4 max-w-2xl mx-auto">
          <span class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Our Framework</span>
          <h2 class="text-3xl font-extrabold text-slate-905 sm:text-4xl tracking-tight leading-tight">Advisory Engagement Process</h2>
          <p class="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            Our step-by-step engagement model guarantees absolute policy compliance and high success rates for banking credits and ISO registries.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div v-for="(method, i) in methodologies" :key="i" class="bg-white border border-slate-100 p-6 rounded-3xl space-y-4 shadow-2xs hover:border-brand-orange/20 transition-colors">
            <div class="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950 text-[10px] font-extrabold text-white">
              0{{ i + 1 }}
            </div>
            <div class="space-y-1">
              <h4 class="text-xs font-extrabold text-slate-905 uppercase tracking-wide leading-tight">{{ method.step }}</h4>
              <p class="text-[11px] text-slate-500 leading-normal font-semibold">{{ method.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Matrix -->
    <section class="py-20 lg:py-24 bg-white">
      <div class="mx-auto max-w-7xl px-6 sm:px-8 space-y-12">
        <div class="text-center space-y-3">
          <h2 class="text-xs font-extrabold uppercase tracking-widest text-brand-orange">Corporate Values</h2>
          <p class="text-3xl font-extrabold text-slate-905 tracking-tight">What We Stand For</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="val in values" :key="val.title" class="p-6 rounded-2xl border border-slate-100 bg-white shadow-2xs hover:border-slate-200 transition-colors space-y-4">
            <div class="h-9 w-9 rounded-xl bg-brand-orange-light border border-brand-orange/10 text-brand-orange flex items-center justify-center">
              <component :is="val.icon" class="h-4.5 w-4.5" />
            </div>
            <div class="space-y-1.5">
              <h4 class="text-sm font-bold text-slate-905">{{ val.title }}</h4>
              <p class="text-xs text-slate-500 font-semibold leading-relaxed">{{ val.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  Award,
  Globe,
  Gauge,
  Cpu,
  Zap,
  Building,
  Truck,
  HeartHandshake,
  Sprout
} from '@lucide/vue'

const drivePillars = [
  {
    icon: ShieldCheck,
    title: "Absolute Compliance",
    desc: "Every recommendation satisfies the latest notification protocols and state rules."
  },
  {
    icon: Globe,
    title: "Client-Centricity",
    desc: "Filing setups customized to your business goals and capital requirements."
  },
  {
    icon: Gauge,
    title: "Operational Velocity",
    desc: "Fast processing turnaround enabled by robust document pre-screening mechanisms."
  }
]

const values = [
  { icon: ShieldCheck, title: "Uncompromising Integrity", desc: "We commit to honest eligibility advice and transparent financial fee setups." },
  { icon: Users, title: "Absolute Professionalism", desc: "Timely delivery, precise documents, and dedicated coordinator support." },
  { icon: Award, title: "Excellence in Execution", desc: "Every project report and application is cross-reviewed by a Chartered Accountant." },
  { icon: Sparkles, title: "Innovative Solutions", desc: "Adopting modern IT and custom CRM automation options to simplify operational flows." }
]

// Sectors We Serve (REPLACES milestones and leadership)
const sectors = [
  {
    icon: Building,
    title: "MSME & Manufacturing",
    desc: "Assisting factories, assembly plants, and workshops in acquiring machinery loans, SIDBI funding, and ISO ratings."
  },
  {
    icon: Sprout,
    title: "Renewable Energy & Solar",
    desc: "Providing project finance support, subsidy filings, and compliance mappings for modern solar park installations."
  },
  {
    icon: Cpu,
    title: "IT & E-Commerce Startups",
    desc: "Drafting pitch decks, securing Startup India recognitions, filing GST schedules, and building secure ERP applications."
  },
  {
    icon: Truck,
    title: "Logistics & Infrastructure",
    desc: "Structuring CGTMSE security-free credits, trade license applications, and warehouse audit preparation pipelines."
  },
  {
    icon: Sprout,
    title: "Agri-Tech & Dairies",
    desc: "Liaisoning with NABARD and bank registers to secure animal husbandry and Gaushala dairy grant subsidies."
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Charitable Trusts",
    desc: "Processing 12A/80G tax certifications, CSR filings, donor compliance reporting, and trust registry setups."
  }
]

// Methodologies (REPLACES milestones and leadership)
const methodologies = [
  {
    step: "Discover",
    desc: "Verify company profile, parameters, and credentials during initial diagnostics."
  },
  {
    step: "Pre-Screen",
    desc: "Check documents against the latest central and state scheme guidelines."
  },
  {
    step: "Structure",
    desc: "Formulate detail reports, project summaries, and CA CMA file briefs."
  },
  {
    step: "Represent",
    desc: "Coordinate with portal liasons, bank managers, and inspectors directly."
  },
  {
    step: "Handover",
    desc: "Secure direct sanction codes, ISO credentials, or verified software outputs."
  }
]
</script>
