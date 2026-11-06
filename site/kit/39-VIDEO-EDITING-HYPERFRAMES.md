# 39 · Video Editing with HyperFrames
> Turn George's filmed Bible studies into finished long-form episodes, Shorts and thumbnails, edited by his Claude with HyperFrames, which he can watch and adjust in a visual editor before anything is posted.

**Run it:** `Run module 39 from my framework. Set up HyperFrames and edit my first episode from the study footage in {{FOOTAGE_FOLDER}}.`
**Needs first:** 09, 12, 16, 38
**Time:** about 60 minutes to set up, then about 30 to 60 minutes of agent time per episode · **GEORGE's part:** drop the footage in the folder, watch the cut in Studio, approve the package

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{FOOTAGE_FOLDER}} | Where George's study recordings land (camera card, phone, or a synced folder) | ask George once |
| {{EPISODE_PLAN}} | The episode outline from module 38 (title, the one question it answers, chapter list) | `projects/youtube/episodes/<slug>.md` |
| {{BRAND_LOOK}} | Fonts, colors, logo, lower-third style | `design/DESIGN.md` (module 14) |
| {{HEADSHOT}} | A few good photos of George for thumbnails | ask George; store in `assets/` of the video project, not in git if they are large |
| {{CREDENTIAL_LINE}} | The short line under his name (for example "Pastor and author of The Four Faces of Christ") | ask George; keep it under 50 characters |
| {{RENDER_PLACE}} | Render on his laptop, or in HyperFrames' cloud when a long episode is too slow locally | decide after the timing test in step 6 |

## Why this matters
George already teaches every week. Filming those studies and editing them well is the fastest way to a steady long-form channel without writing new material. HyperFrames is a tool that builds video from HTML, so Claude can do the editing work in plain files: trims, captions, title cards, scripture on screen, chapter cards, lower thirds, end screens, Shorts and thumbnails. George sees every edit in a visual timeline (Studio) and can drag, trim or retype anything himself. Every render is identical, so the same template gives every episode the same polished look.

## What HyperFrames does (and doesn't)
- **Does:** cut a long recording into a tight episode, add captions from an automatic transcript, put scripture references and verses on screen, add title, chapter and end cards, lower thirds with his name, background music, cutouts of George for thumbnails, vertical Shorts from the best moments, and render the final MP4.
- **Runs on:** his laptop with Node.js 22 or newer and FFmpeg installed (`npx hyperframes doctor` checks both). Local rendering and the free tools (transcription with Whisper, background removal, on-device voice) need no account. Some optional extras (premium voices, avatars, AI clipping) run through HeyGen and cost money; they're off unless George turns them on.
- **Doesn't:** film for him, fix bad audio completely, or decide what's true. Long renders can be slow on a laptop; step 6 measures it before he commits to a full episode a week.

