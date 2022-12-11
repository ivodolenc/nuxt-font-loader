import { defineNuxtConfig } from 'nuxt/config'
import Module from '../src/module'

export default defineNuxtConfig({
  telemetry: false,
  components: false,
  imports: {
    autoImport: false
  },

  modules: [Module],

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
