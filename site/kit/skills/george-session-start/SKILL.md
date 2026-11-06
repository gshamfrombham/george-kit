---
name: george-session-start
description: >-
  Use at the start of any Claude Code session, scheduled task or long job for George, or when he says
  "start up," "catch up," "where were we," "what's going on," or "read the brain." Pulls the george-os
  brain repo and reads BRAIN, NOW and the newest handoffs so no one has to explain things again.
---

# Session start

The cure for relearning everything. Every session opens the same way, so a new agent knows what the last one knew.

## When to use

- The first thing in any Claude Code session that touches George's work.
- The first step of every scheduled task and Managed Agent run.
- Any time George says "catch up" or "where were we."

## Inputs

- The `george-os` repo (private, in George's personal GitHub account). Branch `main` is the truth.

## Steps

1. **Pull.** `git pull` on `main` in george-os. If there are local changes you didn't make, stop and tell George; don't overwrite them.
2. **Read, in this order:** `BRAIN.md`, `NOW.md`, the three newest files in `handoffs/`, and the `projects/<job>.md` file for any job named in NOW or in the request.
3. **Read the boundaries** (`decisions/0004-boundaries.md`): which identity and mailbox belongs to which part of George's life (personal, ministry, work). Keep this session inside one identity.
4. **Read the voice** (`voice/VOICE.md`) if the session will write anything George will publish or send.
5. **Say what you picked up in one line**, for example: "Picked up: Thursday article on the four Gospels is drafted and waiting for approval; TOI donor update due Friday; open question on the Cuba trip dates."
6. **Name anything stale.** If NOW.md is more than a week old or a handoff says "next" for a date that has passed, say so.
7. If the session is a scheduled task or a Managed Agent run, continue with its brief. Otherwise wait for George.

## Rules

- Never guess past the brain. If a fact is not in george-os and you need it, ask George once, in a batch, then save the answer with george-brain.
- Never read or write anyone else's systems from here. George's work for other companies stays in those companies' systems, per `decisions/0004-boundaries.md`. If a request would cross identities (for example, a work task in a ministry session), stop and ask George which identity it belongs to.
- No keys in chat, ever. If a step needs a secret, see george-secrets.

## Output

One line of what you picked up, plus any stale items. No summaries of the whole brain.

## Try saying

"Start up and tell me where we are."

## Make it yours

Add files George wants read every time (for example `calendar/this-month.md`) to step 2. Keep the list short: every file read costs usage on the Pro plan.
