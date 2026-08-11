(() => {
  const language = document.documentElement.lang || document.body.dataset.pageLang || "en";
  const copy = {
    en: {
      eyebrow: "CONTACT iQLINIC", title: "Start a focused conversation.",
      description: "Choose the channel that works best for you. We usually reply within one business day.",
      email: "Email", emailHint: "contact@iqlinic.ir", whatsapp: "WhatsApp", whatsappHint: "Message our team",
      telegram: "Telegram", telegramHint: "Start a private chat",
      message: "Hello iQlinic, I would like to learn more about your clinical intelligence solution for dental clinics."
    },
    tr: {
      eyebrow: "iQLINIC İLETİŞİM", title: "Odaklı bir görüşme başlatalım.",
      description: "Size en uygun kanalı seçin. Genellikle bir iş günü içinde yanıt veririz.",
      email: "E-posta", emailHint: "contact@iqlinic.ir", whatsapp: "WhatsApp", whatsappHint: "Ekibimize yazın",
      telegram: "Telegram", telegramHint: "Özel sohbet başlatın",
      message: "Merhaba iQlinic, diş klinikleri için klinik zekâ çözümünüz hakkında daha fazla bilgi almak istiyorum."
    },
    fa: {
      eyebrow: "ارتباط با iQlinic", title: "یک گفت‌وگوی هدفمند را شروع کنیم.",
      description: "مسیر ارتباطی مناسب خود را انتخاب کنید؛ معمولاً طی یک روز کاری پاسخ می‌دهیم.",
      email: "ایمیل", emailHint: "contact@iqlinic.ir", whatsapp: "واتساپ", whatsappHint: "پیام به تیم ما",
      telegram: "تلگرام", telegramHint: "شروع گفت‌وگوی خصوصی",
      message: "سلام iQlinic، برای آشنایی بیشتر با راهکار هوشمندی بالینی ویژه کلینیک‌های دندانپزشکی پیام می‌دهم."
    }
  };
  const text = copy[language] || copy.en;
  const phone = "905362914170";
  const channels = `
    <div class="contact-channels">
      <a class="contact-channel email" href="mailto:contact@iqlinic.ir" aria-label="${text.email}: ${text.emailHint}">
        <span class="contact-icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3.8 5.5h16.4c1 0 1.8.8 1.8 1.8v9.4c0 1-.8 1.8-1.8 1.8H3.8c-1 0-1.8-.8-1.8-1.8V7.3c0-1 .8-1.8 1.8-1.8Zm8.2 7.1 7.4-5.1H4.6l7.4 5.1Zm0 2.1L3.8 9v7.7h16.4V9L12 14.7Z"/></svg></span>
        <span class="contact-copy"><strong>${text.email}</strong><small>${text.emailHint}</small></span><i>↗</i>
      </a>
      <a class="contact-channel whatsapp" href="https://wa.me/${phone}?text=${encodeURIComponent(text.message)}" target="_blank" rel="noopener noreferrer" aria-label="${text.whatsapp}: ${text.whatsappHint}">
        <span class="contact-icon"><svg aria-hidden="true" viewBox="0 0 32 32"><path d="M27.3 4.6A15.8 15.8 0 0 0 2.4 23.7L.2 31.8l8.3-2.2a15.8 15.8 0 0 0 7.5 1.9h.1A15.8 15.8 0 0 0 27.3 4.6ZM16.1 28.8h-.1a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5a13.1 13.1 0 1 1 11.1 6.1Zm7.2-9.8c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.2-5.7-4.9-.4-.7.4-.7 1.2-2.2.1-.3.1-.6 0-.8l-1.2-2.9c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 4s1.7 4.7 2 5c.2.3 3.4 5.3 8.3 7.4 3.1 1.4 4.3 1.5 5.8 1.3.9-.1 2.3-1 2.7-1.9.4-.9.4-1.7.3-1.9-.1-.2-.4-.3-.8-.5Z"/></svg></span>
        <span class="contact-copy"><strong>${text.whatsapp}</strong><small>${text.whatsappHint}</small></span><i>↗</i>
      </a>
      <a class="contact-channel telegram" href="https://t.me/+${phone}?text=${encodeURIComponent(text.message)}" target="_blank" rel="noopener noreferrer" aria-label="${text.telegram}: ${text.telegramHint}">
        <span class="contact-icon"><svg aria-hidden="true" viewBox="0 0 32 32"><path d="M29.6 3.1 25.2 28c-.3 1.8-1.2 2.2-2.5 1.4l-6.7-5-3.2 3.1c-.4.4-.7.7-1.4.7l.5-6.9L24.5 10c.5-.5-.1-.8-.8-.3L8.1 19.5l-6.7-2.1c-1.5-.5-1.5-1.5.3-2.2L27.9 5.1c1.2-.5 2.3.3 1.7 2Z"/></svg></span>
        <span class="contact-copy"><strong>${text.telegram}</strong><small>${text.telegramHint}</small></span><i>↗</i>
      </a>
    </div>`;

  const existingBox = document.querySelector(".contact-box");
  if (existingBox) {
    existingBox.querySelector(".button.light")?.remove();
    existingBox.insertAdjacentHTML("beforeend", channels);
    existingBox.classList.add("contact-hub");
    return;
  }

  const section = document.createElement("section");
  section.className = "contact-hub contact-section shell";
  section.innerHTML = `<div class="contact-intro"><span>${text.eyebrow}</span><h2>${text.title}</h2><p>${text.description}</p></div>${channels}`;
  const footer = document.querySelector("body > footer");
  document.body.insertBefore(section, footer || null);
})();

