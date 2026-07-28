const fs = require("node:fs");
const vm = require("node:vm");

const appSource = fs.readFileSync("app.js", "utf8");
const copySource = appSource.slice(0, appSource.indexOf("\n\nconst lang=")) + "\nthis.copy=copy;";
const context = {};
vm.runInNewContext(copySource, context);

for (const lang of ["en", "tr", "fa"]) {
  const path = `${lang}/index.html`;
  const translations = context.copy[lang];
  let html = fs.readFileSync(path, "utf8");

  html = html.replace(
    /<([a-z][a-z0-9-]*)([^>]*\sdata-t="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/gi,
    (match, tag, attributes, key) => {
      if (!(key in translations)) throw new Error(`Missing ${lang}.${key}`);
      return `<${tag}${attributes}>${translations[key]}</${tag}>`;
    },
  );

  fs.writeFileSync(path, html);
}
