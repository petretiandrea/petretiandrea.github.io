import ViteYaml from '@modyfi/vite-plugin-yaml';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-content-assets',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  
  colorMode: {
    preference: 'light', // will be system
    classSuffix: ''
  },

  $production: {
    debug: false,
    dev: false,
    app: {
      baseURL: '/'
    },
    site: {
      url: "https://petretiandrea.github.io"
    }
  },

  i18n: {
    lazy: true,
    langDir: 'locales',
    locales: [
      {
        code: 'it',
        iso: 'it-IT',
        name: 'Italiano',
        file: 'it.yaml'
      },
      {
        code: 'en',
        iso: 'en-EN',
        name: 'English',
        file: 'en.yaml'
      }
    ],
    strategy: "prefix_except_default",
    defaultLocale: 'it',
    vueI18n: './i18n.config.ts',
  },

  $meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "" },
    { name: "format-detection", content: "telephone=no" },
  ],

  plugins: [
    //{src: '~/plugins/prism', mode: 'client'}
  ],
  css: ["@/assets/css/main.css"],
  components: true,
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(ViteYaml({
        exclude: 'locales/**'
      }));
    },
  },

  image: {
    dir: 'public/img',
  },
  contentAssets: {
    contentExtensions: ".md .svg .webp",
    debug: true
  },
  content: {
    markdown: {
      mdc: true,
      anchorLinks: true
    },
    highlight: {
      theme: {
        default: "github-dark-dimmed",
      },
      preload: ["json", "sql", "js"]
    }
  },
  extends: [
    'node_modules/nuxt-content-assets/cache',
  ],
  compatibilityDate: '2024-12-11'
})