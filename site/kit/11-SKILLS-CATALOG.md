# 11 · Skills Catalog
> Every george-* skill on one page: what it does, the sentence that runs it, and the module it belongs to.

**Run it:** `Run module 11 from my framework.`
**Needs first:** 10
**Time:** about 15 minutes · **GEORGE's part:** try five of the sentences

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{SKILLS_TO_SKIP}} | Skills George struck in module 10 | `decisions/0003-skills.md` |
| {{GS_PLAN_ONE_LINE}} | G's Plan in one line, used by george-gsplan | `BRAIN.md` |

## Why this matters
George shouldn't have to remember skill names. He says what he wants in plain words and Claude picks the skill. This page exists so the agent knows the whole set, and so George can see what's possible and strike what he doesn't need.

## Steps
1. **Learn the catalog.**

**Memory and running the system**
| Skill | What it does | Try saying | Module |
|---|---|---|---|
| george-session-start | Pulls `main`, reads the brain and the newest handoffs, says what it picked up | "Start the session." | 07 |
| george-handoff | Worklog line, handoff file, NOW update, push to `main` | "Wrap up." | 07 |
| george-brain | Adds or updates a fact, person, project or decision with its source; never duplicates | "Remember that the Cuba trip moved to March." | 06 |
| george-coach | Runs a big job: plan, a checkbox per step, proof for each, checkpoints | "Use george-coach to move my book pages to the new design." | 07 |
| george-weekly-brief | Sunday: what shipped, what's due, what's stuck, any session without a handoff | "Weekly brief, please." | 24 |
| george-better-prompt | Rewrites a rough ask using the eight parts of a strong ask, asks at most three questions, shows the improved prompt and offers to run it | "Make this prompt better: thumbnail for Romans week 3." | 41, 42 |

**Writing in his voice**
| Skill | What it does | Try saying | Module |
|---|---|---|---|
| george-voice | Writes like George, from `voice/VOICE.md` and his gold posts | "Say this the way I would." | 12 |
| george-slop-check | Flags AI tells, rewrites them in his voice, attaches a pass/fail report | "Slop check this." | 13 |
| george-weekly-article | Thursday article: a hard Bible question answered up front, told the way he tells stories, verse as text | "Draft Thursday's article on why there are four Gospels." | 24 |
| george-video-package | Tuesday video: script, title, description, chapters, thumbnail words, pinned comment; for a long-form episode, the upload pack with scripture, playlist, end screen, Shorts captions and podcast notes | "Build Tuesday's video package on Jan Hus." | 24, 39 |
| george-repurpose | Turns an article or video into Substack, social captions and podcast notes | "Repurpose this week's article." | 28 |
| george-sermon-to-article | A sermon or teaching transcript into an article draft and three shorts | "Turn Sunday's sermon into an article." | 24 |
| george-interview-pitch | Pitches to radio and podcast hosts | "Pitch me to three Christian radio shows about The Relay." | 25 |
| george-book-promo | Posts, emails and talking points for his books; never invents reviews or numbers | "Book promo for The Four Faces of Christ this month." | 25 |
| george-email | Draft-only emails in his voice from the right identity; never sends | "Draft a thank-you to the host from yesterday." | 02 |

**G's Plan and TOI**
| Skill | What it does | Try saying | Module |
|---|---|---|---|
| george-gsplan | A template skill George's Claude fills with how G's Plan works ({{GS_PLAN_ONE_LINE}}) | "Run my G's Plan weekly job." | 25 |
| george-missions-update | TOI prayer and partner update in English and Spanish | "Draft the TOI update from this week's trip notes." | 26 |
| george-donor-thanks | Thank-you notes to TOI partners, warm and specific; reads names from the giving system at run time, never stores donor names or amounts in the repo | "Draft thank-yous for this month's new partners." | 26 |
| george-trip-planner | Mission trip plan: dates, team, packing, schedule, prayer list, update cadence | "Plan the spring Cuba trip." | 26 |

