import { defineNuxtConfig } from 'nuxt/config'
import Module from '../src/module'

export default defineNuxtConfig({
  telemetry: false,

  modules: [Module],

  fontLoader: {
    local: [
      {
        src: '/fonts/AspektaPRO-VF.woff2',
        family: 'AspektaPRO-VF',
        weight: '100 900',
      },
    ],
  },
})
