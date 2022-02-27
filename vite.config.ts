import { defineConfig } from "vite"
import ssrgPlugin from "vite-plugin-ssr-ssg"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssrgPlugin()],
})
