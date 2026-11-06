# 38 · Long-Form YouTube Strategy
> Grow a long-form Bible-teaching channel by filming George's weekly studies as planned series, editing them into episodes, and adding scripted essays from his Thursday articles, using what works for Truth Unites without becoming a copy of it.

**Run it:** `Run module 38 from my framework. Propose my content pillars, plan my first study series, and set up the filming and publishing plan.`
**Needs first:** 12, 13, 14, 24, 37
**Time:** about 90 minutes to set up and plan the first series, then about 1 hour a week inside the normal rhythm · **GEORGE's part:** pick the pillars and the first series, set up the room once, teach on camera, approve each package

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{CONTENT_PILLARS}} | The 3 or 4 named themes every episode belongs to | the starting proposal in step 2; George picks |
| {{STUDY_SCHEDULE}} | When and where the weekly Bible study meets, how long it runs, and the next open stretch of 6 to 10 weeks | ask George once in a batch |
| {{FIRST_SERIES}} | The first study series to film and the question each session answers | step 3, from the pillars and module 37's losing questions |
| {{RECORDING_SETUP}} | What he already owns (phone, camera, mic, light) and what the room is like (size, windows, noise) | ask George; a photo of the room helps |
| {{CONSENT_NOTE}} | The words announced and posted for attendees, and how a "yes" is recorded | step 5 drafts it; George approves |
| {{SCRIPTURE_TRANSLATION}} | The translation shown on screen and quoted in descriptions | module 12 |
| {{BOOK_LINKS}} | The page on his site for each of his three books | his site's book pages (module 37) |
| {{CADENCE}} | How often a long episode goes out at the start | suggested: one every week or two; George decides |

## Why this matters
George already teaches the Bible every week and already promised a Tuesday video. The long-form channel can grow out of work he does anyway. Truth Unites shows what that can become: its long videos get about 75% of its views, its typical long video runs about 27 minutes, and since 2024 its 20 to 30 minute videos have a median of about 51,500 views. Gavin Ortlund said viewers "actually want, like, a long academic video essay," not clickbait. Module 37 also found that AI engines almost never name George on church history (0 of 56 answers), systematic theology (0 of 21) or Bible questions (0 of 98). Each of those themes can become an episode series, and every episode becomes a written answer on his site. One warning shapes everything below: filmed sermons and studies uploaded as-is do poorly, even on very large channels. Ligonier's recent R.C. Sproul sermons, titled by passage with no chapters, get about 8,000 to 12,000 views on a channel of 1.65 million subscribers. Ortlund's sermon and devotional playlist has a typical 18,426 views, against 37,590 for his long videos. But his Genesis series, where each long video answers one contested question, has a typical 77,576, about double. Mike Winger's long live teaching sessions draw well because each title sells one sharp question, not the passage. The study is the raw material; the question is the episode. This module turns that into pillars, series and a weekly plan.

## What to learn from Truth Unites, and what not to copy
- **Learn:** a few named pillars said out loud; long, deep episodes; scripting every word of the essays; titles that ask the question people ask (37% of its titles contain a question mark); charitable responses that state the other side's strengths first (response titles have a median of about 51,600 views, against about 37,600 overall); Shorts cut from long videos (about 25% of its views, usually 1 to 3 a week); collaborations; the same episode as podcast audio; descriptions that link the books; and every video landing on the gospel.
- **Don't copy:** his brand (logo badge, colors, set or thumbnail look), his credentials framing, or his main debate circuit on Catholic and Orthodox claims unless George wants that work and is ready for it. Big-name guests and live debates came years in; they are not a starting plan.
- **George's voice is his own:** pastoral, Southern, a Bible teacher with stories from his family, the hunting woods and the church. Module 12 governs every script, title and description. His weekly study, filmed in a real room with real people, is his own way in; lean into it.

## Steps
1. **Write the strategy page.** Create `projects/youtube/STRATEGY.md` in george-os with the learn and don't-copy lists above, {{CADENCE}}, and the two tracks in step 4. *Check:* the file is on `main` and George has read it.
2. **Propose pillars; George picks.** Starting proposal for {{CONTENT_PILLARS}}, drawn from his books and module 37's themes:
   | Pillar | Draws from | Module 37 theme it targets |
   |---|---|---|
   | Christ in the Gospels | *The Four Faces of Christ*, Bible questions | Four Faces book topics, Bible questions |
   | Scripture you can trust | the inerrancy book, manuscripts, sola scriptura | Inerrancy topics, systematic theology |
   | Church and Reformation history | Torchbearers, the reformers, the early church | Church and Reformation history |
   | Faith at home and for men | *The Relay*, fathers, one-on-one discipleship | Family ministry, men's ministry, discipleship |
   George keeps, renames, merges or drops any of them, keeping 3 or 4. Every episode belongs to one. Record the choice in `decisions/NNNN-youtube-pillars.md`. *Check:* George has approved the final list, and each pillar has a playlist name.
