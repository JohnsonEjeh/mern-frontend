/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})*/
import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { PORT = 3000 } = process.env;

export default defineConfig({
  plugins: [react({
      jsxRuntime: 'classic' 
    }
  )],
  server: {
    proxy: {
      '/api': {
        target: "https://market-mingle-api.onrender.com",
        changeOrigin: true,
      },
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
