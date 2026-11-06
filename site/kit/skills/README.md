# George's skills kit

Thirty-three ready-to-use skills for George's Claude. Each one turns a recurring job into one sentence. He doesn't need to remember names: ask in plain words and Claude picks the right one. They are George's copies. Change them however he likes.

**The same rules in every skill:** drafts only, and George (or the approver he names) decides in the dashboard. Nothing is sent, posted, published or paid without an Approve. No made-up facts, quotes, numbers or scripture references; anything unsure is marked [check]. No passwords or keys in chat. Everything for publication passes george-slop-check. No em dashes.

## Memory and running the work

| Skill | What it does | Try saying |
|---|---|---|
| george-session-start | Reads the brain so nobody re-explains anything | "Start up and tell me where we are." |
| george-handoff | Saves what happened and what's next to the brain | "Wrap up and save everything." |
| george-brain | Remembers a fact, person, project or decision, once | "Remember that the Cuba trip is March 14 to 21." |
| george-coach | Runs a big job step by step with proof | "Coach this: set up the dashboard." |
| george-weekly-brief | Sunday brief: shipped, waiting, next, stuck | "Weekly brief, please." |

## Writing that sounds like George

| Skill | What it does | Try saying |
|---|---|---|
| george-voice | Writes in his voice from his own best posts | "Make this sound like me." |
| george-slop-check | Catches AI-sounding writing before anyone sees it | "Slop check this." |
| george-weekly-article | The Thursday Bible-question article, packaged | "Draft Thursday's article on why there are four Gospels." |
| george-video-package | Tuesday video script, or a long-form episode's upload pack | "Video package for Torchbearers episode 6." |
| george-repurpose | One piece into Substack, social and podcast versions | "Repurpose Thursday's article." |
| george-sermon-to-article | Sermon transcript into an article and shorts | "Turn Sunday's sermon into an article." |
| george-interview-pitch | Podcast and radio pitches, one-sheet, prep | "Pitch me to three podcasts." |
| george-book-promo | Honest promotion for his books | "Six weeks of posts for The Four Faces of Christ." |
| george-email | Draft-only emails from the right identity | "Draft a reply to Pastor Luis." |

## G's Plan and The Overseas Initiative

| Skill | What it does | Try saying |
|---|---|---|
| george-gsplan | A frame his Claude fills in for G's Plan, then runs | "Fill in the G's Plan skill and ask me what's missing." |
| george-missions-update | TOI updates in English and Spanish | "Draft the November TOI update." |
| george-donor-thanks | Personal thank-yous for TOI gifts | "Draft this week's thank-yous." |
| george-trip-planner | Trip timelines, team packets, comms plans | "Plan the March Cuba trip." |

## Website and design

| Skill | What it does | Try saying |
|---|---|---|
| george-premium-page | Pages that look designed, with a design brief first | "Build a landing page for The Relay." |
| george-design-check | A separate review for generated-looking design | "Design check this page." |
| george-site-update | Webflow drafts; publishes only approved versions | "Put the approved article on the site." |

## Dashboard, automation and safety

| Skill | What it does | Try saying |
|---|---|---|
| george-approval-queue | Sends work to the dashboard and publishes what's approved | "Put this in the queue." |
| george-dashboard-data | Pulls real numbers into the dashboard | "Update the dashboard numbers." |
| george-managed-agent-brief | Turns a recurring job into a safe automation | "Make the Sunday brief run by itself." |
| george-secrets | Keeps passwords and keys out of chats | "Connect the dashboard token safely." |

## Marketing command center

| Skill | What it does | Try saying |
|---|---|---|
| george-command | George's short commands, answered from the brain and the dashboard | "Status." |
| george-meta-post | Facebook and Instagram post packages; a person schedules them | "Facebook and Instagram posts for Thursday's article." |
| george-meta-ads | Complete ad briefs and honest results; never launches or changes spend | "Write an ads brief for The Relay." |
| george-email-campaign | Newsletters and sequences with a test send first; never sends | "Write a welcome sequence." |
| george-ai-visibility | Monthly AI visibility check per theme; fixes go to the dashboard | "Run the monthly AI visibility check." |

## YouTube long-form

| Skill | What it does | Try saying |
|---|---|---|
| george-series-plan | Plans a 6 to 10 week Bible-study series as episodes, one question each | "Plan an eight-week series on Romans." |
| george-study-to-episode | Edits one filmed study into an episode and Shorts with HyperFrames | "Edit Romans week 3 into an episode." |
| george-thumbnail | Three readable, honest thumbnails per episode, ready to test | "Thumbnails for Romans week 3." |

## Installing

**Claude Code** (desktop app Code tab in a local session, or a terminal): `bash install.sh`. It copies each `george-*` skill into `~/.claude/skills/` and touches nothing else.

**Claude app (web or desktop chat):** `bash install.sh --zip` makes one zip per skill in `zips/`. In Claude, turn on code execution (Settings > Capabilities), then upload each zip at **Customize > Skills** and switch it on. Read a skill before switching it on.

**Also** commit this folder into `george-os/skills/` so the brain carries the kit.

## Making them yours

Edit any installed skill directly. Re-running `install.sh` will **never overwrite a skill that was edited**. It keeps George's copy and saves the kit's newer version in `~/george-os/upstream/skills/<name>-<date-time>/` (a new folder every run, never overwritten) with a note, so his agent can compare and merge only what he wants. Skills he hasn't touched update normally.

`george-design-check` includes material adapted from Hallmark (MIT License); see its `LICENSE-NOTICE.md`.
