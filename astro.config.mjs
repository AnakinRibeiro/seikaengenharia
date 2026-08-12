// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` before the first production deploy: it is what makes canonical
// URLs, the sitemap and Open Graph image URLs resolve to absolute addresses.
export default defineConfig({
  site: 'https://seikaengenharia.com.br',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // The styleguide is an internal reference page.
      filter: (page) => !page.includes('/styleguide'),
    }),
  ],
  build: {
    // Emit one stylesheet instead of many small <link>s: fewer requests on a
    // site whose CSS is small enough to inline-budget comfortably.
    inlineStylesheets: 'auto',
  },
  image: {
    // Keeps generated <img> markup lean; formats are chosen per-usage.
    responsiveStyles: true,
  },
  vite: {
    css: {
      modules: {
        // Readable in dev, short and cacheable in prod.
        generateScopedName:
          process.env.NODE_ENV === 'production'
            ? '[hash:base64:6]'
            : '[name]__[local]',
      },
    },
  },
});
