# 37 · GEO and SEO Strategy
> Get George named and cited when people ask ChatGPT, Google, Claude, Perplexity and the rest a Bible question, not only when they already know his name.

**Run it:** `Run module 37 from my framework. Start with the baseline, then do this week's fixes and plan the next 30 days of Tuesday videos and Thursday articles.`
**Needs first:** 12, 13, 16, 28
**Time:** about 90 minutes to set up, then about 2 hours a week inside the normal rhythm · **GEORGE's part:** verify the site in Google and Bing once, record the videos, approve each package

## Fill in first
| Slot | What it is | Where the agent gets it |
|---|---|---|
| {{RP_ACCESS}} | George's Rank Prompt access: the account, and the brand for georgeshamblin.com | ask George once; store the login in 1Password (module 09), never in a chat |
| {{PROMPT_SET}} | The 50 English and 15 Spanish questions measured each month (the baseline list is below) | `projects/ai-visibility/prompts.md` (this module writes it) |
| {{WEBFLOW_SITE}} | His Webflow site, the posts collection and the post template | Webflow connector (module 28) |
| {{GSC_ACCESS}} | Google Search Console for georgeshamblin.com | George verifies once (Step 2) |
| {{BING_ACCESS}} | Bing Webmaster Tools for the same site | George verifies once (Step 2) |
| {{SPEAKING}} | Whether George takes speaking bookings and interviews, and for which audiences | ask George once in a batch |
| {{MONTHLY_CREDITS}} | Rank Prompt credits he is willing to spend each month on measuring | suggested: 165 (50 prompts on 7 engines plus 15 Spanish prompts on 3 engines) |
| {{BASELINE_DATE}} | Date of the first measurement | 2026-11-06 (below) |

## Why this matters
George already did the hard part. Since September he has been publishing question-titled answers built for AI search. The baseline shows the engines are not using them yet: across 40 teaching questions, he was named once. When people ask his name, the engines know him well and quote his site. When they ask the question his post answers, they quote GotQuestions.org, Wikipedia, Britannica and YouTube instead. That gap is fixable, mostly by changing pages he already has, and the fixes fit inside the Tuesday video and Thursday article he already promised. This module turns the gap into a short list of page changes, a 30-day plan, and a monthly number his agent checks, so George does not have to relearn any of it.

## Steps
1. **Set up the measuring home.** Create `projects/ai-visibility/` in george-os with `BASELINE.md` (the tables in "The baseline" below), `prompts.md` (the 65 questions at the end) and `README.md` (how to re-measure). *Check:* the three files are on `main` and the baseline numbers match "The baseline" below.
2. **Verify the site with Google and Bing (GEORGE).** George adds georgeshamblin.com as a domain property in Google Search Console and in Bing Webmaster Tools, using the DNS record each one gives, then grants his agent's account read access. *Check:* both consoles show the site as verified and the sitemap as submitted.
3. **Run the indexing check.** Inspect the 12 question posts in the "loses" table below in Search Console and Bing. Record each one's status in `BASELINE.md`. *Check:* every one of the 12 has a status written down.
4. **Ship the template fixes first.** With george-site-update, make recommendations 2 and 10 (server-rendered FAQ and video schema, one H1) as Webflow drafts, then put them through the approval queue. *Check:* fetch a post with JavaScript off (for example `curl`) and find `FAQPage` in the HTML; count exactly one `<h1>`.
5. **Fix scripture and alt text.** Recommendation 4, all seven posts. *Check:* the pearl post's HTML contains the text of Matthew 13:45-46 and no in-body image with words on it has empty alt.
6. **Load the 30-day plan into the calendar.** Add the 30-day plan table below to `calendar/` with each week's video, article and refresh. *Check:* the Saturday and Wednesday drafting jobs from module 24 pick up the right topic for week 1.
7. **Run the weekly loop.** Each week: video package Saturday, article package Wednesday, one refresh, all through voice, slop check and approval. *Check:* each shipped page is answer-first, has its question H2s, has scripture as text, and is added to `llms.txt`.
8. **Do the one-time footprint work.** Recommendations 6, 7, 8 and 9, spread over the month. *Check:* the Person schema lists every profile in `sameAs`; the Wikidata item exists; the Inerrancy page has its FAQ.
9. **Re-measure monthly** (see below) and write the result. *Check:* a new `projects/ai-visibility/YYYY-MM.md` exists with the four headline numbers and the scoreboard row is updated.

