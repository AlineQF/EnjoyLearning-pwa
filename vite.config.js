import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/.png'], 
      manifest: {
        name: 'EnjoyLearning – Aprenda Brincando',
        short_name: 'EnjoyLearning',
        description: 'PWA Gamificado de Alfabetização (ODS 4)',
        theme_color: '#008B8B', 
        background_color: '#ffffff',
        display: 'standalone', 
        scope: '/',
        start_url: '/',
        icons: [
          { src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        globPatterns: ['**/.{js,css,html,png,svg,jpg}'],
      }
    }),
  ],
});