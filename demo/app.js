const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
const patient={
  fa:{name:'بیمار کاملاً نمایشی',file:'DEMO-001',phone:'شماره آزمایشی',tier:'بیمار ارزشمند'},
  tr:{name:'Tamamen Sentetik Hasta',file:'DEMO-001',phone:'Sentetik numara',tier:'Değerli hasta'},
  en:{name:'Fully Synthetic Patient',file:'DEMO-001',phone:'Synthetic number',tier:'High-value patient'}
};
const lang=document.documentElement.lang||'en';
q('#searchButton')?.addEventListener('click',()=>{
  const value=q('#searchInput').value.trim();
  if(!value)return q('#searchInput').focus();
  const p=patient[lang];
  q('#patientName').textContent=p.name;q('#patientMeta').textContent=`${p.file} · ${p.phone}`;
  q('#patientResult').classList.add('show');
});
q('#patientResult')?.addEventListener('click',()=>{
  const p=patient[lang];
  q('#profileEmpty').hidden=true;q('#profile').classList.add('show');
  q('#mName').textContent=p.name;q('#mFile').textContent=p.file;q('#mPhone').textContent=p.phone;q('#mTier').textContent=p.tier;
});
qa('.visit').forEach(b=>b.addEventListener('click',()=>{qa('.visit').forEach(x=>x.classList.remove('active'));b.classList.add('active')}));
q('#recommendButton')?.addEventListener('click',()=>q('#slots').classList.add('show'));
