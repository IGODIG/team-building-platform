import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  output: 'static',
  site: 'https://igodig.github.io',
  base: isProduction ? '/team-building-platform' : '/',
  compressHTML: true,
  integrations: [sitemap()]
});
