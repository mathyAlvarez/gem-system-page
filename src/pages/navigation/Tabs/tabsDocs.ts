import type { TabsActivation, TabsOrientation, TabsSize, TabsVariant } from "@gem-org/gem-system";

export const tabsVariants: TabsVariant[] = ["line", "enclosed", "pills"];
export const tabsSizes: TabsSize[] = ["sm", "md", "lg"];
export const tabsOrientations: TabsOrientation[] = ["horizontal", "vertical"];
export const tabsActivations: TabsActivation[] = ["automatic", "manual"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const tabsProps = [
  { name: "items", type: "TabItem[]", defaultValue: "—" },
  { name: "value", type: "string", defaultValue: "—" },
  { name: "defaultValue", type: "string", defaultValue: "—" },
  { name: "variant", type: union(tabsVariants), defaultValue: '"line"' },
  { name: "size", type: union(tabsSizes), defaultValue: '"md"' },
  { name: "orientation", type: union(tabsOrientations), defaultValue: '"horizontal"' },
  { name: "activation", type: union(tabsActivations), defaultValue: '"automatic"' },
  { name: "fullWidth", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "listLabel", type: "string", defaultValue: '"Tabs"' },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "TabsClassNames", defaultValue: "—" },
  { name: "onChange", type: "TabsChangeHandler", defaultValue: "—" },
] as const;

export const tabItemProps = [
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "content", type: "ReactNode", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "ariaLabel", type: "string", defaultValue: "—" },
] as const;

export const tabsCssClasses = [
  { name: ".gem-tabs", rule: "root" },
  { name: ".gem-tabs--{variant}", rule: "variant" },
  { name: ".gem-tabs--{size}", rule: "size" },
  { name: ".gem-tabs--{orientation}", rule: "orientation" },
  { name: ".gem-tabs--full", rule: "full" },
  { name: ".gem-tabs--disabled", rule: "disabled" },
  { name: ".gem-tabs__list", rule: "list" },
  { name: ".gem-tabs__track", rule: "track" },
  { name: ".gem-tabs__indicator", rule: "indicator" },
  { name: ".gem-tabs__tab", rule: "tab" },
  { name: ".gem-tabs__tab--selected", rule: "selected" },
  { name: ".gem-tabs__icon", rule: "icon" },
  { name: ".gem-tabs__label", rule: "label" },
  { name: ".gem-tabs__panel", rule: "panel" },
  { name: ".gem-tabs__panel--active", rule: "active" },
] as const;

export const tabsCssVariables = [
  "--gem-tabs-fg",
  "--gem-tabs-muted",
  "--gem-tabs-indicator",
  "--gem-tabs-selected",
  "--gem-tabs-track",
  "--gem-tabs-surface",
  "--gem-tabs-bg",
] as const;

export const tabsTokens = [
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-primary-600",
  "--gem-color-primary-700",
  "--gem-color-border",
  "--gem-color-bg-subtle",
  "--gem-color-bg",
  "--gem-space-2",
  "--gem-space-4",
  "--gem-radius-sm",
  "--gem-radius-md",
  "--gem-radius-full",
  "--gem-shadow-sm",
  "--gem-shadow-focus",
  "--gem-font-sans",
] as const;
