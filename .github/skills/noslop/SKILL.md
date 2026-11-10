---
name: noslop
description: >-
  Makes or fixes HTML pages with GitHub Copilot (updates, briefs, memos, dashboards, guides, pitches,
  tools) so someone with zero context gets them in 5 seconds: always HTML, the form picked
  from the reader's job, visuals instead of text, a header that says what it is, plain
  sentences, every detail kept, and GitHub-inspired styling. Use whenever you make an artifact or
  page someone else will read, when asked to fix, clean up or deslop one, or
  for the web version (React site on GitHub and Vercel behind a passcode).
---

# No slop.

GitHub Copilot: use this skill to make an HTML page, fix one, or make the web version (section 8). It works in Copilot CLI and VS Code agent mode.

Use these rules instead of generic design defaults. Follow the user's explicit requirements and the host's tool permissions.

**Build a real HTML file in the workspace**, with a descriptive filename such as `monthly-report.html`. Include a doctype, `lang`, UTF-8 charset, viewport metadata, a title, and inline CSS and JavaScript for a standalone page. Do not return only a code fence or a long chat reply. Open the saved file in a browser or VS Code preview when available; Copilot does not provide an artifact canvas. End with the file path and a short summary.

## 1. Know the reader and the job

Before you build, you need three answers:

1. Who reads it, and what do they already know? Assume nothing.
2. What should they do after: decide, catch up, keep checking, learn, say yes, or use it?
3. Will they read it once, or come back to it?

If the request doesn't answer them, ask with the host's question tool when available, or in chat otherwise. Ask nothing else. Then build.

If it all fits in a 5-line message, say so, and write the message instead.

## 2. Pick the form from the job

The job decides the form, and the form decides the layout. A report, a decision page and a guide must not share one skeleton of tiles, a box and tabs. Same GitHub-inspired style, different layouts.

| The reader needs to… | Build | It looks like |
|---|---|---|
| Decide (memo, brief, proposal to a boss) | A decision page | The ask and the deadline on top. Each option as a card, side by side, the one you recommend marked. Costs as bars. Risks as a short list. |
| Catch up (weekly or monthly update) | A report | The 3 or 4 numbers that matter as tiles, each with its change since last time in green or red. One chart. The decisions you need as cards. Then what happened. |
| Keep checking (tracker, dashboard) | A dashboard | Number tiles on top. Each section in its own card. Status as colored pills. One chart per question. |
| Learn or follow steps (guide, process, onboarding) | A step-by-step guide | All the steps as a visual path on top. One step per screen, with Back and Next. Each step draws what the reader will see (the screen, the button) and gives every rule, amount and deadline that applies. |
| Say yes (pitch, proposal, plan for a group) | Slides | One idea per slide. Each slide is one big visual (a number, a chart, a before and after, a diagram) and one sentence. Arrow keys and buttons. The last slide is the ask. |
| Use it (calculator, planner, checklist) | A tool | Fits one screen. Inputs on the left, the answer big on the right. Works on sample data from the first second. |
| Keep it (cheat sheet, reference) | A one-page sheet | Cards grouped by topic, each with an icon and a header. Each item is a bold keyword and one short line. Warnings in red. Fits one screen. |

When a job mixes two, lead with the main one.

## 3. Design rules

