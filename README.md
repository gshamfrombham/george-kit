# George's Agent Framework

This repository belongs to **George Shamblin**. It holds the framework his Claude follows to set up memory, skills, a team dashboard and automation, and it publishes itself as a website every time it changes.

**Live site:** https://gshamfrombham.github.io/george-kit/

## George: three steps
1. **Accept the repository.** GitHub sent you an email titled something like *"andersoncollab wants to transfer george-kit to you."* Open it and click **Accept**. (It expires after a day; if it does, tell Trevor and he'll resend it.) From then on, this repository and its website are yours alone.
2. **Hand it to Claude.** On your laptop, open the Claude desktop app, click the **Code** tab, start a **local** session, and paste everything in [HANDOFF-FOR-CLAUDE.md](HANDOFF-FOR-CLAUDE.md).
3. **Answer its questions and do the steps marked GEORGE.** That's it. Claude does the rest and checks each step.

## What's in here
| Folder | What it is |
|---|---|
| `site/kit/00-…40-*.md` | The 41 modules your Claude runs, in order |
| `site/kit/templates/` | Starter files for your private brain repo |
| `site/kit/skills/` | 33 `george-*` skills and the installer |
| `site/dashboard-proto/` | The blank dashboard your Claude turns into yours |
| `site/gameplan/` | The Long-Form Gameplan presentation |
| `HANDOFF-FIX-THE-PROBLEMS.md`, `HANDOFF-GAMEPLAN.md` | Two more handoffs to paste into Claude |
| `build.py`, `index.template.html` | Build the website and run the privacy check |
| `.github/workflows/publish.yml` | Republishes the site whenever `main` changes |

## Changing it
Edit any file (on github.com with the pencil icon, or have Claude do it). When the change lands on `main`, the site rebuilds in about a minute. If the build's privacy check finds something that shouldn't be public (a phone number, an account ID, a key, a private name), it refuses to publish and says which line. **It runs after a change reaches GitHub**, so it stops the website, not the repository: run `python3 -I build.py` before pushing (Claude does this per `CLAUDE.md`), and GitHub's secret blocking is turned on for this repo. It catches common patterns, not everything, so private things simply never go here. Private things belong in your private `george-os` repo, never here, because **this repository is public** (that's what lets GitHub host the site for free).

## Updates from Trevor
Trevor's improvements arrive as **pull requests** you or your Claude can read, merge or close. Nothing changes here unless you merge it.
