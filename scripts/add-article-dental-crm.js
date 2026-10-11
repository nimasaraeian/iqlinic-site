#!/usr/bin/env node
/* Adds the trilingual "dental clinic CRM / patient follow-up software" article (fa/en/tr) using the
   buying-guide article as the structural template, then wires hubs, sitemaps and internal links.
   Idempotent. Run: node scripts/add-article-dental-crm.js && node scripts/apply-v4-shell.js */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.iqlinic.ir';
const DATE = '2026-10-11';

const SLUG = { fa: 'dental-clinic-crm', en: 'dental-clinic-crm', tr: 'dis-klinigi-crm' };
const TEMPLATE = { fa: 'fa/insights/dental-clinic-ai-buying-guide', en: 'en/insights/dental-clinic-ai-buying-guide', tr: 'tr/insights/dis-klinigi-yapay-zeka-satin-alma-rehberi' };
const url = (l) => `${SITE}/${l}/insights/${SLUG[l]}/`;

const C = {
  fa: {
    title: 'CRM کلینیک دندانپزشکی و نرم‌افزار پیگیری بیماران | iQlinic',
    h1: 'CRM کلینیک دندانپزشکی: تفاوت با نرم‌افزار مطب و راهنمای انتخاب نرم‌افزار پیگیری بیماران',
    desc: 'CRM کلینیک دندانپزشکی چیست، چه فرقی با نرم‌افزار مطب دارد و چرا لیست تماس بیمار را برنمی‌گرداند؟ ۷ قابلیت ضروری نرم‌افزار پیگیری بیماران.',
    crumb: 'CRM دندانپزشکی', home: 'خانه', insights: 'بینش‌ها', kicker: 'CRM و پیگیری بیمار',
    deck: 'کلینیک دندانپزشکی معمولاً کمبود «لیست تماس» ندارد؛ کمبودِ اولویت، زمینه و نتیجه‌ی قابل اندازه‌گیری دارد. این راهنما نشان می‌دهد CRM دندانپزشکی کجا کمک می‌کند و کجا کافی نیست.',
    read: '۹ دقیقه مطالعه', published: 'انتشار', author: 'Nima Saraeian · AI Product Manager',
    visual: ['PMS', 'CRM', 'DECISION LAYER'], visualAria: 'مقایسه نرم‌افزار مطب، CRM و لایه تصمیم در کلینیک دندانپزشکی',
    body: `<p class="lead-note"><strong>پاسخ کوتاه:</strong> CRM کلینیک دندانپزشکی ابزاری برای مدیریت ارتباط با بیمار است: یادآوری نوبت، پیگیری طرح درمان، کمپین پیامکی و ثبت تماس. نرم‌افزار مطب (PMS) پرونده، نوبت و مالی را ثبت می‌کند؛ CRM ارتباط را مدیریت می‌کند. اما برگرداندن بیمار به یک لایه‌ی سوم هم نیاز دارد: اینکه <em>امروز</em> کدام بیمار، به چه دلیل و با چه اقدامی اولویت دارد. بدون این لایه، CRM به لیست بلندی از شماره‌ها تبدیل می‌شود که تیم پذیرش وقت تماس با همه‌شان را ندارد.</p>
<h2>CRM کلینیک دندانپزشکی دقیقاً چیست؟</h2>
<p>CRM (مدیریت ارتباط با مشتری) در کلینیک دندانپزشکی یعنی هر تماس، پیام و یادآوری با بیمار در یک جا ثبت شود و هیچ پیگیری بین افراد گم نشود. نسخه‌های رایج معمولاً یادآوری نوبت، پیامک تولد یا کمپین، ثبت نتیجه‌ی تماس و گزارش تعداد پیام ارسال‌شده را پوشش می‌دهند.</p>
<p>این قابلیت‌ها مفیدند، ولی یک فرض پنهان دارند: اینکه تیم می‌داند با چه کسی باید تماس بگیرد. در عمل، کلینیکی با چند هزار پرونده‌ی فعال، هر روز با این سؤال روبه‌روست که از میان صدها بیمار بی‌نوبت، کدام‌ها واقعاً در حال ریزش‌اند و کدام‌ها فقط در فاصله‌ی معمول درمان هستند.</p>
<h2>نرم‌افزار مطب، CRM و لایه‌ی تصمیم: چه تفاوتی دارند؟</h2>
<table class="decision-table"><thead><tr><th>لایه</th><th>به چه سؤالی جواب می‌دهد؟</th><th>نمونه خروجی</th></tr></thead><tbody>
<tr><td>نرم‌افزار مطب (PMS)</td><td>چه اتفاقی افتاده؟</td><td>پرونده، نوبت، خدمات انجام‌شده، پرداخت</td></tr>
<tr><td>CRM دندانپزشکی</td><td>با چه کسی چه ارتباطی داشته‌ایم؟</td><td>پیامک یادآوری، ثبت تماس، کمپین</td></tr>
<tr><td>لایه‌ی تصمیم (Decision Intelligence)</td><td>امروز کدام بیمار، چرا و چه اقدامی؟</td><td>صف اولویت‌دار با دلیل قابل مشاهده و اقدام پیشنهادی</td></tr>
</tbody></table>
<p>این سه جایگزین هم نیستند. بهترین چیدمان معمولاً این است که نرم‌افزار مطب منبع اصلی داده بماند، لایه‌ی تصمیم از روی همان داده (ترجیحاً فقط‌خواندنی) اولویت بسازد و ارتباط از طریق کانالی انجام شود که کلینیک از قبل دارد.</p>
<div class="signal-box"><small>نکته‌ی خرید</small><h3>CRM دوم، کار دوم نسازد.</h3><p>اگر برای استفاده از CRM، پذیرش باید اطلاعات بیمار را دوباره وارد کند، داده خیلی زود ناقص می‌شود. سیستم پیگیری باید از نرم‌افزار فعلی بخواند، نه اینکه کنار آن یک پرونده‌ی موازی بسازد.</p></div>
<h2>چرا بسیاری از CRMها بیمار را برنمی‌گردانند؟</h2>
<h3>۱. لیست می‌دهند، اولویت نه</h3>
<p>فیلتر «بیماران بدون مراجعه در ۶ ماه اخیر» صدها نام برمی‌گرداند. بیماری که طرح درمان ایمپلنتش نیمه‌کاره مانده و بیماری که فقط جرم‌گیری سالانه‌اش عقب افتاده، در یک لیست کنار هم قرار می‌گیرند؛ در حالی که فوریت و ارزش پیگیری‌شان کاملاً متفاوت است.</p>
<h3>۲. زمینه‌ی درمانی را نمی‌بینند</h3>
<p>«۲۱ روز بدون مراجعه» برای بیماری که وسط درمان ریشه است هشدار جدی است و برای بیمار چکاپ کاملاً عادی. CRM عمومی معمولاً فقط تاریخ آخرین مراجعه را می‌بیند، نه مرحله‌ی درمان، پزشک معالج یا سؤال مالیِ بی‌پاسخ.</p>
<h3>۳. نتیجه را با تعداد پیام می‌سنجند</h3>
<p>«۲٬۰۰۰ پیامک ارسال شد» معیار فعالیت است، نه نتیجه. معیار درست این است که چند بیمارِ اولویت‌دار پس از اقدام، نوبت گرفتند و درمانشان ادامه پیدا کرد.</p>
<h3>۴. جای اصلیِ نشت را نمی‌بینند</h3>
<p>بخش بزرگی از ریزش، همان روز ویزیت شروع می‌شود: بیمار از کلینیک خارج می‌شود بدون اینکه نوبت جلسه‌ی بعدش ثبت شده باشد. پیگیری بعدی همیشه سخت‌تر از ثبت نوبت در همان لحظه است، و این نشت در گزارش‌های معمول CRM دیده نمی‌شود.</p>
<p class="quote">پیگیری خوب از تماس شروع نمی‌شود؛ از دانستن اینکه چه کسی، امروز و چرا باید دیده شود شروع می‌شود.</p>
<h2>۷ قابلیت ضروری نرم‌افزار پیگیری بیماران دندانپزشکی</h2>
<ol class="action-steps">
<li><div><strong>۱. خواندن از نرم‌افزار فعلی، بدون ورود دوباره.</strong> داده‌ی نوبت، درمان و پرداخت باید از سیستم موجود کلینیک خوانده شود؛ ترجیحاً با دسترسی فقط‌خواندنی.</div></li>
<li><div><strong>۲. اولویت‌بندی با چند نشانه.</strong> مرحله‌ی درمان، فاصله‌ی غیرعادی، نبود نوبت بعدی، لغو بدون جایگزین و ارزش طرح درمان باید با هم دیده شوند، نه فقط تاریخ آخرین مراجعه.</div></li>
<li><div><strong>۳. دلیل قابل مشاهده.</strong> کنار هر بیمار باید نوشته شود چرا در صف است؛ تیم باید بتواند پیشنهاد را بفهمد و رد کند.</div></li>
<li><div><strong>۴. اقدام پیشنهادی، نه فقط هشدار.</strong> «ابتدا سؤال مالی را روشن کنید» مفیدتر از «ریسک بالا» است.</div></li>
<li><div><strong>۵. ثبت نتیجه با یک کلیک.</strong> نوبت گرفت، جواب نداد، بعداً تماس بگیرید؛ بدون این داده، سیستم هیچ‌وقت بهتر نمی‌شود.</div></li>
<li><div><strong>۶. دیدن نشت نوبت سر ویزیت.</strong> چه سهمی از بیماران بدون نوبت بعدی از کلینیک خارج می‌شوند، و این عدد در پذیرش‌های مختلف چقدر فرق دارد.</div></li>
<li><div><strong>۷. حریم خصوصی و تصمیم انسانی.</strong> حداقل داده، دسترسی نقش‌محور، ثبت بازدید پرونده‌ها و اینکه هیچ پیامی بدون تأیید تیم برای بیمار ارسال نشود.</div></li>
</ol>
<h2>چطور انتخاب کنیم؟ چک‌لیست ۵ سؤالی</h2>
<ul>
<li>آیا مجبوریم اطلاعات بیمار را دوباره وارد کنیم؟ (اگر بله، احتمال شکست بالاست.)</li>
<li>صف پیگیری بر اساس چه نشانه‌هایی ساخته می‌شود و دلیلش را می‌بینیم؟</li>
<li>موفقیت را با «پیام ارسال‌شده» می‌سنجد یا با «بیمارِ برگشته»؟</li>
<li>نشت نوبت سر ویزیت و عملکرد پذیرش را نشان می‌دهد؟</li>
<li>آیا می‌توانیم با یک پایلوت محدود و فقط‌خواندنی شروع کنیم؟</li>
</ul>
<h2>جایگاه iQlinic</h2>
<p>iQlinic یک CRM پیامکی یا نرم‌افزار مطب جدید نیست؛ یک <a href="/fa/dental-clinic-ai-software/">لایه‌ی هوشمندی تصمیم روی نرم‌افزار فعلی کلینیک</a> است که از داده‌ی موجود، صف بازگشت بیمار با دلیل و اقدام پیشنهادی می‌سازد، نشت نوبت سر ویزیت را برای هر پذیرش نشان می‌دهد و نتیجه‌ی هر پیگیری را ثبت می‌کند. برای فهم ریشه‌ی ریزش، مقاله‌ی <a href="/fa/insights/patient-treatment-plan-follow-up/">چرا بیماران پس از طرح درمان بازنمی‌گردند</a> را بخوانید؛ برای پیش‌نیاز فنی، <a href="/fa/insights/dental-clinic-ai-data-integration/">یکپارچه‌سازی داده کلینیک</a> و برای ارزیابی فروشنده، <a href="/fa/insights/dental-clinic-ai-buying-guide/">راهنمای خرید هوش مصنوعی</a>. یا مستقیم <a href="/fa/demo/">دموی تعاملی</a> را ببینید.</p>`,
    faq: [
      ['CRM کلینیک دندانپزشکی با نرم‌افزار مطب چه فرقی دارد؟', 'نرم‌افزار مطب پرونده، نوبت و مالی را ثبت می‌کند؛ CRM ارتباط با بیمار (یادآوری، تماس، کمپین) را مدیریت می‌کند. هیچ‌کدام به‌تنهایی نمی‌گوید امروز کدام بیمار اولویت دارد.'],
      ['آیا برای پیگیری بیماران باید نرم‌افزار مطب را عوض کنیم؟', 'خیر. بهتر است نرم‌افزار فعلی منبع اصلی داده بماند و ابزار پیگیری از روی همان داده، ترجیحاً فقط‌خواندنی، اولویت بسازد.'],
      ['موفقیت نرم‌افزار پیگیری بیماران را چطور بسنجیم؟', 'با تعداد بیماران اولویت‌دار که پس از اقدام نوبت گرفتند و درمانشان ادامه پیدا کرد، نه با تعداد پیامک یا تماس.'],
      ['نشت نوبت سر ویزیت یعنی چه؟', 'یعنی بیمار ویزیت را تمام می‌کند و بدون نوبت جلسه‌ی بعد از کلینیک خارج می‌شود. این بخش بزرگی از ریزش را می‌سازد و با گزارش پذیرش‌به‌پذیرش قابل مدیریت است.'],
    ],
    faqTitle: 'پرسش‌های متداول', note: '<strong>یادداشت تحریریه:</strong> این متن راهنمای عملیاتی برای مدیران کلینیک است و نتیجه‌ی مالی یا درمانی را تضمین نمی‌کند.',
    cta: ['ببینیم داده‌ی کلینیک شما کدام بیماران را نشان می‌دهد.', 'یک پایلوت فقط‌خواندنی روی نرم‌افزار فعلی کلینیک تعریف کنیم.', 'درخواست بررسی کلینیک ↗'],
    hubTitle: 'CRM کلینیک دندانپزشکی و نرم‌افزار پیگیری بیماران', hubDesc: 'تفاوت PMS، CRM و لایه‌ی تصمیم؛ ۷ قابلیت ضروری و چک‌لیست انتخاب.',
  },
  en: {
    title: 'Dental Clinic CRM vs Patient Follow-Up Software | iQlinic',
    h1: 'Dental Clinic CRM: How It Differs From Practice Management Software, and What Patient Follow-Up Software Really Needs',
    desc: 'What a dental CRM does, how it differs from your practice management software, and why call lists rarely bring patients back. 7 must-have follow-up features.',
    crumb: 'Dental CRM', home: 'Home', insights: 'Insights', kicker: 'CRM & patient follow-up',
    deck: 'Dental clinics rarely lack a call list. They lack priority, context and a measurable outcome. This guide shows where a dental CRM helps, and where it stops short.',
    read: '9 min read', published: 'Published', author: 'Nima Saraeian · AI Product Manager',
    visual: ['PMS', 'CRM', 'DECISION LAYER'], visualAria: 'Practice management software, CRM and a decision layer compared for a dental clinic',
    body: `<p class="lead-note"><strong>Short answer:</strong> a dental clinic CRM manages patient communication: appointment reminders, treatment-plan follow-up, campaigns and call logging. Your practice management software (PMS) records charts, appointments and billing; a CRM manages the conversation. Bringing patients back needs a third layer: knowing <em>today</em> which patient matters, why, and what to do. Without it, a CRM becomes a long list of numbers the front desk never has time to call.</p>
<h2>What is a dental clinic CRM?</h2>
<p>In a dental clinic, CRM (customer relationship management) means every call, message and reminder lives in one place and no follow-up falls between people. Typical tools cover reminders, birthday or recall campaigns, call outcomes and reports on messages sent.</p>
<p>Those features are useful, but they assume the team already knows whom to contact. In practice, a clinic with thousands of active records faces the same question every day: of the hundreds of patients without a next appointment, which ones are actually drifting away, and which are simply within a normal treatment interval?</p>
<h2>PMS vs CRM vs decision layer</h2>
<table class="decision-table"><thead><tr><th>Layer</th><th>Question it answers</th><th>Typical output</th></tr></thead><tbody>
<tr><td>Practice management software (PMS)</td><td>What happened?</td><td>Charts, appointments, completed procedures, payments</td></tr>
<tr><td>Dental CRM</td><td>What have we said to whom?</td><td>Reminders, call logs, campaigns</td></tr>
<tr><td>Decision intelligence layer</td><td>Which patient today, why, and what action?</td><td>A prioritized queue with visible reasons and a suggested action</td></tr>
</tbody></table>
<p>These are not substitutes. The strongest setup usually keeps the PMS as the system of record, lets a decision layer build priorities from the same data (ideally read-only), and uses the communication channels the clinic already has.</p>
<div class="signal-box"><small>BUYER TIP</small><h3>A second CRM should not mean second data entry.</h3><p>If the front desk has to re-enter patient details to use a CRM, the data goes stale fast. Follow-up software should read from your existing system, not build a parallel record next to it.</p></div>
<h2>Why many CRMs don’t bring patients back</h2>
<h3>1. They give you a list, not a priority</h3>
<p>A filter like “no visit in six months” returns hundreds of names. A patient with an unfinished implant plan and a patient who is simply late for an annual cleaning sit side by side, even though their urgency and value are completely different.</p>
<h3>2. They miss treatment context</h3>
<p>“21 days without a visit” is a red flag mid root canal and perfectly normal after a check-up. A generic CRM usually sees the last-visit date, not the treatment stage, the treating dentist or an unanswered payment question.</p>
<h3>3. They measure messages, not returns</h3>
<p>“2,000 SMS sent” measures activity, not outcome. The right measure is how many priority patients booked and continued treatment after the action.</p>
<h3>4. They can’t see where the leak starts</h3>
<p>A large share of drop-off starts on the day of the visit: the patient leaves without the next appointment booked. Following up later is always harder than booking at the chair, and that leak rarely shows in standard CRM reports.</p>
<p class="quote">Good follow-up doesn’t start with a call. It starts with knowing who needs attention today, and why.</p>
<h2>7 must-have features in dental patient follow-up software</h2>
<ol class="action-steps">
<li><div><strong>1. Reads from your current software, no re-entry.</strong> Appointment, treatment and payment data should come from the existing system, ideally with read-only access.</div></li>
<li><div><strong>2. Multi-signal prioritization.</strong> Treatment stage, unusual gaps, no next appointment, cancellations without rebooking and plan value, seen together, not just last-visit date.</div></li>
<li><div><strong>3. Visible reasons.</strong> Every patient in the queue shows why they are there; the team can understand and reject a suggestion.</div></li>
<li><div><strong>4. A suggested action, not just an alert.</strong> “Resolve the payment question first” beats “high risk”.</div></li>
<li><div><strong>5. One-click outcome logging.</strong> Booked, no answer, call later. Without this data the system never improves.</div></li>
<li><div><strong>6. Chairside rebooking visibility.</strong> What share of patients leave without a next appointment, and how it varies by receptionist.</div></li>
<li><div><strong>7. Privacy and human decisions.</strong> Data minimization, role-based access, audit of file views, and no message sent to a patient without team approval.</div></li>
</ol>
<h2>How to choose: a five-question checklist</h2>
<ul>
<li>Do we have to re-enter patient data? (If yes, expect it to fail.)</li>
<li>Which signals build the follow-up queue, and can we see the reason?</li>
<li>Does it measure success by messages sent or by patients who returned?</li>
<li>Does it show chairside rebooking and front-desk performance?</li>
<li>Can we start with a narrow, read-only pilot?</li>
</ul>
<h2>Where iQlinic fits</h2>
<p>iQlinic is not an SMS CRM or a new PMS. It is a <a href="/en/dental-clinic-ai-software/">decision-intelligence layer on top of your existing clinic software</a> that builds a patient-recovery queue with reasons and suggested actions, shows chairside rebooking per receptionist, and records the outcome of every follow-up. For the root causes of drop-off, read <a href="/en/insights/why-dental-patients-do-not-return-after-treatment-plan/">why dental patients don’t return after a treatment plan</a>; for the technical prerequisites, <a href="/en/insights/dental-clinic-ai-data-integration/">dental clinic data integration</a>; and for vendor evaluation, the <a href="/en/insights/dental-clinic-ai-buying-guide/">AI buying guide</a>. Or go straight to the <a href="/en/demo/">interactive demo</a>.</p>`,
    faq: [
      ['How is a dental CRM different from practice management software?', 'Practice management software records charts, appointments and billing; a CRM manages patient communication (reminders, calls, campaigns). Neither tells you on its own which patient matters most today.'],
      ['Do we need to replace our practice software to follow up patients better?', 'No. Keep your existing software as the system of record and let follow-up tooling build priorities from the same data, ideally read-only.'],
      ['How should we measure patient follow-up software?', 'By the number of priority patients who booked and continued treatment after an action, not by messages or calls made.'],
      ['What is chairside rebooking leakage?', 'A patient finishes a visit and leaves without the next appointment booked. It drives a large share of drop-off and can be managed with per-receptionist reporting.'],
    ],
    faqTitle: 'Frequently asked questions', note: '<strong>Editorial note:</strong> this is operational guidance for clinic managers and does not guarantee financial or clinical outcomes.',
    cta: ['See which patients your clinic data surfaces.', 'Let’s define a read-only pilot on top of your current clinic software.', 'Request a clinic assessment ↗'],
    hubTitle: 'Dental clinic CRM vs patient follow-up software', hubDesc: 'PMS vs CRM vs decision layer, 7 must-have features and a selection checklist.',
  },
  tr: {
    title: 'Diş Kliniği CRM ve Hasta Takip Yazılımı | iQlinic',
    h1: 'Diş Kliniği CRM: Klinik Yönetim Yazılımından Farkı ve Hasta Takip Yazılımında Olması Gerekenler',
    desc: 'Diş kliniği CRM nedir, klinik yönetim yazılımından farkı ne ve arama listeleri hastayı neden geri getirmez? Hasta takip yazılımında olması gereken 7 özellik.',
    crumb: 'Diş kliniği CRM', home: 'Ana sayfa', insights: 'İçgörüler', kicker: 'CRM ve hasta takibi',
    deck: 'Diş kliniklerinin eksiği genellikle arama listesi değildir; öncelik, bağlam ve ölçülebilir sonuçtur. Bu rehber, diş kliniği CRM’inin nerede işe yaradığını ve nerede yetersiz kaldığını gösterir.',
    read: '9 dk okuma', published: 'Yayınlandı', author: 'Nima Saraeian · AI Product Manager',
    visual: ['PMS', 'CRM', 'KARAR KATMANI'], visualAria: 'Diş kliniğinde klinik yönetim yazılımı, CRM ve karar katmanı karşılaştırması',
    body: `<p class="lead-note"><strong>Kısa cevap:</strong> diş kliniği CRM’i hasta iletişimini yönetir: randevu hatırlatmaları, tedavi planı takibi, kampanyalar ve arama kayıtları. Klinik yönetim yazılımı (PMS) dosya, randevu ve tahsilatı kaydeder; CRM iletişimi yönetir. Hastayı geri getirmek ise üçüncü bir katman ister: <em>bugün</em> hangi hastanın, neden ve hangi aksiyonla öncelikli olduğunu bilmek. Bu katman olmadan CRM, resepsiyonun aramaya hiç vakit bulamadığı uzun bir numara listesine dönüşür.</p>
<h2>Diş kliniği CRM’i tam olarak nedir?</h2>
<p>Diş kliniğinde CRM (müşteri ilişkileri yönetimi), her arama, mesaj ve hatırlatmanın tek yerde tutulması ve hiçbir takibin kişiler arasında kaybolmaması demektir. Yaygın araçlar hatırlatma, doğum günü veya kontrol kampanyası, arama sonucu ve gönderilen mesaj raporlarını kapsar.</p>
<p>Bu özellikler faydalıdır, ama gizli bir varsayımları vardır: ekibin kimi araması gerektiğini zaten bildiği. Gerçekte binlerce aktif kaydı olan bir klinik her gün aynı soruyla karşılaşır: randevusu olmayan yüzlerce hastadan hangileri gerçekten kopuyor, hangileri sadece normal tedavi aralığında?</p>
<h2>PMS, CRM ve karar katmanı: farkları ne?</h2>
<table class="decision-table"><thead><tr><th>Katman</th><th>Cevapladığı soru</th><th>Tipik çıktı</th></tr></thead><tbody>
<tr><td>Klinik yönetim yazılımı (PMS)</td><td>Ne oldu?</td><td>Dosya, randevu, yapılan işlemler, ödemeler</td></tr>
<tr><td>Diş kliniği CRM’i</td><td>Kime ne söyledik?</td><td>Hatırlatma, arama kaydı, kampanya</td></tr>
<tr><td>Karar zekâsı katmanı</td><td>Bugün hangi hasta, neden ve hangi aksiyon?</td><td>Görünür gerekçeli ve önerilen aksiyonlu öncelik kuyruğu</td></tr>
</tbody></table>
<p>Bunlar birbirinin yerine geçmez. En güçlü yapı genellikle PMS’i ana kayıt sistemi olarak tutar, karar katmanının aynı veriden (tercihen salt okunur) öncelik üretmesine izin verir ve kliniğin zaten kullandığı iletişim kanallarını kullanır.</p>
<div class="signal-box"><small>SATIN ALMA İPUCU</small><h3>İkinci CRM, ikinci veri girişi demek olmamalı.</h3><p>CRM’i kullanmak için resepsiyon hasta bilgilerini yeniden girmek zorundaysa veri hızla eskir. Takip yazılımı mevcut sisteminizden okumalı, yanına paralel bir kayıt kurmamalı.</p></div>
<h2>Birçok CRM hastayı neden geri getirmez?</h2>
<h3>1. Liste verir, öncelik vermez</h3>
<p>“Son altı ayda ziyaret yok” filtresi yüzlerce isim döndürür. Yarım kalmış implant planı olan hasta ile yıllık diş taşı temizliği gecikmiş hasta yan yana durur; oysa aciliyetleri ve değerleri tamamen farklıdır.</p>
<h3>2. Tedavi bağlamını görmez</h3>
<p>“21 gündür ziyaret yok”, kanal tedavisinin ortasındaki hasta için ciddi bir uyarıdır, kontrol sonrası ise tamamen normaldir. Genel bir CRM çoğunlukla son ziyaret tarihini görür; tedavi aşamasını, hekimi veya yanıtsız ödeme sorusunu görmez.</p>
<h3>3. Mesajı ölçer, dönüşü değil</h3>
<p>“2.000 SMS gönderildi” bir aktivite ölçüsüdür, sonuç değil. Doğru ölçü, aksiyondan sonra kaç öncelikli hastanın randevu alıp tedaviye devam ettiğidir.</p>
<h3>4. Kaçağın başladığı yeri görmez</h3>
<p>Kopuşun büyük kısmı ziyaret günü başlar: hasta bir sonraki randevusu alınmadan klinikten çıkar. Sonradan takip etmek, koltuk başında randevu vermekten her zaman daha zordur ve bu kaçak standart CRM raporlarında nadiren görünür.</p>
<p class="quote">İyi takip aramayla başlamaz; bugün kimin, neden görülmesi gerektiğini bilmekle başlar.</p>
<h2>Diş kliniği hasta takip yazılımında olması gereken 7 özellik</h2>
<ol class="action-steps">
<li><div><strong>1. Mevcut yazılımdan okur, yeniden giriş istemez.</strong> Randevu, tedavi ve ödeme verisi mevcut sistemden gelmeli; tercihen salt okunur erişimle.</div></li>
<li><div><strong>2. Çok sinyalli önceliklendirme.</strong> Tedavi aşaması, olağandışı aralık, sonraki randevu yokluğu, yerine randevu alınmayan iptaller ve plan değeri birlikte görülmeli; sadece son ziyaret tarihi değil.</div></li>
<li><div><strong>3. Görünür gerekçe.</strong> Kuyruktaki her hastanın neden orada olduğu yazmalı; ekip öneriyi anlayıp reddedebilmeli.</div></li>
<li><div><strong>4. Sadece uyarı değil, önerilen aksiyon.</strong> “Önce ödeme sorusunu netleştirin”, “yüksek risk”ten daha faydalıdır.</div></li>
<li><div><strong>5. Tek tıkla sonuç kaydı.</strong> Randevu aldı, yanıt vermedi, sonra ara. Bu veri olmadan sistem asla gelişmez.</div></li>
<li><div><strong>6. Koltuk başı randevu görünürlüğü.</strong> Hastaların ne kadarının sonraki randevu olmadan ayrıldığı ve bunun resepsiyoniste göre nasıl değiştiği.</div></li>
<li><div><strong>7. Gizlilik ve insan kararı.</strong> Veri minimizasyonu, rol bazlı erişim, dosya görüntüleme kaydı ve ekip onayı olmadan hastaya mesaj gönderilmemesi.</div></li>
</ol>
<h2>Nasıl seçilir? Beş soruluk kontrol listesi</h2>
<ul>
<li>Hasta verisini yeniden girmek zorunda mıyız? (Evet ise başarısızlık olasılığı yüksek.)</li>
<li>Takip kuyruğu hangi sinyallerle oluşuyor ve gerekçeyi görebiliyor muyuz?</li>
<li>Başarıyı gönderilen mesajla mı, geri dönen hastayla mı ölçüyor?</li>
<li>Koltuk başı randevuyu ve resepsiyon performansını gösteriyor mu?</li>
<li>Dar kapsamlı, salt okunur bir pilotla başlayabilir miyiz?</li>
</ul>
<h2>iQlinic’in yeri</h2>
<p>iQlinic bir SMS CRM’i veya yeni bir PMS değildir; <a href="/tr/dis-klinikleri-icin-yapay-zeka/">mevcut klinik yazılımınızın üzerinde çalışan bir karar zekâsı katmanıdır</a>. Gerekçeli ve önerilen aksiyonlu bir hasta geri kazanım kuyruğu oluşturur, koltuk başı randevuyu resepsiyoniste göre gösterir ve her takibin sonucunu kaydeder. Kopuşun nedenleri için <a href="/tr/insights/tedavi-plani-alan-hastalar-neden-geri-donmuyor/">tedavi planı alan hastalar neden geri dönmüyor</a>, teknik ön koşullar için <a href="/tr/insights/dis-klinigi-yapay-zeka-veri-entegrasyonu/">klinik veri entegrasyonu</a>, tedarikçi değerlendirmesi için <a href="/tr/insights/dis-klinigi-yapay-zeka-satin-alma-rehberi/">yapay zekâ satın alma rehberi</a> yazılarını okuyun ya da doğrudan <a href="/tr/demo/">etkileşimli demoya</a> bakın.</p>`,
    faq: [
      ['Diş kliniği CRM’i klinik yönetim yazılımından nasıl ayrılır?', 'Klinik yönetim yazılımı dosya, randevu ve tahsilatı kaydeder; CRM hasta iletişimini (hatırlatma, arama, kampanya) yönetir. Hiçbiri tek başına bugün hangi hastanın öncelikli olduğunu söylemez.'],
      ['Hastaları daha iyi takip etmek için klinik yazılımını değiştirmeli miyiz?', 'Hayır. Mevcut yazılım ana kayıt sistemi olarak kalmalı; takip aracı aynı veriden, tercihen salt okunur, öncelik üretmeli.'],
      ['Hasta takip yazılımının başarısı nasıl ölçülür?', 'Aksiyondan sonra randevu alıp tedaviye devam eden öncelikli hasta sayısıyla; mesaj veya arama sayısıyla değil.'],
      ['Koltuk başı randevu kaçağı nedir?', 'Hastanın ziyareti bitirip sonraki randevusu alınmadan klinikten ayrılmasıdır. Kopuşun büyük kısmını oluşturur ve resepsiyonist bazlı raporlamayla yönetilebilir.'],
    ],
    faqTitle: 'Sık sorulan sorular', note: '<strong>Editoryal not:</strong> bu metin klinik yöneticileri için operasyonel bir rehberdir; finansal veya klinik sonucu garanti etmez.',
    cta: ['Klinik verinizin hangi hastaları gösterdiğini görelim.', 'Mevcut klinik yazılımınız üzerinde salt okunur bir pilot tanımlayalım.', 'Klinik değerlendirmesi iste ↗'],
    hubTitle: 'Diş kliniği CRM ve hasta takip yazılımı', hubDesc: 'PMS, CRM ve karar katmanı; 7 temel özellik ve seçim kontrol listesi.',
  },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const ctaHref = 'mailto:contact@iqlinic.ir?subject=iQlinic%20Dental%20CRM%20Review';

function headFor(l, tplHead) {
  const c = C[l];
  const ld = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: c.h1, description: c.desc, image: [`${SITE}/assets/ai-dental-clinic-og.png`], datePublished: DATE, dateModified: DATE,
      author: { '@type': 'Person', name: 'Nima Saraeian', jobTitle: 'AI Product Manager' },
      publisher: { '@type': 'Organization', name: 'iQlinic', logo: { '@type': 'ImageObject', url: `${SITE}/assets/iqlinic-brand.png` } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url(l) }, inLanguage: l },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.home, item: `${SITE}/${l}/` },
      { '@type': 'ListItem', position: 2, name: c.insights, item: `${SITE}/${l}/insights/` },
      { '@type': 'ListItem', position: 3, name: c.crumb, item: url(l) }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  const dir = l === 'fa' ? 'rtl' : 'ltr';
  // keep the template's asset links (icons, manifest, stylesheets); replace everything page-specific
  const assets = (tplHead.match(/<link rel="(icon|manifest|stylesheet)"[^>]*>/g) || []).filter((x) => !/v4-(core|shell)/.test(x)).join('');
  return `<!doctype html><html lang="${l}" dir="${dir}"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#05070b"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><title>${c.title}</title><meta name="description" content="${esc(c.desc)}"><link rel="canonical" href="${url(l)}"><link rel="alternate" hreflang="en" href="${url('en')}"><link rel="alternate" hreflang="tr" href="${url('tr')}"><link rel="alternate" hreflang="fa" href="${url('fa')}"><link rel="alternate" hreflang="x-default" href="${url('en')}"><meta property="og:type" content="article"><meta property="og:site_name" content="iQlinic"><meta property="og:title" content="${esc(c.title)}"><meta property="og:description" content="${esc(c.desc)}"><meta property="og:url" content="${url(l)}"><meta property="og:image" content="${SITE}/assets/ai-dental-clinic-og.png"><meta name="twitter:card" content="summary_large_image"><meta property="article:published_time" content="${DATE}">${assets}<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>`;
}

