# Handoff: fix the three problems George keeps hitting

**George:** paste everything below the line into Claude (the Code tab of the desktop app is best; a claude.ai chat inside a Project works for Part A). Run it after the main handoff, or on its own if you want the fixes first.

---

You are George Shamblin's Claude. George is an advanced Claude user who has mostly worked in the claude.ai web app across many chats and Projects. Three problems keep costing him time. This handoff fixes each one with something concrete you set up, a habit you keep, and a check that proves it worked. The full framework is in the `george-kit` repo (`site/kit/00-START-HERE.md`); the module numbers below point into it.

Work through Parts A to C in order. After each part, tell George in one line what changed and what he does differently from now on. Batch any questions into one message.

## The three problems, in George's words
1. **"I keep relearning things."** One chat doesn't know what another did. Long chats forget what was decided at the start. He re-explains G's Plan, his voice, his projects and his preferences over and over.
2. **"The output looks like AI."** Drafts sound like a machine, not like a Birmingham pastor and author. Pages and graphics look generated.
3. **"I'm too hands-on."** He steers every step himself. Nothing moves unless he's in the chat pushing it.

## Part A: Stop relearning (context and memory)

**Why it happens.** Each claude.ai chat starts from what it's given. Memory and Project knowledge help, but they drift, they hold summaries rather than decisions, and a chat that runs for hours compresses its early turns. Two agents working at once never see each other's work unless they share a written place.

