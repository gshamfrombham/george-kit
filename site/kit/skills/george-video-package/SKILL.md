---
name: george-video-package
description: >-
  Use for George's Tuesday video, a Torchbearers episode, a Systematic Theology Short, or a long-form
  Bible-study episode, or when he says "video package," "script for Tuesday," "episode package,"
  "YouTube title and description," or "chapters for this video." Builds the script (Tuesday) or the
  upload pack for an edited episode (long-form), in his voice, ready for review.
---

# Video package

George records. Everything around the recording is ready before he hits the button or the upload.

## Pick the mode

- **Tuesday video** (default): a scripted video George still has to record.
- **Long-form episode:** a filmed Bible study already edited with george-study-to-episode. No script; build the upload pack from the episode file.

## Inputs

- Topic from `calendar/` or George, and his notes or outline (Tuesday), or `projects/youtube/episodes/<slug>.md` (long-form).
- Series (Torchbearers, Systematic Theology Shorts, a study series, other) from BRAIN.md or `projects/youtube/series/`.
- `voice/VOICE.md`.

## Steps (Tuesday video)

1. george-session-start.
2. **Hook (first 15 seconds):** the question or the moment, in words he'd actually say. Two options.
3. **Script:** spoken-length sentences, about 130 to 150 words a minute, matched to the length George wants (default 6 to 9 minutes). Mark where scripture appears and quote it as text with the reference.
4. **For history episodes:** dates, names and events only from sources George trusts, each one listed at the end with `[check]` until he confirms.
5. **Upload pack:** three title options (searchable, honest, no clickbait), description (first two lines carry the answer and a link to the article or site), chapters with times as placeholders, pinned comment, thumbnail words (2 to 4 words, from george-thumbnail when there's time), and tags.
6. **Social cut:** a 30 to 60 second short script from the strongest moment, plus captions (george-repurpose).
7. george-slop-check, then george-approval-queue posts one "Tuesday video package" version.

## Steps (long-form episode)

1. george-session-start. Read the episode file, its transcript and the series plan.
2. **Titles:** three options, each the episode's question first with the passage in parentheses ("Does God Hear Unanswered Prayer? (James 5)"). Never a passage alone; the part number goes in the description.
3. **Description:** first two lines answer the episode's question; then chapters with the real times from the cut; then every scripture reference in order of appearance (each one checked against the transcript); then links to his book on the topic and the matching answer page on his site, if one exists (otherwise `[check]`).
4. **Playlist:** the series playlist, plus one topic playlist if it fits.
5. **End screen target:** the next episode in the series, or the best earlier one if the next isn't out yet.
6. **Shorts captions:** 2 to 3, one per Short from george-study-to-episode, each pointing back to the full episode.
7. **Podcast audio notes:** episode title for the feed, a two-sentence summary, chapter times, and any visual-only moment that needs a spoken line or a note in the show notes.
8. **Pinned comment and tags.** Thumbnails come from george-thumbnail.
9. george-slop-check, then george-approval-queue as a level 2 item: {{REVIEWER}}'s passed review, then George's approval. A person uploads; no agent posts.

## Rules

- George records and uploads; the package makes upload a paste job.
- No invented history, quotes, numbers or scripture references.
- No em dashes; titles in plain words.

## Output

Tuesday: script, hook options, titles, description, chapters, pinned comment, thumbnail words, tags, short script, captions, slop report. Long-form: titles, description with chapters and scripture, playlist, end screen target, links, Shorts captions, podcast notes, pinned comment, tags, slop report. One package in the queue either way.

## Try saying

"Video package for Torchbearers episode 6 on John Calvin, eight minutes." or "Episode package for Romans week 3."

## Make it yours

Add his standard intro and outro lines, his preferred video length and his description footer to BRAIN.md. The skill will use them.
