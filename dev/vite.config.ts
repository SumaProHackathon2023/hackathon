import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx/* ,defineManifest */} from "@crxjs/vite-plugin"
import manifest from "./src/manifest"
// https://vitejs.dev/config/
// https://zenn.dev/dotdotdot/articles/1866e178ab4085


export default defineConfig({
  define: {
    base_dir: "C:/Users/taito/Documents/hackathon/dev"
  },
  plugins: [react(),crx({manifest})],
  server: {
    port: 5174,
    strictPort: true,
    hmr: {
      port: 5174
    }
  },
  root: "./src",
  publicDir: base_dir + "/public",
  build: {
    outDir: base_dir + "/public",
    rollupOptions: {
      input: {
        // see web_accessible_resources in the manifest config
        welcome: import.meta.path + "/public",
      },
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
    },
  },
})
