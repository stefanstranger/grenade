# Grenade for GitHub Copilot

Make HTML pages that someone with zero context can understand in five seconds.
The **noslop** skill picks the layout from the reader's job, puts visuals before
paragraphs, and uses GitHub-inspired colors, typography, and light/dark themes.

This fork targets **GitHub Copilot CLI and GitHub Copilot in VS Code**. It replaces
the upstream Claude integration; it does not depend on Claude or an API key.
You need access to GitHub Copilot and a client that supports Agent Skills.

## GitHub Copilot CLI

Install the Copilot version directly from this fork's `main` branch:

```shell
copilot plugin install stefanstranger/grenade
```

Or install through its marketplace (use one installation method, not both):

```shell
copilot plugin marketplace add stefanstranger/grenade
copilot plugin install noslop@grenade
```

Start a new Copilot session in your working folder. Ask Copilot to use the
**noslop** skill, and include your notes or file paths:

```text
Use the noslop skill to make monthly-report.html from these notes for my manager.
They need to decide which two projects to fund and will read it once.
```

Check availability with `copilot plugin list` and `copilot skill list`.
For local development, you can optionally load this checkout from its root:

```shell
copilot --plugin-dir .
```

The remote install commands use the fork's default branch, `main`, which already
contains the Copilot version. A local checkout is not required for installation.

## GitHub Copilot in VS Code

Open this checkout in VS Code, sign in to GitHub Copilot, and select **Agent**
mode in Chat. VS Code discovers the skill at
[.github/skills/noslop/SKILL.md](.github/skills/noslop/SKILL.md) as a project skill.
Start a new chat after adding or changing the skill, and ask to use **noslop**.

To use it in another project, copy the entire `.github/skills/noslop` directory
into that project's `.github/skills` directory. No extension, API integration,
or duplicate instruction file is required.

On VS Code versions with agent plugin support, you can instead run
**Chat: Install Plugin from Source** and enter
`https://github.com/stefanstranger/grenade`, or select this checkout's directory
for local development. Review the installed skill in
**Chat: Open Customizations**. Plugin support must be enabled for this route;
copying the project skill does not require plugins.

## Make, fix, or build a website

Give Copilot the reader, the job, and whether they will read once or return.
If any are missing, the skill asks before building.

**Make a page:**

```text
Use noslop to make an HTML decision page from notes.md for the finance lead.
They need to choose a vendor by Friday and will read it once.
```

**Fix an existing page:**

```text
Use noslop to fix dashboard.html for our operations team.
They check it daily to see overdue work. Save the redesign as a new HTML file.
```

**Build the web version:**

```text
Use noslop to make a website from notes.md for the sales team.
They will use it weekly to price deals. Build locally; do not publish yet.
```

Standalone pages are real `.html` files with inline CSS and JavaScript, not
chat-only artifacts. Open them in a browser. The optional web version uses Vite,
React, TypeScript, Tailwind CSS, shadcn/ui, Recharts, Motion, and lucide-react.
Publishing to GitHub/Vercel requires their tools and accounts and an explicit
request to publish; a local HTML page needs neither.

## Examples

Open these files locally; no server or Claude preview runtime is required.
They use fictional sample data.

| Reader's job | Example |
| --- | --- |
| Decide | [Decision page](examples/decision-page.html) |
| Catch up | [Monthly report](examples/monthly-report.html) |
| Keep checking | [Hiring dashboard](examples/hiring-dashboard.html) |
| Follow steps | [Expense guide](examples/expense-guide.html) |
| Say yes | [Pitch slides](examples/pitch-slides.html) |
| Use a tool | [Deal pricer](examples/deal-pricer.html) |
| Look something up | [Support cheat sheet](examples/support-cheat-sheet.html) |
| Fix a page | [Before](examples/sloppy-dashboard.html) / [after](examples/fixed-dashboard.html) |

The deliberately sloppy "before" example keeps its original styling.

## Development

The canonical instructions live in `.github/skills/noslop/SKILL.md`. The root
`plugin.json` points there so plugin installs and project-skill discovery use
the same file. The marketplace catalog is `.github/plugin/marketplace.json`.
No Claude plugin manifests are shipped.

Run the dependency-free packaging and example checks with Node.js 22 or later:

```shell
node --test
```

Format references: [Copilot CLI plugins](https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-plugin-reference)
and [VS Code Agent Skills](https://code.visualstudio.com/docs/copilot/customization/agent-skills).

## Credits and license

Adapted for GitHub Copilot from [Ruben Hassid's Grenade](https://github.com/rubenhassid1/grenade),
the original Claude version, from the [How to AI newsletter](https://ruben.substack.com).
Thanks to [unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky for three
of the original ideas. Original attribution and the [MIT license](LICENSE) are retained.
