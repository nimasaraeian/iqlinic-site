#!/usr/bin/env python3
"""Adds the 'what dental clinic AI actually does' capability section and extra FAQ to fa/en/tr home pages,
and rebuilds each home page's FAQPage JSON-LD from the visible FAQ. Idempotent."""
import json, re, html, os
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S={
 'fa':{'kick':'هوش مصنوعی کلینیک دندانپزشکی در عمل','h2':'هوش مصنوعی کلینیک دندانپزشکی دقیقاً چه کاری انجام می‌دهد؟',
  'lead':'iQlinic فقط‌خواندنی روی نرم‌افزار فعلی کلینیک (مانند روزنه) و روی سرور خود کلینیک کار می‌کند. داده‌ای که امروز در پرونده‌ها پراکنده است، به این شش خروجی روزانه تبدیل می‌شود:',
  'more':'بیشتر بخوانید',
  'items':[('◷','نوبت‌دهی هوشمند معاینه و درمان','پیشنهاد نوبت بر اساس عادت زمانی خود بیمار، مدت واقعی هر خدمت و پزشکان پرتبدیلی که همان ساعت شیفت دارند؛ پذیرش با یک کلیک تغییرش می‌دهد.','/fa/insights/ai-dental-scheduling/'),
   ('↺','بازگشت بیمار و طرح درمان باز','بیمارانی که درمانشان متوقف شده یا ارجاعشان شروع نشده، با دلیل قابل مشاهده و اقدام پیشنهادی در یک صف اولویت‌دار.','/fa/insights/patient-treatment-plan-follow-up/'),
   ('▥','نوبت سر ویزیت و عملکرد پذیرش','چند درصد بیماران بدون نوبت بعدی از کلینیک می‌روند و این عدد برای هر نفر پذیرش چقدر است.','/fa/insights/dental-clinic-crm/'),
   ('↗','افزایش درآمد بدون بیمار جدید','نرخ تبدیل معاینه به درمان برای هر پزشک و نشتی‌های درآمدی که در بیماران فعلی کلینیک پنهان است.','/fa/insights/dental-clinic-revenue-growth/'),
   ('◎','پرونده‌ی ۳۶۰ بیمار','نوبت، درمان، پرداخت، نمودار دندان و تصاویر OPG بیمار در یک صفحه، فقط برای کسانی که دسترسی دارند.','/fa/demo/'),
   ('⧉','دوقلوی تصمیم','شبیه‌سازی ظرفیت پزشکان و سناریوهای نوبت‌دهی قبل از اینکه در کلینیک اجرا شوند.','/fa/insights/dental-clinic-ai-decision-support/')],
  'faq':[('هوش مصنوعی کلینیک دندانپزشکی دقیقاً چه کاری انجام می‌دهد؟','داده‌های نوبت، درمان و پرداخت کلینیک را می‌خواند و هر روز مشخص می‌کند کدام بیمار پیگیری لازم دارد، کدام نوبت برای بیمار و کلینیک بهتر است و درآمد کجا از دست می‌رود؛ تصمیم نهایی با تیم کلینیک است.'),
         ('آیا iQlinic با نرم‌افزار روزنه کار می‌کند؟','بله. اتصال فقط‌خواندنی به نرم‌افزار روزنه پیاده‌سازی شده و در کلینیک پایلوت در حال استفاده است. برای نرم‌افزارهای دیگر ابتدا امکان‌سنجی انجام می‌شود.'),
         ('آیا اطلاعات بیماران از کلینیک خارج می‌شود؟','خیر. iQlinic روی سرور خود کلینیک نصب می‌شود، فقط می‌خواند و چیزی در پایگاه داده‌ی کلینیک تغییر نمی‌دهد.')]},
 'en':{'kick':'Dental clinic AI in practice','h2':'What does dental clinic AI actually do?',
  'lead':'iQlinic runs read-only on top of your existing practice software, on the clinic’s own server. Data that is scattered across records today becomes six daily outputs:',
  'more':'Read more',
  'items':[('◷','Smart exam and treatment scheduling','Slot suggestions based on each patient’s own booking habits, the real duration of each service and the higher-converting dentists on shift at that hour; reception can override in one click.','/en/dental-clinic-ai-software/'),
   ('↺','Patient recovery and open treatment plans','Patients whose treatment stalled or whose referral never started, in one prioritized queue with visible reasons and a suggested action.','/en/insights/why-dental-patients-do-not-return-after-treatment-plan/'),
   ('▥','Chairside rebooking and front-desk performance','What share of patients leave without a next appointment, and how that rate differs by receptionist.','/en/insights/dental-clinic-crm/'),
   ('↗','Revenue growth without new patients','Exam-to-treatment conversion per dentist and the revenue leaks hidden in your existing patient base.','/en/insights/dental-clinic-revenue-growth/'),
   ('◎','Patient 360° file','Appointments, treatment, payments, tooth chart and OPG images on one page, only for people with access.','/en/demo/'),
   ('⧉','Decision twin','Simulate dentist capacity and scheduling scenarios before they reach the clinic floor.','/en/insights/ai-decision-support-dental-clinics/')],
  'faq':[('What does dental clinic AI actually do?','It reads the clinic’s appointment, treatment and payment data and shows every day which patient needs follow-up, which slot is better for the patient and the clinic, and where revenue is leaking; the team makes the final call.'),
         ('Which practice software does iQlinic connect to?','A read-only connector for Rozaneh, a widely used dental practice system in Iran, runs in our pilot clinic. Other systems start with a feasibility review of access and data quality.'),
         ('Does patient data leave the clinic?','No. iQlinic is installed on the clinic’s own server, reads only, and never changes the clinic database.')]},
 'tr':{'kick':'Uygulamada diş kliniği yapay zekâsı','h2':'Diş kliniği yapay zekâsı tam olarak ne yapar?',
  'lead':'iQlinic mevcut klinik yazılımınızın üzerinde, kliniğin kendi sunucusunda salt okunur çalışır. Bugün kayıtlara dağılmış veri, her gün altı çıktıya dönüşür:',
  'more':'Devamını oku',
  'items':[('◷','Akıllı muayene ve tedavi randevusu','Hastanın kendi randevu alışkanlığına, her hizmetin gerçek süresine ve o saatte nöbette olan dönüşümü yüksek hekimlere göre randevu önerisi; resepsiyon tek tıkla değiştirir.','/tr/dis-klinikleri-icin-yapay-zeka/'),
   ('↺','Hasta geri kazanımı ve açık tedavi planları','Tedavisi duran ya da sevki başlamayan hastalar, görünür gerekçe ve önerilen aksiyonla tek bir öncelik kuyruğunda.','/tr/insights/tedavi-plani-alan-hastalar-neden-geri-donmuyor/'),
   ('▥','Koltuk başı randevu ve resepsiyon performansı','Hastaların ne kadarının sonraki randevusu olmadan ayrıldığı ve bunun resepsiyoniste göre nasıl değiştiği.','/tr/insights/dis-klinigi-crm/'),
   ('↗','Yeni hasta olmadan gelir artışı','Hekim bazında muayeneden tedaviye dönüşüm ve mevcut hasta tabanınızda gizlenen gelir kaçakları.','/tr/insights/dis-klinigi-gelir-artirma/'),
   ('◎','Hasta 360° dosyası','Randevu, tedavi, ödeme, diş şeması ve OPG görüntüleri tek sayfada; yalnızca yetkili kişiler için.','/tr/demo/'),
   ('⧉','Karar ikizi','Hekim kapasitesini ve randevu senaryolarını kliniğe yansımadan önce simüle edin.','/tr/insights/dis-klinigi-yapay-zeka-karar-destek/')],
  'faq':[('Diş kliniği yapay zekâsı tam olarak ne yapar?','Kliniğin randevu, tedavi ve ödeme verisini okur; her gün hangi hastanın takip gerektirdiğini, hangi randevunun hasta ve klinik için daha iyi olduğunu ve gelirin nerede kaçtığını gösterir. Son karar ekibindir.'),
         ('iQlinic hangi klinik yazılımlarına bağlanır?','İran’da yaygın kullanılan Rozaneh diş kliniği yazılımı için salt okunur bağlantı pilot kliniğimizde çalışıyor. Diğer sistemler erişim ve veri kalitesi fizibilitesiyle başlar.'),
         ('Hasta verisi klinikten çıkıyor mu?','Hayır. iQlinic kliniğin kendi sunucusuna kurulur, yalnızca okur ve klinik veritabanında hiçbir şeyi değiştirmez.')]},
}
for l,c in S.items():
    p=os.path.join(ROOT,l,'index.html'); s=open(p,encoding='utf-8').read()
    if 'id="capabilities"' not in s:
        tiles=''.join(f'<a class="tile cap rv" href="{u}"><div class="ic">{ic}</div><h3>{t}</h3><p>{d}</p><span class="more">{c["more"]} <span aria-hidden="true">{"←" if l=="fa" else "→"}</span></span></a>' for ic,t,d,u in c['items'])
        sec=f'''  <section class="wrap sec" id="capabilities">
    <div class="head rv"><div><div class="kick">{c["kick"]}</div><h2>{c["h2"]}</h2></div><p class="lead">{c["lead"]}</p></div>
    <div class="tiles caps">{tiles}</div>
  </section>

'''
        i=s.index('  <section class="sec alt" id="product">'); s=s[:i]+sec+s[i:]
    # extra visible FAQ items (after the existing ones)
    m=re.search(r'(<div class="faq rv">)(.*?)(</div>\s*</section>)',s,re.S)
    body=m.group(2)
    for q,a in c['faq']:
        if q not in body: body+=f'\n<details><summary>{q}</summary><p>{a}</p></details>'
    s=s[:m.start(2)]+body+s[m.end(2):]
    # faq heading: no longer "three"
    s=s.replace('سه سؤالی که همیشه پرسیده می‌شود.','سؤال‌هایی که مدیران کلینیک می‌پرسند.').replace('Three questions we always get.','Questions clinic owners ask us.').replace('Her zaman sorulan üç soru.','Klinik sahiplerinin sorduğu sorular.')
    # rebuild FAQPage JSON-LD from the visible FAQ
    qa=re.findall(r'<details><summary>(.*?)</summary><p>(.*?)</p></details>',body,re.S)
    ld_m=re.search(r'<script type="application/ld\+json">(.*?)</script>',s,re.S); ld=json.loads(ld_m.group(1))
    faqld={"@type":"FAQPage","mainEntity":[{"@type":"Question","name":html.unescape(re.sub('<[^>]+>','',q)),"acceptedAnswer":{"@type":"Answer","text":html.unescape(re.sub('<[^>]+>','',a))}} for q,a in qa]}
    g=ld.get('@graph',[]); g=[x for x in g if x.get('@type')!='FAQPage']+[faqld]; ld['@graph']=g
    s=s[:ld_m.start(1)]+json.dumps(ld,ensure_ascii=False,separators=(',',':'))+s[ld_m.end(1):]
    open(p,'w',encoding='utf-8').write(s)
    print(l,'faq items',len(qa))
