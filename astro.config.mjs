import { defineConfig } from 'astro/config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  output: 'static',
  site: 'https://igodig.github.io',
  base: isProduction ? '/team-building-platform' : '/',
  compressHTML: true
});
