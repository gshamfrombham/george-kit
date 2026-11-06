# 21 · Managed Agents Setup
> Give George his own always-on agents on the Claude API, with a hard budget, his brain repo mounted, and keys he never has to type into a chat.

**Run it:** `Run module 21 from my framework. Set up Managed Agents with my budget, and stop before anything costs money until I say go.`
**Needs first:** 06, 09, 19
**Time:** about 60 minutes · **GEORGE's part:** create the Console account, add credits, create the API key, approve the budget

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{API_MONTHLY_CAP}} | Monthly API ceiling | `decisions/` (module 19) |
| {{PER_RUN_BUDGET}} | Budget per scheduled run | suggested: $0.50 for writing jobs, $0.25 for data snapshots |
| {{MODEL}} | Model for routine jobs | suggested: Claude Sonnet 5.5 (`claude-sonnet-5-5`); use Opus 5.5 only for hard writing |
| {{GITHUB_TOKEN}} | A fine-grained GitHub token scoped to `george-os` only | George creates it; it goes straight into a vault |
| {{AGENT_JOBS}} | The jobs module 19 put on "Managed Agent" | `projects/automation.md` |
| {{TIMEZONE}} | America/Chicago unless George says otherwise | `BRAIN.md` |
| {{ACCOUNT_EMAIL}} | The email for every account George creates | `BRAIN.md` (set in module 00) |

## Why this matters
Managed Agents are Claude agents that Anthropic hosts and runs for George: each run gets a fresh cloud sandbox, his skills, his brain repo, and tools, then stops. They don't use his Pro limits. They are a separate product on the Claude API with its own bill, currently in beta. That bill is small when the jobs are lean: model tokens at API rates, plus $0.08 per hour while a session is actually running, plus $10 per 1,000 web searches. A 10-minute Sonnet writing run is roughly $0.25. A budget on every run and a monthly cap keep it boring.

## Steps
1. **Console account (GEORGE).** Go to platform.claude.com and create an account with {{ACCOUNT_EMAIL}}. This is separate from his Pro subscription; Pro does not pay for API use. *Check:* he can see the Console dashboard.
2. **Credits and guardrails (GEORGE).** In Settings > Billing, buy a small amount of prepaid credit (for example $20). Leave auto-reload **off** for the first month, so the account can never spend more than what's in it. *Check:* the balance shows; auto-reload is off.
3. **API key (GEORGE).** In Settings > API keys, create a key named `george-agents`. Save it straight into 1Password in the `Agents` vault. Never paste it into a chat. *Check:* the key is in 1Password and nowhere else.
4. **Local setup (agent, local Code session on his laptop).** Install the Anthropic Python SDK (`pip install anthropic`). Run every script under `op run` with an env file that holds `ANTHROPIC_API_KEY=op://Agents/george-agents/credential`, so the key reaches the script without being printed. *Check:* a script that lists his agents runs and prints no key.
5. **Vault for credentials.** Create a Managed Agents **vault** and store the GitHub token there (and any other service credentials a job needs). The agent never sees the values; they are swapped in when the session talks to that service. *Check:* the vault lists the credential names, not values.
6. **Upload his skills.** Upload each `george-*` skill the agents need as a custom skill (zip upload to the skills endpoint), then note each `skill_id` in `projects/automation.md`. *Check:* the skills list shows them.
7. **Create one environment** (cloud, limited networking, only the hosts the jobs need: his dashboard API, GitHub, any data source). *Check:* the environment id is saved in `projects/automation.md`.
8. **Smoke test with one throwaway agent** using the example below and a one-line job ("write today's date into a handoff"). Real agents are built in module 22. *Check:* the test session reads the brain repo, pushes one handoff to `main`, posts one test item to the dashboard, stays under its budget, and the Console shows the cost of that one run.
9. **Schedule only after module 22.** When a real agent from module 22 is approved by George, create a **scheduled deployment** with a cron line, the {{TIMEZONE}} time zone, and {{PER_RUN_BUDGET}} as the per-run budget. *Check:* the deployment shows the next run time; pause works.
10. **Know when runs finish.** In the Console's Webhooks page, add the dashboard's webhook URL with a signing secret, for `deployment_run.succeeded` and `deployment_run.failed`. The dashboard records them on the Automations screen. Webhooks are beta and are dropped after three failed attempts, so the daily brief also checks the Console for runs. *Check:* the test run appears on the dashboard's Automations screen.
11. **Write the decision.** Record the cap, per-run budgets, model choice and the kill switch (pause every deployment from the dashboard or the Console) in `decisions/`. *Check:* George reads and approves it.

## Smoke-test example (Python)
**Before writing any code, fetch these pages and use their current field names**, because Managed Agents is in beta and fields change: platform.claude.com/docs/en/managed-agents/quickstart, /github, /vaults, /skills, /budgets and /scheduled-deployments. The example below shows the shape; the `# FROM DOCS` lines must be filled from those pages.

**Hard rule:** never start a session without a budget. Set the budget (from /budgets) on the session or agent before the first `sessions.create`, and set allowed hosts on the environment to exactly GitHub plus the dashboard's hostname.

First create `brief_system_prompt.md` from [templates/AGENT-BRIEF.md](./templates/AGENT-BRIEF.md) with the one-line test job.

```python
# run as: op run --env-file=agents.env -- python first_agent.py
from anthropic import Anthropic
client = Anthropic()  # key comes from the environment, never from this file

agent = client.beta.agents.create(
    name="George weekly brief",
    model="claude-sonnet-5-5",
    system=open("brief_system_prompt.md").read(),   # built from templates/AGENT-BRIEF.md
    tools=[{"type": "agent_toolset_20260401"}],
    # FROM DOCS (/skills): attach the uploaded george-* skills this job needs by skill_id
)
env = client.beta.environments.create(
    name="george-env",
    config={"type": "cloud", "networking": {"type": "limited",
            # FROM DOCS: allowed hosts = github.com and the dashboard hostname only
    }},
)
session = client.beta.sessions.create(
    agent=agent.id, environment_id=env.id, title="Smoke test",
    # FROM DOCS (/github): resources = the george-os repo, token from the vault or from the op-run environment
    # FROM DOCS (/vaults): the vault holding the dashboard agent token
    # FROM DOCS (/budgets): a budget of {{PER_RUN_BUDGET}} or less, set here at session creation; do not run without it
)
with client.beta.sessions.events.stream(session.id) as stream:
    client.beta.sessions.events.send(session.id, events=[{"type": "user.message",
        "content": [{"type": "text", "text": "Run this week's brief."}]}])
    for event in stream:
        if event.type == "agent.message":
            for block in event.content:
                if block.type == "text":
                    print(block.text, end="")
        if event.type == "session.status_idle":
            break
```
*Check before running:* no `# FROM DOCS` line is still a comment, the budget is set, and the script prints no secret.

## GEORGE does
- Creates the Console account, adds a small prepaid balance, keeps auto-reload off at first.
- Creates the API key and the GitHub token and puts both in 1Password.
- Approves the budget decision.

## Done when
- [ ] The smoke-test agent ran once with a budget, posted a test item, pushed a handoff, and cost what the estimate said (scheduling real agents happens in module 22)
- [ ] Keys live only in 1Password and the vault
- [ ] Per-run budgets and the monthly cap are written down and visible on the dashboard
- [ ] George knows how to pause everything

## Writes to
- `projects/automation.md` (agent ids, environment id, skill ids, deployments), `decisions/NNNN-managed-agents.md`, `agents/` (one brief per agent)

## Next
- 22 for the recipes; 29 to track spend against the cap
