---
name: george-handoff
description: >-
  Use at the end of any session, scheduled task or long job for George, or when he says "wrap up,"
  "save this," "hand off," "write it down," or "we're done for today." Writes the WORKLOG line, a
  handoff file and NOW.md updates, then pushes to main so the next agent starts where this one
  stopped.
---

# Handoff

If it isn't written down on `main`, the next agent won't know it. This skill closes every session the same way.

## When to use

- The end of every session that changed anything.
- Every 30 minutes during a long job (a checkpoint), in shorter form.
- Before a session might run out of room or time.

## Steps

1. **WORKLOG.md.** Append one line: `YYYY-MM-DD | <who: session, scheduled task name or agent> | what was done | link or file`.
2. **Handoff file.** Write `handoffs/YYYY-MM-DD-<short-slug>.md` from `templates/HANDOFF.md`: Done, Where I stopped, Next (with an owner and a date), Open questions for George, Files touched.
3. **NOW.md.** Update the whiteboard: move finished items out, add new ones, keep it to one screen.
4. **Projects.** Tick the boxes in any `projects/<job>.md` you worked on, with proof (a link, a file, a published URL).
5. **New facts.** Anything learned about George, a person or a decision goes through george-brain, not into the handoff alone.
6. **Save to main.** `git add` the changed files, commit with a plain message, then `git pull --rebase origin main && git push origin main`. Report the commit hash.
7. **If the push fails**, don't force it. Pull, resolve, push again, and say what happened.

## Checkpoint (long jobs)

Every 30 minutes: tick the project boxes, one WORKLOG line marked `checkpoint`, commit and push. No handoff file until the end.

## Rules

- Never force-push. Never rewrite history on `main`.
- Handoffs are facts, not feelings: what is true, what is next, who owns it.
- If a session was in a claude.ai Project (which can't write to the repo), produce the handoff as a block George can paste into Claude Code with "file this."
- No em dashes; plain words.

## Output

"Saved: <commit hash>. Next: <the one most important next step>."

## Try saying

"Wrap up and save everything."

## Make it yours

Change the handoff headings in `templates/HANDOFF.md`. Keep "Next" with an owner and a date, or the next session will drift.
