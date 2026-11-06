# 25 · G's Plan Playbook
> A written playbook for G's Plan, one of George's two main things, so no agent ever has to relearn it.

**Run it:** `Run module 25 from my framework. Fill the G's Plan playbook from what you already know about it, then ask me only what's missing.`
**Needs first:** 04, 05, 06, 07, 23
**Time:** about 45 minutes · **GEORGE's part:** answer one batch of questions, then read and correct the finished playbook

## Fill in first
This module is a template. Trevor's team doesn't know what G's Plan is, and that's by design. You (George's Claude) likely do, from past chats, his Claude memory, his Projects, or his files. Fill every slot from those sources first. Ask George only about what's still blank, all in one message.

| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{GS_PLAN_WHAT_IT_IS}} | One plain sentence: what G's Plan is | his Claude memory, Projects, past chats, then ask George |
| {{GS_PLAN_WHY}} | Why George does it, in his words | past chats, his writing, then ask George |
| {{GS_PLAN_AUDIENCE}} | Who it serves (be specific: who, where, what they need) | brain repo, past chats, ask George |
| {{GS_PLAN_OFFERS}} | What people get from it (programs, content, products, meetings, resources) | his site, past chats, ask George |
| {{GS_PLAN_RECURRING_JOBS}} | Every job that repeats: daily, weekly, monthly, yearly | past chats, his calendar (read-only connector), ask George |
| {{GS_PLAN_CADENCE}} | When each job happens and its deadline | calendar, ask George |
| {{GS_PLAN_PEOPLE}} | Who helps, their role, what they may see or approve | ask George; then a file per person in people/ |
| {{GS_PLAN_CHANNELS}} | Where it shows up (site, email list, social, events, print) | his site, ask George |
| {{GS_PLAN_TOOLS}} | Apps and accounts it uses (forms, payments, email list, docs) | inventory from module 04 |
| {{GS_PLAN_METRICS}} | The 3 to 5 numbers that tell George it's working | ask George |
| {{GS_PLAN_VOICE_NOTES}} | Anything about tone that differs from his main voice | voice/VOICE.md, ask George |
| {{GS_PLAN_NEVER}} | Things that must never happen (topics, promises, people, sends) | ask George |
| {{GS_PLAN_OPEN_QUESTIONS}} | What nobody knows yet | collected while filling the rest |

## Why this matters
George keeps re-explaining G's Plan to every new chat, which eats his time and invites mistakes. Once the playbook is written down, every agent starts already knowing it. It also turns his recurring work into named jobs, and named jobs can be assigned to skills and automations instead of to George. And it gives George one place to correct what an agent got wrong, so the fix sticks.

## Steps
1. **Gather what you already know.** Search his Claude memory, every Project he has, his `george-os` files, and his site for anything about G's Plan. Write each fact with its source in a scratch list. *Check:* every fact in the list names a source.
2. **Fill the slots.** Put each fact in its slot above. Mark anything you inferred rather than read as `[check]`. *Check:* no slot holds a guess without `[check]`.
3. **Ask George once.** Send one message listing every empty or `[check]` slot as a numbered question. Keep it short enough to answer from his phone. *Check:* exactly one question message was sent, and George answered it.
4. **Write the playbook.** Create `projects/gs-plan/PLAYBOOK.md` using the layout below. *Check:* the file exists on `main` and every heading has content or an explicit "unknown, see open questions".
5. **Map every recurring job.** For each item in {{GS_PLAN_RECURRING_JOBS}}, add one row to the job map (below). Pick the skill (use `george-gsplan` when no specific skill fits), the autonomy level from [module 23](./23-AUTONOMY-LADDER.md), and the automation type from [module 19](./19-AUTOMATION-CHOOSER.md). *Check:* no recurring job is missing from the map, and no row is above level 2 until it has run cleanly for two weeks.
6. **Fill the gsplan skill.** Open `skills/george-gsplan/SKILL.md` in George's kit (it's a template). Replace its slots with the facts from the playbook, so the skill knows G's Plan without reading the whole brain. *Check:* `Use george-gsplan to tell me what G's Plan is and what's due this week.` answers correctly in a fresh session.
7. **Add the people.** One file per helper in `people/` from [the PERSON template](./templates/PERSON.md), including their dashboard role (viewer or approver for the G's Plan brand). *Check:* each person in {{GS_PLAN_PEOPLE}} has a file.
8. **Put the cadence on the calendar.** Add each recurring job to `calendar/` with its day and deadline. *Check:* the Sunday weekly brief from [module 24](./24-WEEKLY-RHYTHM.md) lists this week's G's Plan jobs.
9. **Add G's Plan to the dashboard.** Add "G's Plan" as a brand in the dashboard's brand list ([module 16](./16-DASHBOARD-BUILD.md)) and its metrics to [module 17](./17-DASHBOARD-DATA-SOURCES.md). *Check:* a test item tagged G's Plan appears under that brand.
10. **Show George.** Send him the playbook and the job map. Make his corrections. *Check:* George said it's right, and that's logged in `decisions/`.

### Playbook layout (`projects/gs-plan/PLAYBOOK.md`)
```
# G's Plan
What it is: {{GS_PLAN_WHAT_IT_IS}}
Why: {{GS_PLAN_WHY}}
Who it serves: {{GS_PLAN_AUDIENCE}}
What they get: {{GS_PLAN_OFFERS}}
People: {{GS_PLAN_PEOPLE}}
Channels: {{GS_PLAN_CHANNELS}}
Tools: {{GS_PLAN_TOOLS}}
Scoreboard: {{GS_PLAN_METRICS}}
Voice notes: {{GS_PLAN_VOICE_NOTES}}
Never: {{GS_PLAN_NEVER}}
Open questions: {{GS_PLAN_OPEN_QUESTIONS}}
Last confirmed by George: <date>
```

### Job map (in the same file)
| Job | When | Skill | Autonomy level (23) | Automation (19) | Who approves | Output lands in |
|---|---|---|---|---|---|---|
| {{JOB}} | {{DAY/TIME, America/Chicago}} | george-… | 0 to 4 | manual, scheduled task, or Managed Agent | {{APPROVER}} | dashboard queue, Drive, draft email |

## GEORGE does
- Answers the one batch of questions.
- Reads the finished playbook and job map and corrects anything wrong.
- Chooses who helps and whether each helper can view or approve.

## Done when
- [ ] `projects/gs-plan/PLAYBOOK.md` exists on `main`, with no unsourced guesses
- [ ] Every recurring job has a row in the job map
- [ ] `george-gsplan` answers "what is G's Plan and what's due this week" correctly in a fresh session
- [ ] Helpers have `people/` files and dashboard roles
- [ ] G's Plan shows as a brand on the dashboard
- [ ] George confirmed it, recorded in `decisions/`

## Writes to
- `projects/gs-plan/PLAYBOOK.md`
- `skills/george-gsplan/SKILL.md` (his copy)
- `people/*.md`, `calendar/`, `decisions/`, `NOW.md`, `WORKLOG.md`

## Next
- [26 · TOI Playbook](./26-TOI-PLAYBOOK.md)
- Then [20 · Scheduled Tasks](./20-SCHEDULED-TASKS.md) for the first G's Plan job that earned level 2
