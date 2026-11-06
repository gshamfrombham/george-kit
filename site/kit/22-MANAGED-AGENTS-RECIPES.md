# 22 · Managed Agent Recipes
> Ready-made agent briefs for George's recurring jobs. Fill the slots, create the agent with module 21, start at level 2.

**Run it:** `Run module 22 from my framework. Build the {{RECIPE}} agent.`
**Needs first:** 21, 23
**Time:** about 20 minutes per agent · **GEORGE's part:** approve each brief before it runs on a schedule

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{RECIPE}} | Which recipe below | George, or module 19's order |
| {{GS_PLAN_JOBS}} | G's Plan recurring jobs | module 25 |
| {{TOI_DONOR_SOURCE}} | Where TOI gifts are recorded (the donation platform, or a restricted folder George controls) | module 26 |
| {{DATA_SOURCES}} | Which metrics to pull | module 17 |

## Why this matters
An agent is only as good as its brief. Every recipe below uses the same spine from `templates/AGENT-BRIEF.md`: load the brain, do one job with one skill, check it, put it in the dashboard, write a handoff, stop. No recipe publishes or sends anything on its own at the start. Promotion to a higher autonomy level comes later, with evidence (module 23).

## The spine every recipe shares
```
ROLE: You do one job for George Shamblin: {{JOB}}.
START: Clone george-os (mounted). Read BRAIN.md, NOW.md, voice/VOICE.md, the 3 newest handoffs, and {{PLAYBOOK}}.
DO: Use {{SKILL}}. Output: {{OUTPUT}}.
CHECK: Run george-slop-check on anything written. Never invent facts, quotes, numbers or scripture references; mark [check].
DELIVER: Post the result to the dashboard as a new version (george-approval-queue). Do not publish or send.
END: Write handoffs/<date>-{{JOB_SLUG}}.md, add a WORKLOG line, pull --rebase, push to main.
STOP RULES: Stop and report in the handoff if an input is missing, a credential fails, or the run would exceed its budget.
```

## Recipes
| Recipe | Trigger | Skill(s) | Output | Start level |
|---|---|---|---|---|
| **Daily data snapshot** | daily 5:30 | george-dashboard-data | metrics rows posted to the dashboard; anomalies noted in the handoff | 3 (read-only) |
| **Weekly brief** | Sunday 17:00 | george-weekly-brief | brief posted to the dashboard Home | 3 (read-only) |
| **Video package** | Saturday 6:00 | george-video-package, george-repurpose | script, title, description, chapters, pinned comment, captions | 2 |
| **Article package** | Wednesday 6:00 | george-weekly-article, george-repurpose | article, Substack post, captions, podcast notes | 2 |
| **TOI donor thanks** | weekly, Monday 6:00 | george-donor-thanks | reads the week's gifts from the donation platform or George's restricted folder through a connector at run time; one draft note per gift in English or Spanish, posted to the dashboard. Donor names, amounts and giving history never go into george-os or any git repo; the handoff records only counts | 2 |
| **TOI monthly update** | 1st of month 6:00 | george-missions-update | update in English and Spanish, photo-story suggestions, prayer list | 2 |
| **Trip prep** | 30 days before each trip on the TOI calendar | george-trip-planner | checklist, packing list, team brief, daily plan | 2 |
| **Interview pitches** | 1st and 15th | george-interview-pitch | 3 to 5 tailored pitches with sources | 2 |
| **G's Plan jobs** | from module 25 | george-gsplan plus others | as defined in module 25 | 2 |

## Steps
1. **Pick the recipe** and copy the spine into `agents/{{JOB_SLUG}}.md`, filling every slot. *Check:* no `{{` remains.
2. **Name the inputs.** List exactly what the agent reads (files, data sources) and what credentials it needs from the vault. Private data (donors, contacts) is read from its own system at run time and never copied into the repo. *Check:* every credential is already in the vault (module 21), and no input path points at private data inside george-os.
3. **Estimate cost.** Typical context size, minutes, model, searches. Compare with the per-run budget. *Check:* the estimate fits the budget.
4. **GEORGE approves the brief.** *Check:* his approval is recorded in `decisions/` or on the dashboard.
5. **Create, test, schedule.** Build the agent the way module 21's smoke test did (skills, repo, vault, allowed hosts, budget), run it once by hand, then create its scheduled deployment (module 21 step 9) with the per-run budget. Every agent checks the dashboard's paused flag at start and exits if paused. *Check:* one manual run passes the "Done when" list below before the schedule is turned on.
6. **Review after two weeks.** Look at drafts approved without changes, edits needed, cost per run. Promote, keep, or demote using module 23. *Check:* the review is a line in `projects/automation.md`.

## GEORGE does
- Approves each brief before it goes on a schedule.
- Reviews the two-week results.

## Done when
- [ ] Each built agent has a brief in `agents/`, a test run, and a schedule
- [ ] Every run ends with a handoff on `main` and a dashboard item
- [ ] Cost per run is shown on the dashboard's Automations screen

## Writes to
- `agents/*.md`, `projects/automation.md`, `decisions/`

## Next
- 23 to promote jobs that earn it; 29 for the scoreboard
