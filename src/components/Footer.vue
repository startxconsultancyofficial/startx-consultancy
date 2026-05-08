<script setup>
import { RouterLink } from 'vue-router'
import { navigation, contactDetails } from '../data/content'

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone
} from 'lucide-vue-next'
</script>

<template>
  <footer
    class="bg-[var(--color-brand-gray)] border-t border-gray-800 mt-20"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>

    <div
      class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-20 lg:px-8"
    >

      <!-- MAIN GRID -->
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 items-start"
      >

        <!-- LEFT SECTION -->
        <div class="flex flex-col justify-start">

          <!-- LOGO -->
          <RouterLink
            to="/"
            class="inline-flex items-center "
          >
            <img
              src="/start-x_logo.png"
              alt="StartX Consultancy Logo"
              class="h-28 w-auto object-contain -ml-11"
            />
          </RouterLink>

          <!-- DESCRIPTION -->
          <p
            class="mt-2 text-base leading-8 text-gray-400 max-w-md"
          >
            From registration to investor pitch,
            we simplify everything. Grow with us.
          </p>

          <!-- SOCIAL ICONS -->
          <div
            class="flex items-center gap-5 mt-5"
          >

            <!-- Instagram -->
            <a
              href="#"
              class="text-gray-500 hover:text-[var(--color-brand-orange)] transition-colors duration-300"
            >
              <span class="sr-only">
                Instagram
              </span>

              <Instagram class="h-6 w-6" />
            </a>

            <!-- Facebook -->
            <a
              href="#"
              class="text-gray-500 hover:text-[var(--color-brand-orange)] transition-colors duration-300"
            >
              <span class="sr-only">
                Facebook
              </span>

              <Facebook class="h-6 w-6" />
            </a>

            <!-- YouTube -->
            <a
              href="#"
              class="text-gray-500 hover:text-[var(--color-brand-orange)] transition-colors duration-300"
            >
              <span class="sr-only">
                YouTube
              </span>

              <Youtube class="h-6 w-6" />
            </a>

            <!-- LinkedIn -->
            <a
              href="#"
              class="text-gray-500 hover:text-[var(--color-brand-orange)] transition-colors duration-300"
            >
              <span class="sr-only">
                LinkedIn
              </span>

              <Linkedin class="h-6 w-6" />
            </a>

          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:col-span-2"
        >

          <!-- QUICK LINKS -->
          <div class="flex flex-col">

            <h3
              class="text-sm font-bold tracking-widest text-white uppercase"
            >
              Quick Links
            </h3>

            <ul
              role="list"
              class="mt-6 space-y-4"
            >

              <li
                v-for="item in navigation"
                :key="item.name"
              >
                <RouterLink
                  :to="item.path"
                  class="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {{ item.name }}
                </RouterLink>
              </li>

            </ul>
          </div>

          <!-- CONTACT INFO -->
          <div class="flex flex-col">

            <h3
              class="text-sm font-bold tracking-widest text-white uppercase"
            >
              Contact Info
            </h3>

            <ul
              role="list"
              class="mt-6 space-y-5"
            >

              <!-- ADDRESS -->
              <li
                class="flex items-start gap-4"
              >

                <MapPin
                  class="h-5 w-5 text-[var(--color-brand-orange)] shrink-0 mt-1"
                />

                <div>

                  <p
                    class="text-base font-semibold text-gray-200"
                  >
                    {{ contactDetails.headquarters.title }}
                  </p>

                  <p
                    class="mt-2 text-sm leading-7 text-gray-400"
                  >
                    {{ contactDetails.headquarters.address }}
                  </p>

                </div>

              </li>

              <!-- PHONE -->
              <li
                class="flex items-center gap-4"
              >

                <Phone
                  class="h-5 w-5 text-[var(--color-brand-orange)] shrink-0"
                />

                <a
                  :href="'tel:' + contactDetails.inquiryPhone"
                  class="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {{ contactDetails.inquiryPhone }}
                </a>

              </li>

              <!-- EMAIL -->
              <li
                class="flex items-center gap-4"
              >

                <Mail
                  class="h-5 w-5 text-[var(--color-brand-orange)] shrink-0"
                />

                <a
                  :href="'mailto:' + contactDetails.email"
                  class="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {{ contactDetails.email }}
                </a>

              </li>

            </ul>
          </div>

        </div>
      </div>

      <!-- BOTTOM FOOTER -->
      <div
        class="mt-14 border-t border-gray-800 pt-7 flex flex-col md:flex-row items-center justify-between gap-4"
      >

        <!-- COPYRIGHT -->
        <p
          class="text-xs text-gray-500 text-center md:text-left"
        >
          © {{ new Date().getFullYear() }}
          StartX Consultancy.
          All rights reserved.
        </p>

        <!-- FOOTER LINKS -->
        <div
          class="flex items-center gap-6 text-xs text-gray-500"
        >

          <a
            href="#"
            class="hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            class="hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </a>

        </div>

      </div>

    </div>
  </footer>
</template>