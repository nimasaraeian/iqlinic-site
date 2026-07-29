const fs = require("node:fs");

const published = "2026-07-28";
const site = "https://www.iqlinic.ir";
const slugs = {
  en: "why-dental-patients-do-not-return-after-treatment-plan",
  tr: "tedavi-plani-alan-hastalar-neden-geri-donmuyor",
  fa: "patient-treatment-plan-follow-up",
};

const content = {
  tr: {
    langName: "Türkçe", dir: "ltr", home: "Ana sayfa", insights: "İçgörüler", nav: "İçgörüler",
    hubTitle: "Klinik verisinden<br><em>daha iyi kararlara.</em>",
    hubLead: "Diş kliniklerinde hasta sürekliliği, operasyonel zekâ ve ölçülebilir büyüme üzerine araştırma temelli saha notları.",
    title: "Diş Kliniklerinde Tedavi Planı Alan Hastalar Neden Geri Dönmüyor?",
    shortTitle: "Tedavi planı sonrası hasta kaybı",
    description: "Tedavi planı alan hastaların neden geri dönmediğini, hangi sinyallerin erken uyarı verdiğini ve kliniklerin nasıl ölçülebilir bir takip sistemi kurabileceğini öğrenin.",
    deck: "Tedavi planının hazırlanması, hastanın tedaviye devam edeceği anlamına gelmez. Kopuş çoğu zaman tek bir nedenden değil; belirsizlik, zamanlama ve dağınık takip süreçlerinin birleşiminden doğar.",
    category: "Hasta Sürekliliği", read: "11 dk okuma", publishedLabel: "Yayınlandı", author: "iQlinic Editoryal Ekibi",
    hubRead: "Makaleyi okuyun", artA: "TEDAVİ PLANI", artB: "GERİ DÖNÜŞ SİNYALİ",
    body: `
<p class="lead-note">Bir hasta tedavi planını aldıktan sonra randevu oluşturmadığında, bunu hemen “tedaviyi reddetti” diye yorumlamak kolaydır. Oysa sessizlik; kararsızlık, maliyet kaygısı, korku, lojistik bir engel veya yalnızca doğru zamanda yapılmamış bir takip anlamına gelebilir. Sağlıklı bir geri kazanım süreci, tahmin iddiasından önce bağlamı anlamaya çalışır.</p>

<h2>Plan sunmak ile tedaviye bağlılık aynı şey değildir</h2>
<p>Klinik açısından tedavi planı net bir çıktıdır: muayene yapılmış, klinik ihtiyaç belirlenmiş, seçenekler açıklanmış ve fiyat paylaşılmıştır. Hasta açısından ise bu an çoğu zaman yeni bir karar sürecinin başlangıcıdır. Hasta tedavinin gerekliliğini, maliyetini, süresini, ağrı ihtimalini ve günlük hayatına etkisini birlikte değerlendirir. Bu nedenle “plan hazırlandı” durumu, “karar verildi” olarak okunmamalıdır.</p>
<p>Hasta yolculuğunu yalnızca randevu kayıtlarıyla izlemek bu geçişi görünmez kılar. İlk muayeneye gelmiş, planı almış fakat sonraki adımı oluşmamış bir hasta; iptal eden veya randevusuna gelmeyen hastadan farklıdır. Her iki durumda da boş bir koltuk görülebilir, ancak ihtiyaç duyulan iletişim aynı değildir.</p>
<p>Buradaki temel ayrım <strong>gecikme</strong> ile <strong>kopuş</strong> arasındadır. Geciken hasta hâlâ değerlendirme yapıyor olabilir. Kopan hasta ise klinikle temasını fiilen sonlandırmıştır. Klinik verisi bu ayrımı kesin biçimde kanıtlamaz; fakat ekibe hangi hastanın bağlamını önce incelemesi gerektiğini gösterebilir.</p>

<h2>Hastaların geri dönmemesinin beş yaygın nedeni</h2>
<h3>1. Tedavi ve sonuç hakkında belirsizlik</h3>
<p>Hastaya çok sayıda klinik terim, alternatif ve fiyat aynı görüşmede sunulduğunda önemli ayrıntılar unutulabilir. “Kaç seans sürecek?”, “önce hangi işlem yapılacak?” veya “beklersem ne olur?” soruları açık kalırsa karar ertelenir. Bu noktada daha fazla tanıtım mesajı değil, hastanın karar vermesini kolaylaştıran sade bir özet gerekir.</p>
<h3>2. Maliyet değil, ödeme anının belirsizliği</h3>
<p>Fiyat önemli bir etkendir; ancak sorun her zaman toplam tutar değildir. Ödeme takvimi, aşamalı tedavinin maliyet dağılımı veya finansman seçeneklerinin anlaşılmaması da ertelemeye yol açabilir. Klinik yalnızca “teklifi kabul etmedi” sonucunu kaydederse, çözebileceği bir bilgi boşluğunu kaybedebilir.</p>
<h3>3. Dental kaygı ve kaçınma döngüsü</h3>
<p>Diş tedavisine yönelik korku, randevu davranışını etkileyebilir. Sedasyon için yönlendirilen hastaları inceleyen bir çalışmada korku düzeyi ilk tedavi ziyaretine katılımla ilişkili bulunmuş; sevk edilen 100 hastanın yalnızca 33’ü tedaviyi tamamlamıştır. Bu sonuç her kliniğe doğrudan genellenemez, fakat kaygının “ilgisizlik” gibi okunmaması gerektiğini gösterir.</p>
<h3>4. Günlük hayatla çakışan lojistik</h3>
<p>İş saatleri, çocuk bakımı, ulaşım, iyileşme süresi ve refakat ihtiyacı tedavi kararını etkiler. Hasta tedaviyi istese bile uygulanabilir bir randevu bulamadığında süreç durabilir. Hatırlatma mesajı, uygun zaman seçeneği sunmuyorsa sorunu çözmez.</p>
<h3>5. Takip sorumluluğunun belirsiz kalması</h3>
<p>Planı hekim açıklar, fiyatı danışman paylaşır, randevuyu resepsiyon yönetir ve mesajı başka bir ekip üyesi gönderir. Sahiplik net değilse hasta birden fazla genel mesaj alabilir veya hiç aranmayabilir. Bu, teknoloji eksikliğinden çok süreç tasarımı problemidir.</p>

<p class="quote">“Geri dönmeyen hasta” tek bir segment değildir. Aynı sessizlik, beş farklı ihtiyacı saklayabilir.</p>

<h2>Hangi veriler erken uyarı sinyali olabilir?</h2>
<p>Bir sinyal, hastanın neden dönmediğini kanıtlamaz. Sadece incelenmesi gereken bir durumu görünür kılar. Bu ayrım etik ve operasyonel açıdan önemlidir. Amaç hastaya bir etiket yapıştırmak değil, ekibin sınırlı takip zamanını daha anlamlı kullanmasını sağlamaktır.</p>
<ul>
<li>Muayene veya konsültasyon tamamlandığı hâlde sonraki randevunun bulunmaması</li>
<li>Onay bekleyen yüksek değerli ya da çok aşamalı tedavi planı</li>
<li>Fiyat paylaşımından sonra uzun iletişim sessizliği</li>
<li>Kısa sürede tekrarlanan iptal veya yeniden planlama</li>
<li>Başlamış tedavide beklenenden uzun aşama aralığı</li>
<li>Hastanın yanıtlanmamış ödeme, süre veya ağrı sorusu</li>
<li>Tercih edilen iletişim kanalında temas kurulmamış olması</li>
</ul>
<div class="signal-box"><small>SİNYAL ≠ NEDEN</small><h3>Bağlam olmadan skor yeterli değildir</h3><p>Örneğin 30 günlük sessizlik implant planında anlamlı olabilirken rutin kontrol için normal kabul edilebilir. Eşikler tedavi türüne, planlanan aşamaya ve kliniğin kendi tarihsel akışına göre değerlendirilmelidir.</p></div>

<h2>İyi bir takip sistemi nasıl tasarlanır?</h2>
<h3>Önce uygunluk, sonra öncelik</h3>
<p>Her hastaya aynı sıklıkta ulaşmak hem ekip yükünü artırır hem de rahatsız edici olabilir. İlk filtre, takip için gerçekten uygun hastaları belirlemelidir: iletişim izni olan, açık bir klinik sonraki adımı bulunan ve yakın zamanda zaten sonuçlanmış bir görüşmesi olmayan hastalar. İkinci aşamada tedavinin zaman hassasiyeti, temas geçmişi ve bekleme süresi gibi açıklanabilir ölçütlerle öncelik verilebilir.</p>
<h3>İnsan incelemesini süreçte tutun</h3>
<p>Otomasyon bir liste hazırlayabilir; nihai temas kararını klinik ekibi vermelidir. Hasta yakın zamanda komplikasyon yaşamış, farklı bir hekime yönlendirilmiş veya özel bir iletişim talebinde bulunmuş olabilir. Bu ayrıntılar puana indirgenmemelidir.</p>
<h3>Mesajı nedene göre şekillendirin</h3>
<p>“Randevunuzu almak ister misiniz?” gibi genel bir mesaj kolaydır ama düşük bağlam taşır. Daha iyi yaklaşım, önce açık kalan soruyu ele almaktır: tedavi aşamalarını özetlemek, uygun saat seçenekleri sunmak veya finansal danışmanla kısa bir görüşme önermek. İletişim baskı kurmamalı; hastanın karar alanını korumalıdır.</p>
<h3>Her temasın sonucunu kaydedin</h3>
<p>Arandı, yanıt vermedi, bilgi istedi, erteledi, başka klinikte devam ediyor veya iletişim istemiyor gibi sonuçlar yapılandırılmış biçimde tutulmalıdır. Aksi hâlde klinik aynı hastayı tekrar tekrar arar ve hangi yaklaşımın işe yaradığını öğrenemez.</p>

<h2>Ölçülmesi gereken metrikler</h2>
<p>Yalnızca “geri kazanılan gelir”e bakmak yanıltıcıdır. Yüksek tutarlı tek bir vaka oranları değiştirebilir. Ayrıca klinik hedefi sadece gelir değil, uygun tedavinin doğru zamanda devam etmesi olmalıdır. Dengeli bir ölçüm seti şunları içerir:</p>
<ul>
<li><strong>Ulaşılabilirlik oranı:</strong> Takip edilen hastaların kaçında gerçek bir görüşme oluştu?</li>
<li><strong>Yeniden randevu oranı:</strong> Görüşme sonrasında kaç hasta uygun bir sonraki adıma geçti?</li>
<li><strong>Tedavi devam oranı:</strong> Randevu alanların kaçı planlanan aşamayı tamamladı?</li>
<li><strong>Takibe kadar geçen süre:</strong> Plan sunumundan anlamlı ilk temasa kadar kaç gün geçti?</li>
<li><strong>İletişimden çıkma oranı:</strong> Süreç hastayı rahatsız ediyor mu?</li>
<li><strong>Neden dağılımı:</strong> Gecikmenin kaydedilen nedenleri zaman içinde nasıl değişiyor?</li>
</ul>
<p>Bu metrikler tedavi türü, lokasyon ve ekip bazında karşılaştırılabilir; ancak küçük örneklemlerde kesin sonuçlara varılmamalıdır. Önce başlangıç seviyesi ölçülmeli, ardından tek bir değişiklik kontrollü biçimde denenmelidir.</p>

<h2>Yapay zekâ burada ne yapabilir, ne yapamaz?</h2>
<p>Yapay zekâ; dağınık kayıtları bir araya getirme, benzer davranış örüntülerini bulma, takip listelerini önceliklendirme ve ekibe açıklanabilir bir özet hazırlama konusunda yararlı olabilir. Ancak bir hastanın gelecekte kesin olarak dönmeyeceğini veya sessizliğinin gerçek nedenini bilemez. Korelasyon, neden değildir; olasılık da hüküm değildir.</p>
<p>Bu nedenle güvenilir bir sistem, “hasta dönmeyecek” demek yerine “sonraki randevu yok, plan 21 gündür açık ve fiyat sorusu yanıtsız” gibi gözlenebilir gerekçeler göstermelidir. Klinik ekipleri skoru sorgulayabilmeli, yanlış sinyali işaretleyebilmeli ve iletişim kararını kendileri vermelidir.</p>
<div class="signal-box"><small>AÇIKLANABİLİR ÖNCELİK</small><h3>İyi çıktı bir sayı değil, karar bağlamıdır</h3><p>Kim, neden şimdi, hangi açık soruyla ve hangi kanaldan takip edilmeli? Sistem bu dört soruya şeffaf cevap veremiyorsa operasyonel güven üretmez.</p></div>

<h2>Kliniğiniz için 30 günlük başlangıç planı</h2>
<ol class="action-steps">
<li><div><strong>Hasta yolculuğunu tanımlayın.</strong><br>Muayeneden tedavi başlangıcına kadar beklenen adımları ve normal süre aralıklarını yazın.</div></li>
<li><div><strong>Tek bir kohort seçin.</strong><br>Örneğin son 60 günde implant planı almış ancak sonraki randevusu olmayan hastalarla başlayın.</div></li>
<li><div><strong>Veri kalitesini kontrol edin.</strong><br>Randevu, plan, iletişim izni ve temas sonucu alanlarının gerçekten güncel olup olmadığını örnekleyin.</div></li>
<li><div><strong>Takip sorumlusunu ve hizmet seviyesini belirleyin.</strong><br>Listeyi kimin inceleyeceği, ne zaman temas kurulacağı ve hangi durumlarda hekime aktarılacağı net olsun.</div></li>
<li><div><strong>İki iletişim yaklaşımını test edin.</strong><br>Genel hatırlatma yerine açık soruya odaklanan kısa, izinli ve kişiselleştirilmiş mesajlar deneyin.</div></li>
<li><div><strong>Sonucu ölçün ve sınırları düzeltin.</strong><br>Dört hafta sonunda yalnızca randevu sayısını değil, ulaşılabilirlik, devam ve iletişimden çıkma oranlarını birlikte değerlendirin.</div></li>
</ol>

<h2>Örnek bir vaka akışı: tek sinyalden açıklanabilir aksiyona</h2>
<p>Varsayımsal bir örnek düşünelim. Hasta implant konsültasyonuna geldi, görüntüleme tamamlandı ve iki aşamalı plan oluşturuldu. Sistem yalnızca “21 gündür randevu yok” bilgisine bakarsa hastayı riskli olarak işaretleyebilir. Fakat birleşik görünümde, hastanın iki gün sonra ödeme planını sorduğu ve bu mesajın yanıtlanmadığı görülür. Burada öncelik gerekçesi geçmiş bir model skorundan çok daha somuttur: klinik tarafında açık kalan bir soru vardır.</p>
<p>Doğru aksiyon genel bir kampanya mesajı göndermek değildir. Finansal danışmanın soruyu yanıtlaması, aşamaların ödeme zamanını açıklaması ve hastaya konuşmak için uygun bir zaman sunmasıdır. Hasta bir ay sonra devam etmek istediğini söylerse sonuç “kaybedildi” değil “hasta talebiyle ertelendi” olarak kaydedilir. Böylece gereksiz tekrar temas önlenir ve sonraki takip tarihi hastayla birlikte belirlenir.</p>
<p>Aynı 21 günlük boşluk başka bir hastada farklı okunabilir. Örneğin hasta tedavi korkusunu belirtmiş, hekimle kısa bir ek görüşme istemiş fakat görüşme planlanmamış olabilir. Buradaki aksiyon fiyat odaklı mesaj değil, kaygıyı konuşabileceği güvenli bir görüşmedir. Bu iki örnek, davranışsal verinin neden tek başına karar vermemesi gerektiğini gösterir: <strong>öncelik benzer, ihtiyaç farklıdır.</strong></p>

<h2>Başlamadan önce veri hazırlığı kontrolü</h2>
<p>Takip sisteminin başarısı çoğu zaman modelden önce veri tanımlarına bağlıdır. “Tedavi planı açık” alanı her hekim tarafından aynı biçimde mi kullanılıyor? İptal ile hasta talebiyle erteleme ayrılıyor mu? WhatsApp, telefon ve yüz yüze görüşme sonuçları aynı hasta kaydında görülebiliyor mu? Yanıt hayırsa ilk proje, tahmin modeli değil kayıt disiplinidir.</p>
<p>Kliniğin benzersiz hasta kimliği, olay zamanları ve tedavi aşamaları tutarlı olmalıdır. Çift kayıtlar bir hastayı iki kişi gibi gösterebilir; eksik zaman damgası ise gecikmeyi yanlış hesaplatabilir. İletişim izni ve kanal tercihi de operasyonel verinin parçasıdır, sonradan eklenen bir hukuki kutucuk değildir.</p>
<p>İlk kalite kontrolü için yüzlerce alan gerekmez. Seçilen hasta grubundan rastgele 30–50 kayıt açın ve şu dört soruyu sorun: Son klinik adım doğru mu? Beklenen sonraki adım belli mi? Son temas ve sonucu görünüyor mu? İletişim tercihi güncel mi? Bu örneklemede belirgin hata varsa otomasyonu genişletmeden önce kayıt akışını düzeltin.</p>

<h2>Sonuç: Amaç hastayı kovalamak değil, kopuşu anlamaktır</h2>
<p>Tedavi planı sonrası sessizlik, kliniklerin en değerli fakat en az yapılandırılmış anlarından biridir. Bu anı yalnızca toplu arama listesine dönüştürmek kısa vadeli sonuç üretebilir; fakat öğrenen bir operasyon oluşturmaz. Daha iyi yaklaşım, hasta yolculuğundaki boşluğu tanımlamak, açık sinyalleri bağlamla değerlendirmek ve her temasın sonucundan öğrenmektir.</p>
<p>Klinikler bu sistemi küçük bir hasta grubunda, açık ölçütlerle ve insan denetimiyle başlattığında hem hasta deneyimini koruyabilir hem de tedavi sürekliliğini daha görünür hâle getirebilir.</p>`,
    refs: [
      ['Alkhurayji et al. “Factors Associated With Patient Failure To Attend Dental Appointments: A Retrospective Analysis.” (2024)', 'https://pubmed.ncbi.nlm.nih.gov/39286712/'],
      ['Coulthard et al. “What Happens After Referral For Sedation?” British Dental Journal / PMC.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3812067/'],
      ['Google Search Central: Article structured data.', 'https://developers.google.com/search/docs/appearance/structured-data/article'],
    ],
    ctaKicker: "KLİNİĞİNİZİN VERİSİNDE NE SAKLI?", ctaTitle: "Takip listesinden karar sistemine.", ctaBody: "iQlinic’in dağınık hasta hareketlerini nasıl açıklanabilir takip önceliklerine dönüştürdüğünü görün.", cta: "Özel demo talep edin"
  },
  en: {
    langName: "English", dir: "ltr", home: "Home", insights: "Insights", nav: "Insights",
    hubTitle: "From clinic data<br><em>to better decisions.</em>",
    hubLead: "Research-led field notes on patient continuity, operational intelligence and measurable growth in dental clinics.",
    title: "Why Dental Patients Don’t Return After Receiving a Treatment Plan",
    shortTitle: "Patient drop-off after treatment planning",
    description: "Learn why dental patients may not return after a treatment plan, which signals deserve review, and how clinics can build a measurable, human-led follow-up system.",
    deck: "Preparing a treatment plan does not mean the patient has committed to treatment. Drop-off usually comes from a combination of uncertainty, timing and fragmented follow-up—not one simple cause.",
    category: "Patient Continuity", read: "10 min read", publishedLabel: "Published", author: "iQlinic Editorial Team",
    hubRead: "Read the article", artA: "TREATMENT PLAN", artB: "RETURN SIGNAL",
    body: `
<p class="lead-note">When a patient leaves with a treatment plan but no next appointment, it is tempting to record the outcome as “declined.” Silence may instead mean uncertainty, cost concerns, fear, a scheduling barrier or a question nobody answered. A responsible recovery process seeks context before it makes a prediction.</p>
<h2>A plan is not the same as commitment</h2>
<p>For the clinic, a treatment plan is a concrete output: the examination is complete, clinical needs have been identified, options discussed and fees presented. For the patient, this is often the beginning of a decision. They must weigh urgency, cost, time, discomfort and the effect on everyday life. “Plan created” should therefore never be treated as “decision made.”</p>
<p>A patient who attended a consultation but has no next step differs from one who cancelled twice or missed a confirmed appointment. The operational symptom may look similar, yet the appropriate conversation is different. The important distinction is between <strong>delay</strong> and <strong>drop-off</strong>. Clinic data cannot prove that distinction, but it can show the team whose context deserves review first.</p>
<h2>Five common reasons patients do not return</h2>
<h3>1. Uncertainty about treatment and outcome</h3><p>Patients can forget important details when clinical terminology, alternatives and pricing are presented in one visit. If questions such as “What happens first?”, “How many visits will this take?” or “What happens if I wait?” remain open, the decision is easy to postpone. The useful follow-up is a clear summary, not another promotional message.</p>
<h3>2. Uncertainty about when and how to pay</h3><p>Total price matters, but it is not the whole story. The timing of payments, distribution of cost across treatment stages and available options may be unclear. If a clinic records only “did not accept quote,” it loses an information gap it might have been able to solve.</p>
<h3>3. Dental anxiety and avoidance</h3><p>Fear can affect attendance behavior. In one study of patients referred for sedation, fear was associated with attendance at the initial treatment visit, and only 33 of 100 referred patients completed treatment. The finding cannot be generalized to every clinic, but it is a useful warning against interpreting anxiety as lack of interest.</p>
<h3>4. Real-life logistics</h3><p>Work, transport, childcare, recovery time and the need for a companion can all block treatment. A patient may want to proceed but still be unable to find a workable appointment. A reminder that offers no practical route forward does not remove that barrier.</p>
<h3>5. No clear owner for follow-up</h3><p>The dentist explains the plan, a coordinator presents the fee, reception manages the calendar and someone else sends messages. Without clear ownership, the patient may receive several generic contacts—or none. This is a process-design problem before it is a technology problem.</p>
<p class="quote">A “patient who did not return” is not one segment. The same silence can hide five different needs.</p>
<h2>What can count as an early signal?</h2><p>A signal does not prove why a patient did not return. It identifies a situation worth reviewing. That distinction matters: the goal is not to label a person, but to help a busy team use limited follow-up time more thoughtfully.</p>
<ul><li>A completed consultation with no next appointment</li><li>An open, multi-stage treatment plan awaiting a decision</li><li>A long period of silence after fees were presented</li><li>Repeated cancellation or rescheduling in a short period</li><li>An unusually long gap inside an active treatment sequence</li><li>An unanswered question about pain, duration or payment</li><li>No contact through the patient’s permitted, preferred channel</li></ul>
<div class="signal-box"><small>SIGNAL ≠ CAUSE</small><h3>A score without context is not enough</h3><p>Thirty days of silence might be meaningful for one treatment pathway and entirely normal for another. Thresholds should reflect treatment type, expected next stage and the clinic’s own validated history.</p></div>
<h2>Designing a useful follow-up system</h2>
<h3>Establish eligibility before priority</h3><p>Contacting everyone at the same frequency creates noise and can frustrate patients. First identify who is genuinely eligible: patients with appropriate communication permission, a meaningful open next step and no recently resolved conversation. Then prioritize using explainable factors such as time sensitivity, contact history and elapsed time.</p>
<h3>Keep a human in the decision</h3><p>Automation can prepare a worklist; the clinic team should make the contact decision. A patient may have experienced a complication, been referred elsewhere or made a specific request about communication. Those details should not be flattened into a score.</p>
<h3>Match the message to the open question</h3><p>“Would you like to book?” is easy but carries little context. A better conversation may summarize treatment stages, offer suitable appointment windows or arrange a brief financial consultation. Communication should reduce uncertainty without applying pressure.</p>
<h3>Capture the outcome of every contact</h3><p>No answer, needs information, postponed, continuing elsewhere and does not want contact are distinct outcomes. Structured outcomes prevent repeated unwanted calls and let the clinic learn which approaches actually help.</p>
<h2>Metrics that reveal more than revenue</h2><p>“Recovered revenue” alone is unstable: one high-value case can distort the result. A balanced view includes contact rate, rebooking rate, treatment continuation, time to meaningful follow-up, opt-out rate and the distribution of recorded delay reasons. Compare cautiously by treatment type or location, especially when samples are small.</p>
<h2>What AI can—and cannot—do here</h2><p>AI can unify scattered records, identify behavioral patterns, prioritize review and produce an explainable summary. It cannot know with certainty that a patient will not return or reveal the true reason for silence. Correlation is not causation, and probability is not a verdict.</p>
<p>A trustworthy system should say, “there is no next appointment, the plan has been open for 21 days and a payment question remains unanswered,” rather than “this patient will not return.” Teams must be able to challenge the score, mark false signals and retain control of contact decisions.</p>
<div class="signal-box"><small>EXPLAINABLE PRIORITY</small><h3>The useful output is decision context, not a number</h3><p>Who may need review, why now, which question is open and which channel is appropriate? If a system cannot answer those questions transparently, it will struggle to earn operational trust.</p></div>
<h2>A practical 30-day starting plan</h2><ol class="action-steps"><li><div><strong>Map the patient journey.</strong><br>Write down expected steps and normal time ranges from consultation to treatment start.</div></li><li><div><strong>Choose one cohort.</strong><br>Start with a clearly defined group, such as implant plans created in the last 60 days with no next appointment.</div></li><li><div><strong>Check data quality.</strong><br>Sample appointment, plan, consent and contact-outcome records before relying on them.</div></li><li><div><strong>Set ownership and service levels.</strong><br>Define who reviews the list, when contact happens and when a case returns to the dentist.</div></li><li><div><strong>Test two contact approaches.</strong><br>Use short, permitted messages focused on the open question rather than generic reminders.</div></li><li><div><strong>Measure and refine.</strong><br>Review contact, continuation and opt-out rates together after four weeks.</div></li></ol>
<h2>Conclusion: understand the gap, do not chase the patient</h2><p>The silence after treatment planning is one of the most valuable yet least structured moments in a clinic. Turning it into a bulk call list may generate short-term activity, but it does not create a learning operation. A better system identifies the gap, reviews observable signals in context and learns from every outcome.</p><p>Starting with a small cohort, explicit rules and human oversight helps clinics protect the patient experience while making continuity of care more visible.</p>`,
    refs: [
      ['Alkhurayji et al. “Factors Associated With Patient Failure To Attend Dental Appointments: A Retrospective Analysis.” (2024)', 'https://pubmed.ncbi.nlm.nih.gov/39286712/'],
      ['Coulthard et al. “What Happens After Referral For Sedation?” British Dental Journal / PMC.', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3812067/'],
      ['Google Search Central: Article structured data.', 'https://developers.google.com/search/docs/appearance/structured-data/article'],
    ],
    ctaKicker: "WHAT IS HIDING IN YOUR CLINIC DATA?", ctaTitle: "Move from a call list to a decision system.", ctaBody: "See how iQlinic turns fragmented patient activity into transparent follow-up priorities.", cta: "Request a private demo"
  },
  fa: {
    langName: "فارسی", dir: "rtl", home: "خانه", insights: "بینش‌ها", nav: "بینش‌ها",
    hubTitle: "از داده‌های کلینیک<br><em>تا تصمیم‌های بهتر.</em>",
    hubLead: "یادداشت‌های پژوهش‌محور درباره تداوم درمان بیمار، هوشمندی عملیاتی و رشد قابل‌اندازه‌گیری در کلینیک‌های دندانپزشکی.",
    title: "چرا بیماران پس از دریافت طرح درمان به کلینیک دندانپزشکی بازنمی‌گردند؟",
    shortTitle: "ریزش بیمار پس از ارائه طرح درمان",
    description: "دلایل بازنگشتن بیمار پس از دریافت طرح درمان، سیگنال‌های هشدار و روش ساخت یک سیستم پیگیری انسانی و قابل‌اندازه‌گیری برای کلینیک دندانپزشکی.",
    deck: "آماده‌شدن طرح درمان به معنای تصمیم قطعی بیمار نیست. ریزش معمولاً از ترکیب ابهام، زمان‌بندی نامناسب و پیگیری پراکنده شکل می‌گیرد؛ نه یک علت ساده.",
    category: "تداوم درمان بیمار", read: "۱۰ دقیقه مطالعه", publishedLabel: "تاریخ انتشار", author: "تیم تحریریه iQlinic",
    hubRead: "مطالعه مقاله", artA: "طرح درمان", artB: "سیگنال بازگشت",
    body: `
<p class="lead-note">وقتی بیمار با یک طرح درمان از کلینیک خارج می‌شود اما نوبت بعدی ندارد، ساده‌ترین برداشت این است که درمان را نپذیرفته. اما سکوت می‌تواند نشانه تردید، نگرانی مالی، ترس، مشکل زمان‌بندی یا یک سؤال بی‌پاسخ باشد. یک فرایند مسئولانه، پیش از پیش‌بینی درباره بیمار، زمینه را بررسی می‌کند.</p>
<h2>طرح درمان با تعهد به درمان یکسان نیست</h2><p>از نگاه کلینیک، طرح درمان یک خروجی مشخص است: معاینه انجام شده، نیاز بالینی تشخیص داده شده، گزینه‌ها توضیح داده شده و هزینه ارائه شده است. اما برای بیمار، این لحظه اغلب شروع تصمیم‌گیری است. او باید ضرورت، هزینه، زمان، ناراحتی احتمالی و اثر درمان بر زندگی روزمره را هم‌زمان بسنجد. بنابراین ثبت «طرح آماده شد» نباید به معنای «بیمار تصمیم گرفت» تلقی شود.</p>
<p>بیماری که برای مشاوره آمده اما قدم بعدی ندارد، با بیماری که دو بار نوبت قطعی را لغو کرده متفاوت است. نشانه عملیاتی شاید یکسان به نظر برسد، ولی گفت‌وگوی مناسب یکسان نیست. تفاوت اصلی بین <strong>تأخیر</strong> و <strong>ریزش</strong> است. داده‌های کلینیک این تفاوت را قطعی اثبات نمی‌کنند، اما می‌توانند نشان دهند بررسی زمینه کدام بیمار اولویت بیشتری دارد.</p>
<h2>پنج دلیل رایج برای بازنگشتن بیمار</h2>
<h3>۱. ابهام درباره درمان و نتیجه</h3><p>وقتی اصطلاحات تخصصی، گزینه‌ها و قیمت در یک جلسه ارائه می‌شوند، بخشی از اطلاعات فراموش می‌شود. اگر سؤال‌هایی مانند «اول کدام مرحله انجام می‌شود؟»، «چند جلسه طول می‌کشد؟» یا «اگر صبر کنم چه می‌شود؟» باز بمانند، تصمیم به تعویق می‌افتد. پیگیری مفید در این وضعیت یک خلاصه روشن است، نه پیام تبلیغاتی بیشتر.</p>
<h3>۲. ابهام درباره زمان و روش پرداخت</h3><p>مبلغ کل مهم است، اما تمام مسئله نیست. زمان پرداخت، توزیع هزینه بین مراحل و گزینه‌های موجود ممکن است برای بیمار روشن نباشد. اگر کلینیک فقط «پیشنهاد را نپذیرفت» ثبت کند، یک خلأ اطلاعاتی قابل‌حل را از دست می‌دهد.</p>
<h3>۳. اضطراب دندانپزشکی و اجتناب</h3><p>ترس می‌تواند رفتار مراجعه را تغییر دهد. در یک مطالعه روی بیماران ارجاع‌شده برای آرام‌بخشی، ترس با حضور در نخستین جلسه درمان مرتبط بود و تنها ۳۳ نفر از ۱۰۰ بیمار ارجاع‌شده درمان را کامل کردند. این نتیجه به همه کلینیک‌ها قابل تعمیم نیست، اما هشدار می‌دهد که اضطراب را نباید بی‌علاقگی دانست.</p>
<h3>۴. موانع واقعی زندگی روزمره</h3><p>ساعات کار، رفت‌وآمد، نگهداری از کودک، دوره نقاهت و نیاز به همراه می‌توانند درمان را متوقف کنند. ممکن است بیمار واقعاً مایل به ادامه باشد، اما زمان عملی پیدا نکند. یادآوری‌ای که راه‌حل زمانی ارائه نمی‌دهد، مانع را برطرف نمی‌کند.</p>
<h3>۵. نامشخص‌بودن مسئول پیگیری</h3><p>دندانپزشک طرح را توضیح می‌دهد، مشاور مالی هزینه را ارائه می‌کند، پذیرش تقویم را مدیریت می‌کند و فرد دیگری پیام می‌فرستد. بدون مالک مشخص، بیمار چند پیام عمومی دریافت می‌کند یا اصلاً پیگیری نمی‌شود. این موضوع پیش از آنکه مسئله فناوری باشد، مسئله طراحی فرایند است.</p>
<p class="quote">«بیماری که بازنگشته» یک گروه واحد نیست؛ یک سکوت مشابه می‌تواند پنج نیاز متفاوت را پنهان کند.</p>
<h2>چه داده‌هایی می‌توانند سیگنال هشدار باشند؟</h2><p>سیگنال دلیل بازنگشتن را ثابت نمی‌کند؛ فقط وضعیتی را نشان می‌دهد که ارزش بررسی دارد. هدف برچسب‌زدن به بیمار نیست، بلکه استفاده دقیق‌تر از زمان محدود تیم پیگیری است.</p>
<ul><li>مشاوره کامل شده، اما نوبت بعدی ثبت نشده است</li><li>طرح درمان چندمرحله‌ای همچنان در انتظار تصمیم است</li><li>پس از اعلام هزینه، دوره طولانی سکوت دیده می‌شود</li><li>لغو یا جابه‌جایی نوبت در فاصله کوتاه تکرار شده است</li><li>بین مراحل درمان فعال، فاصله‌ای غیرمعمول ایجاد شده است</li><li>پرسش بیمار درباره درد، زمان یا پرداخت بی‌پاسخ مانده است</li><li>از کانال مجاز و ترجیحی بیمار تماسی برقرار نشده است</li></ul>
<div class="signal-box"><small>سیگنال ≠ علت</small><h3>امتیاز بدون زمینه کافی نیست</h3><p>سی روز سکوت ممکن است برای یک مسیر درمان مهم و برای مسیر دیگری کاملاً طبیعی باشد. آستانه‌ها باید بر اساس نوع درمان، مرحله بعدی مورد انتظار و تاریخچه معتبر خود کلینیک تعیین شوند.</p></div>
<h2>سیستم پیگیری مفید چگونه طراحی می‌شود؟</h2>
<h3>ابتدا شرایط ورود، سپس اولویت</h3><p>تماس یکسان با همه بیماران هم بار تیم را بالا می‌برد و هم می‌تواند آزاردهنده باشد. ابتدا بیمارانی را مشخص کنید که اجازه ارتباط دارند، یک قدم بعدی واقعی برایشان باز است و گفت‌وگوی اخیرشان نتیجه‌گیری نشده است. سپس با معیارهای توضیح‌پذیر مانند حساسیت زمانی، سابقه تماس و زمان سپری‌شده اولویت بدهید.</p>
<h3>انسان را در تصمیم نگه دارید</h3><p>اتوماسیون می‌تواند فهرست کار بسازد؛ تصمیم تماس باید با تیم کلینیک باشد. ممکن است بیمار عارضه‌ای تجربه کرده، به پزشک دیگری ارجاع شده یا درباره ارتباط درخواست ویژه‌ای داشته باشد. این جزئیات نباید در یک امتیاز گم شوند.</p>
<h3>پیام را با سؤال باز بیمار هماهنگ کنید</h3><p>پیام «مایلید نوبت بگیرید؟» ساده، اما کم‌زمینه است. شاید بهتر باشد مراحل درمان خلاصه شود، چند بازه مناسب پیشنهاد شود یا یک گفت‌وگوی کوتاه مالی ترتیب داده شود. ارتباط باید ابهام را کم کند، بدون اینکه بیمار را تحت فشار بگذارد.</p>
<h3>نتیجه هر تماس را ثبت کنید</h3><p>پاسخ نداد، اطلاعات بیشتر خواست، به تعویق انداخت، در مرکز دیگری ادامه می‌دهد و تمایلی به تماس ندارد، نتایج متفاوتی هستند. ثبت ساختاریافته از تماس ناخواسته تکراری جلوگیری می‌کند و به کلینیک امکان یادگیری می‌دهد.</p>
<h2>شاخص‌هایی فراتر از درآمد</h2><p>«درآمد بازگردانده‌شده» به‌تنهایی شاخص پایداری نیست؛ یک پرونده گران‌قیمت می‌تواند نتیجه را منحرف کند. نرخ برقراری گفت‌وگو، رزرو مجدد، ادامه واقعی درمان، زمان تا پیگیری معنادار، نرخ انصراف از ارتباط و توزیع دلایل تأخیر باید کنار هم دیده شوند. مقایسه بین نوع درمان یا شعبه، مخصوصاً با نمونه کوچک، باید محتاطانه باشد.</p>
<h2>هوش مصنوعی چه کاری می‌تواند و چه کاری نمی‌تواند انجام دهد؟</h2><p><a href="/fa/insights/ai-dental-clinic/">هوش مصنوعی کلینیک دندانپزشکی</a> می‌تواند رکوردهای پراکنده را یکپارچه کند، الگوهای رفتاری را بیابد، بررسی‌ها را اولویت‌بندی کند و خلاصه‌ای توضیح‌پذیر بسازد. اما نمی‌تواند با قطعیت بداند بیمار بازنمی‌گردد یا علت واقعی سکوت را کشف کند. همبستگی علت نیست و احتمال حکم قطعی نیست.</p>
<p>سیستم قابل‌اعتماد باید به‌جای «این بیمار بازنمی‌گردد» بگوید: «نوبت بعدی وجود ندارد، طرح ۲۱ روز باز مانده و سؤال پرداخت بی‌پاسخ است.» تیم باید بتواند امتیاز را نقد کند، سیگنال اشتباه را علامت بزند و کنترل تصمیم تماس را حفظ کند.</p>
<div class="signal-box"><small>اولویت توضیح‌پذیر</small><h3>خروجی مفید عدد نیست؛ زمینه تصمیم است</h3><p>چه کسی، چرا اکنون، با کدام سؤال باز و از چه کانالی باید بررسی شود؟ اگر سیستم به این چهار سؤال شفاف پاسخ ندهد، اعتماد عملیاتی ایجاد نمی‌کند.</p></div>
<h2>برنامه شروع ۳۰ روزه برای کلینیک</h2><ol class="action-steps"><li><div><strong>مسیر بیمار را ترسیم کنید.</strong><br>قدم‌ها و زمان‌های معمول از مشاوره تا شروع درمان را بنویسید.</div></li><li><div><strong>یک گروه مشخص انتخاب کنید.</strong><br>مثلاً طرح‌های ایمپلنت ۶۰ روز اخیر که نوبت بعدی ندارند.</div></li><li><div><strong>کیفیت داده را بسنجید.</strong><br>درستی نوبت، طرح، رضایت ارتباطی و نتیجه تماس را نمونه‌گیری کنید.</div></li><li><div><strong>مالک فرایند را تعیین کنید.</strong><br>مشخص کنید چه کسی فهرست را می‌بیند، چه زمانی تماس می‌گیرد و چه موردی به پزشک بازمی‌گردد.</div></li><li><div><strong>دو روش ارتباطی را آزمایش کنید.</strong><br>پیام‌های کوتاه و مجاز را بر سؤال باز بیمار متمرکز کنید، نه یادآوری عمومی.</div></li><li><div><strong>اندازه بگیرید و اصلاح کنید.</strong><br>پس از چهار هفته نرخ تماس، ادامه درمان و انصراف از ارتباط را کنار هم بررسی کنید.</div></li></ol>
<h2>جمع‌بندی: هدف دنبال‌کردن بیمار نیست؛ فهمیدن نقطه گسست است</h2><p>سکوت پس از طرح درمان یکی از ارزشمندترین و در عین حال کم‌ساختارترین لحظات کلینیک است. تبدیل آن به فهرست تماس انبوه شاید فعالیت کوتاه‌مدت بسازد، اما عملیات یادگیرنده ایجاد نمی‌کند. روش بهتر، شناسایی خلأ مسیر، بررسی سیگنال‌های قابل‌مشاهده در زمینه و یادگیری از نتیجه هر تماس است.</p><p>شروع با یک گروه کوچک، قواعد روشن و نظارت انسانی کمک می‌کند تجربه بیمار حفظ شود و تداوم درمان برای تیم قابل‌مشاهده‌تر شود.</p>`,
    refs: [
      ['Alkhurayji و همکاران؛ تحلیل عوامل مرتبط با عدم حضور در نوبت‌های دندانپزشکی (۲۰۲۴)', 'https://pubmed.ncbi.nlm.nih.gov/39286712/'],
      ['Coulthard و همکاران؛ پیامد بیماران پس از ارجاع برای آرام‌بخشی، British Dental Journal / PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3812067/'],
      ['راهنمای رسمی Google Search Central برای داده ساختاریافته Article', 'https://developers.google.com/search/docs/appearance/structured-data/article'],
    ],
    ctaKicker: "در داده‌های کلینیک شما چه چیزی پنهان است؟", ctaTitle: "از فهرست تماس به سیستم تصمیم.", ctaBody: "ببینید iQlinic چگونه فعالیت‌های پراکنده بیمار را به اولویت‌های شفاف پیگیری تبدیل می‌کند.", cta: "درخواست دموی اختصاصی"
  }
};

const hrefs = (type, lang) => {
  const suffix = type === "hub" ? "insights/" : `insights/${slugs[lang]}/`;
  return `${site}/${lang}/${suffix}`;
};
const alternates = (type) => `<link rel="alternate" hreflang="en" href="${hrefs(type,"en")}">
  <link rel="alternate" hreflang="tr" href="${hrefs(type,"tr")}">
  <link rel="alternate" hreflang="fa" href="${hrefs(type,"fa")}">
  <link rel="alternate" hreflang="x-default" href="${hrefs(type,"en")}">`;

function nav(c, lang, article = false) {
  const languageLink = (target) => article
    ? `/${target}/insights/${slugs[target]}/`
    : `/${target}/insights/`;
  const solutionLink = lang==="tr" ? "/tr/dis-klinikleri-icin-yapay-zeka/" : `/${lang}/dental-clinic-ai-software/`;
  const solutionLabel = lang==="tr" ? "Yapay Zekâ Yazılımı" : lang==="fa" ? "نرم‌افزار هوش مصنوعی" : "AI Software";
  return `<header><nav class="nav shell">
    <a class="logo" href="/${lang}/" aria-label="iQlinic ${c.home}"><img src="/assets/iqlinic-brand.png" alt="iQlinic"><span>CLINICAL INTELLIGENCE</span></a>
    <div class="navlinks"><a href="/${lang}/">${c.home}</a><a href="${solutionLink}">${solutionLabel}</a><a aria-current="page" href="/${lang}/insights/">${c.nav}</a></div>
    <div class="actions"><div class="languages" aria-label="Language"><a${lang==="en"?' class="active"':""} href="${languageLink("en")}">EN</a><a${lang==="tr"?' class="active"':""} href="${languageLink("tr")}">TR</a><a${lang==="fa"?' class="active"':""} href="${languageLink("fa")}">FA</a></div><a class="button small ghost" href="mailto:contact@iqlinic.com">${c.cta}</a><button class="menu" aria-label="Menu"><i></i><i></i></button></div>
  </nav></header>`;
}
function footer(c, lang) {
  return `<footer><div class="shell footer"><a class="logo" href="/${lang}/"><img src="/assets/iqlinic-brand.png" alt="iQlinic"></a><p>${c.hubLead}</p><div><a href="/en/insights/">English</a><a href="/tr/insights/">Türkçe</a><a href="/fa/insights/">فارسی</a></div><small>© 2026 iQlinic</small></div></footer>`;
}
function head(c, lang, type) {
  const article = type === "article", url = hrefs(type,lang), title = article ? `${c.title} | iQlinic` : `${c.insights} | iQlinic`;
  const desc = article ? c.description : c.hubLead.replace(/<[^>]+>/g,"");
  return `<!doctype html><html lang="${lang}" dir="${c.dir}"><head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#05070b">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <title>${title}</title><meta name="description" content="${desc}">
  <link rel="canonical" href="${url}">${alternates(type)}
  <meta property="og:type" content="${article?"article":"website"}"><meta property="og:site_name" content="iQlinic"><meta property="og:title" content="${title}"><meta property="og:description" content="${desc}"><meta property="og:url" content="${url}"><meta property="og:image" content="${site}/assets/iqlinic-brand.png">
  <meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/favicon.ico"><link rel="manifest" href="/site.webmanifest"><link rel="stylesheet" href="/styles.css?v=31"><link rel="stylesheet" href="/insights.css?v=31">
  <noscript><style>.reveal{opacity:1;transform:none}</style></noscript>`;
}
function hub(c, lang) {
  return `${head(c,lang,"hub")}
  <script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:c.insights,description:c.hubLead.replace(/<[^>]+>/g,""),url:hrefs("hub",lang),inLanguage:lang,isPartOf:{"@type":"WebSite",name:"iQlinic",url:site}})}</script></head>
<body class="insights-page">${nav(c,lang)}<div class="noise"></div><main>
  <section class="insights-hero shell"><div class="insights-kicker"><i></i>${c.insights} / iQlinic</div><h1>${c.hubTitle}</h1><p>${c.hubLead}</p><div class="topic-row"><span>${c.category}</span><span>Patient 360</span><span>Clinical Operations</span><span>Responsible AI</span></div></section>
  <section class="insights-grid shell${lang==="fa"?" insights-list":""}">${lang==="fa"?`<a class="featured-article" href="/fa/insights/ai-dental-clinic/"><div class="article-art"><div class="rings"></div><strong>02</strong><span>هوش مصنوعی کلینیک</span><span>تصمیم‌یار مسئولانه</span></div><div class="article-card-copy"><div class="article-meta"><span>راهنمای جامع</span><i></i><span>۱۸ دقیقه مطالعه</span></div><h2>هوش مصنوعی کلینیک دندانپزشکی؛ از ابزار نمایشی تا تصمیم واقعی</h2><p>کاربردهای واقعی، ریسک‌ها، معیار انتخاب ابزار، شاخص‌های موفقیت و یک نقشه اجرای ۹۰ روزه برای مدیران کلینیک.</p><span class="read-link">مطالعه راهنمای جامع ↗</span></div></a>`:""}<a class="featured-article" href="/${lang}/insights/${slugs[lang]}/"><div class="article-art"><div class="rings"></div><strong>01</strong><span>${c.artA}</span><span>${c.artB}</span></div><div class="article-card-copy"><div class="article-meta"><span>${c.category}</span><i></i><span>${c.read}</span></div><h2>${c.title}</h2><p>${c.deck}</p><span class="read-link">${c.hubRead} ↗</span></div></a></section>
</main>${footer(c,lang)}<script>const m=document.querySelector(".menu"),n=document.querySelector(".navlinks");m?.addEventListener("click",()=>n?.classList.toggle("open"));</script></body></html>`;
}
function article(c, lang) {
  const url=hrefs("article",lang);
  const solutionLink = lang==="tr" ? "/tr/dis-klinikleri-icin-yapay-zeka/" : `/${lang}/dental-clinic-ai-software/`;
  const schema = [
    {"@context":"https://schema.org","@type":"Article","headline":c.title,"description":c.description,"image":[`${site}/assets/iqlinic-brand.png`],"datePublished":published,"dateModified":published,"author":{"@type":"Organization","name":"iQlinic Editorial Team","url":site},"publisher":{"@type":"Organization","name":"iQlinic","logo":{"@type":"ImageObject","url":`${site}/assets/iqlinic-brand.png`}},"mainEntityOfPage":{"@type":"WebPage","@id":url},"inLanguage":lang},
    {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":c.home,"item":`${site}/${lang}/`},{"@type":"ListItem","position":2,"name":c.insights,"item":hrefs("hub",lang)},{"@type":"ListItem","position":3,"name":c.shortTitle,"item":url}]}
  ];
  return `${head(c,lang,"article")}<meta property="article:published_time" content="${published}"><meta property="article:modified_time" content="${published}">
  <script type="application/ld+json">${JSON.stringify(schema)}</script></head>
<body class="insights-page">${nav(c,lang,true)}<div class="noise"></div><main>
  <article><header class="article-head article-shell"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/${lang}/">${c.home}</a><span>/</span><a href="/${lang}/insights/">${c.insights}</a><span>/</span><span>${c.shortTitle}</span></nav><div class="insights-kicker"><i></i>${c.category}</div><h1>${c.title}</h1><p class="article-deck">${c.deck}</p><div class="byline"><strong>${c.author}</strong><i></i><span>${c.publishedLabel}: <time datetime="${published}">${published}</time></span><i></i><span>${c.read}</span></div></header>
  <div class="article-visual" role="img" aria-label="${c.shortTitle}"><div class="journey"><span>${c.artA}</span><i></i><span>?</span><i></i><span>${c.artB}</span></div></div>
  <div class="article-body article-shell">${c.body}
    <section class="references"><h2>${lang==="tr"?"Kaynaklar":lang==="fa"?"منابع":"References"}</h2><ol>${c.refs.map(([n,u])=>`<li><a href="${u}" rel="noopener noreferrer">${n}</a></li>`).join("")}</ol></section>
    <aside class="article-cta"><div class="insights-kicker"><i></i>${c.ctaKicker}</div><h2>${c.ctaTitle}</h2><p>${c.ctaBody}</p><a class="button primary" href="${solutionLink}">${c.cta} ↗</a></aside>
  </div></article>
</main>${footer(c,lang)}<script>const m=document.querySelector(".menu"),n=document.querySelector(".navlinks");m?.addEventListener("click",()=>n?.classList.toggle("open"));</script></body></html>`;
}
for (const [lang,c] of Object.entries(content)) {
  fs.mkdirSync(`${lang}/insights/${slugs[lang]}`, {recursive:true});
  fs.writeFileSync(`${lang}/insights/index.html`, hub(c,lang));
  fs.writeFileSync(`${lang}/insights/${slugs[lang]}/index.html`, article(c,lang));
}
