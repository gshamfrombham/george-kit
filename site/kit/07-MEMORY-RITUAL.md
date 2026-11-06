# 07 · Memory Ritual
> Every session starts and ends the same way, so no agent forgets what another did and long jobs never lose their place.

**Run it:** `Run module 07 from my framework.`
**Needs first:** 06
**Time:** about 20 minutes · **GEORGE's part:** none

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{CHECKPOINT_MINUTES}} | How often long jobs save progress | Default 30 |
| {{HANDOFFS_TO_READ}} | How many recent handoffs each session reads | Default 3 |

## Why this matters
George named two ways agents fail him: one agent doesn't know what another did, and long sessions forget how they started. Both come from the same gap: nothing is written down at the right moments. This ritual closes that gap with three habits: read before starting, save while working, write before stopping.

## Steps
1. **Write the start ritual** into `CLAUDE.md` and `specs/S-1-session-start.md`:
   - `git pull` on `main`.
   - Read `BRAIN.md`, `NOW.md` and the {{HANDOFFS_TO_READ}} newest files in `handoffs/`.
   - Say in one line what you picked up and what you think is next.

   *Check:* a fresh session opens with that one line without being asked.
2. **Write the checkpoint habit** into `CLAUDE.md` and `specs/S-2-checkpoint.md`. Any job longer than one sitting gets a `projects/<job>.md` from the [PROJECT template](./templates/PROJECT.md): the goal, a checkbox per step, and "where I am". Every {{CHECKPOINT_MINUTES}} minutes, tick the boxes, update "where I am", commit and push to `main`. *Check:* during a long job, `git log` shows checkpoint commits.
3. **Write the end ritual** into `CLAUDE.md` and `specs/S-3-session-end.md`:
   - Append one line to `WORKLOG.md`: date, surface (laptop, cloud, scheduled task, managed agent), what was done, link.
   - Write `handoffs/<YYYY-MM-DD>-<slug>.md` from the [HANDOFF template](./templates/HANDOFF.md): done, where I stopped, next, open questions.
   - Update `NOW.md`.
   - `git pull --rebase origin main && git push origin main`, and report the commit.

   *Check:* the commit is on `origin/main`.
4. **Handle claude.ai Projects, which can't write.** Projects read the repo through GitHub sync but can't save to it. Put this in every Project's instructions: "Read BRAIN.md, NOW.md and the newest handoffs first. You can't save to the brain. If we decide or make anything worth keeping, end with a handoff note for me to file in Code." George pastes that note into a Code session and says "file this". *Check:* a test Project chat ends with a handoff note, and Code files it.
5. **Handle scheduled tasks and Managed Agents.** Cloud scheduled tasks push to `claude/` branches by default. For `george-os` only, turn on **unrestricted branch pushes** in the task's repository settings, so memory lands on `main` (module 20). Managed Agents end every run by writing their handoff through the same steps (module 22). *Check:* two scheduled runs in a row, where the second names what the first did.
6. **Run the two-session test.** Session one (cloud) does a small job and ends with the ritual. Session two (on the laptop) starts with the ritual. *Check:* session two names session one's work without George saying anything.

## GEORGE does
- Nothing. If an agent ever starts cold, he says "Run the start ritual."

## Done when
- [ ] `CLAUDE.md` holds start, checkpoint and end rituals.
- [ ] `specs/S-1` to `S-3` exist.
- [ ] Every Project's instructions carry the read-only note.
- [ ] The two-session test passes.

## Writes to
- `george-os/CLAUDE.md`
- `george-os/specs/S-1-session-start.md`, `S-2-checkpoint.md`, `S-3-session-end.md`

## Next
- [08 Claude App Setup](./08-CLAUDE-APP-SETUP.md)
