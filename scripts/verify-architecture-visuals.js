const fs = require('node:fs');
const assert = require('node:assert');

const pages = [
  'en/dental-clinic-ai-software/index.html',
  'fa/dental-clinic-ai-software/index.html',
];
const assets = [
  'assets/iqlinic-ai-algorithm-flow.svg',
  'assets/iqlinic-neural-network-architecture.svg',
];

for (const asset of assets) {
  assert.ok(fs.existsSync(asset), `Missing architecture asset: ${asset}`);
  const svg = fs.readFileSync(asset, 'utf8');
  assert.match(svg, /<svg\b/);
  assert.match(svg, /<title>/);
  assert.match(svg, /<desc>/);
}

for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  assert.match(html, /class="solution-section shell architecture-visuals"/);
  assert.match(html, /<figure class="architecture-figure/);
  assert.match(html, /src="\/assets\/iqlinic-ai-algorithm-flow\.svg"/);
  assert.match(html, /src="\/assets\/iqlinic-neural-network-architecture\.svg"/);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /decoding="async"/);
  assert.match(html, /width="1600" height="900"/);
  assert.match(html, /"@type":"ImageObject"/);

  const howIndex = html.indexOf('id="how"');
  const architectureIndex = html.indexOf('architecture-visuals');
  const categoryIndex = html.indexOf('04 / CATEGORY FIT') > -1
    ? html.indexOf('04 / CATEGORY FIT')
    : html.indexOf('۰۴ / جایگاه محصول');
  assert.ok(howIndex > -1 && architectureIndex > howIndex, `${page}: architecture must follow How It Works`);
  assert.ok(categoryIndex > architectureIndex, `${page}: architecture must precede Category Fit`);
}

console.log('Architecture visual checks passed.');
