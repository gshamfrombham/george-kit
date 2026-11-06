# 42 · Prompting Like a Pro
> How George asks so Claude gets it right the first time: the eight parts of a strong ask, twelve patterns from his own work, which tab to use, how to steer when it drifts, and how to save a prompt that worked as a skill.

**Run it:** `Run module 42 from my framework. Teach me the anatomy, then let's practice on {{PRACTICE_JOB}}.`
**Needs first:** 41
**Time:** about 45 minutes, including practice · **GEORGE's part:** rewrite three of his own recent asks and compare the results

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{PRACTICE_JOB}} | A real job this week to practice on | `NOW.md`, or ask George |
| {{RECENT_ASKS}} | Three prompts George typed recently that got weak results | Ask George, or his recent chats if he points to them |
| {{REVIEWER}} | The person who reviews drafts in the dashboard | Module 18 |

## Why this matters
Claude is very capable and very literal. It does what the words say, and when the words leave a gap, it fills the gap with the most average answer it knows. That average answer is what sounds like AI. A strong ask closes the gaps: it says what the work is for, who will read it, where the facts come from, what good looks like, and how Claude should check itself before handing it back. None of this is a trick. It's the same brief George would give a capable new assistant on their first day. Module 41 set up the room (the brain, the skills, the reviewer); this module is how George talks in it.

## Steps
1. **Learn the anatomy of a strong ask.** Eight parts. Not every ask needs all eight, but every weak result is missing at least one.

   | Part | What it answers | Example from George's world |
   |---|---|---|
   | **Goal** | What is this for? | "A Thursday article that answers why there are four Gospels." |
   | **Who it's for** | Who reads, watches or hears it? | "Church members who've never studied the Gospels side by side." |
   | **Context and sources** | What should Claude read first? | "Use my Wednesday study notes in Drive and the series plan in the brain." |
   | **What good looks like** | How will we know it's right? | "About 900 words, the question answered in the first paragraph, one story from my own life." |
   | **Constraints** | What must it never do? | "No em dashes, Scripture as text with the reference, no made-up quotes." |
   | **Examples** | What should it sound or look like? | "Match the tone of my article on the Psalms in `voice/gold/`." |
   | **The check** | How should Claude test its own work? | "Run george-slop-check and have george-reviewer check it before you show me." |
   | **What to hand back** | What do I get at the end? | "The draft, the slop-check report, and anything marked [check]." |

   A useful habit: give the reason, not just the rule. "Keep it under 900 words because people read it on their phones" works better than "under 900 words", because Claude can apply the reason to choices the rule doesn't cover. *Check:* George names the eight parts from memory, or close to it.

