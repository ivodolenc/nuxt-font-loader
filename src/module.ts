import { defineNuxtModule } from '@nuxt/kit'
import { log } from 'logzy'
import { generateLocalHead } from './utils'
import type { NuxtModule } from '@nuxt/schema'
import type { ModuleOptions } from './types'

/**
 * Font Loader
 *
 * Simple, modern and lightweight font loader for Nuxt projects.
 *
 * @see [source](https://github.com/ivodolenc/nuxt-font-loader)
 */
const FontLoader: NuxtModule<ModuleOptions> = defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-font-loader',
    configKey: 'fontLoader',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  setup(options, nuxt) {
    const { local } = options

    if (!local) {
      const warnMessage = `> nuxt-font-loader — The module is enabled but not configured. Set new font sources via module options.`
      log(['magenta', 'bold'], warnMessage)
    }

    if (local) generateLocalHead(local, nuxt)
  }
})

export default FontLoader
