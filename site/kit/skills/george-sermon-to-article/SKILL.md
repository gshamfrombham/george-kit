---
name: george-sermon-to-article
description: >-
  Use when George has a sermon, Bible study, talk or voice memo and says "turn this sermon into an
  article," "write this up," "make shorts from this talk," or uploads a transcript or recording notes.
  Turns his spoken teaching into an article draft and short scripts, keeping his words and positions.
---

# Sermon to article

His teaching, written down without being rewritten into someone else's.

## Inputs

- A transcript (from his recording tool, a document, or pasted text). If only audio exists, ask George to get a transcript first; don't guess the words.
- The title, date and setting (church, CEL, mission trip) if he gives them.

## Steps

1. Read the full transcript. Mark the main point, the scriptures used, the stories told, and lines that are quotable as he said them.
2. **Outline** in his order. Don't reorder his argument.
3. **Article draft** (george-weekly-article shape): question title if one fits, answer first, then his story and teaching, using his own sentences where they read well on the page. Clean up speech filler only.
4. **Three short scripts** (30 to 60 seconds) from the strongest moments, each with a caption.
5. **List of [check] items:** any name, date, statistic or quote he cited, to confirm.
6. Save the transcript and outline in `projects/sermons/<date>-<slug>/`.
7. george-slop-check, then george-approval-queue.

## Rules

- His positions only. Never add theology, applications or illustrations he didn't give.
- Don't polish away his voice; keep his phrasing.
- Private pastoral content (names, prayer requests, counseling stories) is removed unless George says it's public.
- No em dashes.

## Output

Article draft, three short scripts with captions, [check] list, saved source files.

## Try saying

"Here's Sunday's transcript. Turn it into Thursday's article and three shorts."

## Make it yours

Add the places he teaches and how he wants each credited (for example "From a message at The Center for Executive Leadership").
