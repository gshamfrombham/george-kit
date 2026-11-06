---
name: george-weekly-brief
description: >-
  Use when George says "weekly brief," "morning brief," "what's on this week," "what shipped," "what's
  stuck," or on the Sunday scheduled task. Reads the brain, the calendar, the dashboard queue and the
  worklog and writes a short brief he can read on his phone.
---

# Weekly brief

Two minutes on Sunday evening tells George what happened, what's next and what needs him.

## Inputs

- george-os: `NOW.md`, `WORKLOG.md` (last 7 days), `handoffs/`, `calendar/`, `projects/`
- The dashboard queue (items waiting, approved, published) through george-approval-queue
- His calendar, if the Google Calendar connector is on (read it; never create or change events)
- Dashboard numbers, if george-dashboard-data has run this week

## Steps

1. george-session-start.
2. **Shipped:** list what went live this week with links (from the queue receipts and WORKLOG).
3. **Waiting on George:** items in the queue that need his Approve, oldest first, with how long each has waited.
4. **Next 7 days:** Tuesday video, Thursday article, G's Plan items, TOI items, speaking dates, anything due in `projects/`.
5. **Stuck:** anything that failed, any scheduled task that didn't run, any session with no handoff (compare WORKLOG lines to handoff files).
6. **Numbers, three at most:** for example subscribers, video views, donations received (only if George wants that one shown). Week over week, no spin.
7. **One question,** if one decision would unblock the most work.
8. Post the brief to the dashboard as a read-only item, and save it as `briefs/YYYY-MM-DD.md`.

## Rules

- Short. It must fit on a phone screen without much scrolling.
- Facts from the brain and the queue only. No invented numbers. Missing data says "not connected yet."
- Plain words; no em dashes; no cheerleading.

## Output

```
Week of <date>
Shipped: ...
Waiting on you: ...
Next 7 days: ...
Stuck: ...
Numbers: ...
One question: ...
```

## Try saying

"Weekly brief, please."

## Make it yours

Pick the three numbers he cares about and list them in `NOW.md` under "Brief numbers." Add a daily morning version if he wants one.
