# 00 · Start Here
> One page that tells you, George's Claude, what this framework is, the order to run it in, and the first thing to do.

**Run it:** `Read 00-START-HERE from my framework and tell me the plan.`
**Needs first:** nothing
**Time:** about 10 minutes · **GEORGE's part:** read your one-paragraph plan and say "go"

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{GEORGE_GITHUB_PERSONAL}} | The personal GitHub account that will hold the brain repo | Ask George once |
| {{SETUP_MACHINE}} | The laptop where the first setup runs | Ask George once |
| {{FRAMEWORK_URL}} | Where this framework lives | The address you fetched this file from |
| {{ACCOUNT_EMAIL}} | The one email used for **every** account George creates in this framework (Cloudflare, 1Password, Claude Console, any data service) | The handoff George pasted names it; confirm with George and write it in `BRAIN.md` |

## Why this matters
George relearns the same things over and over because nothing his agents learn is written down where the next agent can find it. He is also the production line for every video, article and update, and drafts from AI tools don't always sound like him. This framework fixes those three things in a set order. Each module is a template: you fill its slots from what you already know about George or by asking him once, then you run its steps and prove each one. You are expected to know things we don't, such as what **G's Plan** is. Wherever you see `{{GS_PLAN_...}}`, fill it from your own knowledge of George and confirm with him.

## Steps
1. **Read the three standing rules.** They apply to every module, every session, every agent.
   - **Drafts, George decides.** Nothing is sent, posted, published or paid without an Approve from George or someone he named.
   - **If it isn't in the brain repo, it didn't happen.** Every session starts by reading `george-os` and ends by writing a handoff to `main`.
   - **No secrets in chat, ever.** Use a connector or 1Password. A key that lands in a chat is treated as leaked.
   *Check:* repeat the three rules back to George in your own words.
2. **Read the run order below and the module format in [01](./01-HOW-THIS-FRAMEWORK-WORKS.md).** *Check:* you can say which modules need George's hands.
3. **Open the session on George's laptop.** The first setup runs in the Claude desktop app, **Code** tab, as a **local** session, because some steps install things on his computer. Later work can run in the cloud. *Check:* you can run a harmless command such as `git --version`.
4. **Write George a one-paragraph plan.** Say which modules you will run today, what you need from him, and roughly how long. *Check:* George says "go".
5. **Start with module 04.** It finds what Claude already knows about George before anything new gets built. *Check:* 04's interview batch is ready to show him.

