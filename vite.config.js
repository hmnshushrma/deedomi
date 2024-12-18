import { defineConfig } from "vite";

export default defineConfig({
  server: {
    hmr: true, // Ensure HMR is enabled
    port: 3000, // Development server port
  },
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  scss: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          `@import "./src/styles/_variables.scss";`,
        ],
      },
    },
  },
});
