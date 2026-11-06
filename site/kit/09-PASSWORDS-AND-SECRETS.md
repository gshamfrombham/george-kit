# 09 · Passwords and Secrets
> George's logins live in 1Password, his team shares only what they need, and agents use keys without ever seeing or printing them.

**Run it:** `Run module 09 from my framework.`
**Needs first:** 08
**Time:** about 45 minutes · **GEORGE's part:** create the 1Password account and vaults

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{ONEPASSWORD_PLAN}} | Families (just family) or a team plan (team shares logins) | Ask George; team plan if anyone in {{TEAM_PEOPLE}} shares logins |
| {{VAULTS}} | Vault list | Default: Personal, Author, G's Plan, TOI, Agents |
| {{VAULT_ACCESS}} | Who sees each team vault | Module 04's {{TEAM_PEOPLE}} |

## Why this matters
Keys typed into a chat end up in transcripts and logs, where anyone who reads them can use them. A helper who signs in with George's shared password sees everything. 1Password fixes both: each person gets only the vaults they need, and agents run commands with keys injected at the moment of use. Best of all is no key at all: a connector that signs in with OAuth leaves nothing to leak.

## Steps
1. **Prefer connectors.** Before storing any key, check whether a connector does the job: Gmail, Calendar, Drive, GitHub and Webflow all sign in with OAuth (module 08). *Check:* a list of what still truly needs a key; it should be short.
2. **Create the account.** George creates a 1Password account on {{ONEPASSWORD_PLAN}}, installs the browser extension and phone app, and moves his logins in. *Check:* George signs in to one site through the extension.
3. **Create the vaults.** {{VAULTS}}. Share each team vault only with the people in {{VAULT_ACCESS}}. `Agents` holds only the few keys agents truly need. *Check:* each vault's member list matches the slot.
4. **Connect the CLI to the 1Password app on the laptop.** In a **local** Code session, install the 1Password CLI (`op`). Then George opens the 1Password desktop app > Settings > Developer and turns on **Integrate with 1Password CLI**. From then on `op` unlocks with Touch ID through the app, so no token sits in any file or chat. *Check:* `op vault list` works after a Touch ID prompt.
5. **Use keys without seeing them.** Agents never print a secret. Put `op://Agents/<item>/credential` references in an env file and run the command that needs the key under `op run --env-file=.env -- <command>`. That hands the key to that one command and masks it if it shows up in output. **Never use a bare `op read` in an agent session**, because it prints the secret into the transcript. **Optional, only for unattended local scripts:** a 1Password **service account** that can read only `Agents`. If you use one, George stores its token (`OP_SERVICE_ACCOUNT_TOKEN`) in macOS Keychain, and a small wrapper script reads it from Keychain at run time; it is never printed, typed into chat or saved in a file. *Check:* `op run` works with no token in any file.
6. **Run the dummy test.** Create an item in `Agents` with the value `DUMMY-123`. Run a command that uses it under `op run`. *Check:* the command succeeds and the string `DUMMY-123` appears nowhere in the session transcript. Store real keys only after this passes.
7. **Set up cloud secrets.** Scheduled tasks run in the cloud. Keys they need go in the cloud environment's **network secrets**, so the session never sees them. Don't use plain environment variables there; anyone using that environment can read them. Managed Agents get their credentials as module 21 describes. *Check:* a scheduled test task uses a network secret without it appearing in output.
8. **Write the leak rule.** Add to `decisions/`: "A key seen in any chat is leaked. Change it at the source, update 1Password, and log the change in `WORKLOG.md`." *Check:* the decision file is on `main`.

## GEORGE does
- Creates the 1Password account and installs the apps.
- Creates the vaults and invites the right people.
- Turns on Integrate with 1Password CLI in the 1Password app (and approves Touch ID).
- Creates a service account only if an unattended local script needs one.

## Done when
- [ ] Logins live in 1Password; team vaults are shared correctly.
- [ ] `op` works through the 1Password app with Touch ID; any service account reads only `Agents` and its token lives only in Keychain.
- [ ] The dummy test passed with `op run`.
- [ ] Cloud keys are network secrets.
- [ ] The leak rule is a decision on `main`.

## Writes to
- `george-os/decisions/0002-secrets.md`
- `george-os/inventory/accounts.md` (which accounts exist and where their login lives; **never the logins themselves**)

## Next
- [10 Skills Adoption](./10-SKILLS-ADOPTION.md)
