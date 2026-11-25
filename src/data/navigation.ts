import { Home } from "@gem-org/gem-system/icons";
import { productPath, type ProductId } from "./products.ts";
import { effectsNavigation, effectsRouteGroups } from "./navigation.effects.ts";
import { transitionsNavigation, transitionsRouteGroups } from "./navigation.transitions.ts";
import type { ComponentRoute, DocsRouteGroup, NavEntry, NavLeaf } from "./navigation.types.ts";

export type {
  ComponentRoute,
  DocsRouteGroup,
  NavEntry,
  NavGroup,
  NavIcon,
  NavLabelKey,
  NavLeaf,
} from "./navigation.types.ts";

export const componentRoutes: ComponentRoute[] = [
  { path: "button", label: "Button" },
  { path: "checkbox", label: "Checkbox" },
  { path: "combobox", label: "Combobox" },
  { path: "date-picker", label: "DatePicker" },
  { path: "file-uploader", label: "FileUploader" },
  { path: "input-mask", label: "InputMask" },
  { path: "input-number", label: "InputNumber" },
  { path: "input-password", label: "InputPassword" },
  { path: "input-search", label: "InputSearch" },
  { path: "input-text", label: "InputText" },
  { path: "otp-input", label: "OtpInput" },
  { path: "radio", label: "Radio" },
  { path: "radio-group", label: "Radio Group", component: "RadioGroup" },
  { path: "select", label: "Select" },
  { path: "slider", label: "Slider" },
  { path: "switch", label: "Switch" },
  { path: "textarea", label: "Textarea" },
  { path: "tooltip", label: "Tooltip" },
];

export const layoutRoutes: ComponentRoute[] = [
  { path: "container", label: "Container" },
  { path: "grid", label: "Grid" },
  { path: "flex", label: "Flex" },
  { path: "aspect-ratio", label: "Aspect Ratio", component: "AspectRatio" },
  {
    path: "resizable-panels",
    label: "Resizable Panels",
    component: "ResizablePanels",
  },
  { path: "scroll-area", label: "Scroll Area", component: "ScrollArea" },
];

export const navigationRoutes: ComponentRoute[] = [
  { path: "navbar", label: "Navbar" },
  { path: "sidebar", label: "Sidebar" },
  { path: "breadcrumbs", label: "Breadcrumbs" },
  { path: "tabs", label: "Tabs" },
  { path: "pagination", label: "Pagination" },
  { path: "link", label: "Link" },
  { path: "dropdown-menu", label: "Dropdown Menu", component: "DropdownMenu" },
  { path: "block-ui", label: "BlockUi" },
  {
    path: "command-palette",
    label: "Command Palette",
    component: "CommandPalette",
  },
  { path: "context-menu", label: "Context Menu", component: "ContextMenu" },
  { path: "fab", label: "FAB", component: "Fab" },
  { path: "stepper", label: "Stepper" },
];

export const feedbackRoutes: ComponentRoute[] = [
  { path: "modal", label: "Modal" },
  { path: "drawer", label: "Drawer" },
  { path: "alert", label: "Alert" },
  { path: "badge", label: "Badge" },
  { path: "copy-to-clipboard", label: "CopyToClipboard" },
  { path: "popconfirm", label: "Popconfirm" },
  { path: "progress-bar", label: "Progress Bar", component: "ProgressBar" },
  { path: "skeleton", label: "Skeleton" },
  { path: "spinner", label: "Spinner" },
  { path: "toast", label: "Toast" },
];

export const dataDisplayRoutes: ComponentRoute[] = [
  { path: "card", label: "Card" },
  { path: "accordion", label: "Accordion" },
  { path: "avatar", label: "Avatar" },
  { path: "divider", label: "Divider" },
  { path: "empty-state", label: "Empty State", component: "EmptyState" },
  { path: "indicator", label: "Indicator" },
  { path: "list", label: "List" },
  { path: "property-list", label: "Property List", component: "PropertyList" },
  { path: "shine", label: "Shine" },
  { path: "statistic-card", label: "Statistic Card", component: "StatisticCard" },
  { path: "table", label: "Table" },
  { path: "timeline", label: "Timeline" },
  { path: "transition", label: "Transition" },
  { path: "tree-view", label: "Tree View", component: "TreeView" },
];

const SYSTEM = "system" as const;