1. **Show it, don't write it. This is rule number one.** Visuals carry the message. Words only label them. Every visual carries data the reader can read: numbers, units, labels on the axes or the bars. No decoration posing as a visual: a mock app window, bars with no numbers, icons in place of data, a button that does nothing. Every section starts with a visual: a big number, a bar or line chart, a timeline, a path of steps, cards side by side, a drawn screen, an icon. If a section is only sentences, turn it into a visual. Test: hide every paragraph. The page should still make sense.
2. **The top says what you're looking at.** The first thing on the page is a short header line, 15 words at most: what this is, who it's from, who it's for, the date, and what you need from them in 3 words. Name the company and the people, so a forwarded page still makes sense. Example: `Monthly update · October 2026 · From Sam to Dana · 3 decisions before Monday`. Under it, a title that says the point, true for all the data. Then the ask, big enough to see: what you need, from whom, by when, and how they answer, in plain words ("Reply to Marco by Wed 5 Nov"). Write it once: never repeat it in a box, a banner and a button. No made-up mechanics like copy-and-paste buttons when "reply to Marco" will do. Never a paragraph under the title.
3. **Normal sentences.** Write every title, heading and label the way you'd say it to a colleague: "4 candidates have no interview date yet", not "Waiting with no date". No clever, punchy or poetic phrases. No subtitle under each heading.
4. **Simple is not empty.** Use simple words, but keep every detail the reader needs to act: amounts, limits, dates, names, who approves, exceptions, examples, links. A guide lets someone do the whole thing without asking anyone. A policy or a process shows its owner, its start date and who to ask. Every number that changed says what it's compared to, in a short tag: "+$1,043 vs September", never "+$1,043". Detail the reader needs, but not at first glance, goes one click away (a row that opens, or a tab on a dashboard): kept, but never on the first screen.
5. **No walls of text, no subtext.** 2 lines per paragraph at most. 10 words per table cell at most. More than 6 rows of sentences? Split them into cards by topic. Bold the word that matters in each line. Each thing gets one label, never a label plus a note: no caption under a number, no helper line under a card title or a heading. If it needs the note to make sense, change the label. Small grey text is still text: legends, roles, owner and date lines under items. Keep only what the reader acts on.
6. **Use a GitHub-inspired look.** Use the style kit below: neutral surfaces, system sans-serif typography, subtle borders, compact cards, and blue accents. Blue marks the main action and the one thing to look at. Green, red and amber only mean good, bad and watch. This is an inspired theme, not an official GitHub component library.
7. **One place to start.** The biggest thing on the screen is the most important thing. The eye knows where to go first, second, third. Never one long scroll. A report, a decision page or a proposal fits about 2 screens and reads top to bottom, with no tabs: if it doesn't fit, cut more. Tabs belong only on a dashboard or a reference page, for reference detail. **Hard limits on every page:** at most 4 sections under the first screen, at most 5 items in a card or a list, at most 1 table. More than that? Keep what the reader acts on this week, and cut the rest. A guide uses steps; a pitch uses slides.
8. **The first screen stands alone.** Someone who reads only what shows before scrolling knows what this is, the point, the 2 or 3 reasons behind it, and what to do. It holds the header line, the title, the ask, and one main visual or at most 4 numbers, with the reasons as short labeled items. Aim for 50 to 120 words on it, the header line not counted. Under 50 usually means you hid the reasons; over 120 means walls of text. Never stretch it to the window's height or pad it with empty space: it ends where its content ends. Only a cheat sheet, made for looking things up, can hold more.
9. **Cut, don't hide.** Moving text into a tab or a row that opens is not cutting it. Only reference detail goes one click away: the full table, the FAQ, the method. The reasons, the risks that change the answer, the owner and the next step stay in view.
10. **Say each thing once.** Each number appears once in view, not in the title, a tile and a list. Each list appears once: the same 12 emails as a calendar and again as a table is one too many. Pick the one view that answers the reader's question. Totals add up. Cards side by side hold about the same amount, so none is half empty. Labels that sit together use the same unit (58%, 9%, 33%, not "a third").

## 4. Slop signs

Never ship a page with these:

- Paragraphs and bullet lists where a number, a chart or a diagram would show it.
- No header: the reader can't tell what this is, who sent it, or why.
- Clever headings ("Candidates in play", "The road ahead") instead of plain sentences.
- A subtitle or helper text under every heading, a caption under every number, a note under every card title.
- A paragraph under the title.
- More than 4 numbers fighting for attention at the top.
- A half-empty first screen, with the reasons or the next step hidden in a later tab.
- Decoration posing as a visual: mock windows, bars or charts with no numbers, icons standing in for data, buttons that do nothing.
- The ask only in the small header line, or the ask repeated in 3 places.
- Text moved into tabs instead of cut.
- Every page in the same skeleton, whatever its job.
- The same number shown 3 times; numbers that don't add up.
- Stripped bare: no amounts, rules, exceptions or examples, so it doesn't look important.
- Walls of text: long paragraphs, tables full of sentences, a dozen rows that look the same.
- A change with nothing to compare it to: "+12%" instead of "+12% vs September".
- A row of identical cards, each with its own little chart. Use one main chart, with plain numbers around it.
- A look outside the style kit: decorative fonts, many text sizes, gradients, emoji as icons.
- One long scroll that tries to hold everything.
- Badges, pills or numbers (01, 02, 03) that carry no information.
- Text or pills spilling out of their boxes, a big number broken onto 2 lines, a grid of 10 narrow columns.
- The same list shown twice: a calendar and a table, cards and a table.
- More than 4 sections, cards with 6+ items, or 2+ tables: a dossier, not a page.
- A "fixed" page that looks like the old one: same sections, same order, same boxes.

