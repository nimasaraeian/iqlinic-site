# iQlinic SEO Authority Growth Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Increase topical authority, crawl discoverability, trust signals and off-page authority for iQlinic around «هوش مصنوعی در دندانپزشکی» without cannibalization.

**Architecture:** Keep the existing AI-in-dentistry pillar as the single broad-query owner. Strengthen it through contextual internal links, coordinated long-tail content clusters, editorial trust pages, sitemap/hreflang maintenance and ethical outreach.

**Tech Stack:** Static HTML/CSS/JS, GitHub, Vercel, Schema.org JSON-LD, XML sitemaps.

**Spec:** `docs/superpowers/specs/2026-08-26-seo-authority-growth-design.md`

## Global Constraints
- Do not invent medical evidence, credentials, results, users, customers or rankings.
- Preserve existing canonical URLs.
- New editorial clusters publish FA/EN/TR together.
- Every new language cluster has self-canonical plus reciprocal fa/en/tr/x-default hreflang.
- Persian broad exact query remains owned by `/fa/insights/ai-dental-clinic/`.
- Clinical decisions remain with qualified clinicians.

---

### Task 1: Internal-link authority graph
**Files:** existing FA/EN/TR insight HTML pages and relevant product pages.
- [ ] Fetch current pages and identify natural contextual insertion points.
- [ ] Add varied anchors toward the pillar and appropriate sibling clusters.
- [ ] Ensure no exact-match anchor stuffing.
- [ ] Verify every changed internal URL exists.

### Task 2: Editorial trust and E-E-A-T
**Files:** `fa/insights/editorial-policy/index.html`, EN/TR editorial policy pages if missing, relevant author/schema blocks.
- [ ] Expand editorial policy with source selection, fact-checking, corrections, AI-assisted drafting disclosure and medical-scope disclaimer.
- [ ] Add coordinated EN/TR policy pages if absent.
- [ ] Link article bylines to the editorial policy.
- [ ] Add Organization/Person only when supported by known facts; do not create a fake clinician reviewer.

### Task 3: Five long-tail content clusters
**Files:** 15 new article pages (5 topics × FA/EN/TR).
- [ ] Create localized article pages for radiology, caries, orthodontics, implant dentistry, and AI benefits/risks.
- [ ] Give each cluster distinct title/H1/meta intent.
- [ ] Include visible FAQ only where useful; do not rely on FAQ rich results.
- [ ] Add scientific references for clinical claims.
- [ ] Add original site-native visual section and contextual links to pillar/product/demo/siblings.

### Task 4: Hubs and crawl surfaces
**Files:** `fa/insights/index.html`, `en/insights/index.html`, `tr/insights/index.html`, `sitemap.xml`, `sitemap-recent.xml`, `sitemap-ai-dentistry.xml`, `robots.txt`.
- [ ] Add all new clusters to each language hub.
- [ ] Add 15 URLs to main and topic sitemaps with reciprocal hreflang.
- [ ] Put fresh URLs in recent sitemap with `2026-08-26` lastmod.
- [ ] Verify robots advertises all required sitemaps.

### Task 5: SERP and trust-page optimization
**Files:** pillar, hubs, relevant product page and editorial policy.
- [ ] Improve titles/descriptions for query intent and CTR without clickbait.
- [ ] Keep one broad-query owner.
- [ ] Confirm Article/Breadcrumb schema and publisher data.

### Task 6: Off-page authority launch
**External:** web research + Gmail only for verified relevant contacts.
- [ ] Identify high-relevance dental/AI/academic publishers and resource pages.
- [ ] Exclude link farms, paid-link pitches and unrelated directories.
- [ ] Prepare personalized resource outreach referencing the evidence-based pillar.
- [ ] Send a small high-quality first batch only to verified public editorial/contact addresses.

### Task 7: Production verification
- [ ] Compare branch with main; require `behind_by=0` or rebase/refresh before merge.
- [ ] Review changed-file set.
- [ ] Move main by fast-forward only after checks.
- [ ] Verify latest Vercel production deployment is READY.
- [ ] Fetch representative FA/EN/TR pages, hubs, robots and sitemaps from production and require HTTP 200.
- [ ] Report any item that could not be completed instead of assuming success.
