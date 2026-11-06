# 34 · Meta Social (Facebook and Instagram)
> George's Facebook Page and Instagram account sit in his own Meta business portfolio, posts go out on a steady plan, and his reviewer checks them first.

**Run it:** `Run module 34 from my framework. Check who owns my Facebook Page and Instagram, then set up the posting flow.`
**Needs first:** 09, 12, 13, 16, 18, 28
**Time:** about 60 minutes, plus any ownership transfer wait · **GEORGE's part:** sign in to Meta, accept or request ownership, add {{REVIEWER}} as a person

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{ACCOUNT_EMAIL}} | The email George uses for his own Meta business portfolio | ask George |
| {{PORTFOLIO_NAME}} | The name of his Meta business portfolio (create one if none exists) | Meta Business Suite, with George signed in |
| {{FACEBOOK_PAGE}} | His author Facebook Page | his site's social links |
| {{INSTAGRAM}} | His Instagram professional account | his site's social links |
| {{REVIEWER}} | The team member who checks posts before they go out | module 18 |
| {{REVIEWER_ACCESS}} | The smallest set of permissions she needs (for example content and insights on the Page and Instagram, no admin control) | ask George |
| {{POST_PLAN}} | How often and when each account posts (America/Chicago) | module 24, ask George |
| {{OTHER_PAGES}} | Pages for TOI or G's Plan, if any, and who owns them | modules 25, 26 |

## Why this matters
If someone else's business account owns George's Page, he can't fully control it, connect tools to it, or add his own team. So ownership comes first. After that, a predictable package (captions, images, alt text, links, a time) means posting takes minutes, and {{REVIEWER}} can catch mistakes before readers do. Insights flowing into the dashboard show what actually works.

## Steps
1. **Check ownership.** With George signed in, open Meta Business Suite, go to settings, and list who owns {{FACEBOOK_PAGE}} and {{INSTAGRAM}}, and every person and partner with access. *Check:* a table in `projects/meta/ACCESS.md` shows owner, people, partners and permissions for each asset.
2. **Get both into George's portfolio.** If they aren't owned by {{PORTFOLIO_NAME}} (created with {{ACCOUNT_EMAIL}}), George requests ownership or the current owner transfers it. George must be a full admin on the portfolio and on both assets. Write down what's pending. *Check:* the access table shows {{PORTFOLIO_NAME}} as owner and George with full control.
3. **Link Instagram to the Page.** The Instagram professional account is connected to the Facebook Page inside the portfolio. *Check:* both show in Meta Business Suite under one portfolio.
4. **Add {{REVIEWER}} as a person.** George invites her by her own email as a person in the portfolio, with only {{REVIEWER_ACCESS}}. Never a shared password, never full admin unless George decides. *Check:* she accepts and appears in the access table with those permissions only.
5. **Set the package.** Each social item in the dashboard holds: caption per platform, images or carousel plan, alt text for every image, link, first comment if any, and the scheduled time. It passes `george-slop-check`. *Check:* a test item has every field.
6. **Post at level 2.** After {{REVIEWER}}'s review passes and George gives final approval on that same version (two different people, enforced by the dashboard), a person schedules it in the Meta Business Suite Planner using the ready text, then pastes the post link back into the item as the receipt. *Check:* one real post goes through and the item shows the receipt.
7. **Pull insights read-only.** Add Page and Instagram reach, engagement and follower counts to the dashboard (module 17), read-only. *Check:* the dashboard shows last week's numbers.
8. **Level 3 later, only after four clean weeks.** Automatic posting means the Graph API with a system user token from George's portfolio, stored in 1Password or as a cloud network secret (module 9). Before building it, read Meta's current developer docs for Page and Instagram publishing, because permissions, review steps and limits change. George approves the switch in `decisions/`. *Check:* nothing posts automatically until that decision exists.

## GEORGE does
- Signs in to Meta and requests or accepts ownership.
- Invites {{REVIEWER}} with the smallest permissions.
- Approves each package, and decides when posting moves to level 3.

## Done when
- [ ] Both accounts are owned by {{PORTFOLIO_NAME}} with George as full admin
- [ ] {{REVIEWER}} has her own access with only the permissions she needs
- [ ] One post went through package, review, approval, Planner and receipt
- [ ] Insights show on the dashboard
- [ ] Posting stays at level 2 until George decides otherwise

## Writes to
- `projects/meta/ACCESS.md`, `projects/channels/facebook.md`, `projects/channels/instagram.md`
- `decisions/`, `WORKLOG.md`, a handoff

## Next
- [35 · Meta Ads](./35-META-ADS.md)
