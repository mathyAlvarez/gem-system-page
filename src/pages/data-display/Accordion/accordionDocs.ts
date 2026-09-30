export const accordionProps = [
  { name: "items", type: "AccordionItem[]", defaultValue: "—" },
  { name: "type", type: '"multiple" | "single"', defaultValue: '"multiple"' },
  { name: "value", type: "string | string[]", defaultValue: "—" },
  { name: "defaultValue", type: "string | string[]", defaultValue: "—" },
  { name: "collapsible", type: "boolean", defaultValue: "true" },
  { name: "variant", type: '"connected" | "separated" | "flush"', defaultValue: '"connected"' },
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "AccordionClassNames", defaultValue: "—" },
  { name: "onChange", type: "(value: string[], item: AccordionItem) => void", defaultValue: "—" },
  { name: "onKeyDown", type: "KeyboardEventHandler<HTMLDivElement>", defaultValue: "—" },
] as const;

export const accordionItemProps = [
  { name: "id", type: "string", defaultValue: "—" },
  { name: "title", type: "ReactNode", defaultValue: "—" },
  { name: "subtitle", type: "ReactNode", defaultValue: "—" },
  { name: "content", type: "ReactNode", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "ariaLabel", type: "string", defaultValue: "title" },
] as const;

export const accordionCssClasses = [
  { name: ".gem-accordion", rule: "root" },
  { name: ".gem-accordion--connected", rule: "variant" },
  { name: ".gem-accordion--md", rule: "size" },
  { name: ".gem-accordion--multiple", rule: "type" },
  { name: ".gem-accordion--disabled", rule: "disabled" },
  { name: ".gem-accordion__item", rule: "item" },
  { name: ".gem-accordion__item--open", rule: "itemOpen" },
  { name: ".gem-accordion__item--disabled", rule: "itemDisabled" },
  { name: ".gem-accordion__heading", rule: "heading" },
  { name: ".gem-accordion__trigger", rule: "trigger" },
  { name: ".gem-accordion__icon", rule: "icon" },
  { name: ".gem-accordion__label", rule: "label" },
  { name: ".gem-accordion__title", rule: "title" },
  { name: ".gem-accordion__subtitle", rule: "subtitle" },
  { name: ".gem-accordion__indicator", rule: "indicator" },
  { name: ".gem-accordion__panel", rule: "panel" },
  { name: ".gem-accordion__panel-inner", rule: "panelInner" },
  { name: ".gem-accordion__content", rule: "content" },
] as const;

export const accordionCssVariables = [
  "--gem-accordion-fg",
  "--gem-accordion-muted",
  "--gem-accordion-border",
  "--gem-accordion-bg",
  "--gem-accordion-subtle",
  "--gem-accordion-radius",
] as const;

export const accordionTokens = [
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-border",
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-radius-md",
  "--gem-space-3",
  "--gem-shadow-focus",
  "--gem-palette-neutral-{50|300|500}",
  "--gem-font-sans",
] as const;
