import { serve } from "bun";
import index from "./index.html";
import page404 from "./404.html"
import gpg from "./assets/gpg.txt"

const bunport = 8386

const gpgroute = {
  async GET(req) {
    return new Response(gpg);
  },
}

type TrackData = {
  title: string,
  artist: string,
  status: "Playing" | "Paused"
}

let sockets: Bun.ServerWebSocket<undefined>[] = []
let lastNowPlayingUpdate = Date.now()
let nowPlaying: TrackData = {
  title: "",
  artist: "",
  status: "Paused"
}

let lastPlaying: TrackData = nowPlaying

setInterval(() => {
  if (nowPlaying != lastPlaying) {
    for (const s of sockets) {
      s.send(JSON.stringify(nowPlaying))
    }
    lastPlaying = nowPlaying
  }

  if (Date.now() - lastNowPlayingUpdate > 5 * 60 * 1000) {
    nowPlaying = {
      title: "",
      artist: "",
      status: "Paused"
    }
  }
}, 1000)

const server = serve({
  routes: {
    "/*": page404,
    "/": index,
    "/sitemap.xml": Bun.file("./src/assets/sitemap.xml"),
    "/robots.txt": Bun.file("./src/assets/robots.txt"),
    "/logo.png": Bun.file("./src/assets/logo-colored.png"),
    "/gpg": gpgroute,
    "/gpg.txt": gpgroute,
    "/f2ville.gpg": gpgroute,
    "/api/musica": {
      async POST(req) {
        const authHeader = req.headers.get("authorization");
        if (!authHeader || authHeader != process.env.MUSICA_SECRETE) {
          return new Response("Unauthorized", { status: 401 });
        }

        const body = await req.json() as TrackData;
        nowPlaying = body;
        return new Response("OK");
      }
    }
  },
  port: bunport,
  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
  fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === "/musica") {
      const success = server.upgrade(req);
      return;
    }
  },
  websocket: {
    open(ws) {
      sockets.push(ws)
      ws.send(JSON.stringify(nowPlaying))
    },
    message(ws, message) {
      console.log("message", message)
    },
    close(ws) {
      sockets = sockets.filter(x => x != ws)
    }
  }
});

console.log(`Web Server running at ${server.url}`);
