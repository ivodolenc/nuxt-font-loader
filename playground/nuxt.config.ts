import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  telemetry: false,
  components: false,
  imports: {
    autoImport: false
  },

  modules: ['../src/module'],

  fontLoader: {
    local: [
      {
        src: '/fonts/AspektaVF.woff2',
        family: 'Aspekta Variable',
        weight: '100 900',
        class: 'font-aspekta'
      }
    ]
  }
})
