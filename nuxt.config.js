
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme_color', content: "#277c3b" }
    ]
    ,
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icon.png'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading-page.vue',
  /*
  ** Global CSS
  */
  css: [
    //Aqui se encuentran las fuentes que se usaron en el proyecto
    "~/assets/fonts/roboto.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/jquery-3.4.1.min.js', ssr: false },
    { src: '~/plugins/jquery.validate.min.js', ssr: false },
    { src: '~/plugins/bootstrap.min.js', ssr: false },
    { src: '~/plugins/additional-methods.min.js', ssr: false }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    ['@nuxtjs/html-minifier', { log: 'always', logHtml: true }],
    [
      'nuxt-netlify-http2-server-push',
      {
        // Specify relative path to the dist directory and its content type
        resources: [
          { path: '/_nuxt/*.js', as: 'script' },
          // { path: 'images/hero.jpg', as: 'image' },
          // { path: 'images/bg-image-narrow.png', as: 'image'}
        ]
      }
    ]
  ],

  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ],

  workbox: {
    importScripts: [
      '/custom-sw.js'
    ],
    offlineStrategy:"CacheFirst"
  },

  manifest: {
    name: 'SIE ITVH',
    short_name:"SIE ITVH",
    lang: 'es',
    theme_color: "#277c3b",
    description:"Aplicacion del SIE ITVH",
    start_url: "http://localhost:3000"
  },

  styleResources: {
    scss: [
      //Archivo scss con estilos usados en el proyecto
      'assets/scss/index.scss'
    ]
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, {isServer}) {

    }
  }
}
