export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/pwa-test/',
    middleware: ['remember']
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://avigohealth.com/albarka-test'
    //baseUrl: process.env.BASE_URL || 'http://localhost:8000'
  },

  

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Albarka',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/pwa-update.js', mode: 'client' },
    { src: '~/plugins/vue-datepicker', mode: 'client' },
    { src: '~/plugins/Vuelidate', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'bootstrap-vue/nuxt',
    //'@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    'vue-sweetalert2/nuxt',
    
  ],
 

  
    auth: {
      strategies: {
        laravelSanctum: {
          provider: 'laravel/sanctum',
          //url: 'http://localhost:8000',
          url: 'https://avigohealth.com/albarka-test',
          endpoints: {
            login : {
              url: '/api/login'
            },
            logout: {
              url: '/api/logout'
          },
          user: {
              url: '/api/user'
          }
        },
          },

          facebook: {
            endpoints: {
              userInfo: 'https://graph.facebook.com/v6.0/me?fields=id,name,email,picture{url}',
            },
            //redirectUri:'https://avigohealth.com/pwa2/callback',
            //redirectUri:'http://localhost:3000/pwa2/callback',
            clientId: '803314751083295',
            scope: ['public_profile', 'email'],
          },

        },
        redirect: {
          login: '/login',
          logout: '/',
          home: '/profile',
      },
      cookie: {
        prefix: 'auth.',
        options: {
          secure: process.env.NODE_ENV === 'production'
        }
      }
      
    },
  // auth: {
  //   strategies: {
  //     local:{
  //       token: {
  //         property: 'token',
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //     user: {
  //       property: "data"
  //     },
  //     endpoints: {
  //       login: {url: "/login", method: "post"},
  //       logout: {url: "/logout", method: "post"},
  //       user: {url: "/user", method: "get"},
  //       //provider: 'laravel/sanctum',
  //       //url: 'http://albarka-api.test'
  //     },
      
  //     }
  //   }
  // },
  axios: {
    baseUrl : 'https://avigohealth.com/albarka-test',
    //baseUrl : 'http://localhost:8000',
    proxy: true,
    credentials: true
  },
  proxy: {
    '/laravel': {
      target: 'https://avigohealth.com/albarka-test',
      //target: 'http://localhost:8000',
      pathRewrite: { '^/laravel': '/' },
    }
  },
  
  // proxy: {
  //   //'/api': 'http://35.178.125.50/twilio/',
  //   '/api': {
  //     target: process.server ? 'http://localhost:3000' : 'https://avigohealth.com/twilio/',
  //     changeOrigin: true,
  //   },
  // },
  
  pwa: {
    icon: true, // disables the icon module
    manifest: {
      name: 'Albarka',
      short_name: 'Albarka',
      lang: 'en',
      display: 'standalone',
    }
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    '~/api/index.js'
  ],
}
