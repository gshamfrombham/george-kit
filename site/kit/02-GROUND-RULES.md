# 02 · Ground Rules
> The rules every agent, skill and automation follows, written into the brain repo so no agent ever has to guess.

**Run it:** `Run module 02 from my framework.`
**Needs first:** 01
**Time:** about 10 minutes · **GEORGE's part:** read the rules and change any he disagrees with

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{APPROVERS_DEFAULT}} | Who besides George may approve, if anyone | Ask George once (default: George only) |
| {{SCRIPTURE_TRANSLATION}} | The Bible translation George quotes | His Claude memory or recent posts; confirm with George |
| {{QUIET_HOURS}} | Hours when no automation should message him | Ask George once (default: 9pm to 6am Central) |

## Why this matters
Agents repeat mistakes when the rules live in someone's head. Written once, these rules travel with every session, every skill and every automation. They also stop the three things that hurt most: something published that George didn't see, a key leaked in a chat, and personal and work systems tangled together.

## Steps
1. **Write the ten rules into the brain repo** as `decisions/0001-ground-rules.md`, using the [DECISION template](./templates/DECISION.md):
   1. **Drafts, George decides.** Nothing is sent, posted, published or paid without an Approve on the dashboard from George or someone in {{APPROVERS_DEFAULT}}.
   2. **The brain repo is the memory.** If it isn't in `george-os` on `main`, the next agent won't know it. Write it down.
   3. **Same start, same end, every session.** Pull and read at the start; handoff and push at the end (module 07).
   4. **No passwords or keys in chat.** Use a connector or 1Password (module 09). A key that lands in a chat is leaked: change it, then log it in `WORKLOG.md`.
   5. **Personal and work stay apart.** This system is George's personal and ministry system on his own accounts. His agency and sales jobs have their own work systems. Don't copy their data in here, and don't connect these agents to theirs (module 27).
   6. **No made-up facts.** No invented quotes, dates, numbers, endorsements, reviews or scripture references. Quote scripture as text, with book, chapter and verse, in {{SCRIPTURE_TRANSLATION}}. Mark anything unsure `[check]`.
   7. **His voice, never "AI voice".** Every draft passes `george-slop-check` before it reaches the dashboard (module 13).
   8. **His kit, his rules.** The george-* skills and his framework copies are his. Updates arrive as proposals and are never applied over his edits (module 10).
   9. **Prove it.** Every step reports what its check showed. A green message is not proof; the result is.
   10. **Quiet hours.** No automation messages George during {{QUIET_HOURS}} unless something is broken and costing money.

   *Check:* the file exists on `main` and opens cleanly.
2. **Put a short copy where every agent sees it.** Add the ten rules, one line each, to the top of `BRAIN.md` and to the `CLAUDE.md` file at the root of `george-os`, which Claude Code reads automatically. *Check:* a new Code session in the repo can quote rule 4 without being told where to look.
3. **Show George the rules.** Ask him to strike or change anything. Record every change as a new decision file. *Check:* George says "these are mine".

## GEORGE does
- Reads the ten rules and changes any he wants.
- Names anyone else who may approve, if anyone.

## Done when
- [ ] `decisions/0001-ground-rules.md` is on `main`.
- [ ] `BRAIN.md` and `CLAUDE.md` both carry the short version.
- [ ] George has confirmed the rules.

## Writes to
- `george-os/decisions/0001-ground-rules.md`
- `george-os/BRAIN.md` (top section)
- `george-os/CLAUDE.md`

## Next
- [03 System Map](./03-SYSTEM-MAP.md)

(If the brain repo doesn't exist yet, hold these files in the session and write them when module 06 creates the repo.)
