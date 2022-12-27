import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: "Chromothello",
  version: "0.0.1",
  description: "Play othello with AI",
  action: {
    default_popup: "index.html",
  },
  icons: {
    16: "icons/icon16.png",
    48: "icons/icon48.png",
    128: "icons/icon128.png",
  },
});
