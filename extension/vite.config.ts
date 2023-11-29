import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {defineManifest,crx} from "@crxjs/vite-plugin"
/* import {name,version,description}  from "../package.json"*/
import {resolve,join} from "path"

export type JsonPkg = Record<[key:string][number],string>
import package_json from "./package.json"
// backgroundにservice_workerをなんとか入れたい
const manifest = defineManifest({
  manifest_version: 3,
  name: package_json.name,
  description: package_json.description,
  version: package_json.version,
  action: {
    default_popup: "hello.html",
    default_title: "popup"
  }
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),crx({manifest})],
  server: {
    port:5174,
    strictPort: true,
    hmr: {
      port: 5174
    }
  },
  // prevent src/ prefix on extension urls
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      /* input: {
        // see web_accessible_resources in the manifest config
        welcome: join(__dirname, 'src/welcome/welcome.html'),
      }, */
      output: {
        chunkFileNames: 'assets/chunk-[hash].js',
      },
    },
  }
})