## The run order
| # | Module | What it gets George | Needs first |
|---|---|---|---|
| 00 | [Start Here](./00-START-HERE.md) | This page | nothing |
| 01 | [How This Framework Works](./01-HOW-THIS-FRAMEWORK-WORKS.md) | How to prompt, re-run and change modules | 00 |
| 02 | [Ground Rules](./02-GROUND-RULES.md) | The rules every agent follows | 01 |
| 03 | [System Map](./03-SYSTEM-MAP.md) | One picture of how the pieces fit | 02 |
| 04 | [Inventory and Interview](./04-INVENTORY-AND-INTERVIEW.md) | Everything Claude already knows, gathered once | 03 |
| 05 | [Profile](./05-PROFILE.md) | Who George is, written down for every agent | 04 |
| 06 | [Brain Repo](./06-BRAIN-REPO.md) | The private repo that is the single source of truth | 04, 05 |
| 07 | [Memory Ritual](./07-MEMORY-RITUAL.md) | Start and end every session the same way | 06 |
| 08 | [Claude App Setup](./08-CLAUDE-APP-SETUP.md) | Projects, memory, connectors, Pro plan settings | 06, 07 |
| 09 | [Passwords and Secrets](./09-PASSWORDS-AND-SECRETS.md) | 1Password, with no keys in chats | 08 |
| 10 | [Skills Adoption](./10-SKILLS-ADOPTION.md) | The george-* skills installed and his to change | 06, 09 |
| 11 | [Skills Catalog](./11-SKILLS-CATALOG.md) | What each skill does and when to use it | 10 |
| 12 | [Voice Guide](./12-VOICE-GUIDE.md) | George's real voice, written down | 06, 07 |
| 13 | [Anti-Slop](./13-ANTI-SLOP.md) | A check every draft must pass | 12 |
| 14 | [Design Standard](./14-DESIGN-STANDARD.md) | Pages and graphics that look designed | 06 |
| 15 | [Dashboard: What and Why](./15-DASHBOARD-WHAT-AND-WHY.md) | One place to see and approve everything | 04, 05 |
| 16 | [Dashboard Build](./16-DASHBOARD-BUILD.md) | The approval dashboard, built and locked | 09, 15 |
| 17 | [Dashboard Data Sources](./17-DASHBOARD-DATA-SOURCES.md) | His numbers pulled in | 09, 16 |
| 18 | [Team Access](./18-TEAM-ACCESS.md) | His team signs in once, sees only their part | 16 |
| 19 | [Automation Chooser](./19-AUTOMATION-CHOOSER.md) | Which job runs where | 04, 07, 16 |
| 20 | [Scheduled Tasks](./20-SCHEDULED-TASKS.md) | Weekly jobs that run without him | 06, 07, 16, 19 |
| 21 | [Managed Agents Setup](./21-MANAGED-AGENTS-SETUP.md) | Always-on agents on the Claude API, with a cap | 06, 09, 19 |
| 22 | [Managed Agents Recipes](./22-MANAGED-AGENTS-RECIPES.md) | Ready agent recipes for recurring work | 21, 23 |
| 23 | [Autonomy Ladder](./23-AUTONOMY-LADDER.md) | What runs alone and what waits for Approve | 16, 19 |
| 24 | [Weekly Rhythm](./24-WEEKLY-RHYTHM.md) | His week, with two approvals and a recording | 16, 20, 23 |
| 25 | [G's Plan Playbook](./25-GS-PLAN-PLAYBOOK.md) | G's Plan run by the system | 04, 05, 06, 07, 23 |
| 26 | [TOI Playbook](./26-TOI-PLAYBOOK.md) | The Overseas Initiative run by the system | 04, 05, 06, 07, 12, 23 |
| 27 | [Other Work Boundaries](./27-OTHER-WORK-BOUNDARIES.md) | Personal and work systems kept apart | 02, 04, 06 |
| 28 | [Publishing Channels](./28-PUBLISHING-CHANNELS.md) | What publishes itself and what stays a paste | 09, 12, 13, 16 |
| 29 | [Control and Scoreboard](./29-CONTROL-AND-SCOREBOARD.md) | Five checks that prove it works | 07, 16, 17, 20 |
| 30 | [Troubleshooting](./30-TROUBLESHOOTING.md) | What to do when something breaks | nothing |
| 31 | [Iteration Loop](./31-ITERATION-LOOP.md) | How George and Trevor improve this framework | 06, 10 |
| 32 | [Prompt Library](./32-PROMPT-LIBRARY.md) | Copy-paste prompts for daily use | nothing |
| 33 | [Command Center](./33-COMMAND-CENTER.md) | Run everything with a few short commands | 07, 10, 16, 23, 28 |
| 34 | [Meta Social (Facebook and Instagram)](./34-META-SOCIAL.md) | Facebook and Instagram, owned by him, checked before posting | 09, 12, 13, 16, 18, 28 |
| 35 | [Meta Ads](./35-META-ADS.md) | Meta ads with a hard spend cap; a person launches every ad | 09, 16, 18, 23, 34 |
| 36 | [Email Marketing](./36-EMAIL-MARKETING.md) | Email list and newsletters, test-sent and checked before sending | 04, 09, 12, 13, 16, 18, 28 |
| 37 | [GEO and SEO Strategy](./37-GEO-SEO-STRATEGY.md) | Get named and cited by AI engines for the topics he teaches | 12, 13, 16, 28 |

Three more things come with this framework:
- **Skills:** [./skills/](./skills/README.md), the george-* skills with an installer. Module 10 installs them.
- **Dashboard starter:** [../dashboard-proto/](../dashboard-proto/), a blank, polished dashboard shell. Module 16 turns it into George's own dashboard.
- **Templates:** [./templates/](./templates/BRAIN.md), the starter files for the brain repo. Module 06 copies them.

## GEORGE does
- Reads the one-paragraph plan and says "go".
- Answers module 04's questions in one sitting.

## Done when
- [ ] George's agent has repeated the three standing rules.
- [ ] George approved today's plan.
- [ ] Module 04 is next.

## Writes to
- Nothing yet. The brain repo doesn't exist until module 06.

## Next
- [04 Inventory and Interview](./04-INVENTORY-AND-INTERVIEW.md), after a quick read of 01 to 03.

---

**The first prompt George gives his Claude:**

> Read my framework starting at 00-START-HERE ({{FRAMEWORK_URL}}). Follow the module format, fill the slots from what you already know about me and ask me the rest in one batch, and run the modules in order. Stop only for the steps marked GEORGE. Start by telling me today's plan.
