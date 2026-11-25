export const spinnerProps = [
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | number | string',
    defaultValue: '"md"',
  },
  {
    name: "tone",
    type: '"primary" | "secondary" | "success" | "warning" | "error" | "info" | "neutral" | "current"',
    defaultValue: '"primary"',
  },
  { name: "variant", type: '"ring" | "dots" | "circle-dots"', defaultValue: '"ring"' },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: '"end" | "bottom"', defaultValue: '"end"' },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "role", type: "AriaRole", defaultValue: '"status"' },
  { name: "aria-label", type: "string", defaultValue: '"Loading"' },
  { name: "aria-labelledby", type: "string", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "SpinnerClassNames", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLDivElement>", defaultValue: "—" },
] as const;

export const spinnerCssClasses = [
  { name: ".gem-spinner", rule: "root" },
  { name: ".gem-spinner--md", rule: "size" },
  { name: ".gem-spinner--custom", rule: "custom" },
  { name: ".gem-spinner--tone-primary", rule: "tone" },
  { name: ".gem-spinner--ring", rule: "variant" },
  { name: ".gem-spinner--label-end", rule: "placement" },
  { name: ".gem-spinner--disabled", rule: "disabled" },
  { name: ".gem-spinner__indicator", rule: "indicator" },
  { name: ".gem-spinner__label", rule: "label" },
] as const;

export const spinnerCssVariables = ["--gem-spinner-color", "--gem-spinner-gap"] as const;

export const spinnerTokens = [
  "--gem-color-{tone}-600",
  "--gem-color-neutral-700",
  "--gem-color-neutral-400",
  "--gem-color-fg",
  "--gem-palette-neutral-50",
  "--gem-space-2",
  "--gem-space-3",
  "--gem-space-4",
  "--gem-font-sans",
] as const;
