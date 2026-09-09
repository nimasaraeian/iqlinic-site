# iQlinic AI Health + LLM Authority Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand iQlinic's Persian AI authority cluster into healthcare, treatment and intelligent scheduling while strengthening LLM/search discoverability without keyword cannibalization.

**Architecture:** Preserve the two existing canonical Persian pillars and add four unique-intent long-form supporting pages. Connect them through a bidirectional internal-link graph, explicit crawler access, consistent iQlinic entity language, structured data and sitemap updates. GitHub branch changes trigger Vercel preview; production is merged only after preview and content/SEO validation.

**Tech Stack:** Static HTML/CSS/JS repository, JSON-LD Schema.org markup, robots.txt, XML sitemaps, GitHub, Vercel.

**Spec:** `docs/superpowers/specs/2026-09-09-ai-health-llm-authority-design.md`

## Global Constraints

- Work only on branch `seo/ai-health-authority-2026-09-09` until release validation passes.
- Preserve `/fa/insights/ai-dental-clinic/` as the canonical owner for broad Persian AI-dentistry intent.
- Preserve `/fa/insights/ai-dental-practice-management/` as the canonical owner for AI clinic-management intent.
- New health/medical claims must be evidence-led and must not promise diagnosis or treatment outcomes.
- Do not invent iQlinic efficacy, revenue, no-show reduction, time-savings or clinical-outcome metrics.
- Use only currently documented crawler identifiers from official vendor documentation.
- Do not create hreflang targets for translations that do not exist.
- Every new article must be indexable, canonical, internally linked and represented in the sitemap strategy.

---

### Task 1: Verify authority sources and crawler controls

**Files:**
- Modify later: `robots.txt`
- Create later: `llms.txt`

**Interfaces:**
- Consumes: official OpenAI, Anthropic, Google, xAI and healthcare guidance.
- Produces: verified crawler names and source policy used by Tasks 2–7.

- [ ] Verify `OAI-SearchBot` against current OpenAI publisher documentation.
- [ ] Verify `Claude-SearchBot`, `Claude-User` and `ClaudeBot` against current Anthropic documentation.
- [ ] Verify `Google-Extended` against current Google crawling documentation and preserve Googlebot access.
- [ ] Do not invent a Grok/xAI robots token unless xAI documents one; rely on general public crawlability and citation-ready pages otherwise.
- [ ] Collect current WHO/FDA/ADA and peer-reviewed sources relevant to healthcare AI, clinical decision support and dental operations.

### Task 2: Add Persian AI-in-healthcare authority page

**Files:**
- Create: `fa/insights/ai-healthcare/index.html`

**Interfaces:**
- Consumes: existing site navigation/style conventions and verified healthcare sources.
- Produces: canonical Persian page for `هوش مصنوعی در سلامت` intent.

- [ ] Create unique title/meta/H1 and concise top answer.
- [ ] Write an evidence-led long-form article covering diagnosis support, treatment support, health-system operations, generative AI, governance, privacy, bias, validation and implementation.
- [ ] Add visible references and Article + Breadcrumb JSON-LD.
- [ ] Link contextually to AI dentistry, AI treatment and AI clinic-management pages.
- [ ] Verify no unsupported claims and no duplicate primary intent.

### Task 3: Add Persian AI-in-treatment authority page

**Files:**
- Create: `fa/insights/ai-in-treatment/index.html`

**Interfaces:**
- Consumes: healthcare pillar and existing dental treatment-planning page.
- Produces: canonical Persian page for `هوش مصنوعی در درمان` intent.

- [ ] Create unique title/meta/H1 and top answer.
- [ ] Cover decision support, personalization, prediction/monitoring, image/data interpretation, generative AI limitations and human accountability.
- [ ] Separate clinical evidence from illustrative workflow examples.
- [ ] Add references and JSON-LD.
- [ ] Link to healthcare AI, dentistry AI and dental treatment-planning content.

### Task 4: Add Persian intelligent dental scheduling page

