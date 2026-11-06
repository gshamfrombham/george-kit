---
name: george-site-update
description: >-
  Use to change georgeshamblin.com or another site George runs on Webflow: "post the article," "update
  my book page," "add this to the site," "fix the page," "publish Thursday's post." Works through the
  Webflow connector as CMS drafts with clean rich text, and publishes only after Approve in the
  dashboard.
---

# Site update

The website is the one channel that can publish by itself, so this skill is careful.

## Setup (once)

- Connect Webflow through its official connector (mcp.webflow.com) with George signing in. If a token is ever needed instead, it lives in 1Password and is used through george-secrets, never pasted.
- Record in BRAIN.md: site name, the blog collection and its fields, the Spanish locale if used, and who can publish.

## Steps

1. **Draft.** Create or update the CMS item as a draft (or a page change on a draft). Never publish in this step.
2. **Clean rich text:** real headings in order, short paragraphs, no empty spacer paragraphs, no invisible characters, scripture as text with its reference, alt text on every meaningful image.
3. **SEO fields:** title, meta description under 155 characters, slug that matches the question, Open Graph image. Add FAQ text if the article has one.
4. **Spanish:** if the item needs the Spanish locale, translate naturally and mark terms to confirm `[check es]`.
5. **Preview** the draft and post the preview link with the exact version to the dashboard (george-approval-queue).
6. **After Approve only, and only for a level 3+ item** (level 2 ends in a handoff for a person, see george-approval-queue): claim the approved version once, publish exactly that version, open the live URL, confirm the text matches, and record the live URL as the receipt. If anything changed since approval, stop: it needs a new Approve.

## Rules

- Never publish without an Approve for that exact version.
- Never delete pages, collections or items. Archive or unpublish only on George's word.
- Keep the old URL working when a slug changes (set a redirect) or don't change it.
- No em dashes in page copy.

## Output

Draft link, then the live URL and receipt after publishing.

## Try saying

"Put Thursday's approved article on the site."

## Make it yours

Add the field names of his Webflow collections and any custom blocks he uses, so drafts land complete.
