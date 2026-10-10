#!/usr/bin/env node
/* Builds fa/en/tr public demo pages on the real product design system (demo/app.css) with synthetic data.
   Run: node scripts/build-demo-v4.js && node scripts/apply-v4-shell.js */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const V = '4';

const EXTRA = {
  fa: {
    staff: { subtitle: 'چه کسی بیمار را با نوبتِ بعدی مرخص می‌کند، چه کسی نه — ۱۲ ماه اخیر.', visits: 'ویزیت‌های ۱۲ ماه', visitsSub: 'همه‌ی پزشکان', leak: 'بدونِ نوبتِ بعدی', leakSub: 'بیمارانی که بی‌نوبت رفتند', active: 'پذیرشِ فعال', activeSub: 'کاربرانِ ثبت‌کننده‌ی نوبت', best: 'بهترین نرخِ نوبتِ بعدی', trendTitle: 'روندِ نوبتِ سرِ ویزیت', trendSub: 'سهمِ بیمارانی که با نوبتِ بعدی مرخص شدند', tableTitle: 'به تفکیکِ پذیرش', col: { who: 'کاربر', visits: 'ویزیت', rebooked: 'نوبتِ بعدی', rate: 'نرخ' }, good: 'خوب', mid: 'متوسط', low: 'نیاز به بررسی', anon: 'در دموی عمومی، نام کاربران ناشناس شده است.' },
    twin: { subtitle: 'قبل از تغییرِ برنامه، اثرش را روی ظرفیت، انتظار و درآمد ببینید.', demand: 'تقاضا', capacity: 'ظرفیت', fill: 'پرشدگیِ ظرفیت', fillSub: 'هفته‌ی آینده', wait: 'میانگینِ انتظار', waitSub: 'از نوبت تا ویزیت', min: 'دقیقه', revenue: 'اثر روی درآمد', revenueSub: 'نسبت به برنامه‌ی فعلی', conflict: 'ریسکِ تداخل', conflictSub: 'هم‌پوشانیِ نوبت‌ها', chartTitle: 'تقاضا در برابرِ ظرفیت', chartSub: 'به تفکیکِ روزِ هفته', whatIf: 'سناریوی انتخاب‌شده', whatIfBody: 'تغییراتی که این سناریو روی برنامه اعمال می‌کند:', recTitle: 'پیشنهادِ دوقلو', apply: 'اعمال در برنامه' },
    demo: { lockedTitle: 'این بخش در نسخه‌ی کامل در دسترس است', lockedBody: 'در دموی عمومی فقط ماژول‌های هوشمند فعال‌اند. برای دیدنِ پذیرش، نوبت‌دهی و مدیریتِ کاربران با داده‌ی خودتان، درخواست بررسی بدهید.', contact: 'درخواست بررسی', marked: 'پیگیری ثبت شد (نمایشی)', refreshed: 'بروزرسانی شد', applied: 'سناریو اعمال شد (نمایشی)', pages: 'صفحه‌ها', user: 'کاربر نمایشی', back: 'بازگشت به سایت' },
  },
  en: {
    staff: { subtitle: 'Who sends patients home with a next appointment, and who doesn’t — last 12 months.', visits: 'Visits (12 months)', visitsSub: 'all doctors', leak: 'No next appointment', leakSub: 'patients who left unbooked', active: 'Active receptionists', activeSub: 'users who book appointments', best: 'Best rebooking rate', trendTitle: 'Chairside rebooking trend', trendSub: 'share of patients discharged with a next appointment', tableTitle: 'By receptionist', col: { who: 'User', visits: 'Visits', rebooked: 'Rebooked', rate: 'Rate' }, good: 'Good', mid: 'Average', low: 'Needs review', anon: 'User names are anonymised in the public demo.' },
    twin: { subtitle: 'See the effect on capacity, waiting time and revenue before changing the schedule.', demand: 'Demand', capacity: 'Capacity', fill: 'Capacity fill', fillSub: 'next week', wait: 'Average wait', waitSub: 'booking to visit', min: 'min', revenue: 'Revenue effect', revenueSub: 'vs. current plan', conflict: 'Conflict risk', conflictSub: 'overlapping slots', chartTitle: 'Demand vs capacity', chartSub: 'by weekday', whatIf: 'Selected scenario', whatIfBody: 'Changes this scenario applies to the schedule:', recTitle: 'Twin recommendation', apply: 'Apply to schedule' },
    demo: { lockedTitle: 'Available in the full version', lockedBody: 'Only the intelligence modules are enabled in the public demo. To see reception, scheduling and user management on your own data, request a review.', contact: 'Request a review', marked: 'Follow-up recorded (demo)', refreshed: 'Refreshed', applied: 'Scenario applied (demo)', pages: 'Pages', user: 'Demo user', back: 'Back to site' },
  },
  tr: {
    staff: { subtitle: 'Kim hastayı sonraki randevuyla uğurluyor, kim uğurlamıyor — son 12 ay.', visits: 'Ziyaret (12 ay)', visitsSub: 'tüm hekimler', leak: 'Sonraki randevu yok', leakSub: 'randevusuz ayrılan hastalar', active: 'Aktif resepsiyonist', activeSub: 'randevu kaydeden kullanıcılar', best: 'En iyi randevu oranı', trendTitle: 'Koltuk başı randevu eğilimi', trendSub: 'sonraki randevuyla ayrılan hasta payı', tableTitle: 'Resepsiyoniste göre', col: { who: 'Kullanıcı', visits: 'Ziyaret', rebooked: 'Randevu verildi', rate: 'Oran' }, good: 'İyi', mid: 'Orta', low: 'İnceleme gerekli', anon: 'Herkese açık demoda kullanıcı adları anonimleştirilmiştir.' },
    twin: { subtitle: 'Planı değiştirmeden önce kapasite, bekleme ve gelire etkisini görün.', demand: 'Talep', capacity: 'Kapasite', fill: 'Kapasite doluluğu', fillSub: 'gelecek hafta', wait: 'Ortalama bekleme', waitSub: 'randevudan ziyarete', min: 'dk', revenue: 'Gelire etkisi', revenueSub: 'mevcut plana göre', conflict: 'Çakışma riski', conflictSub: 'örtüşen randevular', chartTitle: 'Talep ve kapasite', chartSub: 'haftanın günlerine göre', whatIf: 'Seçili senaryo', whatIfBody: 'Bu senaryonun plana uyguladığı değişiklikler:', recTitle: 'İkiz önerisi', apply: 'Plana uygula' },
    demo: { lockedTitle: 'Tam sürümde kullanılabilir', lockedBody: 'Herkese açık demoda yalnızca zekâ modülleri açıktır. Resepsiyon, randevu ve kullanıcı yönetimini kendi verinizle görmek için inceleme talep edin.', contact: 'İnceleme talep et', marked: 'Takip kaydedildi (demo)', refreshed: 'Yenilendi', applied: 'Senaryo uygulandı (demo)', pages: 'Sayfalar', user: 'Demo kullanıcısı', back: 'Siteye dön' },
  },
};

