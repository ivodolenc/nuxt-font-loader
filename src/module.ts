import { defineNuxtModule } from '@nuxt/kit'
import { log } from 'logzy'
import { generateLocalHead, generateExternalHead } from './utils'
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-font-loader',
    configKey: 'fontLoader',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  defaults: {
    logs: true
  },

  setup(options, nuxt) {
    const { local, external, logs } = options

    if (!local && !external && logs) {
      const warnMessage = `> nuxt-font-loader — The module is enabled but not configured. Set new font sources via module options.`
      log(['magenta', 'bold'], warnMessage)
    }

    if (local) generateLocalHead(local, nuxt)

    if (external) generateExternalHead(external, nuxt)
  }
})
