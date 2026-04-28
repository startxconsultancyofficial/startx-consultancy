<script setup>
import logo from '/public/start-x_logo.png'

import {
  ArrowLeft,
  SearchX,
  Home,
} from 'lucide-vue-next'
</script>

<template>
  <div
    class="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-10 bg-[radial-gradient(circle_at_top_left,_#1e293b_0%,_#0f172a_45%,_#020617_100%)]"
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

    <!-- Content -->
    <div class="relative z-10 text-center max-w-2xl">

      <!-- Logo -->
      <div class="flex justify-center mb-10">
        <img
          :src="logo"
          alt="StartX Consultancy"
          class="w-48 sm:w-56 object-contain"
        />
      </div>

      <!-- Icon -->
      <div
        class="mx-auto mb-8 h-24 w-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl"
      >
        <SearchX class="w-12 h-12 text-orange-500" />
      </div>

      <!-- 404 -->
      <h1
        class="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white leading-none"
      >
        404
      </h1>

      <!-- Heading -->
      <h2
        class="mt-6 text-2xl sm:text-3xl font-bold text-white"
      >
        Page Not Found
      </h2>

      <!-- Description -->
      <p
        class="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
      >
        The page you are looking for does not exist,
        may have been moved, or is temporarily unavailable.
      </p>

      <!-- Buttons -->
      <div
        class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <!-- Home -->
        <a
          href="/"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-orange-500/30"
        >
          <Home class="w-4 h-4" />
          Back to Home
        </a>

        <!-- Back -->
        <button
          onclick="history.back()"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all duration-300 backdrop-blur-xl"
        >
          <ArrowLeft class="w-4 h-4" />
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>