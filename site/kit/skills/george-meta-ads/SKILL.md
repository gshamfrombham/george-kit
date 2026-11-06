---
name: george-meta-ads
description: >-
  Use for Facebook and Instagram ads: "ad campaign," "boost this," "Meta ads brief," "promote my book
  with ads," "ad for the TOI event," "how are my ads doing," "ad results." Writes complete campaign
  briefs and reads results; never launches, edits or changes spend.
---

# Meta ads

Clear ad briefs George and {{REVIEWER}} can approve, and honest readouts after.

## Fill in first

| Slot | What it is |
|---|---|
| {{REVIEWER}} | Reviews ad briefs with George |
| {{ACCOUNT_EMAIL}} | The account email for his Meta ads login |
| {{AD_SPEND_LIMIT}} | The most George will spend per month without a new decision |

## The brief (every campaign)

1. **Objective:** one (traffic to a page, video views, leads, event responses, book sales page visits).
2. **Audience:** who, where, interests or lists, and who to exclude. No sensitive targeting.
3. **Budget and dates:** daily or lifetime, start and end, total, and how it fits {{AD_SPEND_LIMIT}}.
4. **Placements:** Facebook, Instagram, or automatic, with the reason.
5. **Three creative variants:** each with primary text, headline, description, call to action, and the image or video asset with alt text. In George's voice; george-slop-check on all three.
6. **Landing page:** the exact URL, and a check that it loads fast on a phone and matches the ad's promise.
7. **Tracking:** what counts as a result (pixel or conversion event, link tags) and how it shows in the dashboard.
8. **Success metric:** one number and the target (for example cost per landing page view under a set amount), and when to judge it.

## Steps

1. george-session-start; read `projects/ads/PLAYBOOK.md` if it exists.
2. Write the brief. Mark any number you can't source `[check]`.
3. george-approval-queue as a `meta_ads` item. The version must carry structured fields, part of its content hash: `budget` (total), `daily_cap`, `dates` (start and end), `channel`, `scheduled_for`, `destinations` (the landing page and ad account). Changing any of them is a new version. It needs {{REVIEWER}}'s passed review and then George's final approval, two different people.
4. After both steps, a person builds and launches it in Ads Manager exactly as the approved version says, and records the campaign link on the dashboard.
5. **Results:** read campaign results with read access only, weekly, into the dashboard (george-dashboard-data). Report spend, results, cost per result and the success metric, against target. No spin.

## Rules

- Never launch, edit, pause or change budgets or spend. Spend changes need George, done by a person.
- "Pause ads" from George: create an urgent dashboard item with the exact steps for a person; don't do it yourself.
- No invented results. No em dashes.

## Try saying

"Write a Meta ads brief to promote The Relay for two weeks."

## Make it yours

Keep every brief and its result in `projects/ads/`. After a few, write down what works for George's audiences in the PLAYBOOK.