/* Editorial SEO and hero-image enhancements shared by all Insights pages. */
(() => {
  const path = location.pathname;
  const language = document.documentElement.lang || document.body.dataset.pageLang || path.split("/")[1] || "en";

  if (language === "fa" && path === "/fa/dental-clinic-ai-software/") {
    const h1 = document.querySelector("main h1");
    if (h1) h1.innerHTML = "نرم افزار هوش مصنوعی کلینیک دندانپزشکی<em>از داده پراکنده تا اقدام بعدی توضیح‌پذیر.</em>";
    const xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (xDefault) xDefault.href = "https://www.iqlinic.ir/fa/dental-clinic-ai-software/";
  }

  if (language === "fa" && path === "/fa/insights/") {
    const h1 = document.querySelector(".insights-hero h1");
    const deck = document.querySelector(".insights-hero>p");
    if (h1) h1.innerHTML = "مقالات هوش مصنوعی<br><em>کلینیک دندانپزشکی.</em>";
    if (deck) deck.textContent = "راهنماهای پژوهش‌محور و اجرایی درباره هوش مصنوعی کلینیک دندانپزشکی، یکپارچه‌سازی داده، منشی هوشمند، بازگشت بیمار، حریم خصوصی و سنجش پایلوت AI.";
    const xDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (xDefault) xDefault.href = "https://www.iqlinic.ir/fa/insights/";
  }

  const topics = [
    {
      re: /(dental-clinic-ai-automation|dis-klinigi-yapay-zeka-otomasyonu)/,
      image: "/assets/insights/dental-clinic-ai-automation-hero.svg",
      alt: {
        fa: "تیم کلینیک دندانپزشکی در حال بررسی داشبورد اتوماسیون هوش مصنوعی و اولویت‌های عملیاتی",
        en: "Dental clinic staff reviewing an AI automation dashboard and operational priorities",
        tr: "Diş kliniği ekibinin yapay zekâ otomasyon panelini ve operasyon önceliklerini incelemesi"
      },
      related: ["/fa/insights/dental-clinic-ai-receptionist/","/fa/insights/dental-clinic-ai-pilot-metrics/"]
    },
    {
      re: /(patient-treatment-plan-follow-up|why-dental-patients-do-not-return-after-treatment-plan|tedavi-plani-alan-hastalar-neden-geri-donmuyor)/,
      image: "https://images.unsplash.com/photo-1777331903190-341a3dd0441b?auto=format&fit=crop&w=1600&q=82",
      alt: {fa:"پیگیری بازگشت بیمار در کلینیک دندانپزشکی با کمک هوش مصنوعی",en:"Dentist discussing treatment follow-up with a patient in a modern dental clinic",tr:"Modern diş kliniğinde hasta takip görüşmesi yapan diş hekimi"},
      related: ["/fa/insights/dental-clinic-ai-receptionist/","/fa/insights/dental-clinic-ai-decision-support/"]
    },
    {
      re: /(ai-dental-clinic-guide|\/ai-dental-clinic\/|dis-klinigi-yapay-zeka-rehberi)/,
      image: "https://images.pexels.com/photos/4269490/pexels-photo-4269490.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: {fa:"دندانپزشک در حال استفاده از کامپیوتر و نرم افزار هوش مصنوعی در کلینیک دندانپزشکی",en:"Dentist using a computer and digital software in a dental clinic",tr:"Diş kliniğinde bilgisayar ve dijital yazılım kullanan diş hekimi"},
      related: ["/fa/insights/dental-clinic-ai-data-integration/","/fa/insights/dental-clinic-ai-buying-guide/"]
    },
    {
      re: /(decision-support|karar-destek)/,
      image: "https://images.pexels.com/photos/6502162/pexels-photo-6502162.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: {fa:"بررسی تصویر دندان روی مانیتور به عنوان نمونه پشتیبانی تصمیم در کلینیک دندانپزشکی",en:"Dental professionals reviewing a dental image on a computer monitor",tr:"Bilgisayar ekranında dental görüntüyü inceleyen diş hekimleri"},
      related: ["/fa/insights/ai-dental-clinic/","/fa/insights/dental-clinic-ai-pilot-metrics/"]
    },
    {
      re: /(data-integration|veri-entegrasyonu)/,
      image: "https://images.pexels.com/photos/6627359/pexels-photo-6627359.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: {fa:"یکپارچه سازی داده کلینیک دندانپزشکی روی لپ تاپ برای استفاده از هوش مصنوعی",en:"Dentist reviewing digital patient data on a laptop with a patient",tr:"Hasta ile birlikte dizüstü bilgisayarda dijital verileri inceleyen diş hekimi"},
      related: ["/fa/insights/dental-clinic-ai-data-privacy/","/fa/insights/dental-clinic-ai-buying-guide/"]
    },
    {
      re: /(buying-guide|satin-alma-rehberi)/,
      image: "https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?auto=format&fit=crop&w=1600&q=82",
      alt: {fa:"کلینیک دندانپزشکی مدرن برای ارزیابی و خرید نرم افزار هوش مصنوعی",en:"Modern dental treatment room representing dental AI software evaluation",tr:"Yapay zeka yazılımı değerlendirmesini temsil eden modern diş kliniği"},
      related: ["/fa/insights/dental-clinic-ai-pilot-metrics/","/fa/insights/dental-clinic-ai-data-privacy/"]
    },
    {
      re: /(pilot-metrics|pilot-metrikleri)/,
      image: "https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?auto=format&fit=crop&w=1600&q=82",
      alt: {fa:"دندانپزشک در محیط واقعی کلینیک برای ارزیابی پایلوت هوش مصنوعی",en:"Dentist working with a patient in a real clinical environment for AI pilot evaluation",tr:"Yapay zeka pilot değerlendirmesi için klinik ortamında çalışan diş hekimi"},
      related: ["/fa/insights/dental-clinic-ai-buying-guide/","/fa/insights/dental-clinic-ai-data-integration/"]
    },
    {
      re: /(receptionist|resepsiyonisti)/,
      image: "https://images.pexels.com/photos/6812439/pexels-photo-6812439.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: {fa:"پذیرش کلینیک دندانپزشکی و نمونه کاربرد منشی هوش مصنوعی برای ارتباط با بیمار",en:"Dental clinic reception illustrating an AI receptionist workflow",tr:"Yapay zeka resepsiyonist iş akışını temsil eden diş kliniği resepsiyonu"},
      related: ["/fa/insights/patient-treatment-plan-follow-up/","/fa/insights/dental-clinic-ai-data-privacy/"]
    },
    {
      re: /(data-privacy|veri-gizliligi)/,
      image: "https://images.pexels.com/photos/6809664/pexels-photo-6809664.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: {fa:"گفت‌وگوی بیمار با پذیرش کلینیک دندانپزشکی در زمینه حریم خصوصی و مدیریت داده",en:"Patient speaking with dental clinic reception about care and data handling",tr:"Diş kliniği resepsiyonunda hasta iletişimi ve veri yönetimi"},
      related: ["/fa/insights/dental-clinic-ai-data-integration/","/fa/insights/dental-clinic-ai-buying-guide/"]
    }
  ];

  const topic = topics.find(item => item.re.test(path));
  const visual = document.querySelector(".article-visual");
  if (!topic || !visual) return;

  const alt = topic.alt[language] || topic.alt.en;
  const img = document.createElement("img");
  img.src = topic.image;
  img.alt = alt;
  img.width = 1600;
  img.height = 900;
  img.loading = "eager";
  img.decoding = "async";
  img.fetchPriority = "high";
  img.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:1;z-index:0";
  Array.from(visual.children).forEach(child => child.style.display = "none");
  visual.prepend(img);
  visual.setAttribute("aria-label", alt);

  const absoluteImage = topic.image.startsWith("/") ? `https://www.iqlinic.ir${topic.image}` : topic.image;
  const og = document.querySelector('meta[property="og:image"]');
  if (og) og.content = absoluteImage;
  let twitter = document.querySelector('meta[name="twitter:image"]');
  if (!twitter) {
    twitter = document.createElement("meta");
    twitter.name = "twitter:image";
    document.head.appendChild(twitter);
  }
  twitter.content = absoluteImage;

  document.querySelectorAll('script[type="application/ld+json"]').forEach(node => {
    try {
      const data = JSON.parse(node.textContent);
      const list = Array.isArray(data) ? data : [data];
      list.forEach(item => {
        if (["Article","BlogPosting","NewsArticle"].includes(item?.["@type"])) item.image = [absoluteImage];
      });
      node.textContent = JSON.stringify(Array.isArray(data) ? list : list[0]);
    } catch (_) {}
  });

  if (language === "fa" && !document.querySelector(".seo-related-links")) {
    const cta = document.querySelector(".article-cta");
    const container = document.createElement("aside");
    container.className = "seo-related-links";
    container.style.cssText = "margin:64px 0 0;padding:30px;border:1px solid rgba(110,210,252,.22);border-radius:18px;background:rgba(8,20,32,.62)";
    const related = topic.related.map((href, index) => `<a href="${href}" style="display:block;color:#9fdfff;text-decoration:none;padding:9px 0">${index === 0 ? "راهنمای مرتبط بعدی" : "مطالعه تکمیلی"} ↗</a>`).join("");
    container.innerHTML = `<div class="insights-kicker"><i></i>مسیر مطالعه پیشنهادی</div><h2 style="margin:14px 0 12px;font-size:27px">هوش مصنوعی کلینیک دندانپزشکی را عمیق‌تر بررسی کنید</h2><a href="/fa/dental-clinic-ai-software/" style="display:block;color:#d9f5ff;text-decoration:none;padding:9px 0;font-weight:700">نرم افزار هوش مصنوعی کلینیک دندانپزشکی ↗</a><a href="/fa/demo/" style="display:block;color:#9fdfff;text-decoration:none;padding:9px 0">مشاهده دموی iQlinic ↗</a>${related}`;
    (cta || document.querySelector(".article-body"))?.insertAdjacentElement(cta ? "beforebegin" : "beforeend", container);
  }
})();