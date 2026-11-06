# 19 · Automation Chooser
> Decide, job by job, whether it runs by hand, as a scheduled task on George's Pro plan, or as a Managed Agent on the Claude API.

**Run it:** `Run module 19 from my framework. List my recurring jobs and pick the right engine for each.`
**Needs first:** 04, 07, 16
**Time:** about 30 minutes · **GEORGE's part:** confirm the job list and the monthly API budget

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{RECURRING_JOBS}} | Every job George does more than once a month, across G's Plan, TOI, Author & Teaching, CEL | `NOW.md`, `projects/`, module 25 and 26 playbooks, ask George once |
| {{API_MONTHLY_CAP}} | The most George will spend on the Claude API per month (Managed Agents) | ask George; suggested start: $20 |
| {{PRO_HEADROOM}} | How much of his Pro usage is left after his normal chatting | watch Settings > Usage for one week |

## Why this matters
George relearns things because work lives in chats that end. Automation fixes that only if each job runs in the right place with the brain loaded. He has three engines, and picking wrong costs either money or reliability. Pro is already paid for but has a five-hour session limit and a weekly limit shared with his normal Claude use. Managed Agents cost a little per run but don't eat his Pro limits and can run as many jobs as his budget allows.

## The three engines

| | **By hand** (a skill he triggers) | **Scheduled task** (Claude Code, on his Pro plan) | **Managed Agent** (Claude API) |
|---|---|---|---|
| Where | claude.ai or the desktop Code tab | claude.ai/code/routines, `/schedule`, or the desktop Scheduled page | platform.claude.com Console plus a tiny setup script |
| Pays with | his Pro plan | his Pro plan (stops at the plan limit unless extra usage credits are on) | prepaid API credits, separate from Pro |
| Starts by | George asking | a schedule, an API call or a GitHub event | a scheduled deployment (cron), an API call, or a webhook-driven script |
| Good for | judgment calls, sermons, anything new | a few lean weekly jobs on the brain repo | jobs that run often, run long, or must not compete with his Pro limits |
| Memory | reads the brain via Projects or Code | reads and pushes the brain repo | mounts the brain repo (GitHub resource) and pushes back; optional memory store |
| Rough cost | included | included | about $0.25 for a 10-minute writing run on Sonnet; more with heavy context or web search |

## Steps
1. **List the jobs.** Pull every recurring job from the brain and the playbooks into a table: job, brand, how often, how long it takes George now, inputs, output, who approves. *Check:* George confirms the list is complete.
2. **Score each job.** For each, answer: does it need George's judgment every time (stay **by hand**)? Does it run weekly or less and take under 20 minutes (**scheduled task**)? Does it run daily or more, take long, need web search, or would it crowd his Pro limits (**Managed Agent**)? *Check:* every job has one engine and a one-line reason.
3. **Set its autonomy level** from module 23. Nothing starts above level 2 (drafts into the dashboard queue). *Check:* every row has a level.
4. **Set the money line.** Write `{{API_MONTHLY_CAP}}` into `decisions/` as a decision, and the per-run budget each Managed Agent job gets (module 21). Add up the estimated monthly runs times cost. *Check:* the estimate is under the cap with room to spare.
5. **Order the build.** Start with one job per engine, the one with the most hours saved. Only add the next once the first has run clean for two weeks. *Check:* `projects/automation.md` has the ordered list with checkboxes.

## Default picks for George (edit freely)
| Job | Engine | Level to start |
|---|---|---|
| Sunday weekly brief | scheduled task | 3 (auto, read-only) |
| Tuesday video package draft | scheduled task | 2 |
| Thursday article package draft | scheduled task | 2 |
| Publish an approved article to the website | scheduled task (API trigger from the dashboard) | 3 |
| Daily data snapshot into the dashboard | Managed Agent (scheduled deployment) | 3 (read-only) |
| TOI donor thank-you drafts after each gift batch | Managed Agent | 2 |
| TOI monthly update in English and Spanish | Managed Agent | 2 |
| G's Plan recurring jobs | decide in module 25 | 2 |

## GEORGE does
- Confirms the job list.
- Sets `{{API_MONTHLY_CAP}}` and decides whether extra usage credits stay off on his Pro plan (recommended: off).

## Done when
- [ ] Every recurring job has an engine, a level, and a reason
- [ ] The API cap and per-run budgets are written down as decisions
- [ ] `projects/automation.md` lists the build order

## Writes to
- `projects/automation.md`, `decisions/NNNN-automation-engines.md`, `decisions/NNNN-api-cap.md`

## Next
- 20 for scheduled tasks, 21 and 22 for Managed Agents
