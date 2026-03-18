import { serve } from "bun";
import index from "./index.html";
import page404 from "./404.html"
import gpg from "./gpg.txt"

const gpgroute = {
  async GET(req) {
    return new Response(gpg);
  },
}
const server = serve({
  routes: {
    "/*": page404,
    "/": index,
    "/sitemap.xml": Bun.file("./src/sitemap.xml"),
    "/robots.txt": Bun.file("./src/robots.txt"),
    "/logo.svg": Bun.file("./src/logo-colored.svg"),
    "/gpg": gpgroute,
    "/gpg.txt": gpgroute,
    "/f2ville.gpg": gpgroute,
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
