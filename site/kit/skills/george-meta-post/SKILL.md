---
name: george-meta-post
description: >-
  Use for Facebook and Instagram posts: "Facebook post," "Instagram post," "post this to Meta,"
  "caption for Facebook and Instagram," "schedule a post," "carousel for Instagram." Builds a post
  package per platform in George's voice for dashboard review; a person schedules it in Meta Business
  Suite.
---

# Meta post

Facebook and Instagram, ready to schedule, sounding like George.

## Fill in first

| Slot | What it is |
|---|---|
| {{REVIEWER}} | Reviews posts with George in the dashboard |
| {{ACCOUNT_EMAIL}} | The account email for his Meta Business Suite login |

## The package (one per post)

| Part | Facebook | Instagram |
|---|---|---|
| Caption | 80 to 150 words, story first, one link | 50 to 120 words, link goes in bio or a link sticker note |
| Asset list | images or video by file name and where they live | same, plus crop (1:1 or 4:5) and carousel order |
| Alt text | one line per image describing what's actually in it | same |
| Link | the article, video, book or TOI page | same, as "link in bio" note |
| Hashtags | none or one or two | three to five, specific, no piles |
| Scheduled time | date and time, America/Chicago | same |

## Steps

1. george-session-start; read `voice/VOICE.md` and the source piece (article, video, sermon, TOI update).
2. Write each caption for its platform; don't paste one into the other.
3. Scripture is quoted exactly with its reference. TOI posts follow `projects/toi/PRIVACY.md` and `CONSENT.md`.
4. List assets and write alt text. Real photos only; no AI-generated people.
5. Propose a time from his calendar rhythm (module 24).
6. george-slop-check, then george-approval-queue as a level 2 item: {{REVIEWER}}'s passed review, then George's final approval (two different people).

## After Approve (level 2)

The dashboard shows a publishing handoff: a person copies the approved caption, uploads the listed assets, adds alt text and schedules it in Meta Business Suite, then records the post link in the dashboard. No agent posts or schedules.

## Rules

- Drafts only. No invented stats, testimonials or quotes.
- No em dashes.

## Try saying

"Facebook and Instagram posts for Thursday's article, scheduled for Friday morning."

## Make it yours

Add his best-performing post shapes to `projects/social/PLAYBOOK.md` as they show up in the numbers.
