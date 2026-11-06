# 40 · Thumbnail System
> One photo session, one reusable HyperFrames template and a short list of rules, so every episode gets three honest, readable thumbnails to test in about fifteen minutes.

**Run it:** `Run module 40 from my framework. Build my thumbnail system and make the three thumbnails for {{FIRST_EPISODE}}.`
**Needs first:** 14, 38, 39
**Time:** about 90 minutes to set up plus one 45-minute photo session, then about 15 minutes of agent time per episode · **GEORGE's part:** sit for the photo session, pick his favorite shots, approve the versions for each episode

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{HEADSHOT}} | The folder of 20 to 30 expression photos from the session in step 1 | ask George once; files live in `~/videos/thumbnail-photos/`, never in git |
| {{BRAND_LOOK}} | Fonts, colors and logo for video graphics | `design/DESIGN.md` (module 14) and the episode template (module 39) |
| {{SERIES_BADGES}} | Each series' short name, badge text and one color | the series plans in `projects/youtube/series/` (module 38) |
| {{ACCENT_COLOR}} | The one color used to lift one word on a thumbnail | pick from {{BRAND_LOOK}}; must pass contrast on dark and light backgrounds |
| {{PHOTOGRAPHER}} | Who takes the photos (a friend, a church member, a hired photographer, or a tripod and timer) | ask George |
| {{FIRST_EPISODE}} | The first episode to thumbnail | the newest file in `projects/youtube/episodes/` |

## Why this matters
On YouTube the thumbnail and title are the whole storefront. A great study with a weak thumbnail never gets watched. Theology channels that grew fast fixed thumbnails early: Gavin Ortlund (Truth Unites) has said he is embarrassed by his old ones, and his current ones follow a clear shape. His face sits on one side in a thinking pose, and two to five large words add a tease the title doesn't say. A small brand badge stays in the same corner every time, over a dark, relevant background. Copy the method, not his brand. Across teaching channels in this niche (Truth Unites, Mike Winger, Wes Huff) the pattern is the same: one face with a clear expression or thinking pose, a few large words, strong contrast with one accent color, and a consistent badge. The big exceptions (BibleProject's illustrations, Ligonier's speaker photos) are brands people already know by the series; a growing channel needs the face. A fixed system also means George never starts from a blank canvas: one photo library, one template, one checklist.

## Steps
1. **Hold one photo session for 20 to 30 expressions.** Plan 45 minutes with {{PHOTOGRAPHER}}, in the clothes and setting George films in, with soft light from one side and a plain background (it gets removed later). Shoot each expression a few times, looking at the lens and looking off to the side:
   - thinking (hand on chin, head tilted)
   - explaining (open hand, mid-sentence)
   - surprised but real (eyebrows up, not a cartoon face)
   - serious and direct
   - warm and smiling
   - skeptical or curious
   - holding an open Bible
   - holding one of his books
   - pointing to the side where text will go

   Save the best 20 to 30 to {{HEADSHOT}} named by expression (`thinking-01.jpg`, `bible-open-02.jpg`). *Check:* the folder has at least 20 sharp photos covering every expression in the list.
2. **Cut George out once per photo.** Run `npx hyperframes remove-background <photo> -o cutouts/<name>.png --quality best` for each photo. Read each PNG and redo any with hair or hand edges chewed off. *Check:* every photo has a clean transparent cutout in `{{HEADSHOT}}/cutouts/`.
3. **Write the thumbnail rules into `design/DESIGN.md`** (a "Thumbnails" section):
   - George's face on one side (pick right or left and keep it), large, cropped at the chest or shoulders.
   - 2 to 4 words of large text on the other side (the niche runs 2 to 5; fewer reads better on a phone). The words **add to** the title and never repeat it. Title "Why Are There Four Gospels?" pairs with "ONE JESUS, FOUR PORTRAITS," not "FOUR GOSPELS."
   - One word in {{ACCENT_COLOR}}, the rest white or near-white.
   - High contrast: dark or blurred background, text with a subtle shadow, nothing light on light.
   - A context image behind him when it helps: a painting, manuscript, map or the passage's setting (public domain or licensed only).
   - A small series badge from {{SERIES_BADGES}} in the same corner every time.

   *Check:* each rule is specific enough that a reviewer can say yes or no.
4. **Write the never list** into the same section, and treat any hit as a fail:
   - fake shock faces, gasps or open-mouth reactions
   - red arrows, red circles, emoji
   - clickbait: any promise the episode doesn't keep
   - AI-generated or AI-altered faces of George (or anyone else)
   - scripture misquoted, or a reference that isn't in the episode
   - attendees' faces without their written consent (module 38)
   - another creator's thumbnail copied or their face used without permission

   *Check:* the never list is in `design/DESIGN.md` and george-design-check reads it.
