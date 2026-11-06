# 17 · Dashboard Data Sources
> Pull George's real numbers into the dashboard every day, so he and his team see how things are going without logging into seven sites.

**Run it:** `Run module 17 from my framework. Connect my data sources one at a time and start the daily snapshot.`
**Needs first:** 09, 16
**Time:** about 20 to 40 minutes per source · **GEORGE's part:** sign in and approve access for each source

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{TOP_NUMBERS}} | The numbers George chose in module 15 | `projects/dashboard.md` |
| {{YOUTUBE_CHANNEL}} | His channel (@georgeshamblinauthor) | public channel |
| {{GA4_PROPERTY}} | Google Analytics 4 property for his site, if any | ask George, or check the site's tags |
| {{SEARCH_CONSOLE_PROPERTY}} | Search Console property for georgeshamblin.com, if any | ask George |
| {{TOI_DONATION_PLATFORM}} | Where TOI takes gifts (and who may see totals) | ask George; his Claude may already know |
| {{GS_PLAN_SOURCES}} | Where G's Plan's numbers live | his Claude memory or Projects, or ask George |
| {{PODCAST_HOST}} | Where the podcast is hosted (Spotify or another host) | ask George |
| {{EMAIL_LIST_SOURCE}} | Where his email list lives (Substack, Webflow forms, other) | ask George |

## Why this matters
Numbers George has to go look up are numbers nobody looks at. A daily snapshot puts them in one table the dashboard reads, so trends are visible and his agents can reason from facts ("Thursday articles with a story opening got more reads") instead of guesses. Each source is connected once, with the right kind of sign-in, and then runs by itself.

## Steps
1. **List the sources** for {{TOP_NUMBERS}} in `projects/dashboard-data.md`, one row each: number, source, how to read it, how often, who may see it. Connect one source per session, most useful first. *Check:* every top number has a row; any with no source is marked "manual for now."
2. **Use the right access for each source.** Prefer a sign-in connector (OAuth), so no key exists. Where a key is unavoidable, it lives in 1Password `Agents` for laptop runs and as a cloud network secret for scheduled runs (module [09](./09-PASSWORDS-AND-SECRETS.md)). *Check:* no key appears in any file or transcript.
3. **Connect the sources:**
   | Source | What to pull | How |
   |---|---|---|
   | YouTube | views, watch time, subscribers, per-video views for the week | YouTube Data API for public counts; YouTube Analytics API (Google sign-in with his channel's account) for watch time |
   | Substack | subscribers, open rate, post views | no official API: George downloads the subscriber and post CSV exports weekly into a Drive folder the agent reads, plus the public RSS feed for new posts |
   | Webflow | published posts, form submissions (subscribe, contact) | Webflow connector or API with a site token |
   | Google Analytics 4 | sessions, top pages, sources, for {{GA4_PROPERTY}} | GA4 Data API with Google sign-in |
   | Search Console | clicks, impressions, top queries, for {{SEARCH_CONSOLE_PROPERTY}} | Search Console API with Google sign-in |
   | TOI giving | gift count and total this week and month, new donor count (aggregates only) | {{TOI_DONATION_PLATFORM}} report or API; never names, single gifts or history |
   | G's Plan | {{GS_PLAN_SOURCES}} | his Claude fills this row |
   | Podcast | plays, followers | {{PODCAST_HOST}} stats export |
   | Email list | list size, new this week | {{EMAIL_LIST_SOURCE}} |
   *Check:* each connected source returns today's numbers in a test run.
4. **Build the daily snapshot job.** One scheduled task (module [20](./20-SCHEDULED-TASKS.md)) running the `george-dashboard-data` skill reads each connected source and writes rows (date, source, brand, name, value) with `POST /api/metrics`, using the agent service token (module [16](./16-DASHBOARD-BUILD.md)). That token may only write metrics for the brands the job is set for. People read the numbers with `GET /api/metrics`. It is read-only against every source. It logs a run event, including any source that failed. *Check:* after two days, the Data screen shows two points per number, and a deliberately broken source shows as "failed" instead of silently missing.
5. **Keep donor data out of everything we store.** Donor names, individual gift amounts and giving history never go in george-os, in any git repo, in the dashboard database, or in a chat. The snapshot pulls **aggregates only** from {{TOI_DONATION_PLATFORM}}: gift count and total for the week and month, and new donor count. Those aggregates are visible only to the TOI people George names. Thank-you letters and anything needing a donor's name are drafted inside the donation platform or from its export on George's own computer, then the export is deleted. *Check:* a search of george-os and the dashboard database finds no donor names; a viewer for another brand can't see TOI totals.
6. **Write the weekly read.** The Sunday brief (module [24](./24-WEEKLY-RHYTHM.md)) adds three plain sentences on what moved and why, citing the numbers. No hype, no invented causes; if the reason is unknown, say so. *Check:* the brief quotes real values from `metrics`.

## GEORGE does
- Signs in and approves access for Google (YouTube, Analytics, Search Console), Webflow, and his giving platform.
- Drops the Substack exports into the shared folder weekly until something better exists.
- Decides who may see giving numbers.

## Done when
- [ ] Every top number has a source or is marked manual
- [ ] Daily snapshot writes to `metrics`, with failures visible
- [ ] Giving shows aggregates only, restricted to TOI people; no donor names anywhere in george-os, git or the dashboard
- [ ] No keys in files or chats

## Writes to
- `projects/dashboard-data.md`, dashboard `metrics` table, `WORKLOG.md`, a handoff

## Next
- [18 · Team Access](./18-TEAM-ACCESS.md)
