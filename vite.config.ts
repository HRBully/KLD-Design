import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({

  plugins: [
    vue(),
    vueJsx(),
  ],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: 'KldDesign',
      fileName: 'kld',
      formats: ['es', 'umd', 'iife'],
    }
  },
});
