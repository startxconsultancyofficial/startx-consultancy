<script setup>
import logo from '/public/start-x_logo.png'
import wp from '/public/wp.png'
import {
  MapPin,
  Mail,
  Phone,
  Clock3,
  QrCode,
} from 'lucide-vue-next'
</script>

<template>
  <div
    class="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 bg-[radial-gradient(circle_at_top_left,_#1e293b_0%,_#0f172a_45%,_#020617_100%)]"
  >
    <!-- Premium Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">

      <!-- Orange Glow -->
      <div
        class="absolute -top-32 -left-24 w-[420px] h-[420px] bg-orange-500/20 rounded-full blur-3xl animate-pulse"
      />

      <!-- Blue Glow -->
      <div
        class="absolute bottom-[-180px] right-[-120px] w-[520px] h-[520px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
      />

      <!-- Center Glow -->
      <div
        class="absolute top-[35%] left-[40%] w-[280px] h-[280px] bg-orange-400/10 rounded-full blur-3xl"
      />

      <!-- Grid -->
      <div
        class="absolute inset-0 opacity-[0.05]"
        style="
          background-image:
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 60px 60px;
        "
      />
    </div>

    <!-- Main Card -->
    <div
      class="relative z-10 w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.15)] rounded-[28px] overflow-hidden"
    >
      <div class="grid lg:grid-cols-2">

        <!-- Left Section -->
        <div class="p-6 lg:p-8 flex flex-col justify-center">

          <!-- Logo -->
          <div class="mb-5">
            <img
              :src="logo"
              alt="StartX Consultancy"
              class="w-full object-contain"
            />
          </div>

          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold w-fit"
          >
            <Clock3 class="w-4 h-4" />
            Website Maintenance
          </div>

          <!-- Heading -->
          <div class="space-y-4 mt-5">
            <h1
              class="text-3xl lg:text-4xl font-black leading-tight tracking-tight text-slate-900"
            >
              We’re Improving
              <span class="text-orange-500 block">
                Your Experience
              </span>
            </h1>

            <p class="text-slate-600 text-base leading-relaxed">
              Our website is currently undergoing scheduled maintenance and
              upgrades. We’ll be back shortly with an improved digital experience.
            </p>
          </div>

          <!-- Loading -->
          <div class="mt-7">
            <div
              class="h-2 w-full bg-slate-200 rounded-full overflow-hidden"
            >
              <div class="premium-loader h-full rounded-full"></div>
            </div>

            <p
              class="mt-2 text-xs text-slate-500 tracking-wide font-medium"
            >
              Preparing updated services...
            </p>
          </div>

          <!-- Contact -->
          <div class="mt-8 space-y-4">

            <!-- Address -->
            <div class="flex items-start gap-4">
              <div
                class="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0"
              >
                <MapPin class="w-5 h-5" />
              </div>

              <div>
                <p class="font-semibold text-slate-900 text-sm">
                  Office Address
                </p>

                <p class="text-slate-600 leading-relaxed text-sm">
                  SG Business Hub Near Vasant Nagar Township<br />
                  Gota, Ahmedabad - 380060
                </p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-center gap-4">
              <div
                class="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0"
              >
                <Mail class="w-5 h-5" />
              </div>

              <div>
                <p class="font-semibold text-slate-900 text-sm">
                  Email
                </p>

                <a
                  href="mailto:info@startx-consultancy.com"
                  class="text-slate-600 hover:text-orange-500 transition text-sm"
                >
                  info@startx-consultancy.com
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-center gap-4">
              <div
                class="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0"
              >
                <Phone class="w-5 h-5" />
              </div>

              <div>
                <p class="font-semibold text-slate-900 text-sm">
                  Phone
                </p>

                <a
                  href="tel:+919998171401"
                  class="text-slate-600 hover:text-orange-500 transition text-sm"
                >
                  +91 9998171401
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section -->
        <div
          class="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 lg:p-8 flex flex-col justify-center items-center relative"
        >
          <!-- Glow -->
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.2),transparent_40%)]"
          />

          <div class="relative z-10 text-center">

            <!-- Badge -->
            <div
              class="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm mb-5"
            >
              <QrCode class="w-4 h-4" />
              WhatsApp Support
            </div>

            <!-- QR -->
            <div
              class="bg-white rounded-2xl p-1 shadow-2xl inline-block"
            >
              <img
                :src="wp"
                alt="WhatsApp QR"
                class="w-40 h-40 object-contain"
              />
            </div>

            <!-- Text -->
            <div class="mt-6 space-y-2">
              <h2 class="text-xl font-bold">
                Scan to Contact Us
              </h2>

              <p class="text-slate-300 leading-relaxed max-w-xs text-sm mx-auto">
                Connect instantly with StartX Consultancy on WhatsApp
                for support and inquiries.
              </p>

              <!-- Button -->
                <a
                href="https://wa.me/message/AZUXQRMHLSNXM1"
                target="_blank"
                class="inline-flex items-center justify-center mt-4 px-5 py-2.5 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 font-semibold shadow-lg shadow-orange-500/30 text-sm"
                >
                Chat on WhatsApp
                </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        class="border-t border-slate-200 px-6 py-3 text-center text-xs text-slate-500 bg-white/70"
      >
        © 2026 StartX Consultancy. All rights reserved.
      </div>
    </div>
  </div>
</template>

<style scoped>
.premium-loader {
  width: 35%;

  background: linear-gradient(
    90deg,
    #f97316,
    #fb923c,
    #fdba74
  );

  animation: smoothLoad 2s ease-in-out infinite;
}

@keyframes smoothLoad {
  0% {
    transform: translateX(-120%);
  }

  50% {
    transform: translateX(180%);
  }

  100% {
    transform: translateX(320%);
  }
}
</style>