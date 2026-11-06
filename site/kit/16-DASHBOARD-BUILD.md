# 16 · Dashboard Build
> Turn the blank dashboard shell into George's live, private dashboard: sign-in for his team, an approval queue his agents fill, and a log of everything that shipped.

**Run it:** `Run module 16 from my framework. Build my dashboard from the shell, step by step, and run every test.`
**Needs first:** 09, 15
**Time:** about 2 to 3 hours across two sessions · **GEORGE's part:** create a free Cloudflare account with {{ACCOUNT_EMAIL}} if he has none; name his people

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{DASHBOARD_NAME}} | Name on the dashboard | `projects/dashboard.md` |
| {{PROJECT_SLUG}} | Cloudflare Pages project name, lowercase with hyphens | derive from the name (for example `gs-desk`) |
| {{ACCENT_COLOR}} | His main brand color | `design/DESIGN.md` |
| {{BRANDS}} | G's Plan, TOI, Author, CEL (confirmed list) | `projects/dashboard.md` |
| {{PEOPLE_ROLES}} | Email, brand, viewer or approver | `people/` and module 18 |
| {{TIMEZONE}} | Time zone for all schedules | America/Chicago unless George says otherwise |
| {{REVIEWER}} | The teammate who double checks everything going out | module [18](./18-TEAM-ACCESS.md) |

## Why this matters
A dashboard that anyone can open, or that lets an agent approve its own work, is worse than none. This build is deliberately strict in four places: only signed-in people George named can open it, only approvers can approve, an approval covers one exact version, and nothing publishes twice. Everything else stays small: one page, a few tables, three buttons. Small is what keeps it running when nobody is watching.

## Steps
1. **Start from the shell.** Copy [../dashboard-proto/](../dashboard-proto/) into a new folder `dashboard/` in a new private repo `{{PROJECT_SLUG}}` in George's personal GitHub account. The shell is static HTML, CSS and JavaScript: `config.js` holds names, colors and navigation; `data.json` holds sample data; each screen reads data through one function you will point at the API. Set `config.js`: name {{DASHBOARD_NAME}}, accent {{ACCENT_COLOR}}, brands {{BRANDS}}. *Check:* opening `index.html` locally shows his name, color and brands, still on sample data.
2. **Cloudflare account and Pages project.** GEORGE creates a free Cloudflare account (or signs in). Create a Pages project `{{PROJECT_SLUG}}` connected to the repo. Use the free `{{PROJECT_SLUG}}.pages.dev` address for now; a custom address can come later. *Check:* the shell loads at the production address. (It is public for a few minutes; do step 3 right away and put no real data in until then.)
3. **Lock it with Cloudflare Access.** In Cloudflare Zero Trust (free up to 50 users), create a **self-hosted application** that covers both the production hostname `{{PROJECT_SLUG}}.pages.dev` and the preview hostnames `*.{{PROJECT_SLUG}}.pages.dev`. The Pages "preview access" toggle alone does not protect production. Identity: Google sign-in, plus a one-time email code as backup. Session duration: 30 days. Two policies on the application:
   - **People policy (Allow):** only the emails in {{PEOPLE_ROLES}}.
   - **Agent policy (Service Auth):** only the one Access service token made for George's agents. Agents send it as the headers `CF-Access-Client-Id` and `CF-Access-Client-Secret`. This policy admits no people and no other tokens.
   *Check:* in a private browser window, the production address, a preview address and `/api/items` all show the Cloudflare sign-in, not the page.
