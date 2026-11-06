---
name: george-missions-update
description: >-
  Use for The Overseas Initiative (TOI): "missions update," "prayer update," "trip report,"
  "newsletter for TOI," "update for supporters," "Cuba update," "Spanish version." Drafts TOI updates
  for supporters and partners in English and Spanish from facts George or his team provide.
---

# TOI missions update

Supporters hear what God is doing through TOI, clearly and on time, in both languages.

## Fill in first (once, saved in `projects/toi/PLAYBOOK.md`)

| Slot | Example |
|---|---|
| {{TOI_AUDIENCES}} | supporters, prayer partners, church partners, ministry partners in Cuba and Latin America |
| {{TOI_CADENCE}} | monthly update, trip reports during trips |
| {{TOI_CHANNELS}} | email list, website, social, a group chat |
| {{TOI_SAFETY_RULES}} | what can't be named or shown (people, places, photos) for partners' safety; kept in `projects/toi/PRIVACY.md`, with permissions in `projects/toi/CONSENT.md` |
| {{TOI_GIVING_LINK}} | the real giving page URL |

His Claude fills these from what it knows; anything unknown is asked once.

## Steps

1. george-session-start; read `projects/toi/PLAYBOOK.md`, `projects/toi/PRIVACY.md` and `projects/toi/CONSENT.md` before writing anything.
2. Gather facts for the period: trips, stories, prayer needs, numbers, from George or the TOI team. Never invent a story, a name or a number.
3. **Apply PRIVACY.md and CONSENT.md before anything else.** Remove or blur names, places and photo details the rules cover. When unsure, leave it out and ask.
4. Draft in English: a short opening story, what happened, prayer needs, what's next, one clear way to help (pray, give, go), and the giving link.
5. Write the Spanish version as a real translation that reads naturally, not word for word. Mark terms to confirm with a Spanish-speaking partner `[check es]`.
6. Make short versions for social and a two-line text version if TOI uses a group chat.
7. george-slop-check, then george-approval-queue under brand TOI (TOI approvers decide).

## Rules

- Safety first. Partners' names, locations and faces only with permission recorded in CONSENT.md.
- No invented testimonies, conversions counts or amounts.
- No em dashes.

## Output

English update, Spanish update, social versions, text version, safety notes, all as one TOI package.

## Try saying

"Draft the November TOI update from these trip notes, English and Spanish."

## Make it yours

Fill the slots, add the TOI letter format supporters are used to, and name the TOI approvers in the dashboard.
