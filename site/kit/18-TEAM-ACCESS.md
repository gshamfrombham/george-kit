# 18 · Team Access
> Give each of George's helpers exactly the access they need: one private link, their own Google sign-in, and viewer, reviewer or approver rights per area of his work.

**Run it:** `Run module 18 from my framework. Set up my team on the dashboard.`
**Needs first:** 16
**Time:** about 20 minutes, then 2 minutes per new person · **GEORGE's part:** decide who sees and who approves what

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{HELPERS}} | Each helper's name and Google-capable email | ask George |
| {{BRANDS}} | G's Plan, TOI, Author, CEL (as confirmed) | `projects/dashboard.md` |
| {{GS_PLAN_TEAM}} | Who helps with G's Plan | his Claude memory or Projects, or ask George |
| {{TOI_TEAM}} | Who helps with The Overseas Initiative (co-founders, volunteers) | ask George |
| {{CEL_TEAM}} | Who helps with his CEL pastor work | ask George |
| {{REVIEWER}} | The teammate who double checks everything going out | ask George |
| {{REVIEWER_BRANDS}} | Which brands the reviewer approves for | ask George |
| {{SPEND_DELEGATE}} | Anyone besides George who may approve ad spend (default: nobody) | ask George |
| {{AUTHOR_APPROVERS}} | Who besides George may approve author posts | default: George only |
| {{DASHBOARD_NAME}} | The dashboard's name | `projects/dashboard.md` |

## Why this matters
"Share a login" is how passwords leak and how nobody knows who approved what. The model here is one private link plus each person's own Google sign-in. Cloudflare remembers them for 30 days, so they aren't nagged. Every approval is tied to a real email, and removing someone takes one minute. Roles per area mean a mission volunteer can approve a TOI prayer update without seeing, or approving, anything else.

## Steps
1. **Fill the roles table** in `people/team.md`:
   | Person | Email | Brand | Role |
   |---|---|---|---|
   | George | his Google email | all | approver (owner) |
   | ... | ... | G's Plan / TOI / Author / CEL | viewer, reviewer or approver |
   Use {{GS_PLAN_TEAM}}, {{TOI_TEAM}}, {{CEL_TEAM}}, {{AUTHOR_APPROVERS}}. One row per person per brand. *Check:* George reads the table and says yes.
2. **Load the table** into the dashboard `people` table and into the Cloudflare Access policy allow list (both must match). *Check:* the Team screen shows the same people as the Access policy.
3. **Send each person the link** with one short note George approves, for example: "Here's the link to {{DASHBOARD_NAME}}. Sign in with your Google account. It remembers you for a month. You'll see the {{BRAND}} items. Tap Approve when something's ready, or Request changes and say why." George or his agent sends it from George's own email after George says send. Never share a password. *Check:* each person signs in once; their sign-in appears in the events log.
4. **Test each role** with a test item: a viewer sees it but has no Approve button; an approver for one brand cannot approve another brand's item. *Check:* results logged in `projects/dashboard-tests.md`.
5. **Offboarding.** To remove someone: delete their rows in `people`, remove them from the Access policy, and revoke their active Access sessions in Zero Trust. Their past decisions stay in the log under their email. *Check:* a removed test user is refused on the next request.
6. **The reviewer pattern.** {{REVIEWER}} gets the **reviewer** role for {{REVIEWER_BRANDS}}. Nothing goes out on one person's say: every package needs a passed review and a final approval on the same version, by two different people (module [16](./16-DASHBOARD-BUILD.md)). Final approval is George's. {{REVIEWER}} gives final approval only for brands and channels George delegates in a decision record, and then George or another person does the review. She signs in with her own Google account (30-day session, never a shared password). Her day:
   - Open **Going out** (`GET /api/outgoing?days=7`): every package scheduled in the next 7 days across Facebook, Instagram, Meta ads, email, Substack, the website and YouTube.
   - Check each package against this list: facts and numbers, names spelled right, every link works, scripture references match the verse text, images present with alt text, scheduled time right, going out from the right account.
   - Mark the review passed, or failed with a comment saying exactly what to fix. Any change to text, time, channel, account or budget makes a new version she reviews again.
   - **Ads:** she reviews the creative and copy. Every Meta ads item needs George's own approval for spend (budget, daily cap, dates), unless he records {{SPEND_DELEGATE}} in `decisions/`. The dashboard enforces this.
   Write the checklist into `people/reviewer.md` so she and the agents use the same one. *Check:* she reviews a test week of items; a test item with only her review does not release; a test ad stays waiting for George's approval.
7. **Quarterly review.** The Sunday brief once a quarter lists everyone with access and their last sign-in, so George can remove anyone idle. *Check:* the reminder is on the calendar in module [24](./24-WEEKLY-RHYTHM.md).

## GEORGE does
- Decides who gets what, including the reviewer and her brands.
- Decides whether anyone besides him may approve ad spend.
- Approves the invite note.
- Removes people when they step away.

## Done when
- [ ] `people/team.md` matches the dashboard and the Access policy
- [ ] Every helper has signed in once
- [ ] Role tests pass
- [ ] Offboarding tested once
- [ ] Reviewer set up with her checklist; ad spend still waits for George

## Writes to
- `people/team.md`, `people/reviewer.md`, dashboard `people` table, Access policy, `WORKLOG.md`, a handoff

## Next
- [19 · Automation Chooser](./19-AUTOMATION-CHOOSER.md)
