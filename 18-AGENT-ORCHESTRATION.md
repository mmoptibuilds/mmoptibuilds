# Agent orchestration

## Context contract

Every agent receives only the current decision register, relevant source-of-truth section, task brief, owned files, acceptance criteria, and required output. The million-character transcript is an archive, not working memory.

## Roles

### Codex

Own architecture, repository inspection, planning, integration, data/security implementation, verification, and final decisions. Use Luna/Terra models for substantial coding and difficult synthesis when available; use the default model when routing is uncertain.

### fcc-claude

Own focused implementation, refactoring, debugging, test repair, and code review inside an approved task. Use Haiku with low context for small mechanical work, Sonnet with moderate context for normal implementation, and Opus rarely for architecture deadlocks, difficult security analysis, or final critical review.

### Agy / Antigravity / Gemini

Own visual exploration, moodboards, image/video generation, layout alternatives, creative critique, and multimodal inspection. Use a fast Gemini model for iterations and a stronger model for final art direction or complex multimodal reasoning.

### OpenCode and other tools

Use as isolated reviewers, test runners, or focused implementation assistants after confirming installed capabilities. They never become a second simultaneous owner of the same files.

## Terminal layout

Keep Codex, fcc-claude, Agy/Gemini, and OpenCode in separate tabs. One coordinator assigns file ownership. Before editing, each agent reads the latest checkpoint. After editing, it writes a handoff with files, dependencies, commands, tests, risks, and next action.

## Safety

- No agent receives credentials or personal inquiry data.
- No simultaneous edits to the same files.
- Pin dependencies and preserve lockfiles.
- Agents may install a task-relevant package only after checking existing capabilities and recording the reason.
- A green build is not permission to deploy production.
- Run security, accessibility, performance, and content-truth reviews before release.

## Phase sequence

`MAP → DECIDE → DESIGN → STRUCTURE → IMPLEMENT → REVIEW → TEST → REFINE → HAND OFF`

Each phase produces a named, versioned artifact. Context is refreshed from those artifacts, not from stale chat memory.