## Steps
1. **Install HyperFrames and its skills.** In a local Code session, run `npx hyperframes doctor` and install anything it reports missing (Node.js 22+, FFmpeg). Then install the official HyperFrames agent skills with the command `npx hyperframes skills --help` shows (they come from HyperFrames itself; they're not part of this kit and update on their own). *Check:* `npx hyperframes doctor` passes and the `hyperframes` skill appears in Claude's skill list.
2. **Make the episode template once.** `npx hyperframes init ~/videos/study-template` and build, with the hyperframes skill: an intro card (series name and episode question), a lower third ("George Shamblin · {{CREDENTIAL_LINE}}"), a scripture card (reference plus verse text, his translation), a chapter card, captions in a calm style (4 to 6 words a line, never over his face), an end card (next episode and subscribe), all using {{BRAND_LOOK}} as variables so each episode only swaps text and footage. *Check:* `npx hyperframes check --json` passes and a 20-second sample renders cleanly.
3. **For each episode, copy the template** to `~/videos/<episode-slug>/` and put the study recording in its `assets/`. *Check:* `npx hyperframes snapshot --at 5,60` shows the footage in frame (read the PNGs it writes).
4. **Transcribe.** `npx hyperframes transcribe assets/<file> --model small.en --json` (use `--model medium.en` if there's music or a noisy room). Read the transcript: if it has nonsense words or many unknown tokens, retry with the larger model. Save a cleaned copy to `projects/youtube/episodes/<slug>-transcript.md` in george-os (text only; no attendee names unless they agreed to be named). *Check:* scripture references in the transcript match what George said.
5. **Cut from the transcript.** Using {{EPISODE_PLAN}}, mark keep and cut ranges in the transcript: opening small talk, logistics, long pauses, side conversations, and anything said by attendees who didn't consent to be recorded. Start with `npx hyperframes history begin --who claude --label "<episode> cut"` so every edit can be undone. Apply the cuts with the timeline commands (`npx hyperframes timeline trim|split|delete … --plan --json`, then without `--plan`; save each receipt so `timeline undo` can revert it). Cuts leave gaps: after the cuts, move the remaining clips up so they play back to back (`timeline move`), retime captions and cards to match, and set the root `data-duration` to the new end (no command changes it for you). Add chapter cards at the plan's chapters and scripture cards where he reads a passage. Target length comes from module 38 (25 to 50 minutes, built around one question). The first 30 seconds must state the episode's question and why it matters: lift that moment from later in the study, or add a short title card with the question, so it never opens on the room settling in. *Check:* `timeline --json` shows no gaps between clips and the last clip ends at `data-duration`, and the cut plays start to finish in preview with no jump in the middle of a sentence.
6. **Timing test, first episode only.** Make a temporary copy of the project with its root `data-duration` set to 300 (five minutes), render that copy with `npx hyperframes render --quality draft`, time it, then delete the copy. Multiply up. If a full episode would take too long on the laptop, render overnight first. Cloud rendering is a last resort and is **GEORGE's decision**: it uploads the project, including the source recordings, to an outside service and may cost money, and uploads are limited to 200 MB. Before asking him, make a cloud-only copy whose source media has every unconsented attendee's footage and audio removed (re-export the trimmed recording with FFmpeg, not just timeline cuts), run `npx hyperframes cloud render <project> --dry-run --json` to confirm the upload size (it does not show cost), check his HeyGen account's remaining allowance and price for the render length in the account page, and show George the size and the cost. Upload only after he approves. *Check:* the decision, and George's approval if cloud was chosen, is written in `decisions/`.
7. **George reviews in Studio.** Run `npx hyperframes check --json` and fix every error, then `npx hyperframes preview --background` and send George the address and ask George to watch the cut, fix any line, and say "good." *Check:* George's "good" or his list of changes is in the episode file.
8. **Render the final** with `npx hyperframes render --quality delivery --output out/<slug>.mp4`. *Check:* the file is not empty, its `ffprobe` duration matches the project's `data-duration`, and a few decoded frames look right. End with `npx hyperframes history end`.
9. **Make the Shorts.** Pick 3 to 5 moments of 30 to 60 seconds that stand alone (a clear question and answer, a story, a striking line). Build each as a 1080×1920 vertical composition with large captions and a one-line hook card. *Check:* each Short makes sense with the sound off.
10. **Make the thumbnail** from the thumbnail template in module 40: a cutout of George (`npx hyperframes remove-background` on a {{HEADSHOT}}), two to four words that add to the title, high contrast, his brand colors, 1280×720. Render it as a still frame and make three clearly different versions for YouTube Test & Compare (module 40). *Check:* all three read clearly at phone size.
11. **Package and queue.** Post one dashboard item (channel `youtube`) with the episode file, Shorts, three thumbnails, title options, description with chapters and scripture references, tags, and the pinned comment from george-video-package. It goes through the two-person review like everything else. *Check:* the item shows in Going out with the scheduled time.

## GEORGE does
- Records the studies (module 38 covers setup and consent) and drops the files in {{FOOTAGE_FOLDER}}.
- Watches the cut in Studio and says "good" or lists changes.
- Approves the package; uploads to YouTube until upload is automated.

## Done when
- [ ] HyperFrames and its skills are installed and `doctor` passes
- [ ] The episode template exists and passes `check`
- [ ] One full episode, its Shorts and three thumbnails are rendered, reviewed in Studio and approved in the dashboard
- [ ] The render-time decision is recorded

## Writes to
- `projects/youtube/episodes/<slug>.md` and `<slug>-transcript.md`, `decisions/NNNN-video-render.md`, `WORKLOG.md`, a handoff. Video files stay in `~/videos/`, never in git.

## Next
- 38 for the publishing rhythm and what to film next; 29 to add channel numbers to the scoreboard
