import type { ContextMenuSize } from "@gem-org/gem-system";

export const contextMenuSizes: ContextMenuSize[] = ["sm", "md", "lg"];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const contextMenuProps = [
  { name: "items", type: "ContextMenuItem[]", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "menuLabel", type: "string", defaultValue: '"Actions"' },
  { name: "size", type: union(contextMenuSizes), defaultValue: '"md"' },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "closeOnLeave", type: "boolean", defaultValue: "true" },
  { name: "longPressMs", type: "number | false", defaultValue: "500" },
  { name: "open", type: "boolean", defaultValue: "—" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "ContextMenuClassNames", defaultValue: "—" },
  { name: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
  { name: "onAction", type: "ContextMenuActionHandler", defaultValue: "—" },
  { name: "onCheckedChange", type: "ContextMenuCheckedHandler", defaultValue: "—" },
  { name: "onRadioChange", type: "ContextMenuRadioHandler", defaultValue: "—" },
] as const;

export const contextMenuCssClasses = [
  { name: ".gem-context-menu", rule: "root" },
  { name: ".gem-dropdown-menu__panel", rule: "panel" },
  { name: ".gem-dropdown-menu__panel--ready", rule: "ready" },
  { name: ".gem-dropdown-menu--{size}", rule: "size" },
  { name: ".gem-dropdown-menu__item", rule: "item" },
  { name: ".gem-dropdown-menu__item--active", rule: "active" },
  { name: ".gem-dropdown-menu__item--disabled", rule: "disabled" },
  { name: ".gem-dropdown-menu__item--danger", rule: "danger" },
  { name: ".gem-dropdown-menu__icon", rule: "icon" },
  { name: ".gem-dropdown-menu__label-text", rule: "labelText" },
  { name: ".gem-dropdown-menu__description", rule: "description" },
  { name: ".gem-dropdown-menu__shortcut", rule: "shortcut" },
  { name: ".gem-dropdown-menu__check", rule: "check" },
  { name: ".gem-dropdown-menu__chevron", rule: "chevron" },
  { name: ".gem-dropdown-menu__section", rule: "section" },
  { name: ".gem-dropdown-menu__separator", rule: "separator" },
  { name: ".gem-dropdown-menu__submenu", rule: "submenu" },
] as const;

export const contextMenuTokens = [
  "--gem-color-bg",
  "--gem-color-bg-subtle",
  "--gem-color-border",
  "--gem-color-fg",
  "--gem-color-fg-muted",
  "--gem-color-primary-600",
  "--gem-color-error-500",
  "--gem-color-error-600",
  "--gem-radius-sm",
  "--gem-radius-md",
  "--gem-shadow-lg",
  "--gem-shadow-focus",
  "--gem-z-dropdown",
  "--gem-font-sans",
  "--gem-font-mono",
] as const;
