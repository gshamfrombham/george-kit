# 01 · How This Framework Works
> George learns one way to drive his agent through any module, and the agent learns one way to run them.

**Run it:** `Run module 01 from my framework.`
**Needs first:** 00
**Time:** about 5 minutes · **GEORGE's part:** learn the five prompts below

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{FRAMEWORK_VERSION}} | The version of this framework George is running | `CHANGELOG.md` next to this framework, top entry |

## Why this matters
George is an advanced user and doesn't need hand-holding. What he needs is a fixed shape to hold his agent to, so that every job ends the same way: proven, written down and handed off. When every module looks the same, he can tell at a glance whether his agent skipped something. And when he and Trevor change the framework, they change one module without breaking the rest.

## Steps
1. **Learn the module shape.** Every module has the same sections in the same order:
   - **Run it:** the prompt that starts it.
   - **Needs first:** modules that must be done before it.
   - **Time** and **GEORGE's part:** how long it takes, and what only George can do.
   - **Fill in first:** the `{{SLOTS}}` to fill before any step runs, and where each answer comes from.
   - **Why this matters:** the problem it solves.
   - **Steps:** numbered, and each one has a *Check* that proves it worked.
   - **GEORGE does:** the human-only parts, such as signing up, approving and choosing people.
   - **Done when:** checkboxes. The module isn't done until every box is ticked.
   - **Writes to:** the files in the brain repo it creates or updates.
   - **Next:** where to go after.

   *Check:* name the sections in order without looking.
2. **Learn how slots work.** A slot such as `{{GS_PLAN_WHAT_IT_IS}}` is a blank only George's world can fill. Fill slots in this order: (a) the brain repo, if it exists; (b) what you already know about George from his Claude memory and Projects; (c) ask George. **Ask in one batch per module, never one question at a time.** Write every filled slot into the brain repo (module 06) so it is never asked twice. *Check:* you can show where a filled slot was saved.
3. **Learn the five prompts George uses.**

   | George says | You do |
   |---|---|
   | `Run module NN.` | Fill the slots, run the steps with checks, tick Done when, write the handoff. |
   | `Show me the slots for NN.` | List each slot, your proposed answer, and its source. Change nothing yet. |
   | `Re-run NN with these changes: ...` | Apply his changes to the steps, run again, and note the change in `WORKLOG.md`. |
   | `Where are we?` | Read `NOW.md` and the newest handoffs; answer in five lines or fewer. |
   | `Make NN mine.` | Copy the module into `george-os/framework/NN-*.md`, apply his edits, and use his copy from then on. |

   *Check:* George runs `Show me the slots for 05` and gets a clean table.
4. **Prove every step.** A step is done only when its *Check* passes, and you say what the check showed in one line. "Should work" doesn't count. *Check:* your report after each module lists one line per step.
5. **Keep his copy as the one that counts.** This framework is published by Trevor and will get updates. George's copy in `george-os/framework/` is his, and it wins over the published one. New versions arrive as proposals (module 31). *Check:* `george-os/framework/` exists after module 06.
6. **Expect to iterate.** George and Trevor will improve this framework several times. Anything that felt wrong, slow or unclear goes in `FEEDBACK.md` the moment it happens (template: [FEEDBACK](./templates/FEEDBACK.md)). Module [31](./31-ITERATION-LOOP.md) turns that feedback into the next version. *Check:* `FEEDBACK.md` exists in the brain repo.

## GEORGE does
- Tries the five prompts once.
- Adds a line to `FEEDBACK.md` any time a module annoys him.

## Done when
- [ ] George has used `Show me the slots for NN` and `Where are we?` at least once.
- [ ] The agent reports module results as one proven line per step.

## Writes to
- `george-os/FEEDBACK.md` (created in 06 if missing)
- `george-os/framework/` (George's own copies of modules)

## Next
- [02 Ground Rules](./02-GROUND-RULES.md)
