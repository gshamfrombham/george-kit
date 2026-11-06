---
name: george-series-plan
description: "Use when George plans a run of filmed Bible studies for YouTube: \"plan a series,\" \"plan the next study series,\" \"turn my study on Romans into episodes,\" \"episode list for the fall study,\" or \"what should each week cover.\" Plans a 6 to 10 week series as episodes, one question per session, with question-first titles with the passage in parentheses, chapter beats, Shorts moments, scripture list and a consent reminder, for dashboard review."
---

# Series plan

Each week of the study becomes one episode that answers one question. The plan is ready before the first camera rolls.

## Inputs

- The book, theme or passage, the number of weeks (6 to 10) and the study dates, from George or `calendar/`.
- His notes, outline or the curriculum he teaches from.
- `voice/VOICE.md` for titles; `design/DESIGN.md` for the series badge color (module 40).
- Past series in `projects/youtube/series/` so nothing repeats.

## Steps

1. george-session-start.
2. **Name the series** in plain words, with a one-sentence promise ("Eight weeks in Romans for people who stopped reading after chapter 3"). Propose a short badge label and one color (module 40), and the series playlist name.
3. **One question per session.** Write the single question each week answers, the way a viewer would type it into search ("Does God still keep his promises to Israel?"). No two weeks answer the same question.
4. **Titles:** two options per episode, the question first and the passage in parentheses: "Does God Hear Unanswered Prayer? (James 5)." Never a passage alone ("James 5:13-18") and never a part number leading the title; "Part 3 of 8" goes in the description. Honest, no clickbait. A passage-only title is a library label, and those get few views even on big channels.
5. **Chapter beats:** 4 to 7 per episode, in teaching order, each with the passage it covers. These become the YouTube chapters and chapter cards (module 39).
6. **Shorts moments to watch for:** 2 to 4 per episode, a clear question and answer, a story, or a striking line George is likely to say. These guide the filming and the cut.
7. **Scripture list:** every passage per week with its reference, in his translation. Anything unsure is marked `[check]`.
8. **Consent reminder:** who will be on camera or heard, the release form from module 38, and a note to keep anyone without consent out of frame and out of the audio.
9. **Filming notes:** date, room, target length (25 to 50 minutes after the cut), a lapel or boom mic on George (clean audio matters more than the camera), and anything to bring (a map, a book, a whiteboard). Remind George to state the question early so the episode opens on it in the first 30 seconds. No study is ever uploaded raw; every one goes through george-study-to-episode.
10. george-slop-check on titles and the promise line, then george-approval-queue as a level 2 item: {{REVIEWER}}'s passed review, then George's approval. Nothing is published from a plan.

## Rules

- Drafts only. No invented quotes, history or numbers; scripture quoted exactly or marked `[check]`.
- One question per session. If a week needs two, split it.
- Every title leads with the question; the passage goes in parentheses.
- No em dashes.

## Output

`projects/youtube/series/<slug>.md` with the series name, promise, badge, playlist, and per week: the question, two titles, chapter beats, Shorts moments, scripture, consent note and filming notes. One dashboard item linking to it.

## Try saying

"Plan an eight-week series from the Wednesday study on Romans, starting January 14."

## Make it yours

Add his favorite series formats and the questions people keep asking him to BRAIN.md. The skill will reuse them.
