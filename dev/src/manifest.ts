import {defineManifest} from "@crxjs/vite-plugin"
import jsonManifest from "../public/manifest.json"

const manifest = defineManifest(jsonManifest)

export default manifest