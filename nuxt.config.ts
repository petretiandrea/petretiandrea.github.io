import ViteYaml from '@modyfi/vite-plugin-yaml';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system',
    classSuffix: ''
  },
  $meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "" },
    { name: "format-detection", content: "telephone=no" },
  ],
  plugins: [
    {src: '~/plugins/prism', mode: 'client'}
  ],
  css: ["@/assets/css/main.css"],
  components: true,
  site: {
    url: 'https://example.com',
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(ViteYaml());
    },
  },
  image: {
    dir: 'public/img'
  }
})
