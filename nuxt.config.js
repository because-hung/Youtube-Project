export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'youtube',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/font-awesome'
  }],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-fontawesome'
  ],
  fontawesome: {
    // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
    component: 'fa',
    imports: [
      // 引入 fas 所有的icon
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
      // 只引入兩種特定的icon
      // 此為pro付費版的package，請注意
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  }
}
