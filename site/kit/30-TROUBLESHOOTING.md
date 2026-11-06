# 30 · Troubleshooting
> What to do when something in the system goes wrong, written so the agent can fix most of it without George.

**Run it:** `Run module 30 from my framework. Here's what went wrong: <describe it>.`
**Needs first:** nothing (use it any time)
**Time:** 5 to 20 minutes per problem · **GEORGE's part:** only where a fix needs his sign-in or his yes

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{SYMPTOM}} | What George or the dashboard noticed | George's message or the alert item |
| {{WHEN}} | When it started | WORKLOG.md, task run history |
| {{LAST_GOOD}} | The last time it worked | WORKLOG.md, receipts |

## Why this matters
Every fix that gets written down is a problem George never has to solve twice. Most failures here have a known cause and a two-minute fix. Writing the fix into `WORKLOG.md` and, when it's new, into this file's local copy, is how the system learns.

## Steps
1. **Find the matching problem below.** *Check:* you can name which row it is, or say "new problem".
2. **Run the fix.** *Check:* the "Proof it's fixed" line passes.
3. **Log it.** Add a line to `WORKLOG.md`: date, symptom, cause, fix. *Check:* the line is on `main`.
4. **If it's new, add it.** Add a row to `projects/troubleshooting.md` in `george-os` so the next agent knows it. *Check:* the row exists.

### Problems and fixes
**The agent forgot what we were doing.**
- Likely cause: the session didn't read the brain at start, or the last session didn't push its handoff.
- Fix: run `george-session-start`. If the newest handoff is missing, check `WORKLOG.md` and the job's `projects/<job>.md` checkboxes to rebuild where things stopped, then write the missing handoff.
- Proof it's fixed: the agent names the last thing done and the next step without George explaining. George taps "context lost" so it's counted.

**A claude.ai Project answers from old information.**
- Likely cause: Project GitHub sync is manual and read-only.
- Fix: in the Project, open project knowledge and click **Sync now**. Remember Projects can't save to the brain; anything decided there ends with a handoff note for Claude Code to file.
- Proof it's fixed: the Project quotes today's `NOW.md`.

**A push went to a `claude/` branch instead of `main`.**
- Likely cause: cloud scheduled tasks push to `claude/` branches unless unrestricted branch pushes are on for that repo.
- Fix: turn on unrestricted branch pushes for `george-os` in that task's repository settings. Merge the stray branch into `main` (pull with rebase first), then delete the stray branch.
- Proof it's fixed: the next run's handoff appears on `main`, and the following run reads it.

**Hit the Pro usage limit.**
- Likely cause: too many or too long sessions and tasks in the same window.
- Fix: check whether extra usage is on (Settings > Usage) and leave it as George chose. Shorten task prompts, have tasks read only the files they need, move heavy weekly work to off-peak times, and stagger tasks. If limits keep hitting, list the options for George: trim automations, move a job to Managed Agents under its cap, or change plans.
- Proof it's fixed: no limit hits in the next week's scoreboard.

**A scheduled task didn't fire.**
- Likely cause: the task was paused, hit the plan limit, its trigger token changed, or it's a desktop task and the computer was asleep.
- Fix: open claude.ai/code/routines (or the desktop Scheduled page) and check the task's run history and status. Cloud tasks keep running with the laptop closed; desktop tasks don't. Re-run it with "Run now". If it's the publish task, confirm the dashboard's hourly poll (the backup) picked up the approved item.
- Proof it's fixed: a successful run in history and a handoff on `main`.

**The dashboard keeps asking people to sign in, or loops.**
- Likely cause: the Access application doesn't cover the hostname they're using, the person's email isn't in the policy, or the session length is set short.
- Fix: in Cloudflare Zero Trust, confirm the Access application covers both the production hostname and the preview hostnames, the person's email is in the policy (and in the dashboard's `people` table), and the session length is 30 days. Have them clear just that site's cookies and sign in again.
- Proof it's fixed: they sign in once and their second visit goes straight in.

**A skill didn't trigger.**
- Likely cause: it isn't uploaded or switched on (claude.ai), code execution is off, it isn't installed (Claude Code), or the request didn't match its description.
- Fix: in claude.ai check Customize > Skills (on) and Settings > Capabilities (code execution on). In Claude Code check `~/.claude/skills/george-<name>/SKILL.md` exists. Try the skill's example sentence, or name it directly: "Use george-voice to…". If it still misses, improve the skill's description line in his copy.
- Proof it's fixed: the example sentence triggers it in a fresh session.

**Managed Agents cost jumped.**
- Likely cause: a session left running, a loop that keeps starting sessions, heavy web search, or a bigger model than needed.
- Fix: in the Console, look at usage by day and stop any running sessions. Pause whatever starts sessions (the Worker cron or scheduled task). Check the recipe for a missing stop condition, a missing time limit, or a search loop. Switch long drafting work to a smaller model where the output passes the slop check. Keep the monthly cap in place.
- Proof it's fixed: daily spend is back under the cap's pace, and the scoreboard spend line is green.

**A key or password showed up in a chat.**
- Treat it as leaked. Don't keep using it.
- Fix: rotate it right away in the service it belongs to (make a new one, revoke the old one). Store the new one in 1Password or as a cloud network secret, never in chat. Add a line to `WORKLOG.md` with what leaked (name only, never the value), when, and when it was rotated. Check the module 9 dummy-value test still passes.
- Proof it's fixed: the old key is revoked, the new one works through `op run` or a network secret, and it appears nowhere in the transcript.

**An approved item didn't publish.**
- Likely cause: the publish claim failed (the item was edited after approval, so it reset to pending), the Webflow connector sign-in expired, or the trigger didn't fire.
- Fix: open the item. If it says pending, someone edited it; get a fresh approval. If it says approved, run the publish task manually. If Webflow refused, have George sign in to the connector again.
- Proof it's fixed: the item shows published with a receipt URL.

## GEORGE does
- Signs in again where a fix needs it (Webflow, Cloudflare, Console).
- Says yes to anything that changes cost or turns off an automation.

## Done when
- [ ] The problem's proof line passes
- [ ] A WORKLOG line records symptom, cause and fix
- [ ] New problems are added to `projects/troubleshooting.md`

## Writes to
- `WORKLOG.md`, `projects/troubleshooting.md`, a handoff

## Next
- Back to whatever module was running, or [31 · Iteration Loop](./31-ITERATION-LOOP.md) to send the lesson to Trevor
