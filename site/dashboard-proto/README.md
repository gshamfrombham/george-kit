# Dashboard starter (blank shell)

A polished, plain-HTML dashboard that George's agent turns into his own. No framework, no build step, no accounts needed to try it. It opens with **sample data**, so every screen has something to show before anything is connected.

Put it in its **own private repo** in George's personal GitHub account (for example `george-dashboard`), separate from the `george-os` brain repo. Kit module 16 builds the real backend for it.

## Try it

```
cd dashboard-proto
python3 -m http.server 8080
# open http://localhost:8080
```

Opening `index.html` straight from the disk won't load the sample data, because browsers block that. Serve the folder as shown above.

## Files

| File | What it is | Edit it when |
|---|---|---|
| `config.js` | Name, mark, owner, accent color, theme, **brands**, which screens show, **demo switch**, API base | First, always |
| `data.json` | **SAMPLE data**, every value a placeholder | You want different sample content |
| `styles.css` | All design tokens at the top (colors, type, spacing, radii, shadows, light and dark) | You want a different look |
| `app.js` | Router, screens, and the one data seam (`api.get` / `api.post`) | You add or change a screen |
| `index.html` | The shell: top bar, sidebar, page area, drawer | Rarely |

## The four seams module 16 relies on

1. **`config.js`** holds the name (`siteName`, `siteMark`), the accent (`accent.base`, `accent.strong`, `accent.text`, `accent.darkText`) and the brands (`brands[]`: `id`, `name`, `color`, `summary`, `goals`). Brand fields in `{{SLOTS}}` show as chips until his agent fills them.
2. **`data.json`** holds the sample data, shaped exactly like the live API responses below.
3. **One data seam in `app.js`.** Every screen reads through `api.get(path)` and writes through `api.post(path, body)` or `api.patch(path, body)`. In demo mode these read `data.json` and keep changes on screen only; in live mode they call `apiBase + path` with the signed-in cookie (`credentials: "include"`).
4. **The demo switch in `config.js`:** `demo: true` shows a **Sample data** badge in the top bar and a banner on every screen. Set `demo: false` (and `apiBase`, default `/api`) once the module 16 API is live.

## Endpoints the screens call (live mode)

| Call | Screen(s) | Returns or does |
|---|---|---|
| `GET /api/me` | every screen (live mode) | `{ email, name, owner: true or false, roles: { brandId: "viewer" or "approver" } }` from the signed-in Access identity. The drawer's checklist, review button, approve rules and the side card all read it. A failed `/me` shows the error screen. |
| `GET /api/items?status=all` | Home, Approvals, Brands | items: `id, brand, kind, title, status, version, job_level, channel, scheduled_for, budget, reviews[] {version, passed, by, byName, when, checklist}, approvals[] {version, by, byName, when}, updated, requestedBy, slopCheck {result, notes}, destinations[], preview, publishUrl, history[] {when, who, what}`. `job_level` is **derived by the server from the item's `job_id`** (kit module 23), never sent by an agent. Status is one of `pending, changes, approved, ready_for_person, publishing, published, rejected`. |
| `POST /api/items/:id/decision` | Approvals drawer | body `{ version, decision: "approve" or "changes" or "reject", comment }`. The server must refuse if `version` is not the current version (an edit resets approval), refuse agent tokens, and check the person is an **approver for that brand**. It returns `{ status }`: an approved **level 2** job becomes `ready_for_person` (George publishes by hand), a **level 3** job becomes `approved` and its publish task fires. The screen shows whatever status comes back. |
| `GET /api/outgoing?days=7` | Going out | the same item shape, only items with `scheduled_for` from today through the next N days (default 7), not rejected, sorted by time. Demo mode derives it from `data.json`. |
| `POST /api/items/:id/reviews` | Approvals drawer (reviewers) | body `{ version, passed: true, checklist[] {item, ok}, comment }`. Returns `{ review }`. A review counts only for that version. |
| `POST /api/items/:id/mark-published` | Approvals drawer, Home | body `{ url }`, by a person, only when the item is `ready_for_person`. Returns `{ status: "published" }` and logs the live link as the receipt. |
| `GET /api/rhythm` | Home (Today), Calendar, Brand pages | `[{ day (0 = Sunday), time "HH:MM", title, type: "run" or "review" or "publish", brand }]` |
| `GET /api/kpis` | Home, Data | `[{ label, value, delta (percent), series[] }]` |
| `GET /api/metrics` | Data (people) | `{ weekly {labels[], visits[], published[]}, topPages[] {label, value}, sources[] {name, connected} }` |
| `POST /api/metrics` | none (agent only) | the data-pull job (module 17) writes numbers here with its service token; people can't post |
| `GET /api/memory` | Memory | `{ now[] {text, owner, due}, handoffs[] {when, who, done, next}, worklog[] {when, who, what}, decisions[] {id, title, date}, contextLost }`, read from the brain repo (`NOW.md`, `handoffs/`, `WORKLOG.md`, `decisions/`) |
| `GET /api/automations` | Automations, Brand pages | `[{ id, name, kind: "Scheduled task" or "Managed agent", brand, status, on, lastRun, nextRun, costMonth, cap, note }]` |
| `POST /api/automations/pause-all` | Automations ("Pause everything") | pauses every scheduled task and managed agent and returns `{ automations }`. It can't stop Meta ads that are already running: a person pauses them in Ads Manager and confirms it. |
| `PATCH /api/automations/:id` | Automations (kill switch) | body `{ paused: true or false }`, through `api.patch`. Returns `{ paused }`; the screen shows the server's answer or an error. Pausing must actually stop the task or agent. |
| `GET /api/activity` | Home | `[{ when, text, kind }]`, from the events log |
| `GET /api/people` | Team, Brand pages | `[{ name, email, roles {brandId: "viewer" or "approver"}, lastSeen }]` |
| `POST /api/events` | Home ("I had to re-explain something") | body `{ type: "context_lost", note }`; it feeds the weekly brief and the memory scoreboard |

