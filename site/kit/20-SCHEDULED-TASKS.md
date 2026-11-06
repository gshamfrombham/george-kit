# 20 · Scheduled Tasks (on George's Pro plan)
> Set up the lean weekly jobs that run in the cloud on George's Pro plan, read the brain first, and land drafts in his dashboard.

**Run it:** `Run module 20 from my framework. Set up the scheduled tasks we chose in module 19.`
**Needs first:** 06, 07, 16, 19
**Time:** about 45 minutes · **GEORGE's part:** approve GitHub access once and say yes to the dry week

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{SCHEDULED_JOBS}} | The jobs module 19 put on "scheduled task" | `projects/automation.md` |
| {{TIMEZONE}} | America/Chicago unless George says otherwise | `BRAIN.md` |
| {{DASHBOARD_API_URL}} | The dashboard's API base | module 16 |
| {{EXTRA_USAGE}} | On or off (default off) | `decisions/` |

## Why this matters
Scheduled tasks are Claude Code sessions that start on a clock or a trigger and run in the cloud, even with George's laptop closed. They come with his Pro plan, so the only cost is usage. They're a research preview and Pro has a five-hour session limit and a weekly limit shared with his chats, so keep them few, short, and focused. Each one must start from the brain and end with a handoff, or it becomes another agent that forgets.

## Steps
1. **Connect the repo.** Open claude.ai/code/routines (or the desktop app's Scheduled page). Connect GitHub and install the Claude GitHub App on the `george-os` repo. *Check:* the repo shows in the task's repository list.
2. **Let memory land on `main`.** Scheduled tasks push to `claude/` branches by default. For `george-os` only, turn on unrestricted branch pushes in the task's repository settings, so handoffs reach `main` where the next run reads them. *Check:* a test task writes `handoffs/test.md` and it appears on `main`.
3. **Add the secrets the right way.** In the task's cloud environment, add the dashboard's agent token (and any key a job needs) as a **network secret**, not a plain environment variable; plain variables are readable by anyone using that environment. *Check:* the test task calls the dashboard API successfully and the token never appears in its transcript.
4. **Write each task's prompt from the right template below**: the drafting template for jobs that make drafts, the publisher template for the one task that publishes approved items. Keep each prompt short; the skills and the brain carry the detail. *Check:* each prompt names its skill, its output, and its stop rule.
4b. **Strip connectors.** A new task can inherit George's connectors. Remove every connector the job doesn't need (a drafting job usually needs none; the publisher needs only the publishing channel's). Connectors may be able to send, post or change things whatever we intend, so an unattended task gets only what its job requires. *Check:* each task's connector list matches its job.
5. **Set the schedule** in {{TIMEZONE}}. Suggested: Saturday 6:00 for the Tuesday video package, Wednesday 6:00 for the Thursday article package, Sunday 17:00 for the weekly brief. The publish task has **no clock** of its own: it starts from the dashboard's API trigger when a person approves a level 3 item, with an **hourly** scheduled run as backup (cloud tasks can't run more often than hourly). This is where the dashboard's trigger, built and left switched off in module 16, gets its URL and is turned on. *Check:* the schedule list matches `projects/automation.md`.
6. **Run a dry week.** Every publish step stops at "draft" until George says the week looked right. *Check:* two runs in a row each name what the previous one did, read from the handoff on `main`.
7. **Watch the limits.** After the dry week, look at Settings > Usage. If tasks crowd George's own chats, move the heaviest job to a Managed Agent (module 21). *Check:* the usage note is added to `NOW.md`.

## Drafting task prompt template
```
You are running the "{{JOB_NAME}}" job for George Shamblin.
1. Pull main. Read BRAIN.md, NOW.md, voice/VOICE.md and the 3 newest handoffs.
2. Use the {{SKILL_NAME}} skill to make {{OUTPUT}} for {{WEEK_OR_ITEM}}.
3. Run george-slop-check. Fix until it passes.
4. Post it to the dashboard as a new version with george-approval-queue. Do not publish anything.
5. Write a handoff, add a WORKLOG line, pull --rebase, push to main.
Stop if anything needed is missing; write what is missing in the handoff instead of guessing.
```

## Publisher task prompt template
```
You are the publisher for George Shamblin's dashboard. You publish only what a person approved.
1. Pull main. Read BRAIN.md, NOW.md and decisions/ (autonomy levels, boundaries).
2. Get the item id from the trigger (or, on the hourly backup run, list items with status approved, job_level 3 or higher, and scheduled_for now or earlier).
3. For each item: confirm job_level is 3 or higher, the review and approval are for the current version and content hash, and its scheduled_for time has arrived. If not, skip it and note why.
4. Claim the item once (POST /api/items/:id/claim). If the claim fails, someone else has it: skip.
5. Publish exactly the approved version to its listed destinations, nothing else. Never edit the text.
6. Record the live URLs and platform receipts (POST /api/items/:id/published).
7. Write a handoff and a WORKLOG line, pull --rebase, push to main.
Stop on any error, leave the item claimed with an error note, and say what failed in the handoff.
```
Level 2 items are never touched by the publisher: approving them ends in a publishing handoff a person completes (module 23).

## GEORGE does
- Approves the GitHub connection once.
- Says yes (or "change X") after the dry week.

## Done when
- [ ] Each chosen job is a scheduled task with the template prompt
- [ ] Handoffs from scheduled runs land on `main`
- [ ] Secrets are network secrets; none show in transcripts
- [ ] One clean dry week, and George has said yes

## Writes to
- `projects/automation.md` (task names, schedules, last result), `handoffs/`, `WORKLOG.md`

## Next
- 21 if any job belongs on a Managed Agent; 29 to track it
