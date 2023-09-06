import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'
import { generateStyles, parseFormat } from './runtime/utils'
import type { ModuleOptions } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-font-loader',
    configKey: 'fontLoader',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },

  defaults: {
    autoImport: false,
  },

  setup(options, nuxt) {
    const { local, external, autoImport } = options
    const head = nuxt.options.app.head

    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    const composables = resolve('./runtime/composables')
    nuxt.options.alias['#font-loader'] = composables

    if (autoImport) {
      addImports([
        { name: 'useLocalFont', from: composables },
        { name: 'useExternalFont', from: composables },
      ])
    }

    if (local) {
      const { fontFace, classes, root } = generateStyles(local)
      const styles = `${fontFace}${classes}${root}`

      for (const font of local) {
        const options = {
          preload: true,
          ...font,
        }

        if (options.preload) {
          const { src } = options
          const format = parseFormat(src)

          // eslint-disable-next-line
          if (!head.link?.some((v: any) => v.href === src)) {
            head.link?.push({
              rel: 'preload',
              as: 'font',
              type: `font/${format}`,
              crossorigin: 'anonymous',
              href: src,
            })
          }
        }
      }

      head.style?.push({ children: styles })
    }

    if (external) {
      const { classes, root } = generateStyles(external)
      const styles = `${classes}${root}`

      let google = false
      let typekit = false

      for (const font of external) {
        const { src } = font

        if (src.includes('google') && !google) {
          google = true

          head.link?.push(
            {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com',
            },
            {
              rel: 'preconnect',
              crossorigin: 'anonymous',
              href: 'https://fonts.gstatic.com',
            },
          )
        }

        if (src.includes('typekit') && !typekit) {
          typekit = true

          head.link?.push({
            rel: 'preconnect',
            crossorigin: 'anonymous',
            href: 'https://use.typekit.net',
          })
        }

        head.link?.push(
          {
            rel: 'preload',
            as: 'style',
            href: src,
          },
          {
            rel: 'stylesheet',
            href: src,
          },
        )
      }

      if (styles) head.style?.push({ children: styles })
    }
  },
})
