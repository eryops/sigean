import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'sv'
    },
    title: 'Hyr hus i Sigean',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
    '~plugins/vue-scrollto.js'
  ],

  /*
  ** Nuxt.js modules
  */
 modules: [
   'bootstrap-vue/nuxt'
  ],
 bootstrapVue: {
   bootstrapCSS: false, // or `css`
   bootstrapVueCSS: false // or `bvCSS`
 },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
