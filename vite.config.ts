import { defineConfig } from "vite"
import ssrgPlugin from "vite-plugin-ssr-ssg"
import reactRefresh from "@vitejs/plugin-react-refresh"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), ssrgPlugin()],
})
