// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import remarkDirective from 'remark-directive';
import { remarkCallout } from './src/plugins/remark-callout.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://petretiandrea.github.io',

  integrations: [
    react(),
    tailwind(),
    sitemap(),
    mdx(),
    icon()
  ],

  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },

  markdown: {
    remarkPlugins: [remarkDirective, remarkCallout],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      langs: ['json', 'sql', 'js', 'typescript', 'jsx', 'tsx', 'python']
    }
  }
});