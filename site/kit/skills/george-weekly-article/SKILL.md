---
name: george-weekly-article
description: >-
  Use for George's Thursday article, a "Bible Questions Answered" post, or when he says "draft
  Thursday's article," "write a post on <question>," or "turn this question into an article." Answers
  one hard Bible question in his voice, story-led, with scripture as text, ready for Google and AI
  answer engines, and packaged with its Substack and social versions.
---

# Thursday article

One hard Bible question, answered clearly and told the way George tells it.

## Inputs

- The question (from `calendar/` or George). If none, propose three from the calendar and his past readers' questions.
- His notes, sermon transcript or outline, if any (preferred source).
- `voice/VOICE.md`, `voice/gold/`, BRAIN.md (translation preference, series, links).

## Steps

1. george-session-start.
2. **Title** as the question readers search ("What Does the Parable of the Pearl Mean?").
3. **Answer first:** the plain answer in the first two sentences. This is what Google and AI tools quote.
4. **Then his way:** open the body on a scene, a person or a moment from George's life or notes. Never invent one; if none was given, ask, or open on the text itself.
5. **Scripture as text,** with book, chapter and verse, in his translation. Never an image only.
6. **Teach** with his reasoning from his notes. Mark anything he hasn't stated as `[check]`.
7. **Close** with one practical line for the reader's week and a link to the related video or book if there is one. No moral-summary paragraph.
8. **Package** (george-repurpose): Substack version, Facebook and Instagram captions, podcast notes, and a short meta description (under 155 characters) plus FAQ schema text for the site.
9. george-slop-check, then george-approval-queue posts one "Thursday article package" version.

## Rules

- 700 to 1,200 words unless George says otherwise.
- Drafts only. Publishing waits for Approve in the dashboard.
- No invented quotes, stats, church history dates or scholars. `[check]`.
- No em dashes.

## Output

The package in the dashboard queue: article, Substack post, captions, podcast notes, meta description, FAQ text, slop report.

## Try saying

"Draft Thursday's article: why are there four Gospels instead of one?"

## Make it yours

Change the length, add a recurring closing line, or add his series names. Keep "answer first, then story."
