export const emptyStateProps = [
  { name: "title", type: "ReactNode", defaultValue: "—" },
  { name: "description", type: "ReactNode", defaultValue: "—" },
  { name: "kind", type: '"empty" | "search" | "filter"', defaultValue: '"empty"' },
  { name: "icon", type: "ReactNode", defaultValue: "auto" },
  { name: "hideIcon", type: "boolean", defaultValue: "false" },
  { name: "image", type: "ReactNode", defaultValue: "—" },
  { name: "action", type: "ReactNode", defaultValue: "—" },
  { name: "secondaryAction", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "align", type: '"center" | "start"', defaultValue: '"center"' },
  { name: "bordered", type: "boolean", defaultValue: "false" },
  { name: "radius", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "minHeight", type: "number | string", defaultValue: "—" },
  { name: "role", type: "AriaRole", defaultValue: '"status"' },
  { name: "aria-labelledby", type: "string", defaultValue: "auto" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "EmptyStateClassNames", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const emptyStateHelpers = [
  { key: "hasNode", name: "hasEmptyStateNode(value)", type: "boolean", defaultValue: "—" },
] as const;

export const emptyStateCssClasses = [
  { name: ".gem-empty-state", rule: "root" },
  { name: ".gem-empty-state--md", rule: "size" },
  { name: ".gem-empty-state--center", rule: "align" },
  { name: ".gem-empty-state--kind-empty", rule: "kind" },
  { name: ".gem-empty-state--radius-md", rule: "radius" },
  { name: ".gem-empty-state--bordered", rule: "bordered" },
  { name: ".gem-empty-state--min-h", rule: "minHeight" },
  { name: ".gem-empty-state__media", rule: "media" },
  { name: ".gem-empty-state__icon", rule: "icon" },
  { name: ".gem-empty-state__content", rule: "content" },
  { name: ".gem-empty-state__title", rule: "title" },
  { name: ".gem-empty-state__description", rule: "description" },
  { name: ".gem-empty-state__actions", rule: "actions" },
  { name: ".gem-empty-state__extra", rule: "extra" },
] as const;

export const emptyStateCssVariables = [
  "--gem-empty-state-pad",
  "--gem-empty-state-gap",
  "--gem-empty-state-icon-size",
  "--gem-empty-state-copy",
  "--gem-empty-state-icon-bg",
  "--gem-empty-state-icon-fg",
  "--gem-empty-state-min-h",
] as const;

export const emptyStateTokens = [
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-bg",
  "--gem-color-border",
  "--gem-color-neutral-100",
  "--gem-color-secondary-{100|700}",
  "--gem-color-tertiary-{100|700}",
  "--gem-space-{2|3|4|5}",
  "--gem-radius-{sm|md|lg|full}",
  "--gem-font-sans",
] as const;
