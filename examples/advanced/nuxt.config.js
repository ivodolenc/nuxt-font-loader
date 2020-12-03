export default {
  css: ['~/assets/css/main.css'],

  buildModules: ['nuxt-font-loader'],

  fontLoader: {
    url:
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',

    /*
     ** The settings below are OPTIONAL and can be customized as needed
     */
    prefetch: {
      hid: 'my-font-prefetch'
    },
    preconnect: {
      hid: 'my-font-preconnect',
      crossorigin: 'anonymous'
    },
    preload: {
      hid: 'my-font-preload'
    },
    noscript: {
      hid: 'my-font-noscript'
    }
  }
}
