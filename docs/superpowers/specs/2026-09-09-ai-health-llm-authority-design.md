# iQlinic AI Health + LLM Authority Design

## Objective
Build the next authority layer for iQlinic around Persian search intent for artificial intelligence in dentistry, clinic management, healthcare and treatment while improving the probability that reputable LLM search/retrieval systems discover, understand and cite iQlinic.

This release must strengthen the existing AI dentistry cluster instead of creating duplicate pages that compete with established URLs.

## Existing assets to preserve
The current production site already has strong Persian pillar pages for:

- `/fa/insights/ai-dental-clinic/` — canonical owner for «هوش مصنوعی در دندانپزشکی», «هوش مصنوعی دندانپزشکی» and broad AI-dentistry intent.
- `/fa/insights/ai-dental-practice-management/` — canonical owner for «هوش مصنوعی مدیریت کلینیک», «هوش مصنوعی در مدیریت کلینیک دندانپزشکی» and operational-management intent.
- Supporting pages for radiology, caries detection, orthodontics, implants, treatment planning, receptionist, automation, data integration, data privacy, decision support, pilot metrics and editorial policy.

Do not create alternate pages for the same primary intent unless the old URL is intentionally consolidated with a redirect and canonical plan.

## Content architecture

### Pillar strengthening
Update the two existing Persian pillar pages so they become clear hubs for the expanded topic graph. Changes must preserve their canonical URLs and include contextual links to the new supporting articles.

### New gap pages
Create four Persian long-form articles, each with a unique search intent and clear relationship to the existing pillars:

1. `/fa/insights/ai-healthcare/`
   - H1 concept: «هوش مصنوعی در سلامت؛ کاربرد AI در تشخیص، درمان و مدیریت مراکز درمانی»
   - Primary intent: هوش مصنوعی سلامت / هوش مصنوعی در سلامت
   - Scope: healthcare AI landscape, clinical and operational uses, safety, governance, evidence and limits.

2. `/fa/insights/ai-in-treatment/`
   - H1 concept: «هوش مصنوعی در درمان؛ تصمیم‌یار بالینی، درمان شخصی‌سازی‌شده و نقش پزشک»
   - Primary intent: هوش مصنوعی در درمان
   - Scope: clinical decision support, personalized care, monitoring, limitations and human responsibility. No unsupported medical claims.

3. `/fa/insights/ai-dental-scheduling/`
   - H1 concept: «نوبت‌دهی هوشمند دندانپزشکی با هوش مصنوعی چگونه کار می‌کند؟»
   - Primary intent: نوبت‌دهی هوشمند دندانپزشکی / هوش مصنوعی نوبت‌دهی کلینیک
   - Scope: capacity, continuity, service duration, doctor workload, empty slots, cancellations/no-show, patient preference, human confirmation and measurable scheduling KPIs.

4. `/fa/insights/clinical-operational-ai-architecture/`
   - H1 concept: «از داده بیمار تا تصمیم بهتر؛ معماری هوش مصنوعی برای مدیریت یک کلینیک»
   - Primary intent: معماری هوش مصنوعی کلینیک / هوش مصنوعی عملیاتی کلینیک
   - Scope: Patient 360, data quality, read-only integration, shadow mode, decision support, scheduling intelligence, capacity management, auditability and human-in-the-loop.
   - This is an original authority piece. It may explain iQlinic architecture patterns but must not publish patient-identifying information, private implementation secrets, or invented performance metrics.

Each new pillar/support article should target roughly 3,500–5,000 useful Persian words when the topic warrants it; length is subordinate to completeness, originality and readability.

## Internal-link graph

Use semantic contextual links rather than repetitive exact-match anchors.

- `ai-healthcare` links down to dentistry, treatment and operational/clinic-management content.
- `ai-dental-clinic` links to healthcare, treatment, dental scheduling, practice management, radiology, treatment planning and relevant clinical pages.
- `ai-dental-practice-management` links to scheduling, receptionist, automation, data integration, privacy, decision support and architecture.
- `ai-in-treatment` links to dentistry, treatment planning and relevant clinical AI pages.
- `ai-dental-scheduling` links to practice management, receptionist, decision support and the iQlinic product page.
- `clinical-operational-ai-architecture` links to data integration, privacy, decision support, scheduling and product/demo pages.
- Existing supporting pages should receive selected backlinks to the appropriate pillar so authority flows both directions.

