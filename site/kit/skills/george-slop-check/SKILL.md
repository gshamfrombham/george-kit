---
name: george-slop-check
description: >-
  Use on every draft before it goes to George's dashboard queue, or when he says "slop check," "does
  this sound like AI," "clean this up," or "check for AI tells." Flags machine-written patterns,
  rewrites them in his voice, and attaches a pass or fail report. Also checks web pages for spacer
  junk and scripture shown only as images.
---

# Slop check

A gate, not a suggestion. Nothing reaches the queue without a pass.

## What to flag (prose)

1. **Em dashes.** Zero allowed. Rewrite with a period, a comma or parentheses.
2. **Contrast frames:** "not X, but Y", "it's not just X, it's Y", "less X, more Y".
3. **Signposting:** "Here is", "Here's the thing", "Let's unpack", "Let's dive in", "In this post", "It's worth noting".
4. **Stock words:** delve, journey, tapestry, testament to, profound, unlock, navigate (as a metaphor), robust, seamless, resonate, powerful reminder, in today's world, at the end of the day.
5. **Rhythm tells:** lists of exactly three for effect, every paragraph the same length, one-line paragraphs stacked for drama, a tidy moral summary at the end ("Ultimately, ...").
6. **Stock headers:** clever two-step headers like "Two questions that break the standard reading"; prefer plain or question headers.
7. **Hedging and padding:** "arguably", "it could be said", "in many ways", throat-clearing intros.
8. **Fabrication risk:** quotes, stats, dates or scripture references with no source in the brain. Mark `[check]`.
9. **Not George:** generic explainer cadence with no story, place or person from his life. Compare with `voice/gold/`.

## What to flag (web pages and Webflow rich text)

- Empty spacer paragraphs (`<p>` holding only an invisible character).
- Scripture or key text shown only as an image, or images with empty alt text.
- Headings used for styling instead of structure.

## Steps

1. Read `voice/banned.md` (George's own additions win) and `voice/VOICE.md`.
2. Scan the draft. List each hit with the line and the rule.
3. Rewrite the flagged lines in his voice (george-voice). Don't flatten the parts that already sound like him.
4. Re-scan. Pass means zero em dashes, zero items from rules 2 to 4, no fabrication without `[check]`, and no web junk.
5. Attach the report to the dashboard version: `voice_check: pass|fail`, counts by rule, and the lines changed.

## Output

```
Slop check: PASS (or FAIL)
Em dashes: 0 | Contrast frames: 0 | Signposting: 0 | Stock words: 0 | Rhythm: ok | [check] items: 2
Changed: 6 lines (list)
```

## Try saying

"Slop check this article before it goes in the queue."

## Make it yours

When George spots a new tell, add it to `voice/banned.md`. That list is his and grows over time.
