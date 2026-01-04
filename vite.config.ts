import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()], // <--- O Tailwind NÃO deve estar aqui na versão 3
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})