3. **Plan the first study series before filming.** In `projects/youtube/series/<series-slug>.md`, write {{FIRST_SERIES}}: a series title, 6 to 10 sessions, and for each session one question it answers (worded the way people ask it), the main passage, three or four chapter points, and one likely Short. Pick questions from module 37's "loses" list where they fit, so each episode can win back a question. Make one file per episode at `projects/youtube/episodes/<slug>.md` (module 39 edits from it). *Check:* every session has exactly one question, and George approves the plan before the first filming day.
4. **Run two tracks and alternate them.**
   - **Track A, study series (the main track).** Film the weekly study across the 6 to 10 week series. Module 39 edits each session into ONE 25 to 50 minute episode built around that session's single question. It opens on the question and its payoff (not the room settling in) and cuts the warm-up, logistics, side talk and anyone who didn't consent. Never upload a study raw, and never title one by its passage alone.
   - **Track B, scripted essays.** Build a 15 to 30 minute essay from a Thursday article. The agent turns the article into a word-for-word script in George's voice; George reads it to the camera in one sitting. Hook shape: the question or a picture of the moment, the goal of the episode, a fair word for the other view, a numbered roadmap, and an ending that lands on the gospel.
   - **How they alternate.** The Tuesday slot carries the long episode. During a series, most Tuesdays are study episodes, and about once a month a Track B essay takes the slot. Between series, Track B carries the channel. The Thursday article is the written version of that week's question, with the episode embedded. Load this into `calendar/` (module 24). *Check:* the next 8 weeks in `calendar/` show which track each Tuesday is, and each one names its question.
5. **Set up consent before the first filming day.** Draft {{CONSENT_NOTE}}: an announcement at the start of each series, a sign at the door, and a sign-up sheet for anyone willing to appear on camera. Seat people who say no out of the camera's view, and aim the camera at George. Never show or name an attendee who didn't agree; cut their voice or blur them in the edit. No minors on camera without a parent's written permission. George repeats each question from the room aloud, so the question survives when the asker's voice is cut. Keep the consent list private in george-os, never on a public page. *Check:* George approves the wording and the sheet exists before session 1.
6. **Set up the room once, on a pastor's budget.** From {{RECORDING_SETUP}}:
   - **Camera:** a recent phone or a used mirrorless camera on a tripod at eye level, filming 1080p or 4K, in landscape, with enough battery and storage for the whole study.
   - **Sound first:** a wireless lav mic clipped to George, recording to the camera and to a backup. Audio matters more than picture.
   - **Light:** one soft light at about 45 degrees to his face, windows to the side or in front of him, never behind him.
   - **Framing:** chest up, a little headroom, his eyes about a third down the frame, books or the room behind him instead of a blank wall.
   - **Room noise:** turn off loud fans where possible, close doors, use rugs or curtains in an echoing room, silence phones.
   - **Teach to the camera:** look into the lens for the opening question and the key lines, say each scripture reference aloud, and avoid "as I said last week" unless he gives one line of context.
   Record a 2-minute test and play it back on a phone. *Check:* the test has clean speech, no echo, his face well lit, and the file reaches module 39's footage folder.
7. **Package every episode.** With george-video-package, every episode gets:
   - **Title:** the question first, the passage in parentheses, for example "Does God Hear Unanswered Prayer? (James 5)". 6 to 10 words with a clear promise. No clickbait, no "destroys," no shouting caps. Part numbers go in the description, not at the front of the title.
   - **Description:** two sentences that answer the question, "Part N of <series>", chapter timestamps, scripture references in {{SCRIPTURE_TRANSLATION}}, the books mentioned with {{BOOK_LINKS}}, and a link to the episode's page on his site.
   - **Pinned comment:** a question that invites a real answer, or a pointer to the written answer.
   - **End screen** to the next episode in the series, and the episode added to its series playlist and its pillar playlist.
   - **Thumbnail:** three clearly different options from module 40, run through YouTube's Test & Compare (it picks the winner by watch time; similar options make the test run long).
   *Check:* every package has all five parts, and its title leads with a question, before it reaches the dashboard.
