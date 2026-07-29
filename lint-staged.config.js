module.exports = {
  // Code files: delegate to the project's own lint script — never call eslint directly.
  // Our lint script runs per-workspace via `--workspaces`, so return a fixed command
  // (ignore the passed file list) rather than re-implementing file targeting here.
  '*.{ts,tsx,js,jsx}': () => 'npm run lint',
  // Non-code files: prettify only — there is nothing to lint.
  '*.{json,md,css}': 'prettier --write',
}
