# 24 · Weekly Rhythm
> George's week on one page: what runs when, what lands on the dashboard, and the few things only he does.

**Run it:** `Run module 24 from my framework. Set up my weekly rhythm and calendar.`
**Needs first:** 16, 20, 23
**Time:** about 30 minutes, then a dry-run week · **GEORGE's part:** confirm the days and times; record the video

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{TIMEZONE}} | Time zone | America/Chicago unless George says otherwise |
| {{VIDEO_DAY}} / {{ARTICLE_DAY}} | His public promise | Tuesday videos, Thursday articles (from his homepage) |
| {{RECORDING_TIME}} | When George usually records | ask George |
| {{GS_PLAN_CADENCE}} | What G's Plan needs each week or month, and when | his Claude memory or Projects, or ask George |
| {{TOI_CADENCE}} | TOI's rhythm (prayer updates, donor thanks, trip prep before mission weeks) | ask George |
| {{CEL_CADENCE}} | Anything weekly for his CEL pastor work | ask George |
| {{SERIES}} | Current series (Torchbearers, Bible Questions Answered, others) | `calendar/` and his site |

## Why this matters
George promised readers Tuesday videos and Thursday articles. Keeping that promise shouldn't cost him every evening. A fixed rhythm lets the agents prepare work days ahead, put it on the dashboard with time to review, and publish on schedule. George's week shrinks to the parts only he can do: record, approve, and write from the heart.

## Steps
1. **Write `calendar/RHYTHM.md`** from [./templates/CALENDAR.md](./templates/CALENDAR.md). Start from this default, all times in {{TIMEZONE}}, then adjust with George:
   | When | What runs | Lands as |
   |---|---|---|
   | Saturday 6am | Draft the {{VIDEO_DAY}} video package: script, title, description, chapters, pinned comment, plus its social captions; slop check | "Video package" on the dashboard |
   | Before {{RECORDING_TIME}} | George approves the package, then records and uploads with the ready text | George's part |
   | Wednesday 6am | Draft the {{ARTICLE_DAY}} article package: article, Substack post, social captions, podcast notes; slop check | "Article package" on the dashboard |
   | On Approve | Level 3+ jobs: the publish trigger fires; the task claims the approved version, publishes what's automatic (the website), stages paste items, logs receipts. An **hourly poll** is the backup. Level 2 jobs: no trigger; the item waits as "ready for a person to publish" with the ready text | item marked published |
   | Daily 5am | Data snapshot (module [17](./17-DASHBOARD-DATA-SOURCES.md)) | numbers on the Data screen |
   | Sunday 5pm | Weekly brief: what shipped, what's next, what's stuck, numbers that moved, missing handoffs, demotions | short brief to George's phone |
   | {{GS_PLAN_CADENCE}} | G's Plan jobs | his Claude fills these rows |
   | {{TOI_CADENCE}} | TOI jobs: prayer update, donor thanks, trip prep checklists | TOI items on the dashboard |
   | {{CEL_CADENCE}} | CEL pastor-work prep, if any | CEL items |
   | First Sunday monthly | Ladder review (module [23](./23-AUTONOMY-LADDER.md)) and voice check refresh | review item |
   | First Sunday quarterly | Team access review (module [18](./18-TEAM-ACCESS.md)) and blind voice test (module [12](./12-VOICE-GUIDE.md)) | review item |
   *Check:* George confirms every row and time.
2. **Fill the topic calendar.** In `calendar/`, list the next 8 weeks: video topic, article question, series ({{SERIES}}). The agent proposes from his series and reader questions; George edits. *Check:* 8 weeks filled and approved.
3. **Create the scheduled tasks** for each row, per module [20](./20-SCHEDULED-TASKS.md). Each starts with `george-session-start` and ends with `george-handoff`. Keep Pro usage in mind: one task per job, lean prompts, no duplicate runs. *Check:* every row has a task, and the Automations screen lists them.
4. **Dry-run week.** For one full week, every publish step stops at "draft." On Sunday, George looks back and says whether the week was right. *Check:* two successive runs each read the other's handoff from `main`, and George says go.
5. **Go live** row by row at the levels set in module 23. *Check:* the first live week ships on {{VIDEO_DAY}} and {{ARTICLE_DAY}} with receipts.

## GEORGE does
- Confirms days and times.
- Approves the video package, records the video, uploads it with the ready title and description.
- Approves the article package and pastes the Substack post (until it's automatic).
- Reads the Sunday brief.
- Taps "context lost" on the dashboard whenever he had to re-explain something.

## Done when
- [ ] `calendar/RHYTHM.md` approved by George
- [ ] 8-week topic calendar filled
- [ ] Every row has a scheduled task
- [ ] Dry-run week passed
- [ ] First live week shipped on time

## Writes to
- `calendar/RHYTHM.md`, `calendar/*`, `CONTROL.md`, `WORKLOG.md`, a handoff

## Next
- [25 · G's Plan Playbook](./25-GS-PLAN-PLAYBOOK.md)
- [26 · TOI Playbook](./26-TOI-PLAYBOOK.md)
