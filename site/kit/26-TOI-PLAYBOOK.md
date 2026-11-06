# 26 · The Overseas Initiative Playbook
> A written playbook for The Overseas Initiative, so updates, donor care and trips run on rails in English and Spanish.

**Run it:** `Run module 26 from my framework. Build the TOI playbook from what you know, ask me what's missing, and map every recurring job.`
**Needs first:** 04, 05, 06, 07, 12, 23
**Time:** about 60 minutes · **GEORGE's part:** answer one batch of questions, confirm the privacy rule, name who helps

## Fill in first
What's public: The Overseas Initiative (theoverseasinitiative.org) does missions in Cuba and Latin America. George is a co-founder. It equips the next generation of men and women for ministry. Its work and audience are bilingual, English and Spanish. Everything else is a slot. Fill each one from George's Claude memory, his Projects and his files before asking him.

| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{TOI_MISSION_LINE}} | One sentence on what TOI does, in George's words | theoverseasinitiative.org, past chats |
| {{TOI_COFOUNDERS}} | Co-founders and leaders, their roles, and who approves what | ask George |
| {{TOI_DONOR_PLATFORM}} | Where gifts come in (giving platform, bank, checks), who can see donor records, and the restricted folder George controls for any exports | ask George |
| {{TOI_DONOR_SEGMENTS}} | Groups that get different messages (monthly givers, first gifts, churches, trip alumni) | ask George |
| {{TOI_NEWSLETTER}} | How updates go out (email tool, list names, frequency) | inventory from module 04, ask George |
| {{TOI_TRIP_CALENDAR}} | Upcoming trips: dates, places (general region only), team size, leaders | ask George; calendar connector (read-only) |
| {{TOI_PRAYER_LIST}} | Where prayer requests live and who can read them | ask George |
| {{TOI_PARTNERS}} | Partner churches and ministries in the field, and what may be said publicly about each | ask George |
| {{TOI_SPANISH_STANDARD}} | Who checks Spanish before it goes out, and the regional variety to use | ask George |
| {{TOI_PHOTO_RULES}} | Consent rules for photos and stories (see the privacy rule below) | ask George to confirm |
| {{TOI_METRICS}} | The 3 to 5 numbers that matter (monthly givers, update open rate, trip sign-ups, funds raised for a project) | ask George |
| {{TOI_NEVER}} | Things that must never be said, shown or promised | ask George |

## Why this matters
TOI work repeats on a steady beat: thank donors, send the monthly update, prepare trips, share prayer needs, and do it all in two languages. Each of those is easy to delegate once it's written down and painful to re-explain every time. The people in the field also need protecting: a careless photo or name can put someone at risk. A playbook makes the safe way the default way.

## The privacy rule (applies to every TOI output)
- No names, faces or identifiable locations of people in Cuba, or anywhere sharing faith carries risk, unless that person gave explicit consent for that specific use and George confirmed it.
- Use first initials or roles ("a pastor in central Cuba"), general regions only, and photos where faces are turned away or blurred, unless consent is on file.
- Record consent in `projects/toi/CONSENT.md`: who, what use, date, who confirmed. No entry means no consent.
- When unsure, leave it out and flag it `[check]` in the dashboard item.
- Donor names and amounts never appear in public content. Thank-you notes go to the donor only.

## The donor data rule
- Donor names, amounts and giving history **never go in george-os or any git repo**, and never into a dashboard item's stored text beyond the one draft note addressed to that donor.
- They stay in {{TOI_DONOR_PLATFORM}} or in a restricted folder George controls (for example a private Drive folder).
- Agents read them through a connector at run time, use them for that run only, and keep just a pointer ("gifts live in <platform or folder>") and permitted aggregates (count of new gifts this month, number of monthly givers) in the brain.
- If no connector can reach the data, George or a named helper runs the thank-you job from inside that folder or platform; the agent doesn't copy the list into the repo.

