import type { BreadcrumbsSize } from "@gem-org/gem-system";

export const breadcrumbSizes: BreadcrumbsSize[] = ["sm", "md", "lg"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const breadcrumbsProps = [
  { name: "items", type: "BreadcrumbItem[]", defaultValue: "—" },
  { name: "navLabel", type: "string", defaultValue: '"Breadcrumb"' },
  { name: "separator", type: "ReactNode", defaultValue: "<ChevronRight />" },
  { name: "size", type: union(breadcrumbSizes), defaultValue: '"md"' },
  { name: "maxItems", type: "number", defaultValue: "—" },
  { name: "itemsBeforeCollapse", type: "number", defaultValue: "1" },
  { name: "itemsAfterCollapse", type: "number", defaultValue: "1" },
  { name: "overflowLabel", type: "string", defaultValue: '"Show more path"' },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "BreadcrumbsClassNames", defaultValue: "—" },
  { name: "onItemClick", type: "BreadcrumbClickHandler", defaultValue: "—" },
] as const;

export const breadcrumbItemProps = [
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "href", type: "string", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "current", type: "boolean", defaultValue: "false" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "onClick", type: "BreadcrumbClickHandler", defaultValue: "—" },
] as const;

export const breadcrumbsCssClasses = [
  { name: ".gem-breadcrumbs", rule: "root" },
  { name: ".gem-breadcrumbs--{size}", rule: "size" },
  { name: ".gem-breadcrumbs__list", rule: "list" },
  { name: ".gem-breadcrumbs__item", rule: "item" },
  { name: ".gem-breadcrumbs__link", rule: "link" },
  { name: ".gem-breadcrumbs__current", rule: "current" },
  { name: ".gem-breadcrumbs__icon", rule: "icon" },
  { name: ".gem-breadcrumbs__separator", rule: "separator" },
  { name: ".gem-breadcrumbs__overflow", rule: "overflow" },
  { name: ".gem-breadcrumbs__overflow-trigger", rule: "trigger" },
  { name: ".gem-breadcrumbs__menu", rule: "menu" },
] as const;

export const breadcrumbsCssVariables = [
  "--gem-breadcrumbs-fg",
  "--gem-breadcrumbs-muted",
  "--gem-breadcrumbs-current",
  "--gem-breadcrumbs-hover",
] as const;

export const breadcrumbsTokens = [
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-primary-600",
  "--gem-color-primary-700",
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-border",
  "--gem-radius-sm",
  "--gem-radius-md",
  "--gem-shadow-md",
  "--gem-shadow-focus",
  "--gem-z-dropdown",
] as const;
