#!/usr/bin/env node
/* Applies the v4 shell (3D logo header, footer, page transitions) to every static page.
   Idempotent: strips any previous v4 shell before inserting. Run: node scripts/apply-v4-shell.js */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const V = '4';

const L = {
  fa: { dir: 'rtl', home: '/fa/', product: '/fa/dental-clinic-ai-software/', insights: '/fa/insights/', demo: '/fa/demo/', team: '/team/', contact: '/fa/#contact',
        nav: { product: 'محصول', insights: 'مقالات', demo: 'دموی تعاملی', team: 'تیم', contact: 'تماس' }, cta: 'درخواست بررسی', menu: 'منو', navLabel: 'ناوبری اصلی',
        tagline: 'هوشِ بالینی برای کلینیک‌های دندان‌پزشکی — داده‌های پراکنده را به تصمیمِ قابل‌اقدام تبدیل می‌کند؛ فقط‌خواندنی، قابل‌توضیح، با تصمیمِ نهاییِ انسان.',
        hint: 'لوگو را بگیر و بچرخان', cols: { product: 'محصول', resources: 'منابع', company: 'شرکت' },
        links: { how: 'نحوه کار', guide: 'راهنمای محصول', editorial: 'سیاست تحریریه', langs: 'زبان‌ها' },
        copy: 'هوشِ بازگشتِ بیمار برای کلینیک‌های دندان‌پزشکی', tags: ['READ-ONLY FIRST', 'EXPLAINABLE SIGNALS', 'HUMAN REVIEW', 'MEASURABLE PILOT'], editorialHref: '/fa/insights/editorial-policy/' },
  en: { dir: 'ltr', home: '/en/', product: '/en/dental-clinic-ai-software/', insights: '/en/insights/', demo: '/en/demo/', team: '/team/', contact: '/en/#contact',
        nav: { product: 'Product', insights: 'Insights', demo: 'Live demo', team: 'Team', contact: 'Contact' }, cta: 'Request a review', menu: 'Menu', navLabel: 'Main navigation',
        tagline: 'Clinical intelligence for dental clinics — turns scattered data into explainable, actionable decisions. Read-only, explainable, human in the loop.',
        hint: 'Grab the logo and spin it', cols: { product: 'Product', resources: 'Resources', company: 'Company' },
        links: { how: 'How it works', guide: 'Product guide', editorial: 'Editorial policy', langs: 'Languages' },
        copy: 'Patient Recovery Intelligence for dental clinics', tags: ['READ-ONLY FIRST', 'EXPLAINABLE SIGNALS', 'HUMAN REVIEW', 'MEASURABLE PILOT'], editorialHref: '/en/insights/editorial-policy/' },
  tr: { dir: 'ltr', home: '/tr/', product: '/tr/dis-klinikleri-icin-yapay-zeka/', insights: '/tr/insights/', demo: '/tr/demo/', team: '/team/', contact: '/tr/#contact',
        nav: { product: 'Ürün', insights: 'Yazılar', demo: 'Canlı demo', team: 'Ekip', contact: 'İletişim' }, cta: 'İnceleme talep et', menu: 'Menü', navLabel: 'Ana gezinme',
        tagline: 'Diş klinikleri için klinik zekâ — dağınık veriyi açıklanabilir, uygulanabilir kararlara dönüştürür. Salt okunur, açıklanabilir, son karar insanda.',
        hint: 'Logoyu tutup çevirin', cols: { product: 'Ürün', resources: 'Kaynaklar', company: 'Şirket' },
        links: { how: 'Nasıl çalışır', guide: 'Ürün rehberi', editorial: 'Editoryal politika', langs: 'Diller' },
        copy: 'Diş klinikleri için hasta geri kazanım zekâsı', tags: ['READ-ONLY FIRST', 'EXPLAINABLE SIGNALS', 'HUMAN REVIEW', 'MEASURABLE PILOT'], editorialHref: '/tr/insights/dis-klinigi-yapay-zeka-rehberi/' },
};

