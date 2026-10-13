/* iQlinic home v4 — live-product hero. */

(function(){var sc=document.getElementById("screen"), dv=document.getElementById("device"); if(!sc||!dv||!window.ResizeObserver)return; function fit(){var w=sc.clientWidth; dv.style.setProperty("--sc",(w/572).toFixed(4));} new ResizeObserver(fit).observe(sc); fit();})();
(function(){
  var CFG=window.IQ_HOME||{lang:'fa'}; var isFa=CFG.lang==='fa';
  var fa=function(n){n=String(n); return isFa?n.replace(/[0-9]/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'[d];}):n;};
  var L=window.IQ_HOME_L||function(x){return x;};
  var fmt=function(n){return fa(Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,isFa?'٬':','));};
  function sb(active){var items=[['بازگشت بیمار',0],['Patient 360°',1],['Next Best Action',2],['عملکرد پرسنل',3],['دوقلوی تصمیم',4]];
    return '<aside class="sb"><div class="lg"><i>iQ</i>iQlinic</div><div class="g">عملیات</div><div class="it"><b></b>پذیرش</div><div class="it"><b></b>نوبت‌های پزشکان</div><div class="g">هوش تجاری</div>'+
      items.map(function(x){return '<div class="it'+(x[1]===active?' on':'')+'"><b></b>'+x[0]+'</div>';}).join('')+'<div class="g">مدیریت</div><div class="it"><b></b>کاربران و دسترسی‌ها</div></aside>';}
  function top(){return '<div class="top"><div class="srch">جستجو یا رفتن به… <span class="kb">Ctrl K</span></div><span class="live"><i></i>زنده</span></div>';}
  function ring(p){var o=88-88*p/100; return '<svg class="ring" viewBox="0 0 34 34" style="--o:'+o+'"><circle class="bg" cx="17" cy="17" r="14"/><circle class="fg" cx="17" cy="17" r="14" transform="rotate(-90 17 17)"/><text x="17" y="20.5" text-anchor="middle">'+fa(p)+'</text></svg>';}

  var screens=[
    // 0 recovery
    function(){return sb(0)+'<div class="main">'+top()+'<div class="h">بازگشت بیمار <small>بیمارانی که نیاز به بررسی دارند — امروز</small></div>'+
      '<div class="kpis"><div class="kpi"><div class="l">نیاز به بررسی</div><div class="v c" data-cnt="37">۰</div></div><div class="kpi"><div class="l">نشتِ نوبتِ سرِ ویزیت</div><div class="v r" data-cnt="70" data-suf="٪">۰</div></div><div class="kpi"><div class="l">برگشته این ماه</div><div class="v g" data-cnt="128">۰</div></div></div>'+
      '<div class="panel">'+[['م. رضایی','وقفه‌ی درمان ۲۱ روز · نوبت بعدی ثبت نشده',82,'r','بالا'],['س. احمدی','سؤال مالی بی‌پاسخ · ۲ تماس',74,'a','متوسط'],['ر. کریمی','طرح درمان باز · ۳۵ روز',69,'a','متوسط'],['ن. موسوی','لغو نوبت · بدون جایگزین',61,'g','پایین']].map(function(r){
        return '<div class="row">'+ring(r[2])+'<div style="flex:1;min-width:0"><div class="nm">'+r[0]+'</div><div class="mt">'+r[1]+'</div></div><span class="chip '+r[3]+'">'+r[4]+'</span></div>';}).join('')+'</div></div>';},
    // 1 patient 360
    function(){return sb(1)+'<div class="main">'+top()+'<div class="two"><div class="panel"><div style="display:flex;gap:8px;align-items:center"><div class="av" style="width:30px;height:30px;font-size:11px">۱۰۴۲</div><div><div class="h" style="font-size:12.5px">بیمار نمونه <span class="badge">ریسک بالا</span></div><div class="mt">پرونده‌ی ساختگی · لمینت · آخرین مراجعه ۲۱ روز قبل</div></div></div>'+
      '<div class="tl" style="margin-top:9px"><div class="e"><i></i><div><b>نوبت</b> — ۱۴۰۵/۰۶/۲۴ ویزیت انجام شد</div></div><div class="e"><i class="y"></i><div><b>درمان</b> — مرحله‌ی بعدِ طرح درمان باز است</div></div><div class="e"><i class="r"></i><div><b>پرداخت</b> — سؤال مالی بی‌پاسخ (۲ تماس)</div></div><div class="e"><i class="r"></i><div><b>پیگیری</b> — نوبتِ بعدی ثبت نشده</div></div></div></div>'+
      '<div class="panel"><div class="mt">Recovery Score</div><div style="display:flex;align-items:center;gap:8px;margin-top:4px">'+ring(82)+'<div><div class="nm">نیازمند بررسی</div><div class="mt">روند ۷ روزه ↑</div></div></div>'+
      '<div class="mt" style="margin-top:8px">تعامل</div><div style="display:flex;align-items:center;gap:6px"><div class="bar"><i style="--w:62%"></i></div><span class="mt">+۱۲٪</span></div>'+
      '<div class="mt" style="margin-top:6px">وفاداری</div><div style="display:flex;align-items:center;gap:6px"><div class="bar"><i class="y" style="--w:44%"></i></div><span class="mt">۴۴</span></div>'+
      '<div class="mt" style="margin-top:6px">ریسک ریزش</div><div style="display:flex;align-items:center;gap:6px"><div class="bar"><i class="r" style="--w:81%"></i></div><span class="mt">۸۱</span></div></div></div></div>';},
    // 2 next best action
    function(){return sb(2)+'<div class="main">'+top()+'<div class="h">Next Best Action <small>پیشنهاد با دلیل؛ تصمیمِ نهایی با تیم</small></div>'+
      '<div class="act"><div style="display:flex;justify-content:space-between;align-items:center"><div class="t">ابتدا مانعِ مالی را روشن کنید؛ سپس پیگیری را زمان‌بندی کنید.</div><span class="chip r">اولویت بالا</span></div>'+
      '<div class="why">چرا: وقفه‌ی ۲۱ روزه در درمان + پیامِ بی‌پاسخ + طرح درمانِ باز. احتمال بازگشت با تماسِ امروز: <b style="color:#CFFAF4">۶۸٪</b></div>'+
      '<div class="btns"><span class="b p">ثبت تماس پیگیری</span><span class="b">ارسال پیام</span><span class="b">ارجاع برای بررسی انسانی</span><span class="b">رد</span></div></div>'+
      '<div class="grid2"><div class="panel"><div class="mt">اقدام‌های امروز</div><div class="chart"><i style="--h:45%"></i><i style="--h:70%"></i><i style="--h:58%"></i><i style="--h:88%"></i><i style="--h:64%"></i><i class="s" style="--h:92%"></i><i style="--h:52%"></i></div></div>'+
      '<div class="panel"><div class="mt">نتیجه‌ی اقدام‌ها (۳۰ روز)</div>'+[['تماس پیگیری',76,''],['پیام',51,'y'],['یادآوری نوبت',83,'']].map(function(r){return '<div style="display:flex;align-items:center;gap:6px;margin-top:6px"><span class="mt" style="width:60px">'+r[0]+'</span><div class="bar"><i class="'+r[2]+'" style="--w:'+r[1]+'%"></i></div><span class="mt">'+fa(r[1])+'٪</span></div>';}).join('')+'</div></div></div>';},
    // 3 staff performance
    function(){return sb(3)+'<div class="main">'+top()+'<div class="h">عملکرد پرسنل <small>۱۲ ماه اخیر · نوبتِ سرِ ویزیت = بیمار با نوبتِ بعدی رفته</small></div>'+
      '<div class="kpis"><div class="kpi"><div class="l">ویزیت</div><div class="v" data-cnt="54540">۰</div></div><div class="kpi"><div class="l">بدونِ نوبتِ بعدی</div><div class="v r" data-cnt="70.5" data-suf="٪" data-dec="1">۰</div></div><div class="kpi"><div class="l">پرسنل فعال</div><div class="v c" data-cnt="69">۰</div></div></div>'+
      '<div class="panel">'+[['پذیرش ۱','۱۰۱',6120,2210,36],['پذیرش ۲','۱۰۲',5040,200,4],['پذیرش ۳','۱۰۳',4810,380,8],['پذیرش ۴','۱۰۴',4130,450,11],['پذیرش ۵','۱۰۵',2090,1090,52]].map(function(r){
        return '<div class="row"><div class="av">'+r[0].split(' ').map(function(w){return w[0];}).join('')+'</div><div style="width:92px"><div class="nm">'+r[0]+'</div><div class="mt">کد '+r[1]+' · '+fmt(r[2])+' نوبت</div></div><div class="bar"><i class="'+(r[4]<10?'r':r[4]<30?'y':'')+'" style="--w:'+Math.min(100,r[4]*1.8)+'%"></i></div><span class="mt" style="width:34px;text-align:left">'+fa(r[4])+'٪</span></div>';}).join('')+'</div></div>';},
    // 4 decision twin
    function(){return sb(4)+'<div class="main">'+top()+'<div class="h">دوقلوی تصمیم <small>شبیه‌سازیِ ظرفیتِ پزشک‌ها قبل از اقدام</small></div>'+
      '<div class="two"><div class="panel"><div class="mt">تقاضا در برابرِ ظرفیت — هفته‌ی آینده</div><div class="chart">'+[62,78,90,70,96,58,40].map(function(h,i){return '<i class="'+(i===4?'s':'')+'" style="--h:'+h+'%"></i>';}).join('')+'</div><div style="display:flex;justify-content:space-between" class="mt"><span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span></div></div>'+
      '<div class="panel"><div class="mt">پیشنهادِ نوبت</div><div class="nm" style="margin-top:4px">پزشک ۲ · چهارشنبه ۱۱:۰۰</div><div class="mt">ظرفیت ۹۶٪ · ریسک تداخل پایین</div><div class="btns"><span class="b p">تأیید</span><span class="b">گزینه‌ی دیگر</span></div>'+
      '<div class="mt" style="margin-top:8px">اثر روی درآمدِ ماه</div><div style="display:flex;align-items:center;gap:6px"><div class="bar"><i style="--w:72%"></i></div><span class="mt" style="color:#86EFAC">+۱۲٪</span></div></div></div></div>';}
  ];

  var screen=document.getElementById('screen'), sweep=document.getElementById('sweep'), mods=[].slice.call(document.querySelectorAll('.mod'));
  var cur=-1, apps=[], timer=null, userTouched=false;
  function build(i){var d=document.createElement('div'); d.className='app'; d.innerHTML=L(screens[i]()); screen.appendChild(d); return d;}
  function countUp(el){var to=parseFloat(el.getAttribute('data-cnt')), suf=el.getAttribute('data-suf')||'', dec=parseInt(el.getAttribute('data-dec')||'0'); var t0=null;
    function step(ts){if(t0===null)t0=ts; var e=Math.min(1,(ts-t0)/1100); var v=to*(1-Math.pow(1-e,3)); el.textContent=(dec?fa(v.toFixed(dec)):fmt(v))+suf; if(e<1)requestAnimationFrame(step);} requestAnimationFrame(step);}
  var stageEl=document.getElementById('stage');
  var ACC=[['#39D0E0','57,208,224'],['#4EA3FF','78,163,255'],['#2DD4BF','45,212,191'],['#F2B544','242,181,68'],['#9B7BFF','155,123,255']];
  var CHIPS=[
    [['۳۷','بیمار در حالِ ریزش'],['۷۰٪','نشتِ نوبتِ سرِ ویزیت'],['۱۲۸','برگشته این ماه']],
    [['۱ تصویر','نوبت · درمان · پرداخت'],['۸۲','Recovery Score'],['۲۱ روز','از آخرین ویزیت']],
    [['۱۲','توصیهٔ امروز'],['با دلیل','هر توصیه، شواهدش'],['تأیید / رد','تصمیم با تیم']],
    [['۵۳٬۵۴۰','ویزیت ۱۲ ماه'],['۷۰٫۵٪','بدونِ نوبتِ بعدی'],['۵','پذیرشِ فعال']],
    [['+۱۸٪','ظرفیتِ قابلِ بازیابی'],['شبیه‌سازی','قبل از اقدام'],['۳ سناریو','مقایسهٔ هم‌زمان']]];
  var chipEls=[document.getElementById('chip1'),document.getElementById('chip2'),document.getElementById('chip3')];
  function tint(i){ stageEl.style.setProperty('--acc',ACC[i][0]); stageEl.style.setProperty('--accr',ACC[i][1]); }
  function chips(i){ chipEls.forEach(function(c,k){ c.classList.remove('on'); setTimeout(function(){ c.innerHTML=L('<b>'+CHIPS[i][k][0]+'</b><small>'+CHIPS[i][k][1]+'</small>'); c.classList.add('on'); }, 260+k*140); }); }
  var shutter=document.getElementById('shutter'), flash=document.getElementById('flash');
  var reduceM=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  // inside view: the other modules sit behind the screen as real app pages; tap one to bring it forward
  var devEl0=document.getElementById('device'), layers=[];
  var titles=mods.map(function(m){var t=m.querySelector('.t'); return t?t.textContent:'';});
  for(var li=1;li<=4;li++){ var pl=document.createElement('div'); pl.className='pl l'+li; pl.setAttribute('role','button'); pl.tabIndex=-1; devEl0.insertBefore(pl, devEl0.querySelector('.frame')); layers.push(pl); }
  function renderLayers(){ if(!devEl0.classList.contains('x'))return; layers.forEach(function(pl,k){ var idx=(cur+k+1)%screens.length; if(pl.getAttribute('data-i')==String(idx))return; pl.setAttribute('data-i',idx);
      pl.innerHTML=L('<span class="pl-tag">'+titles[idx]+'</span><div class="app on">'+screens[idx]()+'</div>'); pl.setAttribute('aria-label',titles[idx]); [].forEach.call(pl.querySelectorAll('[data-cnt]'),function(el){ var to=parseFloat(el.getAttribute('data-cnt')), dec=parseInt(el.getAttribute('data-dec')||'0'); el.textContent=(dec?fa(to.toFixed(dec)):fmt(to))+(el.getAttribute('data-suf')||''); }); }); }
  // one-line description of the active module under the tabs
  var descs=mods.map(function(m){var d=m.querySelector('.d'); return d?d.textContent:'';});
  var modsBox=document.getElementById('mods'), descEl=document.createElement('p'); descEl.className='mod-desc'; descEl.setAttribute('aria-live','polite'); modsBox.parentNode.insertBefore(descEl, modsBox.nextSibling);
  function setDesc(i){ descEl.classList.add('swap'); setTimeout(function(){ descEl.textContent=descs[i]; descEl.classList.remove('swap'); },180); }
  // on-device controls: previous / dots / next + the inside-view switch
  var isRtl=document.documentElement.dir==='rtl';
  var ctl=document.createElement('div'); ctl.className='dctl';
  var lbl=isRtl?['قبلی','بعدی']:(CFG.lang==='tr'?['Önceki','Sonraki']:['Previous','Next']);
  ctl.innerHTML='<button class="nav prev" type="button" aria-label="'+lbl[0]+'">'+(isRtl?'›':'‹')+'</button><div class="dots">'+titles.map(function(t,k){return '<button type="button" data-i="'+k+'" aria-label="'+t+'"></button>';}).join('')+'</div><button class="nav next" type="button" aria-label="'+lbl[1]+'">'+(isRtl?'‹':'›')+'</button><span class="sep"></span>';
  var stage0=document.getElementById('stage'); stage0.appendChild(ctl); ctl.appendChild(document.getElementById('xr'));
  var dots=[].slice.call(ctl.querySelectorAll('.dots button'));
  function go(i){ userTouched=true; clearTimeout(timer); show((i+screens.length)%screens.length); }
  ctl.querySelector('.prev').addEventListener('click',function(){ go(cur-1); });
  ctl.querySelector('.next').addEventListener('click',function(){ go(cur+1); });
  dots.forEach(function(d){ d.addEventListener('click',function(){ go(parseInt(d.getAttribute('data-i'))); }); });
  // a click on the screen (not a drag) shows the next page
  document.getElementById('screen').addEventListener('click',function(){ if(window.__iqMoved||devEl0.classList.contains('x'))return; go(cur+1); });
  // pause the auto tour while the pointer is over the device
  var hoverPause=false, heroEl=document.getElementById('hero'); stage0.addEventListener('mouseenter',function(){ if(userTouched)return; hoverPause=true; clearTimeout(timer); heroEl.classList.add('paused'); });
  stage0.addEventListener('mouseleave',function(){ if(!hoverPause)return; hoverPause=false; heroEl.classList.remove('paused'); mods.forEach(function(m){var p=m.querySelector('.prog'); p.style.animation='none'; void p.offsetWidth; p.style.animation='';}); schedule(); });
  window.__iqGo=go; window.__iqCur=function(){return cur;};
  layers.forEach(function(pl){ pl.addEventListener('click',function(e){ if(window.__iqMoved)return; e.stopPropagation(); userTouched=true; clearTimeout(timer); show(parseInt(pl.getAttribute('data-i'))); });
    pl.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); pl.click(); } }); });
  function show(i){ if(i===cur)return; tint(i); chips(i); var first=cur<0;
    if(!first&&!reduceM){ shutter.classList.remove('go'); void shutter.offsetWidth; shutter.classList.add('go'); flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }
    var prev=apps[cur]; if(prev){ prev.classList.remove('on','reveal'); prev.classList.add('out'); setTimeout(function(){prev.remove();},620); apps[cur]=null; }
    var a=build(i); apps[i]=a; cur=i; renderLayers();
    if(!first&&!reduceM){ a.classList.add('on','reveal'); a.addEventListener('animationend',function(){a.classList.remove('reveal');},{once:true}); [].forEach.call(a.querySelectorAll('[data-cnt]'),countUp); }
    else { sweep.classList.remove('go'); void sweep.offsetWidth; sweep.classList.add('go'); requestAnimationFrame(function(){requestAnimationFrame(function(){a.classList.add('on'); [].forEach.call(a.querySelectorAll('[data-cnt]'),countUp);});}); }
    setDesc(i); if(typeof dots!=='undefined')dots.forEach(function(d,k){d.classList.toggle('on',k===i);});
    mods.forEach(function(m){m.classList.toggle('on',parseInt(m.getAttribute('data-i'))===i); var p=m.querySelector('.prog'); p.style.animation='none'; void p.offsetWidth; p.style.animation='';}); }
  function schedule(){clearTimeout(timer); if(userTouched||hoverPause)return; timer=setTimeout(function(){show((cur+1)%screens.length); schedule();},6500);}
  mods.forEach(function(m){ m.addEventListener('mousemove',function(e){var r=m.getBoundingClientRect(); var dx=e.clientX-(r.left+r.width/2), dy=e.clientY-(r.top+r.height/2); m.style.transform='translate('+(dx*0.06).toFixed(1)+'px,'+(dy*0.12).toFixed(1)+'px)';}); m.addEventListener('mouseleave',function(){m.style.transform='';}); });
  mods.forEach(function(m){m.addEventListener('click',function(){userTouched=true; clearTimeout(timer); show(parseInt(m.getAttribute('data-i')));});});
  var devEl=document.getElementById('device');
  setTimeout(function(){ devEl.classList.remove('boot'); },120);
  setTimeout(function(){ show(0); schedule(); },900);
  var xr=document.getElementById('xr'); xr.addEventListener('click',function(){ var on=devEl.classList.toggle('x'); xr.classList.toggle('on',on); stageEl.classList.toggle('xon',on); layers.forEach(function(pl){pl.removeAttribute('data-i'); pl.tabIndex=on?0:-1; if(!on)pl.innerHTML='';}); renderLayers(); });

  // 3D device: drag + inertia + parallax + sheen
  var hero=document.getElementById('hero'), dev=document.getElementById('device'), sheen=document.getElementById('sheen'), frameEl=document.getElementById('frame');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var dirM=(document.documentElement.dir==='rtl')?1:-1;
  var rx=8, ry=-18*dirM, tx=8, ty=-18, vx=0, vy=0, dragging=false, lx=0, ly=0, px=0, py=0;
  var pend=false, sx0=0, sy0=0;
  function pd(e){ if(e.target.closest&&e.target.closest('a,button,.mod,.lg3d'))return; var p=e.touches?e.touches[0]:e; lx=sx0=p.clientX; ly=sy0=p.clientY; vx=vy=0; window.__iqMoved=false;
    if(e.touches){ pend=true; return; }   // phones: decide on the first move (vertical swipe = page scroll)
    dragging=true; hero.classList.add('drag'); if(e.cancelable&&!(e.target.closest&&e.target.closest('.pl')))e.preventDefault(); }
  function pm(e){ var p=e.touches?e.touches[0]:e; if(!e.touches){ px=(p.clientX/window.innerWidth-0.5); py=(p.clientY/window.innerHeight-0.5); }
    if(pend){ var ax=Math.abs(p.clientX-sx0), ay=Math.abs(p.clientY-sy0); if(ax+ay<8)return; pend=false; if(ay>ax*0.8)return; dragging=true; touchDrag=true; hero.classList.add('drag'); }
    if(!dragging)return; var dx=p.clientX-lx, dy=p.clientY-ly; lx=p.clientX; ly=p.clientY; if(Math.abs(p.clientX-sx0)+Math.abs(p.clientY-sy0)>6)window.__iqMoved=true;
    vx=dx*(e.touches?0.12:0.22); vy=e.touches?0:-dy*0.16; ry+=vx; rx+=vy; if(e.cancelable)e.preventDefault(); }
  var touchDrag=false, ex0=0;
  function pu(e){ if(touchDrag&&dragging){ var dx=lx-sx0; if(Math.abs(dx)>45){ var fwd=isRtl?dx>0:dx<0; window.__iqGo(window.__iqCur()+(fwd?1:-1)); } }
    touchDrag=false; pend=false; dragging=false; hero.classList.remove('drag'); setTimeout(function(){window.__iqMoved=false;},0); }
  hero.addEventListener('mousedown',pd); window.addEventListener('mousemove',pm); window.addEventListener('mouseup',pu);
  stageEl.addEventListener('touchstart',pd,{passive:true}); window.addEventListener('touchmove',pm,{passive:false}); window.addEventListener('touchend',pu); window.addEventListener('touchcancel',pu);

  // 3D particle field: data points drift toward the device, parallax with pointer, tinted by module
  var fc=document.getElementById('field'), fx=fc.getContext('2d'), FW=1, FH=1, pts=[];
  function fres(){ var r=fc.parentNode.getBoundingClientRect(); FW=fc.width=Math.floor(r.width); FH=fc.height=Math.floor(r.height); }
  new ResizeObserver(fres).observe(fc.parentNode); fres();
  for(var n=0;n<80;n++) pts.push({x:(Math.random()*2-1), y:(Math.random()*2-1), z:Math.random()*1.6+0.2, s:Math.random()*1.4+0.4, sp:Math.random()*0.0025+0.0008});
  var lastAcc='';
  function field(t){ if(reduce||FW<10)return; var accr=getComputedStyle(stageEl).getPropertyValue('--accr').trim()||'57,208,224';
    fx.clearRect(0,0,FW,FH); var cx=FW/2+px*-40, cy=FH/2+py*-30;
    for(var i=0;i<pts.length;i++){ var p=pts[i]; p.z-=p.sp; if(p.z<0.12){ p.z=1.8; p.x=Math.random()*2-1; p.y=Math.random()*2-1; }
      var k=1/p.z, X=cx+p.x*FW*0.75*k, Y=cy+p.y*FH*0.75*k; if(X<-10||X>FW+10||Y<-10||Y>FH+10)continue;
      var a=Math.min(1,(1.8-p.z)/1.2)*0.9*Math.min(1,p.z*2); fx.beginPath(); fx.arc(X,Y,p.s*k*0.9,0,6.283); fx.fillStyle='rgba('+accr+','+a.toFixed(2)+')'; fx.fill();
      if(k>1.9){ fx.beginPath(); fx.moveTo(X,Y); fx.lineTo(cx+(X-cx)*0.93, cy+(Y-cy)*0.93); fx.strokeStyle='rgba('+accr+','+(a*0.35).toFixed(2)+')'; fx.lineWidth=p.s*0.6; fx.stroke(); }
    } }
  var last=performance.now();
  function frame(now){ var dt=Math.min(.05,(now-last)/1000); last=now; var t=now/1000;
    if(dragging){ rx=Math.max(-28,Math.min(28,rx)); ry=Math.max(-55,Math.min(55,ry)); }
    else { ry+=vx; rx+=vy; vx*=0.92; vy*=0.92; var xr_=dev.classList.contains('x'); var restX=(xr_?14:8)+(reduce?0:Math.sin(t*0.6)*1.5)-py*6, restY=(xr_?-20:-18)*dirM+px*10; rx+=(restX-rx)*0.04; ry+=(restY-ry)*0.04; }
    var sy=window.scrollY||0, sc=Math.max(0,1-sy/900);
    var bob=reduce?0:Math.sin(t*0.9)*7;
    var tiltS=(1-sc)*22;
    dev.style.transform='translateY('+(bob+sy*0.08).toFixed(1)+'px) scale('+(0.86+sc*0.14).toFixed(3)+') rotateX('+(rx+tiltS).toFixed(2)+'deg) rotateY('+ry.toFixed(2)+'deg)';
    sheen.style.setProperty('--sx', (ry*4)+'px');
    frameEl.style.setProperty('--lx', (50+px*90-ry*0.8).toFixed(1)+'%'); frameEl.style.setProperty('--ly', (40+py*80+rx*1.2).toFixed(1)+'%');
    field(t); requestAnimationFrame(frame); }
  requestAnimationFrame(frame);
})();

(function(){var els=[].slice.call(document.querySelectorAll('.rv')); if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -6%'}); els.forEach(function(e){io.observe(e);});})();
