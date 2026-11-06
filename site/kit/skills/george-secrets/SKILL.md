---
name: george-secrets
description: >-
  Use whenever a task needs a password, API key or token, or when anyone says "here's my key," "use
  this password," "store this login," "connect with an API key," or pastes something that looks like a
  secret. Keeps keys out of chats by using connectors, 1Password and cloud network secrets, and treats
  any key typed in chat as leaked.
---

# Secrets

The simplest rule in the kit: secrets never go in a chat.

## Order of preference

1. **A connector with sign-in (OAuth).** Gmail, Google Calendar, Google Drive, GitHub, Webflow: George signs in, no key exists to leak.
2. **On his laptop: 1Password.** The key lives in the `Agents` vault. Put an `op://Agents/<item>/<field>` reference in an env file and run the command that needs it under `op run --env-file=.env -- <command>`. The key goes to that command only.
3. **In cloud scheduled tasks: network secrets.** Set the key as a network secret on the cloud environment, so the session never sees it. Plain environment variables there can be read by anyone using that environment, so don't use them for keys.
4. **For Managed Agents:** the method in module 21, never inside the agent's prompt.

## Never

- Never use a bare `op read` in an agent session; it prints the secret into the transcript.
- Never echo, print, log or write a key to a file in the repo.
- Never put keys in SKILL.md files, briefs, the brain or the dashboard.
- Never ask George to paste a key.

## Test before trusting (once per method)

Create a dummy item with the value `DUMMY-123`. Run a command that uses it through the method above. Confirm the command worked and that `DUMMY-123` appears nowhere in the session transcript. Only then store real keys.

## If a key lands in chat

1. Stop. Tell George plainly.
2. Treat it as leaked: he (or you, if you have the right access) rotates it at the service.
3. Store the new key in 1Password.
4. Log it in WORKLOG.md: date, service, "rotated after exposure." No key values.

## Try saying

"Connect the dashboard token safely."

## Make it yours

Keep a list of which keys exist and where (names only, never values) in `decisions/secrets-map.md`.
