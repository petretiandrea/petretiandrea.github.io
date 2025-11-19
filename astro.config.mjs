// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import remarkDirective from 'remark-directive';
import { remarkCallout } from './src/plugins/remark-callout.mjs';
import remarkMermaid from 'remark-mermaidjs';

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
    remarkPlugins: [remarkDirective, remarkCallout, remarkMermaid],
    shikiConfig: {
      theme: 'github-dark-dimmed'
    }
  }
});