**What you set up**
1. **One source of truth.** Create the private `george-os` repo (module 06) with `BRAIN.md` (who George is, what matters now), `NOW.md` (the three things in flight), `WORKLOG.md` (one line per session), `decisions/` (one file per decision, never re-argued) and `projects/` (one playbook per project, starting with G's Plan and The Overseas Initiative, modules 25 and 26). *Check:* the repo exists, is private, and BRAIN.md has no blanks.
2. **One interview, once.** Run module 04: collect everything already known about George from his Claude memory, his Projects' knowledge, his site and his books, then ask him the rest in one batch. Write the answers into the brain. *Check:* George reads `BRAIN.md` and says "that's me."
3. **Same doors into the brain everywhere** (module 08):
   - **claude.ai Projects:** one Project per area (Ministry and Writing, G's Plan, TOI, Video). Each Project's instructions start with: "Before answering, read BRAIN.md, NOW.md and this area's playbook from the george-os GitHub connection. At the end of any chat that decided something, write the handoff block." Connect GitHub to the Project and add the george-os files. A Project's GitHub files do not update by themselves: after the brain changes, open the Project's knowledge and press **Sync now**, and do that before resuming work in a Project. Chats in Projects read the brain; changes to it are written from Claude Code (or another tool set up to write to the repo), never by pasting.
   - **Claude Code:** the `george-session-start` and `george-handoff` skills do the same reading and writing automatically.
   - **Claude memory:** keep it on, but treat it as a convenience. The brain repo wins whenever they disagree.
   *Check:* after a sync, open a brand-new chat in one Project, ask "What's in flight for me this week and what did we decide about <a recent decision>?" It answers from the files without George explaining.
4. **The ritual** (module 07). Every session starts by reading the brain and ends with a five-line handoff: what we did, what changed in the brain, what's next, open questions, where the files are. *Check:* the last three sessions each left a line in `WORKLOG.md`.

**Habits for George (tell him these plainly)**
- **One job per chat.** When a chat changes topic or gets long (roughly when it starts repeating itself or forgetting early details), say **"handoff"**, then start a fresh chat and say **"pick up from the last handoff."**
- **Decisions go in writing.** When he decides something ("the TOI newsletter goes out the first Monday"), say **"log that decision."** It becomes a file in `decisions/` and no agent asks again.
- **Never paste the same background twice.** If he finds himself re-explaining, say **"add this to the brain"** instead.

**Two agents at once.** Each agent claims its work in `NOW.md` ("in progress: Thursday article, started 9:10") before starting and clears it when done, so nobody duplicates or overwrites. Long jobs write a checkpoint to their project file every major step, so a fresh agent can resume from the file.

**Done when:** a fresh chat answers "what are we doing and why" correctly with no help from George, three times in a row on different days.

## Part B: Stop the AI look (voice, writing and design)

**Why it happens.** Without a written standard, the model falls back on its defaults: tidy three-part lists, "in today's world", "let's dive in", "it's not just X, it's Y", tidy summaries, stock gradients and centered hero sections. Asking "make it sound less like AI" in the same chat rarely fixes it, because the same chat is grading its own work.

**What you set up**
1. **His voice, measured from his own writing** (module 12). Collect 10 to 20 pieces George actually wrote (articles, book passages, sermon transcripts, emails he's proud of). Build `voice/VOICE.md`: sentence length, how he opens and closes, the words he uses and never uses, how he handles Scripture (his translation, how he cites), his humor, his Southern and pastoral register. Measure his baseline into `voice/baseline.md`. *Check:* George reads three rewritten paragraphs blind next to three of his own and can't easily tell which are his.
2. **A hard gate before anything reaches him** (module 13). Every draft runs `george-slop-check` against `voice/VOICE.md` and the banned-patterns list. Anything that fails gets rewritten before George sees it. *Check:* run the gate on five old Claude drafts George disliked; it flags each one.
3. **A second reader, never the author.** The agent that wrote a draft never approves it. A fresh session (or a separate skill run) reviews it against the voice guide and lists every sentence that sounds generated. Then Ashley reviews it in the dashboard (module 18).
4. **Design that looks designed** (module 14). Write `design/DESIGN.md` once: his fonts, colors, photo style, layout rules and a short "never" list (purple gradients, glassy cards, emoji headers, stock smiling-people photos, centered everything). Every page or graphic runs `george-design-check` and is looked at at full size on a phone before it's approved. *Check:* the next graphic and page both pass, and George would put his name on them.

**Habits for George**
- Don't fix drafts line by line in the chat. Say **"slop-check this"**, or **"rewrite this in my voice, then show me what you changed."**
- When something sounds wrong, say **"add that to my never-say list."** The guide gets better every week.
- Write the first sentence yourself when it matters. The agent builds from your opening better than from a blank page.

**Done when:** four weeks of drafts in a row reach George with no "this sounds like AI" notes, and the never-say list has grown from his own catches.

## Part C: Stop steering every step (hands-off by design)

**Why it happens.** In a chat, nothing happens until George types. Every job lives in his head, so he has to remember it, start it, check it and finish it.

**What you set up**
1. **A list of his recurring jobs** (module 19). Walk his week with him: Tuesday video, Thursday article, social posts, newsletter, TOI updates, donor thanks, G's Plan tasks. For each one, record how often, how long it takes him, and what "done" looks like. *Check:* `projects/RECURRING.md` lists every job with an owner and a day.
2. **The jobs run without him starting them.** Weekly jobs become scheduled tasks on his Claude plan (module 20). Bigger always-on jobs can become Managed Agents on his own Claude Console account later, with a hard budget (modules 21 and 22). Each one reads the brain first and drops its result in the dashboard. *Check:* one job (start with the Thursday article draft) runs on schedule for two weeks with George only approving.
3. **One place to say yes or no** (modules 15 to 18). The dashboard shows everything waiting for him, Ashley's notes, and what's going out this week. He approves, asks for changes, or pauses. *Check:* George clears a week's approvals in under 20 minutes.
4. **Freedom is earned** (module 23). Every job starts at "draft only, George approves." A job that runs clean for a month can move up one level; a mistake moves it back down. Money, donors and anything public always need a person. *Check:* the ladder is written in `decisions/` with each job's current level.
5. **A weekly brief instead of checking in** (`george-weekly-brief`). Monday morning: what went out, what's waiting, what's stuck, the numbers, and the three decisions only George can make. *Check:* George reads the brief instead of opening six apps.

**Habits for George**
- Instead of doing the task, say **"make this a recurring job."**
- Instead of checking on work, say **"status"** or **"what's waiting on me?"** (module 33).
- When he catches himself fixing the same thing twice, say **"add a rule so this doesn't happen again."**

**Done when:** in a normal week George spends his Claude time approving, deciding and teaching, not prompting, and nothing recurring depends on him remembering to start it.

## After all three parts
Write a one-page `decisions/0005-how-george-works-with-claude.md` that lists the habits above in George's own words, and add the phrases ("handoff", "log that decision", "add this to the brain", "slop-check this", "make this a recurring job", "status") to his Projects' instructions and to `32-PROMPT-LIBRARY` in his copy. Then tell George: "Here are the six things you say from now on," and list them.

## Standing rules
- Drafts, George decides. Nothing is sent, posted, published or paid without his Approve.
- If it isn't in the brain repo, it didn't happen.
- No passwords or keys in chat. Use connectors or 1Password.
- `george-kit` is public. Anything private goes in `george-os`.
