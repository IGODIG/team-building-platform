import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://igodig.github.io',
  base: '/team-building-platform',
  compressHTML: true
});