## 5. Fixing an artifact

You got a page: a link, a file, code or a screenshot. Start from its reader, not from its layout.

1. List the slop signs you find, one line each. Count the words on its first screen.
2. Write in one sentence what the reader must understand or do. That's the spine of the new page.
3. Decide how much to change:
   - **It fails any check in section 6, or uses the wrong form for the job:** rebuild it. This is the usual case.
   - **It passes every check but one or two small ones:** fix only those, and keep its layout.
   - **It passes every check:** say so. Suggest at most 3 small changes, and change nothing unless they say yes.
4. To rebuild, follow this whole page from section 1, as if the old page didn't exist. Pick the form from the job, even if the old page used another one. Don't copy its sections, order, boxes or tabs. Cutting is the job: delete what repeats a visual, says the obvious or explains the page. The new page has about half the words of the old one or fewer, counting what's behind tabs, and it keeps the hard limits of rule 7: 4 sections, 5 items per card, 1 table. Keep every fact the reader needs to act, and keep the reasons in view.
5. If a stranger would call it the same page, rebuild again.
6. Check every number, count and claim against the old page. A rebuild must not make a fact wrong.

For a rebuild, save a new HTML file rather than overwriting the original unless the user asks for an in-place edit. Add no fact, number or name that wasn't there. When you're done, your chat reply is short: the slop signs you found (one short line each, 6 at most), then the saved file path and one line on what you built. No list of every change.

## 6. Check before you show it

Read it as the person from step 1, with zero context:

- Hide the paragraphs. Do the visuals alone tell the story?
- Read only the first screen. Do you know the point, the reasons and what to do? Is it between 50 and 120 words, with no empty band?
- Does every visual show numbers or labels you can read?
- Did you cut about half the words, not just move them? Does each number appear once, and does every total add up?
- Is there any note under a number, a heading or a card title? Cut it.
- At most 4 sections, 5 items per card, 1 table? Does any list appear twice?
- Picture it at 1440px and at 400px. Could any pill, label or number spill out of its box or break onto 2 lines?
- Does the top say what this is and who it's from, and does the ask stand out: what, by when, how to answer?
- Read every heading out loud. Is it a normal sentence?
- Is every detail there that they need to act without asking anyone?
- Does every change say what it's compared to?
- Does it use the GitHub-inspired style kit?
- Could they forward it to their own boss without explaining anything?

If any answer is no, fix it first.

## 7. Style kit

Start every page from this. Add only what the page needs.

- **Fonts:** system sans-serif throughout, with semibold titles and section headings. No font downloads.
- **Sizes:** only 5. 40px big numbers, 32px title, 22px section headings, 16px text, 13px labels.
- **Charts:** inline SVG for standalone files. The bar or line that matters in blue, the rest in gray.
- **Icons:** simple line icons drawn in SVG, in gray or blue. Never emoji.
- **Nothing spills out of its box.** Use layouts that can't break, and inspect them in a browser when browser tools are available. No grid with more than 6 columns: a week of 10 days becomes a list or a timeline that wraps. Never a pill, a tag or `white-space: nowrap` inside a box narrower than 200px. A number in a tile fits on one line at every width ("$400", with "was $200" as its tag, never "$200 → $400"). Every box grows with its content. Check at 1440px and at 400px wide: if any text could overflow, overlap or wrap mid-number, change the layout. If no browser is available, review the responsive CSS and say that visual inspection was not performed.

