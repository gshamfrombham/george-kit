# 15 · Dashboard: What and Why
> One private web address where George and his helpers see everything in flight, approve work, and track his numbers, so nothing depends on George remembering it.

**Run it:** `Run module 15 from my framework. Explain my dashboard plan back to me and confirm who it's for.`
**Needs first:** 04, 05
**Time:** about 15 minutes · **GEORGE's part:** confirm the screens and the people

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{DASHBOARD_NAME}} | What George wants to call it | ask George (default: "G's Desk") |
| {{BRANDS}} | The areas of his work to organize by | G's Plan, TOI, Author, CEL; confirm with George |
| {{HELPERS}} | People who help him and should see it | ask George |
| {{TOP_NUMBERS}} | The 5 to 8 numbers George actually cares about | ask George |
| {{REVIEWER}} | The teammate who double checks everything going out | ask George |

## Why this matters
Right now George is the dashboard: the plan lives in his head, approvals happen in text threads, and every helper asks him where things stand. That is why he is too hands-on and why things get relearned. A dashboard moves the state out of his head and into one place his agents write to and his team reads from. He opens one link, sees what needs him, taps Approve or Request changes, and goes back to his real work.

## Steps
1. **Explain the screens to George** in plain words, using the shell at [../dashboard-proto/](../dashboard-proto/) so he can click through it:
   - **Home:** what needs him today, what shipped this week, what is late.
   - **Approvals:** each item shows a preview, the slop-check report, and buttons for Approve, Request changes (with a comment) and Reject. An approval covers one exact version; any edit sends it back.
   - **Calendar:** the weekly rhythm from module [24](./24-WEEKLY-RHYTHM.md), with each slot's status.
   - **Brands:** one page per area in {{BRANDS}}: what is in flight, its numbers, its people.
   - **Going out:** everything scheduled for the next 7 days across Facebook, Instagram, Meta ads, email, Substack, the website and YouTube, in time order. This is where George's reviewer ({{REVIEWER}}, module [18](./18-TEAM-ACCESS.md)) double checks every package before it leaves. Ad spend still waits for George.
   - **Memory:** `NOW.md`, the newest handoffs and the work log, readable on a phone. This is the cure for relearning.
   - **Automations:** every scheduled task and Managed Agent, its last run, its result, and an off switch.
   - **Data:** {{TOP_NUMBERS}} over time, pulled in daily (module [17](./17-DASHBOARD-DATA-SOURCES.md)).
   - **Team:** who can see and who can approve, per brand (module [18](./18-TEAM-ACCESS.md)).
   *Check:* George has clicked through the shell and said which screens he wants first.
2. **Confirm the people.** List {{HELPERS}} with the brands each should see and whether they approve or only view. *Check:* the list is written to `people/` and to `projects/dashboard.md`.
3. **Confirm the numbers.** Write {{TOP_NUMBERS}} with where each comes from. Leave out any number with no source yet; don't invent one. *Check:* each number has a named source in module 17's list.
4. **Write the brief** to `projects/dashboard.md` using [./templates/PROJECT.md](./templates/PROJECT.md): goal, screens in order, people, numbers, and the build steps from module 16 as checkboxes. *Check:* the file exists and is pushed to `main`.

## GEORGE does
- Clicks through the shell and picks the screens he wants first.
- Names his helpers and what each can do.
- Names the numbers he cares about.

## Done when
- [ ] George has seen the shell
- [ ] `projects/dashboard.md` lists screens, people, roles and numbers
- [ ] Every number has a source

## Writes to
- `projects/dashboard.md`, `people/*.md`, `WORKLOG.md`, a handoff

## Next
- [16 · Dashboard Build](./16-DASHBOARD-BUILD.md)
