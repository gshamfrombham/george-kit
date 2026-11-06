---
name: george-dashboard-data
description: >-
  Use to pull George's numbers into his dashboard or a brief: "update the dashboard numbers," "how are
  my videos doing," "subscriber count," "site traffic," "Substack growth," "TOI giving totals," "G's
  Plan numbers." Collects metrics from connected sources on a schedule, stores them with dates, and
  never invents a number.
---

# Dashboard data

The dashboard shows real numbers, with where each came from.

## Sources (connect one at a time, per module 17)

| Area | Source | How |
|---|---|---|
| Website | Webflow, Google Analytics, Search Console | connector or API, read-only |
| YouTube | YouTube Analytics | read-only API with George's sign-in |
| Substack | subscriber export or stats page | George or a helper exports; agent reads the file |
| Social | Meta Business Suite insights | export or API once his own business account is set |
| TOI | the donation platform, read at run time | aggregates only (totals, counts); donor names, amounts and history never stored in george-os or any repo |
| G's Plan | {{GS_PLAN_DATA}} | his Claude fills this in |
| The system itself | the queue, WORKLOG, scheduled task runs | built in |

## Steps

1. Read the list of connected sources in `dashboard/sources.md`.
2. For each source due today, pull the agreed numbers only. Store them as dated rows (`metric, value, date, source, pulled_at`) through the dashboard's metrics endpoint, or in `dashboard/metrics/<yyyy-mm>.csv` if the endpoint isn't built yet.
3. If a source fails, record "not updated" with the error. Never fill a gap with an estimate.
4. Compare to last week and last month. Flag big changes (more than 30 percent) for the weekly brief with a plain note.
5. george-handoff (short).

## Rules

- Read-only access everywhere. This skill never changes settings, budgets or posts.
- Keys only through george-secrets. OAuth connectors preferred.
- Donor names and amounts never appear on shared views unless George says so.
- No invented or smoothed numbers.

## Output

"Updated 7 metrics from 4 sources. Not updated: Substack (no new export). Flags: YouTube views up 42 percent week over week."

## Try saying

"Pull this week's numbers into the dashboard."

## Make it yours

Choose the 8 to 12 numbers that matter and list them in `dashboard/sources.md`. More is noise.