```css
:root {
  --bg: #ffffff; --soft: #f6f8fa; --card: #ffffff;
  --text: #1f2328; --text-2: #59636e; --text-3: #59636e;
  --line: #d1d9e0; --shadow: 0 1px 3px rgba(31,35,40,.08);
  --accent: #0969da; --accent-strong: #0550ae; --action-bg: #0550ae;
  --good: #1a7f37; --good-bg: rgba(26,127,55,.12);
  --bad: #cf222e; --bad-bg: rgba(207,34,46,.12);
  --watch: #9a6700; --watch-bg: rgba(154,103,0,.12);
  --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color-scheme: light;
}
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {
  --bg: #0d1117; --soft: #010409; --card: #151b23;
  --text: #f0f6fc; --text-2: #9198a1; --text-3: #9198a1;
  --line: #3d444d; --shadow: none;
  --accent: #58a6ff; --accent-strong: #79c0ff; --action-bg: #1f6feb;
  --good: #3fb950; --bad: #f85149; --watch: #d29922; color-scheme: dark; } }
:root[data-theme="dark"] {
  --bg: #0d1117; --soft: #010409; --card: #151b23;
  --text: #f0f6fc; --text-2: #9198a1; --text-3: #9198a1;
  --line: #3d444d; --shadow: none;
  --accent: #58a6ff; --accent-strong: #79c0ff; --action-bg: #1f6feb;
  --good: #3fb950; --bad: #f85149; --watch: #d29922; color-scheme: dark;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--text); font: 16px/1.55 var(--sans); }
h1, h2 { font-family: var(--sans); font-weight: 600; margin: 0; text-wrap: balance; }
h1 { font-size: 32px; line-height: 1.2; } h2 { font-size: 22px; line-height: 1.3; }
.meta { font-size: 13px; color: var(--text-2); border-bottom: 1px solid var(--line); padding: 12px 0; }
.card { background: var(--card); border: 1px solid var(--line); border-radius: 6px; box-shadow: var(--shadow); padding: 20px; min-width: 0; }
.num { font-size: 40px; font-weight: 500; line-height: 1; }
.pill { display: inline-block; border-radius: 999px; padding: 2px 10px; font-size: 13px; font-weight: 500; }
.good { color: var(--good); background: var(--good-bg); } .bad { color: var(--bad); background: var(--bad-bg); } .watch { color: var(--watch); background: var(--watch-bg); }
button { font: 500 16px var(--sans); border-radius: 6px; padding: 10px 16px; cursor: pointer; background: var(--card); color: var(--text); border: 1px solid var(--line); }
button.main { background: var(--action-bg); color: #fff; border: 0; }
input, select, textarea { font: 16px var(--sans); background: var(--card); color: var(--text); border: 1px solid var(--line); border-radius: 6px; padding: 10px 12px; }
:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
```

## 8. The web version

Use this when they ask for a website, the web version, or to put the page on GitHub or Vercel. Everything above still applies. This version adds free, open-source libraries that make the page feel like an app, and a link only the reader can open.

**The stack.** Vite, React, TypeScript, Tailwind CSS and shadcn/ui (cards, tabs, buttons, badges, tooltips, dialogs). Charts with Recharts, through shadcn's chart component. Motion for movement. Icons from lucide-react. Nothing paid, no API keys.

**Same look.** Put the style kit into the shadcn theme: blue as the primary color, system sans-serif throughout, the same 5 text sizes, the same dark mode.

**What the libraries are for.** Only what helps the reader:

- Charts show the exact value on hover or tap.
- Big numbers count up once, when the page opens.
- Sections fade in once, in 200 to 400 ms. Nothing loops, nothing bounces. Respect "reduce motion".
- Rows and cards open smoothly to show reference detail.
- Tabs, steps and slides switch with a short slide.
- A light and dark switch in the corner.

**Check the running page.** Run it, open it in a browser at 1440px and 400px wide when browser tools are available, and look at the screenshots. Fix anything that spills, overlaps or looks empty, then look again. Read the first screen as the reader before you ship. If browser tools are unavailable, run the project's checks, review responsive styles, and state the visual-inspection limitation.

**Private by default.** Business pages are not for the whole internet:

1. Build locally first. Only create a remote repo, push, or deploy when the user requests publication. Follow the host's permission prompts.
2. Before publication, check `gh auth status` and `vercel whoami`. If a tool is missing, explain what is needed; if signed out, guide the user through `gh auth login --web` or `vercel login`. Keep authentication interactive.
3. Push the code to a new private GitHub repo and deploy to Vercel. Protect business pages with server-side access control, such as a passcode gate in Vercel Routing Middleware. Validate the passcode on the server against a Vercel environment variable, never in client code. Use a signed, expiring session cookie with HttpOnly, Secure and SameSite flags; do not trust a cookie just because it exists. Send `X-Robots-Tag: noindex` so search engines skip it.
4. Check it from outside: locked without authorization, still locked with an invalid cookie, open with valid authorization. Share credentials through a separate secure channel, not in chat or source control.

For a local build, end with the project path and run command. After publication, end with the link, the repo, and how the reader obtains access. Do not print the passcode.
