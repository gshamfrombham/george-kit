<!-- agents/<name>.md: the brief for any automated agent (a scheduled task or a Managed Agent). One job per agent. The agent reads this brief, the brain and its project file every run. Module 22 and george-managed-agent-brief use this. -->
# Agent brief: {{AGENT_NAME}}

**Runs as:** {{SCHEDULED_TASK_OR_MANAGED_AGENT}} · **Trigger:** {{SCHEDULE_OR_EVENT}} (America/Chicago) · **Brand:** {{BRAND}}
**Autonomy level:** {{LEVEL}} (module 23) · **Monthly cap:** {{CAP}} · **Owner:** George

## The one job
{{ONE_JOB}}

## Read first, every run
1. BRAIN.md, NOW.md, the newest 3 handoffs
2. {{PROJECT_FILE}}
3. {{OTHER_INPUTS}}

## Skills it uses
- {{SKILL}}

## Steps
1. {{STEP_1}} (check: {{CHECK_1}})
2. Run george-slop-check on anything written.
3. Post the result to the dashboard as a new version with george-approval-queue. Never publish or send.
4. End with the handoff ritual: WORKLOG line, handoff file, NOW update, push to main.

## Never
- Send, post, publish or pay without an Approve on that exact version.
- Print, ask for or store a key.
- Touch work systems.

## Credentials
{{CONNECTOR_OR_SECRET_NAME}} (from module 09; never the value)

## Done when
- {{DONE}}

## Failure
If anything fails twice, stop, write the handoff with the error, and flag it on the dashboard as "needs George".
