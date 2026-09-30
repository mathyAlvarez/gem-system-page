export const cardProps = [
  { name: "title", type: "ReactNode", defaultValue: "—" },
  { name: "subtitle", type: "ReactNode", defaultValue: "—" },
  { name: "extra", type: "ReactNode", defaultValue: "—" },
  { name: "header", type: "ReactNode", defaultValue: "—" },
  { name: "media", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "footer", type: "ReactNode", defaultValue: "—" },
  { name: "bordered", type: "boolean", defaultValue: "true" },
  { name: "shadow", type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"', defaultValue: '"none"' },
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "radius", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "rounded", type: "boolean | number | string", defaultValue: "false" },
  { name: "expandable", type: "boolean", defaultValue: "false" },
  { name: "expanded", type: "boolean", defaultValue: "—" },
  { name: "defaultExpanded", type: "boolean", defaultValue: "true" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "CardClassNames", defaultValue: "—" },
  { name: "style", type: "CSSProperties", defaultValue: "—" },
  { name: "onExpandedChange", type: "(expanded: boolean) => void", defaultValue: "—" },
] as const;

export const cardHeaderProps = [
  { name: "title", type: "ReactNode", defaultValue: "—" },
  { name: "subtitle", type: "ReactNode", defaultValue: "—" },
  { name: "extra", type: "ReactNode", defaultValue: "—" },
  { name: "disclose", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "className", type: "string", defaultValue: "—" },
] as const;

export const cardSectionProps = [
  { name: "Card.Body", type: "HTMLAttributes<HTMLDivElement>", defaultValue: "—" },
  { name: "Card.Footer", type: "HTMLAttributes<HTMLElement>", defaultValue: "—" },
] as const;

export const cardCssClasses = [
  { name: ".gem-card", rule: "root" },
  { name: ".gem-card--md", rule: "size" },
  { name: ".gem-card--shadow-none", rule: "shadow" },
  { name: ".gem-card--bordered", rule: "bordered" },
  { name: ".gem-card--radius-md", rule: "radius" },
  { name: ".gem-card--rounded", rule: "rounded" },
  { name: ".gem-card--rounded-custom", rule: "roundedCustom" },
  { name: ".gem-card--expandable", rule: "expandable" },
  { name: ".gem-card--expanded", rule: "expanded" },
  { name: ".gem-card__media", rule: "media" },
  { name: ".gem-card__header", rule: "header" },
  { name: ".gem-card__header--solo", rule: "headerSolo" },
  { name: ".gem-card__heading", rule: "heading" },
  { name: ".gem-card__title", rule: "title" },
  { name: ".gem-card__subtitle", rule: "subtitle" },
  { name: ".gem-card__extra", rule: "extra" },
  { name: ".gem-card__disclose", rule: "disclose" },
  { name: ".gem-card__collapse", rule: "collapse" },
  { name: ".gem-card__body", rule: "body" },
  { name: ".gem-card__footer", rule: "footer" },
] as const;

export const cardCssVariables = ["--gem-card-radius"] as const;

export const cardTokens = [
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-border",
  "--gem-radius-{sm|md|lg}",
  "--gem-radius-2xl",
  "--gem-shadow-{xs|sm|md|lg|xl}",
  "--gem-shadow-focus",
  "--gem-space-2",
  "--gem-space-3",
  "--gem-palette-neutral-{50|300|500|600}",
  "--gem-font-sans",
] as const;