## Steps
1. **Gather what you already know.** Read his Claude memory, Projects, `george-os`, and the TOI site. List each fact with its source. *Check:* every fact names a source.
2. **Fill the slots and ask once.** Fill what you can, mark inferences `[check]`, then send George one numbered list of questions for the rest. *Check:* one question message, answered.
3. **Confirm the privacy rule.** Show George the privacy rule above and ask him to approve or tighten it. Save the final version in `projects/toi/PRIVACY.md` and log the decision. *Check:* `decisions/` has an entry dated today for the TOI privacy rule.
4. **Write the playbook.** Create `projects/toi/PLAYBOOK.md` with: mission line, people and roles, where donor data lives (a pointer only, no donor names or amounts), newsletter, trips, prayer, partners, Spanish standard, scoreboard, never-list, open questions. *Check:* the file is on `main` and every section has content or "unknown, see open questions".
5. **Map the recurring jobs.** Fill the job map below. Use the skills named, the autonomy levels from [module 23](./23-AUTONOMY-LADDER.md), and the automation types from [module 19](./19-AUTOMATION-CHOOSER.md). Start every TOI job at level 1 or 2. *Check:* each job below has a row, and none is above level 2.
6. **Set up Spanish.** Every outward TOI piece is drafted in English and Spanish in the same dashboard item. The Spanish is a natural rewrite, not a word-for-word translation. A named person from {{TOI_SPANISH_STANDARD}} approves the Spanish. *Check:* a test item shows both versions and the Spanish approver is set.
7. **Add people and roles.** One `people/` file per co-founder or helper, with their dashboard role for the TOI brand. *Check:* each person in {{TOI_COFOUNDERS}} has a file and a role.
8. **Put the cadence on the calendar.** Monthly update date, thank-you turnaround, trip prep milestones (8 weeks, 4 weeks, 1 week, return). *Check:* the Sunday brief lists this week's TOI jobs.
9. **Add TOI to the dashboard.** TOI as a brand, with its scoreboard numbers in [module 17](./17-DASHBOARD-DATA-SOURCES.md). *Check:* a test TOI item appears under the TOI brand, visible only to TOI roles.
10. **Show George.** Send the playbook and job map. Make his corrections. *Check:* George confirmed it, logged in `decisions/`.

### Job map (in `projects/toi/PLAYBOOK.md`)
| Job | When | Skill | Starting level (23) | Automation (19) | Approver | Notes |
|---|---|---|---|---|---|---|
| Donor thank-you notes | within 48 hours of a gift | george-donor-thanks | 1 (draft for approval) | scheduled task reads new gifts through a connector at run time, per the donor data rule | George or a named co-founder | personal, short, never a form letter; amount mentioned only if George wants it; nothing about the donor saved in george-os |
| Monthly update (email and site) | {{DAY}} each month | george-missions-update | 1 | scheduled task drafts on day minus 5 | George, plus the Spanish approver | one story, one need, one prayer; English and Spanish |
| Prayer update | weekly or as needed | george-missions-update | 1 | manual or scheduled | George | privacy rule applies |
| Trip planning | from 8 weeks out | george-trip-planner | 2 (prepares checklists and timelines without approval; anything sent needs approval) | scheduled task at each milestone | trip leader | packing lists, forms, schedule, team briefing |
| Packing and team lists | 4 weeks and 1 week out | george-trip-planner | 2 | scheduled | trip leader | nothing about people in the field |
| Spanish versions | with every outward piece | george-missions-update | 1 | inside the same item | Spanish approver | natural Spanish, checked by a person |
| Photo stories after a trip | within 2 weeks of return | george-missions-update | 1 | manual start, George supplies photos | George | consent file checked first; faces and places per the privacy rule |
| Partner and church updates | quarterly | george-missions-update | 1 | scheduled | George | only what {{TOI_PARTNERS}} allows |

## GEORGE does
- Answers the one batch of questions.
- Approves or tightens the privacy rule.
- Names the co-founders, helpers and Spanish approver, and their roles.
- Supplies trip photos and confirms consent.

## Done when
- [ ] `projects/toi/PLAYBOOK.md`, `projects/toi/PRIVACY.md` and `projects/toi/CONSENT.md` exist on `main`
- [ ] A search of george-os finds no donor names, amounts or giving history
- [ ] The privacy rule is approved by George and logged
- [ ] Every job in the job map has a skill, a level and an approver
- [ ] A test item shows English and Spanish side by side, with the Spanish approver set
- [ ] TOI shows as a brand on the dashboard, visible only to TOI roles
- [ ] George confirmed the playbook

## Writes to
- `projects/toi/PLAYBOOK.md`, `projects/toi/PRIVACY.md`, `projects/toi/CONSENT.md`
- `people/*.md`, `calendar/`, `decisions/`, `NOW.md`, `WORKLOG.md`

## Next
- [27 · Other Work Boundaries](./27-OTHER-WORK-BOUNDARIES.md)
- Then [20 · Scheduled Tasks](./20-SCHEDULED-TASKS.md) for the monthly update draft
