#!/usr/bin/env node
/* Builds fa/en/tr home pages (v4): keeps each page's existing <head> metadata, replaces the body.
   Run: node scripts/build-home-v4.js && node scripts/apply-v4-shell.js */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const V = '4';

/* ---------- UI translation of the in-device product screens (fa → en/tr). Longest keys replaced first. ---------- */
const UI = {
  en: {
    'ابتدا مانعِ مالی را روشن کنید؛ سپس پیگیری را زمان‌بندی کنید.': 'Clear the payment question first; then schedule the follow-up.',
    'اثر روی درآمدِ ماه': 'Effect on monthly revenue', 'ارجاع برای بررسی انسانی': 'Refer for human review', 'ارسال پیام': 'Send message', 'از آخرین ویزیت': 'since last visit',
    'اقدام‌های امروز': "Today's actions", 'اولویت بالا': 'High priority', 'با دلیل': 'With reasons', 'بازگشت بیمار': 'Patient Recovery', 'بالا': 'High', 'بدونِ نوبتِ بعدی': 'no next appointment',
    'برگشته این ماه': 'returned this month', 'بیمار در حالِ ریزش': 'patients at risk', 'بیمار نمونه': 'Sample patient', 'بیمارانی که نیاز به بررسی دارند — امروز': 'Patients who need review — today',
    'تأیید / رد': 'Approve / reject', 'تأیید': 'Approve', 'تصمیم با تیم': 'the team decides', 'تعامل': 'Engagement', 'تقاضا در برابرِ ظرفیت — هفته‌ی آینده': 'Demand vs capacity — next week',
    'تماس پیگیری': 'Follow-up call', 'توصیهٔ امروز': "today's recommendations", 'ثبت تماس پیگیری': 'Log follow-up call', 'جستجو یا رفتن به…': 'Search or jump to…', 'درمان': 'Treatment',
    'دوقلوی تصمیم': 'Decision Twin', 'پزشک ۲ · چهارشنبه ۱۱:۰۰': 'Doctor 2 · Wed 11:00', 'ر. کریمی': 'R. Karimi', 'رد': 'Reject', 'روند ۷ روزه ↑': '7-day trend ↑', 'ریسک بالا': 'High risk', 'ریسک ریزش': 'Churn risk',
    'زنده': 'Live', 'س. احمدی': 'S. Ahmadi', 'سؤال مالی بی‌پاسخ · ۲ تماس': 'Unanswered payment question · 2 calls', 'شبیه‌سازیِ ظرفیتِ پزشک‌ها قبل از اقدام': 'Simulate doctor capacity before acting', 'شبیه‌سازی': 'Simulate',
    'طرح درمان باز · ۳۵ روز': 'Open treatment plan · 35 days', 'طرح درمانِ باز. احتمال بازگشت با تماسِ امروز:': 'open treatment plan. Return likelihood if called today:',
    'ظرفیت ۹۶٪ · ریسک تداخل پایین': 'Capacity 96% · low conflict risk', 'ظرفیتِ قابلِ بازیابی': 'recoverable capacity', 'عملکرد پرسنل': 'Staff Performance', 'عملیات': 'Operations', 'قبل از اقدام': 'before acting',
    'لغو نوبت · بدون جایگزین': 'Cancelled · no replacement', 'م. رضایی': 'M. Rezaei', 'متوسط': 'Medium', 'مدیریت': 'Admin', 'مقایسهٔ هم‌زمان': 'compared side by side', 'ن. موسوی': 'N. Mousavi',
    'نتیجه‌ی اقدام‌ها (۳۰ روز)': 'Action outcomes (30 days)', 'نشتِ نوبتِ سرِ ویزیت': 'chairside rebooking leak', 'نوبت · درمان · پرداخت': 'visits · treatment · payments', 'نوبت‌های پزشکان': "Doctors' schedules", 'نوبت': 'Appointment',
    'نیاز به بررسی': 'Needs review', 'نیازمند بررسی': 'Needs review', 'هر توصیه، شواهدش': 'every suggestion shows its evidence', 'هوش تجاری': 'Intelligence', 'وفاداری': 'Loyalty',
    'وقفه‌ی درمان ۲۱ روز · نوبت بعدی ثبت نشده': '21-day treatment gap · no next appointment', 'ویزیت ۱۲ ماه': 'visits in 12 months', 'ویزیت': 'Visits', 'پایین': 'Low',
    'پذیرشِ فعال': 'active receptionists', 'پذیرش ۱': 'Reception 1', 'پذیرش ۲': 'Reception 2', 'پذیرش ۳': 'Reception 3', 'پذیرش ۴': 'Reception 4', 'پذیرش ۵': 'Reception 5', 'پذیرش': 'Reception',
    'پرداخت': 'Payment', 'پرسنل فعال': 'Active staff', 'پرونده‌ی ساختگی · لمینت · آخرین مراجعه ۲۱ روز قبل': 'Synthetic record · veneers · last visit 21 days ago', 'پیامِ بی‌پاسخ': 'unanswered message', 'پیام': 'Message',
    'پیشنهاد با دلیل؛ تصمیمِ نهایی با تیم': 'Suggestions with reasons; the team makes the final call', 'پیشنهادِ نوبت': 'Suggested slot', 'پیگیری': 'Follow-up', 'چرا: وقفه‌ی ۲۱ روزه در درمان': 'Why: 21-day gap in treatment',
    'کاربران و دسترسی‌ها': 'Users & access', 'کد': 'ID', 'گزینه‌ی دیگر': 'Other option', 'یادآوری نوبت': 'Appointment reminder', '۱ تصویر': '1 view', '۱۲ ماه اخیر · نوبتِ سرِ ویزیت = بیمار با نوبتِ بعدی رفته': 'Last 12 months · chairside rebooking = patient left with a next appointment',
    '۲۱ روز': '21 days', '۳ سناریو': '3 scenarios', '— سؤال مالی بی‌پاسخ (۲ تماس)': '— unanswered payment question (2 calls)', '— مرحله‌ی بعدِ طرح درمان باز است': '— next step of the treatment plan is open',
    '— نوبتِ بعدی ثبت نشده': '— no next appointment booked', '— ۱۴۰۵/۰۶/۲۴ ویزیت انجام شد': '— 2026-09-15 visit completed', 'چهارشنبه': 'Wednesday',
  },
  tr: {
    'ابتدا مانعِ مالی را روشن کنید؛ سپس پیگیری را زمان‌بندی کنید.': 'Önce ödeme sorusunu netleştirin; sonra takibi planlayın.',
    'اثر روی درآمدِ ماه': 'Aylık gelire etkisi', 'ارجاع برای بررسی انسانی': 'İnsan incelemesine yönlendir', 'ارسال پیام': 'Mesaj gönder', 'از آخرین ویزیت': 'son ziyaretten beri',
    'اقدام‌های امروز': 'Bugünün aksiyonları', 'اولویت بالا': 'Yüksek öncelik', 'با دلیل': 'Gerekçeli', 'بازگشت بیمار': 'Hasta Geri Kazanımı', 'بالا': 'Yüksek', 'بدونِ نوبتِ بعدی': 'sonraki randevu yok',
    'برگشته این ماه': 'bu ay geri döndü', 'بیمار در حالِ ریزش': 'riskli hasta', 'بیمار نمونه': 'Örnek hasta', 'بیمارانی که نیاز به بررسی دارند — امروز': 'İncelenmesi gereken hastalar — bugün',
    'تأیید / رد': 'Onayla / reddet', 'تأیید': 'Onayla', 'تصمیم با تیم': 'kararı ekip verir', 'تعامل': 'Etkileşim', 'تقاضا در برابرِ ظرفیت — هفته‌ی آینده': 'Talep ve kapasite — gelecek hafta',
    'تماس پیگیری': 'Takip araması', 'توصیهٔ امروز': 'bugünkü öneri', 'ثبت تماس پیگیری': 'Takip aramasını kaydet', 'جستجو یا رفتن به…': 'Ara veya git…', 'درمان': 'Tedavi',
    'دوقلوی تصمیم': 'Karar İkizi', 'پزشک ۲ · چهارشنبه ۱۱:۰۰': 'Hekim 2 · Çar 11:00', 'ر. کریمی': 'R. Karimi', 'رد': 'Reddet', 'روند ۷ روزه ↑': '7 günlük eğilim ↑', 'ریسک بالا': 'Yüksek risk', 'ریسک ریزش': 'Kopuş riski',
    'زنده': 'Canlı', 'س. احمدی': 'S. Ahmadi', 'سؤال مالی بی‌پاسخ · ۲ تماس': 'Yanıtsız ödeme sorusu · 2 arama', 'شبیه‌سازیِ ظرفیتِ پزشک‌ها قبل از اقدام': 'Harekete geçmeden hekim kapasitesini simüle et', 'شبیه‌سازی': 'Simülasyon',
    'طرح درمان باز · ۳۵ روز': 'Açık tedavi planı · 35 gün', 'طرح درمانِ باز. احتمال بازگشت با تماسِ امروز:': 'açık tedavi planı. Bugün aranırsa dönüş olasılığı:',
    'ظرفیت ۹۶٪ · ریسک تداخل پایین': 'Kapasite %96 · düşük çakışma riski', 'ظرفیتِ قابلِ بازیابی': 'geri kazanılabilir kapasite', 'عملکرد پرسنل': 'Personel Performansı', 'عملیات': 'Operasyon', 'قبل از اقدام': 'harekete geçmeden önce',
    'لغو نوبت · بدون جایگزین': 'İptal · yerine randevu yok', 'م. رضایی': 'M. Rezaei', 'متوسط': 'Orta', 'مدیریت': 'Yönetim', 'مقایسهٔ هم‌زمان': 'yan yana karşılaştırma', 'ن. موسوی': 'N. Musavi',
    'نتیجه‌ی اقدام‌ها (۳۰ روز)': 'Aksiyon sonuçları (30 gün)', 'نشتِ نوبتِ سرِ ویزیت': 'koltuk başı randevu kaçağı', 'نوبت · درمان · پرداخت': 'randevu · tedavi · ödeme', 'نوبت‌های پزشکان': 'Hekim takvimleri', 'نوبت': 'Randevu',
    'نیاز به بررسی': 'İnceleme gerekli', 'نیازمند بررسی': 'İnceleme gerekli', 'هر توصیه، شواهدش': 'her öneri kanıtını gösterir', 'هوش تجاری': 'Zekâ', 'وفاداری': 'Sadakat',
    'وقفه‌ی درمان ۲۱ روز · نوبت بعدی ثبت نشده': '21 günlük tedavi arası · sonraki randevu yok', 'ویزیت ۱۲ ماه': '12 aylık ziyaret', 'ویزیت': 'Ziyaret', 'پایین': 'Düşük',
    'پذیرشِ فعال': 'aktif resepsiyonist', 'پذیرش ۱': 'Resepsiyon 1', 'پذیرش ۲': 'Resepsiyon 2', 'پذیرش ۳': 'Resepsiyon 3', 'پذیرش ۴': 'Resepsiyon 4', 'پذیرش ۵': 'Resepsiyon 5', 'پذیرش': 'Resepsiyon',
    'پرداخت': 'Ödeme', 'پرسنل فعال': 'Aktif personel', 'پرونده‌ی ساختگی · لمینت · آخرین مراجعه ۲۱ روز قبل': 'Sentetik kayıt · lamine · son ziyaret 21 gün önce', 'پیامِ بی‌پاسخ': 'yanıtsız mesaj', 'پیام': 'Mesaj',
    'پیشنهاد با دلیل؛ تصمیمِ نهایی با تیم': 'Gerekçeli öneri; son kararı ekip verir', 'پیشنهادِ نوبت': 'Önerilen randevu', 'پیگیری': 'Takip', 'چرا: وقفه‌ی ۲۱ روزه در درمان': 'Neden: tedavide 21 günlük ara',
    'کاربران و دسترسی‌ها': 'Kullanıcılar ve erişim', 'کد': 'No', 'گزینه‌ی دیگر': 'Diğer seçenek', 'یادآوری نوبت': 'Randevu hatırlatma', '۱ تصویر': '1 görünüm', '۱۲ ماه اخیر · نوبتِ سرِ ویزیت = بیمار با نوبتِ بعدی رفته': 'Son 12 ay · koltuk başı randevu = hasta sonraki randevuyla ayrıldı',
    '۲۱ روز': '21 gün', '۳ سناریو': '3 senaryo', '— سؤال مالی بی‌پاسخ (۲ تماس)': '— yanıtsız ödeme sorusu (2 arama)', '— مرحله‌ی بعدِ طرح درمان باز است': '— tedavi planının sonraki adımı açık',
    '— نوبتِ بعدی ثبت نشده': '— sonraki randevu alınmamış', '— ۱۴۰۵/۰۶/۲۴ ویزیت انجام شد': '— 2026-09-15 ziyaret tamamlandı', 'چهارشنبه': 'Çarşamba',
  },
};
const LETTERS = { 'م': 'M', 'س': 'S', 'ر': 'R', 'ن': 'N', 'پ': 'R', 'د': 'D', 'ش': 'S', 'ج': 'J', 'چ': 'C', 'ی': 'Y', 'ف': 'F', 'ک': 'K', 'ا': 'A', 'ه': 'H' };
function uiTranslator(lang) {
  if (lang === 'fa') return 'window.IQ_HOME_L=function(x){return x;};';
  const map = UI[lang];
  const keys = Object.keys(map).sort((a, b) => b.length - a.length);
  return `window.IQ_HOME_L=(function(){var M=${JSON.stringify(keys.map(k => [k, map[k]]))};var D='۰۱۲۳۴۵۶۷۸۹';var LT=${JSON.stringify(LETTERS)};
return function(x){for(var i=0;i<M.length;i++){x=x.split(M[i][0]).join(M[i][1]);}
x=x.replace(/[۰-۹]/g,function(d){return String(D.indexOf(d));}).replace(/٬/g,',').replace(/٫/g,'.').replace(/٪/g,'%');
x=x.replace(/<div class="av">([^<]*)<\\/div>/g,function(m,t){return '<div class="av">'+t.replace(/[\\u0600-\\u06FF]/g,function(c){return LT[c]||'';})+'</div>';});
return x;};})();`;
}

