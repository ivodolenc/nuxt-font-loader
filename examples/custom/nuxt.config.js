export default {
  css: ['~/assets/css/main.css'],

  buildModules: ['nuxt-font-loader'],

  fontLoader: {
    // Paste a new custom link here (for example Typekit)
    url: 'https://use.typekit.net/xxxxxxx.css',

    // Enable options
    prefetch: true,
    preconnect: true
  }
}
