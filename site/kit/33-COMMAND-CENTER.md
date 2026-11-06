# 33 · Command Center
> George runs the whole operation from Claude Code with a few short commands, while his reviewer checks everything before it goes out.

**Run it:** `Run module 33 from my framework. Set up my command center and teach me the commands.`
**Needs first:** 07, 10, 16, 23, 28
**Time:** about 40 minutes · **GEORGE's part:** try each command once and rename any he'd say differently

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{REVIEWER}} | The team member who signs in to the dashboard to double check what's going out | ask George; module 18 |
| {{COMMAND_WORDS}} | Any words George prefers for a command ("what's live" instead of "status") | ask George after he tries them |
| {{DAILY_TIME}} | When the daily check happens (default 7:30am America/Chicago) | ask George |
| {{WEEKLY_TIME}} | When the weekly run happens (default Sunday 5pm America/Chicago) | module 24 |

## Why this matters
George shouldn't have to remember which app does what or which skill to name. A short set of commands, the same every day, lets him steer the ship in a sentence: see what's happening, start work, hold something back. Every command ends in the dashboard, where {{REVIEWER}} can see and check it, so nothing reaches his readers, donors or ad budget without two people: a passed review by {{REVIEWER}} (or another named reviewer) and George's final approval, on the same version.

## The commands
George types these in Claude Code (the desktop Code tab or claude.ai/code). The `george-command` skill reads the sentence, runs the right skill, and puts the result in the dashboard.

| Command | What happens | Skills used | Lands in |
|---|---|---|---|
| `status` | One screen: what's waiting for approval, what's scheduled, what published since yesterday, anything broken | george-command, george-session-start | reply in chat, read from the dashboard |
| `what's going out this week` | Every item scheduled in the next 7 days by channel, with its approval state and who reviewed it | george-command, george-approval-queue | reply plus a link to the dashboard week view |
| `draft Thursday` | Drafts Thursday's article package (article, Substack post, email, social captions) | george-weekly-article, george-repurpose, george-slop-check | a new dashboard item, pending |
| `draft Tuesday` | Drafts Tuesday's video package | george-video-package, george-repurpose, george-slop-check | a new dashboard item, pending |
| `show me what {{REVIEWER}} flagged` | Lists items the reviewer commented on or sent back, newest first, with her notes | george-command, george-approval-queue | reply in chat |
| `fix what {{REVIEWER}} flagged` | Makes a new version of each flagged item that answers her notes | george-voice, george-slop-check | new versions; approval resets to pending |
| `approve <item>` | Records George's approval on the current version, from the dashboard only | george-approval-queue | the dashboard asks him to confirm on screen (agents can't approve) |
| `pause ads` | Tells George plainly that running ads keep running until a person pauses them in Ads Manager, opens the exact steps for each live ad, and records the pause on the dashboard once George confirms it's done | george-command, module 35 | an urgent dashboard item that closes only when the pause is confirmed |
| `pause <channel>` | Pauses that channel's publisher job on the dashboard (`PATCH /api/automations/:id`, which George confirms on screen) so nothing new goes out there; anything already scheduled inside the channel itself (Meta Business Suite, the email platform) must be unscheduled there by a person | george-command | the job shows paused; an item lists anything still scheduled outside |
| `pause everything` | Opens the dashboard's **Pause everything** button for George to press (only George can pause all), which stops every scheduled task, Managed Agent and publisher, then gives the Ads Manager steps for any live ads (those keep running until a person pauses them) | george-command | an urgent dashboard item listing what stopped and which ads still need a person |
| `run the brief` | The weekly brief and scoreboard right now | george-weekly-brief | reply plus a brief item in the dashboard |
| `G's Plan` / `TOI` | What's due, ready and stuck for that brand this week | george-gsplan, george-missions-update | reply in chat |
| `remember <fact>` | Saves a fact with its source | george-brain | `BRAIN.md` or a project file |
| `wrap up` | The session-end ritual | george-handoff | handoff on `main` |

## The routines
- **Daily ({{DAILY_TIME}}):** George types `status`. The agent answers in under ten lines: waiting for him, waiting for {{REVIEWER}}, going out today, anything broken. One tap into the dashboard handles approvals.
- **Weekly ({{WEEKLY_TIME}}):** the weekly brief arrives on its own (module 24). George reads it, then types `what's going out this week` and approves the week's packages after {{REVIEWER}} has checked them.

## Steps
1. **Install the command skill.** Confirm `george-command` is installed and lists every command above with the skill it calls. *Check:* typing `status` in a fresh Claude Code session returns the status screen.
2. **Wire every command to the dashboard.** Each command that creates work posts a dashboard item through the API, with brand, channel, destinations and the first version. *Check:* `draft Thursday` creates one pending item with a slop-check report.
3. **Two-person rule.** Every item going out needs a passed review by {{REVIEWER}} (or another named reviewer) and then George's final approval, by two different people, on the same version. The dashboard enforces it (module 16): George's approve button stays off until the review has passed, and any edit resets both. *Check:* George can't approve a test item until the reviewer passes it, and an edit after approval resets both.
4. **Make sure commands can't publish.** No command publishes, sends, launches or changes spend, and no command claims to stop live ads by itself. Those only happen through the approval flow (modules 16, 23, 28) or by a person in the platform. *Check:* asking `post this to Facebook now` produces a dashboard item, not a post.
5. **Teach George.** Show him the table, have him try `status`, `draft Thursday` and `show me what {{REVIEWER}} flagged`, and record any words he'd rather use as {{COMMAND_WORDS}}. *Check:* his preferred words work.
6. **Pin the commands.** Put the command table in each claude.ai Project's instructions and in `framework/33-COMMAND-CENTER.md` in george-os. *Check:* he can find them without this page.

## GEORGE does
- Tries each command once and says what he'd rather type.
- Gives the final approval from the dashboard, after {{REVIEWER}}'s review has passed.

## Done when
- [ ] Every command works in a fresh session
- [ ] Every command that makes work creates a dashboard item
- [ ] No command can publish, send, launch or change spend
- [ ] The two-person rule holds: no approval without a passed review by someone other than George, on the same version
- [ ] `pause everything` stops all automations and lists any live ads still needing a person
- [ ] George uses `status` daily without looking anything up

## Writes to
- `skills/george-command/SKILL.md` (his copy), `framework/33-COMMAND-CENTER.md`
- `decisions/` (his command words), `WORKLOG.md`, a handoff

## Next
- [34 · Meta Social](./34-META-SOCIAL.md)
