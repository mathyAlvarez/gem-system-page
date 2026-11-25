export const propertyListProps = [
  { name: "title", type: "ReactNode", defaultValue: "—" },
  { name: "extra", type: "ReactNode", defaultValue: "—" },
  { name: "items", type: "PropertyListItemConfig[]", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "columns", type: "number", defaultValue: "1" },
  { name: "layout", type: '"horizontal" | "vertical"', defaultValue: '"horizontal"' },
  { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "bordered", type: "boolean", defaultValue: "false" },
  { name: "divided", type: "boolean", defaultValue: "true" },
  { name: "striped", type: "boolean", defaultValue: "false" },
  { name: "colon", type: "boolean", defaultValue: "true" },
  { name: "labelWidth", type: "number | string", defaultValue: "max-content" },
  { name: "align", type: '"start" | "end"', defaultValue: '"start"' },
  { name: "radius", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { name: "emptyText", type: "ReactNode", defaultValue: '"—"' },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "PropertyListClassNames", defaultValue: "—" },
  { name: "ref", type: "Ref<HTMLElement>", defaultValue: "—" },
] as const;

export const propertyListItemProps = [
  { name: "key", type: "Key", defaultValue: "index" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "span", type: "number", defaultValue: "1" },
  { name: "hidden", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "PropertyListItemClassNames", defaultValue: "—" },
] as const;

export const propertyListHelpers = [
  { name: "clampColumns", type: "(columns?: number) => number", defaultValue: "—" },
  {
    name: "clampSpan",
    type: "(span: number | undefined, columns: number) => number",
    defaultValue: "—",
  },
  {
    name: "collectPropertyListItems",
    type: "(items, children) => PropertyListItemConfig[]",
    defaultValue: "—",
  },
  { name: "hasPropertyNode", type: "(value: ReactNode) => boolean", defaultValue: "—" },
] as const;

export const propertyListCssClasses = [
  { name: ".gem-property-list", rule: "root" },
  { name: ".gem-property-list--md", rule: "size" },
  { name: ".gem-property-list--horizontal", rule: "layout" },
  { name: ".gem-property-list--align-end", rule: "align" },
  { name: ".gem-property-list--radius-md", rule: "radius" },
  { name: ".gem-property-list--bordered", rule: "bordered" },
  { name: ".gem-property-list--divided", rule: "divided" },
  { name: ".gem-property-list--striped", rule: "striped" },
  { name: ".gem-property-list--colon", rule: "colon" },
  { name: ".gem-property-list__header", rule: "header" },
  { name: ".gem-property-list__title", rule: "title" },
  { name: ".gem-property-list__extra", rule: "extra" },
  { name: ".gem-property-list__list", rule: "list" },
  { name: ".gem-property-list__item", rule: "item" },
  { name: ".gem-property-list__item--span", rule: "span" },
  { name: ".gem-property-list__label", rule: "label" },
  { name: ".gem-property-list__value", rule: "value" },
] as const;

export const propertyListCssVariables = [
  "--gem-property-list-pad-y",
  "--gem-property-list-pad-x",
  "--gem-property-list-gap",
  "--gem-property-list-col-gap",
  "--gem-property-list-label-width",
  "--gem-property-list-rule",
  "--gem-property-list-cols",
  "--gem-property-list-span",
] as const;

export const propertyListTokens = [
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-border",
  "--gem-color-bg",
  "--gem-color-neutral-50",
  "--gem-space-{1|2|3|4|6|8|10}",
  "--gem-radius-{sm|md|lg}",
  "--gem-font-sans",
] as const;
