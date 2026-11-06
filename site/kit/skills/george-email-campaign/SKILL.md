---
name: george-email-campaign
description: >-
  Use for newsletters and email sequences on George's email platform: "newsletter," "email campaign,"
  "welcome sequence," "email series," "announce the book to my list," "TOI email blast," "subject
  lines." Writes subject lines, preview text and bodies in his voice for dashboard review, with a test
  send before anything goes out; never sends.
---

# Email campaign

Newsletters and sequences his readers look forward to.

## Fill in first

| Slot | What it is |
|---|---|
| {{EMAIL_PLATFORM}} | The email tool George uses (for example Substack, Mailchimp, Kit) |
| {{REVIEWER}} | Reviews campaigns with George |
| {{ACCOUNT_EMAIL}} | The account email for the email platform login |

## Steps

1. george-session-start; read `voice/VOICE.md` and `projects/email/PLAYBOOK.md` if it exists (list segments, sending rhythm, sign-off).
2. **Plan:** for a sequence, list each email with its goal and timing (for example a welcome series of 3 over 7 days). For one newsletter, its one main point.
3. **Write each email:** three subject line options (plain, specific, under 50 characters), preview text, and the body in his voice: an opening moment, the point, one clear link or ask, his sign-off.
4. **Audience:** which list or segment on {{EMAIL_PLATFORM}}, and who is excluded. TOI emails follow `projects/toi/PRIVACY.md` and `CONSENT.md`.
5. george-slop-check, then george-approval-queue as a level 2 item: {{REVIEWER}}'s passed review, then George's final approval (two different people).
6. **Test send:** after Approve, a person loads it in {{EMAIL_PLATFORM}} and sends a test to George and {{REVIEWER}} only. They check links, images, names and phone display. Fixes make a new version for a new Approve.
7. **Send:** a person sends or schedules it. The send time and list are recorded in the dashboard as the receipt.

## Rules

- Never send, schedule or import contacts. Never touch the subscriber list.
- No invented testimonials, numbers or urgency. Unsubscribe link always present.
- No em dashes; no "I hope this email finds you well."

## Try saying

"Write a three-email welcome sequence for new subscribers on {{EMAIL_PLATFORM}}."

## Make it yours

Save his best-opened subject lines in `projects/email/PLAYBOOK.md`, with open rates once george-dashboard-data pulls them.
