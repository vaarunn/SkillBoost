import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        /^react-icons\//, // Matches all imports starting with "react-icons/"
      ],
    },
  },
  resolve: {
    alias: {
      "react-icons": resolve(__dirname, "node_modules/react-icons"), // Adjust the path if necessary
    },
  },
});