2. **Learn the twelve patterns.** Each one is a short phrase George can add to almost any ask. The "before" is how most people ask; the "after" is the same request done well.

   **1. "Plan first, then wait."** For anything bigger than a few minutes. Claude lays out the steps and stops, so George can fix the direction before any work happens. In Code, Plan mode does the same thing.
   - Before: "Plan an eight-week series on Romans."
   - After: "I want an eight-week Wednesday study series on Romans for YouTube. Plan first, then wait: give me the eight questions, one per week, with the passage for each, and stop. Don't write any episode until I say go."

   **2. "Ask me questions first."** When George knows the job but hasn't said everything. Cap it so it doesn't become an interview.
   - Before: "Write the TOI update."
   - After: "Draft this month's TOI partner update in English and Spanish from the trip notes in the brain. Before you write, ask me up to three questions about anything you'd otherwise have to guess."

   **3. "Give me two or three options."** For judgment calls: titles, openings, thumbnail words, subject lines. Ask for real differences, and Claude's pick.
   - Before: "Title for the Romans 3 episode."
   - After: "Give me three title options for Romans week 3 that are clearly different: one a direct question, one a surprising angle, one in plain words a new believer would search for. Tell me which you'd pick and why."

   **4. "Show me what you changed."** When Claude edits George's writing. He sees every change and keeps control of his own words.
   - Before: "Clean up my sermon outline."
   - After: "Tighten this sermon outline for Sunday. Keep my points and my illustrations. Show me what you changed as a short list (old line, new line, why), then the clean version."

   **5. "Check it against my voice guide."** Points Claude at the standard instead of its own taste.
   - Before: "Make this sound less like AI."
   - After: "This draft sounds generated. Check it against `voice/VOICE.md` and `voice/banned.md`, list every line that breaks them, then rewrite only those lines in my voice and show me the changes."

   **6. "Have a fresh reviewer check it."** The writer never grades its own work. george-reviewer (module 41) reads with fresh eyes and can't quietly fix what it's judging.
   - Before: "Is this book promo email good?"
   - After: "Draft the launch email for The Relay to my list. Then have george-reviewer check it against my voice guide and the anti-slop list. Fix what it flags, and show me the review with the final draft."

   **7. "Use the X skill."** Skills hold the steps that worked last time. Naming one gets the full playbook instead of a guess.
   - Before: "Make a thumbnail for this week's video."
   - After: "Use george-thumbnail for Romans week 3. The one question is 'Is anyone righteous?'. I want the thinking photo."

   **8. "Work through this list one at a time and check each."** For batches: Claude finishes and proves one item before starting the next, so one mistake doesn't spread through all of them.
   - Before: "Fix the descriptions on my last ten videos."
   - After: "Here are ten video links. One at a time: read the current description, rewrite it with george-video-package's rules, check it for em dashes and a working link, and tick it off in `projects/youtube/descriptions.md` before you move to the next."

   **9. "Tell me what you're unsure of."** Brings guesses into the open instead of letting them hide in confident sentences.
   - Before: "Write the history section on Jan Hus."
   - After: "Write the Jan Hus section for the Torchbearers episode. At the end, list every date, quote and claim you're not certain of, marked [check], and where I could confirm it."

   **10. "Start fresh with a handoff."** When a chat has gone long or wandered, the best fix is often a clean start with a good summary, not one more correction.
   - Before: (the twentieth message in a long chat) "No, like I said earlier..."
   - After: "Handoff. Write what we decided, what's done, and what's next. I'll start a fresh session and say 'pick up from the last handoff'."

   **11. "Read the real source."** Point Claude at the document, not George's memory of it. Connectors make this possible (module 08).
   - Before: (pastes half the study notes) "Turn this into an article."
   - After: "Read my Romans 3 study notes in Drive and the transcript in the brain, then draft Thursday's article from them. Quote me only from the transcript."

   **12. "Here's what good looks like."** One to three examples beat a page of description. Say what to copy (the tone, the shape) and what not to (the topic).
   - Before: "Write a donor thank-you."
   - After: "Draft a thank-you note for a new TOI partner using george-donor-thanks. Match the warmth and length of the two notes in `projects/toi/examples/`, but don't reuse their sentences."

   *Check:* George picks the right pattern for three situations the agent describes.

3. **Pick the right tab.**
   - **Chat** (inside a Project): thinking, outlines, first drafts, questions about his own material. Fast, and it reads the brain after **Sync now**.
   - **Code** (local session): anything that saves to a file, the brain or the site; anything that uses his skills or the reviewer; batches. This is where patterns 6, 7 and 8 work best.
   - **Cowork:** longer hands-off jobs he wants to hand over and check later. His personal skills don't load there, so put the steps in the ask.

   *Check:* George says which tab he'd use for his {{PRACTICE_JOB}}.

4. **Learn to steer.**
   - **Stop it early.** In Code, press **Esc** the moment it heads the wrong way. Press **Esc** twice (or type `/rewind`) to go back to an earlier point; that undoes Claude's file edits, not commands it ran.
   - **Correct once, clearly.** Say what was wrong and why, in one or two sentences.
   - **Two strikes, then start fresh.** If two corrections haven't fixed it, the chat is now full of the wrong idea. Ask for a handoff, then `/clear` (Code) or open a new chat (Chat), and ask again with what you learned built into the first message.
   - **One job per session.** Between unrelated jobs, `/clear` in Code or start a new chat. In a long Code session, `/compact` with a focus ("keep the series plan decisions") trims the history.

   *Check:* George uses Esc once and the two-strikes reset once during practice.

