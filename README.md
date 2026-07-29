# <div align="center"><img src="./apps/web/public/images/logo.png" width="60"/> </br>My Portfolio</div>

My personal portfolio — a statically exported Next.js site deployed to GitHub Pages at
[https://gherciu.github.io](https://gherciu.github.io).

## Local dev

```bash
./scripts/dev/setup      # one command: installs everything and builds the shared libs
./scripts/dev/start_all  # starts the app(s) developed in this repo
```

`setup` handles the entire fresh-clone setup and is idempotent (safe to re-run after a `git pull`).

## Guidelines

All engineering conventions and guidelines for this project are covered in the `ai-utils`
repository, cloned alongside the `@episclera` projects. An AI assistant can find the
project-structure blueprint at `ai-utils/skills/project-structure/SKILL.md`.
