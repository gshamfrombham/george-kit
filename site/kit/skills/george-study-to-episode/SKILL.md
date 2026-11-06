---
name: george-study-to-episode
description: "Use when George has filmed a Bible study and wants it edited into a YouTube episode: \"edit this week's study,\" \"turn the study recording into an episode,\" \"cut the Romans week 3 footage,\" or \"make the episode and Shorts from this recording.\" Runs module 39 with HyperFrames for one recording: transcript, cut plan, chapters, scripture cards, Studio review, render and Shorts, then queues it for review."
---

# Study to episode

One recording in, one finished episode and its Shorts out, with George's review in Studio before anything renders for real.

## Inputs

- The recording in {{FOOTAGE_FOLDER}} and the week's entry in `projects/youtube/series/<series>.md` (george-series-plan).
- The episode template in `~/videos/study-template/` (module 39).
- `voice/VOICE.md` for card text; `design/DESIGN.md` for the look.
- The consent list for that study (module 38).

## Steps

1. george-session-start. Copy the template to `~/videos/<slug>/` and put the recording in `assets/`. Run `npx hyperframes history begin --who claude --label "<slug> cut"`.
2. **Transcribe** with `npx hyperframes transcribe assets/<file> --model small.en --json` (use `medium.en` for a noisy room). Save a cleaned text copy to `projects/youtube/episodes/<slug>-transcript.md`, with no attendee names unless they agreed.
3. **Cut plan:** from the transcript and the series plan, list keep and cut ranges: warm-up, small talk, logistics, long pauses, side talk, and anything said or shown by someone without consent. Aim for 25 to 50 minutes. The first 30 seconds open on the question and why it matters (move George's clearest statement of it to the front if needed), never on the room settling in.
4. **Apply the cuts** with the timeline commands (`--plan --json` first, then for real), saving each receipt so it can be undone.
5. **Chapters:** place chapter cards at the plan's beats and write the timestamps.
6. **Scripture cards:** wherever George reads a passage, a card with the reference and the verse text in his translation. Check every reference against what he said; anything unsure is `[check]` and stays off screen until confirmed.
7. **Studio review:** `npx hyperframes check --json`, fix every error, then `npx hyperframes preview --background` and send George the address. Wait for his "good" or his list of changes, and record it in the episode file.
8. **Render** with `npx hyperframes render --quality delivery --output out/<slug>.mp4`. Confirm the file isn't empty, its duration matches, and a few frames look right. Run `npx hyperframes history end`.
9. **Shorts:** 2 to 3 moments (up to 5 if the study is rich) of 30 to 60 seconds from the plan's Shorts list or better ones found in the cut, each 1080×1920 with large captions and a one-line hook card. Each must make sense with the sound off.
10. Hand off to george-thumbnail (three versions) and george-video-package (long-form episode mode), then george-approval-queue as one level 2 item: {{REVIEWER}}'s passed review, then George's approval. A person uploads; no agent posts.

## Rules

- Never upload a raw recording; every study is cut, titled and reviewed first.
- Nobody appears or is heard without consent. When in doubt, cut it.
- The episode is titled around its one question with the passage in parentheses ("Does God Hear Unanswered Prayer? (James 5)"), never by passage alone. If the cut answers a different question than the plan, propose a new title.
- Chapters on every episode; the part number goes in the description, not at the front of the title.
- No invented scripture, quotes or history. No em dashes in any card.
- Video files stay in `~/videos/`, never in git.

## Output

`projects/youtube/episodes/<slug>.md` with the cut plan, chapters with times, scripture list, George's review note, render check, Shorts list and links to the files. One dashboard item.

## Try saying

"Edit Romans week 3 from the footage folder into an episode and Shorts."

## Make it yours

Add his usual cut rules (for example, always keep the closing prayer) to BRAIN.md.
