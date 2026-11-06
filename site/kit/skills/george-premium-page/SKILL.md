---
name: george-premium-page
description: >-
  Use when George wants a new or redesigned web page that looks designed, not generated: a book
  landing page, a TOI page, a G's Plan page, a speaking page, an event page, a homepage refresh, "make
  this page look premium," "redesign my page." Writes a one-page DESIGN.md first, builds in Webflow as
  a draft, then runs a separate review pass. Adapted from Trevor's team's premium site method for a
  solo author on Webflow.
---

# Premium page

Pages that look like a person with taste made them, built on George's Webflow site.

## Steps

1. **Content first.** Gather the real words, links and images for the page from the brain and George. No placeholder text, no invented quotes, numbers or testimonials. If a section has no real content, drop the section.
2. **Look before building.** Collect 8 to 12 real reference pages George likes (other authors, ministries, publishers), with links. Ask George to pick the two he likes most and say why in a sentence.
3. **DESIGN.md (one page, before any building),** saved at `design/DESIGN.md`:
   - Type: one heading face and one body face, sizes for each level.
   - Color: tokens for ink, background, surface, one accent, status colors. Contrast checked (AA).
   - Spacing scale and max content width.
   - Imagery: real photos of George, his places, his books, mission work with permission. No AI-generated people.
   - "This brand never": George's own list (for example no stock handshake photos, no purple gradients, no emoji icons).
4. **Build in Webflow as a draft** (george-site-update): the hero first (headline, one sentence, one main action, visible without scrolling on a laptop), then the sections in the order the content needs.
5. **Review as a separate pass** (george-design-check), ideally a different session or agent. The builder never approves its own page.
6. Fix, re-check, then post the draft link to the dashboard for Approve. Publish only after Approve.

## Rules

- Mobile first: check at phone width before desktop.
- One main action per page.
- Every image has real alt text; scripture and key text are text, not images.
- No em dashes in page copy.

## Output

`design/DESIGN.md`, a Webflow draft link, the review report, and a dashboard item.

## Try saying

"Build a premium landing page for The Relay, draft only, and show me the design brief first."

## Make it yours

Once DESIGN.md is approved for his site, every later page reuses it. Change it only on purpose, with a dated note in `decisions/`.
