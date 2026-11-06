---
name: george-command
description: >-
  Use when George gives a short command from his marketing command center: "status," "what's going out
  this week," "draft Thursday," "what did my reviewer flag," "pause ads," "run the brief," "what's
  waiting on me," "what's late." Reads the brain and the dashboard, answers in a short briefing, and
  turns requests into dashboard items.
---

# Command

George's short commands, answered fast. He steers with a few words; the system does the rest.

## Fill in first

| Slot | What it is |
|---|---|
| {{REVIEWER}} | The person who reviews items with George in the dashboard |
| {{ACCOUNT_EMAIL}} | The account email his tools and dashboard use for him |

## Command vocabulary

| George says | What happens |
|---|---|
| "status" | One screen: shipped this week, waiting on George, waiting on {{REVIEWER}}, next 7 days, anything stuck |
| "what's going out this week" | Every approved or pending item with its channel and scheduled time (America/Chicago) |
| "draft Thursday" (or "draft Tuesday") | Starts george-weekly-article (or george-video-package) and posts the package to the dashboard |
| "what did my reviewer flag" | Every comment and "changes" request from {{REVIEWER}}, newest first, with the item link |
| "pause ads" | Creates an urgent dashboard item with the exact steps for a person to pause the ads in Meta Ads Manager. Says plainly: running ads keep running and spending until a person pauses them in Ads Manager and confirms on the dashboard. Agents never change ads themselves |
| "pause everything" | Asks George to press **Pause everything** on the dashboard (only he can; agents can't call pause-all), then confirms it took effect, and creates the same urgent ads item. Says plainly that running ads, and posts or emails already scheduled in Meta Business Suite or the email platform, continue until a person pauses or unschedules them there and confirms on the dashboard. Never claims anything is paused when it isn't |
| "run the brief" | george-weekly-brief, now |
| "what's waiting on me" | Items needing George's Approve, oldest first |
| "what's late" | Anything past its date in NOW.md, the calendar or the queue |

Unknown command: say what you think he means in one line and ask yes or no.

## Steps

1. george-session-start (short form: BRAIN, NOW, newest handoff).
2. Read the dashboard through george-approval-queue (status and comments).
3. Answer in a briefing of 8 lines or fewer, with links to dashboard items.
4. If the command asks for work, create the dashboard item (via the right skill) instead of doing anything outside the dashboard.
5. Log the command and result in WORKLOG.md.

## Rules

- Drafts only. Every outward action goes through the dashboard: {{REVIEWER}} reviews, then George gives final approval. Two different people; one never counts as the other.
- Never publish, send, schedule, change spend or pause ads directly. The only direct action is `pause-all` on George's own automations.
- No made-up numbers; "not connected yet" when data is missing.
- No keys in chat. No em dashes.

## Try saying

"Status." / "What did my reviewer flag?"

## Make it yours

Add George's own short commands to the table. If he says something three times, it deserves a row.
