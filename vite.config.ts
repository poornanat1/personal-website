import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));

function sitesWorker(): Plugin {
  return {
    name: "sites-worker-entry",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "server/index.js",
        source: `export default { fetch(request, env) { return env.ASSETS.fetch(request); } };\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sitesWorker()],
  resolve: {
    alias: {
      "@": path.resolve(rootDirectory, "src"),
    },
  },
});
