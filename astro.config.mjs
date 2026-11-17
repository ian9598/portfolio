import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served from GitHub Pages as a project site: https://ian9598.github.io/portfolio/
export default defineConfig({
  site: 'https://ian9598.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
