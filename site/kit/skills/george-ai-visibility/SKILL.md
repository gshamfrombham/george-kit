---
name: george-ai-visibility
description: >-
  Use for George's monthly AI visibility check, or when he says "AI visibility," "am I showing
  up in ChatGPT," "do AI answers mention me," "run the monthly measure," "GEO report," "what
  should we fix for AI search." Measures the saved English and Spanish question set with his
  Rank Prompt access, compares with last month, verifies every recommendation against the live
  page, and turns fixes into dashboard items. Runs module 37.
---

# AI visibility

Once a month: does George show up when people ask AI tools the questions he answers? Then fix what would change that.

## Fill in first

| Slot | What it is |
|---|---|
| {{RP_ACCESS}} | His Rank Prompt access and the brand set up for his site. The login lives in 1Password (george-secrets), never in a chat |
| {{PROMPT_SET}} | `projects/ai-visibility/prompts.md`, the fixed English and Spanish questions, each tagged with a theme |
| {{MONTHLY_CREDITS}} | Credits George allows per month (module 37) |

## Themes (report each one)

Men's ministry · Christian ministry · Cuba ministry · Systematic theology · His books · Family ministry · Church and Reformation history · Core Christianity. Every question in prompts.md carries one theme tag; brand questions are tagged "brand" and reported separately.

## Steps

1. george-session-start; read `37-GEO-SEO-STRATEGY.md` (his copy in george-os), `projects/ai-visibility/BASELINE.md` and last month's `projects/ai-visibility/YYYY-MM.md`.
2. **Measure** the same questions, same engines, same markets as last month, through his Rank Prompt access, within {{MONTHLY_CREDITS}}. Never edit the question list between runs; new questions go in a separate group that doesn't count as movement.
3. **Headline number: non-brand visibility**, answers naming George or citing his pages out of all non-brand answers. Then the rest of module 37's four numbers (his pages cited, Spanish non-brand mentions, brand answers correct, read from the answer text).
4. **Per theme:** the same numbers for each theme, plus which questions flipped from not named to named (or back), and new names that appear instead of him.
5. **Compare with last month** on questions both runs asked. One month's move is not a trend; say so until three or four runs agree.
6. **Verify before proposing.** For any recommendation the tool generates, open the live page and confirm the fact it's based on (the page exists, says what the tool claims, lacks what it says is missing). Drop or correct any recommendation that doesn't hold up.
7. **Turn fixes into dashboard items** through george-approval-queue: page refreshes, schema and template fixes for george-site-update; new answer articles for george-weekly-article. Each item names its question, its theme and the number it should move.
8. **Write it down:** `projects/ai-visibility/YYYY-MM.md`, a scoreboard row in `CONTROL.md` (module 29), the numbers on the dashboard Data screen (george-dashboard-data), and a WORKLOG line. Then george-handoff.

## Rules

- Login only through 1Password or a connector sign-in. Never paste it, never print it.
- Report the numbers as measured. No smoothing, no estimates for missing runs ("not measured this month").
- Nothing on the site changes from this skill; fixes go through the dashboard (reviewer's passed review, then George's final approval).
- No em dashes.

## Output

```
AI visibility, <month>
Non-brand visibility: N of M answers (last month N2)
Pages cited: N | Spanish non-brand: N of M | Brand correct: N of M
By theme: <theme> N of M (+/-), ...
Flipped to named: ... | New names instead of him: ...
Fixes sent to dashboard: <count> (links)
```

## Try saying

"Run the monthly AI visibility check."

## Make it yours

Add a theme when George starts a new focus, as a new group so earlier months stay comparable.
