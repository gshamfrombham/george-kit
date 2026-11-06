---
name: george-thumbnail
description: "Use for any YouTube thumbnail for George: \"make the thumbnail,\" \"thumbnail for this episode,\" \"thumbnail words,\" \"thumbnail options,\" or \"check this thumbnail.\" Runs module 40 for one episode: 2 to 4 word options that add to the title, three clearly different versions from the HyperFrames template, a phone-size check and a design check, for dashboard review."
---

# Thumbnail

Three honest thumbnails per episode, readable on a phone, from the template George already approved.

## Inputs

- The episode file in `projects/youtube/episodes/<slug>.md` (title options, the one question, chapters).
- The Thumbnails section and never list in `design/DESIGN.md` (module 40).
- The expression photos and cutouts in {{HEADSHOT}}, the series badge from `projects/youtube/thumbnails/badges.md`.
- The template in `~/videos/thumbnail-template/` and the swipe file `projects/youtube/thumbnails/SWIPE.md`.

## Steps

1. george-session-start. Read the title options and the episode's one question.
2. **Word options:** write six options of 2 to 4 words each. Every option adds to the title (a tease, a stake, a surprising angle) and never repeats it. Mark one word for the accent color. Nothing the episode doesn't deliver.
3. **Pick the photo:** match the expression to the words (thinking for a question, serious for a warning, Bible open for a passage). Never an AI-made or AI-altered face.
4. **Three versions** for "Test & compare." Make them clearly different (look-alikes make the test run long and come back Inconclusive): A is the face plus the question in a few words, B the passage or a painting with a bold phrase, C a striking line George said. Write `vars-a.json`, `vars-b.json` and `vars-c.json` with text, accent word, photo, side, series label, series color and background.
5. **Render:** `npx hyperframes render --variables-file vars-a.json --strict-variables --output out/thumb-a.mp4`, then `ffmpeg -i out/thumb-a.mp4 -frames:v 1 out/thumb-a.png`. Same for each version. Confirm each PNG is 1280×720 and under 2 MB.
6. **Phone-size check:** shrink each to 360 and 168 pixels wide and look at them. The words read and the expression is clear at 168, or redo it.
7. **Design check:** george-design-check against the thumbnail rules and the never list. Fix and re-check until PASS.
8. Write the thumbnail section in the episode file: each word set, the photo used, what makes each version different, and the test plan. "Test & compare" (needs advanced features; picks by watch time share; can't test Shorts; a premiere is testable only after it ends; results are Winner, Performed Same or Inconclusive), otherwise rotate A, B and C a week each.
9. george-approval-queue as a level 2 item: {{REVIEWER}}'s passed review, then George's approval. A person uploads the thumbnails; no agent posts.

## Rules

- Never: fake shock faces, red arrows or circles, emoji, clickbait, AI-generated faces, misquoted scripture, attendees without consent.
- No em dashes in thumbnail text.
- Images stay in `~/videos/`, never in git.

## Output

Three 1280×720 PNGs, their phone-size previews, a design check PASS, and the episode file's thumbnail section, as one dashboard item.

## Try saying

"Thumbnails for Romans week 3."

## Make it yours

After each test, add the winner, its click-through rate and its average view duration to the swipe file. The skill reads it before writing word options.
