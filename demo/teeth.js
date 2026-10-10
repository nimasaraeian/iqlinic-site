/* iQlinic tooth chart — same geometry and drawing as the product (lib/teethArt.js + ToothChart.jsx), without React. */
window.IQTeeth=(function(){
// Anatomical tooth chart (buccal view): crowns and roots drawn from real mesiodistal widths and lengths (mm).
// Pure geometry: returns path strings in a 900 x 392 viewBox. Used by the patient file's tooth chart.
const P = (v) => Math.round(v * 10) / 10

// per position 1..8: [crown width, crown height, root length, type]  (average adult values, mm)
const UPPER = [[8.6, 10.5, 13, 'inc'], [6.6, 9, 13, 'inc'], [7.6, 10, 17, 'can'], [7, 8.5, 14, 'pm'], [6.7, 8, 14, 'pm'], [10.2, 7.5, 12.5, 'mol'], [9, 7, 12, 'mol'], [8.6, 6.5, 11, 'mol']]
const LOWER = [[5.2, 9, 12.5, 'inc'], [5.8, 9.5, 14, 'inc'], [6.9, 11, 16, 'can'], [7, 8.5, 14, 'pm'], [7.1, 8, 14.5, 'pm'], [11.2, 7.5, 14, 'mol'], [10.5, 7, 13, 'mol'], [10, 7, 11, 'mol']]
const SCALE = 5.6
const GAP = 1.2
const MID = 450
const UPPER_CEJ = 112      // y of the gum line, upper jaw (roots go up)
const LOWER_CEJ = 278      // y of the gum line, lower jaw (roots go down)

/** Crown outline in local units: x across, y from the gum line (0) to the biting edge (h). */
function crown(type, w, h) {
  const a = w / 2
  if (type === 'inc') {
    return `M${-a * 0.78} 0 C${-a * 1.02} ${h * 0.25} ${-a * 1.02} ${h * 0.7} ${-a * 0.9} ${h * 0.97} Q${-a * 0.86} ${h} ${-a * 0.7} ${h} L${a * 0.7} ${h} Q${a * 0.86} ${h} ${a * 0.9} ${h * 0.97} C${a * 1.02} ${h * 0.7} ${a * 1.02} ${h * 0.25} ${a * 0.78} 0 Q0 ${-h * 0.09} ${-a * 0.78} 0 Z`
  }
  if (type === 'can') {
    return `M${-a * 0.8} 0 C${-a * 1.05} ${h * 0.25} ${-a * 1.05} ${h * 0.6} ${-a * 0.82} ${h * 0.8} L${-a * 0.12} ${h * 1.02} Q0 ${h * 1.06} ${a * 0.12} ${h * 1.02} L${a * 0.82} ${h * 0.8} C${a * 1.05} ${h * 0.6} ${a * 1.05} ${h * 0.25} ${a * 0.8} 0 Q0 ${-h * 0.08} ${-a * 0.8} 0 Z`
  }
  if (type === 'pm') {
    return `M${-a * 0.78} 0 C${-a * 1.06} ${h * 0.3} ${-a * 1.04} ${h * 0.7} ${-a * 0.78} ${h * 0.86} Q${-a * 0.3} ${h * 0.94} 0 ${h * 1.03} Q${a * 0.3} ${h * 0.94} ${a * 0.78} ${h * 0.86} C${a * 1.04} ${h * 0.7} ${a * 1.06} ${h * 0.3} ${a * 0.78} 0 Q0 ${-h * 0.06} ${-a * 0.78} 0 Z`
  }
  // molar: two buccal cusps
  return `M${-a * 0.84} 0 C${-a * 1.04} ${h * 0.3} ${-a * 1.04} ${h * 0.68} ${-a * 0.9} ${h * 0.86} Q${-a * 0.68} ${h * 1.06} ${-a * 0.42} ${h * 0.99} Q${-a * 0.18} ${h * 0.92} 0 ${h * 0.9} Q${a * 0.18} ${h * 0.92} ${a * 0.42} ${h * 0.99} Q${a * 0.68} ${h * 1.06} ${a * 0.9} ${h * 0.86} C${a * 1.04} ${h * 0.68} ${a * 1.04} ${h * 0.3} ${a * 0.84} 0 Q0 ${-h * 0.05} ${-a * 0.84} 0 Z`
}

/** Root outline: y from the gum line (0) to the apex (-r). Molars have two roots with a furcation. */
function roots(type, w, r, upper = false) {
  const a = w / 2
  if (type !== 'mol') {
    const k = type === 'pm' ? 0.66 : 0.72
    return [`M${-a * k} 1 C${-a * k * 0.95} ${-r * 0.45} ${-a * 0.32} ${-r * 0.92} 0 ${-r} C${a * 0.32} ${-r * 0.92} ${a * k * 0.95} ${-r * 0.45} ${a * k} 1 Z`]
  }
  const fy = -r * 0.32
  const palatal = upper ? [`M${-a * 0.42} 1 C${-a * 0.5} ${-r * 0.5} ${-a * 0.2} ${-r * 1.04} ${a * 0.05} ${-r * 1.06} C${a * 0.3} ${-r * 1.02} ${a * 0.46} ${-r * 0.5} ${a * 0.42} 1 Z`] : []
  return [...palatal,
    `M${-a * 0.82} 1 C${-a * 0.9} ${-r * 0.4} ${-a * 0.72} ${-r * 0.9} ${-a * 0.5} ${-r} C${-a * 0.32} ${-r * 0.96} ${-a * 0.14} ${-r * 0.55} ${-a * 0.06} ${fy} Q0 ${fy * 0.85} ${a * 0.06} ${fy} C${a * 0.14} ${-r * 0.55} ${a * 0.32} ${-r * 0.96} ${a * 0.5} ${-r} C${a * 0.72} ${-r * 0.9} ${a * 0.9} ${-r * 0.4} ${a * 0.82} 1 Z`,
  ]
}

/** Root-canal lines (for a tooth that had endodontic treatment). */
function canals(type, w, r) {
  const a = w / 2
  if (type !== 'mol') return [`M0 0 C${a * 0.04} ${-r * 0.4} ${a * 0.02} ${-r * 0.75} 0 ${-r * 0.9}`]
  return [`M${-a * 0.3} 0 C${-a * 0.4} ${-r * 0.4} ${-a * 0.45} ${-r * 0.7} ${-a * 0.5} ${-r * 0.9}`,
          `M${a * 0.3} 0 C${a * 0.4} ${-r * 0.4} ${a * 0.45} ${-r * 0.7} ${a * 0.5} ${-r * 0.9}`]
}

/** Implant fixture: a threaded screw replacing the root. */
function screw(w, r) {
  const a = Math.min(w / 2, 2.6)
  let d = `M${-a} 1 L${-a * 0.95} ${-r * 0.85} Q0 ${-r * 1.02} ${a * 0.95} ${-r * 0.85} L${a} 1 Z`
  const threads = []
  for (let y = -1.6; y > -r * 0.82; y -= 1.6) threads.push(`M${-a * 1.18} ${y} L${a * 1.18} ${y - 0.7}`)
  return { body: d, threads: threads.join(' ') }
}

/** Every tooth with its transform and local shapes. */
function teethLayout() {
  const out = []
  for (const upper of [true, false]) {
    const table = upper ? UPPER : LOWER
    for (const side of [-1, 1]) {
      let x = MID + (side * GAP * SCALE) / 2
      for (let k = 0; k < 8; k++) {
        const [wmm, hmm, rmm, type] = table[k]
        const w = wmm, h = hmm, r = rmm
        const cx = side < 0 ? x - (w * SCALE) / 2 : x + (w * SCALE) / 2
        const q = upper ? (side < 0 ? 1 : 2) : (side < 0 ? 4 : 3)
        // upper jaw: crown points down (flip y); lower jaw: crown points up
        const flip = upper ? 1 : -1
        const y0 = upper ? UPPER_CEJ : LOWER_CEJ
        const transform = `translate(${P(cx)} ${y0}) scale(${SCALE} ${SCALE * flip})`
        const sc = screw(w, r)
        out.push({
          num: `${q}${k + 1}`, type, upper, cx, wmm: w, hmm: h, rmm: r, flip, w: w * SCALE, crownH: h * SCALE, rootH: r * SCALE, transform,
          crown: crown(type, w, h), roots: roots(type, w, r, upper), palatal: upper && type === 'mol', canals: canals(type, w, r), screw: sc.body, threads: sc.threads,
          // a band across the biting third of the crown, for a filling
          filling: `M${-w * 0.36} ${h * 0.55} Q0 ${h * 0.47} ${w * 0.36} ${h * 0.55} L${w * 0.4} ${h * 0.92} L${-w * 0.4} ${h * 0.92} Z`,
          labelY: upper ? y0 + h * SCALE + 18 : y0 - h * SCALE - 9,
        })
        x = side < 0 ? x - w * SCALE - GAP * SCALE : x + w * SCALE + GAP * SCALE
      }
    }
  }
  return out
}

/** Gum for one jaw: covers the necks, dips between teeth (papillae), fades towards the roots. */
function gumPath(teeth, upper) {
  const t = teeth.filter((x) => x.upper === upper).sort((a, b) => a.cx - b.cx)
  const y0 = upper ? UPPER_CEJ : LOWER_CEJ
  const d = upper ? 1 : -1                       // towards the crown
  const S = SCALE
  const margin = y0 + d * 0.35 * S               // over the middle of each neck
  const papilla = y0 + d * 2.6 * S               // between teeth
  const back = y0 - d * 11 * S                   // far end, where the gum fades out
  const gaps = [t[0].cx - t[0].w / 2 - 40]
  for (let i = 0; i < t.length - 1; i++) gaps.push((t[i].cx + t[i].w / 2 + t[i + 1].cx - t[i + 1].w / 2) / 2)
  gaps.push(t[t.length - 1].cx + t[t.length - 1].w / 2 + 40)
  let path = `M${P(gaps[0])} ${P(back)} L${P(gaps[0])} ${P(papilla)}`
  t.forEach((x, i) => {
    const l = gaps[i], r = gaps[i + 1]
    path += ` C${P(l + (x.cx - l) * 0.25)} ${P(margin + (papilla - margin) * 0.2)} ${P(x.cx - x.w * 0.32)} ${P(margin)} ${P(x.cx)} ${P(margin)}`
    path += ` C${P(x.cx + x.w * 0.32)} ${P(margin)} ${P(r - (r - x.cx) * 0.25)} ${P(margin + (papilla - margin) * 0.2)} ${P(r)} ${P(papilla)}`
  })
  path += ` L${P(gaps[gaps.length - 1])} ${P(back)} Z`
  return { path, y0, back, papilla }
}

var TEETH=teethLayout(); var BY={}; TEETH.forEach(function(t){BY[t.num]=t;});
function look(e){ if(!e) return {state:null,endo:false,crown:false,filling:false}; var specs={}; (e.history||[]).forEach(function(h){specs[h.specialty]=1;}); var implant=e.state==='implant';
  return {state:e.state, endo:!!specs.endo&&!implant, crown:!!specs.prosth||implant, filling:!!specs.restor&&!(specs.prosth||implant)}; }
function defs(id){ return '<defs>'+
 '<linearGradient id="'+id+'-enamel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e7dfcc"/><stop offset="0.5" stop-color="#fffdf7"/><stop offset="1" stop-color="#e4dac5"/></linearGradient>'+
 '<linearGradient id="'+id+'-root" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d5bd95"/><stop offset="0.5" stop-color="#f1e5cc"/><stop offset="1" stop-color="#d2b990"/></linearGradient>'+
 '<linearGradient id="'+id+'-cervical" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdbb97" stop-opacity="0.55"/><stop offset="0.3" stop-color="#cdbb97" stop-opacity="0"/></linearGradient>'+
 '<linearGradient id="'+id+'-incisal" x1="0" y1="0" x2="0" y2="1"><stop offset="0.68" stop-color="#c9d6e6" stop-opacity="0"/><stop offset="1" stop-color="#b9c9de" stop-opacity="0.7"/></linearGradient>'+
 '<linearGradient id="'+id+'-porcelain" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--pf-iris)" stop-opacity="0.55"/><stop offset="0.5" stop-color="var(--pf-iris)" stop-opacity="0.78"/><stop offset="1" stop-color="var(--pf-iris)" stop-opacity="0.92"/></linearGradient>'+
 '<linearGradient id="'+id+'-composite" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--pf-iris)" stop-opacity="0.6"/><stop offset="1" stop-color="var(--pf-iris)" stop-opacity="0.85"/></linearGradient>'+
 '<radialGradient id="'+id+'-gloss" cx="0.3" cy="0.45" r="0.45" fx="0.26" fy="0.4"><stop offset="0" stop-color="#ffffff" stop-opacity="0.85"/><stop offset="0.55" stop-color="#ffffff" stop-opacity="0.12"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="'+id+'-ti" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8e98a6"/><stop offset="0.45" stop-color="#dfe4ea"/><stop offset="1" stop-color="#7d8794"/></linearGradient>'+
 '<filter id="'+id+'-soft" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="0.25" stdDeviation="0.35" flood-color="#1b2433" flood-opacity="0.18"/></filter>'+
 '<linearGradient id="'+id+'-gumUp" x1="0" y1="'+(UPPER_CEJ-62)+'" x2="0" y2="'+(UPPER_CEJ+16)+'" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="var(--pf-gumB)" stop-opacity="0"/><stop offset="0.55" stop-color="var(--pf-gumB)" stop-opacity="0.55"/><stop offset="1" stop-color="var(--pf-gumA)" stop-opacity="0.95"/></linearGradient>'+
 '<linearGradient id="'+id+'-gumLo" x1="0" y1="'+(LOWER_CEJ+62)+'" x2="0" y2="'+(LOWER_CEJ-16)+'" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="var(--pf-gumB)" stop-opacity="0"/><stop offset="0.55" stop-color="var(--pf-gumB)" stop-opacity="0.55"/><stop offset="1" stop-color="var(--pf-gumA)" stop-opacity="0.95"/></linearGradient>'+
 '<linearGradient id="'+id+'-side" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.1" stop-color="#fff"/><stop offset="0.9" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
 '<mask id="'+id+'-gumMask" maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="392"><rect x="0" y="0" width="900" height="392" fill="url(#'+id+'-side)"/></mask>'+
 '<radialGradient id="'+id+'-halo" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="var(--pf-iris)" stop-opacity="0.22"/><stop offset="1" stop-color="var(--pf-iris)" stop-opacity="0"/></radialGradient>'+
 '</defs>'; }
function back(t,lk,id,anim){
  if(lk.state==='missing') return t.roots.map(function(r){return '<path d="'+r+'" fill="none" stroke="var(--pf-ghost)" stroke-width="0.12" stroke-dasharray="0.6 0.5"/>';}).join('');
  if(lk.state==='implant') return '<g class="'+(anim?'tc-screw':'')+'"><path d="'+t.screw+'" fill="url(#'+id+'-ti)" stroke="var(--pf-ti-edge)" stroke-width="0.1"/><path d="'+t.threads+'" stroke="var(--pf-ti-edge)" stroke-width="0.2" opacity="0.75"/></g>';
  var s=t.roots.map(function(r,i){return '<path d="'+r+'" fill="url(#'+id+'-root)" stroke="var(--pf-root-edge)" stroke-width="0.09" opacity="'+(t.palatal&&i===0?0.8:1)+'"/>';}).join('');
  if(lk.endo) s+=t.canals.map(function(c){return '<g><path class="'+(anim?'pf-draw':'')+'" pathLength="100" d="'+c+'" fill="none" stroke="'+(lk.state==='active'?'var(--pf-loss)':'var(--pf-iris)')+'" stroke-width="0.5" stroke-linecap="round"'+(anim?' style="animation-delay:.35s"':'')+'/><path d="'+c+'" fill="none" stroke="#fff" stroke-opacity="0.45" stroke-width="0.14" stroke-linecap="round"/></g>';}).join('');
  return s; }
function crownSvg(t,lk,id,anim){
  if(lk.state==='missing') return '<path d="'+t.crown+'" fill="none" stroke="var(--pf-ghost)" stroke-width="0.12" stroke-dasharray="0.6 0.5"/>';
  var front=t.type==='inc'||t.type==='can';
  return '<g filter="url(#'+id+'-soft)"><clipPath id="'+id+'-clip-'+t.num+'"><path d="'+t.crown+'"/></clipPath>'+
   '<path d="'+t.crown+'" fill="url(#'+id+'-enamel)" stroke="var(--pf-edge)" stroke-width="0.09"/><path d="'+t.crown+'" fill="url(#'+id+'-cervical)"/>'+(front?'<path d="'+t.crown+'" fill="url(#'+id+'-incisal)"/>':'')+
   '<g class="'+(anim?'tc-late':'')+'">'+(lk.crown?'<path d="'+t.crown+'" fill="url(#'+id+'-porcelain)"/>':'')+(lk.filling?'<path d="'+t.filling+'" fill="url(#'+id+'-composite)" clip-path="url(#'+id+'-clip-'+t.num+')"/>':'')+(lk.state==='active'?'<path d="'+t.crown+'" fill="var(--pf-loss)" opacity="0.32"/>':'')+'</g>'+
   '<path d="'+t.crown+'" fill="url(#'+id+'-gloss)"/></g>'; }
/* chart: teeth = {"36":{state,history}}, sel = "36", o = {digits, sideLabels, label} */
function chart(teeth,sel,o){ var id='tc'; var gu=gumPath(TEETH,true).path, gl=gumPath(TEETH,false).path;
  var origin=function(t){return 'transform-origin:'+t.cx.toFixed(1)+'px '+(t.upper?UPPER_CEJ:LOWER_CEJ)+'px';};
  var cls=function(t){return 'tc-tooth '+(t.upper?'tc-up':'tc-down')+(t.num===sel?' sel':'');};
  var s='<svg viewBox="0 0 900 392" role="group" aria-label="'+(o.label||'')+'" class="tc-chart'+(sel?' has-sel':'')+'" style="display:block;width:100%;min-width:620px;height:auto;direction:ltr">'+defs(id)+
   '<line x1="'+MID+'" y1="14" x2="'+MID+'" y2="380" stroke="var(--pf-muted)" stroke-opacity="0.22" stroke-dasharray="3 5"/>';
  TEETH.forEach(function(t){ s+='<g class="'+cls(t)+'" style="'+origin(t)+'"><g transform="'+t.transform+'">'+back(t,look(teeth[t.num]),id)+'</g></g>'; });
  TEETH.forEach(function(t){ s+='<g class="'+cls(t)+'" style="'+origin(t)+'"><g transform="'+t.transform+'">'+crownSvg(t,look(teeth[t.num]),id)+'</g></g>'; });
  s+='<g mask="url(#'+id+'-gumMask)" pointer-events="none"><path d="'+gu+'" fill="url(#'+id+'-gumUp)"/><path d="'+gl+'" fill="url(#'+id+'-gumLo)"/></g>';
  var st=sel?BY[sel]:null;
  if(st){ var lk=look(teeth[sel]); s+='<g pointer-events="none"><circle class="tc-ripple" cx="'+st.cx+'" cy="'+(st.upper?UPPER_CEJ+st.crownH/2:LOWER_CEJ-st.crownH/2)+'" r="'+(st.w*0.62)+'" fill="none" stroke="'+(lk.state==='active'?'var(--pf-loss)':'var(--pf-iris)')+'" stroke-width="2"/><g class="'+cls(st)+'" style="'+origin(st)+'"><g transform="'+st.transform+'"><path d="'+st.crown+'" fill="none" stroke="var(--pf-ink)" stroke-width="0.24"/></g></g></g>'; }
  TEETH.forEach(function(t){ var lk=look(teeth[t.num]); var on=lk.state&&lk.state!=='missing'; var w=t.num.length*9+14;
    s+='<g role="button" tabindex="0" class="tc-hit" data-tooth="'+t.num+'" aria-pressed="'+(t.num===sel)+'"><rect x="'+(t.cx-t.w/2)+'" y="'+(t.upper?UPPER_CEJ-t.rootH:LOWER_CEJ-t.crownH-22)+'" width="'+t.w+'" height="'+(t.rootH+t.crownH+22)+'" fill="transparent"/>'+
     '<g transform="translate('+t.cx.toFixed(1)+' '+(t.labelY-4).toFixed(1)+')" class="tc-label'+(t.num===sel?' sel':'')+'">'+(on?'<rect x="'+(-w/2)+'" y="-10" width="'+w+'" height="18" rx="9" fill="'+(lk.state==='active'?'var(--pf-loss-soft)':'var(--pf-iris-soft)')+'"/>':'')+
     '<text y="3.5" text-anchor="middle" font-size="11.5" font-weight="'+(on?700:500)+'"'+(lk.state==='missing'?' text-decoration="line-through"':'')+' fill="'+(lk.state==='active'?'var(--pf-loss-ink)':on?'var(--pf-iris)':'var(--pf-muted)')+'">'+o.digits(t.num)+'</text></g></g>'; });
  s+='<text x="20" y="200" font-size="12" fill="var(--pf-muted)">'+o.sideLabels[0]+'</text><text x="880" y="200" font-size="12" text-anchor="end" fill="var(--pf-muted)">'+o.sideLabels[1]+'</text></svg>';
  return s; }
function zoom(num,entry){ var t=BY[num]; if(!t) return ''; var lk=look(entry), id='tz', pad=2.2, half=Math.max(t.wmm/2+pad,7), top=t.upper?-(t.rmm+pad):-(t.hmm+pad), height=t.rmm+t.hmm+pad*2;
  return '<svg viewBox="'+(-half)+' '+top+' '+(half*2)+' '+height+'" aria-hidden="true" class="tc-zoom" style="width:100%;max-width:170px;height:220px;direction:ltr;overflow:visible">'+defs(id)+'<ellipse cx="0" cy="'+(t.upper?t.hmm*0.2:-t.hmm*0.2)+'" rx="'+half+'" ry="'+(height/2.2)+'" fill="url(#'+id+'-halo)"/><g transform="scale(1 '+(t.upper?1:-1)+')">'+back(t,lk,id,true)+crownSvg(t,lk,id,true)+'</g></svg>'; }
return {chart:chart, zoom:zoom, look:look, TEETH:TEETH};
})();