/* synthetic dataset — entirely fictional */
function dataset(lang) {
  const fa = lang === 'fa';
  const names = fa ? ['مریم احمدی', 'علی کریمی', 'سارا موسوی', 'رضا نادری', 'نرگس حسینی', 'امیر رستمی', 'لیلا فرهادی', 'حسین عباسی'] : lang === 'tr' ? ['Meryem Ahmadi', 'Ali Karimi', 'Sara Musavi', 'Rıza Naderi', 'Nergis Hüseyni', 'Emir Rüstemi', 'Leyla Ferhadi', 'Hüseyin Abbasi'] : ['Maryam Ahmadi', 'Ali Karimi', 'Sara Mousavi', 'Reza Naderi', 'Narges Hosseini', 'Amir Rostami', 'Leila Farhadi', 'Hossein Abbasi'];
  const docs = fa ? ['دکتر الف', 'دکتر ب', 'دکتر ج'] : lang === 'tr' ? ['Dr. A', 'Dr. B', 'Dr. C'] : ['Dr. A', 'Dr. B', 'Dr. C'];
  const stage = fa ? { risk: ['در خطر', 'amber'], hot: ['فرصت گرم', 'amber'], vip: ['ارزشمند در خطر', 'red'], fu: ['پیگیری مورد نیاز', 'blue'], act: ['فعال', 'green'] }
    : lang === 'tr' ? { risk: ['Risk altında', 'amber'], hot: ['Sıcak fırsat', 'amber'], vip: ['Değerli & riskte', 'red'], fu: ['Takip gerekli', 'blue'], act: ['Aktif', 'green'] }
    : { risk: ['At risk', 'amber'], hot: ['Warm opportunity', 'amber'], vip: ['High value at risk', 'red'], fu: ['Follow-up needed', 'blue'], act: ['Active', 'green'] };
  const R = fa ? {
    gap: 'وقفه‌ی درمان', open: 'طرح درمانِ باز', pay: 'سؤال مالی بی‌پاسخ', noNext: 'نوبتِ بعدی ثبت نشده', cancel: 'لغو بدون جایگزین', msg: 'پیام بی‌پاسخ', hv: 'بیمار پرارزش', long: 'غیبت طولانی',
    a1: 'ابتدا مانعِ مالی را روشن کنید؛ سپس پیگیری را زمان‌بندی کنید.', a2: 'تماسِ پیگیری برای ادامه‌ی طرح درمان', a3: 'پیامِ یادآوریِ نوبت + پیشنهادِ زمانِ جدید', a4: 'ارجاع به پزشک برای بازبینیِ طرح', a5: 'تماس برای تکمیلِ مرحله‌ی بعد',
    svc: ['ایمپلنت', 'ترمیم', 'جرم‌گیری', 'لمینت', 'روکش', 'عصب‌کشی'], ins: ['آزاد', 'تأمین اجتماعی', 'بیمه تکمیلی'],
  } : lang === 'tr' ? {
    gap: 'tedavi arası', open: 'açık tedavi planı', pay: 'yanıtsız ödeme sorusu', noNext: 'sonraki randevu yok', cancel: 'yerine randevu alınmadan iptal', msg: 'yanıtsız mesaj', hv: 'yüksek değerli hasta', long: 'uzun süre gelmedi',
    a1: 'Önce ödeme sorusunu netleştirin; sonra takibi planlayın.', a2: 'Tedavi planına devam için takip araması', a3: 'Randevu hatırlatma mesajı + yeni zaman önerisi', a4: 'Plan gözden geçirmesi için hekime yönlendir', a5: 'Sonraki aşamayı tamamlamak için ara',
    svc: ['İmplant', 'Dolgu', 'Diş taşı temizliği', 'Lamine', 'Kuron', 'Kanal tedavisi'], ins: ['Özel', 'SGK', 'Tamamlayıcı sigorta'],
  } : {
    gap: 'treatment gap', open: 'open treatment plan', pay: 'unanswered payment question', noNext: 'no next appointment', cancel: 'cancelled without rebooking', msg: 'unanswered message', hv: 'high-value patient', long: 'long absence',
    a1: 'Clear the payment question first; then schedule the follow-up.', a2: 'Follow-up call to continue the treatment plan', a3: 'Reminder message + offer a new slot', a4: 'Refer to the doctor for plan review', a5: 'Call to complete the next stage',
    svc: ['Implant', 'Filling', 'Scaling', 'Veneer', 'Crown', 'Root canal'], ins: ['Private', 'Public', 'Supplementary'],
  };
  const date = (d) => fa ? ['۱۴۰۵/۰۶/۲۴', '۱۴۰۵/۰۵/۰۳', '۱۴۰۵/۰۳/۱۹', '۱۴۰۴/۱۲/۰۷', '۱۴۰۵/۰۷/۰۱', '۱۴۰۴/۰۹/۱۵', '۱۴۰۵/۰۴/۲۲', '۱۴۰۵/۰۶/۱۰'][d] : ['2026-09-15', '2026-07-25', '2026-06-09', '2026-02-26', '2026-09-23', '2025-12-06', '2026-07-13', '2026-09-01'][d];
  const first = (d) => fa ? ['۱۴۰۲/۰۳/۱۱', '۱۴۰۳/۱۱/۰۲', '۱۴۰۱/۰۷/۲۰', '۱۴۰۰/۰۲/۱۴', '۱۴۰۴/۰۸/۳۰', '۱۴۰۲/۰۱/۰۹', '۱۴۰۳/۰۴/۰۵', '۱۴۰۴/۰۱/۲۱'][d] : ['2023-06-01', '2025-01-22', '2022-10-12', '2021-05-04', '2025-11-21', '2023-03-29', '2024-06-26', '2025-04-10'][d];
  const base = [
    { days: 21, tier: 'HIGH', opp: 48000000, ret: 68, risk: 'High', iris: 82, seg: ['today_action_list', 'high_value_at_risk', 'unfinished_followup'], st: 'vip', action: 'a1', reasons: ['gap', 'pay', 'open'], visits: 14, fin: [186000000, 162000000, 24000000] },
    { days: 73, tier: 'MEDIUM', opp: 12500000, ret: 54, risk: 'Medium', iris: 74, seg: ['today_action_list', 'high_return_opportunity'], st: 'hot', action: 'a2', reasons: ['msg', 'open'], visits: 6, fin: [52000000, 52000000, 0] },
    { days: 35, tier: 'VIP', opp: 96000000, ret: 61, risk: 'High', iris: 69, seg: ['today_action_list', 'high_value_at_risk', 'critical_churn'], st: 'vip', action: 'a4', reasons: ['hv', 'open', 'noNext'], visits: 22, fin: [410000000, 380000000, 30000000] },
    { days: 212, tier: 'LOW', opp: 4200000, ret: 38, risk: 'Very High', iris: 61, seg: ['today_action_list', 'critical_churn'], st: 'risk', action: 'a3', reasons: ['cancel', 'long'], visits: 3, fin: [9800000, 9800000, 0] },
    { days: 6, tier: 'MEDIUM', opp: 0, ret: 88, risk: 'Active', iris: 44, seg: ['unfinished_followup'], st: 'fu', action: 'a5', reasons: ['open'], visits: 4, fin: [27000000, 20000000, 7000000] },
    { days: 290, tier: 'HIGH', opp: 31000000, ret: 41, risk: 'Very High', iris: 58, seg: ['today_action_list', 'critical_churn', 'high_value_at_risk'], st: 'risk', action: 'a2', reasons: ['long', 'noNext'], visits: 9, fin: [142000000, 142000000, 0] },
    { days: 48, tier: 'MEDIUM', opp: 8900000, ret: 72, risk: 'Medium', iris: 66, seg: ['high_return_opportunity'], st: 'hot', action: 'a3', reasons: ['cancel', 'msg'], visits: 7, fin: [61000000, 55000000, 6000000] },
    { days: 12, tier: 'HIGH', opp: 18000000, ret: 79, risk: 'Low', iris: 52, seg: ['high_return_opportunity', 'unfinished_followup'], st: 'fu', action: 'a5', reasons: ['open', 'gap'], visits: 11, fin: [120000000, 118000000, 2000000] },
  ];
  const patients = base.map((b, i) => ({
    rec: 1001 + i * 37, name: names[i], doctor: docs[i % 3], days: b.days, tier: b.tier, opp: b.opp, ret: b.ret, risk: b.risk, iris: b.iris, seg: b.seg,
    stage: stage[b.st][0], stageTone: stage[b.st][1], action: R[b.action], reasons: b.reasons.map((r) => R[r]), lastVisit: date(i), firstVisit: first(i), visits: b.visits, insurance: R.ins[i % 3], fin: b.fin,
    hist: [[date(i), R.svc[i % 6], Math.round(b.fin[0] / b.visits)], [first(i), R.svc[(i + 2) % 6], Math.round(b.fin[0] / b.visits * 0.8)]],
  }));
  const recep = (n) => fa ? 'پذیرش ' + '۱۲۳۴۵'[n - 1] : (lang === 'tr' ? 'Resepsiyon ' : 'Reception ') + n;
  const months = fa ? ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند', 'فرو', 'اردی', 'خرد', 'تیر', 'مرد', 'شهر'] : lang === 'tr' ? ['Eki', 'Kas', 'Ara', 'Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl'] : ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const wdays = fa ? ['ش', 'ی', 'د', 'س', 'چ', 'پ'] : lang === 'tr' ? ['Cmt', 'Paz', 'Pzt', 'Sal', 'Çar', 'Per'] : ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
  const sc = fa ? [
    { name: 'برنامه‌ی فعلی', cap: [60, 70, 82, 70, 96, 50], fill: 78, wait: 9, rev: 0, conf: 'پایین', rec: 'سه‌شنبه و چهارشنبه ظرفیت اضافه دارند؛ بیمارانِ «اقدامِ امروز» را به این دو روز هدایت کنید.', changes: [['تغییر', '—']] },
    { name: 'یک پزشکِ بیشتر در سه‌شنبه', cap: [60, 70, 82, 100, 96, 50], fill: 86, wait: 6, rev: 11, conf: 'پایین', rec: 'افزودنِ شیفتِ سه‌شنبه، ۲۲ بیمارِ در انتظار را در هفته‌ی آینده جا می‌دهد.', changes: [['شیفتِ جدید', 'سه‌شنبه ۱۴–۲۰'], ['ظرفیتِ اضافه', '+۲۲ نوبت']] },
    { name: 'بازه‌های ۲۰ دقیقه‌ای', cap: [72, 84, 98, 84, 110, 60], fill: 91, wait: 4, rev: 18, conf: 'متوسط', rec: 'کوتاه‌کردنِ بازه‌ها درآمد را بالا می‌برد ولی ریسکِ تأخیرِ زنجیره‌ای در چهارشنبه را افزایش می‌دهد.', changes: [['طولِ بازه', '۳۰ → ۲۰ دقیقه'], ['ظرفیتِ اضافه', '+۷۸ نوبت'], ['ریسک', 'تأخیرِ زنجیره‌ای']] },
  ] : lang === 'tr' ? [
    { name: 'Mevcut plan', cap: [60, 70, 82, 70, 96, 50], fill: 78, wait: 9, rev: 0, conf: 'Düşük', rec: 'Salı ve Çarşamba boş kapasite var; "bugünkü aksiyon" hastalarını bu günlere yönlendirin.', changes: [['Değişiklik', '—']] },
    { name: 'Salı bir hekim daha', cap: [60, 70, 82, 100, 96, 50], fill: 86, wait: 6, rev: 11, conf: 'Düşük', rec: 'Salı vardiyası eklemek, bekleyen 22 hastayı gelecek haftaya sığdırır.', changes: [['Yeni vardiya', 'Salı 14–20'], ['Ek kapasite', '+22 randevu']] },
    { name: '20 dakikalık slotlar', cap: [72, 84, 98, 84, 110, 60], fill: 91, wait: 4, rev: 18, conf: 'Orta', rec: 'Daha kısa slotlar geliri artırır ancak Çarşamba zincirleme gecikme riskini yükseltir.', changes: [['Slot süresi', '30 → 20 dk'], ['Ek kapasite', '+78 randevu'], ['Risk', 'zincirleme gecikme']] },
  ] : [
    { name: 'Current plan', cap: [60, 70, 82, 70, 96, 50], fill: 78, wait: 9, rev: 0, conf: 'Low', rec: 'Tuesday and Wednesday have spare capacity; route today’s action-list patients there.', changes: [['Change', '—']] },
    { name: 'One more doctor on Tuesday', cap: [60, 70, 82, 100, 96, 50], fill: 86, wait: 6, rev: 11, conf: 'Low', rec: 'Adding a Tuesday shift fits 22 waiting patients into next week.', changes: [['New shift', 'Tue 14–20'], ['Extra capacity', '+22 slots']] },
    { name: '20-minute slots', cap: [72, 84, 98, 84, 110, 60], fill: 91, wait: 4, rev: 18, conf: 'Medium', rec: 'Shorter slots raise revenue but increase cascading-delay risk on Wednesday.', changes: [['Slot length', '30 → 20 min'], ['Extra capacity', '+78 slots'], ['Risk', 'cascading delays']] },
  ];
  return {
    user: EXTRA[lang].demo.user, today: fa ? '۱۴۰۵/۰۷/۱۸' : '2026-10-10',
    note: fa ? 'همه‌ی نام‌ها، اعداد و رخدادها ساختگی‌اند.' : lang === 'tr' ? 'Tüm adlar, sayılar ve olaylar sentetiktir.' : 'All names, numbers and events are synthetic.',
    summary: { opportunity: 218600000, avgDays: 87 },
    patients,
    staff: { visits: 54540, leak: 70.5, months, trend: [27, 29, 31, 28, 33, 35, 30, 34, 38, 41, 39, 43], rows: [
      { name: recep(1), code: 101, visits: 6120, rebooked: 2210, rate: 36 }, { name: recep(5), code: 105, visits: 2090, rebooked: 1090, rate: 52 }, { name: recep(2), code: 102, visits: 5040, rebooked: 200, rate: 4 }, { name: recep(3), code: 103, visits: 4810, rebooked: 380, rate: 8 }, { name: recep(4), code: 104, visits: 4130, rebooked: 450, rate: 11 },
    ].sort((a, b) => b.rate - a.rate) },
    twin: { days: wdays, demand: [62, 78, 90, 88, 96, 58], scenarios: sc },
  };
}