/* ---------- page copy ---------- */
const C = {
  fa: {
    lang: 'fa', dir: 'rtl',
    ey: 'CLINICAL INTELLIGENCE FOR A HEALTHIER TOMORROW',
    h1a: 'داده‌های کلینیک شما', h1b: 'به تصمیم‌های بهتر، فرداهای سالم‌تر',
    sub: '<b>iQlinic</b> روی سیستمِ فعلیِ کلینیک می‌نشیند (فقط‌خواندنی)، داده‌های پراکنده را به بینشِ عملی تبدیل می‌کند و به تیم می‌گوید دقیقاً چه کاری، برای چه کسی و چرا.',
    mods: [['↺', 'بازگشتِ بیمار', 'بیمارانِ در حالِ ریزش، قبل از رفتن'], ['◎', 'Patient 360°', 'نوبت، درمان، پرداخت و پیگیری در یک تصویر'], ['➜', 'Next Best Action', 'توصیه با دلیل؛ تیم تأیید یا رد می‌کند'], ['▥', 'عملکرد پرسنل', 'چه کسی نوبتِ سرِ ویزیت می‌دهد، چه کسی نه'], ['⧉', 'دوقلوی تصمیم', 'شبیه‌سازیِ ظرفیت و نوبت‌دهی قبل از اقدام']],
    cta1: 'درخواست بررسی', cta2: 'دموی تعاملی', demo: '/fa/demo/', contact: 'mailto:contact@iqlinic.ir?subject=iQlinic%20Clinic%20Assessment',
    xr: 'نمای داخل دستگاه', hint: 'بکش تا بچرخد ⟲ · دکمه‌ها ماژول را عوض می‌کنند',
    problem: { kick: 'مسئله‌ای که بین سیستم‌ها گم می‌شود', h2: 'ریزش بیمار معمولاً قبل از اینکه واضح شود، شروع شده است.', lead: 'یک لغو نوبت تنها نشانه نیست. طرح درمان باز، نبود نوبت بعدی، تأخیر غیرعادی، سؤال مالی بی‌پاسخ یا قطع پیگیری می‌توانند کنار هم معنای متفاوتی بسازند.',
      tiles: [['⌬', 'زمینه پراکنده', 'اطلاعات تصمیم‌ساز بین نوبت، درمان، پرداخت و ارتباطات توزیع شده است.'], ['◷', 'پیگیری واکنشی', 'بسیاری از تیم‌ها زمانی متوجه افت مسیر می‌شوند که بیمار مدت زیادی غیرفعال مانده است.'], ['≡', 'اولویت نامشخص', 'لیست بلند تماس نمی‌گوید امروز کدام بیمار مهم‌تر است و چرا.']] },
    layer: { kick: 'لایه تصمیم، نه PMS دیگر', h2: 'محصول باید به تیم بگوید چه چیزی را اکنون بررسی کند.', lead: 'iQlinic قرار نیست پرونده، مالی یا نوبت‌دهی را دوباره بسازد. هدف، تبدیل رخدادهای موجود به زمینه قابل استفاده برای تصمیم است.',
      panels: [['Recovery Intelligence', [['ترکیب چند نشانه به‌جای یک قانون ساده', 'ریسک فقط از «آخرین مراجعه» ساخته نمی‌شود.'], ['توضیح دلیل هر سیگنال', 'تیم می‌تواند پیشنهاد را بفهمد و به چالش بکشد.'], ['تمرکز روی care continuity', 'هدف، دیدن توقف و اصطکاک قبل از ریزش کامل است.']]],
               ['Human-in-the-loop', [['پیشنهاد به‌جای تصمیم خودکار', 'اقدام نهایی توسط تیم کلینیک انتخاب می‌شود.'], ['شروع محدود و فقط‌خواندنی', 'در سناریوهایی که اتصال منبع داده اجازه دهد.'], ['ثبت نتیجه برای یادگیری', 'مفید یا نامفید بودن سیگنال باید قابل اندازه‌گیری باشد.']]]] },
    how: { kick: 'از داده تا اقدام', h2: 'چهار مرحله، بدون جادوی مبهم.', steps: [['اتصال و نگاشت', 'منبع داده، workflow و کیفیت اطلاعات قبل از استقرار بررسی می‌شود.'], ['ساخت Patient 360', 'رخدادهای مرتبط در یک زمینه قابل استفاده برای تصمیم کنار هم قرار می‌گیرند.'], ['ساخت سیگنال', 'وقفه، تأخیر و نیاز به پیگیری با دلایل قابل مشاهده پرچم‌گذاری می‌شوند.'], ['اقدام، نتیجه و بازبینی', 'تیم پیشنهاد را بررسی می‌کند، تصمیم می‌گیرد و نتیجه برای ارزیابی چرخه بعد ثبت می‌شود.']] },
    ev: { kick: 'Evidence before claims', h2: 'نور و حرکت برای تجربه است؛ عدد واقعی باید از پایلوت بیاید.', note: ['تمام داده‌های این نمایش ساختگی‌اند.', 'عملکرد واقعی فقط بعد از اتصال به داده کلینیک، تعریف baseline و اندازه‌گیری کنترل‌شده قابل ادعاست.'], mh: 'چه چیزی باید سنجیده شود؟',
      metrics: [['Recovery opportunity', 'چند سیگنال واقعاً قابل اقدام است؟'], ['Action completion', 'تیم چه درصدی از اقدامات اولویت‌دار را انجام می‌دهد؟'], ['Return / continuation', 'پس از اقدام، ادامه درمان چه تغییری می‌کند؟'], ['False-positive review', 'کدام سیگنال‌ها مفید نبودند و چرا؟']] },
    faq: { kick: 'پرسش‌های رایج', h2: 'سه سؤالی که همیشه پرسیده می‌شود.', items: [['آیا iQlinic جای نرم‌افزار مدیریت کلینیک را می‌گیرد؟', 'خیر. تمرکز iQlinic روی لایه هوشمندی و تصمیم است و سیستم عملیاتی موجود حفظ می‌شود.'], ['دموی عمومی از اطلاعات واقعی بیمار استفاده می‌کند؟', 'خیر. نام‌ها، اعداد و رخدادهای دموی عمومی ساختگی‌اند.'], ['آیا هر کلینیکی فوراً قابل اتصال است؟', 'خیر. نوع سیستم منبع، دسترسی، کیفیت داده و محدودیت‌های فنی باید ابتدا بررسی شوند.']] },
    cta: { kick: 'از امکان‌سنجی شروع کنیم', h2: 'ببینیم داده کلینیک شما واقعاً چه چیزی را پشتیبانی می‌کند.', lead: 'یک workflow مشخص را انتخاب می‌کنیم، حداقل داده لازم را مشخص می‌کنیم و تعریف می‌کنیم پایلوت دقیقاً باید چه چیزی را اثبات کند.', b1: 'درخواست بررسی کلینیک', b2: 'اول دمو را ببینم', tagsLead: 'طراحی‌شده برای کلینیک‌های داده‌محور' },
  },
  en: {
    lang: 'en', dir: 'ltr',
    ey: 'CLINICAL INTELLIGENCE FOR A HEALTHIER TOMORROW',
    h1a: 'Your clinic’s data,', h1b: 'turned into better decisions',
    sub: '<b>iQlinic</b> sits on top of the system your clinic already uses (read-only), turns scattered data into actionable insight, and tells the team exactly what to do, for whom, and why.',
    mods: [['↺', 'Patient Recovery', 'Patients drifting away, caught before they leave'], ['◎', 'Patient 360°', 'Appointments, treatment, payments and follow-up in one view'], ['➜', 'Next Best Action', 'Suggestions with reasons; the team approves or rejects'], ['▥', 'Staff Performance', 'Who rebooks patients at the chair, and who doesn’t'], ['⧉', 'Decision Twin', 'Simulate capacity and scheduling before you act']],
    cta1: 'Request a review', cta2: 'Live demo', demo: '/en/demo/', contact: 'mailto:contact@iqlinic.ir?subject=iQlinic%20Clinic%20Assessment',
    xr: 'Look inside', hint: 'Drag to rotate ⟲ · buttons switch modules',
    problem: { kick: 'The problem between systems', h2: 'Patient drop-off begins before it becomes obvious.', lead: 'A cancellation is only one clue. An open treatment plan, no next appointment, an unusual delay, an unresolved payment question or a broken follow-up chain can mean something different when seen together.',
      tiles: [['⌬', 'Fragmented context', 'Decision-relevant information is distributed across appointments, treatment, payments and communications.'], ['◷', 'Reactive follow-up', 'Teams often notice the problem after the patient has already been inactive for too long.'], ['≡', 'Unclear priority', 'A long call list does not tell the team who deserves attention today, or why.']] },
    layer: { kick: 'A decision layer, not another PMS', h2: 'The product should tell the team what deserves review now.', lead: 'iQlinic is not designed to rebuild records, billing or scheduling. It turns existing operational events into decision-ready context.',
      panels: [['Recovery Intelligence', [['Combine multiple signals instead of one simple rule', 'Risk is not built from recency alone.'], ['Explain why every signal exists', 'The team can understand and challenge the suggestion.'], ['Focus on continuity of care', 'See friction before full disengagement.']]],
               ['Human in the loop', [['Recommend rather than auto-decide', 'The clinic team keeps final control.'], ['Start narrowly and read-only', 'Where the source system and permissions support it.'], ['Record outcomes for learning', 'Useful and unhelpful signals should both be measurable.']]]] },
    how: { kick: 'From data to action', h2: 'Four steps, without black-box theater.', steps: [['Connect & map', 'Understand the source system, workflow and data quality before deployment.'], ['Build Patient 360', 'Bring relevant events together into context that can support a decision.'], ['Generate signals', 'Flag care gaps and follow-up needs with visible reasons.'], ['Act, measure, review', 'The team reviews the suggestion, makes the final decision and records the result for the next cycle.']] },
    ev: { kick: 'Evidence before claims', h2: 'Motion is for experience. Real numbers must come from a pilot.', note: ['Everything in the public preview is synthetic.', 'Real impact can only be claimed after a clinic baseline, controlled measurement and an agreed evaluation plan.'], mh: 'What should a pilot measure?',
      metrics: [['Recovery opportunity', 'How many signals are genuinely actionable?'], ['Action completion', 'How often does the team complete prioritized actions?'], ['Return / continuation', 'What changes after the intervention?'], ['False-positive review', 'Which signals were not useful, and why?']] },
    faq: { kick: 'Frequently asked', h2: 'Three questions we always get.', items: [['Does iQlinic replace clinic management software?', 'No. The focus is the intelligence and decision layer while the existing operational system stays in place.'], ['Does the public demo use real patient data?', 'No. Every patient, number and event in the public demo is synthetic.'], ['Can every clinic connect immediately?', 'No. Integration depends on the source system, permissions, data quality and technical constraints.']] },
    cta: { kick: 'Start with feasibility', h2: 'See what your clinic data can actually support.', lead: 'Choose one workflow, define the minimum data required, and agree on exactly what a controlled pilot needs to prove.', b1: 'Request clinic assessment', b2: 'Explore the demo first', tagsLead: 'Designed for data-driven clinics' },
  },
  tr: {
    lang: 'tr', dir: 'ltr',
    ey: 'CLINICAL INTELLIGENCE FOR A HEALTHIER TOMORROW',
    h1a: 'Kliniğinizin verisi,', h1b: 'daha iyi kararlara dönüşsün',
    sub: '<b>iQlinic</b> kliniğin mevcut sisteminin üzerine oturur (salt okunur), dağınık veriyi uygulanabilir içgörüye çevirir ve ekibe tam olarak ne yapılacağını, kimin için ve neden yapılacağını söyler.',
    mods: [['↺', 'Hasta Geri Kazanımı', 'Kopmakta olan hastalar, gitmeden önce'], ['◎', 'Patient 360°', 'Randevu, tedavi, ödeme ve takip tek görünümde'], ['➜', 'Next Best Action', 'Gerekçeli öneri; ekip onaylar veya reddeder'], ['▥', 'Personel Performansı', 'Kim koltuk başında randevu veriyor, kim vermiyor'], ['⧉', 'Karar İkizi', 'Harekete geçmeden kapasiteyi ve randevuyu simüle et']],
    cta1: 'İnceleme talep et', cta2: 'Canlı demo', demo: '/tr/demo/', contact: 'mailto:contact@iqlinic.ir?subject=iQlinic%20Clinic%20Assessment',
    xr: 'Cihazın içine bak', hint: 'Döndürmek için sürükle ⟲ · düğmeler modülü değiştirir',
    problem: { kick: 'Sistemler arasındaki görünmez sorun', h2: 'Hasta kopuşu görünür olmadan önce başlar.', lead: 'Bir iptal tek başına yeterli değildir. Açık tedavi planı, sonraki randevunun olmaması, olağandışı gecikme, çözülemeyen ödeme sorusu veya kırılan takip zinciri birlikte farklı anlam taşır.',
      tiles: [['⌬', 'Dağınık bağlam', 'Karar için gerekli bilgi randevu, tedavi, ödeme ve iletişim sistemlerine dağılmıştır.'], ['◷', 'Reaktif takip', 'Ekip sorunu çoğu zaman hasta uzun süre pasif kaldıktan sonra fark eder.'], ['≡', 'Belirsiz öncelik', 'Uzun arama listesi bugün kimin daha önemli olduğunu ve nedenini söylemez.']] },
    layer: { kick: 'Başka bir PMS değil', h2: 'Ürün, ekibe şimdi neyin incelenmesi gerektiğini göstermeli.', lead: 'iQlinic kayıt, finans veya randevuyu yeniden inşa etmek için değil; mevcut operasyon olaylarını karar verilebilir bağlama dönüştürmek için tasarlanmıştır.',
      panels: [['Recovery Intelligence', [['Tek kural yerine birden fazla sinyali birleştirir', 'Risk yalnızca son ziyaret tarihinden oluşmaz.'], ['Her sinyalin nedenini açıklar', 'Ekip öneriyi anlayabilir ve sorgulayabilir.'], ['Tedavi sürekliliğine odaklanır', 'Tam kopuş gerçekleşmeden önce sürtünmeyi görür.']]],
               ['Human in the loop', [['Otomatik karar yerine öneri verir', 'Son kontrol klinik ekibinde kalır.'], ['Dar kapsamlı ve salt-okunur başlayabilir', 'Kaynak sistem ve izinler desteklediğinde.'], ['Sonuçları öğrenme için kaydeder', 'Faydalı ve faydasız sinyaller ölçülebilir olmalıdır.']]]] },
    how: { kick: 'Veriden aksiyona', h2: 'Dört adım, kara kutu gösterisi olmadan.', steps: [['Bağlan & eşle', 'Kurulumdan önce kaynak sistem, iş akışı ve veri kalitesi anlaşılır.'], ['Patient 360 oluştur', 'İlgili olaylar karar verebilecek tek bir bağlamda birleştirilir.'], ['Sinyal üret', 'Bakım boşlukları ve takip ihtiyaçları görünür gerekçelerle işaretlenir.'], ['Aksiyon al, ölç, gözden geçir', 'Ekip öneriyi inceler, son kararı verir ve sonucu bir sonraki döngü için kaydeder.']] },
    ev: { kick: 'İddiadan önce kanıt', h2: 'Hareket deneyim içindir. Gerçek sayılar pilottan gelmelidir.', note: ['Herkese açık önizlemedeki tüm veriler sentetiktir.', 'Gerçek etki ancak klinik baseline’ı, kontrollü ölçüm ve kabul edilmiş değerlendirme planıyla iddia edilebilir.'], mh: 'Pilotta ne ölçülmeli?',
      metrics: [['Recovery opportunity', 'Kaç sinyal gerçekten aksiyon alınabilir?'], ['Action completion', 'Ekip öncelikli aksiyonların ne kadarını tamamlıyor?'], ['Return / continuation', 'Müdahale sonrası ne değişiyor?'], ['False-positive review', 'Hangi sinyaller faydalı değildi ve neden?']] },
    faq: { kick: 'Sık sorulanlar', h2: 'Her zaman sorulan üç soru.', items: [['iQlinic klinik yönetim yazılımının yerini alır mı?', 'Hayır. Odak zekâ ve karar katmanıdır; mevcut operasyon sistemi yerinde kalır.'], ['Herkese açık demo gerçek hasta verisi kullanıyor mu?', 'Hayır. Demodaki her hasta, sayı ve olay sentetiktir.'], ['Her klinik hemen bağlanabilir mi?', 'Hayır. Entegrasyon kaynak sisteme, izinlere, veri kalitesine ve teknik sınırlara bağlıdır.']] },
    cta: { kick: 'Önce uygunluk', h2: 'Klinik verinizin gerçekte neyi destekleyebileceğini görelim.', lead: 'Bir iş akışı seçelim, minimum veri gereksinimini tanımlayalım ve kontrollü pilotun tam olarak neyi kanıtlaması gerektiğini belirleyelim.', b1: 'Klinik değerlendirmesi iste', b2: 'Önce demoyu incele', tagsLead: 'Veri odaklı klinikler için tasarlandı' },
  },
};
const CH = {
  fa: [['ایمیل', 'contact@iqlinic.ir'], ['واتساپ', 'پیام به تیم ما'], ['تلگرام', 'شروع گفت‌وگوی خصوصی'], 'سلام iQlinic، می‌خواهم درباره راهکار هوش بالینی شما برای کلینیک‌های دندانپزشکی بیشتر بدانم.'],
  en: [['Email', 'contact@iqlinic.ir'], ['WhatsApp', 'Message our team'], ['Telegram', 'Start a private chat'], 'Hello iQlinic, I would like to learn more about your clinical intelligence solution for dental clinics.'],
  tr: [['E-posta', 'contact@iqlinic.ir'], ['WhatsApp', 'Ekibimize yazın'], ['Telegram', 'Özel sohbet başlatın'], 'Merhaba iQlinic, diş klinikleri için klinik zekâ çözümünüz hakkında daha fazla bilgi almak istiyorum.'],
};
const PHONE = '905362914170';
const ICO = {
  mail: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.8 5.5h16.4c1 0 1.8.8 1.8 1.8v9.4c0 1-.8 1.8-1.8 1.8H3.8c-1 0-1.8-.8-1.8-1.8V7.3c0-1 .8-1.8 1.8-1.8Zm8.2 7.1 7.4-5.1H4.6l7.4 5.1Zm0 2.1L3.8 9v7.7h16.4V9L12 14.7Z"/></svg>',
  wa: '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M27.3 4.6A15.8 15.8 0 0 0 2.4 23.7L.2 31.8l8.3-2.2a15.8 15.8 0 0 0 7.5 1.9h.1A15.8 15.8 0 0 0 27.3 4.6ZM16.1 28.8h-.1a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5a13.1 13.1 0 1 1 11.1 6.1Zm7.2-9.8c-.4-.2-2.3-1.2-2.7-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.2 1.5c-.2.3-.5.3-.8.1a10.7 10.7 0 0 1-5.3-4.6c-.4-.7.4-.6 1.1-2.1.1-.3.1-.5 0-.7l-1.2-2.9c-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.2c.2.3 2.9 4.4 7 6.2 2.6 1.1 3.6 1.2 4.9 1 .8-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.1-.4-.2-.8-.4Z"/></svg>',
  tg: '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M29.6 3.1 25.2 28c-.3 1.8-1.2 2.2-2.5 1.4l-6.7-5-3.2 3.1c-.4.4-.7.7-1.4.7l.5-6.9L24.5 10c.5-.5-.1-.8-.8-.3L8.1 19.5l-6.7-2.1c-1.5-.5-1.5-1.5.3-2.2L27.9 5.1c1.2-.5 2.3.3 1.7 2Z"/></svg>',
};
function channels(lang) {
  const c = CH[lang]; const msg = encodeURIComponent(c[3]);
  return `<div class="chs">
<a class="ch" href="mailto:contact@iqlinic.ir"><span class="ci">${ICO.mail}</span><span><b>${c[0][0]}</b><small>${c[0][1]}</small></span></a>
<a class="ch" href="https://wa.me/${PHONE}?text=${msg}" target="_blank" rel="noopener noreferrer"><span class="ci wa">${ICO.wa}</span><span><b>${c[1][0]}</b><small>${c[1][1]}</small></span></a>
<a class="ch" href="https://t.me/+${PHONE}?text=${msg}" target="_blank" rel="noopener noreferrer"><span class="ci tg">${ICO.tg}</span><span><b>${c[2][0]}</b><small>${c[2][1]}</small></span></a>
</div>`;
}
const TAGS = ['READ-ONLY FIRST', 'EXPLAINABLE SIGNALS', 'HUMAN REVIEW', 'MEASURABLE PILOT'];
const esc = s => s;

