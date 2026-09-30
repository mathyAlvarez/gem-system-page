import type { NavbarCollapseBreakpoint, NavbarPosition, NavbarShadow } from "@gem-org/gem-system";

export const navbarPositions: NavbarPosition[] = ["static", "sticky", "fixed"];

export const navbarShadows: NavbarShadow[] = ["none", "sm", "md", "lg"];

export const navbarBreakpoints: NavbarCollapseBreakpoint[] = ["sm", "md", "lg"];

export const navbarBreakpointWidths = [
  { breakpoint: "sm", width: "640px" },
  { breakpoint: "md", width: "768px" },
  { breakpoint: "lg", width: "1024px" },
] as const;

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const navbarProps = [
  { name: "brand", type: "ReactNode", defaultValue: "—" },
  { name: "brandHref", type: "string", defaultValue: "—" },
  { name: "brandLabel", type: "string", defaultValue: "—" },
  { name: "items", type: "NavbarItem[]", defaultValue: "[]" },
  { name: "navLabel", type: "string", defaultValue: '"Primary"' },
  { name: "actions", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "position", type: union(navbarPositions), defaultValue: '"static"' },
  { name: "bordered", type: "boolean", defaultValue: "true" },
  { name: "shadow", type: union(navbarShadows), defaultValue: '"none"' },
  { name: "collapseBreakpoint", type: union(navbarBreakpoints), defaultValue: '"md"' },
  { name: "isOpen", type: "boolean", defaultValue: "—" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false" },
  { name: "menuLabel", type: "string", defaultValue: '"Open menu"' },
  { name: "closeLabel", type: "string", defaultValue: '"Close menu"' },
  { name: "closeOnItemClick", type: "boolean", defaultValue: "true" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "NavbarClassNames", defaultValue: "—" },
  { name: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
] as const;

export const navbarItemProps = [
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "string", defaultValue: "—" },
  { name: "href", type: "string", defaultValue: "—" },
  { name: "current", type: "boolean", defaultValue: "false" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "onClick", type: "() => void", defaultValue: "—" },
] as const;

export const navbarCssClasses = [
  { name: ".gem-navbar", rule: "root" },
  { name: ".gem-navbar--{position}", rule: "position" },
  { name: ".gem-navbar--shadow-{shadow}", rule: "shadow" },
  { name: ".gem-navbar--bordered", rule: "bordered" },
  { name: ".gem-navbar--collapse-{breakpoint}", rule: "collapse" },
  { name: ".gem-navbar--open", rule: "open" },
  { name: ".gem-navbar__inner", rule: "inner" },
  { name: ".gem-navbar__brand", rule: "brand" },
  { name: ".gem-navbar__brand-mark", rule: "brandMark" },
  { name: ".gem-navbar__toggle", rule: "toggle" },
  { name: ".gem-navbar__nav", rule: "nav" },
  { name: ".gem-navbar__list", rule: "list" },
  { name: ".gem-navbar__link", rule: "link" },
  { name: ".gem-navbar__extras", rule: "extras" },
  { name: ".gem-navbar__actions", rule: "actions" },
] as const;

export const navbarCssVariables = ["--gem-navbar-bg", "--gem-navbar-fg", "--gem-navbar-border"] as const;

export const navbarTokens = [
  "--gem-color-bg",
  "--gem-color-fg",
  "--gem-color-border",
  "--gem-color-bg-subtle",
  "--gem-color-primary-500",
  "--gem-color-primary-600",
  "--gem-color-primary-700",
  "--gem-shadow-{sm|md|lg}",
  "--gem-shadow-focus",
  "--gem-z-sticky",
  "--gem-z-fixed",
  "--gem-container-xl",
  "--gem-grid-margin",
] as const;