export const systemRouteGroups: DocsRouteGroup[] = [
  { base: "components", routes: componentRoutes },
  { base: "layout", routes: layoutRoutes },
  { base: "navigation", routes: navigationRoutes },
  { base: "feedback", routes: feedbackRoutes },
  { base: "data-display", routes: dataDisplayRoutes },
];

/** @deprecated Prefer `systemRouteGroups` or `routeGroupsFor(product)`. */
export const docsRouteGroups = systemRouteGroups;

const toNavItems = (base: string, routes: ComponentRoute[]): NavLeaf[] =>
  routes.map((route) => ({
    id: `${base}-${route.path}`,
    label: route.label,
    to: productPath(SYSTEM, base, route.path),
  }));

export const API_NAV_ID = "components-api";

const apiNavItems: NavLeaf[] = systemRouteGroups
  .flatMap(({ base, routes }) =>
    routes.map((route) => ({
      id: `api-${base}-${route.path}`,
      label: route.component ?? route.label,
      to: productPath(SYSTEM, base, route.path, "api"),
    })),
  )
  .sort((a, b) => a.label.localeCompare(b.label, "en"));

export const systemNavigation: NavEntry[] = [
  {
    id: "getting-started",
    labelKey: "gettingStarted",
    to: productPath(SYSTEM, "getting-started"),
    icon: Home,
  },
  {
    id: "override-styles",
    labelKey: "overrideStyles",
    items: [
      {
        id: "override-overview",
        labelKey: "overrideOverview",
        to: productPath(SYSTEM, "override-styles"),
      },
      {
        id: "override-tailwind",
        labelKey: "overrideTailwind",
        to: productPath(SYSTEM, "override-styles", "tailwind"),
      },
      {
        id: "override-cva",
        labelKey: "overrideCva",
        to: productPath(SYSTEM, "override-styles", "cva"),
      },
      {
        id: "override-css-variables",
        labelKey: "overrideCssVariables",
        to: productPath(SYSTEM, "override-styles", "css-variables"),
      },
    ],
  },
  {
    id: "foundations-docs",
    labelKey: "foundations",
    items: [
      {
        id: "typography",
        labelKey: "typography",
        to: productPath(SYSTEM, "foundations", "typography"),
      },
      { id: "tokens", labelKey: "tokens", to: productPath(SYSTEM, "foundations", "tokens") },
      { id: "icons", labelKey: "icons", to: productPath(SYSTEM, "foundations", "icons") },
      { id: "radii", labelKey: "radii", to: productPath(SYSTEM, "foundations", "radii") },
      { id: "shadows", labelKey: "shadows", to: productPath(SYSTEM, "foundations", "shadows") },
      { id: "spacing", labelKey: "spacing", to: productPath(SYSTEM, "foundations", "spacing") },
    ],
  },
  {
    id: "components",
    labelKey: "components",
    items: toNavItems("components", componentRoutes),
  },
  {
    id: "layout",
    labelKey: "layout",
    items: toNavItems("layout", layoutRoutes),
  },
  {
    id: "navigation",
    labelKey: "navigation",
    items: toNavItems("navigation", navigationRoutes),
  },
  {
    id: "feedback",
    labelKey: "feedback",
    items: toNavItems("feedback", feedbackRoutes),
  },
  {
    id: "data-display",
    labelKey: "dataDisplay",
    items: toNavItems("data-display", dataDisplayRoutes),
  },
  {
    id: API_NAV_ID,
    labelKey: "componentsApi",
    items: apiNavItems,
  },
];

/** @deprecated Prefer `systemNavigation` or `navigationFor(product)`. */
export const navigation = systemNavigation;

export function navigationFor(product: ProductId): NavEntry[] {
  switch (product) {
    case "system":
      return systemNavigation;
    case "effects":
      return effectsNavigation;
    case "transitions":
      return transitionsNavigation;
  }
}

export function routeGroupsFor(product: ProductId): readonly DocsRouteGroup[] {
  switch (product) {
    case "system":
      return systemRouteGroups;
    case "effects":
      return effectsRouteGroups;
    case "transitions":
      return transitionsRouteGroups;
  }
}

export function apiNavIdFor(product: ProductId): string {
  switch (product) {
    case "system":
      return API_NAV_ID;
    case "effects":
      return "effects-api";
    case "transitions":
      return "transitions-api";
  }
}
