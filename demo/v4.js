/* iQlinic public demo — the real product shell (same design system as the clinic app) with synthetic data.
   No real patient, staff or clinic data anywhere in this file. */
(function () {
  'use strict';
  var CFG = window.IQ_DEMO || {}; var T = CFG.t || {}; var lang = CFG.lang || 'fa'; var isFa = lang === 'fa';
  var root = document.documentElement;

  /* ---------- i18n helpers ---------- */
  function t(path, vars) { var cur = T; path.split('.').forEach(function (k) { cur = cur && cur[k]; }); var s = typeof cur === 'string' ? cur : path; if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); }); return s; }
  function digits(x) { x = String(x); return isFa ? x.replace(/[0-9]/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[d]; }) : x; }
  function num(n) { return digits(Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, isFa ? '٬' : ',')); }
  function money(n) { return isFa ? num(n) + ' تومان' : num(n) + ' IRT'; }
  function pct(n) { return isFa ? digits(n) + '٪' : (lang === 'tr' ? '%' + n : n + '%'); }
  function days(n) { return t('common.days', { n: digits(n) }); }
  var D = CFG.demo; // synthetic dataset

  /* ---------- icons (same set as the app) ---------- */
  var P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>', users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',
    userPlus: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6"/>', recovery: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 8v4l3 2"/>',
    calendar: '<rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>', chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/>', logout: '<path d="M9 21H5.5A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3H9"/><path d="m16 17 5-5-5-5M21 12H9"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>', sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"/>', check: '<path d="M20 6 9 17l-5-5"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
    sparkles: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><path d="m12 8 1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2L12 8Z"/>', alert: '<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4M12 17.5v.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.5v.01"/>', phone: '<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.7-4.3L3 9"/><path d="M3 4v5h5"/><path d="M4 13a8 8 0 0 0 14.7 4.3L21 15"/><path d="M21 20v-5h-5"/>', menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    lock: '<rect x="4" y="10.5" width="16" height="10.5" rx="2.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>', star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9L12 3Z"/>',
    trending: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>', wallet: '<rect x="3" y="6" width="18" height="14" rx="2.5"/><path d="M3 10h18M16 15h2"/><path d="M6 6V5a2 2 0 0 1 2-2h8"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>', database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>', zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>', target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  };
  function ic(n, s, flip) { return '<svg viewBox="0 0 24 24" class="icon' + (s === 'sm' ? ' icon-sm' : s === 'lg' ? ' icon-lg' : '') + (flip ? ' flip-rtl' : '') + '" aria-hidden="true">' + (P[n] || P.info) + '</svg>'; }
  function initials(n) { return String(n || '').split(/\s+/).slice(0, 2).map(function (w) { return w[0] || ''; }).join(''); }
  var HUES = ['blue', 'violet', 'teal', 'amber', 'rose', 'indigo'];
  function hue(n) { var h = 0; for (var i = 0; i < n.length; i++) h = (h * 31 + n.charCodeAt(i)) >>> 0; return HUES[h % HUES.length]; }
  function avatar(n, size) { return '<span class="avatar ' + (size || '') + ' av-' + hue(n) + '" aria-hidden="true">' + initials(n) + '</span>'; }
  function badge(tone, txt, dot) { return '<span class="badge tone-' + tone + '">' + (dot ? '<span class="dot"></span>' : '') + txt + '</span>'; }
  function meter(v, tone) { return '<div class="meter" role="meter" aria-valuenow="' + v + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + v + '%;background:var(--' + tone + '-dot)"></span></div>'; }
  function ring(v, size, stroke, tone, label) { var r = (size - stroke) / 2, c = 2 * Math.PI * r; return '<div class="score-ring" style="width:' + size + 'px;height:' + size + 'px"><svg width="' + size + '" height="' + size + '"><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke="var(--surface-3)" stroke-width="' + stroke + '" fill="none"/><circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke="var(--' + tone + '-dot)" stroke-width="' + stroke + '" fill="none" stroke-linecap="round" stroke-dasharray="' + (v / 100 * c) + ' ' + c + '" class="ring-anim"/></svg><div class="v num" style="font-size:' + (size < 50 ? 12 : 16) + 'px">' + (label == null ? digits(v) : label) + '</div></div>'; }
  function kpi(icon, tone, label, value, sub) { return '<div class="card kpi"><div class="kpi-label"><span class="kpi-icon tone-' + tone + '">' + ic(icon, 'sm') + '</span><span class="truncate">' + label + '</span></div><div class="kpi-value num" data-cnt>' + value + '</div>' + (sub ? '<div class="kpi-sub">' + sub + '</div>' : '') + '</div>'; }
  function card(title, body, opts) { opts = opts || {}; return '<section class="card' + (opts.cls ? ' ' + opts.cls : '') + '"' + (opts.style ? ' style="' + opts.style + '"' : '') + '>' + (title ? '<header class="card-h"><div class="grow"><h3>' + title + '</h3>' + (opts.sub ? '<div class="sub">' + opts.sub + '</div>' : '') + '</div>' + (opts.actions ? '<div class="row">' + opts.actions + '</div>' : '') + '</header>' : '') + '<div class="card-b' + (opts.bodyCls ? ' ' + opts.bodyCls : '') + '">' + body + '</div></section>'; }
  function pageHead(title, sub, actions) {
    var d = new Date(), h = d.getHours(), g = h < 12 ? 'greet.morning' : h < 17 ? 'greet.afternoon' : 'greet.evening';
    var date = new Intl.DateTimeFormat(isFa ? 'fa-IR' : lang === 'tr' ? 'tr-TR' : 'en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(d);
    return '<div class="page-head hero-head"><div class="hero-rings" aria-hidden="true"></div><div class="hero-main"><div class="hero-eyebrow"><span class="hero-live"><span class="status-dot pulse"></span></span>' + t(g) + (isFa ? '، ' : ', ') + D.user + '<span class="hero-sep">·</span><span>' + date + '</span></div><h1>' + title + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>' + (actions ? '<div class="row wrap hero-actions">' + actions + '</div>' : '') + '</div>';
  }

  /* ---------- toasts ---------- */
  var toasts = document.createElement('div'); toasts.className = 'toasts'; document.body.appendChild(toasts);
  function toast(msg, tone) { var el = document.createElement('div'); el.className = 'toast'; el.innerHTML = ic(tone === 'red' ? 'alert' : 'check') + '<span>' + msg + '</span>'; toasts.appendChild(el); setTimeout(function () { el.remove(); }, 4200); }

  /* ---------- state ---------- */
  var view = 'recovery', tab = 'today_action_list', q = '', done = {};
  var pageEl = document.getElementById('page');

  /* ================= RECOVERY ================= */
  var RISK_TONE = { Active: 'green', Low: 'blue', Medium: 'amber', High: 'amber', 'Very High': 'red', Lost: 'neutral' };
  var TIER_TONE = { VIP: 'violet', HIGH: 'blue', MEDIUM: 'neutral', LOW: 'neutral' };
  var TABS = ['today_action_list', 'all', 'critical_churn', 'high_value_at_risk', 'high_return_opportunity', 'unfinished_followup'];
  function segLists() { var out = {}; TABS.forEach(function (k) { out[k] = []; }); D.patients.forEach(function (p) { if (done[p.rec]) return; out.all.push(p); p.seg.forEach(function (s) { out[s].push(p); }); }); out.all.sort(function (a, b) { return b.iris - a.iris; }); return out; }
  function recovery() {
    var L = segLists(), S = D.summary, list = L[tab].filter(function (p) { var s = q.trim().toLowerCase(); return !s || p.name.toLowerCase().indexOf(s) >= 0 || String(p.rec).indexOf(s) >= 0; });
    var kpis = '<div class="grid grid-5" style="margin-block-end:16px">' +
      kpi('alert', 'red', t('recovery.kpi.atRisk'), num(L.critical_churn.length + 11), t('recovery.kpi.atRiskSub')) +
      kpi('star', 'violet', t('recovery.kpi.highValue'), num(L.high_value_at_risk.length + 4), t('recovery.kpi.highValueSub')) +
      kpi('recovery', 'green', t('recovery.kpi.highReturn'), num(L.high_return_opportunity.length + 19), t('recovery.kpi.highReturnSub')) +
      kpi('wallet', 'blue', t('recovery.kpi.opportunity'), money(S.opportunity), t('recovery.kpi.opportunitySub')) +
      kpi('phone', 'amber', t('recovery.kpi.today'), num(L.today_action_list.length), t('recovery.kpi.todaySub', { n: digits(S.avgDays) })) + '</div>';
    var banner = tab !== 'today_action_list' && L.today_action_list.length ? '<div class="col gap-12" style="margin-block-end:16px"><div class="alert tone-blue">' + ic('phone') + '<div class="grow"><b>' + t('recovery.todayBanner', { n: digits(L.today_action_list.length) }) + '</b><div class="alert-body">' + t('recovery.todayBannerSub', { v: money(S.opportunity), d: digits(S.avgDays) }) + '</div></div><button class="btn btn-primary btn-sm" data-tab="today_action_list">' + t('recovery.viewToday') + '</button></div></div>' : '';
    var seg = '<div class="seg" role="group">' + TABS.map(function (k) { return '<button type="button" aria-pressed="' + (tab === k) + '" data-tab="' + k + '">' + t('recovery.tabs.' + k) + '<span class="count">' + digits(L[k].length) + '</span></button>'; }).join('') + '</div>';
    var rows = list.map(function (p) {
      var d = p.days <= 30 ? { text: t('recovery.activeDays', { n: digits(p.days) }), tone: 'green' } : { text: days(p.days), tone: p.days > 365 ? 'red' : p.days > 180 ? 'amber' : 'neutral' };
      return '<tr><td style="min-width:200px"><div class="row gap-8">' + avatar(p.name, 'sm') + '<div style="min-width:0"><a href="#" class="strong truncate link" data-p360="' + p.rec + '">' + p.name + '</a><div class="xs faint num">' + digits(p.rec) + ' · ' + p.doctor + '</div>' + badge(p.stageTone, p.stage) + '</div></div></td>' +
        '<td style="white-space:nowrap"><div class="small">' + p.lastVisit + '</div>' + badge(d.tone, d.text) + '</td>' +
        '<td>' + badge(TIER_TONE[p.tier] || 'neutral', p.tier) + '</td>' +
        '<td class="num strong">' + (p.opp > 0 ? money(p.opp) : '—') + '</td>' +
        '<td style="min-width:110px"><div class="row gap-8"><div class="grow">' + meter(p.ret, p.ret >= 70 ? 'green' : p.ret >= 45 ? 'amber' : 'red') + '</div><span class="xs num strong">' + pct(p.ret) + '</span></div></td>' +
        '<td>' + badge(RISK_TONE[p.risk] || 'neutral', t('recovery.churnRisk.' + p.risk), true) + '</td>' +
        '<td>' + ring(p.iris, 40, 4, p.iris >= 70 ? 'green' : p.iris >= 50 ? 'amber' : p.iris >= 30 ? 'red' : 'neutral') + '</td>' +
        '<td style="min-width:220px"><div class="small">' + p.action + '</div><div class="xs faint" style="margin-block-start:4px">' + p.reasons.join(' · ') + '</div><div class="row gap-8 wrap" style="margin-block-start:8px"><button class="btn btn-secondary btn-sm" data-done="' + p.rec + '">' + ic('check', 'sm') + t('recovery.markDone') + '</button></div></td></tr>';
    }).join('');
    var table = list.length ? '<div class="table-wrap" style="margin-inline:-18px"><table class="table"><thead><tr><th>' + t('recovery.col.patient') + '</th><th>' + t('recovery.col.lastVisit') + '</th><th>' + t('recovery.col.tier') + '</th><th class="num">' + t('recovery.col.opportunity') + '</th><th>' + t('recovery.col.returnProb') + '</th><th>' + t('recovery.col.churn') + '</th><th>' + t('recovery.col.iris') + '</th><th>' + t('recovery.col.action') + '</th></tr></thead><tbody>' + rows + '</tbody></table></div>' : '<div class="empty"><div class="empty-icon">' + ic('users', 'lg') + '</div><h4>' + t('recovery.empty') + '</h4></div>';
    var main = card(null, '<div class="row between wrap gap-12"><div style="overflow-x:auto;max-width:100%">' + seg + '</div><div class="input-wrap" style="width:260px">' + ic('search', 'sm') + '<input class="input" id="q" value="' + q.replace(/"/g, '&quot;') + '" placeholder="' + t('recovery.searchPh') + '"></div></div>' + table + '<div class="xs faint">' + t('recovery.footer', { shown: digits(list.length), analyzed: digits(1842), cache: num(12640) }) + ' · <em>' + D.note + '</em></div>', { bodyCls: 'col gap-12', style: 'min-width:0' });
    var top5 = L.today_action_list.slice(0, 5).map(function (p, i) { return '<div class="card inset" style="padding:12px"><div class="row gap-12"><span class="badge tone-blue" style="width:24px;justify-content:center;padding:0">' + digits(i + 1) + '</span><div class="grow" style="min-width:0"><div class="small strong truncate">' + p.name + '</div><div class="xs faint truncate">' + p.reasons[0] + '</div></div><div class="col" style="gap:0;align-items:center"><span class="strong num">' + digits(p.iris) + '</span><span class="xs faint">' + t('recovery.score') + '</span></div></div>' + (p.opp ? '<div class="xs" style="margin-block-start:6px;color:var(--green)">' + money(p.opp) + '</div>' : '') + '</div>'; }).join('');
    var side = '<div class="booking-col"><div class="sticky-col">' + card(t('recovery.topCalls'), top5 || '<p class="small faint">' + t('common.noData') + '</p>', { bodyCls: 'col gap-8' }) +
      card(t('recovery.dataStatus'), '<div class="kv"><span class="faint">' + t('common.status') + '</span>' + badge('violet', t('common.demo'), true) + '</div><div class="kv"><span class="faint">' + t('recovery.col.iris') + '</span><span class="num">v2.3</span></div><p class="xs faint" style="margin-block-start:6px">' + D.note + '</p>', { bodyCls: 'col gap-8' }) + '</div></div>';
    return pageHead('<span class="row gap-8">' + t('recovery.title') + badge('violet', ic('sparkles', 'sm') + 'IRIS') + '</span>', t('recovery.subtitle'), '<span class="xs faint">' + t('recovery.updatedAt', { d: D.today }) + '</span><button class="btn btn-secondary btn-sm" data-refresh>' + ic('refresh', 'sm') + t('common.refresh') + '</button>') + kpis + banner + '<div class="reception-grid two">' + main + side + '</div>';
  }

  /* ================= PATIENT 360 (dialog) ================= */
  function p360(rec) {
    var p = D.patients.filter(function (x) { return x.rec === rec; })[0]; if (!p) return;
    var kv = function (k, v) { return '<div class="kv"><span class="faint">' + k + '</span><span class="num strong">' + v + '</span></div>'; };
    var html = '<div class="overlay" id="ovl"><div class="dialog fade-in" role="dialog" aria-modal="true" style="max-width:860px;width:min(94vw,860px)">' +
      '<div class="row between" style="margin-block-end:14px"><div class="row gap-12">' + avatar(p.name) + '<div><h3 style="font-size:17px">' + p.name + '</h3><div class="xs faint num">' + t('common.recordNo') + ' ' + digits(p.rec) + ' · ' + p.doctor + '</div></div></div><div class="row gap-8">' + badge('violet', 'Patient 360') + '<button class="icon-btn" data-close aria-label="' + t('common.close') + '">' + ic('x') + '</button></div></div>' +
      '<div class="grid grid-3" style="margin-block-end:14px">' +
      card(t('p360.basics'), kv(t('p360.firstVisit'), p.firstVisit) + kv(t('p360.lastVisit'), p.lastVisit) + kv(t('p360.realVisits'), digits(p.visits)) + kv(t('p360.currentInsurance'), p.insurance), { cls: 'inset', bodyCls: 'col gap-6' }) +
      card(t('p360.value'), '<div class="row gap-12">' + ring(p.iris, 64, 6, p.iris >= 70 ? 'green' : p.iris >= 50 ? 'amber' : 'red') + '<div class="col gap-4">' + kv(t('p360.level'), badge(TIER_TONE[p.tier] || 'neutral', p.tier)) + kv(t('p360.score'), digits(p.iris)) + '</div></div>', { cls: 'inset' }) +
      card(t('p360.payments'), kv(t('p360.totalServices'), money(p.fin[0])) + kv(t('p360.totalReceived'), money(p.fin[1])) + kv(t('p360.balance'), '<span style="color:var(--' + (p.fin[2] > 0 ? 'red' : 'green') + ')">' + money(p.fin[2]) + '</span>'), { cls: 'inset', bodyCls: 'col gap-6' }) + '</div>' +
      card(t('p360.lastVisits'), '<div class="table-wrap"><table class="table"><thead><tr><th>' + t('common.date') + '</th><th>' + t('common.service') + '</th><th>' + t('common.doctor') + '</th><th class="num">' + t('p360.received') + '</th></tr></thead><tbody>' + p.hist.map(function (h) { return '<tr><td class="num">' + h[0] + '</td><td>' + h[1] + '</td><td>' + p.doctor + '</td><td class="num">' + money(h[2]) + '</td></tr>'; }).join('') + '</tbody></table></div>', { cls: 'inset' }) +
      '<div class="alert tone-amber" style="margin-block-start:14px">' + ic('sparkles') + '<div class="grow"><b>Next Best Action</b><div class="alert-body">' + p.action + ' — ' + p.reasons.join(' · ') + '</div></div><button class="btn btn-primary btn-sm" data-done="' + p.rec + '" data-close>' + ic('check', 'sm') + t('recovery.markDone') + '</button></div>' +
      '</div></div>';
    var w = document.createElement('div'); w.innerHTML = html; document.body.appendChild(w.firstChild);
  }

  /* ================= STAFF PERFORMANCE ================= */
  function staff() {
    var S = D.staff;
    var kpis = '<div class="grid grid-4" style="margin-block-end:16px">' + kpi('calendar', 'blue', t('staff.visits'), num(S.visits), t('staff.visitsSub')) + kpi('alert', 'red', t('staff.leak'), pct(S.leak), t('staff.leakSub')) + kpi('users', 'violet', t('staff.active'), digits(S.rows.length), t('staff.activeSub')) + kpi('trending', 'green', t('staff.best'), pct(S.rows[0].rate), S.rows[0].name) + '</div>';
    var trend = '<div class="row" style="align-items:flex-end;gap:10px;height:180px;margin-block-start:8px">' + S.trend.map(function (v, i) { return '<div class="col" style="flex:1;align-items:center;gap:6px;height:100%;justify-content:flex-end"><span class="xs num strong">' + pct(v) + '</span><div class="bar-anim" style="width:70%;max-width:34px;height:' + (v * 1.4) + 'px;border-radius:5px 5px 2px 2px;background:var(--' + (v >= 40 ? 'green' : v >= 30 ? 'amber' : 'red') + '-dot)"></div><span class="xs faint">' + S.months[i] + '</span></div>'; }).join('') + '</div>';
    var rows = S.rows.map(function (r) { return '<tr><td><div class="row gap-8">' + avatar(r.name, 'sm') + '<div><div class="strong">' + r.name + '</div><div class="xs faint num">' + t('common.recordNo') + ' ' + digits(r.code) + '</div></div></div></td><td class="num">' + num(r.visits) + '</td><td class="num">' + num(r.rebooked) + '</td><td style="min-width:160px"><div class="row gap-8"><div class="grow">' + meter(r.rate, r.rate >= 40 ? 'green' : r.rate >= 20 ? 'amber' : 'red') + '</div><span class="xs num strong">' + pct(r.rate) + '</span></div></td><td>' + badge(r.rate >= 40 ? 'green' : r.rate >= 20 ? 'amber' : 'red', r.rate >= 40 ? t('staff.good') : r.rate >= 20 ? t('staff.mid') : t('staff.low'), true) + '</td></tr>'; }).join('');
    return pageHead(t('nav.staffPerformance'), t('staff.subtitle')) + kpis + '<div class="grid grid-2" style="align-items:start">' +
      card(t('staff.trendTitle'), trend, { sub: t('staff.trendSub') }) +
      card(t('staff.tableTitle'), '<div class="table-wrap" style="margin-inline:-18px"><table class="table"><thead><tr><th>' + t('staff.col.who') + '</th><th class="num">' + t('staff.col.visits') + '</th><th class="num">' + t('staff.col.rebooked') + '</th><th>' + t('staff.col.rate') + '</th><th>' + t('common.status') + '</th></tr></thead><tbody>' + rows + '</tbody></table></div><div class="xs faint">' + t('staff.anon') + '</div>', { bodyCls: 'col gap-12' }) + '</div>';
  }

  /* ================= DECISION TWIN ================= */
  var scen = 0;
  function twin() {
    var W = D.twin, s = W.scenarios[scen];
    var chart = '<div class="row" style="align-items:flex-end;gap:12px;height:200px;margin-block-start:8px">' + W.days.map(function (d, i) { var dem = W.demand[i], cap = s.cap[i]; return '<div class="col" style="flex:1;align-items:center;gap:6px;height:100%;justify-content:flex-end"><div class="row" style="align-items:flex-end;gap:4px;height:150px"><div class="bar-anim" style="width:16px;height:' + dem * 1.5 + 'px;border-radius:4px 4px 2px 2px;background:var(--series-1)"></div><div class="bar-anim" style="width:16px;height:' + cap * 1.5 + 'px;border-radius:4px 4px 2px 2px;background:var(--' + (cap >= dem ? 'green' : 'red') + '-dot);opacity:.85"></div></div><span class="xs faint">' + d + '</span></div>'; }).join('') + '</div><div class="row gap-16 xs faint" style="margin-block-start:10px"><span class="row gap-6"><i style="width:10px;height:10px;border-radius:3px;background:var(--series-1);display:inline-block"></i>' + t('twin.demand') + '</span><span class="row gap-6"><i style="width:10px;height:10px;border-radius:3px;background:var(--green-dot);display:inline-block"></i>' + t('twin.capacity') + '</span></div>';
    var segs = '<div class="seg" role="group">' + W.scenarios.map(function (x, i) { return '<button type="button" aria-pressed="' + (i === scen) + '" data-scen="' + i + '">' + x.name + '</button>'; }).join('') + '</div>';
    var kpis = '<div class="grid grid-4" style="margin-block-end:16px">' + kpi('target', 'blue', t('twin.fill'), pct(s.fill), t('twin.fillSub')) + kpi('clock', 'amber', t('twin.wait'), digits(s.wait) + ' ' + t('twin.min'), t('twin.waitSub')) + kpi('wallet', 'green', t('twin.revenue'), (s.rev >= 0 ? '+' : '') + pct(s.rev), t('twin.revenueSub')) + kpi('zap', 'violet', t('twin.conflict'), s.conf, t('twin.conflictSub')) + '</div>';
    var rec = '<div class="alert tone-green">' + ic('sparkles') + '<div class="grow"><b>' + t('twin.recTitle') + '</b><div class="alert-body">' + s.rec + '</div></div><button class="btn btn-primary btn-sm" data-apply>' + ic('check', 'sm') + t('twin.apply') + '</button></div>';
    var files = '<section class="pf" style="padding-bottom:0;margin-top:16px"><div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px"><div><h2 style="margin:0;font-size:18px;font-weight:700">' + t('pt.list.title', { n: digits(D.patients.length) }) + '</h2><p class="pf-note" style="margin:4px 0 0">' + t('pt.list.sub') + '</p></div></div><div class="pf-card pf-list" style="padding:0;gap:0"><div class="pf-lrow pt head" aria-hidden="true"><span class="who">' + t('pt.list.patient') + '</span><span class="c opt">' + t('pt.list.step') + '</span><span class="c opt">' + t('pt.list.doctor') + '</span><span class="c">' + t('pt.list.waiting') + '</span><span class="go"></span></div>' + D.patients.slice(0, 6).map(function (p, i) { return '<a href="#" class="pf-lrow pt" data-file="' + p.rec + '" style="animation-delay:' + (i * .025) + 's"><span class="who"><span class="pf-dotn" style="background:' + (p.days > 60 ? 'var(--pf-loss-soft)' : 'var(--pf-raised)') + ';color:' + (p.days > 60 ? 'var(--pf-loss-ink)' : 'var(--pf-muted)') + '">' + digits(i + 1) + '</span><span class="nm"><b>' + p.name + '</b><span class="pf-note">' + t('tw.fileNo', { n: digits(p.rec) }) + '</span></span></span><span class="c opt" style="text-align:start">' + t('tw4.stage.' + D.file.next.step) + '</span><span class="c opt" style="text-align:start">' + p.doctor + '</span><span class="c"><span class="pf-chip ' + (p.days > 60 ? 'loss' : '') + '">' + days(p.days) + '</span></span><span class="go" aria-hidden="true">' + ic('arrowRight', 'sm', true) + '</span></a>'; }).join('') + '</div><p class="pf-note" style="font-size:12px">' + t('pt.list.note') + '</p></section>';
    return pageHead(t('nav.decisionTwin'), t('twin.subtitle'), segs) + kpis + '<div class="grid grid-2" style="align-items:start">' + card(t('twin.chartTitle'), chart, { sub: t('twin.chartSub') }) + '<div class="col gap-16">' + card(t('twin.whatIf'), '<p class="small muted">' + t('twin.whatIfBody') + '</p><div class="col gap-8" style="margin-block-start:10px">' + s.changes.map(function (c) { return '<div class="kv"><span>' + c[0] + '</span><span class="num strong">' + c[1] + '</span></div>'; }).join('') + '</div>') + rec + '</div></div>' + files;
  }


  /* ================= PATIENT FILE (Decision Twin → پرونده‌ی بیمار) ================= */
  var fileRec = null, tooth = '', outcome = '';
  function openFile(rec) { fileRec = rec; outcome = ''; var F = D.file; var act = Object.keys(F.teeth).filter(function (k) { return F.teeth[k].state === 'active'; }); tooth = act[0] || Object.keys(F.teeth)[0]; view = 'patientFile'; render(); window.scrollTo(0, 0); }
  function patientFile() {
    var p = D.patients.filter(function (x) { return x.rec === fileRec; })[0] || D.patients[0]; var F = D.file;
    var stage = function (k) { return t('tw4.stage.' + k); };
    var sel = F.teeth[tooth];
    var legend = [['filling', 'var(--pf-iris)'], ['endo', 'var(--pf-iris)'], ['crown', 'var(--pf-iris)'], ['implant', '#9aa3b0'], ['active', 'var(--pf-loss)']].map(function (x) { return '<span style="display:inline-flex;align-items:center;gap:6px"><span style="width:' + (x[0] === 'endo' ? 4 : 10) + 'px;height:10px;border-radius:' + (x[0] === 'endo' ? '2px' : '999px') + ';background:' + x[1] + ';opacity:' + (x[0] === 'crown' ? .75 : 1) + '"></span>' + t('pt.legend.' + x[0]) + '</span>'; }).join('');
    var hist = sel ? '<ol class="pt-tooth-hist">' + sel.history.slice().reverse().map(function (h) { return '<li><span class="pf-note">' + h.date + '</span><b>' + stage(h.specialty) + '</b><span class="pf-note">' + p.doctor + '</span></li>'; }).join('') + '</ol>' : '';
    var teethSec = '<section id="pt-teeth" class="pf-card pf-sec pf-in"><div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:12px"><header><h2>' + t('pt.sec.teeth') + '</h2><p>' + t('pt.teethSub') + '</p></header><div class="pf-meta" style="font-size:12px">' + legend + '</div></div>' +
      '<div style="min-width:0;overflow-x:auto">' + window.IQTeeth.chart(F.teeth, tooth, { digits: digits, sideLabels: [t('pt.right'), t('pt.left')], label: t('pt.sec.teeth') }) + '</div>' +
      '<div class="pt-tooth" aria-live="polite"><div class="pt-tooth-zoom">' + (tooth ? window.IQTeeth.zoom(tooth, sel) : '') + '</div><div class="tc-detail pt-tooth-info"><div class="pt-tooth-head"><span class="pf-note">' + t('pt.tooth.label') + '</span><b>' + (tooth ? digits(tooth) : '—') + '</b>' + (sel ? '<span class="pf-chip ' + (sel.state === 'active' ? 'loss' : sel.state === 'missing' ? '' : 'iris') + '">' + t('pt.tooth.' + sel.state) + '</span>' : '<span class="pf-note">' + t('pt.tooth.none') + '</span>') + '</div>' + hist + '</div></div></section>';
    var opg = F.images.opg.map(function (im, i) { return '<button type="button" class="pi-opgcard" data-img="opg' + i + '"><img class="pi-opg" src="' + im.src + '" alt="OPG" loading="lazy" style="width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--pf-line);border-radius:14px;background:#05070d;display:block"><span class="pi-cap"><b>OPG</b> · <span class="num">' + im.date + '</span>' + (i === 0 ? ' · ' + t('pi.latest') : '') + '</span></button>'; }).join('');
    var intra = F.images.intra.map(function (im, i) { return '<button type="button" class="pi-tile" data-img="in' + i + '" style="aspect-ratio:4/3"><img src="' + im.src + '" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block"><span class="pi-kind" style="position:absolute;inset-inline-start:8px;bottom:8px;font-size:11px;padding:2px 8px;border-radius:999px;background:rgba(0,0,0,.6);color:#fff">' + t('pt.tooth.label') + ' ' + digits(im.tooth) + '</span></button>'; }).join('');
    var imgSec = '<section id="pt-images" class="pf-card pf-sec pf-in" style="animation-delay:.2s"><header><h2>' + t('pi.title') + '</h2><p>' + t('pi.sub') + '</p></header>' +
      '<div class="pf-meta"><span class="pf-chip iris">' + t('pi.summary', { a: digits(F.images.opg.length), b: digits(F.images.intra.length), c: digits(2) }) + '</span></div>' +
      '<div class="pi-strip">' + opg + '</div><div class="pf-h3" style="margin-top:6px">' + t('pi.filter.intraoral') + '</div><div class="pi-grid">' + intra + '</div>' +
      '<p class="pf-note" style="font-size:12px">' + t('demo.imgNote') + '</p></section>';
    var eps = F.episodes.map(function (e, i) { return '<div class="pf-tl"><span class="pf-note num" style="padding-top:2px">' + e.from + '</span><div class="rail"><span class="node" style="background:' + (e.state === 'waiting' ? 'var(--pf-loss)' : e.state === 'active' ? 'var(--pf-iris)' : 'var(--pf-mid)') + '"></span></div><div class="d"><div class="pf-h3">' + (i === 0 ? t('pt.ep.current', { d: e.from }) : t('pt.ep.range', { a: e.from, b: e.to })) + ' <span class="pf-chip ' + (e.state === 'waiting' ? 'loss' : e.state === 'active' ? 'iris' : '') + '">' + t('pt.ep.' + e.state) + '</span></div><div class="pf-note">' + e.steps.map(function (st) { return stage(st); }).join(t('pt.sep')) + '</div></div></div>'; }).join('');
    var journey = '<section id="pt-journey" class="pf-card pf-sec pf-in" style="animation-delay:.26s"><header><h2>' + t('pt.sec.journey') + '</h2><p>' + t('pt.journeySub') + '</p></header><div style="display:flex;flex-direction:column">' + eps + '</div></section>';
    var A = F.appts, nx = F.next;
    var nextCard = '<div class="pf-card narrow pf-next" style="gap:14px"><div style="display:flex;align-items:center;gap:10px"><span class="pf-pulse" style="width:10px;height:10px;border-radius:50%;background:var(--pf-loss)"></span><span style="font-size:13px;font-weight:700;color:var(--pf-loss-ink)">' + t('pt.next') + '</span></div><div style="font-size:20px;font-weight:800;line-height:1.6">' + stage(nx.step) + '</div><div class="pf-note" style="font-size:14px">' + t('pt.nextWhy', { n: digits(nx.days), a: digits(nx.normal) }) + ' ' + t('pt.nextDoc', { d: p.doctor }) + '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px">' + ['booked', 'noAnswer', 'later'].map(function (o) { return '<button type="button" class="pf-btn sm ' + (outcome === o ? 'on' : (o === 'booked' ? 'primary' : '')) + '" data-out="' + o + '">' + t('pt.btn.' + o) + '</button>'; }).join('') + '</div>' + (outcome ? '<div class="pf-in" style="font-size:13px;font-weight:600;color:var(--pf-iris)">' + t('pt.out.' + (outcome === 'noAnswer' ? 'no_answer' : outcome)) + '</div>' : '') + '</div>';
    return '<div class="pf"><div class="pf-bar"><div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px"><button type="button" class="pf-btn sm" data-view="decisionTwin">' + t('pt.back') + '</button><nav><a href="#pt-teeth">' + t('pt.sec.teeth') + '</a>' + (F.images.ready ? '<a href="#pt-images">' + t('pt.sec.images') + '</a>' : '') + '<a href="#pt-journey">' + t('pt.sec.journey') + '</a></nav></div><span class="badge tone-violet"><span class="dot"></span>' + t('common.demo') + '</span></div>' +
      '<div role="note" class="pf-box" style="display:flex;align-items:center;gap:10px;background:var(--pf-surface);border:1px solid var(--pf-line)"><svg width="14" height="16" viewBox="0 0 12 14" aria-hidden="true"><rect x="1" y="6" width="10" height="7" rx="2" fill="var(--pf-iris)"/><path d="M3.5 6 V4.2 a2.5 2.5 0 0 1 5 0 V6" fill="none" stroke="var(--pf-iris)" stroke-width="1.5"/></svg><span>' + t('pt.privacy') + '</span></div>' +
      '<section class="pf-row pf-in"><div class="pf-card pf-hero wide" style="gap:22px"><div style="display:flex;align-items:center;gap:20px">' + avatar(p.name).replace('class="avatar', 'style="width:92px;height:92px;font-size:28px" class="avatar') + '<div style="display:flex;flex-direction:column;gap:8px;min-width:0"><h1 style="margin:0;font-size:26px;font-weight:800;line-height:1.4">' + p.name + '</h1><div class="pf-meta"><span>' + t('tw.fileNo', { n: digits(p.rec) }) + '</span><span>' + t('pt.since', { d: p.firstVisit }) + '</span></div></div></div>' +
      '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px"><span class="pf-note">' + t('pt.doctors') + '</span><span class="pf-chip big iris">' + p.doctor + t('pt.sep') + stage('implant') + '</span><span class="pf-chip big">' + D.patients[(D.patients.indexOf(p) + 1) % D.patients.length].doctor + t('pt.sep') + stage('restor') + '</span></div><div style="display:flex;flex-wrap:wrap;gap:10px"><a href="#pt-journey" class="pf-btn">' + t('pt.seeJourney') + '</a></div></div>' + nextCard + '</section>' +
      '<section class="pf-kpis pf-in" style="animation-delay:.08s"><div><span class="pf-note">' + t('pt.k.days') + '</span><span class="pf-kpi-v">' + digits(p.visits) + '</span><span class="pf-note" style="font-size:12px">' + t('pt.k.episodes', { n: digits(F.episodes.length) }) + '</span></div><div><span class="pf-note">' + t('pt.k.done') + '</span><span class="pf-kpi-v">' + digits(F.kpi.done) + '</span><span class="pf-note" style="font-size:12px">' + t('pt.k.openLost', { a: digits(F.kpi.open), b: digits(F.kpi.lost) }) + '</span></div><div><span class="pf-note">' + t('pt.k.came') + '</span><span class="pf-kpi-v">' + t('pt.k.ofN', { a: digits(A.came), b: digits(A.booked) }) + '</span><span class="pf-note" style="font-size:12px">' + t('pt.k.missed', { n: digits(A.missed) }) + '</span></div><div><span class="pf-note">' + t('pt.k.value') + '</span><span class="pf-kpi-v">' + money(p.fin[0]) + '</span><span class="pf-note" style="font-size:12px">' + t('pt.k.valueNote') + '</span></div></section>' +
      teethSec + (F.images.ready ? imgSec : '') + journey + '</div>';
  }
  function lightbox(key) { var F = D.file; var im = key.indexOf('opg') === 0 ? F.images.opg[+key.slice(3)] : F.images.intra[+key.slice(2)]; if (!im) return;
    var w = document.createElement('div'); w.innerHTML = '<div class="overlay" id="ovl" style="background:rgba(0,0,0,.86)"><div class="fade-in" style="max-width:min(96vw,1300px);width:100%;display:flex;flex-direction:column;gap:10px;align-items:stretch"><div class="row between" style="color:#fff"><span class="row gap-8"><span class="badge tone-violet">' + (key.indexOf('opg') === 0 ? 'OPG' : t('pi.kind.intraoral')) + '</span><span class="small num">' + im.date + '</span></span><button class="icon-btn" data-close aria-label="' + t('common.close') + '" style="color:#fff">' + ic('x') + '</button></div><img src="' + im.src + '" alt="" style="width:100%;max-height:82vh;object-fit:contain;border-radius:12px;background:#000"></div></div>'; document.body.appendChild(w.firstChild); }

  /* ================= locked pages ================= */
  function locked(key) { return pageHead(t('nav.' + key), '') + '<div class="card"><div class="empty"><div class="empty-icon">' + ic('lock', 'lg') + '</div><h4>' + t('demo.lockedTitle') + '</h4><p>' + t('demo.lockedBody') + '</p><a class="btn btn-primary" href="' + CFG.contact + '">' + t('demo.contact') + '</a></div></div>'; }

  /* ================= render + events ================= */
  var VIEWS = { recovery: recovery, staffPerformance: staff, decisionTwin: twin, patientFile: patientFile };
  function countUp() { [].forEach.call(pageEl.querySelectorAll('[data-cnt]'), function (el) { el.classList.add('fade-in'); }); }
  function render() {
    var sy = window.scrollY; var keep = view === 'patientFile' && pageEl.querySelector('.pf');
    pageEl.className = keep ? 'page' : 'page page-enter'; void pageEl.offsetWidth;
    pageEl.innerHTML = (VIEWS[view] || function () { return locked(view); })();
    [].forEach.call(document.querySelectorAll('.nav-item'), function (a) { if (a.getAttribute('data-view') === view) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    var ind = document.querySelector('.nav-indicator'), cur = document.querySelector('.nav-item[aria-current="page"]');
    if (ind && cur) { ind.style.transform = 'translateY(' + cur.offsetTop + 'px)'; ind.style.height = cur.offsetHeight + 'px'; ind.style.opacity = 1; }
    countUp(); closeMenu(); if (keep) window.scrollTo(0, sy);
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-view]'); if (el) { e.preventDefault(); view = el.getAttribute('data-view'); render(); return; }
    el = e.target.closest('[data-tab]'); if (el) { tab = el.getAttribute('data-tab'); render(); return; }
    el = e.target.closest('[data-scen]'); if (el) { scen = +el.getAttribute('data-scen'); render(); return; }
    el = e.target.closest('[data-tooth]'); if (el) { tooth = el.getAttribute('data-tooth'); render(); var sec = document.getElementById('pt-teeth'); return; }
    el = e.target.closest('[data-file]'); if (el) { e.preventDefault(); var o0 = document.getElementById('ovl'); if (o0) o0.remove(); openFile(+el.getAttribute('data-file')); return; }
    el = e.target.closest('[data-out]'); if (el) { outcome = el.getAttribute('data-out'); render(); return; }
    el = e.target.closest('[data-img]'); if (el) { lightbox(el.getAttribute('data-img')); return; }
    el = e.target.closest('[data-p360]'); if (el) { e.preventDefault(); p360(+el.getAttribute('data-p360')); return; }
    el = e.target.closest('[data-done]'); if (el) { done[+el.getAttribute('data-done')] = 1; toast(t('demo.marked')); var o = document.getElementById('ovl'); if (o) o.remove(); render(); return; }
    el = e.target.closest('[data-close]'); if (el) { var o2 = document.getElementById('ovl'); if (o2) o2.remove(); return; }
    if (e.target.id === 'ovl') { e.target.remove(); return; }
    el = e.target.closest('[data-refresh]'); if (el) { toast(t('demo.refreshed')); render(); return; }
    el = e.target.closest('[data-apply]'); if (el) { toast(t('demo.applied')); return; }
    el = e.target.closest('[data-theme-toggle]'); if (el) { var cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; setTheme(cur); return; }
    el = e.target.closest('[data-menu]'); if (el) { document.querySelector('.sidebar').classList.toggle('open'); var sc = document.getElementById('scrim'); if (sc) sc.hidden = !document.querySelector('.sidebar').classList.contains('open'); return; }
    if (e.target.id === 'scrim') { closeMenu(); return; }
    el = e.target.closest('[data-cmd]'); if (el) { palette(); return; }
  });
  document.addEventListener('input', function (e) { if (e.target.id === 'q') { q = e.target.value; var s = pageEl.querySelector('#q'); var pos = s.selectionStart; render(); var n = pageEl.querySelector('#q'); n.focus(); try { n.setSelectionRange(pos, pos); } catch (err) { } } });
  document.addEventListener('keydown', function (e) { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette(); } if (e.key === 'Escape') { var o = document.getElementById('ovl'); if (o) o.remove(); } });
  function closeMenu() { var sb = document.querySelector('.sidebar'); if (sb) sb.classList.remove('open'); var sc = document.getElementById('scrim'); if (sc) sc.hidden = true; }
  function palette() {
    var pages = ['recovery', 'decisionTwin', 'staffPerformance'];
    var html = '<div class="overlay" id="ovl"><div class="palette fade-in" role="dialog"><input id="pq" placeholder="' + t('nav.commandHint') + '"><div class="list"><div class="menu-label">' + t('demo.pages') + '</div>' + pages.map(function (k) { return '<button type="button" class="menu-item" data-view="' + k + '" data-close>' + ic({ recovery: 'recovery', decisionTwin: 'cpu', staffPerformance: 'trending' }[k]) + '<span class="grow">' + t('nav.' + k) + '</span>' + ic('arrowRight', 'sm', true) + '</button>'; }).join('') + '</div></div></div>';
    var w = document.createElement('div'); w.innerHTML = html; document.body.appendChild(w.firstChild); setTimeout(function () { var i = document.getElementById('pq'); if (i) i.focus(); }, 10);
  }
  function setTheme(v) { root.setAttribute('data-theme', v); try { localStorage.setItem('iq-demo-theme', v); } catch (e) { } var b = document.querySelector('[data-theme-toggle]'); if (b) b.innerHTML = ic(v === 'dark' ? 'moon' : 'sun'); }
  var saved = null; try { saved = localStorage.getItem('iq-demo-theme'); } catch (e) { }
  setTheme(saved || 'dark');
  render();
})();
