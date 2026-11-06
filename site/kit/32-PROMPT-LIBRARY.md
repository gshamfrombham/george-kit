# 32 · Prompt Library
> Every prompt George needs, ready to copy, so he never has to work out how to ask.

**Run it:** `Open module 32 and give me the prompt for <what I want>.`
**Needs first:** nothing
**Time:** none · **GEORGE's part:** copy and paste

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{FRAMEWORK_URL}} | Where this framework lives (the public page or his copy in `george-os/framework/`) | module 00 |

## Why this matters
Clear prompts get clear work. These are the exact sentences that start each part of the system, so George gets the same result every time. When a prompt works better in his words, his agent should update his local copy of this file.

## Steps
1. **Save a local copy.** Copy this file into `george-os/framework/32-PROMPT-LIBRARY.md`. *Check:* the file is on `main`.
2. **Pin the daily four.** Put the Start, End, Big job and Remember prompts in each claude.ai Project's instructions, or in a note on George's phone. *Check:* George can find them without opening this page.
3. **Improve as you go.** When George rewrites a prompt and it works better, update his local copy and log it in `FEEDBACK.md`. *Check:* the change is on `main`.

## Daily
**Start any session**
> Read BRAIN.md, NOW.md and the three newest handoffs in george-os. Tell me in one line what you picked up, then wait.

**End any session**
> Wrap up: add a WORKLOG line, write a handoff (done, where we stopped, next, open questions), update NOW.md, then pull, rebase and push to main. Tell me the commit.

**A big job**
> Use george-coach. Make projects/<job>.md with the goal and a checkbox per step, do the steps, and tick each box with proof as you go. Push a checkpoint every 30 minutes. If you run long, write a handoff before you stop.

**Remember something**
> Use george-brain: remember that <fact>. Source: <where it came from>.

**Context got lost**
> You've lost track. Run george-session-start, rebuild where we stopped from the handoffs and the project checkboxes, and tell me what you think we were doing before you do anything.

**From a claude.ai Project (can't save)**
> Make a handoff note of what we decided and made here, formatted for george-os, so I can paste it into Claude Code.

**In Claude Code, filing that note**
> File this handoff note into george-os, update NOW.md, and push to main.

## Writing
**Thursday article**
> Use george-weekly-article: draft Thursday's article on "<question>". Answer it in the first two sentences, then tell it my way. Scripture as text with the reference. Run george-slop-check and put the package in the dashboard.

**Tuesday video**
> Use george-video-package for "<topic>": script, title, description with chapters, pinned comment and thumbnail words. Slop-check it and put it in the dashboard.

**Repurpose**
> Use george-repurpose on this week's article and video: Substack post, Facebook, Instagram and podcast notes, inside the same dashboard package.

**Sermon to article**
> Use george-sermon-to-article on this transcript: one article draft and three short pieces, in my voice.

**Check for AI-sounding writing**
> Use george-slop-check on this. Show me every flag, then rewrite it in my voice.

**An email**
> Use george-email: draft a reply to <person> about <topic>, from my <role> address. Draft only.

## G's Plan and TOI
**G's Plan this week**
> Use george-gsplan: what's due for G's Plan this week, what's ready, and what needs me?

**TOI monthly update**
> Use george-missions-update: draft this month's TOI update, one story, one need, one prayer, in English and Spanish. Follow the TOI privacy rule. Put it in the dashboard for the Spanish approver and me.

**Donor thank-yous**
> Use george-donor-thanks for this week's new gifts. Read them through the connector to <donation platform or restricted folder>, write one short personal note each for my approval, and save nothing about the donors in george-os.

**Trip prep**
> Use george-trip-planner for the <month> trip: timeline from 8 weeks out, packing list, forms, and team briefing. Nothing about people in the field.

## Dashboard and automation
**What needs me**
> What's waiting for my approval on the dashboard, oldest first? One line each.

**Weekly brief now**
> Use george-weekly-brief and include the scoreboard.

**Make a job automatic**
> Use module 19 to decide how to automate "<job>", then set it up at autonomy level 1 and show me the first run before anything goes live.

**Brief a Managed Agent**
> Use george-managed-agent-brief to write the agent brief for "<job>", with its tools, its stop rule, its time limit and where its output lands.

## Fixing and improving
**Something broke**
> Run module 30. Here's what happened: <describe>.

**Feedback for Trevor**
> Run module 31: collect this round's feedback and write the summary for me to send Trevor. Remove anything private.

**An update arrived**
> Run module 31 step 6: download the new kit version into upstream/, compare it to my files, and write a proposal. Don't change anything yet.

## Running each module
Every module starts the same way:
> Run module <NN> from my framework.

| Module | Prompt |
|---|---|
| 00 | Read 00-START-HERE and tell me the plan before you start. |
| 01 | Run module 01 and explain how we'll work through this. |
| 02 | Run module 02 and save the ground rules in my brain. |
| 03 | Run module 03 and show me the system map. |
| 04 | Run module 04: inventory what I already have and interview me once. |
| 05 | Run module 05 and write my profile. |
| 06 | Run module 06 and set up george-os. |
| 07 | Run module 07 and set up the memory ritual. |
| 08 | Run module 08 and set up my Claude apps. |
| 09 | Run module 09 and set up passwords and secrets. |
| 10 | Run module 10 and install my skills. |
| 11 | Run module 11 and show me what each skill does. |
| 12 | Run module 12 and build my voice guide from my own writing. |
| 13 | Run module 13 and set up the anti-slop check. |
| 14 | Run module 14 and set my design standard. |
| 15 | Run module 15 and explain the dashboard plan. |
| 16 | Run module 16 and build the dashboard. |
| 17 | Run module 17 and connect my data to the dashboard. |
| 18 | Run module 18 and set up team access. |
| 19 | Run module 19 and sort my recurring jobs by how to automate them. |
| 20 | Run module 20 and set up the scheduled tasks. |
| 21 | Run module 21 and set up Managed Agents with my monthly cap. |
| 22 | Run module 22 and set up the first Managed Agent recipe. |
| 23 | Run module 23 and set each job's autonomy level. |
| 24 | Run module 24 and set my weekly rhythm. |
| 25 | Run module 25 and build the G's Plan playbook. |
| 26 | Run module 26 and build the TOI playbook. |
| 27 | Run module 27 and set my boundaries. |
| 28 | Run module 28 and set up each publishing channel. |
| 29 | Run module 29 and set up the scoreboard. |
| 30 | Run module 30. Here's what went wrong: <describe>. |
| 31 | Run module 31 and get this round's feedback ready. |
| 32 | Open module 32 and give me the prompt for <what I want>. |

## GEORGE does
- Copies and pastes. Tells the agent when a prompt didn't do what he meant.

## Done when
- [ ] A local copy is in `george-os/framework/`
- [ ] The daily four are pinned where George can find them
- [ ] Improvements George makes are saved in his copy

## Writes to
- `framework/32-PROMPT-LIBRARY.md`, `FEEDBACK.md`

## Next
- Back to [00 · Start Here](./00-START-HERE.md) for the run order
