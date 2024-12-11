export default defineI18nConfig(() => ({
  defaultLocale: 'en',
  availableLocales: ['en', 'it'],
  locales: ['en',  'it' ],
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  fallbackLocale: 'it',
  legacy: false,
}))