## The baseline (measured {{BASELINE_DATE}})
Measured with his Rank Prompt access: 50 English questions on 7 engines (ChatGPT, Claude, Google AI Mode, Gemini, Perplexity, Grok, Meta's Muse), United States, plus 15 Spanish questions on 3 engines (ChatGPT, Google AI Mode, Gemini), Mexico. One run, so treat every number as a starting point, not a trend.

| Measure | Number |
|---|---|
| AI visibility score (Rank Prompt's own number) | 7.2% (25 of 346 answers named him) |
| Answers to non-brand questions that named him | **6 of 307 (2.0%)**, the number that matters most |
| Teaching questions where any engine named him | 1 of 40 (Claude listed the Inerrancy book sixth in a list of 11) |
| Answers to "who is George" style questions that name him | 37 of 39 when you read the answers. The tool's own count says 19 of 39, because it misses answers when his name is already in the question |
| His own pages cited on non-brand questions | 1 time in 307 answers (Grok cited the Gospel of John post, sixth source) |
| Share of voice | 2.4%, tied with GotQuestions.org (25 mentions each), behind Crossway (30) and BibleProject (26). Nearly all of his came from questions that used his name |
| Spanish | 3 of 45 answers, all three on "¿Quién es George Shamblin?". 0 of 42 on the Bible questions |

**Engines that mention him (all 50 questions / non-brand only):** Gemini 4 / 0, Google AI Mode 4 / 1, Muse 4 / 2, Grok 4 / 0, Claude 4 / 2, ChatGPT 3 of 46 / 1, Perplexity 2 / 0. Perplexity is his weakest engine.

**Questions he wins (non-brand):**
- "Who is a Reformed pastor in Alabama who writes about the reliability of the Bible?" Muse (named first) and Claude (third).
- "Christian author available for podcast or radio interviews about the Bible and the Gospels" Muse (first).
- "Christian speaker in Birmingham Alabama for a men's retreat or church event" ChatGPT (second).
- "Who are Christian authors and Bible teachers based in Birmingham, Alabama?" Google AI Mode (first).
- "What are the best books on biblical inerrancy for a layperson?" Claude (sixth).

**Questions he loses although he already has a page for them** (no engine named or cited him):
| Question | His existing page | Who gets cited instead |
|---|---|---|
| What does the parable of the pearl of great price mean? / Who is the merchant? | two posts: `/post/what-does-the-parable-of-the-pearl-of-great-price-mean` (2026) and `/post/who-or-what-does-the-merchant-represent-who-or-what-does-the-pearl-represent` (2020) | GotQuestions.org, Wikipedia, Ligonier |
| Why is the Gospel of John so different from Matthew, Mark, and Luke? | `/post/why-is-the-gospel-of-john-so-different-from-matthew-mark-and-luke` | bible.org, Wikipedia, Bible Hub |
| Why are there four Gospels instead of just one? | `/post/have-you-ever-wondered-why-there-are-four-gospels-instead-of-just-one` | GotQuestions.org, BibleProject |
| How does each of the four Gospels portray Jesus differently? | `/books/the-four-faces-of-christ` | Britannica (all 7 engines) |
| How many Old Testament prophecies did Jesus fulfill? | `/post/how-many-old-testament-prophecies-did-jesus-actually-fulfill` | GotQuestions.org (5 of 7) |
| How can old manuscripts help us trust the Bible? / How do we know the New Testament wasn't changed? | `/post/how-can-thousands-of-old-manuscripts-help-us-trust-the-bible` | Logos, C.S. Lewis Institute; Bart Ehrman named in 5 of 7 |
| What does "already but not yet" mean? | `/post/already-not-yet` (2021, about 320 words, a podcast intro) | GotQuestions.org, George Eldon Ladd |
| Who was John Wycliffe and why was his body dug up and burned? | `/systematic-theology-shorts/john-wycliffe-dug-up-and-burned-torchbearers-ep-2` (about 235 words, no transcript) | Wikipedia, World History Encyclopedia, Britannica |
| What did Jesus look like? / Can good deeds get you to heaven? / Would alien life disprove God? | `/post/what-did-jesus-look-like`, `/post/can-good-deeds-get-you-to-god`, `/post/can-god-and-aliens-both-exist` | Bible Gateway, GotQuestions.org, Vatican Observatory |
| Where can I find short videos that explain systematic theology? | the 50 Systematic Theology Shorts | YouTube (17 citations: Ligonier, The Gospel Coalition, BibleProject) |

**Questions with no page yet:** how to support Christians in Cuba and which missions work there (CUBA Ministry, Proclaim Cuba, Open Doors win; 0 of 21), the state of the church in Cuba (USCIRF, Open Doors), beginner apologetics resources (Tactics, The Reason for God, Cold-Case Christianity), small-group studies on the Gospels ("Meeting Jesus" from IVP, 6 of 7), and the best websites, YouTube teachers and podcasts for Bible questions (GotQuestions.org, BibleProject, BibleThinker, Ask Pastor John).

**Most-cited sources across all 50 questions:** YouTube (49 citations), GotQuestions.org (35), Wikipedia (32), georgeshamblin.com (31, almost all on questions using his name), Amazon (22), Goodreads (15), BibleProject (13), Crossway (13), Apple Podcasts (13), Bham Now (12), Bible Gateway (12), Britannica (12), Logos (12). Store pages that sell his books, on Amazon, Goodreads and one ministry bookstore, are cited more often than his own book pages.

**What the engines know without searching:** with web search on, ChatGPT, Perplexity and Gemini describe him accurately from `/about/author`, the home page, the Bham Now profile and his radio interviews. With search off, ChatGPT and Claude say they don't know him, and Gemini invents two book titles he never wrote. The fix for that is a wider, consistent footprint off his own site (recommendation 7).

**Technical state (checked on the live site, not only in the tool):** robots.txt allows every AI and search crawler; both sitemaps are listed and hold 305 pages; `llms.txt` already exists; home, about and book pages carry Person, Organization, Book and WebSite schema; posts carry BlogPosting with dates. The gaps: the FAQ and video schema on posts is added by JavaScript after the page loads, so most AI crawlers never see it; Systematic Theology Shorts pages have no schema and almost no text; every post has two H1 headings and category pages have none; scripture and other images inside recent posts have empty alt text (the newest pearl post shows the two verses only as an image); no x-default hreflang; mobile Largest Contentful Paint on the home page is 5.4 seconds; and the site is not yet confirmed in Google Search Console or Bing Webmaster Tools, so nobody can see whether the question posts are indexed.

## Top 10 recommendations, ranked by impact
1. **Answer-first refresh of the question posts he already has.** These pages exist and get no citations. For each post in the "loses" table in the baseline, use george-site-update to change, in this order: the first 40 to 60 words answer the exact question in plain words; the H1 and SEO title match the question as people ask it; two to four H2s are the follow-up questions (the "who is the merchant" kind); scripture appears as text with its reference; two or three named sources back any number or historical claim (the manuscripts post needs its manuscript counts sourced); one paragraph of George's own story stays, in his voice (module 12). Start with the pearl, John, four Gospels, prophecies and manuscripts posts. For the two pearl posts, keep the 2026 post as the main answer, move anything unique from the 2020 post into it, and 301-redirect the 2020 URL to it.
2. **Make the FAQ and video schema readable without JavaScript.** In the Webflow post template, move the FAQPage that the load script builds into the template's server-rendered schema box, fed from CMS fields (for example three question and answer field pairs per post), and do the same for VideoObject on posts with a video. Keep the visible FAQ text identical to the schema. Then remove the load script's FAQ part so there is one copy, not two.
3. **Verify the site with Google and Bing, then check indexing.** George verifies georgeshamblin.com in Google Search Console and Bing Webmaster Tools (domain property through the DNS record). Submit `/sitemap.xml` to both. Inspect the 12 question posts in the "loses" table below one by one; any that are "discovered, not indexed" go to the top of recommendation 1. Bing matters twice: ChatGPT search draws partly on Bing, and Microsoft Copilot answers from it.
4. **Scripture as text, and real alt text.** On `/post/what-does-the-parable-of-the-pearl-of-great-price-mean`, replace the verse image after "It's two verses long:" with Matthew 13:45-46 as text and its reference. Fill alt text on the in-body images of the Son of God, pearl, prophecies, What did Jesus look like, good deeds, manuscripts and take up your cross posts (decorative images may keep empty alt; anything with words on it may not). george-weekly-article already carries the "scripture as text, with reference" rule; this cleans up what shipped before it.
5. **Turn the Shorts and YouTube into citable text.** YouTube is the most-cited source in the whole report. For each Systematic Theology Short and Torchbearers episode, add a transcript or a 300 to 600 word written answer under the video, a question-shaped title on the page and on YouTube, server-rendered VideoObject schema, and a link from the YouTube description back to the page. Build one hub page, "Forerunners of the Reformation", that links Wycliffe, Hus and Luther in order. Start with the Wycliffe episode and "Two Camps of Apologetics".
6. **Own the book questions on his own book pages.** On `/books/the-four-faces-of-christ`, add a visible comparison block (Matthew: King; Mark: Servant; Luke: friend of the overlooked; John: God) and a "Using this book in a small group" section, and link the four-Gospels and John posts. On `/books/inerrancy`, add a short FAQ (what inerrancy means, why it matters, where to get the free PDF) like the other two book pages have, and put the free PDF link near the top. Then ask each store page that sells his books to link to the matching page on georgeshamblin.com.
7. **Widen his footprint beyond his own site.** Add every official profile to the `sameAs` list in his Person schema (YouTube, Substack, Spotify and Apple Podcasts, Amazon author page, Goodreads, LinkedIn, The Overseas Initiative, The Center for Executive Leadership's staff page). Create a Wikidata item for him and his three books with the same facts. Complete his Amazon and Goodreads author profiles with the same bio and a link home. Use one bio sentence everywhere. This is what fixes the engines that answer from memory and the one that invents books.
8. **A speaking and media page, because local is his one winning category.** If {{SPEAKING}} says yes, publish `/speaking`: topics he teaches, audiences (men's groups, churches, retreats), Birmingham and travel, and a list of past radio and podcast interviews linking the interview posts already on the site. Link it from the home page and `/about/author`. If he takes bookings, claim a profile on the GigSalad Birmingham Christian speakers directory, which engines cited seven times on the speaker question. If he does not take bookings, skip this one.
9. **A Cuba cornerstone page.** Engines answered every Cuba question without him (0 of 21) although he has years of firsthand Cuba writing. Write one long answer page, "How can I support the church in Cuba?", from his trips and The Overseas Initiative's work: what the churches need, what is legal for Americans to send, which ways to give, and what he has seen. Link the Christianity in Cuba category, the Cuba week posts and The Overseas Initiative. Its Spanish version matters as much as the English one.
10. **Fix the template headings and turn the category page into a Q&A index.** One H1 per page: remove the repeated title H1 from the post template, keep one on `/about/author`, and add one to every category page. Rewrite `/blog-categories/bible-questions-answered` into "Bible Questions Answered", a plain list of every question George has answered, each linked, with a two-line intro. GotQuestions.org won all 7 engines on "What are the best websites that answer Bible questions in plain English?"; this page is how George enters that list.

## The 30-day content plan
Tied to his public promise of Tuesday videos and Thursday articles (module 24). Each week pairs one video and one article on the same losing question, so the video page and the article link to each other. Each week also gets one refresh from recommendation 1, done by the agent with no recording time from George. Weglot builds the `/es` version automatically; the agent checks the Spanish title and meta description before approval.

| Week | Tuesday video (george-video-package) | Thursday article (george-weekly-article) | Refresh that week (george-site-update) | Question it targets, and who wins it now |
|---|---|---|---|---|
| 1 | "How does each Gospel show Jesus differently?" (Four Faces of Christ, one face per minute) | Rewrite of the four Gospels post as "Why are there four Gospels instead of just one?" | Pearl posts merged, verse as text | Four Gospels questions (Britannica, GotQuestions.org, BibleProject) |
| 2 | Systematic Theology Short: "What does 'already but not yet' mean?" | New full answer at `/post/already-not-yet`, retitled to the question | Gospel of John post | Already but not yet (GotQuestions.org) |
| 3 | "How do we know the New Testament wasn't changed?" | Same question as an article, linking the manuscripts post and the free Inerrancy PDF | Manuscripts post (sources added) | Bible reliability (Logos, Bart Ehrman named in 5 of 7) |
| 4 | Torchbearers recap: "Who were the forerunners of the Reformation?" | "How can I support the church in Cuba?" (recommendation 9) | Prophecies post | Reformation forerunners (Wikipedia, Britannica); Cuba (CUBA Ministry, Open Doors) |
| Days 29 and 30 | Pick the weakest of weeks 1 to 4 by the month-end check | Next in line: "Can you be a Christian and not believe the Bible is without error?" | Wycliffe page transcript | Inerrancy questions (Catholic Answers, The Gospel Coalition) |

Every package goes through george-voice and the slop check (modules 12 and 13) before it reaches the dashboard queue (module 16). After approval, george-repurpose makes the Substack version, the YouTube description with a link back to the page, podcast notes and social captions, each linking to the one canonical page on georgeshamblin.com, so every channel points engines at the same answer.

## Technical fixes
| Fix | Where | How | Skill |
|---|---|---|---|
| Person schema | home and `/about/author` | already present; add the full `sameAs` list and `knowsAbout` (Bible reliability, the Gospels, systematic theology, church history, missions in Cuba) | george-site-update |
| Book schema | the three book pages | already present; add FAQPage to `/books/inerrancy`, keep ISBNs and publisher consistent with Amazon | george-site-update |
| Article schema | post template | BlogPosting is already server-rendered with dates; keep author = George, add `about` (the question) | george-site-update |
| FAQ schema | post template | move from the load script into the server-rendered schema box (recommendation 2) | george-site-update |
| Video schema | posts with video, every Short | server-rendered VideoObject with name, description, upload date, thumbnail and the YouTube URL | george-site-update |
| llms.txt | `/llms.txt` | already exists; add each refreshed or new answer page the week it ships, and the speaking and Cuba pages | george-site-update |
| Sitemap | `/sitemap.xml` | already complete (305 pages); submit it in Search Console and Bing Webmaster Tools; 301 the retired pearl URL | george-site-update |
| Spanish `/es` | site-wide (Weglot) | en and es hreflang pairs already work; add `x-default` pointing to the English page; check Spanish titles and meta descriptions on new posts (several run over 160 characters) | george-site-update |
| Scripture as text | every post | never put a verse only in an image; text plus reference | george-weekly-article |
| Alt text | every in-body image | describe what is in it; words in an image go in the alt text | george-weekly-article, george-site-update |
| One H1 | post template, about page, category template | recommendation 10 | george-site-update |
| og:url, long meta descriptions | home, several posts and `/es` pages | add og:url; keep descriptions 70 to 160 characters | george-site-update |
| Mobile speed | home page | Largest Contentful Paint 5.4 seconds; compress and size the hero image, lazy-load below-the-fold video embeds | george-site-update |

## How to re-measure each month
- **When:** the first Monday of each month, run by george-ai-visibility as a scheduled task (module 20).
- **What:** the same 50 English questions on the same 7 engines and the same 15 Spanish questions on the same 3 engines, in the same markets, through {{RP_ACCESS}}. About {{MONTHLY_CREDITS}} credits a month. Never edit the question list between runs; add new questions as a separate group so they don't count as movement.
- **The four numbers to record:** (1) non-brand answers naming him, out of about 307 (baseline 6); (2) citations of his own pages on non-brand questions (baseline 1); (3) Spanish non-brand answers naming him (baseline 0 of 42); (4) brand questions answered correctly, read from the answer text, not the tool's flag (baseline 37 of 39). Also record which questions flipped from not named to named, and which new names appeared.
- **Read change honestly:** compare only questions both runs asked. One run's move is not a trend; judge after three or four monthly runs. A page refreshed this week needs at least a week, better four, before its question is judged.
- **Add Search Console:** for each refreshed or new page, record impressions and clicks for its question in the month. Pages that show impressions but no AI citations get another pass on their opening answer.
- **Write it down:** `projects/ai-visibility/YYYY-MM.md`, a line in `WORKLOG.md`, and the four numbers on the scoreboard (module 29) and the dashboard's Data screen (module 17).
- **First targets:** within three monthly runs, his own pages cited on at least 10 non-brand answers, and named in at least 15 of the 307 non-brand answers. Raise the bar after that.

## Which skill runs each step
| Step | Skill |
|---|---|
| Monthly measuring, reading results, scoreboard row | george-ai-visibility |
| Thursday answer articles (answer-first, scripture as text) | george-weekly-article |
| Tuesday videos and Shorts packages (question titles, description link back) | george-video-package |
| Page refreshes, template and schema fixes, llms.txt, redirects | george-site-update |
| Substack, YouTube description, podcast notes and captions pointing to the one page | george-repurpose |
| Voice and machine-writing check before anything reaches George | george-voice, george-slop-check |
| Approval before publishing | george-approval-queue |

## The baseline question set
Store this list in `projects/ai-visibility/prompts.md`, grouped as below, and keep it fixed.
- **Bible reliability:** How can old manuscripts help us trust that the Bible we have today is accurate? · Is the Bible inerrant? What does biblical inerrancy actually mean? · What are the best books on biblical inerrancy for a layperson? · How do we know the New Testament wasn't changed over time? · Can you be a Christian and not believe the Bible is without error? · Do you really have to believe the whole Bible is true, or can Christians pick and choose?
- **Gospels:** Why is the Gospel of John so different from Matthew, Mark, and Luke? · Why are there four Gospels instead of just one? · How does each of the four Gospels portray Jesus differently? · What are good books that explain the differences between the four Gospels? · What is a good Bible study on the four Gospels for a small group? · How many Old Testament prophecies did Jesus fulfill? · What did Jesus look like according to the Bible?
- **Bible questions:** What does the parable of the pearl of great price mean? · Who is the merchant in the parable of the pearl in Matthew 13? · Can good deeds get you to heaven according to the Bible? · Would finding alien life disprove God or the Bible? · Why does God get angry in the Bible? · How can someone become a Christian and know God personally?
- **Systematic theology and church history:** What does 'already but not yet' mean in Christian theology? · What is systematic theology in simple terms? · Where can I find short videos that explain systematic theology? · Who was John Wycliffe and why was his body dug up and burned? · Who were the forerunners of the Protestant Reformation?
- **Resources and apologetics:** What are the best websites that answer Bible questions in plain English? · Who are good Bible teachers on YouTube that explain hard questions simply? · What are the best podcasts that answer Bible questions? · What are good beginner apologetics resources for answering questions about Christianity? · What are the best Christian apologetics books for teenagers and college students? · What are the best homeschool Bible curriculums?
- **Books:** What is a good Christian book about passing faith to the next generation? · What are good books about the heroes of faith in the Bible from Adam to Paul? · Recommend recent Christian nonfiction books on Jesus and the Gospels by Reformed or Presbyterian authors.
- **Local author and speaker:** Who are Christian authors and Bible teachers based in Birmingham, Alabama? · Christian speaker in Birmingham Alabama for a men's retreat or church event · Who is a Reformed pastor in Alabama who writes about the reliability of the Bible? · Christian author available for podcast or radio interviews about the Bible and the Gospels
- **Missions, Cuba and Latin America:** What is the state of Christianity and the church in Cuba today? · How can I support Christian missions and pastors in Cuba? · What Christian mission organizations work in Cuba and Latin America?
- **Culture and faith:** Is revival happening in America right now? Is there a third great awakening? · What happened at the Asbury revival and was it real? · What does the Bible say about borders and immigration? · Are hypocrites in church a good reason to stop going?
- **Brand:** Who is George Shamblin? · What books has George Shamblin written? · What is The Four Faces of Christ by George Shamblin about? · Is The Relay by George Shamblin a good book? · What does George Shamblin teach about biblical inerrancy? · What is The Overseas Initiative?
- **Spanish (Mexico):** ¿Cómo nos ayudan los manuscritos antiguos a confiar en que la Biblia es exacta? · ¿Qué significa la inerrancia bíblica? · ¿Cuáles son buenos libros sobre la inerrancia de la Biblia en español? · ¿Por qué el Evangelio de Juan es tan diferente de Mateo, Marcos y Lucas? · ¿Por qué hay cuatro evangelios y no solo uno? · ¿Cuántas profecías del Antiguo Testamento cumplió Jesús? · ¿Qué significa la parábola de la perla de gran precio? · ¿Pueden las buenas obras llevarnos al cielo según la Biblia? · ¿Qué es la teología sistemática explicada de forma sencilla? · ¿Dónde encuentro videos cortos de teología sistemática en español? · ¿Qué sitios web responden preguntas bíblicas en español de forma clara? · ¿Cómo está la iglesia cristiana en Cuba hoy? · ¿Cómo puedo apoyar a pastores y misiones cristianas en Cuba? · ¿Cómo puede alguien hacerse cristiano y conocer a Dios? · ¿Quién es George Shamblin?

## GEORGE does
- Verifies georgeshamblin.com in Google Search Console and Bing Webmaster Tools (about 15 minutes, once).
- Answers once: does he take speaking bookings and interviews, and for whom.
- Records the Tuesday videos and approves each week's packages in the dashboard.
- Reads the monthly four numbers and says which questions matter most to him next.

## Done when
- [ ] `projects/ai-visibility/` holds the baseline, the fixed question list and the re-measure steps
- [ ] The site is verified in Google and Bing, the sitemap is submitted, and the 12 question posts have an indexing status recorded
- [ ] Post FAQ and video schema appear in the HTML with JavaScript off, and every page has one H1
- [ ] The pearl post shows Matthew 13:45-46 as text, the old pearl post redirects to it, and recent posts have real alt text
- [ ] Four weeks of paired Tuesday videos and Thursday articles shipped from the plan, each answer-first
- [ ] Recommendations 6 to 10 are done or consciously skipped with a reason in `decisions/`
- [ ] The first monthly re-measure is written up and on the scoreboard

## Writes to
- `projects/ai-visibility/BASELINE.md`, `projects/ai-visibility/prompts.md`, `projects/ai-visibility/README.md`, `projects/ai-visibility/YYYY-MM.md`
- `calendar/` (the 30-day plan), `decisions/NNNN-geo-seo-plan.md`
- `CONTROL.md` scoreboard row, `WORKLOG.md`, a handoff

## Next
- 29 to put the four numbers on the weekly scoreboard
- 31 after the first monthly run, to adjust the plan from what moved
