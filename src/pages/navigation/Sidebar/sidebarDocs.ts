import type { SidebarOverlayBreakpoint, SidebarPosition, SidebarShadow, SidebarSide } from "@gem-org/gem-system";

export const sidebarSides: SidebarSide[] = ["start", "end"];

export const sidebarPositions: SidebarPosition[] = ["static", "sticky", "fixed"];

export const sidebarShadows: SidebarShadow[] = ["none", "sm", "md", "lg"];

export const sidebarOverlayBreakpoints: SidebarOverlayBreakpoint[] = ["sm", "md", "lg", "never"];

export const sidebarBreakpointWidths = [
  { breakpoint: "sm", width: "< 640px" },
  { breakpoint: "md", width: "< 768px" },
  { breakpoint: "lg", width: "< 1024px" },
  { breakpoint: "never", width: "—" },
] as const;

const union = (values: readonly string[]) => values.map((value) => `"${value}"`).join(" | ");

export const sidebarProps = [
  { name: "header", type: "ReactNode", defaultValue: "—" },
  { name: "items", type: "SidebarItem[]", defaultValue: "[]" },
  { name: "navLabel", type: "string", defaultValue: '"Sidebar"' },
  { name: "footer", type: "ReactNode", defaultValue: "—" },
  { name: "children", type: "ReactNode", defaultValue: "—" },
  { name: "side", type: union(sidebarSides), defaultValue: '"start"' },
  { name: "position", type: union(sidebarPositions), defaultValue: '"sticky"' },
  { name: "bordered", type: "boolean", defaultValue: "true" },
  { name: "shadow", type: union(sidebarShadows), defaultValue: '"none"' },
  { name: "collapsible", type: "boolean", defaultValue: "true" },
  { name: "collapsed", type: "boolean", defaultValue: "—" },
  { name: "defaultCollapsed", type: "boolean", defaultValue: "false" },
  { name: "expandLabel", type: "string", defaultValue: '"Expand sidebar"' },
  { name: "collapseLabel", type: "string", defaultValue: '"Collapse sidebar"' },
  { name: "overlayBreakpoint", type: union(sidebarOverlayBreakpoints), defaultValue: '"sm"' },
  { name: "isOpen", type: "boolean", defaultValue: "—" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false" },
  { name: "menuLabel", type: "string", defaultValue: '"Open menu"' },
  { name: "closeLabel", type: "string", defaultValue: '"Close menu"' },
  { name: "closeOnItemClick", type: "boolean", defaultValue: "true" },
  { name: "className", type: "string", defaultValue: "—" },
  { name: "classNames", type: "SidebarClassNames", defaultValue: "—" },
  { name: "onCollapsedChange", type: "(collapsed: boolean) => void", defaultValue: "—" },
  { name: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
] as const;

export const sidebarItemProps = [
  { name: "id", type: "string", defaultValue: "—" },
  { name: "label", type: "string", defaultValue: "—" },
  { name: "href", type: "string", defaultValue: "—" },
  { name: "icon", type: "ReactNode", defaultValue: "—" },
  { name: "current", type: "boolean", defaultValue: "false" },
  { name: "disabled", type: "boolean", defaultValue: "false" },
  { name: "items", type: "SidebarItem[]", defaultValue: "—" },
  { name: "defaultOpen", type: "boolean", defaultValue: "false" },
  { name: "onClick", type: "() => void", defaultValue: "—" },
] as const;

export const sidebarCssClasses = [
  { name: ".gem-sidebar-root", rule: "wrapper" },
  { name: ".gem-sidebar", rule: "root" },
  { name: ".gem-sidebar--{side}", rule: "side" },
  { name: ".gem-sidebar--{position}", rule: "position" },
  { name: ".gem-sidebar--shadow-{shadow}", rule: "shadow" },
  { name: ".gem-sidebar--bordered", rule: "bordered" },
  { name: ".gem-sidebar--collapsed", rule: "collapsed" },
  { name: ".gem-sidebar--overlay", rule: "overlay" },
  { name: ".gem-sidebar--open", rule: "open" },
  { name: ".gem-sidebar__header", rule: "header" },
  { name: ".gem-sidebar__toggle", rule: "toggle" },
  { name: ".gem-sidebar__nav", rule: "nav" },
  { name: ".gem-sidebar__list", rule: "list" },
  { name: ".gem-sidebar__item", rule: "item" },
  { name: ".gem-sidebar__control", rule: "control" },
  { name: ".gem-sidebar__icon", rule: "icon" },
  { name: ".gem-sidebar__fallback", rule: "fallback" },
  { name: ".gem-sidebar__label", rule: "label" },
  { name: ".gem-sidebar__panel", rule: "panel" },
  { name: ".gem-sidebar__extras", rule: "extras" },
  { name: ".gem-sidebar__footer", rule: "footer" },
  { name: ".gem-sidebar__menu", rule: "menu" },
  { name: ".gem-sidebar__backdrop", rule: "backdrop" },
] as const;

export const sidebarCssVariables = [
  "--gem-sidebar-bg",
  "--gem-sidebar-fg",
  "--gem-sidebar-border",
  "--gem-sidebar-width",
  "--gem-sidebar-width-collapsed",
  "--gem-sidebar-scrollbar-size",
  "--gem-sidebar-scrollbar-thumb",
  "--gem-sidebar-scrollbar-thumb-hover",
  "--gem-sidebar-scrollbar-track",
] as const;

export const sidebarTokens = [
  "--gem-color-bg",
  "--gem-color-fg",
  "--gem-color-border",
  "--gem-color-bg-subtle",
  "--gem-color-primary-500",
  "--gem-color-primary-700",
  "--gem-radius-md",
  "--gem-shadow-{sm|md|lg}",
  "--gem-shadow-xl",
  "--gem-shadow-focus",
  "--gem-z-fixed",
  "--gem-z-overlay",
  "--gem-z-modal",
] as const;