4. **Create the database.** Make a D1 database and bind it to Pages Functions as `DB`. Tables:
   - `jobs`: id, name, brand, **level** (0 to 4, from module [23](./23-AUTONOMY-LADDER.md)), **paused** (true or false), updated_by, updated_at. Only an approver for that brand (or George as owner) can change `level` or `paused`; every change is logged in `events`. Agents can read jobs but never write them.
   - `items`: id, created_at, brand, kind (article package, video package, email, page, missions update, other), title, **job_id** (the job that made it), current_version, status (pending, changes, approved, ready_for_person, publishing, published, rejected), publish_url, published_at
   - `versions`: id, item_id, n, body_md, assets_json, **channel** (facebook, instagram, meta_ads, email, substack, website, youtube, other), **scheduled_for** (in {{TIMEZONE}}), destinations_json (exactly where each piece goes, including the account), for meta_ads: **budget**, **daily_cap**, **dates** (start, end), content_sha256, voice_check, slop_report, created_by, created_at. **The content hash covers the body, assets, channel, scheduled time, destinations, budget, daily cap and dates.** Versions are never edited. Any change to any of these makes a new version, which voids every review and approval on the old one. The server **rejects a meta_ads version without structured `budget`, `daily_cap` and `dates`.**
   - `decisions`: id, item_id, version_id, content_sha256, decision (approve, changes, reject), comment, decided_by (signed-in email), decided_at
   - `reviews`: id, item_id, version_id, content_sha256, reviewer (signed-in email), checklist_json (each check from module [18](./18-TEAM-ACCESS.md) with pass or fail), result (passed or failed), at
   - `people`: email, brand, role (viewer, reviewer or approver), owner flag (George only)
   - `delegations`: brand, channel (or all), person, power (final_approval or spend), decision_ref (the file in `decisions/`), created_by (George), created_at
   - `events`: append-only log of every change (created, new version, decision, claim, published, failed, "context lost" taps, automation runs)
   - `metrics`: date, source, brand, name, value (filled by module [17](./17-DASHBOARD-DATA-SOURCES.md))
   *Check:* `wrangler d1 execute` lists every table above.
