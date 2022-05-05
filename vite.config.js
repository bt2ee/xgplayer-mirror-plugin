import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [svgLoader({
    defaultImport: 'raw' // or 'raw'
  })],
  optimizeDeps: {
    include: ['xgplayer-mirror-plugin']
  },
  build: {
    commonjsOptions: {
      include: [/xgplayer-mirror-plugin/, /node_modules/]
    }
  }
});
