# Rules for any Claude working in this repository

This repo is George Shamblin's. It is **public** and publishes to GitHub Pages on every push to `main`.

- The framework lives in `site/kit/`. Each module keeps the same format (see `site/kit/01-HOW-THIS-FRAMEWORK-WORKS.md`).
- After any change, run `python3 -I build.py`. It must end with `"privacy_hits": 0`. Fix what it reports before pushing.
- Never put private things here: no phone numbers, emails (other than public site addresses and George's account email in `HANDOFF-FOR-CLAUDE.md`), account or page IDs, keys, donor details, or names of private people. Those go in George's private `george-os` repo.
- No em dashes (the voice standard in module 13).
- Bump `VERSION` and add a line to `site/CHANGELOG.md` for every meaningful change.
- Changes proposed by Trevor arrive as pull requests. Summarize each one for George and merge only when he says so.
