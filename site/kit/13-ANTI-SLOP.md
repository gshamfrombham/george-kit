# 13 · Anti-Slop Standard
> A hard gate that catches machine-sounding writing before anything reaches George's approval queue, plus the procedure to fix it in his voice.

**Run it:** `Run module 13 from my framework. Set up the slop check and test it on my last three posts.`
**Needs first:** 12
**Time:** about 30 minutes · **GEORGE's part:** add any tells that bug him to the banned list

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{TEST_POSTS}} | George's three most recent published articles | georgeshamblin.com |
| {{CLEAN_POST}} | One pre-2026 post that should pass | `voice/gold/` (for example *Pray Until You Pray*) |
| {{GEORGE_PET_PEEVES}} | Phrases George personally can't stand | ask George once |
| {{SCRIPTURE_TRANSLATION}} | His Bible translation | `voice/VOICE.md` (module 12) |

## Why this matters
A reader who smells AI stops reading and stops trusting. The tells are learnable and countable, so they can be caught by a check instead of by George's eyes. This gate runs on every draft from every skill. Nothing enters the approval queue without a pass, which means George spends his time on substance, not on scrubbing dashes.

## Steps
1. **Create `voice/banned.md`** with these tells, each with an example and the fix:
   - **Em dashes.** Zero allowed. Fix: a period, a comma, or parentheses.
   - **"Not X, but Y" frames.** ("Not as a bait and switch, but as a lure.") Fix: say the true thing straight.
   - **Throat-clearing openers:** "Here is…", "Here's the thing", "Let's unpack", "Let's dive in", "In today's world". Fix: start with the scene or the answer.
   - **Stock section headers** that sound like a listicle ("Two questions that break the standard reading"). Fix: a plain header or none.
   - **Neat triads** used for rhythm (three adjectives, three parallel clauses). Fix: keep the strongest one.
   - **Tidy moral-summary endings** ("Ultimately…", "The takeaway is…"). Fix: end on the image or a plain charge.
   - **Buzzwords:** journey, profound, powerful reminder, delve, unlock, seamless, robust, navigate (figurative), testament to.
   - **Stacked one-line paragraphs** for drama. Fix: merge into real paragraphs.
   - **Spacer paragraphs** in Webflow (empty `<p>` lines used for space). Fix: real spacing in the design, not empty lines.
   - **Scripture as an image.** Verses must be on the page as text with book, chapter and verse, so readers, screen readers and AI answer engines can all read them.
   - {{GEORGE_PET_PEEVES}}
   *Check:* every entry has a bad example and a fixed example.
2. **Keep what works.** Write at the top of banned.md: question-first titles with the plain answer in the first two sentences are correct for search and AI answer engines. Keep that format. The fix is the voice, not the format. *Check:* the note is present.
3. **Set the scoring rubric** in `voice/rubric.md`. Every draft gets scored:
   | Check | Pass rule |
   |---|---|
   | Hard tells (em dashes, scripture images, spacer paragraphs) | zero |
   | Soft tells (everything else in banned.md) | 2 or fewer per 1,000 words |
   | Voice match | opens on a person, place or moment, or on the plain answer for question posts; at least one concrete detail per section from George's life or the text |
   | Facts | every quote, date, number and verse reference checked or marked `[check]` |
   | Scripture | quoted as text in {{SCRIPTURE_TRANSLATION}} with reference |
   A draft passes only if every row passes. *Check:* rubric file exists and `george-slop-check` reads it.
4. **The rewrite procedure** (what `george-slop-check` does on a fail): list every hit with its line, rewrite only those sentences using VOICE.md, re-score, and attach the before and after report. Do not rewrite passing paragraphs. Do two passes at most; if it still fails, send it to the queue marked "needs George" with the report, rather than looping. *Check:* the skill's steps match this.
5. **Calibrate on real posts.** Run the check on {{TEST_POSTS}} and on {{CLEAN_POST}}, and compare with the private baseline in `voice/baseline.md` (module [12](./12-VOICE-GUIDE.md)). Record results only in george-os. {{CLEAN_POST}} should pass; any recent post the baseline flagged should fail for the same reasons. *Check:* results match the baseline. If the clean post fails, the rubric is too strict; loosen the soft-tell threshold and re-run.
6. **Wire the gate.** Every item posted to the dashboard carries `voice_check` (pass or fail) and the slop report. The dashboard refuses an item without them. *Check:* see module [16](./16-DASHBOARD-BUILD.md), test "item without voice_check is refused."

## GEORGE does
- Adds the phrases that bug him to {{GEORGE_PET_PEEVES}}.
- Can override a fail with a written reason on the dashboard. The reason is logged.

## Done when
- [ ] `voice/banned.md` and `voice/rubric.md` exist with examples
- [ ] Calibration: recent posts fail for the right reasons; the clean post passes
- [ ] `george-slop-check` attaches a report to every draft
- [ ] Dashboard refuses items without a voice check

## Writes to
- `voice/banned.md`, `voice/rubric.md`, `WORKLOG.md`, a handoff

## Next
- [14 · Design Standard](./14-DESIGN-STANDARD.md)
- Add to banned.md any time George flags a new tell. The list grows; it never shrinks without his say.
