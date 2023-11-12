import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifest: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "maskable-icon.png"],
  manifest: {
    name: "Animated ToDo App",
    short_name: "Animated ToDo App",
    description:
      "A beautifuly animated todo app built with React, Chakra UI and Framer Motion",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "monochrome",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/maskable_icon.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#3182CE",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [react(), VitePWA(manifest)],
});