function shell(lang, t, c) {
  const rtl = lang === 'fa';
  const navItem = (key, icon, view, locked) => `<a href="#" class="nav-item" data-view="${view}">${icon}<span class="grow truncate">${t.nav[key]}</span>${locked ? '<svg viewBox="0 0 24 24" class="icon icon-sm faint" aria-hidden="true"><rect x="4" y="10.5" width="16" height="10.5" rx="2.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>' : ''}</a>`;
  const I = {
    users: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/></svg>',
    userPlus: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M19 8v6M16 11h6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16.5" rx="2.5"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>',
    recovery: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 8v4l3 2"/></svg>',
    chart: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 6-6"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
    trending: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    search: '<svg viewBox="0 0 24 24" class="icon icon-sm" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    globe: '<svg viewBox="0 0 24 24" class="icon icon-sm" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
    menu: '<svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    logout: '<svg viewBox="0 0 24 24" class="icon flip-rtl" aria-hidden="true"><path d="M9 21H5.5A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3H9"/><path d="m16 17 5-5-5-5M21 12H9"/></svg>',
  };
  const langs = ['fa', 'en', 'tr'];
  return `<div class="shell">
<div class="scrim" id="scrim" hidden></div>
<aside class="sidebar" aria-label="Primary">
  <div class="brand"><span class="bm bm-tile" style="width:36px;height:36px" aria-hidden="true"><span class="bm-inner" style="height:27px"><img src="/demo/iqlinic-mark.png" alt="" draggable="false" style="height:27px"><span class="bm-ear"><i></i><i></i><i></i></span></span><span class="bm-sheen"></span></span><div class="col" style="gap:5px"><span class="wordmark" style="font-size:17px" dir="ltr">i<b>Q</b>linic</span><div class="brand-sub">${t.brand.tagline}</div></div></div>
  <nav class="col gap-4 nav" style="gap:2px"><span class="nav-indicator" aria-hidden="true" style="opacity:0"></span>
    <div class="col" style="gap:2px"><div class="nav-group">${t.nav.operations}</div>${navItem('reception', I.users, 'reception', true)}${navItem('newPatient', I.userPlus, 'newPatient', true)}${navItem('schedule', I.calendar, 'schedule', true)}</div>
    <div class="col" style="gap:2px"><div class="nav-group">${t.nav.intelligence}</div>${navItem('recovery', I.recovery, 'recovery')}${navItem('manager', I.chart, 'manager', true)}${navItem('decisionTwin', I.cpu, 'decisionTwin')}${navItem('staffPerformance', I.trending, 'staffPerformance')}</div>
    <div class="col" style="gap:2px"><div class="nav-group">${t.nav.admin}</div>${navItem('users', I.shield, 'users', true)}</div>
  </nav>
  <div class="sidebar-foot">
    <div class="row between" style="padding:0 4px"><div class="row gap-4">${langs.map((l) => `<a class="btn btn-ghost btn-sm" href="/${l}/demo/" data-kind="lang" aria-current="${l === lang ? 'page' : 'false'}" style="${l === lang ? 'background:var(--accent-soft);color:var(--accent-text)' : ''}">${l.toUpperCase()}</a>`).join('')}</div><button class="icon-btn" data-theme-toggle aria-label="${t.theme.label}"></button></div>
    <div class="user-card"><span class="avatar sm av-violet" aria-hidden="true">iQ</span><div class="grow" style="min-width:0"><div class="strong truncate small">${c.demo.user}</div><div class="xs faint truncate">${t.roles.manager}</div></div><a class="icon-btn" href="/${lang}/" data-kind="home" aria-label="${c.demo.back}" title="${c.demo.back}">${I.logout}</a></div>
  </div>
</aside>
<div class="main">
  <header class="topbar"><button class="icon-btn mobile-only" data-menu aria-label="${t.nav.openMenu}">${I.menu}</button><button type="button" class="cmd-trigger" data-cmd>${I.search}<span class="truncate">${t.nav.commandHint}</span><span class="kbd">Ctrl K</span></button><div class="grow"></div><span class="badge tone-violet"><span class="dot"></span>${t.common.demo}</span></header>
  <main class="page page-enter" id="page"></main>
</div>
</div>`;
}