function body(c) {
  const mods = c.mods.map((m, i) => `<button class="mod${i === 0 ? ' on' : ''}" data-i="${i}" type="button"><span class="bar"></span><span class="k">${m[0]}</span><span><span class="t">${m[1]}</span><span class="d">${m[2]}</span></span><span class="prog"></span></button>`).join('\n        ');
  const streams = [['22%', '3.8s', '0s'], ['38%', '5.2s', '-2s'], ['55%', '4.4s', '-1.2s'], ['70%', '6s', '-3.1s'], ['30%', '4.9s', '-4s'], ['62%', '3.6s', '-.7s']].map(s => `<i style="--y:${s[0]};--du:${s[1]};--de:${s[2]}"></i>`).join('');
  const tiles = c.problem.tiles.map(t => `<div class="tile rv"><div class="ic">${t[0]}</div><h3>${t[1]}</h3><p>${t[2]}</p></div>`).join('\n');
  const panels = c.layer.panels.map(p => `<div class="pnl rv"><h3>${p[0]}</h3><ul>${p[1].map(li => `<li><b>${li[0]}</b><span>${li[1]}</span></li>`).join('')}</ul></div>`).join('\n');
  const steps = c.how.steps.map((s, i) => `<div class="step rv"><div class="n">0${i + 1}</div><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('\n');
  const metrics = c.ev.metrics.map(m => `<div class="m"><b>${m[0]}</b><span>${m[1]}</span></div>`).join('');
  const faq = c.faq.items.map(f => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('\n');
  return `<body class="home-v4">
<div class="page">
  <div class="aura" aria-hidden="true"></div>
  <main>
  <section class="wrap hero" id="hero">
    <div class="copy">
      <div class="ey">${c.ey}</div>
      <h1>${c.h1a}<br><span class="g">${c.h1b}</span></h1>
      <p class="sub">${c.sub}</p>
      <div class="mods" id="mods" role="tablist">
        ${mods}
      </div>
      <div class="cta">
        <a class="btn btn-pri" href="${c.contact}" data-kind="contact">${c.cta1} <span>${c.dir === 'rtl' ? '←' : '→'}</span></a>
        <a class="btn btn-ghost" href="${c.demo}" data-kind="demo">${c.cta2}</a>
      </div>
    </div>
    <div class="stage" id="stage">
      <canvas id="field" aria-hidden="true"></canvas>
      <div class="flash" id="flash" aria-hidden="true"></div>
      <div class="halo" aria-hidden="true"></div>
      <div class="grid" aria-hidden="true"></div>
      <div class="streams" aria-hidden="true">${streams}</div>
      <div class="pool" aria-hidden="true"></div>
      <div class="device boot" id="device">
        <div class="edge"></div><div class="edge e2"></div><div class="board" aria-hidden="true"></div>
        <div class="frame" id="frame"></div>
        <div class="screen" id="screen"><div class="sheen" id="sheen"></div><div class="sweep" id="sweep"></div><div class="shutter" id="shutter" aria-hidden="true"></div></div><div class="glass" aria-hidden="true"></div>
        <div class="chip c1" id="chip1"></div><div class="chip c2" id="chip2"></div><div class="chip c3" id="chip3"></div>
      </div>
      <button class="xr" id="xr" type="button"><span class="sw"></span>${c.xr}</button>
      <div class="hint">${c.hint}</div>
    </div>
  </section>

  <section class="wrap sec" id="problem">
    <div class="head rv"><div><div class="kick">${c.problem.kick}</div><h2>${c.problem.h2}</h2></div><p class="lead">${c.problem.lead}</p></div>
    <div class="tiles">${tiles}</div>
  </section>

  <section class="sec alt" id="product"><div class="wrap">
    <div class="head rv"><div><div class="kick">${c.layer.kick}</div><h2>${c.layer.h2}</h2></div><p class="lead">${c.layer.lead}</p></div>
    <div class="story">${panels}</div>
  </div></section>

  <section class="wrap sec" id="how">
    <div class="rv"><div class="kick">${c.how.kick}</div><h2>${c.how.h2}</h2></div>
    <div class="steps">${steps}</div>
  </section>

  <section class="sec alt" id="evidence"><div class="wrap">
    <div class="rv"><div class="kick">${c.ev.kick}</div><h2>${c.ev.h2}</h2></div>
    <div class="ev"><div class="note rv"><b>${c.ev.note[0]}</b>${c.ev.note[1]}</div><div class="rv"><h3 style="margin:0 0 12px;font-size:16px">${c.ev.mh}</h3><div class="metrics">${metrics}</div></div></div>
  </div></section>

  <section class="wrap sec" id="faq">
    <div class="rv"><div class="kick">${c.faq.kick}</div><h2>${c.faq.h2}</h2></div>
    <div class="faq rv">${faq}</div>
  </section>

  <section class="wrap sec" id="contact">
    <div class="contact rv">
      <div class="kick">${c.cta.kick}</div><h2>${c.cta.h2}</h2><p class="lead">${c.cta.lead}</p>
      <div class="acts"><a class="btn btn-pri" href="${c.contact}" data-kind="contact">${c.cta.b1}</a><a class="btn btn-ghost" href="${c.demo}" data-kind="demo">${c.cta.b2}</a></div>
      ${channels(c.lang)}
      <div class="tags"><span style="letter-spacing:0;font-weight:500">${c.cta.tagsLead}</span>${TAGS.map(t => `<span>${t}</span>`).join('')}</div>
    </div>
  </section>
  </main>
</div>
<script>window.IQ_HOME={lang:'${c.lang}'};${uiTranslator(c.lang)}</script>
<script defer src="/home-v4.js?v=${V}"></script>
</body>
</html>
`;
}

for (const lang of ['fa', 'en', 'tr']) {
  const file = path.join(ROOT, lang, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  let head = html.slice(0, html.indexOf('</head>'));
  // drop legacy css/js + any v4 shell tags (apply-v4-shell re-adds those)
  head = head.replace(/<link[^>]*(site-v3|site-v2|styles\.css|home-v4)[^>]*>\n?/g, '').replace(/<script[^>]*(site-v3|app\.js|contact-widget|home-v4)[^>]*><\/script>\n?/g, '');
  head = head.replace(/<script id="v4-early">[\s\S]*?<\/script>\n?/g, '').replace(/<link[^>]*id="v4-(core|shell)"[^>]*>\n?/g, '').replace(/<script[^>]*id="v4-js"[^>]*><\/script>\n?/g, '');
  head = head.replace(/<meta name="theme-color" content="[^"]*">/, '<meta name="theme-color" content="#050912">');
  head += `<link rel="stylesheet" href="/home-v4.css?v=${V}">\n</head>\n`;
  const c = C[lang];
  fs.writeFileSync(file, head + body(c));
  console.log('built', lang);
}
