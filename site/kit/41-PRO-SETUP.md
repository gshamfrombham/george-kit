# 41 · Pro Setup for Claude Desktop
> The engine room: one instruction file every session reads, hooks that load the brain on their own, skills, two helper agents, the right model for the job and safe permissions, so George's Claude starts every job already knowing him.

**Run it:** `Run module 41 from my framework. Set up my Claude like a pro and run the 10-minute test at the end.`
**Needs first:** 06, 07, 08, 10
**Time:** about 60 minutes · **GEORGE's part:** approve the instruction file, click any permission prompts, and judge the 10-minute test

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{GEORGE_ONE_PARAGRAPH}} | Who George is, in one paragraph Claude reads every session | `BRAIN.md` (module 05) |
| {{BRANDS}} | His areas of work (author and teaching, G's Plan, TOI, video) | Module 04 and `BRAIN.md` |
| {{REVIEWER}} | The person who reviews drafts in the dashboard | Module 18 (from George's private records in `people/`) |
| {{BRAIN_PATH}} | Where `george-os` lives on the Mac | Default `~/george-os` (if it lives elsewhere, change the path in both hooks too) |
| {{BIBLE_TRANSLATION}} | The translation he quotes | `voice/VOICE.md` (module 12) |
| {{VOICE_ONE_BREATH}} | His voice in two or three sentences | `voice/VOICE.md` (module 12) |
| {{TEST_REQUEST}} | One real job for the 10-minute test | Ask George (for example, next Thursday's article outline) |

## Why this matters
Two people can pay for the same Claude plan and get very different work out of it. The difference is rarely the prompt alone. It's what Claude already knows when the prompt arrives, which tools it can reach, and whether anyone checks its work before George sees it. Trevor gets far better output on his own computer because of a handful of habits built into the setup, not because he types magic words:

- A personal instruction file that every session reads first: who he is, how he wants work done, and the rules that never bend.
- Session start loads the brain automatically, and session end writes a handoff. The brain repo is the memory, not the chat.
- A skill for every recurring job, kept short and improved after every miss. Without the skill, the output is generic.
- A plan before anything bigger than a few minutes.
- An independent reviewer. The agent that wrote something never grades it.
- Helpers that do the digging, so the main conversation stays clean.
- Evidence: every step has a check, and Claude says what it actually checked.
- The strongest model and higher effort for important thinking and writing; lighter settings for chores.
- Fresh context: one job per session, and a clean start when a chat goes sideways.
- Rules that must always hold live in the instruction file or a hook, never in a chat Claude might forget.
- Connectors, so Claude reads the real Drive doc or calendar instead of George pasting it.

This module builds the same setup for George. Module 42 teaches the asking side.

## Steps
1. **Know which tab does which job.** The desktop app has three tabs. Use them like this:

   | Tab | Use it for | Why |
   |---|---|---|
   | **Chat**, inside one of his Projects | Thinking out loud, outlines, first drafts, questions about his own material | The Project reads the brain (step 11) and carries its own memory |
   | **Code**, local session | Anything that touches his files, the brain, skills, the site repo, or video files on the Mac | Local sessions run on his Mac, read `~/.claude/CLAUDE.md`, run hooks and load his personal skills |
   | **Code**, cloud session | Jobs that should keep going with the laptop closed, on a GitHub repo | Runs on Anthropic's computers; personal skills do **not** load there, so give it the skill's steps in the prompt |
   | **Cowork** | Longer hands-off tasks he wants to hand over and come back to | Personal skills do **not** load in Cowork either; test one task before trusting it with a weekly job |

   Rule of thumb: if the job writes to a file George keeps, use a local Code session. *Check:* George picks the right tab for three examples: "outline Sunday's sermon" (Chat, in a Project), "update NOW.md and push" (Code, local), "edit Romans week 3" (Code, local).

2. **Install the personal instruction file.** Copy [templates/CLAUDE-PERSONAL.md](./templates/CLAUDE-PERSONAL.md) to `~/.claude/CLAUDE.md`. Claude Code reads this file in every project on the Mac, before anything else. If the file already exists, show George both and merge; never overwrite his. Fill the slots from `BRAIN.md`, keep it under 120 lines (shorter files are followed better), and read it to George before saving. *Check:* in a **new** local Code session, ask "What are my hard rules?" and Claude lists them without opening any file.

3. **Install the hooks and safe permissions.** A hook is a small command the app runs on its own at a set moment, so it can't be forgotten. Copy [templates/settings.example.json](./templates/settings.example.json) to `~/.claude/settings.json`. If that file already exists, merge only the `hooks` and `permissions` blocks into it and keep everything else. Then run `python3 -m json.tool ~/.claude/settings.json` to prove the file is valid. What it sets up:
   - **SessionStart:** prints the top of `BRAIN.md`, `NOW.md` and the newest file in `handoffs/` from {{BRAIN_PATH}} into the new session as a head start (george-session-start still runs every time, because it pulls the latest and reads three handoffs). If the brain isn't there, it does nothing.
   - **Stop:** when Claude is about to finish and the brain has changes that aren't saved or commits that aren't pushed to `main`, it reminds Claude once to run george-handoff. It never asks twice in a row, so it can't loop.
   - **Permissions:** a short list of exact read-only commands (`git status`, `git diff`, `ls` and similar) run without a prompt. Force pushes, deleting branches, `git clean` and `rm -rf` are blocked. Nothing that changes, sends, posts or publishes is on the allow list.
   - **Permission mode:** `defaultMode` is the normal mode, so anything not on the allow list asks George first. This only holds in that mode: never switch his sessions to Auto or bypass permissions, and check the mode shown in the Code tab before a session that touches his brain or his site. The permission prompt is a technical guard; the real rule is still module 23's approval workflow (drafts go to the dashboard, a person publishes).

   *Check:* `python3 -m json.tool` prints the file with no error, and the Code tab shows the normal (ask) permission mode.

4. **Prove the hooks fire in the desktop Code tab.** We know hooks run in Claude Code; we haven't confirmed every desktop version runs them, so test it on George's Mac:
   - **Start test:** open a brand-new local session in the Code tab and send only: "Without opening any files, what does my NOW.md say?" If Claude quotes it, the start hook works.
   - **Stop test:** ask Claude to add the line `hook test` to `{{BRAIN_PATH}}/FEEDBACK.md` and then finish (remove the line afterward). It should pause once, run george-handoff (or ask to push), and then stop. It must not loop.
   - **If either test fails:** keep the instruction file's "Start of every session" section (it tells Claude to read the same files first and write a handoff before it stops) and use george-session-start and george-handoff by name. Remove a hook that loops. Write what happened in `decisions/0006-pro-setup.md`.

   *Check:* both results are written in `decisions/0006-pro-setup.md`, pass or fail, with the fallback in use if one failed.

5. **Install the skills, including the new one.** Run module 10's installer again so george-better-prompt (module 42) is included: `bash {{BRAIN_PATH}}/skills/install.sh`. Skills load only in local Code sessions; for Chat, upload the zips (module 10, step 4). *Check:* `ls ~/.claude/skills | grep -c '^george-'` prints 34 (fewer if he struck any in module 10), and "make this prompt better: thumbnail for Romans 3" triggers george-better-prompt.

6. **Add two helper agents.** A subagent is a helper Claude can hand a job to; it works in its own space and reports back, so the main conversation stays clean. Copy [templates/agents/george-reviewer.md](./templates/agents/george-reviewer.md) and [templates/agents/george-researcher.md](./templates/agents/george-researcher.md) into `~/.claude/agents/`.
   - **george-reviewer** checks a draft against his voice guide, the anti-slop list and the design standard. It can read but not edit, so it can't quietly "fix" what it was asked to judge.
   - **george-researcher** digs through the brain, his files and the web, and returns a short answer with sources.

   *Check:* in a local session, "Have george-reviewer check this paragraph against my voice guide" returns a PASS or FAIL report with line numbers, and no file changed (`git -C {{BRAIN_PATH}} status` is clean).

7. **Match the model and effort to the job.** In Chat, the picker next to the send button sets the model, the effort and extended thinking. In Code, `/model` picks the model and `/effort low|medium|high|xhigh` sets how hard it thinks (the default is medium).

   | Job | Model | Effort |
   |---|---|---|
   | Sermon outlines, the Thursday article, a series plan, anything public in his name | The most capable model in the picker | high (xhigh for the hardest thinking) |
   | Everyday drafting, summaries, edits | The default | medium |
   | Quick chores: rename files, check a date, format a list | A faster model is fine | low |

   Higher effort and bigger models use more of the plan. Chat and Code share one allowance, and `/usage` in Code shows where it stands. *Check:* George switches the model and effort once in Chat and once in Code.

8. **Keep the permissions safe as they grow.** When Claude asks permission for a command, George can approve it once. Add a command to the allow list only if it only reads (looks, lists, searches). **Never** add anything that sends email, posts, publishes, schedules, spends or deletes. Approvals for those stay a person's job (module 02). *Check:* in a local session, `git status` runs without a prompt and `git push` asks first.

9. **Connect real sources.** In Chat, connectors (Drive, Gmail, Calendar, GitHub) are set up in module 08; Claude reads the real document instead of George pasting it. In a Code session, `/mcp` lists the tools that session can reach. Test whether his Chat connectors show up there; if not, keep source-reading jobs in a Project chat and file-writing jobs in Code. *Check:* a Project chat reads one Drive doc and one calendar event, and the `/mcp` result is written in `decisions/0006-pro-setup.md`.

10. **Claude in Chrome (optional).** The Claude in Chrome extension lets Claude read and click in his browser. It needs a Pro plan or higher, and in Code it signs in with `/login`. Use it for reading pages that need his sign-in (YouTube Studio numbers, a church calendar). It never submits, sends or posts. *Check:* skip, or one read-only task works.

11. **Make every Project read the brain.** Confirm module 08's Project setup: each Project has the `george-os` files from GitHub and the read-only note in its instructions. GitHub files in a Project don't refresh themselves: press **Sync now** in the Project's knowledge after the brain changes. Google Docs added to a private Project stay linked to the current Drive version. Each Project keeps its own memory; turn off "Use account memory" for one that should stay separate. *Check:* after Sync now, a fresh chat in one Project answers "What's in NOW.md?" correctly.

12. **Run the 10-minute test.** Same request, two ways, side by side. Use {{TEST_REQUEST}}.
    - **Old way (5 minutes):** a fresh chat outside any Project, typed the way George usually asks.
    - **New way (5 minutes):** a local Code session (or a Project chat), asked with module 42's anatomy or through george-better-prompt, then checked by george-reviewer.
    - **Compare:** Does it sound like him? Are facts and Scripture references sourced or marked [check]? How many slop-check hits? How much did George have to explain? Which one would he put his name on?

    *Check:* George picks the one he'd publish and says why in one line, saved to `FEEDBACK.md`.

## GEORGE does
- Approves the instruction file before it's saved.
- Clicks any permission prompts during setup.
- Runs the 10-minute test and says which result he'd publish.

## Done when
- [ ] `~/.claude/CLAUDE.md` is filled in, under 120 lines, and a new session knows his hard rules.
- [ ] `~/.claude/settings.json` is valid JSON with the hooks and permissions.
- [ ] The start and stop hook tests are recorded, with the fallback in use if either failed.
- [ ] 34 george-* skills and both helper agents are installed.
- [ ] George can set the model and effort in Chat and in Code.
- [ ] Every Project reads the brain after Sync now.
- [ ] The 10-minute test is done and his verdict is in `FEEDBACK.md`.

## Writes to
- `~/.claude/CLAUDE.md`, `~/.claude/settings.json`, `~/.claude/agents/` (on the Mac, outside the brain)
- `george-os/setup/claude/` (a backup copy of those three, so a new Mac can be set up from the brain)
- `george-os/decisions/0006-pro-setup.md` (hook test results, `/mcp` result, model choices)
- `george-os/FEEDBACK.md` (the 10-minute test verdict)

## Next
- [42 Prompting Like a Pro](./42-PROMPTING-LIKE-A-PRO.md)
