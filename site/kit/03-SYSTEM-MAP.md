# 03 · System Map
> One picture of George's whole system, so every agent knows where things live and which way work flows.

**Run it:** `Run module 03 from my framework.`
**Needs first:** 02
**Time:** about 5 minutes · **GEORGE's part:** none

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{BRANDS}} | The brands the system serves, for example George Shamblin (author and teaching), G's Plan, TOI | Module 04 answers; this module can use the default list until then |

## Why this matters
Without a map, each agent invents its own idea of where things are, and memory splits into pieces. This map is short on purpose. It shows the one source of truth, the places work happens, and the one door every finished piece passes through before it reaches the public.

## Steps
1. **Learn the map.**

```
                      george-os  (private GitHub repo, branch main = THE source of truth)
     BRAIN · NOW · WORKLOG · handoffs · people · projects · decisions · voice · calendar · framework
             │                         │                              │
   claude.ai Projects           Claude Code                     Scheduled tasks
   (one per brand)              (desktop Code tab or            (cloud, on his Pro plan)
   READ the repo                claude.ai/code)                 draft and stage weekly work
   via GitHub sync              WRITES the repo                 WRITE the repo
             │                         │                              │
             │                 Managed Agents (Claude API, separate credits, capped)
             │                 always-on jobs, brief from AGENT-BRIEF, results to the dashboard
             └──────────── george-* skills (his kit, his to change) ───────────┘
                                       │
                 Dashboard (one private link, Google sign-in, 30-day session)
                 approvals by version · his numbers · team per brand
                                       │
                 Publish: Webflow (automatic) · Substack, YouTube, socials (ready-to-paste)

   Secrets: 1Password with op run (laptop) · network secrets (cloud). Never in chat.
```

   *Check:* you can say which surfaces can **write** to the brain (Claude Code, scheduled tasks, Managed Agents through a repo step) and which only **read** (claude.ai Projects).
2. **Learn the four flows.**
   - **Memory flow:** every session pulls `main`, reads, works, writes a handoff, and pushes to `main`.
   - **Work flow:** a skill drafts, `george-slop-check` checks, the draft goes to the dashboard as a version, a person approves, and the publish step claims that exact version.
   - **Data flow:** his numbers (site, YouTube, Substack, and giving totals only if George permits) come into the dashboard on a schedule (module 17).
   - **Change flow:** George or Trevor changes the framework, the change lands as a proposal, and George decides (module 31).

   *Check:* trace one Thursday article through the work flow out loud.
3. **Save the map** as `george-os/SYSTEM-MAP.md` with {{BRANDS}} filled in. *Check:* the file is on `main` once module 06 exists.

## GEORGE does
- Nothing.

## Done when
- [ ] The agent can trace memory, work, data and change flows.
- [ ] `SYSTEM-MAP.md` is saved (after 06).

## Writes to
- `george-os/SYSTEM-MAP.md`

## Next
- [04 Inventory and Interview](./04-INVENTORY-AND-INTERVIEW.md)