5. **Set the series badges.** For each series in {{SERIES_BADGES}}: a short label (two or three words), one color, and the same size and position. Keep series colors distinct from each other and from {{ACCENT_COLOR}}. *Check:* a sheet with every badge side by side is saved to `projects/youtube/thumbnails/badges.md` with the color codes.
6. **Build the reusable template.** `npx hyperframes init ~/videos/thumbnail-template`, then, with the hyperframes skill, make a 1280×720 still composition (`data-no-timeline` on the root) that declares its variables with `data-composition-variables`: `text` (string, max 30 characters), `accent_word` (string), `photo` (the cutout path), `side` (left or right), `series_label` (string), `series_color` (color) and `background` (image path). Bind them with `data-var-text`, `data-var-src` and `var(--series_color)`; fonts and colors come from {{BRAND_LOOK}}. *Check:* `npx hyperframes check --json` passes with no contrast or layout errors.
7. **Render a still.** For each version, write a variables file (`vars-a.json`, `vars-b.json`, `vars-c.json`), run `npx hyperframes render --variables-file vars-a.json --strict-variables --output out/thumb-a.mp4`, then save frame 0 as the image with `ffmpeg -i out/thumb-a.mp4 -frames:v 1 out/thumb-a.png`. For a quick look while designing, set the variable defaults and run `npx hyperframes snapshot --at 0` instead. *Check:* each PNG is exactly 1280×720 (`ffprobe` or `sips -g pixelWidth -g pixelHeight`) and under 2 MB.
8. **Make three versions per episode.** Make them clearly different, because YouTube's test runs longer and settles less when versions look alike. A good set: (A) face plus the question in a few words, (B) the passage or a painting with a bold phrase, (C) a striking line George said in the study. Use george-thumbnail for the word options. *Check:* every PNG exists and the episode file names what makes each version different.
9. **Review at phone size.** Shrink every version to 360 pixels wide (phone home feed) and 168 pixels wide (search and suggested list) and look at both. The words must be readable and George's expression clear at 168 pixels. Then run george-design-check against the rules and the never list. *Check:* both sizes are saved next to each full image and the design check says PASS for every version.
10. **Test with YouTube's "Test & compare."** Turn on advanced features in YouTube Studio once (it needs them). Then, for each long-form episode, upload up to 3 versions with "Test & compare." YouTube shows them to different viewers and picks the winner by **watch time share**, not click-through rate, and reports Winner, Performed Same or Inconclusive. It can't test Shorts or scheduled live streams, and a premiere becomes testable only after it ends (a live archive can be tested too). If the feature isn't available, rotate them a week at a time (A, then B, then C) and compare. *Check:* the episode file records which test ran, when it ends and its result. Keep the winning style as the template default.
11. **Keep a swipe file.** In `projects/youtube/thumbnails/SWIPE.md`, add any thumbnail (George's or others') that stopped him or performed well: a link, one line on why it works, and which rule it shows. Add George's own winners after every test with their click-through rate. Never copy one outright. *Check:* the swipe file has at least five entries before episode three.
12. **Track click-through rate in the scoreboard.** Add these to module 29 from YouTube Studio analytics, per episode, at 7 and 28 days: impressions click-through rate (against George's own channel average), the share still watching at 30 seconds, average view duration, returning viewers, subscribers gained, and the "Test & compare" result. YouTube says half of all channels sit between 2% and 10% click-through, and that small channels' rates swing a lot, so compare with his own average, not other channels. Always read click-through with view duration: high clicks with short viewing means the thumbnail promised something the episode didn't keep. Note each test's winner in the swipe file. *Check:* the scoreboard shows these numbers for the latest episode.

## GEORGE does
- Sits for the photo session and picks his favorite shots.
- Approves the thumbnail rules and the never list.
- Turns on advanced features in YouTube Studio once.
- Approves the versions for each episode in the dashboard, and uploads them to "Test & compare" until upload is automated.

## Done when
- [ ] {{HEADSHOT}} has 20 or more expression photos and clean cutouts
- [ ] `design/DESIGN.md` has the Thumbnails section and the never list, and George approved it
- [ ] The thumbnail template passes `check` and renders a 1280×720 PNG from a variables file
- [ ] {{FIRST_EPISODE}} has three clearly different versions that pass the phone-size review and the design check
- [ ] The swipe file exists, and click-through rate with view duration is on the scoreboard

## Writes to
- `design/DESIGN.md` (Thumbnails section), `projects/youtube/thumbnails/badges.md`, `projects/youtube/thumbnails/SWIPE.md`, the episode file's thumbnail section, `WORKLOG.md`, a handoff. Photos, cutouts, the template and rendered images stay in `~/videos/`, never in git.

## Next
- Run george-thumbnail for every new episode; 29 to review click-through rate each month