**Pages, design and the site**
| Skill | What it does | Try saying | Module |
|---|---|---|---|
| george-premium-page | Builds or redesigns a page so it looks designed: a one-page design brief first, then a separate review | "Redesign the books page." | 14 |
| george-design-check | Reviews any page or graphic for template look, weak type and stock layouts | "Design check the TOI homepage." | 14 |
| george-site-update | Webflow drafts through the Webflow connector: clean rich text, no empty spacer paragraphs, published only after Approve | "Put Thursday's article in Webflow as a draft." | 28 |

**Dashboard, automation and safety**
| Skill | What it does | Try saying | Module |
|---|---|---|---|
| george-approval-queue | Posts a version to the dashboard, checks its status, acts only on Approved | "Send this to the dashboard for approval." | 16 |
| george-dashboard-data | Pulls his numbers into the dashboard on a schedule | "Refresh this week's numbers." | 17 |
| george-managed-agent-brief | Writes the brief for a Managed Agent from the AGENT-BRIEF template | "Write the brief for a TOI updates agent." | 22 |
| george-secrets | How to use 1Password and cloud secrets; refuses any key typed into chat | "How should this task get the Webflow key?" | 09 |

**Marketing command center**
| Skill | What it does | Try saying | Module |
|---|---|---|---|
| george-command | Answers George's short commands ("status", "what's going out this week", "what did my reviewer flag") from the brain and the dashboard, and turns requests into dashboard items | "Status." | 33 |
| george-meta-post | Facebook and Instagram post packages: caption per platform, assets, alt text, link, scheduled time; a person schedules them in Meta Business Suite | "Posts for Thursday's article, Friday morning." | 34 |
| george-meta-ads | Complete Meta ad briefs and weekly results; never launches, edits or changes spend | "Write an ads brief to promote The Relay." | 35 |
| george-email-campaign | Newsletters and sequences for {{EMAIL_PLATFORM}}, test send to George and {{REVIEWER}} first; never sends | "Write a three-email welcome sequence." | 36 |
| george-ai-visibility | Monthly AI visibility check with his Rank Prompt access: non-brand visibility per theme, compared with last month, recommendations verified against the live page, fixes sent to the dashboard | "Run the monthly AI visibility check." | 37 |

**YouTube long-form**
| Skill | What it does | Try saying | Module |
|---|---|---|---|
| george-series-plan | A 6 to 10 week Bible-study series as episodes: one question per session, question-first titles with the passage in parentheses, chapter beats, Shorts moments, scripture list, consent reminder | "Plan an eight-week series from the Wednesday study on Romans." | 38 |
| george-study-to-episode | One filmed study through HyperFrames: transcript, cut plan, chapters, scripture cards, Studio review, render, Shorts | "Edit Romans week 3 into an episode and Shorts." | 39 |
| george-thumbnail | 2 to 4 word options, three clearly different versions from the template for Test & compare, phone-size check, design check | "Thumbnails for Romans week 3." | 40 |

   *Check:* you can name the skill for any plain-words request George makes.
2. **Strike what he doesn't want.** Remove {{SKILLS_TO_SKIP}} from this table in George's copy (`george-os/framework/11-SKILLS-CATALOG.md`). *Check:* the table in his copy matches what's installed.
3. **Have George try five.** He picks five sentences from the table and says them. *Check:* each one triggers the right skill on the first try. If one doesn't, sharpen that skill's description and log it in `FEEDBACK.md`.

## GEORGE does
- Tries five sentences.
- Strikes any skill he won't use.

## Done when
- [ ] His copy of the catalog matches what's installed.
- [ ] Five sentences triggered the right skills.

## Writes to
- `george-os/framework/11-SKILLS-CATALOG.md`
- `george-os/FEEDBACK.md` (any misfires)

## Next
- [12 Voice Guide](./12-VOICE-GUIDE.md)
