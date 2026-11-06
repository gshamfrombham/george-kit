# 28 · Publishing Channels
> One page that says, for every place George publishes, what goes out automatically, what's handed to him ready to paste, and how to move a channel up later.

**Run it:** `Run module 28 from my framework. Set up each publishing channel and tell me which ones are automatic.`
**Needs first:** 09, 12, 13, 16
**Time:** about 45 minutes · **GEORGE's part:** sign in to Webflow once to connect it; record and upload videos

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{WEBFLOW_SITE}} | His Webflow site and the CMS collection for posts | Webflow connector after sign-in |
| {{WEBFLOW_PUBLISH_RULE}} | Publish the item only, or the whole site, after Approve | ask George (default: the item only) |
| {{SUBSTACK}} | His Substack (georgeshamblin.substack.com) and how he formats posts | his past posts |
| {{YOUTUBE}} | His channel (@georgeshamblinauthor), series names, standard description footer | his channel page, past videos |
| {{FACEBOOK_PAGE}} / {{INSTAGRAM}} | His author Page and Instagram account | his site's links |
| {{PODCAST}} | His podcast host and episode notes format | his podcast page |
| {{TOI_CHANNELS}} | TOI's email tool and site | module 26 |
| {{GS_PLAN_CHANNELS}} | Where G's Plan publishes | module 25 |
| {{POST_TIMES}} | When each channel goes out (America/Chicago) | ask George; default Tue video, Thu article |
| {{REVIEWER}} | The team member who checks items before they go out | module 18 |
| {{EMAIL_PLATFORM}} | Where emails go out | module 36 |

## Why this matters
George shouldn't be the one moving every piece through every app. Some channels can publish on their own once he taps Approve, for jobs that have earned autonomy level 3. Others have no safe way to automate yet, so the next best thing is a package where every word is ready and he spends two minutes pasting. Being honest about which is which avoids broken automations and surprise posts.

## Channel table
| Channel | Status at setup | What the package contains | How it goes out |
|---|---|---|---|
| Website (Webflow), this module | **Automatic** after Approve, only for jobs at autonomy level 3 or higher ([module 23](./23-AUTONOMY-LADDER.md)); at level 2 the approval ends in a publishing handoff with ready text | title, slug, body with clean rich text (no empty spacer paragraphs), summary, SEO title and description, featured image, alt text, scripture as text with reference, category | publish task claims the approved version, creates the CMS item, publishes it, writes the live URL back as a receipt |
| Substack, see [module 36](./36-EMAIL-MARKETING.md) | **Paste** (no official publishing API) | the full post, formatted for Substack, subject line, preview line, link back to the site | George or a helper pastes it and hits Publish (about 2 minutes); the agent records the URL when told |
| YouTube | **Paste** (George records) | title, description with chapters, tags, pinned comment, thumbnail words, end-screen note | George records and uploads, then pastes the ready text |
| Facebook, see [module 34](./34-META-SOCIAL.md) | **Paste** (level 2) until module 34 step 8 is done | caption, images, alt text, link, scheduled time | {{REVIEWER}} checks, George approves, a person schedules in the Meta Business Suite Planner |
| Instagram, see [module 34](./34-META-SOCIAL.md) | **Paste** (level 2) until module 34 step 8 is done | caption, first comment, alt text, image or carousel plan, scheduled time | {{REVIEWER}} checks, George approves, a person schedules in the Meta Business Suite Planner |
| Podcast | **Paste** | episode title, show notes, links | paste in the podcast host |
| Email ({{EMAIL_PLATFORM}}), see [module 36](./36-EMAIL-MARKETING.md) | **Person sends** (level 2); level 3 only through the platform's API | subject, preview, body (English and Spanish for TOI), list, send time | test send to George and {{REVIEWER}}, George approves, a person sends |
| Meta ads, see [module 35](./35-META-ADS.md) | **Always a person** (ads stay level 2) | campaign brief: objective, audience, budget, dates, placements, three creative versions, landing page, tracking | {{REVIEWER}} reviews creative, George approves the spend, a person launches in Ads Manager |

Every package passes `george-slop-check` and sits in the dashboard as one item until a person approves that exact version.

## Steps
1. **Connect Webflow.** Add the Webflow connector (mcp.webflow.com) and have George sign in once. Use OAuth, no API key. *Check:* the agent can list the posts collection without George pasting anything.
2. **Do a draft round trip.** Create a test CMS item as a draft, read it back, then delete it. *Check:* the draft appeared and was removed; nothing was published.
3. **Set the publish rule.** Record {{WEBFLOW_PUBLISH_RULE}} in `decisions/`. Default: publish the single item, never the whole site. *Check:* the decision file exists.
4. **Write the package templates.** For each paste channel, save a template in `projects/channels/<channel>.md` with the exact fields listed above. *Check:* one file per channel.
5. **Wire the dashboard.** Each item's `destinations_json` lists every channel the package goes to, so the approval covers exactly those. *Check:* a test item shows its destinations, and editing a destination resets approval.
6. **Add receipts.** After each publish or paste, the live URL is written back to the item as a receipt. For paste channels, the agent asks George or the helper for the URL in the weekly brief if it's missing. *Check:* a test item shows a receipt URL.
7. **Respect the level.** For each job, read its autonomy level. Level 3 or higher: the publish task publishes Webflow after Approve. Level 2: the approval ends in a publishing handoff (ready text and fields in the item) and a person publishes. *Check:* a level-2 test item produces a handoff and publishes nothing.

## Moving a channel from paste to automatic
Do one channel at a time, using `george-coach`:
1. Find an official connector or API that can draft without publishing.
2. Store any needed key per [module 9](./09-PASSWORDS-AND-SECRETS.md) (connector first; otherwise `op run` or a cloud network secret).
3. Run four weeks of draft-only round trips with receipts.
4. George approves the switch in `decisions/`.
5. Update the channel table above and the autonomy level in [module 23](./23-AUTONOMY-LADDER.md).

## GEORGE does
- Signs in to Webflow once.
- Records and uploads videos.
- Pastes paste-channel packages, or names a helper who does.
- Approves any channel's move to automatic.

## Done when
- [ ] Webflow connected through sign-in, with a clean draft round trip
- [ ] A package template exists for every paste channel
- [ ] Dashboard items list their destinations, and approval covers exactly those
- [ ] Receipts are recorded for every publish
- [ ] The channel table here matches reality

## Writes to
- `projects/channels/*.md`
- `decisions/` (publish rule, any channel promotion)
- `WORKLOG.md`, a handoff

## Next
- [33 · Command Center](./33-COMMAND-CENTER.md), [34 · Meta Social](./34-META-SOCIAL.md), [35 · Meta Ads](./35-META-ADS.md), [36 · Email Marketing](./36-EMAIL-MARKETING.md)
- [29 · Control and Scoreboard](./29-CONTROL-AND-SCOREBOARD.md)