5. **Verify identity in every Function, fail closed.** Every Pages Function reads the `Cf-Access-Jwt-Assertion` header and verifies it against the Access team's public keys (issuer and audience must match). No valid token, no response. People are identified by the email in the token; agents by an Access **service token**. *Check:* a request with no token, or a forged one, gets 401 or 403.
6. **Build the endpoints.**
   | Endpoint | Who | What it does |
   |---|---|---|
   | `GET /api/items?status=&brand=` | person or agent | lists items the caller may see (people see only their brands) |
   | `POST /api/items` | agent | creates an item with version 1 for a `job_id`; **refuses it without `voice_check`, `slop_report` and a valid `job_id`**; any level the agent sends is ignored |
   | `GET /api/items/:id` | person or agent | returns the item with `job_id`, **`job_level` (derived from the job on the server)**, status, current version, decisions and receipts |
   | `POST /api/items/:id/versions` | agent | adds a new version; sets status back to pending |
   | `POST /api/items/:id/reviews` | **person with reviewer or approver role for that brand** | records the checklist and passed or failed **on the current version and its content hash**; service tokens are refused |
   | `POST /api/items/:id/decision` | **George, or a person holding a final_approval delegation for that brand and channel** | records approve, changes or reject **on the current version and its content hash**; service tokens are refused |
   | `POST /api/items/:id/claim` | agent | atomically moves approved to publishing for that exact version; **reads the level from the item's job and refuses anything below level 3, or a paused job**; a second claim fails |
   | `POST /api/items/:id/mark-published` | **person with reviewer or approver role for that brand** | for a `ready_for_person` item: records the live URL, moves it to `published`, and writes a receipt naming the person; agent tokens are refused |
   | `POST /api/items/:id/published` | agent only | records the live URL and the platform receipt; status becomes published |
   | `POST /api/events` | person or agent | logs a "context lost" tap or an automation run |
   | `GET /api/outgoing?days=7` | person | everything scheduled to go out in the next N days across all channels, only for that person's brands, sorted by `scheduled_for`; feeds the **Going out** screen |
   | `GET /api/automations` | person | lists every job with its level, paused flag and last runs |
   | `PATCH /api/automations/:id` | **approver for that brand or George as owner** | sets `paused: true` or `paused: false`; logged in `events`; agent tokens are refused |
   | `POST /api/automations/pause-all` | **George as owner** | pauses every job and every channel publisher at once; logged in `events` |
   | `GET /api/me` | person | the caller's email, roles per brand (viewer, reviewer, approver), delegations and owner flag; the shell uses it to switch on reviewer mode and hide buttons the caller can't use |
   | `POST /api/metrics` | agent | writes metric rows; **restricted to the brands that agent job is set for** (used by `george-dashboard-data`) |
   | `GET /api/metrics` | person | numbers for the Data screen, only for that person's brands |
   | `GET /api/jobs/:id/status` | agent (only its own job) | returns the job's level and `paused` flag; the stop rule calls this first |
   | `GET /api/rhythm` | person | this week's schedule, built from jobs and items, for that person's brands |
   | `GET /api/kpis` | person | headline numbers for the Home screen, from `metrics`, for that person's brands |
   | `GET /api/memory` | person | `NOW.md`, the newest handoffs, recent WORKLOG lines and decision titles, read from george-os on GitHub by the Function with a **read-only** fine-grained token kept as a Cloudflare secret |
   | `GET /api/activity` | person | recent `events` for that person's brands |
   | `GET /api/people` | person | people and their roles, limited to brands the caller can see |
   **Every endpoint the shell reads must exist before `demo: false`** (the shell's README lists them); a missing one shows an error screen. *Check:* with `demo: false`, every screen loads real data or a designed empty state, never an error.
   **Release rule, two people (server-side).** An item is released (level 2 moves to `ready_for_person`; level 3 fires the publish trigger) only when the **current version** has BOTH:
   - a **passed review** by a person with reviewer or approver role, and
   - an **approval** by George, or by a person holding a `final_approval` delegation for that brand and channel,
   and the reviewer and the approver are **two different people**. {{REVIEWER}} may give final approval only where George delegated it in a decision record; then George or another person does the review. The server checks this on every release; the shell only reflects it.
   **Ad spend rule.** Every `meta_ads` item needs **George's own approval**. A spend delegation counts only if a record in `decisions/` (mirrored in `delegations` with power `spend`) names that person for that brand. A reviewer's passed review on an ad covers the creative only.
   The claim must be a single conditional update that joins the item's job: set status to publishing where id matches, status is approved, the job's level is 3 or more, the job is not paused, current_version matches the approved and reviewed version, the two-person rule holds for that version, **and the version's `scheduled_for` is now or earlier** (nothing publishes before its time). The publish trigger and the hourly poll also read the level and paused flag from the job, never from the item or the agent. *Check:* each endpoint has a test in step 10.
7. **What Approve does depends on the job's level.**
   - **Level 2 and below** (read from the item's job): once the release rule holds, the item moves to `ready_for_person`. The item shows a publishing handoff: the ready text and assets, where each piece goes, and a "Mark published" button that calls `mark-published` with the live URL. **No trigger fires.**
   - **Level 3 and up:** once the release rule holds, the item waits as `approved` until its `scheduled_for` time. If that time has already come, the server calls the publish trigger with the item id right away; otherwise the hourly run picks it up when it is due (approving next Thursday's item today never publishes it today).
   **Build the trigger hook as a setting that starts empty and disabled:** `PUBLISH_TRIGGER_URL` and its token as Cloudflare secrets, plus an on/off flag. This module does not need any scheduled task to exist. Module [20](./20-SCHEDULED-TASKS.md) creates the publish task later, fills in its trigger URL and token, and turns the hook on. An **hourly poll as backup** (also set up in module 20) picks up any approved level 3+ item the trigger missed. All times in {{TIMEZONE}}. *Check:* approving a level 3 test item scheduled for tomorrow leaves it `approved` and the claim refuses it until then; with the hook off, approving a due level 3 test item leaves it `approved` and logs "trigger not configured"; approving a level 2 item lands at `ready_for_person` with the handoff shown.
8. **The off switch (kill switch).** The Automations screen shows every job from `GET /api/automations` with a pause toggle that calls `PATCH /api/automations/:id`. **Stop rule for every scheduled task and every Managed Agent run:** the first step calls `GET /api/jobs/:id/status`; if `paused` is true, it writes a short handoff ("paused, did not run") and exits. For Managed Agents on a schedule, pausing also calls that schedule's own pause action (module [21](./21-MANAGED-AGENTS-SETUP.md)), so no session starts at all. **Pause everything:** George has one button that calls `POST /api/automations/pause-all`. **It does not stop anything already scheduled or running outside the dashboard:** Meta ads that are live, posts already scheduled in Meta Business Suite, and emails already scheduled in the email platform. A person must pause or unschedule those where they live. Meta ads keep spending until a person pauses them in Meta Ads Manager; the dashboard then shows a "Paused in Ads Manager?" check per live ad, and the person confirms it with what Ads Manager shows (status and time). *Check:* pause a test job, trigger its next run, and confirm it exits with the handoff and does nothing else; pause-all pauses every job.
9. **Point the shell at the API.** Replace the shell's sample-data function with calls to the endpoints. Keep `data.json` as a demo mode switch in `config.js`. *Check:* the Approvals screen shows real queue items after sign-in.
10. **Run the test list** and save results to `projects/dashboard-tests.md`:
   - Anonymous requests to production, a preview address and `/api/items` are refused.
   - A viewer cannot review or approve.
   - An approval alone does not release an item; a review alone does not release it; both on the current version by two different people does.
   - The same person cannot both review and give final approval on one version.
   - {{REVIEWER}}'s approval counts as final only where a `final_approval` delegation exists for that brand and channel.
   - Changing the channel, scheduled time, destination, budget, daily cap or dates makes a new version and voids its reviews and approvals.
   - A meta_ads version without structured budget, daily cap and dates is rejected.
   - Pause-all pauses every job; the screen states that running Meta ads must be paused in Ads Manager and asks for confirmation.
   - `GET /api/me` returns the caller's roles per brand, and reviewer mode shows only review actions.
   - The agent service token (sent as `CF-Access-Client-Id` and `CF-Access-Client-Secret`) can create items and versions, write metrics for its brands, and post receipts.
   - The agent service token is refused on the decision endpoint.
   - The agent service token cannot write metrics for a brand it isn't set for.
   - An item without a valid `job_id` is refused; a level the agent sends is ignored; the claim endpoint refuses an item whose job is level 2.
   - Only an approver or George can change a job's level; the change shows in `events`; an agent token is refused.
   - A person with approver role can mark a level 2 item published; an agent token is refused on `mark-published`.
   - Pausing a job stops its next run: the run checks the job at start, writes a handoff and exits; claim refuses its items while paused.
   - A viewer or agent token cannot pause or unpause a job.
   - `GET /api/outgoing?days=7` returns only the caller's brands, across every channel, in time order.
   - An approval on a meta_ads item by anyone other than George does not count; with a spend delegation on file, the named person's approval counts.
   - When any API call fails, the screen shows an error message, never an empty list.
   - Approving a level 2 item lands at `ready_for_person` with no trigger call.
   - An item without a voice check is refused.
   - Editing an approved item (new version) sends it back to pending, and the old approval does not carry over.
   - Two claims on the same approved version: one succeeds, one fails.
   - A published item has a passed review and an approval on the same version and content hash, by two different people, before its claim and receipt.
   - An approver signs in on a phone, and on a second visit is not asked to sign in again.
   *Check:* every test passes; any failure blocks going live.
11. **Store the service token.** The agent service token goes in 1Password `Agents` for laptop sessions and as a cloud **network secret** for scheduled tasks (module [09](./09-PASSWORDS-AND-SECRETS.md)). Never in the repo, never in chat. *Check:* a dummy-value test proves it stays out of transcripts.

## GEORGE does
- Creates or signs in to a free Cloudflare account.
- Confirms the people and their roles.
- Signs in once on his phone to try it.

## Done when
- [ ] Production and preview addresses require sign-in
- [ ] Every test in step 10 passes, results saved
- [ ] Job levels and pause live in the server's `jobs` table, changed only by approvers or George
- [ ] Two-person release rule and George-only ad spend enforced by the server
- [ ] Pause-all works, and running Meta ads have a confirm-paused-in-Ads-Manager step
- [ ] Approve on level 2 items ends at a ready-for-person handoff that a person marks published; the level 3+ trigger hook exists, starts disabled, and is activated in module 20; double publish is impossible
- [ ] Service token stored only in 1Password and network secrets
- [ ] George and one helper have signed in on a phone

## Writes to
- new repo `{{PROJECT_SLUG}}`, `projects/dashboard.md`, `projects/dashboard-tests.md`, `decisions/` (record the stack choice), `WORKLOG.md`, a handoff

## Next
- [17 · Dashboard Data Sources](./17-DASHBOARD-DATA-SOURCES.md)
- [18 · Team Access](./18-TEAM-ACCESS.md)
- If the dashboard ever becomes a chore to keep running, a shared board with the same columns (title, version, status, approver, URL) is the fallback. Record that in `decisions/`.
