import { serve } from "bun";
import index from "./index.html";
import gpg from "./gpg.txt"
import logo from "./logo-colored.svg"
import fs from "fs"
const gpgroute = {
  async GET(req) {
    return new Response(gpg);
  },
}
const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/gpg": gpgroute,
    "/gpg.txt": gpgroute,
    "/f2ville.gpg": gpgroute,
    "/logo.svg": Bun.file("./logo-colored.svg")
  },
  port: 8386,
  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
