# OMX Desktop Auto-Trigger Skill

This repository now includes a reusable Codex skill for OMX CLI-first execution.

## Quick links

- Skill contract: [skills/omx-cli-default/SKILL.md](./skills/omx-cli-default/SKILL.md)
- Usage guide: [skills/omx-cli-default/README.md](./skills/omx-cli-default/README.md)

## Core policy

- One-time injection:

```bash
omx setup --scope user
```

- New project bootstrap (one command):

```bash
omx init
```

- Version fallback when `init` is unavailable:

```bash
omx deepinit .
# or
omx agents-init .
```

- PATH fallback:

```bash
npx omx <command>
```