### Item fields added in v0.2

| Field | Values | Notes |
|---|---|---|
| `channel` | `facebook`, `instagram`, `meta_ads`, `email`, `substack`, `website`, `youtube` | Shown as a badge (plain glyphs, no third-party logos). |
| `scheduled_for` | ISO 8601 date-time with offset | Displayed in America/Chicago. Demo mode shifts sample dates by whole days so the earliest upcoming item lands today. |
| `budget` | `{ total, daily_cap, start, end, currency }` | Meta ads items only. The drawer shows it with "Spend needs George's approval". The server must refuse an approve on an item with spend unless the approver is George (the owner). |

### Two-person rule

Every item needs **a passed review of the current version** by one person and **an approval** by a different person. The drawer shows "Review: passed by X" or "needed", and "Approval: by George" or "needed". Approve stays disabled until a passed review by someone other than the person approving exists. Reviewers submit the checklist as their review. Demo mode enforces the same rule on screen, and the server must enforce it for real (decision endpoint refuses otherwise).

### Where budget and schedule live

`budget`, `scheduled_for` and `channel` belong to the **version**, not the item. Changing the date, the budget or the channel makes a new version, which resets the review and the approval. The item response shows the current version's values.

### Roles in the drawer

In demo mode, Settings has a **View as** switch (Owner or Reviewer). Reviewer sees a checklist in the drawer (facts and names, links, scripture references, images and alt text, date and time, right account) and can't approve a Meta ads item with spend. With the live API the role comes from `GET /api/me` and the server enforces it; the switch is hidden.

If any call fails in live mode, the screen shows **"Couldn't load your data"** with the error and a **Retry** button. It never shows empty data that looks real. A failed save shows the error and leaves the drawer open.

## Screens

Home, Approvals (with the review drawer), Going out (next 7 days by day and channel), Calendar (this week), Brands (plus one page per brand), Memory, Automations (with off switches and spend against cap), Data (KPI tiles plus inline SVG charts, no chart library), Team (viewer or approver per brand), Settings (theme, accent, brands, notification placeholders). Turn any screen off in `config.js` under `nav`.

## Make it his

- Rename it (`siteName`, `siteMark`) and set his accent. Keep the accent dark enough for white button text.
- Replace the brand `{{SLOTS}}` from the brain repo (module 25 for G's Plan, module 26 for The Overseas Initiative).
- Add a screen: write a `screenX()` function in `app.js`, add it to `SCREENS`, and add `{ id: "x", label: "X", on: true }` to `nav` in `config.js`. Add its icon to `ICONS`.
- Change the look in the token block at the top of `styles.css` only. The screens use tokens, never raw colors.

## Quality bar

Works at 375px wide with no sideways scroll, light and dark themes, keyboard focus rings, labels on every control, designed empty states, and `noindex` so it never shows up in search.
