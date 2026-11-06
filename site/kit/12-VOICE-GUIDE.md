# 12 · Voice Guide
> A written guide to how George actually sounds, built only from his own writing, so every draft starts in his voice instead of a machine's.

**Run it:** `Run module 12 from my framework. Build my voice guide from my own posts.`
**Needs first:** 06, 07
**Time:** about 45 minutes · **GEORGE's part:** pick 3 or 4 more favorite posts, read the guide, edit it, take the blind test

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{GOLD_POSTS}} | 6 to 8 posts George wrote himself, before he used AI on them | the three named below, plus ask George once for his favorites |
| {{SCRIPTURE_TRANSLATION}} | The Bible translation George quotes from | his recent posts, or ask George |
| {{SIGNATURE_PHRASES}} | Phrases and turns that are his | read from the gold posts |
| {{GS_PLAN_VOICE_NOTES}} | Any voice differences for G's Plan writing | his Claude memory or Projects, or ask George |
| {{TOI_VOICE_NOTES}} | Any voice differences for The Overseas Initiative (donors, Spanish readers) | ask George; past mission-week posts |

## Why this matters
Readers can tell when a post was written by a machine, and they stop trusting it. George's older posts sound like a person: they open on his son, a hurricane, a deer stand, and they are funny and specific. If AI drafting has pulled his newer posts toward a generic explainer cadence, step 1 measures it privately, so the fix rests on his own numbers. This guide keeps the substance and puts his own voice back in front, and every writing skill reads it first.

## Steps
1. **Measure the baseline (private).** Pick his 3 most recent articles and 3 older ones he wrote himself. For each, count em dashes and stock phrases from the banned list in module [13](./13-ANTI-SLOP.md), and note how the piece opens. Record the counts only in `voice/baseline.md` in george-os, which is private. Never put these numbers on any public page. *Check:* `voice/baseline.md` has six rows with counts, titles and dates.
2. **Collect the gold posts, verbatim.** Copy these three into `voice/gold/` exactly as published, with title, date and URL at the top:
   - *Pray Until You Pray* (April 2024), which opens on his son George Jr. home from a prayer retreat.
   - *The Hunting Woods* (November 2025), opening day, pine needles that "hiss" or "shush."
   - *Showing Up Post-Isaias*, a hurricane story from Pensacola with LSU Cajuns and a kettle of jambalaya.
   Then ask George for 3 to 5 more he is proud of and add them. Never add anything an AI helped write. *Check:* `voice/gold/` holds 6 to 8 files, each with its source URL, and George confirmed every extra pick.
3. **Read for patterns, not topics.** For each gold post, note how it opens, how it turns to scripture, where the humor lands, how long the sentences run, and how it ends. Write these notes in `voice/notes.md`. *Check:* every gold post has at least five observations, each quoting a line from the post.
4. **Write `voice/VOICE.md`** from the template at [./templates/VOICE.md](./templates/VOICE.md). Cover these sections:
   - **Openings:** a person, a place, a moment. Name them.
   - **Rhythm:** long, winding sentences broken by a short punch line.
   - **Humor:** where and how he uses it (self-aware, family, Southern specifics).
   - **Scripture:** quoted as text with book, chapter and verse in {{SCRIPTURE_TRANSLATION}}, woven into the story, never dropped in as a decoration.
   - **Signature phrases:** {{SIGNATURE_PHRASES}}, each with the post it came from.
   - **Endings:** how he lands a piece (a turn back to the opening scene, a plain charge to the reader).
   - **Per-brand notes:** {{GS_PLAN_VOICE_NOTES}}, {{TOI_VOICE_NOTES}}. For Spanish, note that TOI readers get a natural Spanish version, not a word-for-word translation.
   *Check:* every rule in VOICE.md cites a gold post line as its example.
5. **Link the banned list.** VOICE.md points to `voice/banned.md`, which module [13](./13-ANTI-SLOP.md) maintains. *Check:* the link resolves.
6. **George edits.** Show George VOICE.md on one screen. He strikes what is wrong and adds what is missing. *Check:* his edits are committed with a WORKLOG line that says "voice guide edited by George."
7. **Blind test, three rounds.** Pick a topic George has written about. Have the `george-voice` skill write one paragraph. Put it next to a real paragraph of his on the same subject, unlabeled, order randomized. Ask George which is his. Repeat three times with different topics. *Check:* the skill passes when George cannot reliably pick his own (he guesses right no more than 2 of 3). If he picks his own every time, ask him what gave it away, add that to VOICE.md, and run the test again.
8. **Wire it in.** Confirm `george-voice`, `george-weekly-article`, `george-video-package`, `george-repurpose`, `george-missions-update` and `george-email` all read `voice/VOICE.md` first. *Check:* each SKILL.md names the file in its first step.

## GEORGE does
- Picks 3 to 5 more favorite posts he wrote himself.
- Reads and edits VOICE.md.
- Takes the blind test.

## Done when
- [ ] `voice/gold/` has 6 to 8 verbatim posts with URLs, all chosen or confirmed by George
- [ ] `voice/VOICE.md` exists, every rule backed by a quoted line
- [ ] George has edited and approved it
- [ ] Blind test passed (George right on 2 or fewer of 3)
- [ ] Every writing skill reads VOICE.md first

## Writes to
- `voice/baseline.md`, `voice/gold/*.md`, `voice/notes.md`, `voice/VOICE.md`, `WORKLOG.md`, a handoff

## Next
- [13 · Anti-Slop](./13-ANTI-SLOP.md)
- Re-run step 7 every quarter, or whenever George says a draft "doesn't sound like me."
