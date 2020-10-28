import { resolve } from 'path'
import pkg from '../package.json'

export default function (moduleOptions) {
  this.nuxt.hook('build:before', () => {
    const options = {
      url: null,
      prefetch: false,
      preconnect: false,
      preload: true,
      stylesheet: true,
      noscript: true,

      ...this.options['font-loader'],
      ...this.options.fontLoader,
      ...moduleOptions
    }

    if (!options.url) {
      // eslint-disable-next-line no-console
      console.warn('No url defined. Set a new url in fontLoader options.')

      return
    }

    if (options.prefetch) {
      this.options.head.link.push({
        hid: 'font-prefetch',
        rel: 'dns-prefetch',
        href: 'https://fonts.gstatic.com/',
        ...options.prefetch
      })
    }

    if (options.preconnect) {
      this.options.head.link.push({
        hid: 'font-preconnect',
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
        crossorigin: '',
        ...options.preconnect
      })
    }

    if (options.preload) {
      this.options.head.link.push({
        hid: 'font-preload',
        rel: 'preload',
        as: 'style',
        href: options.url,
        ...options.preload
      })
    }

    if (options.stylesheet) {
      this.addPlugin({
        src: resolve(__dirname, 'plugin.js'),
        ssr: false,
        fileName: 'fontLoader.js',
        options
      })
    }

    if (options.noscript) {
      this.options.head.noscript = this.options.head.noscript || []

      this.options.head.noscript.push({
        hid: 'font-noscript',
        innerHTML: `<link rel="stylesheet" href="${options.url}">`,
        ...options.noscript
      })

      const hidNoscript =
        options.noscript.hid === undefined
          ? 'font-noscript'
          : options.noscript.hid

      this.options.head.__dangerouslyDisableSanitizersByTagID =
        this.options.head.__dangerouslyDisableSanitizersByTagID || {}
      this.options.head.__dangerouslyDisableSanitizersByTagID[hidNoscript] = [
        'innerHTML'
      ]
    }
  })
}

export { pkg as meta }
