export default {
  css: ['~/assets/css/main.css'],

  buildModules: ['nuxt-font-loader'],

  fontLoader: {
    // Paste a google link here
    url:
      'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',

    // Enable options
    prefetch: true,
    preconnect: true
  }
}