const EARLY = `<script id="v4-early">(function(){try{var k=sessionStorage.getItem('v4nav');if(k){sessionStorage.removeItem('v4nav');var h=document.documentElement;h.classList.add('v4-enter');h.setAttribute('data-kind',k);}}catch(e){}})();</script>`;
const CORE = `<link rel="stylesheet" href="/site-v4-core.css?v=${V}" id="v4-core">`;
const SHELL = `<link rel="stylesheet" href="/site-v4.css?v=${V}" id="v4-shell">`;
const JS = `<script defer src="/site-v4.js?v=${V}" id="v4-js"></script>`;

function langOf(file) {
  const m = file.replace(ROOT, '').replace(/\\/g, '/').match(/^\/(fa|en|tr)\//);
  return m ? m[1] : null;
}
function kindOf(rel) {
  if (/\/insights\//.test(rel)) return 'insights';
  if (/dental-clinic-ai-software|dis-klinikleri-icin-yapay-zeka/.test(rel)) return 'product';
  if (/\/demo\//.test(rel)) return 'demo';
  if (/\/team\//.test(rel)) return 'team';
  return 'home';
}
function header(l, lang, kind) {
  const cur = k => (k === kind ? ' aria-current="page"' : '');
  const langs = ['fa', 'en', 'tr'].map(x => `<a href="/${x}/" data-kind="lang"${x === lang ? ' class="on"' : ''}>${x.toUpperCase()}</a>`).join('');
  return `<header class="v4-header" id="v4-header"><div class="in">
<a class="v4-brand" href="${l.home}" data-kind="home" aria-label="iQlinic"><span class="lg3d" data-layers="12" data-auto aria-hidden="true"></span><span><img class="wm" src="/assets/logo-word.svg" alt="iQlinic" width="600" height="140"><small>INTELLIGENT CLINICAL OPERATIONS</small></span></a>
<nav class="v4-nav" aria-label="${l.navLabel}"><a href="${l.product}" data-kind="product"${cur('product')}>${l.nav.product}</a><a href="${l.insights}" data-kind="insights"${cur('insights')}>${l.nav.insights}</a><a href="${l.demo}" data-kind="demo"${cur('demo')}>${l.nav.demo}</a><a href="${l.team}" data-kind="team"${cur('team')}>${l.nav.team}</a><a href="${l.contact}" data-kind="contact">${l.nav.contact}</a></nav>
<div class="v4-actions"><div class="v4-langs">${langs}</div><a class="v4-btn pri" href="${l.contact}" data-kind="contact">${l.cta}</a><button class="v4-menu" type="button" aria-label="${l.menu}" aria-expanded="false" aria-controls="v4-drawer"><span></span><span></span></button></div>
</div></header>
<div class="v4-drawer" id="v4-drawer"><a href="${l.product}" data-kind="product">${l.nav.product}</a><a href="${l.insights}" data-kind="insights">${l.nav.insights}</a><a href="${l.demo}" data-kind="demo">${l.nav.demo}</a><a href="${l.team}" data-kind="team">${l.nav.team}</a><a href="${l.contact}" data-kind="contact">${l.nav.contact}</a><div class="langs">${langs}</div></div>`;
}
function footer(l, lang) {
  const dir = l.dir === 'rtl' ? '1' : '-1';
  return `<footer class="v4-footer" style="--dir:${dir}"><div class="glow" aria-hidden="true"></div><div class="in">
<div class="brandcol"><span class="lg3d big" data-layers="22" data-auto aria-label="iQlinic 3D logo"></span><img class="wm" src="/assets/logo-word.svg" alt="iQlinic" width="600" height="140"><img class="tg" src="/assets/logo-tag.svg" alt="Intelligent Clinical Operations" width="600" height="50"><p>${l.tagline}</p><span class="hint">⟲ ${l.hint}</span></div>
<div class="col"><h4>${l.cols.product}</h4><a href="${l.product}" data-kind="product">${l.links.guide}</a><a href="${l.home}#how" data-kind="home">${l.links.how}</a><a href="${l.demo}" data-kind="demo">${l.nav.demo}</a></div>
<div class="col"><h4>${l.cols.resources}</h4><a href="${l.insights}" data-kind="insights">${l.nav.insights}</a><a href="${l.editorialHref}" data-kind="insights">${l.links.editorial}</a></div>
<div class="col"><h4>${l.cols.company}</h4><a href="${l.team}" data-kind="team">${l.nav.team}</a><a href="${l.contact}" data-kind="contact">${l.nav.contact}</a><h4 style="margin-top:18px">${l.links.langs}</h4><a href="/fa/" data-kind="lang">فارسی</a><a href="/en/" data-kind="lang">English</a><a href="/tr/" data-kind="lang">Türkçe</a></div>
</div><div class="bottom"><span>${l.copy} · © ${new Date().getFullYear()} iQlinic</span><div class="tags">${l.tags.map(t => `<span>${t}</span>`).join('')}</div></div></footer>`;
}


function cutLegacy(html) {
  const mainAt = html.search(/<main[\s>]/i);
  const mainEnd = html.lastIndexOf('</main>');
  // first top-level <header> before <main>
  const h0 = html.search(/<header[\s>]/i);
  if (h0 >= 0 && (mainAt < 0 || h0 < mainAt)) {
    const h1 = html.indexOf('</header>', h0);
    if (h1 > 0) html = html.slice(0, h0) + html.slice(h1 + '</header>'.length);
  }
  // last top-level <footer> after </main>
  const f0 = html.lastIndexOf('<footer');
  if (f0 >= 0 && f0 > mainEnd) {
    const f1 = html.indexOf('</footer>', f0);
    if (f1 > 0) html = html.slice(0, f0) + html.slice(f1 + '</footer>'.length);
  }
  return html;
}

function strip(html) {
  return html
    .replace(/<script id="v4-early">[\s\S]*?<\/script>\n?/g, '')
    .replace(/<link[^>]*id="v4-(core|shell)"[^>]*>\n?/g, '')
    .replace(/<script[^>]*id="v4-js"[^>]*><\/script>\n?/g, '')
    .replace(/<header class="v4-header"[\s\S]*?<\/header>\n?/g, '')
    .replace(/<div class="v4-drawer"[\s\S]*?<\/div><\/div>\n?/g, '')
    .replace(/<footer class="v4-footer"[\s\S]*?<\/footer>\n?/g, '');
}

function apply(file) {
  const rel = file.replace(ROOT, '').replace(/\\/g, '/');
  let html = fs.readFileSync(file, 'utf8');
  html = strip(html);
  const lang = langOf(file) || (rel.startsWith('/team/') ? 'en' : null);
  if (!lang) return false;
  const kind = kindOf(rel);
  const full = !/\/demo\//.test(rel) && !rel.startsWith('/team/');
  // head: early script right after <head ...>, css before </head>, js before </head>
  html = html.replace(/(<head[^>]*>)/i, `$1\n${EARLY}`);
  html = html.replace(/<\/head>/i, `${CORE}\n${full ? SHELL + '\n' : ''}${JS}\n</head>`);
  if (full) {
    const l = L[lang];
    // remove legacy top-level header (first <header ...>...</header> directly after <body>) and legacy top-level footer (last one)
    html = cutLegacy(html);
    html = html.replace(/(<body[^>]*>)/i, (m) => {
      const cls = / class="([^"]*)"/.exec(m);
      const base = cls ? cls[1].split(/\s+/).filter((c) => c && c !== 'v4-page').join(' ') : '';
      const tag = cls ? m.replace(cls[0], ` class="${(base + ' v4-page').trim()}"`) : m.replace(/>$/, ' class="v4-page">');
      return `${tag}\n${header(l, lang, kind)}`;
    });
    html = html.replace(/<\/body>/i, `${footer(l, lang)}\n</body>`);
  } else if (/\/demo\//.test(rel)) {
    // demo: swap sidebar logo image for the 3D mark
    html = html.replace(/<a class="logo" href="([^"]*)"><img[^>]*><\/a>/, (m, h) => `<a class="logo" href="${h}" data-kind="home" style="display:flex;align-items:center;gap:10px;text-decoration:none"><span class="lg3d" data-layers="12" data-auto style="--w:34px" aria-hidden="true"></span><img src="/assets/logo-word.svg" alt="iQlinic" style="height:20px;width:auto"></a>`);
  }
  fs.writeFileSync(file, html);
  return true;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules' || e.name === 'scripts' || e.name === 'docs') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
let n = 0;
for (const f of walk(ROOT)) if (apply(f)) n++;
console.log('v4 shell applied to', n, 'pages');
