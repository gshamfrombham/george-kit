# 23 · Autonomy Ladder
> A clear rule for which jobs run on their own and which wait for George, and how a job earns more freedom (or loses it) based on its record.

**Run it:** `Run module 23 from my framework. Place every recurring job on the ladder and show me.`
**Needs first:** 16, 19
**Time:** about 30 minutes, then a 5-minute review monthly · **GEORGE's part:** approve each job's level and every promotion

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{RECURRING_JOBS}} | Every job that repeats (weekly article, video package, social captions, TOI updates, G's Plan jobs, data snapshot, inbox drafts) | `calendar/`, module 24, and his Claude memory |
| {{GS_PLAN_JOBS}} | G's Plan's recurring jobs | his Claude memory or Projects, or ask George |
| {{TOI_JOBS}} | TOI's recurring jobs (prayer updates, donor thanks, trip logistics) | ask George |
| {{KILL_SWITCH}} | How any job is stopped at once | the Automations screen off switch (module 16) |

## Why this matters
George wants things to run without him steering, and he also can't afford a wrong post or a wrong email under his name. The ladder resolves that. Every job starts low and climbs only on evidence, one rung at a time. Any miss drops it back down. George always knows exactly what can happen without him, because it's written down.

## Steps
1. **Learn the five levels.**
   | Level | Name | What runs alone | What waits for George |
   |---|---|---|---|
   | 0 | Manual | nothing | everything; George does it |
   | 1 | Draft | the agent drafts into `drafts/` | George reads it, decides, and does the rest |
   | 2 | Draft and queue | the agent drafts, slop-checks and posts to the dashboard | Approve; then the item sits at "ready for a person to publish" with the ready text, and George or a helper publishes and marks it published. No publish trigger fires. |
   | 3 | Auto with approve | everything up to Approve, and everything after: Approve fires the publish trigger, the agent claims the approved version, publishes and posts receipts | only the Approve tap |
   | 4 | Fully auto | the whole job, with receipts in the log and a daily summary | nothing, but {{KILL_SWITCH}} stops it instantly |
   *Check:* the table is copied into `decisions/autonomy-ladder.md`.
   **How it's enforced:** each job's level lives on the dashboard server in the `jobs` table (module [16](./16-DASHBOARD-BUILD.md)), and only an approver or George can change it. Every item points to its job, and the server derives the level from the job; whatever level an agent sends is ignored. The dashboard, not the agent, decides what Approve does: level 2 stops at a ready-for-person handoff that a person marks published, and the claim endpoint refuses anything below level 3. Promoting a job means George (or an approver) changing its level on the Automations screen, then recording it in `CONTROL.md` and `decisions/`.
2. **Place every job.** List {{RECURRING_JOBS}}, {{GS_PLAN_JOBS}} and {{TOI_JOBS}} in `CONTROL.md` with a starting level. Sensible starts:
   - Data snapshot (read-only): level 3, promote to 4 after two clean weeks.
   - Weekly brief to George only: level 4 from day one (it only reads and reports).
   - Thursday article package, Tuesday video package: level 2, aiming at 3.
   - Social captions: level 2 (inside the article and video packages).
   - TOI prayer or donor updates: level 2. Anything that goes to donors never goes above 3.
   - Any email sent as George: level 1 or 2. Never 4.
   - Anything that spends money or signs George up for something: level 0.
   *Check:* every job has a level and George has approved the list.
3. **Promotion rule.** A job moves up one level only when, over its last 4 runs (or 4 weeks, whichever is longer): zero hard slop tells, zero fact corrections, zero publishing errors, George approved without edits at least 3 of 4 times, and every run left a receipt. The agent proposes the promotion with that evidence; George approves it. *Check:* each promotion has an entry in `decisions/` citing the four runs.
4. **Demotion rule.** Any miss drops the job one level at once: a wrong fact, a slop tell that reached the public, a double post, a missed receipt, or George saying "that wasn't right." Two misses in a month drop it to level 1. Log the miss in `WORKLOG.md` and the demotion in `decisions/`. *Check:* the rule is in `CONTROL.md`, and the Sunday brief lists any demotions.
5. **Never-above lines.** Write these in `decisions/autonomy-ladder.md`: money, sign-ups, legal or doctrinal statements on George's behalf, anything to donors' private details, and anything from his work systems stay at or below the level George sets, regardless of record. *Check:* listed.
6. **Show it on the dashboard.** The Automations screen shows each job's level, its last 4 runs, and the off switch. Pausing a job sets its `paused` flag on the server; every run checks the flag first and, if paused, writes a handoff and exits. *Check:* George pauses a test job on his phone and its next run does nothing.

## GEORGE does
- Approves each job's starting level.
- Approves or declines each promotion.
- Uses the off switch whenever something feels wrong. No reason needed.

## Done when
- [ ] Every recurring job has a level in `CONTROL.md`
- [ ] Promotion and demotion rules written and in use
- [ ] Off switch works for every job
- [ ] Monthly ladder review in the calendar

## Writes to
- `CONTROL.md`, `decisions/autonomy-ladder.md`, `WORKLOG.md`, a handoff

## Next
- [24 · Weekly Rhythm](./24-WEEKLY-RHYTHM.md)
