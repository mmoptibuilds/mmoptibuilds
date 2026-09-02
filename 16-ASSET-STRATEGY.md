# Asset strategy

## Launch approach

Temporary AI-generated visuals are allowed when original assets do not exist. They are never proof of a real product, client, team, award, facility, or result. Keep an internal manifest so every temporary item can be replaced without redesign.

## Manifest fields

`id`, `route`, `slot`, `filename`, `purpose`, `source`, `license`, `generated`, `truth_label`, `alt_text`, `dimensions`, `responsive_variants`, `compression`, `replacement_owner`, `replacement_deadline`, `approval_status`.

## Systems assets

Prefer real macro component photography, finished-build photography, assembly details, cable and thermal details, packaging, and diagrams. Generated hero objects should be abstract or clearly illustrative, not fake inventory.

## Studio assets

Use real project captures, process artifacts, wireframes, motion studies, and labelled concepts. Coldharbour may be shown only with an accurate ownership and project-status description. Do not reuse fictional identities, company logos, testimonials, or metrics from experiments.

## File structure

```text
public/media/
├── gateway/
├── systems/
├── studio/
├── work/
└── shared/
```

Source files stay outside the web bundle. Exported files use descriptive lowercase names, dimensions, and a stable crop plan. Decorative images use empty alt text; informative images use concise contextual alt text.
