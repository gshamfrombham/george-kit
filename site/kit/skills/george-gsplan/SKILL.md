---
name: george-gsplan
description: >-
  Use for anything to do with G's Plan, one of George's two main efforts: "G's Plan," "G's Plan
  update," "work on G's Plan," "G's Plan weekly." A template skill. George's own Claude fills in what
  G's Plan is, its audiences, its recurring jobs and its rules from what it already knows and from
  module 25, then runs the recurring jobs.
---

# G's Plan

G's Plan is one of George's two main things. Trevor's team doesn't know its details; George's Claude does. This skill is a frame to fill in once, then use every week.

## Fill in first (in `projects/gs-plan/PLAYBOOK.md`, then copy the answers here)

| Slot | What to write |
|---|---|
| {{GS_PLAN_WHAT_IT_IS}} | One paragraph: what G's Plan is, in George's words |
| {{GS_PLAN_AUDIENCE}} | Who it serves and who reads or uses its output |
| {{GS_PLAN_GOALS}} | What success looks like this year, as numbers if he has them |
| {{GS_PLAN_RECURRING_JOBS}} | The jobs that repeat (weekly, monthly), each with an owner |
| {{GS_PLAN_CHANNELS}} | Where its work shows up (site, email, documents, meetings, social) |
| {{GS_PLAN_APPROVERS}} | Who approves its items in the dashboard |
| {{GS_PLAN_DATA}} | Which numbers belong on the dashboard |
| {{GS_PLAN_RULES}} | Anything that must never happen (privacy, tone, timing) |

Get these from George's existing Claude memory and Projects first, then ask George once, in a batch, for the gaps. Save with george-brain. Don't guess.

## Steps (once the slots are filled)

1. george-session-start; read `projects/gs-plan/PLAYBOOK.md`.
2. Pick the job: one of {{GS_PLAN_RECURRING_JOBS}} or what George asked.
3. Do it with the right skill (george-voice for writing, george-coach for multi-step work, george-dashboard-data for numbers).
4. george-slop-check on anything people will read.
5. george-approval-queue under brand "G's Plan."
6. george-handoff.

## Rules

- Same house rules: drafts only, Approve before anything goes out, no invented facts, no keys in chat, no em dashes.
- If G's Plan touches other people's private information, apply {{GS_PLAN_RULES}} before writing anything.

## Try saying

"Fill in the G's Plan skill from what you know, and ask me what's missing."

## Make it yours

Rename this skill, split it into one skill per recurring job, or add a section for each workstream. It is the most "his" skill in the kit.
