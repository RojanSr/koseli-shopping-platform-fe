import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import * as path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@public": path.resolve(__dirname, "/public")
    }
  }
})
