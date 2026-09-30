import type { DropdownMenuPlacement, DropdownMenuSize } from "@gem-org/gem-system";

export const dropdownMenuSizes: DropdownMenuSize[] = ["sm", "md", "lg"];
export const dropdownMenuPlacements: DropdownMenuPlacement[] = [
  "bottom-start",
  "bottom",
  "bottom-end",
  "top-start",
  "top",
  "top-end",
];

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const dropdownMenuProps = [
  { name: "items", type: "DropdownMenuItem[]", defaultValue: "—" },
  { name: "trigger", type: "ReactElement", defaultValue: "—" },
  { name: "menuLabel", type: "string", defaultValue: '"Actions"' },
  { name: "size", type: union(dropdownMenuSizes), defaultValue: '"md"' },
  { name: "placement", type: "DropdownMenuPlacement", defaultValue: '"bottom-start"' },
  { name: "offset", type: "number", defaultValue: "6" },
  { name: "matchTriggerWidth", type: "boolean", defaultValue: "false" },
  { name: "isDisabled", type: "boolean", defaultValue: "false" },
  { name: "open", type: "boolean", defaultValue: "—" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "DropdownMenuClassNames", defaultValue: "—" },
  { name: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
  { name: "onAction", type: "DropdownMenuActionHandler", defaultValue: "—" },
  { name: "onCheckedChange", type: "DropdownMenuCheckedHandler", defaultValue: "—" },
  { name: "onRadioChange", type: "DropdownMenuRadioHandler", defaultValue: "—" },
] as const;

export const dropdownMenuActionProps = [
  { name: "type", type: '"item"', defaultValue: '"item"' },
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "description", type: "ReactNode", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "shortcut", type: "string", defaultValue: "—" },
  { name: "href", type: "string", defaultValue: "—" },
  { name: "target", type: "string", defaultValue: "—" },
  { name: "rel", type: "string", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "danger", type: "boolean", defaultValue: "false" },
  { name: "closeOnSelect", type: "boolean", defaultValue: "true" },
  { name: "ariaLabel", type: "string", defaultValue: "—" },
  { name: "onSelect", type: "() => void", defaultValue: "—" },
] as const;

export const dropdownMenuCheckboxProps = [
  { name: "type", type: '"checkbox"', defaultValue: "—" },
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "checked", type: "boolean", defaultValue: "false" },
  { name: "description", type: "ReactNode", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "closeOnSelect", type: "boolean", defaultValue: "false" },
  { name: "ariaLabel", type: "string", defaultValue: "—" },
  { name: "onCheckedChange", type: "(checked: boolean) => void", defaultValue: "—" },
] as const;

export const dropdownMenuRadioProps = [
  { name: "type", type: '"radio-group"', defaultValue: "—" },
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "value", type: "string", defaultValue: "—" },
  { name: "items", type: "DropdownMenuRadioOption[]", defaultValue: "—" },
  { name: "onValueChange", type: "(value: string) => void", defaultValue: "—" },
] as const;

export const dropdownMenuSubmenuProps = [
  { name: "type", type: '"submenu"', defaultValue: "—" },
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "ReactNode", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "items", type: "DropdownMenuItem[]", defaultValue: "—" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "ariaLabel", type: "string", defaultValue: "—" },
] as const;

export const dropdownMenuOtherProps = [
  { name: "separator", type: '{ type: "separator"; id?: string }', defaultValue: "—" },
  { name: "label", type: '{ type: "label"; id?: string; label: ReactNode }', defaultValue: "—" },
] as const;

export const dropdownMenuCssClasses = [
  { name: ".gem-dropdown-menu", rule: "root" },
  { name: ".gem-dropdown-menu__trigger", rule: "trigger" },
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
  { name: ".gem-dropdown-menu__submenu--{start|nested}", rule: "submenuLayout" },
] as const;

export const dropdownMenuTokens = [
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
  "--gem-z-dropdown",
  "--gem-font-sans",
  "--gem-font-mono",
] as const;
