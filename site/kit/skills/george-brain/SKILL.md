---
name: george-brain
description: >-
  Use when George says "remember that," "save this fact," "add this person," "note this decision,"
  "update the brain," or when a session learns something about George, his people, G's Plan, TOI or
  his work that the next agent should know. Adds it to george-os once, with its source, without
  duplicates.
---

# Brain

Keeps the george-os brain current, so facts are learned once.

## Where things go

| Kind of thing | File |
|---|---|
| Who George is, roles, audiences, channels | `BRAIN.md` |
| A person (team, host, ministry partner; never a donor) | `people/<first-last>.md` from `templates/PERSON.md` |
| Donors and giving | never stored here: a pointer to the donation platform plus aggregates only (counts, totals) in `projects/toi/PLAYBOOK.md` |
| An ongoing effort (G's Plan workstream, a TOI trip, a book launch) | `projects/<name>.md` from `templates/PROJECT.md` |
| A choice and why | `decisions/NNNN-<slug>.md` from `templates/DECISION.md` |
| This week's state | `NOW.md` |
| How he writes | `voice/VOICE.md` (only George's own words) |

## Steps

1. **Search first.** Look for the fact in the brain (file names and a text search). If it exists, update it in place; never add a second copy.
2. **Write it with a source and a date**: "Source: George, chat 2026-11-12" or "Source: georgeshamblin.com/about, read 2026-11-12."
3. **If it contradicts something already there**, keep both lines, mark the old one `superseded <date>`, and tell George in one line.
4. **Private things stay private.** Donors never get people files. Donor names, amounts and giving history never go into george-os or any git repo, even if asked; point to the donation platform instead and store only aggregates (counts, totals). Health matters, family details and anything George marks private go only where he says, never into a public page or a post.
5. **Save** through george-handoff (or commit and push to `main` straight away for a single fact).

## Rules

- Only facts George gave or that come from a source he can open. Mark guesses `[check]` and ask.
- Never copy work data from his other jobs into the brain. Those stay in their own systems.
- Short lines. One fact per line.

## Output

"Saved to <file>: <the fact>." Or "Already known, updated <file>."

## Try saying

"Remember that the Cuba trip in March is the 14th to the 21st, source: my email from Pastor Luis."

## Make it yours

Add folders for whatever George tracks often (sermons, prayer requests, speaking dates) and add them to the table above.
