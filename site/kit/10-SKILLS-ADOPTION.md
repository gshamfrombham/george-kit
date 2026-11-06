# 10 · Skills Adoption
> The george-* skills get installed everywhere George works, become his to change, and never overwrite his edits or anyone else's skills.

**Run it:** `Run module 10 from my framework.`
**Needs first:** 06, 09
**Time:** about 30 minutes · **GEORGE's part:** upload the zips in the Claude app if the agent can't

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{REUSE_REPOS}} | Repos marked "reuse" in module 04 | `inventory/repos.md` |
| {{SKILLS_TO_SKIP}} | Any george-* skill George doesn't want | Ask after showing the catalog (module 11) |

## Why this matters
A skill is a saved playbook: one sentence from George runs a whole job the same good way every time. That is how output stops drifting and how George stops re-explaining. These skills come from working skills Trevor's team uses, rewritten for George's work. They are his copies. He can rename, rewrite or delete any of them, and an update will never overwrite a change he made.

## Steps
1. **Get the kit.** Download the skills folder from this framework ([skills/README](./skills/README.md)) or the framework zip, and copy it into `george-os/skills/`. *Check:* `george-os/skills/` holds one folder per george-* skill, each with a `SKILL.md`, plus `install.sh`.
2. **Read before you switch anything on.** Anthropic doesn't review uploaded skills. Read every `SKILL.md` and confirm each one only does what it says: no hidden sends, no keys, no outside links you don't recognize. *Check:* a one-line verdict per skill.
3. **Install for Claude Code.** In a local Code session: `bash george-os/skills/install.sh`. It copies only `george-*` folders into `~/.claude/skills/` and touches nothing else. It keeps a fingerprint of what it installed. On a re-run it **keeps any george-* skill George has edited** (reported as `kept (edited)`) and writes the kit's new version into `george-os/upstream/skills/` as a proposal instead. Untouched skills update normally. *Check:* `ls ~/.claude/skills | grep george-` lists the kit, and nothing else in that folder changed.
4. **Install for the Claude app (web and desktop chat).** Run `bash george-os/skills/install.sh --zip` to make one zip per skill. With code execution on (module 08), George uploads each zip at **Customize > Skills** and switches it on. *Check:* in a Project chat, "Weekly brief, please." triggers george-weekly-brief.
5. **Fold in his existing skills.** For each repo in {{REUSE_REPOS}}, list skills that overlap with george-* ones. Keep the better one and note the choice in `decisions/`. Don't install two skills that do the same job, or Claude won't know which to use. *Check:* a short overlap table with a decision per row.
6. **Prove an edit survives.** Edit the **installed** copy: open `~/.claude/skills/george-voice/SKILL.md` and make a small change George asks for (a phrase he never uses, a step he wants). Re-run `bash george-os/skills/install.sh`. *Check:* the installer reports `kept (edited)` for george-voice, the edit is still there, and the kit's version appears as a proposal in `george-os/upstream/skills/george-voice/`.
   **Then prove updates still flow.** Change one line in the source of a skill nobody has touched (in `george-os/skills/`), re-run install. *Check:* that skill shows `updated` and the installed copy has the new line. Revert the test change afterward.
7. **Explain updates.** When Trevor improves the kit, new versions land in `upstream/` with a date. The agent reads them, shows George a short diff, and George decides. Nothing updates on its own. *Check:* `upstream/README.md` explains this in three lines.

## GEORGE does
- Uploads the zips in Customize > Skills if the agent can't.
- Asks for one change to george-voice for the edit test.
- Strikes any skill he doesn't want ({{SKILLS_TO_SKIP}}).

## Done when
- [ ] Every george-* skill was read and given a verdict.
- [ ] Installed in Claude Code and uploaded in the app.
- [ ] Overlaps with his existing repos are decided.
- [ ] An edit to the installed george-voice survived a re-install as `kept (edited)`, with a proposal in `upstream/skills/`.
- [ ] A source change to an untouched skill installed as `updated`.

## Writes to
- `george-os/skills/`
- `george-os/upstream/README.md`
- `george-os/decisions/0003-skills.md`

## Next
- [11 Skills Catalog](./11-SKILLS-CATALOG.md)
