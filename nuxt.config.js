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
    title: 'Sigean — hyr hus i fransk medeltidsstad',
    meta: [
        { charset: 'utf-8' },
        { 
            name: 'viewport', 
            content: 'width=device-width, initial-scale=1'
        },
        { 
            hid: 'description', 
            name: 'description', 
            content: pkg.description 
        },
        {
            hid: 'og:title',
            property: 'og:title',
            content: 'Sigean — hyr hus i fransk medeltidsstad'
        },
        {
            hid: 'og:url',
            property: 'og:url',
            content: 'http://sigean.nu'
        },
        {
            hid: 'og:image',
            property: 'og:image',
            content: 'http://sigean.nu/ogimg.jpg'
        },
        {
            hid: 'og:description',
            property: 'og:description',
            content: pkg.description
        },
        {
            hid: 'fb:app_id',
            property: 'fb:app_id',
            content: '304249350471096'
        },
        {
            hid: 'og:image:width',
            property: 'og:image:width',
            content: '2000'
        },
        {
            hid: 'og:image:height',
            property: 'og:image:height',
            content: '1095'
        },
        {
            hid: 'og:type',
            property: 'og:type',
            content: 'website'
        },
        {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: 'Utsikt över takåsar'
        }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#cc6b27' },

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