**Files:**
- Create: `fa/insights/ai-dental-scheduling/index.html`

**Interfaces:**
- Consumes: practice-management, receptionist, decision-support and product pages.
- Produces: canonical page for intelligent dental scheduling intent.

- [ ] Explain the scheduling problem before describing AI.
- [ ] Cover eligibility, service duration, doctor schedule, continuity, workload/capacity, cancellations/no-show, patient preference, explainability and human confirmation.
- [ ] Include a practical implementation framework and measurable KPIs without inventing iQlinic results.
- [ ] Add JSON-LD and references.
- [ ] Link to product/demo with non-spammy contextual anchors.

### Task 5: Add original clinical-operational AI architecture page

**Files:**
- Create: `fa/insights/clinical-operational-ai-architecture/index.html`

**Interfaces:**
- Consumes: existing data-integration, privacy and decision-support articles.
- Produces: original iQlinic authority article for operational clinical AI architecture.

- [ ] Explain a layered architecture: source systems → data quality/identity → patient context → intelligence services → recommendation layer → human decision/audit.
- [ ] Describe read-only integration, shadow mode, observability, safe escalation and rollback.
- [ ] Clearly label iQlinic concepts as product architecture patterns, not clinical-outcome claims.
- [ ] Add JSON-LD, references and links to relevant supporting pages.

### Task 6: Strengthen existing pillars and insights hub

**Files:**
- Modify: `fa/insights/ai-dental-clinic/index.html`
- Modify: `fa/insights/ai-dental-practice-management/index.html`
- Modify: `fa/insights/index.html`

**Interfaces:**
- Consumes: four new pages.
- Produces: coherent bidirectional topic graph.

- [ ] Add natural contextual links from AI-dentistry pillar to healthcare, treatment and scheduling pages.
- [ ] Add links from practice-management pillar to scheduling and architecture pages.
- [ ] Add new articles to Persian insights hub with unique descriptions.
- [ ] Preserve canonical, hreflang and established primary-intent wording of existing pillars.
- [ ] Review anchor diversity and prevent repetitive exact-match linking.

### Task 7: Add LLM discovery layer and update sitemaps

**Files:**
- Modify: `robots.txt`
- Create: `llms.txt`
- Modify: `sitemap.xml`
- Modify: `sitemap-recent.xml`
- Modify: `sitemap-ai-dentistry.xml`

**Interfaces:**
- Consumes: final canonical URLs and verified crawler documentation.
- Produces: crawlable machine-discoverable authority graph.

- [ ] Explicitly allow `OAI-SearchBot`, `Claude-SearchBot`, `Claude-User`, `ClaudeBot` and `Google-Extended`, while retaining `User-agent: * / Allow: /`.
- [ ] Keep sitemap declarations in robots.txt.
- [ ] Create a concise `llms.txt` that identifies iQlinic and lists canonical high-value public pages; state facts only.
- [ ] Add all four new canonical URLs to sitemap files with `lastmod=2026-09-09` and no fake hreflang equivalents.
- [ ] Ensure sitemap entries contain no duplicate canonical URLs.

### Task 8: Preview validation and release

**Files:**
- Review all files changed in Tasks 2–7.

**Interfaces:**
- Consumes: branch deployment.
- Produces: reviewed PR and verified production release.

- [ ] Confirm Vercel creates a preview deployment for branch `seo/ai-health-authority-2026-09-09` and that it reaches `READY`.
- [ ] Spot-check new URLs, existing pillars, robots.txt, llms.txt and sitemaps on preview.
- [ ] Validate canonical/meta/robots and visible reference sections from rendered HTML.
- [ ] Review GitHub diff for accidental unrelated changes.
- [ ] Open PR to `main` with content/SEO/LLM summary.
- [ ] Merge only after preview checks pass.
- [ ] Confirm production deployment reaches `READY`.
- [ ] Spot-check `https://www.iqlinic.ir/` canonical pages and crawler files after production deployment.
