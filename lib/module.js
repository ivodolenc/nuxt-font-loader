import { resolve } from 'path'
import pkg from '../package.json'

export default function fontLoader(moduleOptions) {
  const { nuxt, addPlugin } = this
  const options = {
    url: {
      local: undefined,
      google: undefined,
      custom: undefined
    },
    prefetch: false,
    preconnect: false,
    preload: {},
    noscript: {},
    stylesheet: true,

    ...nuxt.options.fontLoader,
    ...moduleOptions
  }

  const optionUrl = typeof options.url === 'string'

  if (
    !optionUrl &&
    !options.url.local &&
    !options.url.google &&
    !options.url.custom
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'fontLoader: You are not loading any fonts. Set a new "url" to start loading fonts. For more info, see the official docs.'
    )

    return
  }

  nuxt.hook('build:before', () => {
    if (optionUrl) {
      if (options.prefetch) {
        nuxt.options.head.link.push({
          hid: 'font-prefetch',
          rel: 'dns-prefetch',
          href: 'https://fonts.gstatic.com/',
          ...options.prefetch
        })
      }

      if (options.preconnect) {
        nuxt.options.head.link.push({
          hid: 'font-preconnect',
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com/',
          crossorigin: '',
          ...options.preconnect
        })
      }

      if (options.preload) {
        nuxt.options.head.link.push({
          hid: 'font-preload',
          rel: 'preload',
          as: 'style',
          href: options.url,
          ...options.preload
        })
      }

      if (options.noscript) {
        nuxt.options.head.noscript = nuxt.options.head.noscript || []

        nuxt.options.head.noscript.push({
          hid: 'font-noscript',
          innerHTML: `<link rel="stylesheet" href="${options.url}">`,
          ...options.noscript
        })

        const hidNoscript =
          options.noscript.hid === undefined
            ? 'font-noscript'
            : options.noscript.hid

        nuxt.options.head.__dangerouslyDisableSanitizersByTagID =
          nuxt.options.head.__dangerouslyDisableSanitizersByTagID || {}

        nuxt.options.head.__dangerouslyDisableSanitizersByTagID[hidNoscript] = [
          'innerHTML'
        ]
      }
    }

    if (options.url.local) {
      if (options.preload.local || options.preload.local === undefined) {
        nuxt.options.head.link.push({
          hid: 'local-font-preload',
          rel: 'preload',
          as: 'style',
          href: options.url.local,
          ...options.preload.local
        })
      }

      if (options.noscript.local || options.noscript.local === undefined) {
        options.noscript.local = { ...options.noscript.local }

        nuxt.options.head.noscript = nuxt.options.head.noscript || []

        nuxt.options.head.noscript.push({
          hid: 'local-font-noscript',
          innerHTML: `<link rel="stylesheet" href="${options.url.local}">`,
          ...options.noscript.local
        })

        const hidLocalNoscript =
          options.noscript.local.hid === undefined
            ? 'local-font-noscript'
            : options.noscript.local.hid

        nuxt.options.head.__dangerouslyDisableSanitizersByTagID =
          nuxt.options.head.__dangerouslyDisableSanitizersByTagID || {}

        nuxt.options.head.__dangerouslyDisableSanitizersByTagID[
          hidLocalNoscript
        ] = ['innerHTML']
      }
    }

    if (options.url.google) {
      if (options.prefetch.google || options.prefetch.google === undefined) {
        nuxt.options.head.link.push({
          hid: 'google-font-prefetch',
          rel: 'dns-prefetch',
          href: 'https://fonts.gstatic.com/',
          ...options.prefetch.google
        })
      }

      if (
        options.preconnect.google ||
        options.preconnect.google === undefined
      ) {
        nuxt.options.head.link.push({
          hid: 'google-font-preconnect',
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com/',
          crossorigin: '',
          ...options.preconnect.google
        })
      }

      if (options.preload.google || options.preload.google === undefined) {
        nuxt.options.head.link.push({
          hid: 'google-font-preload',
          rel: 'preload',
          as: 'style',
          href: options.url.google,
          ...options.preload.google
        })
      }

      if (options.noscript.google || options.noscript.google === undefined) {
        options.noscript.google = { ...options.noscript.google }

        nuxt.options.head.noscript = nuxt.options.head.noscript || []

        nuxt.options.head.noscript.push({
          hid: 'google-font-noscript',
          innerHTML: `<link rel="stylesheet" href="${options.url.google}">`,
          ...options.noscript.google
        })

        const hidGoogleNoscript =
          options.noscript.google.hid === undefined
            ? 'google-font-noscript'
            : options.noscript.google.hid

        nuxt.options.head.__dangerouslyDisableSanitizersByTagID =
          nuxt.options.head.__dangerouslyDisableSanitizersByTagID || {}

        nuxt.options.head.__dangerouslyDisableSanitizersByTagID[
          hidGoogleNoscript
        ] = ['innerHTML']
      }
    }

    if (options.url.custom) {
      if (options.prefetch.custom || options.prefetch.custom === undefined) {
        nuxt.options.head.link.push({
          hid: 'custom-font-prefetch',
          rel: 'dns-prefetch',
          href: 'https://use.typekit.net/',
          ...options.prefetch.custom
        })
      }

      if (
        options.preconnect.custom ||
        options.preconnect.custom === undefined
      ) {
        nuxt.options.head.link.push({
          hid: 'custom-font-preconnect',
          rel: 'preconnect',
          href: 'https://use.typekit.net/',
          crossorigin: '',
          ...options.preconnect.custom
        })
      }

      if (options.preload.custom || options.preload.custom === undefined) {
        nuxt.options.head.link.push({
          hid: 'custom-font-preload',
          rel: 'preload',
          as: 'style',
          href: options.url.custom,
          ...options.preload.custom
        })
      }

      if (options.noscript.custom || options.noscript.custom === undefined) {
        options.noscript.custom = { ...options.noscript.custom }

        nuxt.options.head.noscript = nuxt.options.head.noscript || []

        nuxt.options.head.noscript.push({
          hid: 'custom-font-noscript',
          innerHTML: `<link rel="stylesheet" href="${options.url.custom}">`,
          ...options.noscript.custom
        })

        const hidCustomNoscript =
          options.noscript.custom.hid === undefined
            ? 'custom-font-noscript'
            : options.noscript.custom.hid

        nuxt.options.head.__dangerouslyDisableSanitizersByTagID =
          nuxt.options.head.__dangerouslyDisableSanitizersByTagID || {}

        nuxt.options.head.__dangerouslyDisableSanitizersByTagID[
          hidCustomNoscript
        ] = ['innerHTML']
      }
    }
  })

  if (options.stylesheet) {
    addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      ssr: false,
      fileName: 'fontLoader.js',
      options
    })
  }
}

export { pkg as meta }