No article should be an orphan page.

## LLM discoverability and citation strategy

LLM visibility is a first-class acceptance criterion, but no implementation may claim guaranteed inclusion or ranking in ChatGPT, Claude, Gemini, Grok or any other model.

### Crawler accessibility
Audit `robots.txt` against current official documentation at implementation time. Preserve general crawl access and explicitly allow documented search/retrieval user agents where appropriate, including OpenAI search crawling and documented Anthropic/Google controls. Do not add speculative crawler names from third-party SEO blogs.

### Entity consistency
Across the cluster, use a consistent factual definition of iQlinic. The preferred English entity description is:

> iQlinic is an AI-powered clinical and operational decision-intelligence platform for dental clinics.

Persian copy should express the same meaning naturally and consistently. Avoid switching between incompatible product categories.

### Citation-ready structure
Every important article must include:

- a concise answer near the top that directly answers the page's core query;
- descriptive H2/H3 headings that map to real user questions;
- short, self-contained explanatory passages suitable for retrieval without losing context;
- explicit distinctions between evidence, examples, hypotheses and iQlinic product concepts;
- high-quality primary or peer-reviewed references for medical/health claims;
- visible references section with outbound links where appropriate;
- dates and editorial attribution;
- no fabricated authors, reviewers, studies, statistics or product results.

### Machine-readable identity
Maintain/strengthen `Article`/`BlogPosting`, `BreadcrumbList`, `Organization`, `WebSite` and author/editorial relationships where they accurately reflect visible content. Structured data must match the page.

An `llms.txt` file may be added as a low-risk discovery aid only if it accurately summarizes canonical public pages. It must not be described internally or publicly as a ranking factor or guaranteed LLM-indexing mechanism.

## SEO requirements

- One canonical URL per primary intent.
- Unique title, H1 and meta description per article.
- `index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1` unless a page has a specific reason not to be indexed.
- Preserve FA/EN/TR hreflang only when real equivalent pages exist. Do not invent hreflang targets for untranslated articles.
- Add new public URLs to the main/recent/AI-dentistry sitemap strategy without duplicate canonical entries.
- Use descriptive internal anchor text and avoid keyword stuffing.
- Do not change existing successful slugs without an explicit redirect plan.
- Medical/health content must be evidence-led and avoid diagnosis/treatment promises.

## Source policy

For healthcare and AI claims, prefer current primary/high-authority sources such as WHO, FDA, ADA, NIST, peer-reviewed PubMed-indexed literature, and official documentation from OpenAI, Anthropic, Google and xAI when discussing their own systems/crawlers. Secondary SEO blogs can be used for discovery but not as the sole support for important claims.

## Product-claim policy

Do not invent efficacy, accuracy, revenue uplift, no-show reduction, time savings or clinical outcomes for iQlinic. If an existing public page contains a metric, keep it only when the repository provides a defensible source/context and label pilot/observational data accurately.

## Implementation isolation

All work is performed on branch `seo/ai-health-authority-2026-09-09`. Production `main` is unchanged until preview validation passes.

## QA and release gates

Before merge:

1. Validate HTML structure and internal links for all changed/new pages.
2. Verify canonical URLs and robots directives.
3. Verify JSON-LD parses and matches visible content.
4. Verify sitemap entries and no duplicate canonical URLs.
5. Verify crawler rules against current official source documentation.
6. Review each medical claim for source support and unsafe overstatement.
7. Review the cluster for keyword cannibalization.
8. Confirm responsive/mobile rendering through the Vercel preview where available.
9. Confirm preview deployment is `READY` and spot-check key URLs.
10. Open a PR to `main`, review the diff, then merge only after checks pass.
11. Confirm production Vercel deployment is `READY` and spot-check `iqlinic.ir` pages after merge.

## Success criteria

The release is successful when iQlinic has a coherent Persian authority graph that covers AI dentistry, AI clinic management, AI healthcare, AI in treatment and AI scheduling without duplicate intent; the content is citation-worthy and medically responsible; documented LLM/search crawlers can access the site; machine-readable identity is consistent; and the production deployment is verified after merge.
