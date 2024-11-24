import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from 'vite-plugin-svgr'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  server: {
    host: true,
    port: 3000,
  },
  envDir: "env",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@app" : path.resolve(__dirname, "./src/app"),
      "@helper": path.resolve(__dirname, "./src/helper"),
      "@middleware": path.resolve(__dirname, "./src/middleware"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@customTypes": path.resolve(__dirname, "./src/types"),
      "@route": path.resolve(__dirname, "./src/router"),
      "@data": path.resolve(__dirname, "./src/api"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          } else if (/\.(woff2?|eot|ttf|otf)$/.test(name ?? "")) {
            return "assets/fonts/[name]-[hash][extname]";
          } else if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(name ?? "")) {
            return "assets/media/[name]-[hash][extname]";
          } else if (/\.(css|scss|sass|less)$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});