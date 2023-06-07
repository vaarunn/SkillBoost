import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://shillshare.onrender.com/", // Replace with your deployed server URL
//         pathRewrite: {
//           "^/api": "", // Remove '/api' from the request path
//         },
//       },
//     },
//   },
//   plugins: [react()],
// });
