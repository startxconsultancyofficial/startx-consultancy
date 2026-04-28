<script setup>
import { RouterLink } from 'vue-router'
import { navigation, contactDetails } from '../data/content'
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-[var(--color-brand-gray)] border-t border-gray-800 mt-20" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <RouterLink to="/" class="flex items-center gap-2">
            <span class="text-2xl font-black tracking-tighter text-white">
              st<span class="text-[var(--color-brand-orange)] font-bold font-serif text-3xl">A</span>rtX
            </span>
            <span class="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-1">Consultancy</span>
          </RouterLink>
          <p class="text-sm leading-6 text-gray-400 max-w-xs">
            From registration to investor pitch, we simplify everything. Grow with us.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-500 hover:text-[var(--color-brand-orange)]">
              <span class="sr-only">Instagram</span>
              <Instagram class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-[var(--color-brand-orange)]">
              <span class="sr-only">Facebook</span>
              <Facebook class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-[var(--color-brand-orange)]">
              <span class="sr-only">YouTube</span>
              <Youtube class="h-6 w-6" />
            </a>
            <a href="#" class="text-gray-500 hover:text-[var(--color-brand-orange)]">
              <span class="sr-only">LinkedIn</span>
              <Linkedin class="h-6 w-6" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Quick Links</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navigation" :key="item.name">
                  <RouterLink :to="item.path" class="text-sm leading-6 text-gray-400 hover:text-white transition-colors">
                    {{ item.name }}
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-1 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold leading-6 text-white">Contact Info</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex items-start gap-3">
                  <MapPin class="h-5 w-5 text-[var(--color-brand-orange)] shrink-0 mt-0.5" />
                  <div>
                    <p class="text-sm font-medium text-gray-300">{{ contactDetails.headquarters.title }}</p>
                    <p class="text-sm text-gray-400 mt-1">{{ contactDetails.headquarters.address }}</p>
                  </div>
                </li>
                <li class="flex items-center gap-3">
                  <Phone class="h-5 w-5 text-[var(--color-brand-orange)] shrink-0" />
                  <a :href="'tel:' + contactDetails.inquiryPhone" class="text-sm text-gray-400 hover:text-white">{{ contactDetails.inquiryPhone }}</a>
                </li>
                <li class="flex items-center gap-3">
                  <Mail class="h-5 w-5 text-[var(--color-brand-orange)] shrink-0" />
                  <a :href="'mailto:' + contactDetails.email" class="text-sm text-gray-400 hover:text-white">{{ contactDetails.email }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center">
        <p class="text-xs leading-5 text-gray-500">
          &copy; {{ new Date().getFullYear() }} Startx Consultancy. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0 text-xs text-gray-500">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
</template>
