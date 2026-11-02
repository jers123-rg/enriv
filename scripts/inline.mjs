import fs from "node:fs";
import path from "node:path";
const [dist, out] = process.argv.slice(2);
let html = fs.readFileSync(path.join(dist, "index.html"), "utf8");
html = html.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, (_, src) => {
  const js = fs.readFileSync(path.join(dist, src), "utf8").replace(/<\/script/gi, "<\\/script");
  return `<script type="module">${js}</script>`;
});
html = html.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/, (_, href) => {
  const css = fs.readFileSync(path.join(dist, href), "utf8");
  return `<style>${css}</style>`;
});
if (/src="\/assets|href="\/assets/.test(html)) throw new Error("unresolved asset reference");
fs.writeFileSync(out, html);
console.log("wrote", out, (html.length / 1024).toFixed(0) + " KB");
