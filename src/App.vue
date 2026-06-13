<template>
  <div class="flex min-h-screen flex-col bg-white text-slate-800 font-sans">
    <Navbar />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
    
    <!-- Contact Floating Menu (WhatsApp & Instagram) -->
    <ContactFloatingMenu />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ContactFloatingMenu from './components/ContactFloatingMenu.vue'
</script>

<style>
/* Any global rules can be set here if needed, but styling is loaded from style.css */
</style>
