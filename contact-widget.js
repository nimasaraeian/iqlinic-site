(() => {
  const language = document.documentElement.lang || document.body.dataset.pageLang || "en";
  const copy = {
    en: {
      label: "Contact iQlinic",
      whatsapp: "Message iQlinic on WhatsApp",
      telegram: "Message iQlinic on Telegram",
      message: "Hello iQlinic, I would like to learn more about your clinical intelligence solution for dental clinics."
    },
    tr: {
      label: "iQlinic iletişim kanalları",
      whatsapp: "iQlinic'e WhatsApp'tan yazın",
      telegram: "iQlinic'e Telegram'dan yazın",
      message: "Merhaba iQlinic, diş klinikleri için klinik zekâ çözümünüz hakkında daha fazla bilgi almak istiyorum."
    },
    fa: {
      label: "راه‌های ارتباط با iQlinic",
      whatsapp: "پیام به iQlinic در واتساپ",
      telegram: "پیام به iQlinic در تلگرام",
      message: "سلام iQlinic، برای آشنایی بیشتر با راهکار هوشمندی بالینی ویژه کلینیک‌های دندانپزشکی پیام می‌دهم."
    }
  };
  const text = copy[language] || copy.en;
  const phone = "905362914170";
  const widget = document.createElement("nav");

  widget.className = "contact-widget";
  widget.setAttribute("aria-label", text.label);
  widget.innerHTML = `
    <a class="contact-channel whatsapp" href="https://wa.me/${phone}?text=${encodeURIComponent(text.message)}" target="_blank" rel="noopener noreferrer" aria-label="${text.whatsapp}" title="${text.whatsapp}">
      <span>${text.whatsapp}</span>
      <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M27.3 4.6A15.8 15.8 0 0 0 2.4 23.7L.2 31.8l8.3-2.2a15.8 15.8 0 0 0 7.5 1.9h.1A15.8 15.8 0 0 0 27.3 4.6ZM16.1 28.8h-.1a13 13 0 0 1-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5a13.1 13.1 0 1 1 11.1 6.1Zm7.2-9.8c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.2-5.7-4.9-.4-.7.4-.7 1.2-2.2.1-.3.1-.6 0-.8l-1.2-2.9c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 4s1.7 4.7 2 5c.2.3 3.4 5.3 8.3 7.4 3.1 1.4 4.3 1.5 5.8 1.3.9-.1 2.3-1 2.7-1.9.4-.9.4-1.7.3-1.9-.1-.2-.4-.3-.8-.5Z"/></svg>
    </a>
    <a class="contact-channel telegram" href="https://t.me/+${phone}?text=${encodeURIComponent(text.message)}" target="_blank" rel="noopener noreferrer" aria-label="${text.telegram}" title="${text.telegram}">
      <span>${text.telegram}</span>
      <svg aria-hidden="true" viewBox="0 0 32 32"><path d="M29.6 3.1 25.2 28c-.3 1.8-1.2 2.2-2.5 1.4l-6.7-5-3.2 3.1c-.4.4-.7.7-1.4.7l.5-6.9L24.5 10c.5-.5-.1-.8-.8-.3L8.1 19.5l-6.7-2.1c-1.5-.5-1.5-1.5.3-2.2L27.9 5.1c1.2-.5 2.3.3 1.7 2Z"/></svg>
    </a>`;

  document.body.appendChild(widget);
})();
