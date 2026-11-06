# 14 · Design Standard
> A short design brief and a separate review pass so George's pages, graphics and dashboard look designed, not generated.

**Run it:** `Run module 14 from my framework. Write my DESIGN.md and review my homepage against it.`
**Needs first:** 06
**Time:** about 40 minutes · **GEORGE's part:** approve the DESIGN.md

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{BRAND_COLORS}} | The 2 or 3 colors George's site actually uses | read from georgeshamblin.com CSS |
| {{BRAND_FONTS}} | Fonts in use on his site | same |
| {{GS_PLAN_LOOK}} | Any separate look for G's Plan | his Claude memory or Projects, or ask George |
| {{TOI_LOOK}} | The Overseas Initiative's look (logo, colors) | theoverseasinitiative.org, or ask George |
| {{NEVER_DO}} | Looks George dislikes | ask George once |

## Why this matters
Generated pages share a look: centered hero, gradient blob, three icon cards, a stock photo of hands on a laptop, everything the same weight. People recognize it in a second and assume nobody cared. Designed pages make choices: one strong idea per section, a real photo of George, type with contrast, generous space, and restraint. The rule that keeps quality up is simple: write the brief before building, and never let the pass that built a page also approve it.

## Steps
1. **Write `design/DESIGN.md`** before any page or graphic, one page long:
   - **Brand:** {{BRAND_COLORS}}, {{BRAND_FONTS}}, per-brand variations ({{GS_PLAN_LOOK}}, {{TOI_LOOK}}).
   - **Type scale:** 3 sizes plus a small label size; headings set tight, body at a comfortable reading width (about 65 to 75 characters).
   - **Spacing:** one base unit (for example 8px) and its multiples only.
   - **Color rules:** brand color only for actions and small accents, never large fills; status colors only on status.
   - **Imagery:** real photos of George, his family, Cuba and the people TOI serves (with permission), his book covers. No generic stock people.
   - **Never do:** {{NEVER_DO}}, plus gradient blobs, glassmorphism, three-icon-card rows, emoji as icons, centered everything, walls of identical cards.
   *Check:* every rule is specific enough that a reviewer can say yes or no.
2. **Run the generated-versus-designed review** on his current homepage with `george-design-check`. Score each section:
   | Sign of generated | Sign of designed |
   |---|---|
   | Everything centered, same weight | Clear hierarchy, one focal point per section |
   | Stock imagery | His own photos and covers |
   | Decorative gradients and blobs | Flat, intentional color |
   | Icon-card triplets | Content shaped to the content |
   | Vague headlines | Specific promise ("Tuesday videos and Thursday articles, both free") |
   | Spacer paragraphs and uneven gaps | One spacing system |
   *Check:* a report with a screenshot per section at phone and desktop width, saved to `design/reviews/`.
3. **Build with `george-premium-page`.** Any new page, landing page, book page or graphic starts from DESIGN.md, one section at a time. *Check:* the skill's first step reads DESIGN.md.
4. **Review as a separate pass.** After a build, start a fresh session (or a different skill run) that only reviews with `george-design-check` at full resolution, phone and desktop. The builder never approves its own work. *Check:* the review file names a different session than the build.
5. **Apply to the dashboard.** The dashboard shell at [../dashboard-proto/](../dashboard-proto/) already follows a calm, polished system. When George customizes it, change only `config.js` colors and names first, and keep its spacing and type scale. *Check:* the customized dashboard passes `george-design-check`.

## GEORGE does
- Reads DESIGN.md and approves or edits it.
- Names anything he never wants to see.

## Done when
- [ ] `design/DESIGN.md` exists and George approved it
- [ ] Homepage review saved with phone and desktop screenshots
- [ ] Build and review always run as separate passes

## Writes to
- `design/DESIGN.md`, `design/reviews/*.md`, `WORKLOG.md`, a handoff

## Next
- [15 · Dashboard: What and Why](./15-DASHBOARD-WHAT-AND-WHY.md)
