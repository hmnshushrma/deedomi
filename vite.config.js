import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
  server: {
    hmr: true, // Ensure HMR is enabled
    port: 3000, // Development server port
  },
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  plugins: [react(), svgr()],
  scss: {
    preprocessorOptions: {
      scss: {
        additionalData: [`@import "./src/styles/_variables.scss";`],
      },
    },
  },
});
