const fs = require("fs");
const path = require("path");

const site = "https://www.iqlinic.ir";
const routes = {
  en: "dental-clinic-ai-software",
  tr: "dis-klinikleri-icin-yapay-zeka",
  fa: "dental-clinic-ai-software"
};

const copy = {
  en: {
    dir:"ltr", home:"Home", nav:"AI Software", insights:"Insights", demo:"Request a private demo",
    title:"Dental Clinic AI Software for Patient Continuity | iQlinic",
    description:"Dental clinic AI software that connects fragmented patient data, identifies treatment-continuity gaps and gives teams explainable next-best actions.",
    og:"Dental Clinic AI Software That Turns Data Into Action",
    kicker:"AI SOFTWARE FOR DENTAL CLINICS",
    h1:"Your clinic already has the data.", h1e:"iQlinic turns it into the next best action.",
    lead:"iQlinic is a clinical behavioral intelligence layer for dental clinics. It works alongside your existing systems to unify patient context, surface treatment-continuity gaps and help your team decide who may need attention—and why.",
    primary:"Assess your clinic", secondary:"See how it works",
    trust:["Works alongside your current PMS","Read-only starting point","Explainable signals","Human-led decisions"],
    live:"LIVE DECISION CONTEXT", cardSmall:"PATIENT CONTINUITY REVIEW", cardTitle:"Treatment plan has no next appointment",
    cardBody:"A signal is not a verdict. iQlinic assembles the observable context before the team chooses an action.",
    signals:[["Open plan","21 days"],["Next appointment","Not found"],["Payment question","Unanswered"]],
    nextSmall:"SUGGESTED REVIEW", nextTitle:"Resolve the open question before sending a generic recall", nextBody:"Owner: treatment coordinator · Team approval required",
    bar:[["Keep your PMS","No rip-and-replace"],["Connect context","Patient 360"],["Prioritize review","Explainable reasons"],["Measure outcomes","Learn from every action"]],
    problemTag:"01 / THE BUYING PROBLEM", problemTitle:"More software does not create", problemEm:"better clinic decisions.", problemIntro:"Most dental systems record events. The operational gap appears between those events: a treatment plan without a next appointment, an unanswered question, a repeated cancellation or a patient journey that quietly stops.",
    problems:[
      ["01 / FRAGMENTATION","The patient story is split","Appointments, treatment plans, messages and payments live in separate views. Staff must reconstruct context manually."],
      ["02 / PRIORITY","Every follow-up looks urgent","Large worklists do not tell the team which case deserves review first or what question is still open."],
      ["03 / TRUST","Black-box scores create doubt","A prediction without visible evidence is difficult to challenge, adopt or use responsibly in a healthcare workflow."]
    ],
    outcomeTag:"02 / WHAT IQLINIC CHANGES", outcomeTitle:"From scattered activity to", outcomeEm:"decision-ready context.", outcomeIntro:"iQlinic does not replace clinical judgment or your practice management software. It adds an intelligence layer that helps people see the right context sooner.",
    outcomes:[
      ["Patient 360","Create a time-ordered view of the clinical, operational and communication events that matter to the next decision."],
      ["Continuity signals","Surface observable gaps such as a missing next step, prolonged silence or an unresolved patient question."],
      ["Explainable priority","Show why a case appears in the worklist instead of hiding the reasoning behind a score."],
      ["Next-best-action support","Help the team choose the owner, channel and appropriate next step while keeping approval with a person."]
    ],
    flowTag:"03 / HOW IT WORKS", flowTitle:"Keep the systems your team knows.", flowEm:"Add intelligence between them.", flowIntro:"A controlled implementation starts with mapping, read-only access and a limited use case. Value is measured before scope expands.",
    flow:[
      ["01 / CONNECT","Existing clinic systems","Appointments, treatment plans, patient records, permitted communications and financial events remain in their source systems."],
      ["02 / UNDERSTAND","iQlinic intelligence layer","Events are normalized into patient context. Rules and models surface patterns with visible supporting evidence."],
      ["03 / ACT","Human-led workflow","The team reviews the reason, chooses the next action and records the outcome so the system can improve."]
    ],
    compareTag:"04 / CATEGORY FIT", compareTitle:"Not another dental PMS.", compareEm:"A decision layer beside it.", compareIntro:"iQlinic is designed for clinics that already have operational software but still lack a unified view of what requires attention.",
    tableHead:["Capability","Typical practice software","iQlinic intelligence layer"],
    table:[
      ["Record appointments and treatments","Core function","Uses the events as decision context"],
      ["Store the patient file","Core function","Connects meaningful events into Patient 360"],
      ["Generate a follow-up list","Often rule-based","Prioritizes review with visible reasons"],
      ["Explain why action is timely","Limited or manual","Shows the signal, timing and open question"],
      ["Learn from contact outcomes","Inconsistent","Structures outcomes for measurement and refinement"]
    ],
    pathTag:"05 / CONTROLLED DEPLOYMENT", pathTitle:"A buying path built around", pathEm:"evidence—not promises.", pathIntro:"The first goal is not a large transformation. It is a narrow, measurable proof that the clinic can trust.",
    path:[
      ["Fit assessment","Choose one operational gap, one user group and one measurable outcome."],
      ["Data mapping","Confirm availability, meaning, permission and quality before automation."],
      ["Read-only pilot","Generate context and recommendations without changing source records."],
      ["Decision review","Compare time, coverage, error and workflow outcomes before scaling."]
    ],
    fitTag:"06 / IS IT A FIT?", fitTitle:"Built for clinics that want", fitEm:"clarity before automation.", fitIntro:"A useful first conversation is about your operating reality, not a generic feature list.",
    fits:[
      ["Your team uses more than one operational system","Important patient context is spread across scheduling, treatment, communication or finance."],
      ["Follow-up depends on memory or manual lists","Staff spend time rebuilding priorities instead of resolving the patient’s actual open question."],
      ["You need reasons, not only risk scores","Managers and clinicians expect to inspect and challenge the evidence behind a recommendation."],
      ["You want to start without replacing core software","The first use case must work beside current processes and prove value before expansion."],
      ["Patient communication requires human control","Sensitive messages, clinical decisions and exceptions must stay with accountable team members."],
      ["You can measure a baseline","The clinic is willing to compare the current workflow with a limited pilot using agreed metrics."]
    ],
    riskLabel:"RESPONSIBLE BY DESIGN", risk:"iQlinic is decision support—not autonomous diagnosis, treatment selection or unsupervised patient communication. Access, evidence, review and outcome logging are part of the product design.",
    faqTitle:"Questions clinic leaders ask before a demo",
    faq:[
      ["Is iQlinic a dental practice management system?","No. iQlinic is designed as an intelligence layer beside existing clinic systems. It connects selected events into decision context rather than replacing charting, billing or scheduling software."],
      ["Does the AI decide which treatment a patient needs?","No. Diagnosis and treatment decisions remain with qualified dental professionals. iQlinic focuses on operational context, continuity signals and decision support."],
      ["Do we need to migrate all clinic data?","A first pilot should not require a full migration. The recommended approach is a limited, read-only connection to the data needed for one clearly defined use case."],
      ["How is a patient priority explained?","A useful priority includes observable reasons—for example, no next appointment, an open treatment plan and an unanswered question—not only a probability score."],
      ["What should a pilot measure?","Measure task time, data coverage, recommendation acceptance, important errors, workflow outcome and unintended effects. Revenue alone is not a sufficient measure."],
      ["How do we start?","Start with a private fit assessment. We map one workflow, identify required data and define what a successful, controlled pilot would need to prove."]
    ],
    intent:"Searching for <strong>dental clinic AI software</strong> should lead to a buying decision, not a feature catalogue. This page explains the category, the operational problem, the implementation boundary and the evidence a clinic should require before choosing a platform.",
    finalKicker:"PRIVATE FIT ASSESSMENT", finalTitle:"Do not buy more AI.", finalEm:"Find the decision gap worth solving.", finalBody:"Bring one workflow that feels fragmented or difficult to prioritize. We will map the decision, the minimum data and a controlled way to test whether iQlinic can create measurable value.", finalPrimary:"Request a private assessment", finalSecondary:"Read the AI implementation guide",
    subject:"iQlinic dental clinic AI assessment", readMore:"/en/insights/why-dental-patients-do-not-return-after-treatment-plan/",
    breadcrumbs:["Home","Dental clinic AI software"],
    appName:"iQlinic Dental Clinic AI Software"
  },
  tr: {
    dir:"ltr", home:"Ana sayfa", nav:"Yapay Zekâ Yazılımı", insights:"İçgörüler", demo:"Özel demo talep edin",
    title:"Diş Klinikleri İçin Yapay Zekâ Yazılımı | iQlinic",
    description:"Diş kliniği verilerini birleştiren, tedavi sürekliliğindeki boşlukları gösteren ve ekibe açıklanabilir sonraki aksiyonlar sunan yapay zekâ yazılımı.",
    og:"Diş Klinikleri İçin Veriden Aksiyona Yapay Zekâ",
    kicker:"DİŞ KLİNİKLERİ İÇİN YAPAY ZEKÂ",
    h1:"Kliniğinizde veri zaten var.", h1e:"iQlinic onu bir sonraki doğru aksiyona dönüştürür.",
    lead:"iQlinic, diş klinikleri için klinik davranışsal zekâ katmanıdır. Mevcut sistemlerinizin yanında çalışır; hasta bağlamını birleştirir, tedavi sürekliliğindeki kopuşları görünür kılar ve ekibin kimin neden incelenmesi gerektiğini anlamasına yardımcı olur.",
    primary:"Kliniğinizi değerlendirin", secondary:"Nasıl çalıştığını görün",
    trust:["Mevcut yazılımın yanında çalışır","Salt okunur başlangıç","Açıklanabilir sinyaller","İnsan kontrollü karar"],
    live:"CANLI KARAR BAĞLAMI", cardSmall:"HASTA SÜREKLİLİĞİ İNCELEMESİ", cardTitle:"Tedavi planından sonra randevu yok",
    cardBody:"Sinyal bir hüküm değildir. iQlinic, ekip aksiyonu seçmeden önce gözlenebilir bağlamı bir araya getirir.",
    signals:[["Açık plan","21 gün"],["Sonraki randevu","Bulunamadı"],["Ödeme sorusu","Yanıtsız"]],
    nextSmall:"ÖNERİLEN İNCELEME", nextTitle:"Genel hatırlatma göndermeden önce açık soruyu çözün", nextBody:"Sorumlu: tedavi koordinatörü · Ekip onayı gerekli",
    bar:[["Yazılımınızı koruyun","Sistem değişimi yok"],["Bağlamı birleştirin","Patient 360"],["İncelemeyi önceliklendirin","Açıklanabilir nedenler"],["Sonucu ölçün","Her aksiyondan öğrenin"]],
    problemTag:"01 / SATIN ALMA PROBLEMİ", problemTitle:"Daha fazla yazılım,", problemEm:"daha iyi karar demek değildir.", problemIntro:"Diş kliniği yazılımları olayları kaydeder. Asıl operasyonel boşluk olayların arasında oluşur: sonraki randevusu olmayan tedavi planı, yanıtsız soru, tekrarlanan iptal veya sessizce duran hasta yolculuğu.",
    problems:[
      ["01 / PARÇALANMA","Hasta hikâyesi farklı ekranlarda","Randevu, tedavi planı, mesaj ve ödeme farklı görünümlerde kalır; ekip bağlamı elle kurar."],
      ["02 / ÖNCELİK","Her takip acil görünür","Uzun listeler hangi vakanın önce incelenmesi veya hangi sorunun çözülmesi gerektiğini söylemez."],
      ["03 / GÜVEN","Kara kutu skorlar şüphe yaratır","Görünür kanıtı olmayan tahmin, sağlık iş akışında sorgulanamaz ve güvenle kullanılamaz."]
    ],
    outcomeTag:"02 / IQLINIC NEYİ DEĞİŞTİRİR?", outcomeTitle:"Dağınık hareketlerden", outcomeEm:"karara hazır bağlama.", outcomeIntro:"iQlinic klinik kararı veya mevcut yönetim yazılımını değiştirmez. Ekibin doğru bağlamı daha erken görmesini sağlayan bir zekâ katmanı ekler.",
    outcomes:[
      ["Patient 360","Bir sonraki karar için anlamlı klinik, operasyonel ve iletişim olaylarını zaman sıralı görünümde birleştirir."],
      ["Süreklilik sinyalleri","Eksik sonraki adım, uzun sessizlik veya açık hasta sorusu gibi gözlenebilir boşlukları gösterir."],
      ["Açıklanabilir öncelik","Bir vakanın listede neden yer aldığını gösterir; mantığı tek bir skorun arkasında saklamaz."],
      ["Sonraki en iyi aksiyon desteği","Onayı insanda tutarak sorumlu kişiyi, kanalı ve uygun sonraki adımı seçmeye yardımcı olur."]
    ],
    flowTag:"03 / NASIL ÇALIŞIR?", flowTitle:"Ekibinizin bildiği sistemleri koruyun.", flowEm:"Aralarına zekâ ekleyin.", flowIntro:"Kontrollü uygulama veri haritalama, salt okunur erişim ve sınırlı kullanım senaryosuyla başlar. Kapsam büyümeden önce değer ölçülür.",
    flow:[
      ["01 / BAĞLAN","Mevcut klinik sistemleri","Randevu, plan, hasta kaydı, izinli iletişim ve finansal olaylar kaynak sistemlerinde kalır."],
      ["02 / ANLA","iQlinic zekâ katmanı","Olaylar hasta bağlamına dönüşür; kural ve modeller örüntüyü görünür kanıtla sunar."],
      ["03 / AKSİYON","İnsan kontrollü iş akışı","Ekip nedeni inceler, aksiyonu seçer ve sonucu kaydederek sistemin öğrenmesini sağlar."]
    ],
    compareTag:"04 / KATEGORİ UYUMU", compareTitle:"Yeni bir klinik yönetim yazılımı değil.", compareEm:"Mevcut sistemin yanında karar katmanı.", compareIntro:"iQlinic, operasyonel yazılımı bulunan fakat neyin dikkat gerektirdiğini tek görünümde göremeyen klinikler için tasarlanmıştır.",
    tableHead:["Yetenek","Tipik klinik yazılımı","iQlinic zekâ katmanı"],
    table:[
      ["Randevu ve tedavi kaydı","Temel işlev","Olayları karar bağlamı olarak kullanır"],
      ["Hasta dosyasını saklama","Temel işlev","Anlamlı olayları Patient 360 içinde bağlar"],
      ["Takip listesi oluşturma","Çoğunlukla sabit kural","Görünür nedenlerle inceleme önceliği verir"],
      ["Aksiyonun neden zamanlı olduğunu açıklama","Sınırlı veya manuel","Sinyali, zamanı ve açık soruyu gösterir"],
      ["Temas sonucundan öğrenme","Tutarsız","Ölçüm ve iyileştirme için sonucu yapılandırır"]
    ],
    pathTag:"05 / KONTROLLÜ KURULUM", pathTitle:"Vaatlere değil,", pathEm:"kanıta dayalı satın alma yolu.", pathIntro:"İlk hedef büyük dönüşüm değildir. Kliniğin güvenebileceği dar ve ölçülebilir bir kanıttır.",
    path:[
      ["Uygunluk analizi","Tek bir operasyonel boşluk, kullanıcı grubu ve ölçülebilir sonuç seçin."],
      ["Veri haritalama","Otomasyondan önce verinin anlamını, iznini, kalitesini ve erişimini doğrulayın."],
      ["Salt okunur pilot","Kaynak kaydı değiştirmeden bağlam ve öneri üretin."],
      ["Karar değerlendirmesi","Büyümeden önce zaman, kapsama, hata ve iş akışı sonucunu karşılaştırın."]
    ],
    fitTag:"06 / KLİNİĞİNİZE UYGUN MU?", fitTitle:"Otomasyondan önce", fitEm:"netlik isteyen klinikler için.", fitIntro:"İlk görüşme genel özellik listesinden değil, gerçek operasyonunuzdan başlamalıdır.",
    fits:[
      ["Ekibiniz birden fazla sistem kullanıyor","Randevu, tedavi, iletişim veya finans içinde önemli hasta bağlamı parçalanıyor."],
      ["Takip hafızaya veya manuel listeye bağlı","Ekip hastanın açık sorusunu çözmek yerine öncelik listesini yeniden kuruyor."],
      ["Risk skorundan fazlasına ihtiyacınız var","Yönetici ve klinisyen önerinin arkasındaki kanıtı incelemek ve sorgulamak istiyor."],
      ["Ana yazılımı değiştirmeden başlamak istiyorsunuz","İlk senaryo mevcut sürecin yanında çalışmalı ve genişlemeden önce değer kanıtlamalı."],
      ["Hasta iletişiminde insan kontrolü gerekiyor","Hassas mesaj, klinik karar ve istisna sorumlu ekip üyesinde kalmalı."],
      ["Başlangıç seviyesini ölçebilirsiniz","Klinik sınırlı pilotu mevcut iş akışıyla mutabık metriklerde karşılaştırmaya hazır."]
    ],
    riskLabel:"SORUMLU TASARIM", risk:"iQlinic karar desteğidir; otonom teşhis, tedavi seçimi veya denetimsiz hasta iletişimi değildir. Erişim, kanıt, insan incelemesi ve sonuç kaydı tasarımın parçasıdır.",
    faqTitle:"Klinik yöneticilerinin demo öncesi sorduğu sorular",
    faq:[
      ["iQlinic bir diş kliniği yönetim yazılımı mı?","Hayır. iQlinic mevcut klinik sistemlerinin yanında çalışan bir zekâ katmanıdır. Charting, muhasebe veya randevu yazılımını değiştirmek yerine seçilen olayları karar bağlamına dönüştürür."],
      ["Yapay zekâ hastanın tedavisine karar verir mi?","Hayır. Teşhis ve tedavi kararları yetkili diş hekiminde kalır. iQlinic operasyonel bağlam, süreklilik sinyali ve karar desteğine odaklanır."],
      ["Tüm klinik verisini taşımamız gerekir mi?","İlk pilot tam veri göçü gerektirmemelidir. Önerilen yöntem, tek kullanım senaryosu için gerekli verilere sınırlı ve salt okunur bağlantıdır."],
      ["Hasta önceliği nasıl açıklanır?","Yalnızca skor yerine gözlenebilir gerekçeler gösterilir: sonraki randevunun olmaması, açık plan veya yanıtsız soru gibi."],
      ["Pilot neyi ölçmeli?","İş süresi, veri kapsamı, öneri kabulü, önemli hata, iş akışı sonucu ve istenmeyen etkiler birlikte ölçülmelidir. Gelir tek başına yeterli değildir."],
      ["Nasıl başlarız?","Özel uygunluk analiziyle başlayın. Tek bir iş akışını, gerekli minimum veriyi ve kontrollü pilotun neyi kanıtlaması gerektiğini birlikte tanımlarız."]
    ],
    intent:"<strong>Diş klinikleri için yapay zekâ yazılımı</strong> arayan bir yönetici yalnızca özellik listesi değil, satın alma kararı için sınır, risk ve kanıt görmek ister. Bu sayfa kategoriyi, operasyonel problemi ve güvenli uygulama yolunu birlikte açıklar.",
    finalKicker:"ÖZEL UYGUNLUK ANALİZİ", finalTitle:"Daha fazla AI satın almayın.", finalEm:"Çözülmeye değer karar boşluğunu bulun.", finalBody:"Parçalı veya önceliklendirmesi zor bir iş akışı getirin. Kararı, minimum veriyi ve iQlinic’in ölçülebilir değer üretip üretmediğini kontrollü biçimde test etme yolunu birlikte haritalayalım.", finalPrimary:"Özel değerlendirme talep edin", finalSecondary:"AI uygulama rehberini okuyun",
    subject:"iQlinic diş kliniği yapay zeka değerlendirmesi", readMore:"/tr/insights/tedavi-plani-alan-hastalar-neden-geri-donmuyor/",
    breadcrumbs:["Ana sayfa","Diş kliniği yapay zekâ yazılımı"],
    appName:"iQlinic Diş Kliniği Yapay Zekâ Yazılımı"
  },
  fa: {
    dir:"rtl", home:"خانه", nav:"نرم‌افزار هوش مصنوعی", insights:"بینش‌ها", demo:"درخواست دموی اختصاصی",
    title:"نرم افزار هوش مصنوعی کلینیک دندانپزشکی | iQlinic",
    description:"نرم افزار هوش مصنوعی کلینیک دندانپزشکی برای یکپارچه‌سازی زمینه بیمار، کشف توقف درمان و ارائه اقدام بعدی توضیح‌پذیر به تیم کلینیک.",
    og:"نرم افزار هوش مصنوعی کلینیک دندانپزشکی؛ از داده تا اقدام",
    kicker:"نرم‌افزار هوش مصنوعی برای کلینیک دندانپزشکی",
    h1:"داده در کلینیک شما وجود دارد.", h1e:"iQlinic آن را به اقدام بعدی روشن تبدیل می‌کند.",
    lead:"iQlinic یک لایه هوش رفتاری بالینی برای کلینیک‌های دندانپزشکی است. کنار نرم‌افزارهای فعلی کار می‌کند، زمینه بیمار را یکپارچه می‌سازد، نقاط توقف مسیر درمان را نشان می‌دهد و به تیم کمک می‌کند بفهمد کدام وضعیت، چرا و در چه زمانی نیازمند بررسی است.",
    primary:"ارزیابی کلینیک من", secondary:"نحوه کار را ببینید",
    trust:["در کنار نرم‌افزار فعلی","شروع فقط‌خواندنی","سیگنال‌های توضیح‌پذیر","تصمیم نهایی با انسان"],
    live:"زمینه زنده تصمیم", cardSmall:"بررسی تداوم درمان بیمار", cardTitle:"طرح درمان، نوبت بعدی ندارد",
    cardBody:"سیگنال به معنای حکم نیست. iQlinic پیش از انتخاب اقدام توسط تیم، شواهد قابل مشاهده را کنار هم قرار می‌دهد.",
    signals:[["طرح باز","۲۱ روز"],["نوبت بعدی","یافت نشد"],["سؤال پرداخت","بی‌پاسخ"]],
    nextSmall:"بررسی پیشنهادی", nextTitle:"پیش از یادآوری عمومی، سؤال باز بیمار را پاسخ دهید", nextBody:"مسئول: هماهنگ‌کننده درمان · نیازمند تأیید تیم",
    bar:[["نرم‌افزار فعلی حفظ می‌شود","بدون جایگزینی پرریسک"],["زمینه یکپارچه می‌شود","Patient 360"],["بررسی اولویت می‌گیرد","دلایل قابل مشاهده"],["نتیجه اندازه‌گیری می‌شود","یادگیری از هر اقدام"]],
    problemTag:"۰۱ / مسئله خرید", problemTitle:"نرم‌افزار بیشتر الزاماً", problemEm:"تصمیم بهتری نمی‌سازد.", problemIntro:"بیشتر نرم‌افزارهای کلینیک رخدادها را ثبت می‌کنند. خلأ عملیاتی بین رخدادها شکل می‌گیرد: طرح درمان بدون نوبت بعدی، سؤال بی‌پاسخ، لغو تکراری یا مسیری که بی‌صدا متوقف شده است.",
    problems:[
      ["۰۱ / پراکندگی","داستان بیمار بین چند صفحه تقسیم شده","نوبت، طرح درمان، پیام و پرداخت در نماهای جدا هستند و تیم باید زمینه را دستی بازسازی کند."],
      ["۰۲ / اولویت","تمام پیگیری‌ها فوری به نظر می‌رسند","فهرست‌های طولانی نمی‌گویند کدام پرونده ابتدا بررسی شود یا چه سؤال بازی باید پاسخ بگیرد."],
      ["۰۳ / اعتماد","امتیاز مبهم اعتماد ایجاد نمی‌کند","پیش‌بینی بدون شواهد قابل مشاهده، در فرایند سلامت قابل نقد و استفاده مسئولانه نیست."]
    ],
    outcomeTag:"۰۲ / iQlinic چه چیزی را تغییر می‌دهد؟", outcomeTitle:"از فعالیت‌های پراکنده به", outcomeEm:"زمینه آماده تصمیم.", outcomeIntro:"iQlinic جایگزین قضاوت بالینی یا نرم‌افزار مدیریت کلینیک نیست؛ لایه‌ای اضافه می‌کند که زمینه درست را زودتر در اختیار انسان قرار می‌دهد.",
    outcomes:[
      ["Patient 360","رخدادهای بالینی، عملیاتی و ارتباطی مؤثر بر تصمیم بعدی را در یک روایت زمانی کنار هم قرار می‌دهد."],
      ["سیگنال تداوم درمان","شکاف‌های قابل مشاهده مانند نبود قدم بعدی، سکوت طولانی یا سؤال حل‌نشده بیمار را آشکار می‌کند."],
      ["اولویت توضیح‌پذیر","نشان می‌دهد چرا یک وضعیت وارد فهرست بررسی شده و منطق را پشت یک امتیاز پنهان نمی‌کند."],
      ["پشتیبانی اقدام بعدی","با حفظ تأیید انسانی، در انتخاب مسئول، کانال و قدم مناسب بعدی به تیم کمک می‌کند."]
    ],
    flowTag:"۰۳ / چگونه کار می‌کند؟", flowTitle:"سیستم‌های فعلی را حفظ کنید.", flowEm:"بین آن‌ها هوشمندی اضافه کنید.", flowIntro:"استقرار کنترل‌شده با نقشه داده، دسترسی فقط‌خواندنی و یک مسئله محدود شروع می‌شود. پیش از توسعه دامنه، ارزش اندازه‌گیری می‌شود.",
    flow:[
      ["۰۱ / اتصال","سیستم‌های موجود کلینیک","نوبت، طرح، پرونده، ارتباط مجاز و رخداد مالی در سیستم‌های اصلی باقی می‌مانند."],
      ["۰۲ / فهم","لایه هوشمندی iQlinic","رخدادها به زمینه بیمار تبدیل می‌شوند و الگوها همراه با شواهد قابل مشاهده نمایش داده می‌شوند."],
      ["۰۳ / اقدام","گردش‌کار انسان‌محور","تیم دلیل را بررسی، اقدام را انتخاب و نتیجه را ثبت می‌کند تا فرایند قابل یادگیری شود."]
    ],
    compareTag:"۰۴ / جایگاه محصول", compareTitle:"یک نرم‌افزار مدیریت کلینیک دیگر نیست.", compareEm:"لایه تصمیم کنار سیستم موجود است.", compareIntro:"iQlinic برای کلینیکی طراحی شده که نرم‌افزار عملیاتی دارد، اما هنوز نمای یکپارچه‌ای از آنچه نیازمند توجه است در اختیار ندارد.",
    tableHead:["قابلیت","نرم‌افزار معمول کلینیک","لایه هوشمندی iQlinic"],
    table:[
      ["ثبت نوبت و درمان","وظیفه اصلی","استفاده از رخداد به‌عنوان زمینه تصمیم"],
      ["نگهداری پرونده بیمار","وظیفه اصلی","اتصال رخدادهای معنادار در Patient 360"],
      ["تولید فهرست پیگیری","اغلب مبتنی بر قواعد ثابت","اولویت‌دهی بررسی با دلیل قابل مشاهده"],
      ["توضیح چرایی زمان اقدام","محدود یا دستی","نمایش سیگنال، زمان و سؤال باز"],
      ["یادگیری از نتیجه تماس","ناهماهنگ","ساختاردهی نتیجه برای اندازه‌گیری و اصلاح"]
    ],
    pathTag:"۰۵ / استقرار کنترل‌شده", pathTitle:"مسیر خرید بر پایه", pathEm:"شواهد، نه وعده.", pathIntro:"هدف اول تحول بزرگ نیست؛ یک اثبات محدود و قابل‌اندازه‌گیری است که کلینیک بتواند به آن اعتماد کند.",
    path:[
      ["ارزیابی تناسب","یک خلأ عملیاتی، یک گروه کاربر و یک نتیجه قابل‌اندازه‌گیری انتخاب می‌شود."],
      ["نقشه‌برداری داده","پیش از اتوماسیون، دسترسی، معنا، مجوز و کیفیت داده بررسی می‌شود."],
      ["پایلوت فقط‌خواندنی","بدون تغییر رکورد اصلی، زمینه و پیشنهاد برای بازبینی تولید می‌شود."],
      ["بازبینی تصمیم","پیش از توسعه، زمان، پوشش، خطا و نتیجه گردش‌کار با خط پایه مقایسه می‌شود."]
    ],
    fitTag:"۰۶ / آیا برای کلینیک شما مناسب است؟", fitTitle:"برای کلینیک‌هایی که پیش از اتوماسیون", fitEm:"به شفافیت نیاز دارند.", fitIntro:"گفت‌وگوی مفید از واقعیت عملیات کلینیک شروع می‌شود، نه از یک فهرست عمومی امکانات.",
    fits:[
      ["تیم شما با بیش از یک سیستم کار می‌کند","زمینه مهم بیمار بین نوبت، درمان، ارتباط یا امور مالی پراکنده است."],
      ["پیگیری به حافظه یا فهرست دستی وابسته است","تیم به‌جای حل سؤال واقعی بیمار، زمان خود را صرف بازسازی اولویت‌ها می‌کند."],
      ["به دلیل نیاز دارید، نه فقط امتیاز ریسک","مدیر و دندانپزشک می‌خواهند شواهد پشت پیشنهاد را ببینند و نقد کنند."],
      ["می‌خواهید بدون تعویض نرم‌افزار اصلی شروع کنید","کاربرد اول باید کنار فرایند فعلی ارزش خود را پیش از توسعه ثابت کند."],
      ["ارتباط بیمار باید تحت کنترل انسان بماند","پیام حساس، تصمیم بالینی و استثنا باید در اختیار فرد مسئول باشد."],
      ["می‌توانید خط پایه بسازید","کلینیک آماده است پایلوت محدود را با شاخص‌های توافق‌شده با فرایند فعلی مقایسه کند."]
    ],
    riskLabel:"طراحی مسئولانه", risk:"iQlinic ابزار پشتیبان تصمیم است؛ نه سیستم تشخیص خودکار، انتخاب درمان یا ارتباط بدون نظارت با بیمار. دسترسی کنترل‌شده، شواهد، بازبینی انسان و ثبت نتیجه بخشی از طراحی محصول‌اند.",
    faqTitle:"سؤال‌هایی که مدیران کلینیک پیش از دمو می‌پرسند",
    faq:[
      ["آیا iQlinic نرم‌افزار مدیریت کلینیک دندانپزشکی است؟","خیر. iQlinic یک لایه هوشمندی کنار سیستم‌های موجود است. به‌جای جایگزینی پرونده، مالی یا نوبت‌دهی، رخدادهای منتخب را به زمینه تصمیم تبدیل می‌کند."],
      ["آیا هوش مصنوعی درباره درمان بیمار تصمیم می‌گیرد؟","خیر. تشخیص و انتخاب درمان در اختیار دندانپزشک واجد صلاحیت باقی می‌ماند. تمرکز iQlinic بر زمینه عملیاتی، تداوم درمان و پشتیبانی تصمیم است."],
      ["آیا باید تمام داده‌های کلینیک را منتقل کنیم؟","پایلوت اول نباید به مهاجرت کامل داده وابسته باشد. روش پیشنهادی اتصال محدود و فقط‌خواندنی به داده موردنیاز یک مسئله مشخص است."],
      ["اولویت بیمار چگونه توضیح داده می‌شود؟","به‌جای یک امتیاز تنها، دلایل قابل مشاهده مانند نبود نوبت بعدی، بازبودن طرح و بی‌پاسخ‌ماندن سؤال نشان داده می‌شود."],
      ["موفقیت پایلوت با چه چیزی سنجیده می‌شود؟","زمان کار، پوشش داده، پذیرش پیشنهاد، خطای مهم، نتیجه فرایند و اثر ناخواسته باید با هم سنجیده شوند. درآمد به‌تنهایی کافی نیست."],
      ["چطور شروع کنیم؟","از یک ارزیابی اختصاصی آغاز می‌کنیم: یک گردش‌کار، حداقل داده لازم و چیزی که پایلوت کنترل‌شده باید اثبات کند مشخص می‌شود."]
    ],
    intent:"کاربری که عبارت <strong>نرم افزار هوش مصنوعی کلینیک دندانپزشکی</strong> را جست‌وجو می‌کند، فقط امکانات نمی‌خواهد؛ باید بداند محصول چه مسئله‌ای را حل می‌کند، چه ریسکی دارد و چطور می‌توان پیش از خرید ارزش آن را سنجید.",
    finalKicker:"ارزیابی اختصاصی تناسب", finalTitle:"هوش مصنوعی بیشتری نخرید.", finalEm:"خلأ تصمیمی را پیدا کنید که ارزش حل‌کردن دارد.", finalBody:"یک فرایند پراکنده یا دشوار برای اولویت‌بندی را مطرح کنید. تصمیم، حداقل داده و روشی کنترل‌شده برای سنجش ارزش iQlinic را با هم ترسیم می‌کنیم.", finalPrimary:"درخواست ارزیابی اختصاصی", finalSecondary:"مطالعه راهنمای اجرای هوش مصنوعی",
    subject:"ارزیابی هوش مصنوعی کلینیک دندانپزشکی iQlinic", readMore:"/fa/insights/ai-dental-clinic/",
    breadcrumbs:["خانه","نرم‌افزار هوش مصنوعی کلینیک"],
    appName:"نرم‌افزار هوش مصنوعی کلینیک دندانپزشکی iQlinic"
  }
};

