---
name: george-better-prompt
description: "Use when George types a rough ask and wants it sharpened, or says \"make this prompt better,\" \"improve this ask,\" \"how should I ask for this,\" \"help me prompt this,\" or \"rewrite my prompt.\" Rewrites the ask into a strong prompt using module 42's eight parts, asks at most three questions if something critical is missing, shows the improved prompt, and offers to run it."
---

# Better prompt

George says what he wants in a sentence. This turns it into the ask a capable assistant would need on day one, so the first result is close to right.

## Inputs

- George's rough ask, as he typed it.
- The brain: `BRAIN.md`, `NOW.md`, the project file the ask touches (`projects/<job>.md`), and `voice/VOICE.md` if the result will be in his name.
- The skill catalog (module 11), to name the skill that fits.

## Steps

1. **Read the ask and the brain.** Fill every gap you can from the brain first: the audience, the series, the deadline, the voice, the sources. Never ask what the brain already answers.
2. **Check the eight parts** from module 42: goal, who it's for, sources, what good looks like, constraints, examples, the check, what to hand back. Mark each as found, filled from the brain, or missing.
3. **Ask only if it's critical.** If a missing part would change the result (the audience, the passage, which trip), ask up to three questions in one message, then wait. Fill anything minor with a sensible default and say so.
4. **Write the improved prompt.** Plain words, short paragraphs, in George's first person ("I want..."). Include:
   - the george-* skill that fits, by name (or "no skill yet");
   - the sources to read, by path or document name;
   - the reason behind each important constraint;
   - the patterns that fit: "plan first, then wait" for big jobs, "two or three options" for judgment calls, "show me what you changed" for edits, "one at a time and check each" for batches, "tell me what you're unsure of" for facts and history;
   - the check: george-slop-check for anything for publication, george-reviewer before anything reaches George;
   - exactly what to hand back.
5. **Show it.** First the improved prompt in a quote block he can copy. Then two or three lines on what you added and why. Then the tab to run it in (Chat in a Project, Code local, or Cowork).
6. **Offer to run it.** "Run it now?" Wait for his yes. If he edits the prompt, run his version.
7. **Offer to keep it.** If this is a job that comes back, offer to save the prompt to his copy of module 32, or to turn it into a skill (module 42, step 5).

## Rules

- Never pad. A good prompt is as long as the job needs and no longer.
- Never invent facts to fill a gap. Ask, or leave a clear `{{blank}}` for George.
- The hard rules ride along in every prompt that leads to something public: nothing sent, posted or published without George's yes; no em dashes; Scripture as text with the reference; anything unsure marked [check].
- No em dashes in the prompt itself.

## Output

The improved prompt (quote block), what changed (two or three lines), the tab to use, and "Run it now?"

## Try saying

"Make this prompt better: write something for TOI about the Cuba trip."

## Make it yours

When an improved prompt works especially well, add it to `george-os/framework/32-PROMPT-LIBRARY.md`. When George keeps adding the same detail by hand, add it to step 4 so this skill adds it for him.
