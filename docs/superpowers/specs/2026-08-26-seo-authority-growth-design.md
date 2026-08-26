# iQlinic SEO Authority Growth — Design

## Objective
Build sustained organic-search authority for the Persian query «هوش مصنوعی در دندانپزشکی» while increasing qualified discovery of iQlinic product pages, without keyword cannibalization or unsupported medical/marketing claims.

## Strategy
Use the existing `/fa/insights/ai-dental-clinic/` page as the sole Persian pillar owner for the exact broad query. Supporting articles own narrower clinical, operational, buyer and implementation intents and link contextually back to the pillar. English and Turkish equivalents remain coordinated via reciprocal hreflang.

## Workstreams
1. Internal link graph: add contextual links from existing Persian/English/Turkish insight pages and product pages toward the pillar and relevant supporting clusters.
2. E-E-A-T: strengthen editorial policy, author/reviewer attribution, About/Research identity and schema. Never invent clinical credentials or external reviewers.
3. Content expansion: publish five new long-tail clusters, coordinated FA/EN/TR, with unique intent ownership and citations where clinical claims are made.
4. SERP/CTR: improve title/meta on priority hub/pillar/support pages without changing established canonical URLs.
5. Visual authority: add original explanatory visual modules inside editorial pages using site-native HTML/CSS/SVG patterns rather than generic AI art.
6. Crawl/indexing: maintain hubs, canonical/hreflang, `sitemap.xml`, `sitemap-recent.xml`, dedicated topic sitemap and robots discovery.
7. Off-page authority: build a prospect list of genuinely relevant dental/AI/academic publishers and send personalized editorial/resource outreach only to verified public contact channels; no paid or manipulative link schemes.
8. Measurement: establish a weekly SEO scorecard schema for Search Console once authenticated data access is available; until then verify indexability, crawl surfaces and observable Google results without fabricating GSC data.

## Content ownership
- Broad exact pillar: `/fa/insights/ai-dental-clinic/`
- Clinical overview: `/fa/insights/ai-dentistry-diagnosis-treatment/`
- Operations overview: `/fa/insights/ai-dental-practice-management/`
- New clusters:
  - AI in dental radiology
  - AI for dental caries detection
  - AI in orthodontics
  - AI in implant dentistry
  - Benefits, limitations and risks of AI in dentistry

Each cluster must answer a distinct query and link to the pillar, at least one sibling cluster, the relevant product page and demo when natural.

## Quality constraints
- No invented outcomes, customer counts, accuracy figures or clinical claims.
- Prefer peer-reviewed 2025–2026 sources and primary/official guidance.
- Keep diagnosis/treatment responsibility with qualified clinicians.
- Preserve existing URLs when they already have search equity.
- All new editorial clusters ship FA/EN/TR together with reciprocal hreflang and sitemap entries.
- Indexable pages use self-canonical and `index,follow`.
- Do not keyword-stuff exact-match anchors.

## Verification
Before production: compare branch against main, verify changed-page HTML, canonical, robots, hreflang, schema and internal links, then fast-forward only if branch is not behind main. After deployment verify HTTP 200 for new pages, hubs and sitemaps on `www.iqlinic.ir`.
