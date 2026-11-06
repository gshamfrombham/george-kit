# 31 · Iteration Loop
> How George and Trevor improve this framework together, round after round, without anyone's changes getting overwritten.

**Run it:** `Run module 31 from my framework. Collect this round's feedback and get it ready to send Trevor.`
**Needs first:** 06, 10
**Time:** about 15 minutes a round · **GEORGE's part:** add notes as things come up; decide which updates to accept

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{KIT_VERSION}} | The framework version George's copy is on (for example v1.0) | the kit's CHANGELOG.md and `upstream/VERSION` |
| {{ROUND}} | Which feedback round this is | `FEEDBACK.md` |
| {{SEND_TO_TREVOR}} | How George shares a round with Trevor (a shared doc, an email he sends himself, or a text) | ask George |

## Why this matters
This framework is a first draft. George and Trevor will improve it many times. That only works if George's own changes are never wiped out by an update, every round's lessons are written down, and both of them always know which version they're talking about.

## How it works
- **Versions.** The kit has a version number (v1.0, v1.1, v2.0) and a public CHANGELOG. George's copy records the version it came from in `upstream/VERSION`.
- **George's copy is his.** Once a module, template or skill is in his repo, he can change it freely. An update never overwrites it.
- **Updates arrive as proposals.** When Trevor publishes a new version, George's agent downloads it into `upstream/<version>/` and writes `upstream/<version>/PROPOSAL.md`: what changed, which of George's files it touches, and a suggested merge for each. George decides file by file. The skill installer works the same way: it skips any skill George edited and puts the new one in `upstream/`.
- **Feedback goes in one file.** `FEEDBACK.md` in `george-os` (from [the FEEDBACK template](./templates/FEEDBACK.md)) collects notes as they happen: what was confusing, what broke, what George wishes it did, and what worked well.
- **A round is a send.** When George is ready, the agent turns the open feedback into a short round summary for Trevor. Nothing private goes in it: no donor names, no field names, no work system details.

## Steps
1. **Set the version.** Write {{KIT_VERSION}} to `upstream/VERSION`. *Check:* the file exists on `main`.
2. **Start FEEDBACK.md.** Create it from the template if missing. *Check:* the file is on `main` with an empty "Open" section.
3. **Log as you go.** Whenever George says something like "this was annoying" or "I wish it…", or a module needed a workaround, add a line under Open with the date, the module number, and what happened. *Check:* the lines name a module.
4. **Prepare a round.** When George asks, group the open lines by module, rank them (broken, confusing, wish, worked well), and write `feedback/round-{{ROUND}}.md`: under one page, with George's words where possible, and with private details removed. *Check:* the file is on `main` and contains no names of people in the field, donors, or work clients.
5. **Send it George's way.** Hand the summary to George to send by {{SEND_TO_TREVOR}}. The agent never sends it. *Check:* George confirms he sent it; move those lines to "Sent in round {{ROUND}}".
6. **Take in an update.** When a new version is out, download it into `upstream/<version>/`, compare it to George's files, and write `PROPOSAL.md`. Change nothing yet. *Check:* the proposal lists every changed file with keep, take, or merge.
7. **Apply what George picks.** Apply only the files George approved, then commit with the version in the message. Update `upstream/VERSION`. *Check:* `git log` shows the merge commit, and no file George didn't approve changed.
8. **Close the loop.** Add a line to `WORKLOG.md` and a handoff. *Check:* the handoff names the version now running.

### What a good round summary looks like
```
Round 3 · kit v1.1 · <date>
Broken
- 20 Scheduled Tasks: Thursday publish fired twice once (fixed locally; suggest a claim note in the module)
Confusing
- 16 Dashboard Build: unclear which hostname Access covers
Wishes
- A module for sermon series planning
Worked well
- Session ritual: no "context lost" taps for 2 weeks
```

## GEORGE does
- Mentions anything annoying or confusing as it happens.
- Sends the round summary to Trevor.
- Decides keep, take or merge for each file in an update.

## Done when
- [ ] `upstream/VERSION` and `FEEDBACK.md` exist on `main`
- [ ] A round summary can be produced in one prompt, with private details removed
- [ ] Updates land in `upstream/` as proposals and never overwrite George's files

## Writes to
- `FEEDBACK.md`, `feedback/round-*.md`, `upstream/`
- `WORKLOG.md`, a handoff

## Next
- [32 · Prompt Library](./32-PROMPT-LIBRARY.md)