for (const lang of ['fa', 'en', 'tr']) {
  const file = path.join(ROOT, lang, 'demo', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  let head = html.slice(0, html.indexOf('</head>'));
  head = head.replace(/<link[^>]*(demo\/|styles\.css|site-v)[^>]*>\n?/g, '').replace(/<script[^>]*(demo\/|site-v|contact-widget)[^>]*><\/script>\n?/g, '');
  head = head.replace(/<script id="v4-early">[\s\S]*?<\/script>\n?/g, '').replace(/<link[^>]*id="v4-(core|shell)"[^>]*>\n?/g, '').replace(/<script[^>]*id="v4-js"[^>]*><\/script>\n?/g, '');
  head = head.replace(/<meta name="theme-color" content="[^"]*">/, '<meta name="theme-color" content="#0a0a0c">');
  head += `<link rel="stylesheet" href="/demo/app.css?v=${V}">\n<link rel="stylesheet" href="/demo/v4.css?v=${V}">\n<script>(function(){try{var v=localStorage.getItem('iq-demo-theme')||'dark';document.documentElement.setAttribute('data-theme',v);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();</script>\n</head>\n`;
  const loc = JSON.parse(fs.readFileSync(path.join(ROOT, 'demo', 'locales', `loc_${lang}.json`), 'utf8'));
  const p360 = lang === 'fa' ? { title: 'Patient 360', basics: 'اطلاعات پایه', currentInsurance: 'بیمه فعلی', realVisits: 'روزهای مراجعه', firstVisit: 'اولین مراجعه', lastVisit: 'آخرین مراجعه', value: 'ارزش مالی', level: 'سطح', score: 'امتیاز', totalServices: 'کل خدمات', totalReceived: 'کل دریافتی', balance: 'مانده', payments: 'وضعیت مالی', received: 'مبلغ دریافتی', lastVisits: 'آخرین مراجعه‌ها' }
    : lang === 'tr' ? { title: 'Patient 360', basics: 'Temel bilgiler', currentInsurance: 'Mevcut sigorta', realVisits: 'Ziyaret günleri', firstVisit: 'İlk ziyaret', lastVisit: 'Son ziyaret', value: 'Finansal değer', level: 'Seviye', score: 'Puan', totalServices: 'Toplam hizmet', totalReceived: 'Toplam tahsilat', balance: 'Bakiye', payments: 'Finansal durum', received: 'Tahsil edilen', lastVisits: 'Son ziyaretler' }
    : { title: 'Patient 360', basics: 'Basics', currentInsurance: 'Current insurance', realVisits: 'Visit days', firstVisit: 'First visit', lastVisit: 'Last visit', value: 'Financial value', level: 'Level', score: 'Score', totalServices: 'Total services', totalReceived: 'Total received', balance: 'Balance', payments: 'Financial status', received: 'Received', lastVisits: 'Recent visits' };
  const t = Object.assign({}, loc, { p360 }, EXTRA[lang]);
  const cfg = { lang, t, demo: dataset(lang), contact: `/${lang}/#contact` };
  const body = `<body class="demo-v4">\n${shell(lang, t, EXTRA[lang])}\n<script>window.IQ_DEMO=${JSON.stringify(cfg)};</script>\n<script defer src="/demo/v4.js?v=${V}"></script>\n</body>\n</html>\n`;
  fs.writeFileSync(file, head + body);
  console.log('built demo', lang);
}
