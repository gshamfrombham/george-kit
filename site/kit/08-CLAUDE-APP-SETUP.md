# 08 · Claude App Setup
> George's Claude Pro account is set up so Projects, memory, connectors and Claude Code all point at the same brain.

**Run it:** `Run module 08 from my framework.`
**Needs first:** 06, 07
**Time:** about 30 minutes · **GEORGE's part:** click through settings and connector sign-ins

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{BRANDS}} | One Project per brand | Module 04 (for example George Shamblin author and teaching, G's Plan, TOI) |
| {{EXTRA_USAGE_CHOICE}} | Whether extra usage credits are on, and the cap | Ask George (default: off) |

## Why this matters
George is on **Claude Pro**, which includes Claude Code (the desktop app's Code tab and claude.ai/code), cloud sessions, custom Skills, Projects with their own memory, and scheduled tasks. Pro has lower usage limits than higher plans, so the setup stays lean: one Project per brand, skills that do one job each, and automations that do their work and stop. Each surface has one job: Projects are reading rooms, and Claude Code is the workshop that writes to the brain.

## Steps
1. **Check the plan.** Settings shows Pro. Note the usage page and when limits reset. *Check:* George sees his plan and usage.
2. **Decide extra usage.** Settings > Usage: if extra usage credits are on, automations keep running past the plan limit and bill per use. Record {{EXTRA_USAGE_CHOICE}} in `NOW.md`. Default is off, so automations simply stop at the limit. *Check:* the setting matches what George chose.
3. **Turn on code execution and memory.** Settings > Capabilities: turn on code execution and file creation (skills need it). Turn on memory. Each Project keeps its own memory; the repo carries what must cross between them. *Check:* both toggles are on.
4. **Create one private Project per brand.** For each of {{BRANDS}}, create a **private** Project. In project knowledge, add `george-os` through the GitHub integration. Paste into the instructions: "Read BRAIN.md, NOW.md and the newest handoffs first. You can't save to the brain. If we decide or make anything worth keeping, end with a handoff note for me to file in Code." GitHub sync works only in private Projects, and it is manual: click **Sync now** at the start of a chat if the brain changed. *Check:* in each Project, "What is this brand and what's in flight?" gets an answer from the repo.
5. **Add connectors.** Customize > Connectors: Google Drive, Gmail, Google Calendar, GitHub, and Webflow (its connector lives at mcp.webflow.com). Connectors sign in with OAuth, so no key ever touches a chat. Depending on what George grants, a connector may be able to draft or send email, create or change events, or edit files. **The rule that nothing is sent, created or published without an Approve is ours, not a technical limit**, so agents follow it whatever the connector allows. For unattended scheduled tasks and agents, remove every connector the job doesn't need. *Check:* a Project chat can read one calendar event and one Drive doc.
6. **Set up Claude Code.** In the desktop app, open the **Code** tab. A local session runs on the laptop (needed for installs). A cloud session runs at claude.ai/code and keeps going with the laptop closed. Connect GitHub through the browser onboarding so cloud sessions can open `george-os`. *Check:* one local and one cloud session can both read `BRAIN.md`.
7. **Point every surface at the ritual.** Confirm `CLAUDE.md` in the repo carries the rules and ritual (module 07); Claude Code reads it automatically. *Check:* a new Code session opens with the one-line pickup.

## GEORGE does
- Clicks the settings toggles and connector sign-ins.
- Chooses extra usage on or off.
- Creates the Projects if the agent can't (it will tell him the exact clicks).

## Done when
- [ ] Code execution and memory are on; the extra usage choice is recorded.
- [ ] One private Project per brand, synced to `george-os`, with the read-only note.
- [ ] Drive, Gmail, Calendar, GitHub and Webflow connectors work, and unattended jobs carry only the connectors they need.
- [ ] Local and cloud Code sessions both open the brain.

## Writes to
- `george-os/NOW.md` (extra usage choice)
- `george-os/inventory/projects.md` (the new Project list)

## Next
- [09 Passwords and Secrets](./09-PASSWORDS-AND-SECRETS.md)
