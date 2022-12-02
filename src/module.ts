import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'
import { generateStyles } from './runtime/utils/generateStyles'
import type { ModuleOptions } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-font-loader',
    configKey: 'fontLoader',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  defaults: {
    autoImport: false
  },

  setup(options, nuxt) {
    const { local, external, autoImport } = options
    const head = nuxt.options.app.head

    if (autoImport) {
      const { resolve } = createResolver(import.meta.url)
      nuxt.options.build.transpile.push(resolve('./runtime'))

      const composables = resolve('./runtime/composables')

      addImports([
        {
          name: 'useLocalFont',
          from: composables
        },
        {
          name: 'useExternalFont',
          from: composables
        }
      ])
    }

    if (local) {
      const { fontFace, classes, root, format } = generateStyles(local)
      const styles = `${fontFace}${classes}${root}`

      for (const font of local) {
        head.link?.push({
          rel: 'preload',
          as: 'font',
          crossorigin: 'anonymous',
          type: `font/${format}`,
          href: font.src
        })
      }

      head.style?.push({ children: styles })
    }

    if (external) {
      const { classes, root } = generateStyles(external)
      const styles = `${classes}${root}`

      let google = false
      let typekit = false

      for (const font of external) {
        if (font.src.includes('google') && !google) {
          google = true

          head.link?.push(
            {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com'
            },
            {
              rel: 'preconnect',
              crossorigin: 'anonymous',
              href: 'https://fonts.gstatic.com'
            }
          )
        }

        if (font.src.includes('typekit') && !typekit) {
          typekit = true

          head.link?.push({
            rel: 'preconnect',
            crossorigin: 'anonymous',
            href: 'https://use.typekit.net'
          })
        }

        head.link?.push(
          {
            rel: 'preload',
            as: 'style',
            href: font.src
          },
          {
            rel: 'stylesheet',
            href: font.src
          }
        )
      }

      if (styles) head.style?.push({ children: styles })
    }
  }
})
