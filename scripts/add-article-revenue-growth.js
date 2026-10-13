#!/usr/bin/env node
/* Adds the trilingual "increase dental clinic revenue without new patients" article (fa/en/tr) using the
   buying-guide article as the structural template, then wires hubs, sitemaps and internal links.
   Idempotent. Run: node scripts/add-article-revenue-growth.js && node scripts/apply-v4-shell.js */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.iqlinic.ir';
const DATE = '2026-10-13';

const SLUG = { fa: 'dental-clinic-revenue-growth', en: 'dental-clinic-revenue-growth', tr: 'dis-klinigi-gelir-artirma' };
const TEMPLATE = { fa: 'fa/insights/dental-clinic-ai-buying-guide', en: 'en/insights/dental-clinic-ai-buying-guide', tr: 'tr/insights/dis-klinigi-yapay-zeka-satin-alma-rehberi' };
const url = (l) => `${SITE}/${l}/insights/${SLUG[l]}/`;

const C = {
  fa: {
    title: 'افزایش درآمد کلینیک دندانپزشکی بدون بیمار جدید | iQlinic',
    h1: 'افزایش درآمد کلینیک دندانپزشکی: ۷ نشتی درآمد که بدون جذب بیمار جدید قابل جبران است',
    desc: 'راهکار افزایش درآمد کلینیک دندانپزشکی همیشه تبلیغات نیست. ۷ نشتی پنهان درآمد از نوبت سر ویزیت تا طرح درمان باز، با شاخص اندازه‌گیری و برنامه ۳۰ روزه.',
    crumb: 'افزایش درآمد کلینیک', home: 'خانه', insights: 'بینش‌ها', kicker: 'درآمد و عملیات کلینیک',
    deck: 'بیشتر کلینیک‌های دندانپزشکی برای رشد درآمد سراغ تبلیغات می‌روند، در حالی که بخش بزرگی از درآمد از دست‌رفته همین حالا داخل پرونده‌های خودشان است: بیمارانی که معاینه شده‌اند، طرح درمان گرفته‌اند یا ارجاع شده‌اند، اما درمانشان هرگز شروع یا تمام نشده است.',
    read: '۱۰ دقیقه مطالعه', published: 'انتشار', author: 'Nima Saraeian · AI Product Manager',
    visual: ['معاینه', 'طرح درمان', 'درمان کامل'], visualAria: 'مسیر بیمار از معاینه تا درمان کامل و نقاط نشت درآمد در کلینیک دندانپزشکی',
    body: `<p class="lead-note"><strong>پاسخ کوتاه:</strong> سریع‌ترین راه افزایش درآمد کلینیک دندانپزشکی معمولاً جذب بیمار جدید نیست؛ بستن نشتی‌های درآمدی است که در مسیر بیمارانِ فعلی وجود دارد. هفت نشتی رایج عبارت‌اند از: بیمار بدون نوبت بعدی از کلینیک می‌رود، معاینه به درمان نمی‌رسد، طرح درمان باز می‌ماند، ارجاع ثبت می‌شود اما شروع نمی‌شود، لغو بدون جایگزین می‌ماند، ساعت پزشک خالی یا اشتباه پر می‌شود و بیماران قدیمی فراخوانده نمی‌شوند. هر کدام با یک شاخص ساده قابل اندازه‌گیری است.</p>
<h2>چرا جذب بیمار جدید اولین قدم نیست؟</h2>
<p>جذب بیمار جدید هزینه‌ی تبلیغات، زمان پذیرش و ظرفیت معاینه می‌خواهد. اما بیماری که همین حالا پرونده دارد، به کلینیک اعتماد کرده، معاینه شده و نیازش مشخص است. اگر چنین بیماری درمانش را شروع نکند یا نیمه‌کاره رها کند، کلینیک هزینه‌ی جذب را پرداخته اما درآمد را دریافت نکرده است.</p>
<p>به همین دلیل، اولین سؤال مدیر کلینیک باید این باشد: «از بیمارانی که همین حالا داریم، چند نفر درمانی نیمه‌کاره یا شروع‌نشده دارند؟» پاسخ این سؤال معمولاً از هر کمپین تبلیغاتی سودآورتر است.</p>
<h2>۷ نشتی پنهان درآمد در کلینیک دندانپزشکی</h2>
<h3>۱. بیمار بدون نوبت بعدی از کلینیک خارج می‌شود</h3>
<p>بزرگ‌ترین نشتی معمولاً همان روز ویزیت اتفاق می‌افتد. بیمار جلسه را تمام می‌کند، از پذیرش رد می‌شود و نوبت جلسه‌ی بعدش ثبت نمی‌شود. هر تماسی که بعداً برای برگرداندن او گرفته شود، سخت‌تر و پرهزینه‌تر از ثبت نوبت در همان لحظه است. <strong>شاخص:</strong> درصد ویزیت‌های درمانی که بدون نوبت بعدی تمام شده‌اند، به تفکیک هر نفر پذیرش.</p>
<h3>۲. معاینه‌ای که به درمان نمی‌رسد</h3>
<p>نرخ تبدیل معاینه به درمان یکی از مهم‌ترین و کمتر دیده‌شده‌ترین شاخص‌های کلینیک است. در داده‌ی یک کلینیک پایلوتِ چندپزشکی، حدود دوسوم معاینه‌ها ظرف ۹۰ روز به درمان در همان کلینیک رسیده‌اند؛ اما این عدد بین پزشکان معاینه‌کننده تفاوت زیادی داشت، از حدود ۴۰٪ تا بیش از ۸۰٪. یعنی اینکه بیمار جدید به کدام پزشک برای معاینه سپرده شود، مستقیماً روی درآمد چند ماه بعد اثر دارد. <strong>شاخص:</strong> نرخ تبدیل ۹۰ روزه‌ی معاینه به درمان، به تفکیک پزشک.</p>
<div class="signal-box"><small>نکته‌ی مدیریتی</small><h3>نوبت معاینه یک تصمیم درآمدی است.</h3><p>وقتی چند پزشک در یک ساعت شیفت دارند، سپردن معاینه به پزشکی با نرخ تبدیل بالاتر، بدون هیچ هزینه‌ی تبلیغاتی، درمان بیشتری به کلینیک برمی‌گرداند.</p></div>
<h3>۳. طرح درمان باز می‌ماند</h3>
<p>بیمار طرح درمان را گرفته، شاید جلسه‌ی اول را هم آمده، اما مراحل بعدی ثبت نشده است. دلیلش ممکن است سؤال مالی بی‌پاسخ، ترس از درمان یا صرفاً فراموشی باشد. این بیماران ارزشمندترین گروه برای پیگیری‌اند، چون تصمیم درمان را قبلاً گرفته‌اند. برای ریشه‌یابی، مقاله‌ی <a href="/fa/insights/patient-treatment-plan-follow-up/">چرا بیماران پس از طرح درمان بازنمی‌گردند</a> را ببینید. <strong>شاخص:</strong> تعداد و ارزش طرح‌های درمانی که بیش از زمان معمول مرحله‌ی بعد، بدون نوبت مانده‌اند.</p>
<h3>۴. ارجاع ثبت می‌شود، اما درمان شروع نمی‌شود</h3>
<p>پزشک معاینه‌کننده تشخیص می‌دهد که دندانی به درمان ریشه یا جراحی نیاز دارد و ارجاع به متخصص داخل کلینیک را ثبت می‌کند. اگر همان روز نوبت متخصص گرفته نشود، این ارجاع به‌راحتی در پرونده می‌ماند و هیچ‌کس سراغش نمی‌رود. تشخیص درست انجام شده، اما درمان و درآمدش اتفاق نیفتاده است. <strong>شاخص:</strong> ارجاع‌هایی که پس از ۳۰ روز هنوز نوبت یا درمان مرتبط ندارند.</p>
<h3>۵. لغو و عدم حضور بدون جایگزین</h3>
<p>لغو نوبت به‌خودی‌خود مشکل نیست؛ مشکل لغوی است که جایگزین ندارد. هم ساعت پزشک خالی می‌ماند و هم درمان بیمار عقب می‌افتد. <strong>شاخص:</strong> درصد لغوها و عدم حضورهایی که ظرف یک هفته نوبت جایگزین گرفته‌اند.</p>
<h3>۶. ساعت پزشک خالی می‌ماند یا اشتباه پر می‌شود</h3>
<p>ظرفیت پزشک، کالای اصلی کلینیک است. اگر نوبت‌دهی مدت واقعی هر خدمت را نداند، یا ساعت‌های خالی بین نوبت‌ها کوتاه‌تر از هر خدمتی باشد، بخشی از روز عملاً از دست می‌رود. از طرف دیگر، پر کردن ساعت درمانی پزشکِ پردرآمد با کارهای کم‌ارزش هم درآمد را پایین می‌آورد. <a href="/fa/insights/ai-dental-scheduling/">نوبت‌دهی هوشمند دندانپزشکی</a> دقیقاً برای همین مسئله است. <strong>شاخص:</strong> ساعت‌های در دسترس که رزرو نشده‌اند، به تفکیک پزشک و روز هفته.</p>
<h3>۷. بیماران قدیمی فراخوانده نمی‌شوند</h3>
<p>بیمارانی که یک یا دو سال پیش درمان کامل کرده‌اند، برای چکاپ، جرم‌گیری یا درمان جدید دوباره به کلینیک نیاز دارند. بدون فراخوان منظم، بخشی از آن‌ها به کلینیک دیگری می‌روند. <strong>شاخص:</strong> بیماران بدون مراجعه در ۱۲ ماه اخیر که پرونده‌ی فعال و سابقه‌ی درمان دارند.</p>
<p class="quote">درآمدی که کلینیک از دست می‌دهد معمولاً جای دوری نیست؛ در پرونده‌ی بیمارانی است که همین حالا دارد.</p>
<h2>جدول شاخص‌ها: نشتی درآمد را چطور اندازه بگیریم؟</h2>
<table class="decision-table"><thead><tr><th>نشتی</th><th>شاخص</th><th>چه کسی مسئول است؟</th></tr></thead><tbody>
<tr><td>نوبت سر ویزیت</td><td>٪ ویزیت درمانی بدون نوبت بعدی</td><td>پذیرش</td></tr>
<tr><td>تبدیل معاینه</td><td>٪ معاینه‌هایی که ظرف ۹۰ روز به درمان رسیده‌اند</td><td>مدیر کلینیک و پزشکان</td></tr>
<tr><td>طرح درمان باز</td><td>تعداد و ارزش طرح‌های بدون نوبت مرحله‌ی بعد</td><td>هماهنگ‌کننده‌ی درمان</td></tr>
<tr><td>ارجاع شروع‌نشده</td><td>ارجاع‌های بدون نوبت پس از ۳۰ روز</td><td>پذیرش و پزشک ارجاع‌دهنده</td></tr>
<tr><td>لغو بدون جایگزین</td><td>٪ لغوهای بدون نوبت جایگزین در ۷ روز</td><td>پذیرش</td></tr>
<tr><td>ظرفیت خالی</td><td>ساعت‌های در دسترس رزرونشده</td><td>مدیر کلینیک</td></tr>
<tr><td>فراخوان</td><td>بیماران بدون مراجعه در ۱۲ ماه</td><td>تیم پیگیری</td></tr>
</tbody></table>
<h2>برنامه‌ی ۳۰ روزه برای افزایش درآمد کلینیک</h2>
<ol class="action-steps">
<li><div><strong>هفته‌ی اول: اندازه بگیرید.</strong> همین هفت شاخص را از نرم‌افزار فعلی کلینیک استخراج کنید. لازم نیست کامل باشد؛ عدد اولیه کافی است تا بزرگ‌ترین نشتی معلوم شود.</div></li>
<li><div><strong>هفته‌ی دوم: نوبت سر ویزیت را قانون کنید.</strong> هیچ بیمار درمانی بدون نوبت بعدی یا دلیل ثبت‌شده از پذیرش رد نشود و این عدد هر روز برای هر نفر پذیرش دیده شود.</div></li>
<li><div><strong>هفته‌ی سوم: صف پیگیری اولویت‌دار بسازید.</strong> ارجاع‌های شروع‌نشده و طرح‌های درمان باز را بر اساس ارزش و تأخیر مرتب کنید و روزانه چند تماس هدفمند بگیرید.</div></li>
<li><div><strong>هفته‌ی چهارم: نتیجه را بسنجید.</strong> چند بیمار از صف، نوبت گرفتند و درمانشان را ادامه دادند؟ این عدد، نه تعداد تماس‌ها، معیار موفقیت است.</div></li>
</ol>
<h2>هوش مصنوعی کجا کمک می‌کند؟</h2>
<p>همه‌ی این شاخص‌ها را می‌شود دستی هم ساخت، اما نگه‌داشتن آن‌ها هر روز برای کلینیکی با هزاران پرونده سخت است. یک لایه‌ی هوشمند روی نرم‌افزار فعلی کلینیک می‌تواند این شاخص‌ها را خودکار و روزانه بسازد، بیماران را با دلیل قابل مشاهده اولویت‌بندی کند و معاینه را به پزشکی بسپارد که هم در آن ساعت شیفت دارد و هم نرخ تبدیل بهتری دارد.</p>
<h2>جایگاه iQlinic</h2>
<p>iQlinic یک <a href="/fa/">هوش مصنوعی کلینیک دندانپزشکی</a> است که فقط‌خواندنی روی نرم‌افزار فعلی کلینیک می‌نشیند. نشت نوبت سر ویزیت را برای هر پذیرش نشان می‌دهد، صف بازگشت بیمار را با دلیل و اقدام پیشنهادی می‌سازد، در نوبت معاینه پزشکان پرتبدیل را در اولویت می‌گذارد و نتیجه‌ی هر پیگیری را ثبت می‌کند. جزئیات را در صفحه‌ی <a href="/fa/dental-clinic-ai-software/">نرم افزار هوش مصنوعی کلینیک دندانپزشکی</a> ببینید، تفاوتش با CRM را در <a href="/fa/insights/dental-clinic-crm/">CRM کلینیک دندانپزشکی</a> بخوانید یا مستقیم <a href="/fa/demo/">دموی تعاملی</a> را امتحان کنید.</p>`,
    faq: [
      ['سریع‌ترین راه افزایش درآمد کلینیک دندانپزشکی چیست؟', 'معمولاً بستن نشتی‌های درآمد در بیماران فعلی: ثبت نوبت بعدی سر ویزیت، پیگیری طرح‌های درمان باز و ارجاع‌های شروع‌نشده، و سپردن معاینه به پزشکانی با نرخ تبدیل بالاتر.'],
      ['نرخ تبدیل معاینه به درمان چیست؟', 'درصد بیمارانی که پس از معاینه، ظرف بازه‌ی مشخصی (مثلاً ۹۰ روز) درمان را در همان کلینیک شروع کرده‌اند. این نرخ بین پزشکان معاینه‌کننده می‌تواند تفاوت زیادی داشته باشد.'],
      ['آیا برای افزایش درآمد باید نرم‌افزار مطب را عوض کنیم؟', 'خیر. شاخص‌های نشت درآمد از همان داده‌ی نرم‌افزار فعلی کلینیک قابل ساختن است؛ یک لایه‌ی فقط‌خواندنی کافی است.'],
      ['موفقیت برنامه‌ی پیگیری را چطور بسنجیم؟', 'با تعداد بیمارانی که پس از اقدام نوبت گرفتند و درمانشان ادامه پیدا کرد، نه با تعداد تماس یا پیامک.'],
    ],
    faqTitle: 'پرسش‌های متداول', note: '<strong>یادداشت تحریریه:</strong> اعداد کلینیک پایلوت برای نشان دادن مقیاس مسئله آمده‌اند و برای هر کلینیک متفاوت‌اند؛ این راهنما نتیجه‌ی مالی را تضمین نمی‌کند.',
    cta: ['ببینیم کدام نشتی در کلینیک شما بزرگ‌تر است.', 'با یک بررسی فقط‌خواندنی روی نرم‌افزار فعلی، هفت شاخص را برای کلینیک شما می‌سازیم.', 'درخواست بررسی نشتی درآمد ↗'],
    hubTitle: 'افزایش درآمد کلینیک دندانپزشکی بدون بیمار جدید', hubDesc: '۷ نشتی پنهان درآمد، جدول شاخص‌ها و برنامه‌ی ۳۰ روزه.',
  },
  en: {
    title: 'How to Increase Dental Clinic Revenue: 7 Hidden Leaks | iQlinic',
    h1: 'How to Increase Dental Clinic Revenue Without New Patients: 7 Hidden Revenue Leaks',
    desc: 'Growing dental clinic revenue rarely starts with marketing. Find 7 hidden revenue leaks, from chairside rebooking to open treatment plans, with metrics and a 30-day plan.',
    crumb: 'Increase clinic revenue', home: 'Home', insights: 'Insights', kicker: 'Clinic revenue & operations',
    deck: 'Most dental clinics reach for marketing when they want more revenue. Yet much of the revenue they lose is already inside their own records: patients who were examined, given a treatment plan or referred, whose treatment never started or never finished.',
    read: '10 min read', published: 'Published', author: 'Nima Saraeian · AI Product Manager',
    visual: ['EXAM', 'TREATMENT PLAN', 'COMPLETED CARE'], visualAria: 'A dental patient journey from exam to completed care, with the points where revenue leaks',
    body: `<p class="lead-note"><strong>Short answer:</strong> the fastest way to increase dental clinic revenue is usually not new patients. It is closing the revenue leaks in the journeys of the patients you already have. Seven common leaks: patients leave without a next appointment, exams don’t convert to treatment, treatment plans stay open, referrals are recorded but never started, cancellations aren’t rebooked, dentist time sits idle or is filled poorly, and lapsed patients are never recalled. Each one can be measured with a simple metric.</p>
<h2>Why new patients are not the first step</h2>
<p>New patients cost advertising, front-desk time and exam capacity. A patient who already has a file has trusted the clinic, been examined and has a known need. If that patient never starts treatment, or abandons it halfway, the clinic has paid the acquisition cost without earning the revenue.</p>
<p>So the first question for a clinic manager should be: “Of the patients we already have, how many have unfinished or unstarted treatment?” The answer is usually worth more than any campaign.</p>
<h2>7 hidden revenue leaks in a dental clinic</h2>
<h3>1. Patients leave without a next appointment</h3>
<p>The biggest leak usually happens on the day of the visit. The patient finishes, walks past reception, and the next session is never booked. Every later call to bring them back is harder and more expensive than booking at the chair. <strong>Metric:</strong> share of treatment visits that end without a next appointment, per receptionist.</p>
<h3>2. Exams that never convert to treatment</h3>
<p>Exam-to-treatment conversion is one of the most important and least watched clinic metrics. In data from a multi-dentist pilot clinic, roughly two in three exams led to treatment in the same clinic within 90 days, but the rate varied widely between examining dentists, from around 40% to over 80%. Which dentist a new patient is booked with for the exam directly shapes revenue a few months later. <strong>Metric:</strong> 90-day exam-to-treatment conversion, per dentist.</p>
<div class="signal-box"><small>MANAGEMENT NOTE</small><h3>An exam booking is a revenue decision.</h3><p>When several dentists are on shift at the same hour, routing the exam to the one with higher conversion brings more treatment back to the clinic at zero marketing cost.</p></div>
<h3>3. Treatment plans stay open</h3>
<p>The patient accepted a plan, maybe even came for the first session, but the next stages were never booked. The cause may be an unanswered payment question, fear of treatment or simple forgetting. These patients are the most valuable follow-up group because the treatment decision is already made. For root causes, see <a href="/en/insights/why-dental-patients-do-not-return-after-treatment-plan/">why dental patients don’t return after a treatment plan</a>. <strong>Metric:</strong> number and value of plans with no booking past the normal interval for the next stage.</p>
<h3>4. Referrals are recorded but never started</h3>
<p>The examining dentist finds that a tooth needs a root canal or surgery and records a referral to an in-house specialist. If the specialist appointment isn’t booked that day, the referral easily sits in the file with no one chasing it. The diagnosis was right, but the treatment and its revenue never happened. <strong>Metric:</strong> referrals with no related appointment or treatment after 30 days.</p>
<h3>5. Cancellations and no-shows without rebooking</h3>
<p>A cancellation is not the problem; a cancellation with no replacement is. The dentist’s hour stays empty and the patient’s treatment slips. <strong>Metric:</strong> share of cancellations and no-shows rebooked within a week.</p>
<h3>6. Dentist time sits idle or is filled poorly</h3>
<p>Dentist capacity is the clinic’s core inventory. If scheduling doesn’t know the real duration of each service, or gaps between appointments are shorter than any procedure, part of the day is simply lost. Filling a high-earning dentist’s treatment hours with low-value work lowers revenue too. That is exactly what <a href="/en/dental-clinic-ai-software/">dental clinic AI software</a> for scheduling should solve. <strong>Metric:</strong> available hours left unbooked, per dentist and weekday.</p>
<h3>7. Lapsed patients are never recalled</h3>
<p>Patients who completed treatment a year or two ago will need a check-up, a cleaning or new treatment. Without regular recall, some of them go elsewhere. <strong>Metric:</strong> patients with treatment history and no visit in the last 12 months.</p>
<p class="quote">The revenue a clinic loses is rarely far away. It sits in the files of patients it already has.</p>
<h2>Metrics table: how to measure revenue leaks</h2>
<table class="decision-table"><thead><tr><th>Leak</th><th>Metric</th><th>Owner</th></tr></thead><tbody>
<tr><td>Chairside rebooking</td><td>% treatment visits without a next appointment</td><td>Reception</td></tr>
<tr><td>Exam conversion</td><td>% exams reaching treatment within 90 days</td><td>Clinic manager and dentists</td></tr>
<tr><td>Open treatment plans</td><td>Number and value of plans with no next-stage booking</td><td>Treatment coordinator</td></tr>
<tr><td>Unstarted referrals</td><td>Referrals with no booking after 30 days</td><td>Reception and referring dentist</td></tr>
<tr><td>Unrebooked cancellations</td><td>% cancellations with no rebooking in 7 days</td><td>Reception</td></tr>
<tr><td>Idle capacity</td><td>Available hours left unbooked</td><td>Clinic manager</td></tr>
<tr><td>Recall</td><td>Patients with no visit in 12 months</td><td>Follow-up team</td></tr>
</tbody></table>
<h2>A 30-day plan to grow dental clinic revenue</h2>
<ol class="action-steps">
<li><div><strong>Week 1: measure.</strong> Pull these seven metrics from your current clinic software. They don’t need to be perfect; a first number is enough to show the biggest leak.</div></li>
<li><div><strong>Week 2: make chairside rebooking a rule.</strong> No treatment patient leaves reception without a next appointment or a recorded reason, and the rate is visible daily for each receptionist.</div></li>
<li><div><strong>Week 3: build a prioritized follow-up queue.</strong> Rank unstarted referrals and open plans by value and delay, and make a few targeted calls every day.</div></li>
<li><div><strong>Week 4: measure the outcome.</strong> How many patients from the queue booked and continued treatment? That number, not the number of calls, is the measure of success.</div></li>
</ol>
<h2>Where AI helps</h2>
<p>All of these metrics can be built by hand, but keeping them current every day is hard for a clinic with thousands of records. An intelligence layer on top of existing clinic software can build them automatically each day, prioritize patients with visible reasons, and route exams to the dentist who is on shift at that time and converts better.</p>
<h2>Where iQlinic fits</h2>
<p>iQlinic is <a href="/en/">dental clinic AI</a> that sits read-only on top of your current software. It shows chairside rebooking per receptionist, builds a patient-recovery queue with reasons and suggested actions, prioritizes higher-converting dentists for exam bookings, and records the outcome of every follow-up. See the details on the <a href="/en/dental-clinic-ai-software/">dental clinic AI software</a> page, read how it differs from a CRM in <a href="/en/insights/dental-clinic-crm/">dental clinic CRM vs follow-up software</a>, or try the <a href="/en/demo/">interactive demo</a>.</p>`,
    faq: [
      ['What is the fastest way to increase dental clinic revenue?', 'Usually closing revenue leaks among existing patients: booking the next appointment at the chair, following up open treatment plans and unstarted referrals, and routing exams to dentists with higher conversion.'],
      ['What is exam-to-treatment conversion?', 'The share of examined patients who start treatment in the same clinic within a set window, for example 90 days. It can vary widely between examining dentists.'],
      ['Do we need new practice software to grow revenue?', 'No. Revenue-leak metrics can be built from the data in your current clinic software; a read-only layer is enough.'],
      ['How do we measure a follow-up program?', 'By the number of patients who booked and continued treatment after an action, not by calls or messages sent.'],
    ],
    faqTitle: 'Frequently asked questions', note: '<strong>Editorial note:</strong> pilot-clinic figures illustrate the scale of the problem and will differ for every clinic; this guide does not guarantee financial outcomes.',
    cta: ['Let’s find your clinic’s biggest revenue leak.', 'With a read-only review of your current software, we build all seven metrics for your clinic.', 'Request a revenue-leak review ↗'],
    hubTitle: 'How to increase dental clinic revenue without new patients', hubDesc: '7 hidden revenue leaks, a metrics table and a 30-day plan.',
  },
  tr: {
    title: 'Diş Kliniği Gelirini Artırma: 7 Gizli Gelir Kaçağı | iQlinic',
    h1: 'Yeni Hasta Olmadan Diş Kliniği Gelirini Artırma: 7 Gizli Gelir Kaçağı',
    desc: 'Diş kliniği gelirini artırmak çoğu zaman reklamla başlamaz. Koltuk başı randevudan açık tedavi planlarına 7 gizli gelir kaçağı, ölçütleri ve 30 günlük plan.',
    crumb: 'Klinik gelirini artırma', home: 'Ana sayfa', insights: 'İçgörüler', kicker: 'Klinik geliri ve operasyon',
    deck: 'Çoğu diş kliniği daha fazla gelir için reklama yönelir. Oysa kaybedilen gelirin büyük kısmı zaten kendi kayıtlarındadır: muayene edilmiş, tedavi planı almış ya da sevk edilmiş, ama tedavisi hiç başlamamış veya bitmemiş hastalar.',
    read: '10 dk okuma', published: 'Yayınlandı', author: 'Nima Saraeian · AI Product Manager',
    visual: ['MUAYENE', 'TEDAVİ PLANI', 'TAMAMLANAN TEDAVİ'], visualAria: 'Diş kliniğinde muayeneden tamamlanan tedaviye hasta yolculuğu ve gelirin kaçtığı noktalar',
    body: `<p class="lead-note"><strong>Kısa cevap:</strong> diş kliniği gelirini artırmanın en hızlı yolu genellikle yeni hasta değil, mevcut hastaların yolculuğundaki gelir kaçaklarını kapatmaktır. Yaygın yedi kaçak: hasta sonraki randevusu olmadan ayrılır, muayene tedaviye dönüşmez, tedavi planı açık kalır, sevk kaydedilir ama başlamaz, iptaller yeniden randevuya bağlanmaz, hekim saati boş kalır ya da yanlış dolar ve eski hastalar geri çağrılmaz. Her biri basit bir ölçütle ölçülebilir.</p>
<h2>Neden ilk adım yeni hasta değil?</h2>
<p>Yeni hasta reklam bütçesi, resepsiyon zamanı ve muayene kapasitesi ister. Dosyası olan hasta ise kliniğe güvenmiş, muayene olmuş ve ihtiyacı bellidir. Bu hasta tedaviye hiç başlamazsa ya da yarıda bırakırsa klinik edinme maliyetini ödemiş ama geliri elde edememiştir.</p>
<p>Bu yüzden klinik yöneticisinin ilk sorusu şu olmalı: “Mevcut hastalarımızdan kaçının yarım kalmış ya da başlamamış tedavisi var?” Bu sorunun cevabı çoğu zaman herhangi bir kampanyadan daha kârlıdır.</p>
<h2>Diş kliniğinde 7 gizli gelir kaçağı</h2>
<h3>1. Hasta sonraki randevusu olmadan ayrılıyor</h3>
<p>En büyük kaçak genellikle ziyaret günü yaşanır. Hasta seansı bitirir, resepsiyondan geçer ve bir sonraki seans hiç planlanmaz. Onu geri getirmek için sonradan yapılan her arama, koltuk başında randevu vermekten daha zor ve pahalıdır. <strong>Ölçüt:</strong> sonraki randevu olmadan biten tedavi ziyaretlerinin oranı, resepsiyonist bazında.</p>
<h3>2. Tedaviye dönüşmeyen muayeneler</h3>
<p>Muayeneden tedaviye dönüşüm oranı, kliniğin en önemli ve en az izlenen ölçütlerinden biridir. Çok hekimli bir pilot kliniğin verisinde muayenelerin yaklaşık üçte ikisi 90 gün içinde aynı klinikte tedaviye dönüştü; ancak oran muayene eden hekimler arasında büyük farklılık gösterdi: yaklaşık %40’tan %80’in üzerine. Yeni hastanın muayene için hangi hekime verildiği, birkaç ay sonraki geliri doğrudan belirler. <strong>Ölçüt:</strong> hekim bazında 90 günlük muayeneden tedaviye dönüşüm.</p>
<div class="signal-box"><small>YÖNETİM NOTU</small><h3>Muayene randevusu bir gelir kararıdır.</h3><p>Aynı saatte birden fazla hekim nöbetteyken muayeneyi dönüşümü daha yüksek hekime yönlendirmek, sıfır reklam maliyetiyle kliniğe daha fazla tedavi getirir.</p></div>
<h3>3. Tedavi planları açık kalıyor</h3>
<p>Hasta planı kabul etmiş, belki ilk seansa da gelmiş, ama sonraki aşamalar planlanmamıştır. Nedeni yanıtsız bir ödeme sorusu, tedavi korkusu ya da sadece unutmak olabilir. Bu hastalar takip için en değerli gruptur, çünkü tedavi kararı zaten verilmiştir. Kök nedenler için <a href="/tr/insights/tedavi-plani-alan-hastalar-neden-geri-donmuyor/">tedavi planı alan hastalar neden geri dönmüyor</a> yazısına bakın. <strong>Ölçüt:</strong> sonraki aşama için normal süreyi geçmiş, randevusuz planların sayısı ve değeri.</p>
<h3>4. Sevk kaydediliyor ama tedavi başlamıyor</h3>
<p>Muayene eden hekim bir dişin kanal tedavisi ya da cerrahi gerektirdiğini görür ve klinik içi uzmana sevk kaydeder. Uzman randevusu o gün verilmezse sevk kolayca dosyada kalır ve kimse peşine düşmez. Teşhis doğrudur ama tedavi ve geliri hiç gerçekleşmemiştir. <strong>Ölçüt:</strong> 30 gün sonra hâlâ ilgili randevusu veya tedavisi olmayan sevkler.</p>
<h3>5. Yerine randevu alınmayan iptal ve gelmeyenler</h3>
<p>İptal tek başına sorun değildir; sorun yerine bir şey konmayan iptaldir. Hekimin saati boş kalır ve hastanın tedavisi gecikir. <strong>Ölçüt:</strong> bir hafta içinde yeniden randevu alınan iptal ve gelmeyenlerin oranı.</p>
<h3>6. Hekim saati boş kalıyor ya da yanlış doluyor</h3>
<p>Hekim kapasitesi kliniğin asıl envanteridir. Randevu sistemi her hizmetin gerçek süresini bilmiyorsa ya da randevular arasındaki boşluklar her işlemden kısaysa günün bir kısmı kaybolur. Yüksek gelir getiren hekimin tedavi saatlerini düşük değerli işlerle doldurmak da geliri düşürür. <a href="/tr/dis-klinikleri-icin-yapay-zeka/">Diş klinikleri için yapay zekâ yazılımı</a> tam da bu sorunu çözmelidir. <strong>Ölçüt:</strong> hekim ve gün bazında boş kalan uygun saatler.</p>
<h3>7. Eski hastalar geri çağrılmıyor</h3>
<p>Bir iki yıl önce tedavisini tamamlamış hastalar kontrol, diş taşı temizliği veya yeni tedavi için kliniğe yeniden ihtiyaç duyar. Düzenli geri çağırma olmadan bir kısmı başka kliniğe gider. <strong>Ölçüt:</strong> tedavi geçmişi olup son 12 ayda ziyareti olmayan hastalar.</p>
<p class="quote">Kliniğin kaybettiği gelir genellikle uzakta değildir; zaten sahip olduğu hastaların dosyasındadır.</p>
<h2>Ölçüt tablosu: gelir kaçakları nasıl ölçülür?</h2>
<table class="decision-table"><thead><tr><th>Kaçak</th><th>Ölçüt</th><th>Sorumlu</th></tr></thead><tbody>
<tr><td>Koltuk başı randevu</td><td>Sonraki randevusu olmayan tedavi ziyaretleri %</td><td>Resepsiyon</td></tr>
<tr><td>Muayene dönüşümü</td><td>90 günde tedaviye dönüşen muayeneler %</td><td>Klinik yöneticisi ve hekimler</td></tr>
<tr><td>Açık tedavi planları</td><td>Sonraki aşaması planlanmamış planların sayısı ve değeri</td><td>Tedavi koordinatörü</td></tr>
<tr><td>Başlamayan sevkler</td><td>30 gün sonra randevusuz sevkler</td><td>Resepsiyon ve sevk eden hekim</td></tr>
<tr><td>Yeniden planlanmayan iptaller</td><td>7 günde yeniden randevu alınmayan iptaller %</td><td>Resepsiyon</td></tr>
<tr><td>Boş kapasite</td><td>Boş kalan uygun saatler</td><td>Klinik yöneticisi</td></tr>
<tr><td>Geri çağırma</td><td>12 aydır gelmeyen hastalar</td><td>Takip ekibi</td></tr>
</tbody></table>
<h2>Diş kliniği gelirini artırmak için 30 günlük plan</h2>
<ol class="action-steps">
<li><div><strong>1. hafta: ölçün.</strong> Bu yedi ölçütü mevcut klinik yazılımınızdan çıkarın. Kusursuz olması gerekmez; ilk rakam en büyük kaçağı göstermeye yeter.</div></li>
<li><div><strong>2. hafta: koltuk başı randevuyu kural yapın.</strong> Hiçbir tedavi hastası sonraki randevusu ya da kayıtlı bir gerekçesi olmadan resepsiyondan çıkmasın ve oran her gün her resepsiyonist için görünsün.</div></li>
<li><div><strong>3. hafta: öncelikli takip kuyruğu kurun.</strong> Başlamayan sevkleri ve açık planları değer ve gecikmeye göre sıralayın, her gün birkaç hedefli arama yapın.</div></li>
<li><div><strong>4. hafta: sonucu ölçün.</strong> Kuyruktan kaç hasta randevu alıp tedaviye devam etti? Başarının ölçüsü arama sayısı değil, bu rakamdır.</div></li>
</ol>
<h2>Yapay zekâ nerede yardımcı olur?</h2>
<p>Bu ölçütlerin hepsi elle de çıkarılabilir, ama binlerce kaydı olan bir klinik için her gün güncel tutmak zordur. Mevcut klinik yazılımının üzerindeki bir zekâ katmanı bunları her gün otomatik üretebilir, hastaları görünür gerekçelerle önceliklendirebilir ve muayeneyi o saatte nöbette olan ve dönüşümü daha iyi hekime yönlendirebilir.</p>
<h2>iQlinic’in yeri</h2>
<p>iQlinic, mevcut yazılımınızın üzerinde salt okunur çalışan bir <a href="/tr/">diş kliniği yapay zekâsıdır</a>. Koltuk başı randevuyu resepsiyoniste göre gösterir, gerekçeli ve önerilen aksiyonlu bir hasta geri kazanım kuyruğu kurar, muayene randevularında dönüşümü yüksek hekimleri öne alır ve her takibin sonucunu kaydeder. Ayrıntılar için <a href="/tr/dis-klinikleri-icin-yapay-zeka/">diş klinikleri için yapay zekâ yazılımı</a> sayfasına, CRM’den farkı için <a href="/tr/insights/dis-klinigi-crm/">diş kliniği CRM</a> yazısına bakın ya da doğrudan <a href="/tr/demo/">etkileşimli demoyu</a> deneyin.</p>`,
    faq: [
      ['Diş kliniği gelirini artırmanın en hızlı yolu nedir?', 'Genellikle mevcut hastalardaki gelir kaçaklarını kapatmak: koltuk başında sonraki randevuyu vermek, açık tedavi planlarını ve başlamayan sevkleri takip etmek ve muayeneleri dönüşümü yüksek hekimlere yönlendirmek.'],
      ['Muayeneden tedaviye dönüşüm nedir?', 'Muayene edilen hastaların belirli bir süre içinde (örneğin 90 gün) aynı klinikte tedaviye başlama oranıdır. Muayene eden hekimler arasında büyük farklılık gösterebilir.'],
      ['Geliri artırmak için klinik yazılımını değiştirmek gerekir mi?', 'Hayır. Gelir kaçağı ölçütleri mevcut klinik yazılımınızdaki veriden üretilebilir; salt okunur bir katman yeterlidir.'],
      ['Takip programının başarısı nasıl ölçülür?', 'Aksiyondan sonra randevu alıp tedaviye devam eden hasta sayısıyla; arama veya mesaj sayısıyla değil.'],
    ],
    faqTitle: 'Sık sorulan sorular', note: '<strong>Editoryal not:</strong> pilot klinik rakamları sorunun ölçeğini göstermek içindir ve her klinikte farklıdır; bu rehber finansal sonucu garanti etmez.',
    cta: ['Kliniğinizin en büyük gelir kaçağını bulalım.', 'Mevcut yazılımınız üzerinde salt okunur bir inceleme ile yedi ölçütün hepsini kliniğiniz için çıkaralım.', 'Gelir kaçağı incelemesi iste ↗'],
    hubTitle: 'Yeni hasta olmadan diş kliniği gelirini artırma', hubDesc: '7 gizli gelir kaçağı, ölçüt tablosu ve 30 günlük plan.',
  },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const ctaHref = 'mailto:contact@iqlinic.ir?subject=iQlinic%20Revenue%20Leak%20Review';

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
  fa: { file: 'fa/insights/dental-clinic-crm', html: `<p>اگر هدف نهایی‌تان درآمد است، راهنمای <a href="/fa/insights/${SLUG.fa}/">افزایش درآمد کلینیک دندانپزشکی بدون بیمار جدید</a> نشان می‌دهد پیگیری کجای این تصویر قرار می‌گیرد.</p>` },
  en: { file: 'en/insights/dental-clinic-crm', html: `<p>If revenue is the end goal, our guide on <a href="/en/insights/${SLUG.en}/">how to increase dental clinic revenue without new patients</a> shows where follow-up fits.</p>` },
  tr: { file: 'tr/insights/dis-klinigi-crm', html: `<p>Asıl hedef gelirse, <a href="/tr/insights/${SLUG.tr}/">yeni hasta olmadan diş kliniği gelirini artırma</a> rehberimiz takibin bu resimde nereye oturduğunu gösterir.</p>` },
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
