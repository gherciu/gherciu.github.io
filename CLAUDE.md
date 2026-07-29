# CLAUDE.md

Project guardrails for AI-assisted contributions. The full engineering blueprint lives in the
`ai-utils` repo (`ai-utils/skills/project-structure/SKILL.md`) — this file records only what is
specific to this repository plus the non-negotiable rules.

## What this project is

A personal portfolio: a **statically exported Next.js site** deployed to **GitHub Pages**. There is
no API, no database, and no Docker — the deliverable is the `apps/web/out/` folder of plain files.

## Hard rules

- **Never auto-commit.** Don't run `git commit`, `git push`, or `gh pr create` unless the user
  explicitly asks. Prompts like "fix X", "make X work", "investigate X" do **not** authorize a
  commit.
- **Never auto-create a branch.** Don't run `git checkout -b`, `git switch -c`, or any other
  branch-creating command unless the user explicitly asks. A `PreToolUse` hook
  (`.claude/hooks/block-branch-creation.sh`) enforces this at the tool-call layer.
- **Never install npm packages.** Don't run `npm install`, `npm i`, `npm add`, or `npm uninstall`.
  If a task needs a new dep, add it to the right workspace's `package.json`, print the exact
  command (`npm --workspace apps/web install <pkg>`), and stop.
- **Check for newer versions before pinning.** Run `npm view <package> version` rather than copying
  a version from memory or from a doc.

## Layout

```
apps/web/            The Next.js site (App Router, static export)
libs/types/          Shared types — Project, Skill
libs/utils/          Pure helpers, unit-tested with Jest
libs/mocks/          Shared test fixtures
libs/eslint-config/  Flat ESLint base re-exported by every workspace
scripts/dev/         setup + start_all
scripts/ci_cd/       build_web (called by the Pages workflow)
```

No `.docker/` — this project is not containerized.

## Conventions specific to this repo

- **Per-workspace configs.** Every `apps/*` and `libs/*` package has its own standalone
  `tsconfig.json` and `eslint.config.mjs`. There is no root `tsconfig`. Only Prettier, commitlint,
  lint-staged, `.nvmrc`, `.npmrc`, and `.editorconfig` live at the root.
- **`lint` type-checks then lints** — `tsc --noEmit && eslint . --max-warnings=0`. There is
  deliberately **no separate `typecheck` script**.
- **File names are `kebab-case`**, including React components (`skill-pill.tsx` exporting
  `SkillPill`).
- **Styling is Tailwind v4, CSS-first.** There is no `tailwind.config.js` — theme tokens live in
  `@theme` inside `apps/web/src/styles/globals.css`. **Custom classes are declared with `@utility`,
  not as plain classes in `@layer components`** — only `@utility` registers them so they work with
  `@apply` and with variants (`hover:`, `md:`). A class defined in `@layer components` and then
  used from `@apply` is a build error in v4.
- **Watch the global link style.** `globals.css` applies `text-gradient` to every `a`, which sets
  `color: transparent`. Icons from `react-icons` paint with `currentColor`, so an icon inside a
  link needs an explicit colour class or it renders invisible.

- **Content lives in `apps/web/src/constants/`** (`projects.ts`, `skills.ts`), typed against
  `@portfolio/types`. Adding a project or a skill means editing a constant, not a component.
- **Data fetching is build-time only.** `apps/web/src/lib/github.ts` runs during `next build`; the
  result is baked into the exported HTML. Don't add client-side fetching — there is no server.

## Before you finish

Run `npm run lint` and `npm test` from the root. Both must pass with zero warnings.
