---
name: omx-cli-default
description: Enforce OMX CLI-first execution for user-directed work. Use when the user asks to run tasks through OMX, requests one-time Codex config injection via `omx setup --scope user` or `omx setup --scope project`, or wants new-project bootstrap with `omx init`.
---

# OMX CLI Default

## Objective

Execute user-directed tasks through OMX CLI by default.
Apply setup once, then bootstrap each new project with one init command.

## Command Resolution

Use `omx` when it is available on PATH.
Use `npx omx` when `omx` is not available on PATH.
Keep command semantics identical after substitution.

## Workflow

1. Apply one-time OMX setup.

- Prefer global setup for all projects:

```bash
omx setup --scope user
```

- Use project-only setup only when the user explicitly wants local scope:

```bash
omx setup --scope project
```

2. Bootstrap every new project with one command.

- Try preferred command first:

```bash
cd <project-root>
omx init
```

- If the installed OMX version does not support `init`, use compatibility fallback:

```bash
cd <project-root>
omx deepinit .
```

- If `deepinit` is unavailable, use:

```bash
cd <project-root>
omx agents-init .
```

3. Route task execution through OMX CLI.

- Use `omx explore --prompt "..."` for fast read-only lookup.
- Use `omx exec "..."` for single-lane execution.
- Use `omx team N:executor "..."` for coordinated parallel implementation.
- Use `omx resume --last` to continue prior OMX sessions.

4. Keep execution user-directed.

- Treat the user instruction as source of truth for the task goal.
- Translate the goal into OMX CLI commands and execute directly.
- Avoid asking for confirmation on obvious, reversible next steps.

5. Recover using OMX-native diagnostics.

- Run `omx doctor` when OMX behavior is unexpected.
- Re-run `omx setup --scope user` if global wiring is missing.
- Re-run init bootstrap after entering a new project root.

## Output Contract

- Report the OMX command(s) executed.
- Report key outcome and any blocker.
- Continue until task is verified complete or a hard blocker is hit.
