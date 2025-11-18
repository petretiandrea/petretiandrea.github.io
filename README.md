# Andrea Petreti | Personal Blog & Portfolio

Personal website built with **Astro** and **React**, featuring a blog, portfolio, and CV.

Migrated from Nuxt 3 to Astro for better performance and static-first architecture.

## 🚀 Project Structure

```text
astro-site/
├── public/              # Static assets
│   ├── img/            # Images
│   └── cv/             # Hugo-generated CV
├── src/
│   ├── components/     # Astro & React components
│   ├── config/         # Site metadata & menu
│   ├── content/        # Blog posts (Content Collections)
│   │   ├── blog/
│   │   └── config.ts
│   ├── i18n/           # i18n utilities (IT/EN)
│   ├── layouts/        # Page layouts
│   ├── pages/          # File-based routing
│   │   ├── blog/
│   │   └── index.astro
│   └── styles/         # Global CSS
├── hugo-cv/            # Hugo CV generator
└── package.json
```

## 🧞 Commands

| Command                | Action                                    |
| :--------------------- | :---------------------------------------- |
| `npm install`          | Install dependencies                      |
| `npm run dev`          | Start dev server at `localhost:4321`      |
| `npm run build`        | Build production site to `./dist/`        |
| `npm run preview`      | Preview build locally                     |
| `npm run serve-hugo`   | Serve Hugo CV in development              |
| `npm run build-hugo-*` | Build Hugo CV to `public/cv/`             |

## ✨ Features

- **Static-First**: Pre-rendered pages for optimal performance
- **Blog System**: Markdown blog with Content Collections
- **i18n**: Italian (default) and English (`/en`) support
- **React Islands**: Interactive components with minimal JavaScript
- **Syntax Highlighting**: Shiki with github-dark-dimmed theme
- **Comments**: Giscus integration for blog discussions
- **Hugo CV**: Separate CV generator maintained alongside blog

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [React](https://react.dev) - Islands for interactivity
- [Tailwind CSS](https://tailwindcss.com) v3 - Styling
- [MDX](https://mdxjs.com) - Enhanced Markdown
- [Giscus](https://giscus.app) - GitHub-based comments
- [Hugo](https://gohugo.io) - CV generation

## 📝 Migration Notes

See [MIGRATION.md](./MIGRATION.md) for details about the Nuxt → Astro migration.

## 🌐 Deployment

Site deploys to GitHub Pages at: https://petretiandrea.github.io