5. **Turn a prompt that worked into a skill.** When an ask gives a result George loves and the job will come back, say: "Turn what we just did into a skill called george-<job>. Put in the steps, the checks and the rules, and a description with the phrases I'd naturally say." Claude writes `~/.claude/skills/george-<job>/SKILL.md`. Then copy it into `george-os/skills/` so the brain keeps it, test it in a fresh session with one of those phrases, and for Chat, make its zip (module 10). Every time a skill misses, add one line to it so it doesn't miss that way again. *Check:* one new or improved skill triggers in a fresh session.

6. **Practice on his own asks.** Take {{RECENT_ASKS}}. For each one, run it through george-better-prompt ("make this prompt better: ..."), run the improved version, and compare it with what he got before. *Check:* George says which results improved, in one line each, saved to `FEEDBACK.md`.

## GEORGE does
- Brings three recent asks that disappointed him.
- Practices Esc and the two-strikes reset once.
- Says which patterns he'll use most; those go at the top of his cheat sheet.

## Done when
- [ ] George can name the eight parts of a strong ask.
- [ ] Three of his own asks were rewritten, run and compared.
- [ ] He has used Esc and the two-strikes reset once each.
- [ ] One prompt that worked became a skill, or improved one.
- [ ] His cheat sheet is printed or pinned where he works.

## Writes to
- `george-os/framework/42-PROMPTING-LIKE-A-PRO.md` (his copy, with his favorite patterns first)
- `george-os/FEEDBACK.md` (before and after verdicts)
- `george-os/skills/` (any skill made in step 5)

## Next
- [32 Prompt Library](./32-PROMPT-LIBRARY.md), to add his best new asks; and george-better-prompt any time an ask feels thin.

---

## Cheat sheet (print this)

**The eight parts of a strong ask**
1. **Goal:** what it's for.
2. **Who it's for:** the reader, viewer or listener.
3. **Sources:** what to read first (the brain, a Drive doc, a transcript).
4. **What good looks like:** length, shape, the one thing it must do.
5. **Constraints:** what it must never do, and why.
6. **Examples:** one to three things to match.
7. **The check:** how Claude tests its work before showing me.
8. **Hand back:** exactly what I get at the end.

**Phrases that work**
| Say | When |
|---|---|
| "Plan first, then wait." | Anything bigger than a few minutes |
| "Ask me up to three questions first." | You haven't said everything |
| "Give me three clearly different options and your pick." | Titles, openings, thumbnails, subject lines |
| "Show me what you changed." | Any edit to my writing |
| "Check it against my voice guide." | Anything in my name |
| "Have george-reviewer check it." | Before anything comes to me for approval |
| "Use george-<skill>." | Any job a skill covers |
| "One at a time, and check each." | Batches and lists |
| "Tell me what you're unsure of." | Facts, history, Scripture |
| "Read the real source." | Notes, transcripts, calendars, docs |
| "Here's what good looks like." | Tone or format matters |
| "Handoff, then start fresh." | Long chats, or two failed corrections |
| "Make this prompt better." | Any ask that feels thin |

**Which tab**
- **Chat** in a Project: think, outline, first drafts.
- **Code**, local: anything that saves, uses skills or the reviewer, or runs a batch.
- **Cowork:** long hands-off jobs (put the steps in the ask).

**Steering**
- **Esc** stops it. **Esc Esc** goes back.
- Correct once, clearly, with the reason.
- Two misses: handoff, `/clear` or a new chat, better first message.
- One job per session.

**Model and effort**
- Public work in my name: the most capable model, high effort.
- Everyday: the default. Chores: low.

**Never**
- Nothing is sent, posted, published or paid without my yes.
- No em dashes. No made-up facts. Scripture as text with the reference.
