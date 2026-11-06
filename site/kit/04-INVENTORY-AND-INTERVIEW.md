# 04 · Inventory and Interview
> Gather everything Claude already knows about George in one place, ask him the rest once, and never ask again.

**Run it:** `Run module 04 from my framework.`
**Needs first:** 03
**Time:** about 45 minutes (20 of them with George) · **GEORGE's part:** open his existing Claude memory and Projects, then answer one batch of questions

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{GEORGE_GITHUB_PERSONAL}} | Personal GitHub account for the brain repo | Ask George |
| {{GEORGE_GITHUB_WORK}} | Any other GitHub account he uses (for skill repos or work) | Ask George |
| {{GS_PLAN_WHAT_IT_IS}} | What G's Plan is, in George's words | **Your own knowledge of George first**, then confirm with him |
| {{GS_PLAN_AUDIENCE}} | Who G's Plan serves | Same |
| {{GS_PLAN_RECURRING_WORK}} | The jobs G's Plan needs every week or month | Same |
| {{GS_PLAN_TOOLS}} | Where G's Plan lives today (sites, docs, apps, lists) | Same |
| {{TOI_ROLE}} | George's role at The Overseas Initiative | Your knowledge, then confirm |
| {{TOI_RECURRING_WORK}} | TOI's recurring jobs (updates, trips, donors, prayer lists) | Same |
| {{TOI_LANGUAGES}} | Languages TOI work goes out in | Same (expected: English and Spanish) |
| {{OTHER_THINGS}} | Anything else George runs that the system should know | Ask |
| {{TEAM_PEOPLE}} | People who help him, with what they help with | Ask |
| {{ACCOUNTS_HE_CAN_SIGN_INTO}} | Webflow, Substack, YouTube Studio, Meta Business Suite, Google, Cloudflare, 1Password | Ask |

## Why this matters
George's biggest problem is relearning things over and over. Part of the cure is never starting from zero. Claude may already hold years of context in his memory, his Projects and his past chats, and he already has skill repos on GitHub. This module gathers all of it before anything new is built, so the brain repo starts full instead of empty and nothing gets built twice. **G's Plan and TOI are George's two main things.** We don't know what G's Plan is. You likely do. Fill those slots from what you know, and let George correct you.

## Steps
1. **Read what Claude already remembers.** Ask George to open Settings and show you his Claude memory (or paste it), and to list his claude.ai Projects. For each Project, note its name, what it's for, its instructions and its files. *Check:* a list in the session with every Project and the key memory items.
2. **Inventory both GitHub accounts.** List repos in {{GEORGE_GITHUB_PERSONAL}} and {{GEORGE_GITHUB_WORK}}. Note especially any skill repos he already has (skill packs, starter kits). Mark each one **reuse**, **reference** or **leave alone**. Work-related repos stay **leave alone** (module 27). *Check:* a table of repos with a mark on each.
3. **Inventory his public channels.** georgeshamblin.com (blog, videos, books, the Spanish pages), Substack, YouTube, the podcast, Facebook and Instagram, and the TOI site. Note how often each one posts. *Check:* a table with the channel, link and cadence.
4. **Inventory his docs and notes.** Ask George where he keeps notes, plans, sermon files, mission trip docs and donor records (Google Drive, Notes, Docs, a giving platform). **Donor names, amounts and giving history never go in george-os or any git repo.** Record only a pointer to where they live, who may see them, and any totals George permits. *Check:* a list of locations with an owner for each.
5. **Draft every slot you can answer yourself.** Fill G's Plan and TOI slots from your own memory of George and his past chats. Mark each answer **known** (you're sure), **likely** (you think so) or **unknown**. *Check:* a draft slot table with a confidence mark on every row.
6. **Ask George one batch.** Show him the draft table and the list of unknowns together, as one message. Ask him to correct the knowns, confirm the likelies and fill the unknowns. Keep it to one sitting. *Check:* every slot is confirmed or filled.
7. **Write the results down.** When the repo exists (module 06), save: `inventory/claude-memory.md`, `inventory/projects.md`, `inventory/repos.md`, `inventory/channels.md`, `inventory/docs.md`, and the confirmed slots in `BRAIN.md`, `projects/gs-plan.md` and `projects/toi.md`. *Check:* a fresh session can answer "What is G's Plan?" from the repo alone.
8. **List what to import, then import it.** Anything current from his Claude memory and Projects that the repo should hold goes in as files with a source line. Don't build a second brain next to one that already exists; fold it in. *Check:* George sees the import list and nothing he already has is duplicated.

## GEORGE does
- Opens his Claude memory and Projects for the agent.
- Answers the one batch of questions.
- Says where his private docs and donor records live, who may see them, and which totals (if any) may be shown.

## Done when
- [ ] Every slot in this module is confirmed by George.
- [ ] Repos are marked reuse, reference or leave alone.
- [ ] Inventory files and slot answers are written (after 06).
- [ ] A fresh session can explain G's Plan and TOI from the repo.

## Writes to
- `george-os/inventory/*.md`
- `george-os/BRAIN.md`
- `george-os/projects/gs-plan.md`, `george-os/projects/toi.md`
- `george-os/people/*.md` (one per person in {{TEAM_PEOPLE}})

## Next
- [05 Profile](./05-PROFILE.md), then [06 Brain Repo](./06-BRAIN-REPO.md) (06 writes what 04 and 05 gathered)
