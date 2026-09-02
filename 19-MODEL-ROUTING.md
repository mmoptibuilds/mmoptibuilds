# Model routing and context budgets

Model names and limits change. Before a long run, inspect the current CLI help/account status and substitute the closest available model. Never hard-code an unverified context limit.

| Task | Preferred tier | Context budget | Escalate when |
|---|---|---|---|
| Rename, format, extract, small copy edit | Haiku/Flash/small Codex | Low: task + exact files | Requirements are ambiguous |
| Isolated component or test | Haiku or fast Gemini | Low–medium | State or architecture crosses boundaries |
| Normal feature implementation | Sonnet or Luna/Terra | Medium | Security, data migration, or repeated failures appear |
| UI system or art direction | Strong Gemini + Sonnet/Luna review | Medium | Multimodal consistency remains unresolved |
| Architecture/data model | Luna/Terra or Sonnet | Medium–high, curated | Tradeoffs remain high impact |
| Security review | Strong Codex/Sonnet; Opus rarely | High, code-focused | Finding spans several trust boundaries |
| Hard debugging | Luna/Terra/Sonnet | Start narrow, expand by evidence | Two disciplined attempts fail |
| Image/video generation | Agy/Gemini media model | Prompt + references only | Brand consistency requires final review |
| Final integration review | Strongest available, Opus rarely | High but curated | Launch risk is material |

## Memory rule

“Low,” “medium,” and “high” describe task scope, not maximum token consumption. Low receives one brief and a few files. Medium receives relevant architecture, decisions, and a bounded directory. High receives a curated cross-cut, not the raw interview. Summarize completed work into the shared artifacts after every phase.

## Escalation protocol

1. State the unresolved question and evidence.
2. Reduce the problem to a reproducible case.
3. Ask a stronger model for a decision or diagnosis, not a full rewrite.
4. Have another model review high-risk output.
5. Verify with tests and source evidence.

Use expensive models for uncertainty and consequence, not for volume.
