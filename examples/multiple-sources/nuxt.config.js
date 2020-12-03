export default {
  css: ['~/assets/css/main.css'],

  buildModules: ['nuxt-font-loader'],

  fontLoader: {
    /*
     ** Automatically sets the best settings based on your url option
     */
    url: {
      local: '/fonts/font-face.css',
      google:
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
      custom: 'https://use.typekit.net/xxxxxxx.css'
    }

    /*
     ** Use these methods only if you want to customize the 'default' settings
     ** The settings below are OPTIONAL and can be customized as needed

    prefetch: {
      google: {
        hid: 'my-font-prefetch'
      }
    },
    preconnect: {
      google: {
        hid: 'my-font-preconnect',
        crossorigin: 'anonymous'
      },
      custom: {
        hid: 'custom-preconnect'
      }
    },
    preload: {
      local: {
        hid: 'my-local-font-preload'
      }
    },
    noscript: {
      local: {
        hid: 'local-noscript'
      },
      google: {
        hid: 'my-google-font-noscript'
      }
    }
    
    */
  }
}
