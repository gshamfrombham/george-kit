# 05 · Profile
> Who George is, written once so every agent starts out knowing him.

**Run it:** `Run module 05 from my framework.`
**Needs first:** 04
**Time:** about 15 minutes · **GEORGE's part:** read the profile and fix anything wrong

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{GS_PLAN_ONE_LINE}} | G's Plan in one sentence | Module 04 |
| {{TOI_ONE_LINE}} | George's work at TOI in one sentence | Module 04 |
| {{OTHER_ROLES}} | Other roles George wants agents to know about | Module 04 |
| {{AUDIENCES}} | Who reads, watches and gives | Module 04 and his channels |
| {{BELIEFS_PAGE}} | Link to his beliefs page | georgeshamblin.com |
| {{NEWEST_BOOK}} | His newest book | georgeshamblin.com/books |

## Why this matters
Every chat that starts with "who am I talking to?" wastes George's time. The profile answers it before the first message. Keep it short: a page an agent reads in under a minute. Details go in `projects/` and `people/`.

## Steps
1. **Start from the public facts.** Seed `BRAIN.md` (from the [BRAIN template](./templates/BRAIN.md)) with what is public:
   - George Shamblin, Birmingham, Alabama. Pastor, Christian author, Bible teacher, former seminary professor.
   - Author brand: georgeshamblin.com (with Spanish pages at /es), Substack, YouTube @georgeshamblinauthor, a Spotify podcast, Facebook and Instagram.
   - His promise to readers: "I answer hard Bible questions every week. Tuesday videos and Thursday articles, both free."
   - Books: *The Four Faces of Christ*, *The Relay* and *Inerrancy* ({{NEWEST_BOOK}} first).
   - Series: Torchbearers (church history videos), Systematic Theology Shorts, Bible Questions Answered, Wild Game Tame Garden (outdoor devotionals), mission week diaries.
   - Co-founder of The Overseas Initiative (TOI): missions in Cuba and Latin America.
   - Pastor at The Center for Executive Leadership.

   *Check:* every line here matches his site.
2. **Add his two main things from module 04.** A "Main things" section with **G's Plan**: {{GS_PLAN_ONE_LINE}}, and **TOI**: {{TOI_ONE_LINE}}, each linking to its `projects/` file. *Check:* both lines are in George's words, not yours.
3. **Add audiences and roles.** {{AUDIENCES}} and {{OTHER_ROLES}}, one line each. Work roles get one line and a pointer to module 27; their details stay in his work systems. *Check:* no client or work data appears.
4. **Add how George likes to work.** From 04 and from your memory of him: how he likes updates (short or full), when he works, what annoys him. Keep it to five lines. *Check:* George agrees with every line.
5. **Keep it under one page.** If it grows, move detail into `projects/` and leave a link. *Check:* `BRAIN.md` reads in under a minute.

## GEORGE does
- Reads the profile and corrects anything wrong.

## Done when
- [ ] `BRAIN.md` has the public facts, both main things, audiences, roles and work style.
- [ ] George confirmed it.
- [ ] It fits on one page.

## Writes to
- `george-os/BRAIN.md`

## Next
- [06 Brain Repo](./06-BRAIN-REPO.md)
