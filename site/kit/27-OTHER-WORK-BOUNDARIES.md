# 27 · Other Work Boundaries
> Clear lines between George's personal and ministry system and his other jobs, so nothing leaks, crosses or gets sent from the wrong place.

**Run it:** `Run module 27 from my framework. Write my boundaries file and check my setup against it.`
**Needs first:** 02, 04, 06
**Time:** about 20 minutes · **GEORGE's part:** confirm the list of roles and which email address belongs to each

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{ROLES}} | Every role George holds (author and teacher, G's Plan, TOI, pastor at The Center for Executive Leadership, his agency and sales jobs, any others) | profile from module 05, ask George |
| {{IDENTITY_PER_ROLE}} | The one email address and sign-in each role uses | ask George |
| {{WORK_SYSTEMS}} | Where his agency and sales work lives (their own drives, CRM, chat, agents) | ask George; record names only in his private brain, never on any public page |
| {{CEL_BOUNDARIES}} | What CEL work may live in his system (his own teaching and writing) and what stays with CEL (their records, their members, their accounts) | ask George |

## Why this matters
George wears several hats, and each has its own inbox, team and data. When those blur, an email goes out from the wrong address, or one organization's private information ends up in another's files. His agency and sales jobs already have their own systems and agents; his personal setup must not reach into them, and they must not reach into his. Writing the lines down once means every agent follows them without being told.

## The rules
1. **Personal and ministry only.** `george-os` and his `george-*` skills cover his author and teaching work, G's Plan, TOI, and his own pastoral writing. That's the scope.
2. **Work systems stay separate.** His agency and sales work stays in those companies' own systems and with their own agents. Don't copy their client names, files, numbers or conversations into `george-os`. Don't connect his personal agents to their agents, inboxes, drives or CRMs.
3. **One identity per mailbox.** Each role has one email address. An agent drafts only from the address for the role it's working on. It never sends, and never drafts from a work address while doing personal or ministry work.
4. **CEL lines.** George's own sermons, teaching and writing are his and can live in `george-os`. CEL's member information, donor records, internal documents and accounts stay with CEL.
5. **Personal GitHub only.** `george-os` and his kit live in his personal GitHub account. If he uses another account for work, it stays for work repos. Never mix them.
6. **When unsure, stop.** If a task touches a work system or another organization's data, the agent stops and asks George which side it belongs on.

## Steps
1. **Write the boundaries file.** Create `decisions/0004-boundaries.md` with the rules above, filled with {{ROLES}}, {{IDENTITY_PER_ROLE}} and {{CEL_BOUNDARIES}}. Names of work systems go only in this private file. *Check:* the file is on `main` and lists every role with its one identity.
2. **Audit connectors.** List every connector and sign-in on his Claude account (Settings > Connectors) and in Claude Code. Mark each as personal, ministry or work. *Check:* a table in `decisions/0004-boundaries.md` shows each connector and its side.
3. **Fix crossings.** For any work connector inside a personal Project or a personal scheduled task, propose removing it and wait for George's yes. *Check:* after his yes, no personal Project or task has a work connector.
4. **Check Projects.** Each claude.ai Project serves one side only. Rename or split any that mix. *Check:* the list of Projects shows one side each.
5. **Add a guard to the skills.** Confirm `george-email` and `george-session-start` read `decisions/0004-boundaries.md`. *Check:* asking `Use george-email to draft a note to a work client from my personal address` gets a refusal and a question.
6. **Scrub the brain.** Search `george-os` for work client names, work files and work numbers. Propose moving anything found out of the repo. *Check:* the search finds nothing, or George approved each item that stays.

## GEORGE does
- Confirms the list of roles and the one email address for each.
- Says yes or no to removing any crossed connector.
- Decides edge cases ("is this mine or CEL's?").

## Done when
- [ ] `decisions/0004-boundaries.md` exists with roles, identities and the connector table
- [ ] No personal Project or scheduled task has a work connector
- [ ] `george-email` refuses to draft from the wrong identity
- [ ] The brain repo holds no work client data

## Writes to
- `decisions/0004-boundaries.md`
- `WORKLOG.md`, a handoff

## Next
- [28 · Publishing Channels](./28-PUBLISHING-CHANNELS.md)
