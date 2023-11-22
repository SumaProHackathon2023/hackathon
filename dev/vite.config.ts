import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx,defineManifest} from "@crxjs/vite-plugin"

// https://vitejs.dev/config/
// https://zenn.dev/dotdotdot/articles/1866e178ab4085

const manifest = defineManifest({
  manifest_version: 3,
  name: "Tech-Events information",
  description: "大学外部のテックイベントの情報を収集してくれる拡張機能です。",
  version: "0.0.1",
  permissions: ["bookmarks"],
  action: {
    /* default_icon: "/vite.svg", */
    default_title: "Hackathon App",
    /* default_popup: "index.html", */
  },
  content_scripts: [
    {
      matches: [
        "https://navi.mars.kanazawa-it.ac.jp/portal/",
      ],
      js: ["src/main.tsx"]
    }
  ]
})
export default defineConfig({
  plugins: [react(),crx({manifest})],
  server: {
    port: 5174,
    strictPort: true,
    hmr: {
      port: 5174
    }
  }
})
