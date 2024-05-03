export default defineNuxtConfig({
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  },
  tres: {
    devtools: true,
    glsl: true
  },
  modules: ['@tresjs/nuxt', '@nuxt/devtools' ]
})