function bodyFor(l) {
  const c = C[l];
  const faq = c.faq.map(([q, a], i) => `<details${i === 0 ? ' open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('');
  return `<body class="insights-page">
<div class="noise"></div><main><article><header class="article-head article-shell"><nav class="breadcrumbs"><a href="/${l}/">${c.home}</a><span>/</span><a href="/${l}/insights/">${c.insights}</a><span>/</span><span>${c.crumb}</span></nav><div class="insights-kicker"><i></i>${c.kicker}</div><h1>${c.h1}</h1><p class="article-deck">${c.deck}</p><div class="byline"><strong>${c.author}</strong><i></i><span>${c.published}: <time datetime="${DATE}">${DATE}</time></span><i></i><span>${c.read}</span></div></header><div class="article-visual" role="img" aria-label="${esc(c.visualAria)}"><div class="journey"><span>${c.visual[0]}</span><i></i><span>${c.visual[1]}</span><i></i><span>${c.visual[2]}</span></div></div><div class="article-body article-shell">${c.body}<section class="faq"><h2>${c.faqTitle}</h2>${faq}</section><p class="method-note">${c.note}</p><aside class="article-cta"><div class="insights-kicker"><i></i>${c.kicker}</div><h2>${c.cta[0]}</h2><p>${c.cta[1]}</p><a class="button primary" href="${ctaHref}">${c.cta[2]}</a></aside></div></article></main>
</body></html>
`;
}

/* ---------- write pages ---------- */
for (const l of ['fa', 'en', 'tr']) {
  const tpl = fs.readFileSync(path.join(ROOT, TEMPLATE[l], 'index.html'), 'utf8');
  const tplHead = tpl.slice(0, tpl.indexOf('</head>'));
  const dir = path.join(ROOT, l, 'insights', SLUG[l]);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), headFor(l, tplHead) + '\n' + bodyFor(l));
}

/* ---------- hub cards (insert right after the buying-guide card, idempotent) ---------- */
for (const l of ['fa', 'en', 'tr']) {
  const f = path.join(ROOT, l, 'insights', 'index.html');
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes(`/${l}/insights/${SLUG[l]}/`)) continue;
  const anchor = `href="/${TEMPLATE[l].replace(/^/, '')}/"`.replace('href="', 'href="/').replace('//', '/');
  const i = s.indexOf(`href="/${TEMPLATE[l]}/"`);
  if (i < 0) { console.warn('hub anchor not found for', l); continue; }
  const end = s.indexOf('</a>', i) + 4;
  const card = `<a class="featured-article" href="/${l}/insights/${SLUG[l]}/"><div class="article-card-copy"><h2>${C[l].hubTitle}</h2><p>${C[l].hubDesc}</p></div></a>`;
  s = s.slice(0, end) + card + s.slice(end);
  fs.writeFileSync(f, s);
}

/* ---------- sitemaps ---------- */
function addToSitemap(file, withAlternates) {
  const f = path.join(ROOT, file);
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes(url('fa'))) return;
  const alt = withAlternates && s.includes('xhtml:link')
    ? ['fa', 'en', 'tr'].map((x) => `<xhtml:link rel="alternate" hreflang="${x}" href="${url(x)}"/>`).join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${url('en')}"/>`
    : '';
  const entries = ['fa', 'en', 'tr'].map((l) => `  <url><loc>${url(l)}</loc><lastmod>${DATE}</lastmod>${alt}</url>`).join('\n');
  s = s.replace('</urlset>', `${entries}\n</urlset>`);
  fs.writeFileSync(f, s);
}
addToSitemap('sitemap.xml', true);
addToSitemap('sitemap-recent.xml', false);

/* ---------- contextual internal links from related existing articles (idempotent) ---------- */
const LINKS = {
  fa: { file: 'fa/insights/patient-treatment-plan-follow-up', html: `<p>اگر در حال انتخاب ابزار هستید، مقایسه‌ی <a href="/fa/insights/${SLUG.fa}/">CRM کلینیک دندانپزشکی و نرم‌افزار پیگیری بیماران</a> را هم ببینید.</p>` },
  en: { file: 'en/insights/why-dental-patients-do-not-return-after-treatment-plan', html: `<p>If you are choosing tools, see our comparison of <a href="/en/insights/${SLUG.en}/">dental clinic CRM vs patient follow-up software</a>.</p>` },
  tr: { file: 'tr/insights/tedavi-plani-alan-hastalar-neden-geri-donmuyor', html: `<p>Araç seçiyorsanız <a href="/tr/insights/${SLUG.tr}/">diş kliniği CRM ve hasta takip yazılımı</a> karşılaştırmamıza da göz atın.</p>` },
};
for (const l of ['fa', 'en', 'tr']) {
  const f = path.join(ROOT, LINKS[l].file, 'index.html');
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes(`/${l}/insights/${SLUG[l]}/`)) continue;
  // place before the FAQ / references / CTA block, whichever comes first inside the article body
  const markers = ['<section class="faq"', '<section class="references"', '<aside class="article-cta"', '</article>'];
  const pos = markers.map((m) => s.indexOf(m)).filter((x) => x > 0).sort((a, b) => a - b)[0];
  s = s.slice(0, pos) + LINKS[l].html + s.slice(pos);
  fs.writeFileSync(f, s);
}
console.log('article added:', Object.values(SLUG).join(', '));
