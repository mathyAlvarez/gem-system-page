export const blockUiProps = [
  { name: "blocking", type: "boolean", defaultValue: "false" },
  { name: "overlay", type: "string", defaultValue: '"var(--gem-palette-neutral-0)"' },
  { name: "opacity", type: "number", defaultValue: "56" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "aria-label", type: "string", defaultValue: '"Loading"' },
  { name: "role", type: "AriaRole", defaultValue: '"status"' },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "BlockUiClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
] as const;

export const blockUiCssClasses = [
  { name: ".gem-block-ui", rule: "root" },
  { name: ".gem-block-ui::before", rule: "overlay" },
  { name: ".gem-block-ui__content", rule: "content" },
  { name: ".gem-spinner", rule: "spinner" },
] as const;

export const blockUiCssVariables = [
  "--gem-block-ui-overlay",
  "--gem-block-ui-opacity",
  "--gem-block-ui-spinner-size",
] as const;

export const blockUiTokens = [
  "--gem-palette-neutral-0",
  "--gem-icon-6xl",
  "--gem-icon-4xl",
  "--gem-z-max",
  "--gem-space-4",
] as const;
