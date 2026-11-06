---
name: george-donor-thanks
description: >-
  Use when George or the TOI team says "thank-you notes," "thank donors," "acknowledge this gift,"
  "year-end giving letters," or shares a list of recent gifts. Drafts warm, personal thank-yous for
  TOI supporters in his voice, never sending them.
---

# Donor thank-yous

Every gift is thanked quickly and personally.

## Inputs

- The gift list, read **at run time** from the donation platform's export or George's restricted folder through a connector (name, date, amount, fund or purpose, any note). Donor names, amounts and giving history **never go into george-os or any git repo**, and never into a public file or post.
- `projects/toi/PLAYBOOK.md`, `projects/toi/PRIVACY.md` and `projects/toi/CONSENT.md`, read before writing anything.

## Steps

1. Read the list from its source. Giving history comes from the donation platform, not from the brain. The brain holds only pointers (where the export lives) and aggregates (for example "42 gifts in October").
2. Draft a short note (60 to 120 words): their name, thanks for the specific gift purpose, one real current detail from TOI's work, and a personal line George can adjust. Mention amounts only if the TOI rules say to.
3. Group drafts: first-time givers, regular partners, large or special gifts (George may want to call these).
4. For year-end receipts or tax language, use only the exact wording the TOI board or accountant provided. Never write tax advice.
5. Post the batch to the dashboard as one TOI package, restricted to TOI approvers. Don't save the drafts or the list in george-os. After Approve, the drafts go to whoever sends them (George or a TOI helper). This skill never sends.

## Rules

- Donor data is private: never in george-os, any git repo, public pages, social posts, or prompts to other tools. Delete any local copy of the export when the run ends.
- No invented details about the giver or the work.
- No em dashes.

## Output

A table of drafts by group, with a "call instead?" flag for gifts George may want to handle personally.

## Try saying

"Draft thank-yous for this week's TOI gifts."

## Make it yours

Add the TOI board's approved receipt wording and George's favorite sign-off to `projects/toi/PLAYBOOK.md` (wording only, no donor data).
