---
name: george-managed-agent-brief
description: >-
  Use when George wants a recurring job to run without him: "automate this," "make this an agent,"
  "can this run by itself," "set up a managed agent," "write an agent brief." Turns the job into a
  clear agent brief from templates/AGENT-BRIEF.md and decides whether it belongs in a scheduled task
  or a Claude Managed Agent.
---

# Managed agent brief

Before anything runs on its own, it gets a brief a stranger could follow.

## Steps

1. **Is it ready to automate?** It must have been done by hand at least twice with a good result, and have a clear start, inputs and output. If not, run it by hand with the right skill first.
2. **Pick the engine** (module 19): a **scheduled task** on his Claude plan for regular jobs that live in his brain repo; a **Managed Agent** on the Claude API only when it has to run as a service, on a trigger from another system, or longer than his plan comfortably allows. Note the cost for a Managed Agent (module 21).
3. **Write the brief** from `templates/AGENT-BRIEF.md`, saved at `agents/<job>.md`:
   - Goal in one sentence, and when it runs (time zone America/Chicago).
   - Start: george-session-start. End: george-handoff.
   - Inputs and where they live; the skills it uses.
   - Steps with a check for each.
   - Output: always a dashboard version or a file, never a publish or send.
   - Limits: maximum run time, maximum cost per run and per month, what to do on failure (stop and report).
   - Secrets it needs and how it gets them (george-secrets); none pasted.
   - Autonomy level from module 23.
4. **Dry run** once by hand, following the brief exactly. Fix the brief where it was unclear.
5. **Set it up** following module 20 (scheduled task) or modules 21 and 22 (Managed Agent).
6. **Watch the first three runs** in the dashboard. Record the cost and result of each in the brief.

## Rules

- No agent publishes, sends, pays, deletes or signs up on its own. Those wait for a person.
- Every agent has a spend cap and a stop rule.
- No em dashes in briefs.

## Try saying

"Make the Sunday weekly brief run by itself."

## Make it yours

Keep finished briefs in `agents/`. Each one George trusts can move up one level on the autonomy ladder (module 23).

Related: [21 Managed Agents setup](../../21-MANAGED-AGENTS-SETUP.md), [22 Managed Agents recipes](../../22-MANAGED-AGENTS-RECIPES.md).
