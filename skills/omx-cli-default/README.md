# OMX CLI Default Skill

A reusable Codex skill that enforces an OMX CLI-first workflow for desktop execution.

## What this solves

- One-time OMX injection for user scope (`omx setup --scope user`)
- Project bootstrap with a single command
- Consistent command fallback when OMX binaries differ by version
- Stable routing for read-only, single-lane, and parallel execution

## Standard flow

1. One-time global setup:

```bash
omx setup --scope user
```

2. New project bootstrap (one command):

```bash
cd <project-root>
omx init
```

3. Compatibility fallback for older OMX builds:

```bash
omx deepinit .
# or
omx agents-init .
```

4. Command routing:

```bash
omx explore --prompt "<read-only lookup>"
omx exec "<single-lane task>"
omx team N:executor "<parallel implementation task>"
omx resume --last
```

## PATH fallback rule

If `omx` is not available on PATH, use `npx omx` with identical arguments.

Example:

```bash
npx omx version
npx omx setup --scope user
```

## Tested baseline

- oh-my-codex: `0.13.0`
- codex-cli: `0.120.0`
- platform: `Windows x64`

## Known notes

- `omx doctor` may show an explore-harness warning on Windows; this is expected unless a compatible custom harness is configured.
- A legacy empty skill root at `~/.agents/skills` may still be detected; remove/archive it if duplicate skills appear.

## Files

- `skills/omx-cli-default/SKILL.md`: executable skill contract
- `skills/omx-cli-default/README.md`: usage and maintenance notes
