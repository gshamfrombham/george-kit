# 29 · Control and Scoreboard
> A short set of rules that keep the system honest, and one weekly scoreboard that shows George whether it's working.

**Run it:** `Run module 29 from my framework. Set up CONTROL.md and the weekly scoreboard.`
**Needs first:** 07, 16, 17, 20
**Time:** about 30 minutes · **GEORGE's part:** set the Managed Agents monthly cap and his target numbers

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{MA_MONTHLY_CAP}} | Most George will spend on Managed Agents in a month, in dollars | ask George (module 21 recorded it) |
| {{EXTRA_USAGE}} | Whether extra usage credits are on for his Pro plan | module 08 |
| {{CADENCE}} | What must ship and when (default: Tue video, Thu article, plus G's Plan and TOI jobs) | modules 24, 25, 26 |
| {{APPROVAL_TARGET_HOURS}} | How fast items should get a decision (default 24 hours) | ask George |
| {{SCOREBOARD_DAY}} | When the scoreboard goes out (default Sunday 5pm America/Chicago) | module 24 |

## Why this matters
Automations fail quietly. A task stops firing, a skill drifts back into AI-sounding prose, a session ends without a handoff and the next one starts cold. Counting a few things every week catches those early. The scoreboard also proves to George that he's less hands-on than before, or shows exactly where he isn't.

## Control rows (copy into `CONTROL.md`)
| ID | What's watched | Rule | Allowed misses | Who reviews |
|---|---|---|---|---|
| C-1 | Session start and end | every session reads the brain first and pushes a handoff to `main` | 0 a week | Sunday brief |
| C-2 | Voice | nothing enters the dashboard queue without a `george-slop-check` pass | George may override with a reason, logged | monthly voice review |
| C-3 | Cadence | every scheduled item is in the queue 24 hours before its publish time | 0 late items | Sunday brief |
| C-4 | Publish and send | nothing publishes or sends without an approval on that exact version | 0 | weekly, queue log against receipts |
| C-5 | Secrets | keys only through connectors, `op run`, or cloud network secrets; a key seen in chat is rotated and logged | 0 | monthly |
| C-6 | Spend | Managed Agents spend stays under {{MA_MONTHLY_CAP}}; extra usage stays as George set it | alert at 75% of cap | weekly |
| C-7 | Privacy (TOI) | no names, faces or places of people in the field without a consent entry | 0 | every TOI item |

## Weekly scoreboard (goes in the Sunday brief and on the dashboard Home)
| Number | How it's counted | Target |
|---|---|---|
| Sessions with a handoff | handoff files on `main` divided by sessions logged in `WORKLOG.md` | 100% |
| Context-lost taps | taps on the dashboard's "context lost" button this week | 0, trending down |
| Slop-check pass rate on first draft | first-draft passes divided by drafts | rising; 90% by week 4 |
| On-time cadence | items in the queue 24 hours early divided by items due | 100% |
| Approval turnaround | median hours from item created to decision | under {{APPROVAL_TARGET_HOURS}} |
| Published with receipt | items with a live URL divided by items published | 100% |
| Managed Agents spend | Console usage this month against {{MA_MONTHLY_CAP}} | under cap |
| Pro limit hits | times a session or task stopped at the plan limit | 0 to 1 |
| George's touches | approvals, comments and pastes he did this week | falling toward the target in module 24 |

## Steps
1. **Write CONTROL.md.** Copy the control rows into `CONTROL.md` from [the CONTROL template](./templates/CONTROL.md), filled with the slots. *Check:* the file is on `main` with all seven rows.
2. **Make each number countable.** For each scoreboard number, write where the count comes from (file, dashboard table, Console page) in `CONTROL.md`. *Check:* no number says "estimate".
3. **Add the scoreboard to the brief.** Update `george-weekly-brief` to include the scoreboard table with this week and last week side by side. *Check:* a test brief shows every number.
4. **Add it to the dashboard Home.** Show the scoreboard as cards ([module 17](./17-DASHBOARD-DATA-SOURCES.md)). *Check:* the Home screen shows this week's numbers.
5. **Set alerts.** Any control row breached adds a red line at the top of the Sunday brief and a dashboard item tagged "control". Spend at 75% of cap triggers an item the same day. *Check:* a simulated breach produces the item.
6. **Monthly review.** On the first Sunday of each month, the brief adds a short section: which rules held, which slipped, one change to try. *Check:* the calendar has the monthly review.

## GEORGE does
- Sets {{MA_MONTHLY_CAP}} and {{APPROVAL_TARGET_HOURS}}.
- Taps "context lost" whenever he has to re-explain something. That's the most important number on the board.
- Reads the Sunday brief.

## Done when
- [ ] `CONTROL.md` on `main` has all seven rows, with the source for every number
- [ ] The Sunday brief shows the scoreboard with last week beside it
- [ ] The dashboard Home shows the scoreboard
- [ ] A simulated breach produces an alert item

## Writes to
- `CONTROL.md`
- `skills/george-weekly-brief/SKILL.md` (his copy)
- `WORKLOG.md`, a handoff

## Next
- [30 · Troubleshooting](./30-TROUBLESHOOTING.md)
