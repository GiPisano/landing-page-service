import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/landing-page-service/", // Sostituisci 'nome-del-tuo-repository' con il nome del tuo repository
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
