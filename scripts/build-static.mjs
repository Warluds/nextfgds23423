#!/usr/bin/env node
// Builds the app and produces a fully static, ready-to-upload site in `dist/client/`.
// Usage: `npm run build:static` (or `node scripts/build-static.mjs`).
//
// Steps:
//   1. Run `vite build` to produce dist/client (assets) and dist/server (SSR bundle).
//   2. Start `vite preview` on a random port and fetch each configured route.
//   3. Save the rendered HTML into dist/client/<route>/index.html.
//   4. Stop the preview server.
//
// The resulting dist/client/ folder can be uploaded to any static host
// (shared hosting, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).

import { spawn } from "node:child_process";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROUTES = ["/"];
const ROOT = dirname(fileURLToPath(import.meta.url)) + "/..";
const OUT = join(ROOT, "dist", "client");

async function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: "inherit", shell: false, ...opts });
    p.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))));
    p.on("error", reject);
  });
}

async function main() {
  await rm(join(ROOT, "dist"), { recursive: true, force: true });
  console.log("→ vite build (node-server preset)");
  await run("npx", ["vite", "build"], {
    cwd: ROOT,
    env: { ...process.env, NITRO_PRESET: "node-server" },
  });

  const port = 4173 + Math.floor(Math.random() * 500);
  console.log(`→ starting node server on :${port}`);
  const server = spawn("node", [join(ROOT, "dist/server/index.mjs")], {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "inherit"],
    env: { ...process.env, PORT: String(port), HOST: "127.0.0.1" },
  });

  // wait for ready
  await new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("server didn't start in 30s")), 30000);
    const check = async () => {
      try {
        const r = await fetch(`http://127.0.0.1:${port}/`);
        if (r.ok || r.status === 200) { clearTimeout(t); resolve(); return; }
      } catch {}
      setTimeout(check, 200);
    };
    server.stdout.on("data", (b) => process.stdout.write(b));
    server.on("exit", (c) => reject(new Error(`server exited ${c}`)));
    setTimeout(check, 300);
  });


  // small settle time
  await new Promise((r) => setTimeout(r, 500));

  try {
    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${port}${route}`;
      console.log(`→ prerender ${route}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
      const html = await res.text();
      const outDir = join(OUT, route === "/" ? "" : route);
      await mkdir(outDir, { recursive: true });
      await writeFile(join(outDir, "index.html"), html, "utf8");
    }
  } finally {
    server.kill("SIGTERM");
  }

  console.log("\n✔ Static site ready in dist/client/");
  console.log("  Upload the contents of dist/client/ to your hosting.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
