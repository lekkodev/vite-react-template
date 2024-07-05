import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import lekko from "@lekko/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), lekko()],
});
