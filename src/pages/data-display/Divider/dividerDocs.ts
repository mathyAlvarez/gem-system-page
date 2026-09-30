export const dividerProps = [
  { name: "orientation", type: '"horizontal" | "vertical"', defaultValue: '"horizontal"' },
  { name: "variant", type: '"solid" | "dashed" | "dotted"', defaultValue: '"solid"' },
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"sm"' },
  {
    name: "tone",
    type: '"default" | "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "info" | "neutral"',
    defaultValue: '"default"',
  },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "labelPlacement", type: '"start" | "center" | "end"', defaultValue: '"center"' },
  { name: "decorative", type: "boolean", defaultValue: "auto" },
  { name: "role", type: "AriaRole", defaultValue: "auto" },
  { name: "aria-orientation", type: '"horizontal" | "vertical"', defaultValue: "auto" },
  { name: "aria-hidden", type: "boolean", defaultValue: "auto" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "DividerClassNames", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLDivElement>", defaultValue: "—" },
] as const;

export const dividerCssClasses = [
  { name: ".gem-divider", rule: "root" },
  { name: ".gem-divider--horizontal", rule: "orientation" },
  { name: ".gem-divider--solid", rule: "variant" },
  { name: ".gem-divider--sm", rule: "size" },
  { name: ".gem-divider--primary", rule: "tone" },
  { name: ".gem-divider--with-label", rule: "withLabel" },
  { name: ".gem-divider--label-center", rule: "placement" },
  { name: ".gem-divider__line", rule: "line" },
  { name: ".gem-divider__label", rule: "label" },
] as const;

export const dividerCssVariables = [
  "--gem-divider-color",
  "--gem-divider-thickness",
  "--gem-divider-gap",
] as const;

export const dividerTokens = [
  "--gem-color-border",
  "--gem-color-{primary|secondary|tertiary}-500",
  "--gem-color-{success|warning|error|info}-solid",
  "--gem-color-neutral-400",
  "--gem-color-fg-muted",
  "--gem-space-3",
  "--gem-font-sans",
] as const;
