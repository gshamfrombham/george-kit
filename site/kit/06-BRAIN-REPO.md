# 06 · Brain Repo
> One private GitHub repo becomes George's single source of truth, which every agent reads first and writes last.

**Run it:** `Run module 06 from my framework.`
**Needs first:** 04, 05
**Time:** about 30 minutes · **GEORGE's part:** approve GitHub sign-in once

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{GEORGE_GITHUB_PERSONAL}} | Personal GitHub account | Module 04 (ask George) |
| {{BRAIN_REPO}} | Repo name | Default `george-os` |
| {{BRANDS}} | Brands for Projects and folders | Module 04 |

## Why this matters
Memory in a chat dies with the chat. Memory in one Claude Project doesn't reach Claude Code or a scheduled task. A private Git repo is the one place every surface can read, it keeps history, and it shows exactly what changed and when. Plain files come first because they work everywhere. A knowledge graph can come later if the files ever outgrow what a Project can hold.

## Steps
1. **Create the repo in his personal account.** Make `{{GEORGE_GITHUB_PERSONAL}}/{{BRAIN_REPO}}`, **private**, with default branch `main`. Never create it inside an organization: members of an organization can often read every repo in it. *Check:* the repo page shows Private, and the owner is his personal account.
2. **Lay out the folders** using the [templates](./templates/BRAIN.md):

```
george-os/
  CLAUDE.md         the ten rules and the session ritual (Claude Code reads this automatically)
  BRAIN.md          who George is, his main things, rules summary  (templates/BRAIN.md)
  NOW.md            this week: what's in flight, owner, due, status (templates/NOW.md)
  WORKLOG.md        append-only, one line per session            (templates/WORKLOG.md)
  SYSTEM-MAP.md     from module 03
  FEEDBACK.md       what to improve in the framework              (templates/FEEDBACK.md)
  CONTROL.md        the five checks                               (templates/CONTROL.md)
  handoffs/         one file per session                          (templates/HANDOFF.md)
  projects/         gs-plan.md, toi.md, one per ongoing thing     (templates/PROJECT.md)
  people/           one per person who matters                    (templates/PERSON.md)
  decisions/        0001-ground-rules.md and on                   (templates/DECISION.md)
  voice/            VOICE.md, gold/, banned.md                    (templates/VOICE.md)
  calendar/         CALENDAR.md, the editorial and ministry calendar (templates/CALENDAR.md)
  inventory/        from module 04
  agents/           one brief per automated agent                 (templates/AGENT-BRIEF.md)
  skills/           a copy of the george-* kit (module 10)
  framework/        George's own copies of modules he has changed
  upstream/         dated proposals from Trevor, never applied automatically
```

   *Check:* `git ls-tree -d main` lists every folder.
3. **Write in what 02, 03, 04 and 05 gathered.** Ground rules, map, inventory, profile, `projects/gs-plan.md`, `projects/toi.md`, and `people/`. *Check:* every file has a source line saying where its facts came from.
4. **Set the branch rule.** `main` is the only branch that counts for memory. Every session ends with `git pull --rebase origin main && git push origin main`. Work for websites and code can use other branches; **memory can't**. *Check:* `git log origin/main -1` shows your latest commit.
5. **Leave out what doesn't belong.** No passwords or keys (module 09). No donor names, amounts or giving history, ever, in this or any git repo; record only a pointer to where they live and any totals George permits. No data from his work systems (module 27). *Check:* run `grep -riE "password|api[_-]?key|sk-|secret" .` and get no real hits.
6. **Test it cold.** Open a brand-new Claude Code session in the repo (cloud is fine) and ask: "What is G's Plan, what's in flight this week, and what did we do last?" *Check:* it answers from the files without George explaining anything.

## GEORGE does
- Approves the GitHub sign-in when Claude asks.

## Done when
- [ ] Private `george-os` exists in his personal account, default branch `main`.
- [ ] All folders and starter files are in place, filled from 02 to 05.
- [ ] The cold test passes.

## Writes to
- The whole `george-os` repo

## Next
- [07 Memory Ritual](./07-MEMORY-RITUAL.md)
