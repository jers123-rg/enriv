// Genera una sola página HTML autocontenida a partir de /dist:
// mete el JS, el CSS y las fotos de /media dentro del archivo.
import fs from "node:fs";
import path from "node:path";

const [dist, out] = process.argv.slice(2);
let html = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const read = (src) => fs.readFileSync(path.join(dist, src.replace(/^\.?\//, "")), "utf8");
const media = (text) =>
  text.replace(/(["'`(])(?:\.\/)?media\/([\w.-]+\.(?:jpe?g|png|webp))/g, (match, quote, file) => {
    const p = path.join(dist, "media", file);
    if (!fs.existsSync(p)) return match;
    const type = file.endsWith(".png") ? "image/png" : file.endsWith(".webp") ? "image/webp" : "image/jpeg";
    return `${quote}data:${type};base64,${fs.readFileSync(p).toString("base64")}`;
  });

html = html.replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, (_, src) => {
  const js = media(read(src)).replace(/<\/script/gi, "<\\/script");
  return `<script type="module">${js}</script>`;
});
html = html.replace(/<link rel="stylesheet" crossorigin href="([^"]+)">/, (_, href) => `<style>${read(href)}</style>`);
html = html.replace(/<meta property="og:image"[^>]*>\n?\s*/, "");

if (/(src|href)="\.?\/?assets\//.test(html)) throw new Error("quedó una referencia a /assets sin resolver");
fs.writeFileSync(out, html);
console.log("wrote", out, `${(html.length / 1024).toFixed(0)} KB`);
