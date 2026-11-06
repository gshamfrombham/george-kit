# 36 · Email Marketing
> George's email list grows from his site and Substack, every campaign is drafted in his voice, tested on two people, and sent only after approval.

**Run it:** `Run module 36 from my framework. Find my email platform, map my lists, and set up the send flow.`
**Needs first:** 04, 09, 12, 13, 16, 18, 28
**Time:** about 45 minutes · **GEORGE's part:** confirm the platform and sender details, approve every send

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{EMAIL_PLATFORM}} | Where his emails go out: his Substack newsletter, or a tool like Mailchimp or Kit | the inventory from module 04; ask George if there's more than one |
| {{LISTS}} | Each list or audience, what it's for, and its size | the platform, read-only |
| {{LIST_SOURCES}} | Where sign-ups come from (Webflow forms, Substack, events, TOI) | his site's forms, the platform |
| {{SENDER}} | From name, from address and reply-to for each list | the platform, ask George |
| {{MAILING_ADDRESS}} | The postal address that must appear in marketing email | ask George |
| {{REVIEWER}} | The team member who gets every test send | module 18 |
| {{SEQUENCES}} | Automated series (welcome, new reader, book launch, trip follow-up) | the platform, ask George |
| {{SEND_PLAN}} | Regular sends and their days (America/Chicago) | module 24 |

## Why this matters
Email is the one channel George owns outright, and his readers already said yes to hearing from him. That makes every send worth getting right: his voice, the correct list, working links, and nothing that hurts trust. A fixed flow (draft, test to two people, approve, send) keeps quality high without George doing the work himself.

## Steps
1. **Find the platform.** From the module 04 inventory, name {{EMAIL_PLATFORM}}. If he uses more than one, record which list lives where. *Check:* `projects/email/SETUP.md` names each platform and list.
2. **Map list sources.** Trace every sign-up path: Webflow forms, Substack, any event or TOI sign-up. Confirm each one lands in the right list. *Check:* a test sign-up through each form appears in its list.
3. **Set sender rules.** For each list, record {{SENDER}}, {{MAILING_ADDRESS}}, and that every marketing email has a working unsubscribe link and an honest subject line. Use the right sender identity for each role (module 27). *Check:* the rules are in `projects/email/SETUP.md`.
4. **Draft in the dashboard.** Campaigns and sequence emails are dashboard items: subject, preview text, body, list or segment, send time, and links. They pass `george-slop-check`. TOI emails come in English and Spanish (module 26). *Check:* a test campaign item has every field.
5. **Test send before every send.** Send a test to George and {{REVIEWER}}. She checks links, names, images, the subject on a phone, and the unsubscribe link. *Check:* the item shows the test date and her reviewer mark.
6. **Send at level 2.** After {{REVIEWER}}'s review passes and George gives final approval on that exact version (two different people, enforced by the dashboard), a person schedules or sends it in {{EMAIL_PLATFORM}} and pastes the campaign link back as the receipt. *Check:* one real send has its receipt.
7. **Level 3 only through the platform's API.** Automatic sends need the platform's official API, a key stored per module 9, a claim on the approved version, and a receipt for each send. Only after four clean weeks and George's decision in `decisions/`. Substack has no official publishing API, so it stays level 2. *Check:* nothing sends automatically without that decision.
8. **Bring list numbers into the dashboard.** Pull subscriber counts, new sign-ups, unsubscribes, and open and click rates for recent sends, read-only (module 17). *Check:* the dashboard shows this week's numbers.

## GEORGE does
- Confirms the platform, sender details and mailing address.
- Approves every send.
- Decides if and when any list moves to level 3.

## Done when
- [ ] Every list and sign-up path is mapped and tested
- [ ] Sender and unsubscribe rules are written down
- [ ] One campaign went through draft, test send, review, approval, send by a person and receipt
- [ ] List numbers show on the dashboard

## Writes to
- `projects/email/SETUP.md`, `projects/channels/email.md`
- `decisions/`, `WORKLOG.md`, a handoff

## Next
- Back to [28 · Publishing Channels](./28-PUBLISHING-CHANNELS.md) to confirm every channel row matches reality
