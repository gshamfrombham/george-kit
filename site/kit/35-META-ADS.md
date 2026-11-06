# 35 · Meta Ads
> George's Meta ads run from his own ad account with a hard spending limit, his agent prepares every campaign, and a person launches it only after George approves the spend.

**Run it:** `Run module 35 from my framework. Set up my ad account safely, then brief my first campaign.`
**Needs first:** 09, 16, 18, 23, 34
**Time:** about 60 minutes · **GEORGE's part:** add his payment method, set the spending limit, approve every spend

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{AD_ACCOUNT}} | His ad account inside his own Meta business portfolio | Meta Business Suite, with George signed in |
| {{SPEND_LIMIT}} | The account spending limit in dollars (a ceiling for all spend) | ask George |
| {{MONTHLY_AD_BUDGET}} | What he plans to spend per month across campaigns | ask George |
| {{REVIEWER}} | The team member who reviews ad creative | module 18 |
| {{REVIEWER_CAN_APPROVE_SPEND}} | Yes or no. Default no. | ask George |
| {{GOALS}} | What ads are for (book sales, newsletter sign-ups, event or trip sign-ups, video views) | modules 25, 26, ask George |
| {{LANDING_PAGES}} | Pages ads send people to | his site |
| {{TRACKING}} | Pixel or Conversions API events, and UTM tags | ask George; check his site |
| {{PAUSE_RULES}} | When an ad gets paused (see below) | ask George to confirm |

## Why this matters
Ads spend real money fast, so the order of setup is the safety plan: his own account, his own payment method, a spending limit before anything runs. After that, the agent does the slow work (briefs, audiences, three creative versions, tracking) and George makes the money decisions. Results flowing into the dashboard show what each dollar did.

## Steps
1. **Confirm the account.** {{AD_ACCOUNT}} sits in George's own portfolio (module 34), with George as admin and his own payment method. *Check:* `projects/meta/ACCESS.md` lists the ad account, its owner, the payment method owner (name only, never card details), and everyone with access.
2. **Set the spending limit first.** George sets an account spending limit of {{SPEND_LIMIT}} in billing settings before any campaign exists. *Check:* the limit shows in the account and is recorded in `decisions/`.
3. **Give {{REVIEWER}} access.** Her own login as a person in the portfolio, with access to review ads and results. She can't change budgets unless {{REVIEWER_CAN_APPROVE_SPEND}} is yes. *Check:* the access table shows her permissions.
4. **Check special categories.** If an ad touches credit, employment, housing, or social issues, elections or politics, it must use Meta's Special Ad Category and its targeting limits. Faith content that comments on public issues can fall under social issues; when unsure, flag it for George. *Check:* every brief has a line saying which category applies, or none.
5. **Brief the campaign.** For each campaign, the agent makes one dashboard item with: objective, audience, structured budget fields (total budget, daily cap, start and end dates),  placements, three creative versions (image or video idea, primary text, headline, call to action), landing page, tracking events and UTM tags, and the pause rules. Creative passes `george-slop-check`. The dashboard rejects any ad brief missing the structured budget, daily cap or dates. *Check:* a test brief has every field, and one without a daily cap is refused.
6. **Review, approve, launch by a person.** {{REVIEWER}}'s review of the creative must pass, then George gives his own final approval on that exact version, including the spend (two different people, enforced by the dashboard). Every ad launch needs George's own approval. A person builds and launches it in Ads Manager from the brief, then pastes the campaign link back as the receipt. Ads always stay at level 2; no agent launches ads. *Check:* the item shows reviewer mark, George's approval and the receipt.
7. **Any spend change needs George.** Raising a budget, extending dates, or adding a campaign is a new version of the item and needs a passed review and George's own approval again, whatever {{REVIEWER_CAN_APPROVE_SPEND}} says about her access in Ads Manager. *Check:* editing a budget in a test item resets it to pending.
8. **Pull results read-only.** With read-only access (ads_read), pull daily spend, results, cost per result, and frequency into the dashboard (module 17). Store the token per module 9. *Check:* the dashboard shows yesterday's spend for each running campaign.
9. **Pause rules.** Default rules George confirms: pause an ad if cost per result is double the target after a meaningful number of impressions, if frequency climbs past 4 in a week, if spend is on pace to pass {{MONTHLY_AD_BUDGET}}, or if the ad gets a policy warning. The agent flags a breach as an urgent dashboard item with the exact Ads Manager steps; the ad keeps running until a person pauses it, and the item closes only when the pause is confirmed. `pause ads` (module 33) does the same for every live ad. *Check:* a simulated breach produces an urgent item.

## GEORGE does
- Adds his payment method and sets the spending limit.
- Approves every campaign and every spend change.
- Decides whether {{REVIEWER}} can approve spend.

## Done when
- [ ] The ad account is in George's portfolio with his payment method and a spending limit
- [ ] {{REVIEWER}} has her own access with the right permissions
- [ ] One campaign went through brief, review, approval, launch by a person and receipt
- [ ] Spend and results show on the dashboard daily
- [ ] Pause rules are confirmed and tested

## Writes to
- `projects/meta/ACCESS.md`, `projects/ads/<campaign>.md`, `decisions/`
- `WORKLOG.md`, a handoff

## Next
- [36 · Email Marketing](./36-EMAIL-MARKETING.md)
