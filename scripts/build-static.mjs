#!/usr/bin/env node
// Builds the app and produces a fully static, ready-to-upload site.
// Usage: `npm run build:static`.
//
// Steps:
//   1. Run `vite build` with the Nitro `node-server` preset.
//   2. Start the built node server on a local port.
//   3. Fetch each configured route and save the rendered HTML into the
//      public asset folder as index.html.
//   4. Copy the final static site into `dist/` at the project root.
//
// The resulting `dist/` folder can be uploaded to any static host
// (shared hosting, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).

import { spawn } from "node:child_process";
import { mkdir, writeFile, rm, cp, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROUTES = ["/"];
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

async function run(cmd, args, opts = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: "inherit", shell: false, ...opts });
    p.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))));
    p.on("error", reject);
  });
}

async function main() {
  await rm(join(ROOT, "dist"), { recursive: true, force: true });
  await rm(join(ROOT, ".output"), { recursive: true, force: true });

  console.log("→ vite build (node-server preset)");
  await run("npx", ["vite", "build"], {
    cwd: ROOT,
    env: { ...process.env, NITRO_PRESET: "node-server" },
  });

  // Locate the build output (Lovable sandbox writes to dist/, plain builds
  // write to .output/).
  const outputRoots = [".output", "dist"].map((p) => join(ROOT, p));
  const outputRoot = outputRoots.find((p) => existsSync(join(p, "server", "index.mjs")));
  if (!outputRoot) throw new Error("Could not find built server (looked in .output/, dist/)");

  const serverEntry = join(outputRoot, "server", "index.mjs");
  const publicDir = join(outputRoot, existsSync(join(outputRoot, "public")) ? "public" : "client");

  const port = 4173 + Math.floor(Math.random() * 500);
  console.log(`→ starting node server on :${port}`);
  const server = spawn("node", [serverEntry], {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, PORT: String(port), HOST: "127.0.0.1", NITRO_PORT: String(port) },
  });
  server.stdout.on("data", (b) => process.stdout.write(b));
  server.stderr.on("data", (b) => process.stderr.write(b));

  // wait for ready
  await new Promise((resolve, reject) => {
    let done = false;
    const t = setTimeout(() => { if (!done) { done = true; reject(new Error("server didn't start in 30s")); } }, 30000);
    server.on("exit", (c) => { if (!done) { done = true; reject(new Error(`server exited ${c}`)); } });
    const check = async () => {
      if (done) return;
      try {
        const r = await fetch(`http://127.0.0.1:${port}/`);
        if (r.status < 500) { done = true; clearTimeout(t); resolve(); return; }
      } catch {}
      setTimeout(check, 250);
    };
    setTimeout(check, 500);
  });

  try {
    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${port}${route}`;
      console.log(`→ prerender ${route}`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
      const html = await res.text();
      const outDir = join(publicDir, route === "/" ? "" : route);
      await mkdir(outDir, { recursive: true });
      await writeFile(join(outDir, "index.html"), html, "utf8");
    }
  } finally {
    server.kill("SIGTERM");
  }

  // Copy final static site to dist/ for easy upload.
  const finalDist = join(ROOT, "dist");
  if (publicDir !== finalDist) {
    await rm(finalDist, { recursive: true, force: true });
    await cp(publicDir, finalDist, { recursive: true });
  }

  console.log("\n✔ Static site ready in dist/");
  console.log("  Upload the contents of dist/ to your hosting.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