const url = lang => `${site}/${lang}/${routes[lang]}/`;
const alternates = () => `<link rel="alternate" hreflang="en" href="${url("en")}">
  <link rel="alternate" hreflang="tr" href="${url("tr")}">
  <link rel="alternate" hreflang="fa" href="${url("fa")}">
  <link rel="alternate" hreflang="x-default" href="${url("en")}">`;
const mail = c => `mailto:contact@iqlinic.com?subject=${encodeURIComponent(c.subject)}`;

function render(lang) {
  const c = copy[lang];
  const schema = [
    {"@context":"https://schema.org","@type":"SoftwareApplication",name:c.appName,applicationCategory:"BusinessApplication",operatingSystem:"Web",description:c.description,url:url(lang),inLanguage:lang,publisher:{"@type":"Organization",name:"iQlinic",url:site}},
    {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:c.breadcrumbs[0],item:`${site}/${lang}/`},{"@type":"ListItem",position:2,name:c.breadcrumbs[1],item:url(lang)}]},
    {"@context":"https://schema.org","@type":"FAQPage",mainEntity:c.faq.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}
  ];
  return `<!doctype html>
<html lang="${lang}" dir="${c.dir}" class="solution-page">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#05070b">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <title>${c.title}</title><meta name="description" content="${c.description}">
  <link rel="canonical" href="${url(lang)}">${alternates()}
  <meta property="og:type" content="website"><meta property="og:site_name" content="iQlinic"><meta property="og:title" content="${c.og}"><meta property="og:description" content="${c.description}"><meta property="og:url" content="${url(lang)}"><meta property="og:image" content="${site}/assets/ai-dental-clinic-og.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${c.og}"><meta name="twitter:description" content="${c.description}"><meta name="twitter:image" content="${site}/assets/ai-dental-clinic-og.png">
  <link rel="icon" href="/favicon.ico"><link rel="manifest" href="/site.webmanifest"><link rel="stylesheet" href="/styles.css?v=33"><link rel="stylesheet" href="/solution.css?v=33">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
  <noscript><style>.reveal{opacity:1;transform:none}</style></noscript>
</head>
<body class="solution-page" dir="${c.dir}">
  <div class="noise"></div><div class="cursor-glow"></div>
  <header><nav class="nav shell">
    <a class="logo" href="/${lang}/" aria-label="iQlinic ${c.home}"><img src="/assets/iqlinic-brand.png" alt="iQlinic"><span>CLINICAL INTELLIGENCE</span></a>
    <div class="navlinks"><a href="/${lang}/">${c.home}</a><a aria-current="page" href="${url(lang).replace(site,"")}">${c.nav}</a><a href="/${lang}/insights/">${c.insights}</a></div>
    <div class="actions"><div class="languages" aria-label="Language"><a${lang==="en"?' class="active"':""} href="/en/${routes.en}/">EN</a><a${lang==="tr"?' class="active"':""} href="/tr/${routes.tr}/">TR</a><a${lang==="fa"?' class="active"':""} href="/fa/${routes.fa}/">FA</a></div><a class="button small ghost" href="${mail(c)}">${c.demo}</a><button class="menu" aria-label="Menu"><i></i><i></i></button></div>
  </nav></header>
  <main>
    <section class="solution-hero shell">
      <div class="reveal"><div class="solution-kicker"><i></i>${c.kicker}</div><h1>${c.h1}<em>${c.h1e}</em></h1><p class="lead">${c.lead}</p><div class="solution-actions"><a class="button primary" href="${mail(c)}">${c.primary} ↗</a><a class="button text" href="#how">${c.secondary} ↓</a></div><div class="micro-trust">${c.trust.map(x=>`<span>${x}</span>`).join("")}</div></div>
      <div class="decision-room reveal delay" aria-label="${c.live}"><div class="room-top"><span>${c.live}</span><b>iQlinic / Patient 360</b></div><div class="priority-card"><small>${c.cardSmall}</small><h2>${c.cardTitle}</h2><p>${c.cardBody}</p><div class="signal-list">${c.signals.map(([a,b])=>`<span>${a}<b>${b}</b></span>`).join("")}</div></div><div class="next-action"><small>${c.nextSmall}</small><strong>${c.nextTitle}</strong><p>${c.nextBody}</p></div></div>
    </section>
    <section class="buyer-bar shell">${c.bar.map(([a,b])=>`<div><b>${a}</b><span>${b}</span></div>`).join("")}</section>
    <section class="solution-section shell"><div class="solution-heading reveal"><span>${c.problemTag}</span><h2>${c.problemTitle}<br><em>${c.problemEm}</em></h2><p>${c.problemIntro}</p></div><div class="problem-grid">${c.problems.map(([s,h,p])=>`<article class="reveal"><small>${s}</small><h3>${h}</h3><p>${p}</p></article>`).join("")}</div></section>
    <section class="solution-section shell"><div class="solution-heading reveal"><span>${c.outcomeTag}</span><h2>${c.outcomeTitle}<br><em>${c.outcomeEm}</em></h2><p>${c.outcomeIntro}</p></div><div class="outcome-grid">${c.outcomes.map(([h,p])=>`<article class="reveal"><h3>${h}</h3><p>${p}</p></article>`).join("")}</div></section>
    <section class="solution-section shell" id="how"><div class="solution-heading reveal"><span>${c.flowTag}</span><h2>${c.flowTitle}<br><em>${c.flowEm}</em></h2><p>${c.flowIntro}</p></div><div class="system-flow reveal">${c.flow.map(([s,h,p],i)=>`${i?`<i>→</i>`:""}<article><small>${s}</small><h3>${h}</h3><p>${p}</p></article>`).join("")}</div></section>
    <section class="solution-section shell"><div class="solution-heading reveal"><span>${c.compareTag}</span><h2>${c.compareTitle}<br><em>${c.compareEm}</em></h2><p>${c.compareIntro}</p></div><table class="comparison"><thead><tr>${c.tableHead.map(x=>`<th>${x}</th>`).join("")}</tr></thead><tbody>${c.table.map(r=>`<tr>${r.map(x=>`<td>${x}</td>`).join("")}</tr>`).join("")}</tbody></table></section>
    <section class="solution-section shell"><div class="solution-heading reveal"><span>${c.pathTag}</span><h2>${c.pathTitle}<br><em>${c.pathEm}</em></h2><p>${c.pathIntro}</p></div><ol class="buying-path">${c.path.map(([h,p])=>`<li><b>${h}</b><span>${p}</span></li>`).join("")}</ol></section>
    <section class="solution-section shell"><div class="solution-heading reveal"><span>${c.fitTag}</span><h2>${c.fitTitle}<br><em>${c.fitEm}</em></h2><p>${c.fitIntro}</p></div><div class="fit-grid">${c.fits.map(([h,p])=>`<article><h3>${h}</h3><p>${p}</p></article>`).join("")}</div><div class="risk-note"><strong>${c.riskLabel}</strong><p>${c.risk}</p></div></section>
    <section class="solution-section shell"><div class="solution-heading reveal"><span>07 / FAQ</span><h2>${c.faqTitle}</h2><p></p></div><div class="landing-faq">${c.faq.map(([q,a],i)=>`<details${i===0?" open":""}><summary>${q}</summary><p>${a}</p></details>`).join("")}</div></section>
    <section class="solution-section shell"><p class="search-intent">${c.intent}</p></section>
    <section class="conversion-box shell"><div><div class="solution-kicker"><i></i>${c.finalKicker}</div><h2>${c.finalTitle}<br><em>${c.finalEm}</em></h2><p>${c.finalBody}</p><div class="solution-actions"><a class="button primary" href="${mail(c)}">${c.finalPrimary} ↗</a><a class="button text" href="${c.readMore}">${c.finalSecondary} →</a></div></div></section>
  </main>
  <footer><div class="shell footer"><a class="logo" href="/${lang}/"><img src="/assets/iqlinic-brand.png" alt="iQlinic"></a><p>${c.description}</p><div><a href="/en/${routes.en}/">English</a><a href="/tr/${routes.tr}/">Türkçe</a><a href="/fa/${routes.fa}/">فارسی</a></div><small>© 2026 iQlinic</small></div></footer>
  <script>const m=document.querySelector(".menu"),n=document.querySelector(".navlinks");m?.addEventListener("click",()=>n?.classList.toggle("open"));const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("visible")),{threshold:.08});document.querySelectorAll(".reveal").forEach(x=>o.observe(x));document.addEventListener("mousemove",e=>{const g=document.querySelector(".cursor-glow");if(g)g.style.transform=\`translate(\${e.clientX-300}px,\${e.clientY-300}px)\`});</script>
</body></html>`;
}

for (const lang of Object.keys(copy)) {
  const dir = path.join(__dirname, "..", lang, routes[lang]);
  fs.mkdirSync(dir, {recursive:true});
  fs.writeFileSync(path.join(dir, "index.html"), render(lang));
}
console.log("Generated trilingual commercial landing pages.");
