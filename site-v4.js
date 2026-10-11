/* iQlinic v4 shell: 3D extruded logo (hand-rotatable), header state, mobile drawer, page transitions. */
(function(){
  'use strict';
  var root=document.documentElement, reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var KIND={home:{cls:'slats-top',vc:'#39D0E0',vd:'#061522',accr:'57,208,224'},
            product:{cls:'wipe',vc:'#4EA3FF',vd:'#071533',accr:'78,163,255'},
            insights:{cls:'slats-bottom',vc:'#9B7BFF',vd:'#120d2e',accr:'155,123,255'},
            demo:{cls:'iris',vc:'#2DD4BF',vd:'#06201c',accr:'45,212,191'},
            team:{cls:'slats-top',vc:'#F2B544',vd:'#241a07',accr:'242,181,68'},
            contact:{cls:'fade',vc:'#4EA3FF',vd:'#0a1424',accr:'78,163,255'},
            lang:{cls:'fade',vc:'#39D0E0',vd:'#0a1424',accr:'57,208,224'}};
  var MARK='<svg viewBox="0 0 350 460" xmlns="http://www.w3.org/2000/svg"><use href="#iq-mark"/></svg>';

  /* ---------- inline the logo path once (for the veil) ---------- */
  function ensureSymbol(cb){
    if(document.getElementById('iq-mark')){cb();return;}
    fetch('/assets/logo-mark.svg').then(function(r){return r.text();}).then(function(t){
      var d=(t.match(/ d="([^"]+)"/)||[])[1]||'';
      var s=document.createElementNS('http://www.w3.org/2000/svg','svg'); s.setAttribute('style','position:absolute;width:0;height:0;overflow:hidden'); s.setAttribute('aria-hidden','true');
      s.innerHTML='<symbol id="iq-mark" viewBox="0 0 350 460"><path fill="#fff" fill-rule="evenodd" d="'+d+'"/></symbol>';
      document.body.appendChild(s); cb();
    }).catch(cb);
  }

  /* ---------- veil ---------- */
  var veil=null;
  function buildVeil(){
    if(veil)return veil;
    veil=document.createElement('div'); veil.className='v4-veil'; veil.setAttribute('aria-hidden','true');
    var h='<div class="slats">'; for(var i=0;i<6;i++)h+='<i style="--i:'+i+'"></i>'; h+='</div><div class="iris"></div><div class="wipe"></div><div class="fade"></div><div class="ring"></div><div class="logo">'+MARK+'</div><div class="word"><img src="/assets/logo-word.svg" alt="" style="width:100%;display:block"></div>';
    veil.innerHTML=h; document.body.appendChild(veil); return veil;
  }
  function setKind(v,k){ var K=KIND[k]||KIND.home; v.className='v4-veil '+K.cls; v.style.setProperty('--vc',K.vc); v.style.setProperty('--vd',K.vd); v.style.setProperty('--accr',K.accr); }
  function kindOf(a){
    var k=a.getAttribute('data-kind'); if(k)return k;
    var u=a.getAttribute('href')||'';
    if(/\/insights\//.test(u))return 'insights';
    if(/dental-clinic-ai-software|dis-klinikleri-icin-yapay-zeka/.test(u))return 'product';
    if(/\/demo\//.test(u))return 'demo';
    if(/\/team\//.test(u))return 'team';
    if(/#contact/.test(u))return 'contact';
    if(/^\/(fa|en|tr)\/?$/.test(u)){ var cur=(location.pathname.match(/^\/(fa|en|tr)\//)||[])[1]; return (cur&&u.indexOf('/'+cur)!==0)?'lang':'home'; }
    return 'home';
  }
  function leave(kind,href){
    var v=buildVeil(); setKind(v,kind); v.classList.add('show','out');
    try{sessionStorage.setItem('v4nav',kind);}catch(e){}
    setTimeout(function(){ location.href=href; },reduce?0:620);
  }
  function enter(){
    var kind=root.getAttribute('data-kind'); if(!root.classList.contains('v4-enter')||!kind)return;
    var v=buildVeil(); setKind(v,kind); v.classList.add('show','in');
    root.classList.add('v4-veil-ready');
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ v.classList.add('go'); }); });
    setTimeout(function(){ v.classList.remove('show'); v.className='v4-veil'; },reduce?0:1100);
  }
  document.addEventListener('click',function(e){
    if(reduce)return;
    var a=e.target.closest&&e.target.closest('a[href]'); if(!a)return;
    if(e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;
    if(a.target&&a.target!=='_self')return; if(a.hasAttribute('download'))return;
    var href=a.getAttribute('href'); if(!href||href.charAt(0)==='#'||/^(mailto|tel|javascript):/.test(href))return;
    var u; try{u=new URL(a.href,location.href);}catch(err){return;}
    if(u.origin!==location.origin)return;
    if(u.pathname===location.pathname&&u.hash)return; // same-page anchor
    if(a.closest('.v4-drawer'))closeDrawer();
    e.preventDefault(); leave(kindOf(a),u.href);
  });
  window.addEventListener('pageshow',function(ev){ if(ev.persisted&&veil){ veil.className='v4-veil'; } });

  /* ---------- 3D logo ---------- */
  function logo3d(el){
    var n=parseInt(el.getAttribute('data-layers')||'14',10), st=document.createElement('span'); st.className='st';
    for(var i=0;i<n;i++){ var l=document.createElement('i'); l.style.setProperty('--k',i-(n-1)); l.className=i===n-1?'f':(i===0?'b':'m'); st.appendChild(l); }
    el.innerHTML=''; el.appendChild(st);
    var rx=0, ry=0, vx=0, vy=0, drag=false, lx=0, ly=0, idle=Math.random()*6.28, auto=el.hasAttribute('data-auto');
    function down(e){ var p=e.touches?e.touches[0]:e; drag=true; el.classList.add('drag'); lx=p.clientX; ly=p.clientY; vx=vy=0; if(e.cancelable)e.preventDefault(); }
    function move(e){ if(!drag)return; var p=e.touches?e.touches[0]:e; vx=(p.clientX-lx)*0.6; vy=-(p.clientY-ly)*0.5; ry+=vx; rx+=vy; lx=p.clientX; ly=p.clientY; if(e.cancelable)e.preventDefault(); }
    function up(){ drag=false; el.classList.remove('drag'); }
    el.addEventListener('mousedown',down); window.addEventListener('mousemove',move); window.addEventListener('mouseup',up);
    el.addEventListener('touchstart',down,{passive:false}); window.addEventListener('touchmove',move,{passive:false}); window.addEventListener('touchend',up);
    el.addEventListener('click',function(e){ if(Math.abs(vx)+Math.abs(vy)>0.5)e.preventDefault(); });
    var dir=document.documentElement.dir==='rtl'?-1:1, running=true;
    function frame(){
      if(!drag){ ry+=vx; rx+=vy; vx*=0.93; vy*=0.93;
        if(!reduce){ idle+=0.012; var tY=auto?Math.sin(idle)*28*dir:0, tX=auto?Math.sin(idle*0.7)*8:0; ry+=(tY-ry)*0.03; rx+=(tX-rx)*0.03; }
        else { ry*=0.9; rx*=0.9; }
      }
      rx=Math.max(-70,Math.min(70,rx));
      st.style.transform='rotateX('+rx.toFixed(2)+'deg) rotateY('+ry.toFixed(2)+'deg)';
      if(running)requestAnimationFrame(frame);
    }
    if('IntersectionObserver' in window){ new IntersectionObserver(function(es){ es.forEach(function(x){ if(x.isIntersecting&&!running){running=true; requestAnimationFrame(frame);} else if(!x.isIntersecting){running=false;} }); }).observe(el); }
    requestAnimationFrame(frame);
  }

  /* ---------- header + drawer ---------- */
  var hdr=document.querySelector('.v4-header'), drawer=document.querySelector('.v4-drawer'), menu=document.querySelector('.v4-menu');
  function onScroll(){ if(hdr)hdr.classList.toggle('scrolled',(window.scrollY||0)>12); }
  function closeDrawer(){ if(!drawer)return; drawer.classList.remove('open'); if(menu)menu.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
  if(menu&&drawer){ menu.addEventListener('click',function(){ var o=!drawer.classList.contains('open'); drawer.classList.toggle('open',o); menu.setAttribute('aria-expanded',o?'true':'false'); document.body.style.overflow=o?'hidden':''; }); }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  function init(){
    [].forEach.call(document.querySelectorAll('.lg3d'),logo3d);
    ensureSymbol(enter);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init); else init();
})();