8. **Make 2 to 3 Shorts per episode.** Each Short stands alone (one question and its answer, one story, or one striking line), runs under 60 seconds, and links to the full episode. Module 39 cuts them; post them on the weeks between long episodes so the channel is never quiet. *Check:* every long episode has at least two approved Shorts linked to it.
9. **Distribute every episode four ways.**
   - **Podcast:** the episode's audio goes to a podcast feed listed on Spotify and Apple Podcasts, one episode per long video.
   - **Site page:** the transcript, cleaned into a written answer that opens with the question and its direct answer (module 37's answer-first rules), with the video embedded and scripture as text.
   - **Newsletter and Substack:** a short note with the question, the answer in two lines, and the links (george-repurpose).
   - **Social captions:** from the same package.
   *Check:* each episode has a live site page, a podcast episode and a newsletter link within a week of going out.
10. **Let episodes sell the books, gently.** Tie series to chapters (a Four Faces series can give one episode to each Gospel; an inerrancy series can follow the book). Link the matching book in every description, mention it once near the close in George's own words, and use george-book-promo for launch and chapter episodes. *Check:* every description in a book-tied series links the right book page.
11. **Collaborate and respond, charitably.** Keep a short list of local pastors, seminary professors and Christian creators George respects, and propose one guest swap or conversation per series (he joins their show, they join his). For a response episode, link the work being answered, state its strengths first, answer the argument and never the person, and stay inside the pillars. George decides every guest and every response. *Check:* the list exists in `projects/youtube/collabs.md`, and every response draft names what it agrees with before it disagrees.
12. **Measure and adjust after each series.** Add a YouTube row to the scoreboard (module 29), checked per episode at 7 and 28 days:
   - **Click rate on impressions,** against George's own channel average. YouTube says half of all channels fall between 2% and 10%; small channels swing a lot, so read the trend.
   - **Share still watching at 30 seconds,** from YouTube's key moments report. A low number means the opening needs to reach the question faster.
   - **Average view duration and percentage viewed.** YouTube recommends videos people keep watching; a high click rate with short watching reads as clickbait.
   - **Returning viewers,** which a series should raise over time; subscribers gained per episode; the Test & Compare result; Shorts views; podcast plays.
   After each series, write what worked, what to drop and the next series in `projects/youtube/series/<slug>-review.md`. *Check:* the review exists and the next series plan cites it.

## Cadence and honest expectations
Start with {{CADENCE}}, one long episode every week or two, plus Shorts. Raise the pace only when packages are on time for a full series. Truth Unites took about 17 months to reach 10,000 subscribers and about 35 months to reach 30,000, publishing about one long video a week, before it grew much faster once teaching on YouTube became Ortlund's full-time work. Expect slow, real growth over the first 6 to 12 months: a library of answered questions, better numbers per episode, and more people finding the books and the site. No subscriber number is promised.

## Autonomy
All publishing stays at level 2 (module 23): the agents draft the series plans, scripts, edits, Shorts, thumbnails and packages; the reviewer checks each package; George gives final approval; George or a helper uploads and marks it published. Anything that speaks for George on a doctrinal dispute, names a guest, or answers another creator never goes above level 2.

## GEORGE does
- Picks the pillars and approves the first series plan.
- Approves the consent wording and announces it.
- Sets up the room once, then teaches the study and records the essays.
- Approves each package and Short; says yes or no to every guest and response.

## Done when
- [ ] `projects/youtube/STRATEGY.md` and the pillar decision are on `main`
- [ ] The first series is planned, one question per session, and approved
- [ ] Consent wording and the sign-up sheet are in use from session 1
- [ ] The room test passed and the first study is filmed
- [ ] The first episode shipped as one question-titled 25 to 50 minute episode (never a raw study) with its full package, 2 to 3 Shorts, podcast audio and a site page
- [ ] The YouTube row is on the scoreboard and the first series review is written

## Writes to
- `projects/youtube/STRATEGY.md`, `projects/youtube/series/<slug>.md`, `projects/youtube/series/<slug>-review.md`, `projects/youtube/episodes/<slug>.md`, `projects/youtube/collabs.md`
- `decisions/NNNN-youtube-pillars.md`, `calendar/`, the private consent list, `CONTROL.md` scoreboard row, `WORKLOG.md`, a handoff

## Next
- [39 · Video Editing with HyperFrames](./39-VIDEO-EDITING-HYPERFRAMES.md) to edit the first filmed study into an episode
- [40 · Thumbnail System](./40-THUMBNAIL-SYSTEM.md) for the thumbnails every episode uses
- [37 · GEO and SEO Strategy](./37-GEO-SEO-STRATEGY.md) so every episode page becomes a citable answer
- [29 · Control and Scoreboard](./29-CONTROL-AND-SCOREBOARD.md) to track the channel numbers
