---
name: george-approval-queue
description: >-
  Use whenever work is ready for George or his team to review, or to act on their decisions: "put it
  in the queue," "send for approval," "what's approved," "what's waiting," "publish what's approved."
  Posts immutable versions to George's dashboard, checks status, and claims an approved version before
  anything is published.
---

# Approval queue

The dashboard is the only door to the outside world. This skill is how agents use it. The dashboard itself is built in module 16.

## How the queue works

- An **item** is one package (for example "Thursday article package") under one brand (Author, G's Plan, TOI, CEL), with a `job_level` from the autonomy ladder ([module 23](../../23-AUTONOMY-LADDER.md)).
- Each change makes a new **version** with a content hash. Versions are never edited.
- **Two people, two steps.** An item needs a passed **review** (by the reviewer) and then George's **final approval**, by **different people**, on the same exact version. A review is never treated as an approval, and an approval never stands in for a missing review. Any new version sends the item back to pending and clears both.
- **Everything that matters is in the version** and its content hash: body, assets, `channel`, `scheduled_for` (America/Chicago), `destinations`, and for Meta ads `budget`, `daily_cap` and `dates`. Changing any of them makes a new version.
- **Level 2** items: an Approve ends in a **publishing handoff**, ready text a person posts or sends. Agents never publish them.
- **Level 3 and up** items: an agent may **claim** the exact approved version, once, then publish it. Only one claim can win.
- After publishing, the agent writes a **receipt**: the live URL or what was sent, and when.

## Steps: submit

1. Make sure george-slop-check passed and the report is ready.
2. `POST /api/items` (new) or `POST /api/items/<id>/versions` (change) with: brand, kind, job_level, channel, scheduled_for, destinations (and for `meta_ads`: budget, daily_cap, dates), title, body, assets, destinations (exactly where each piece goes), the slop report, and who made it.
3. Note the item id and version number in the handoff.

## Steps: check

- `GET /api/items?status=pending|changes|approved` to see what's waiting, what needs changes (read the comment), what has a passed review, and what has George's final approval. Only an item with both, by different people, on the current version, counts as approved.
- For "changes," make a new version that answers every comment, then resubmit.

## Steps: publish

1. **Level 2 item:** don't claim. Mark the publishing handoff ready (the exact approved text, per destination) for George or a helper, and stop. When the person posts it, they record the live link in the dashboard.
2. **Level 3+ item:** `POST /api/items/<id>/claim` for the exact approved version, once. If the claim fails, stop: someone else has it, or the version changed.
3. Publish exactly the approved content to the listed destinations (george-site-update for the website). Any destination that isn't connected becomes a handoff for a person.
4. `POST /api/items/<id>/published` with the live URL, platform receipt and time. Every publish has a receipt.

## Rules

- Agents can't approve. The service token is refused on the decision endpoint, by design.
- The service token is read through george-secrets (1Password or a cloud network secret), never pasted.
- Time zone America/Chicago for every date.
- If the dashboard is down, wait and retry; never publish around it.

## Try saying

"Put the article package in the queue for George."

## Make it yours

Add item kinds as George needs them (event, donor batch, G's Plan report). Keep "approve one version" and "claim before publish."
