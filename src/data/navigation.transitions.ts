import { Home } from "@gem-org/gem-system/icons";
import { productPath } from "./products.ts";
import type { ComponentRoute, DocsRouteGroup, NavEntry, NavLeaf } from "./navigation.types.ts";

const PRODUCT = "transitions" as const;

export const contentRoutes: ComponentRoute[] = [
  { path: "animated-number", label: "AnimatedNumber" },
  { path: "text-morph", label: "TextMorph" },
];

export const morphingLayoutRoutes: ComponentRoute[] = [
  { path: "auto-animate-container", label: "AutoAnimateContainer" },
  { path: "shared-layout", label: "SharedLayout" },
];

export const mountUnmountRoutes: ComponentRoute[] = [
  { path: "collapse-transition", label: "CollapseTransition" },
  { path: "fade-transition", label: "FadeTransition" },
  { path: "scale-transition", label: "ScaleTransition" },
  { path: "slide-transition", label: "SlideTransition" },
];

export const viewsLayoutsRoutes: ComponentRoute[] = [
  { path: "cross-fade-view", label: "CrossFadeView" },
  { path: "push-stack", label: "PushStack" },
  { path: "view-transition", label: "ViewTransition" },
];

export const listsSequencesRoutes: ComponentRoute[] = [
  { path: "flip-list", label: "FlipList" },
  { path: "stagger-group", label: "StaggerGroup" },
  { path: "swipe-to-dismiss", label: "SwipeToDismiss" },
];

export const transitionsRouteGroups: DocsRouteGroup[] = [
  { base: "content", routes: contentRoutes },
  { base: "morphing-layout", routes: morphingLayoutRoutes },
  { base: "mount-unmount", routes: mountUnmountRoutes },
  { base: "views-layouts", routes: viewsLayoutsRoutes },
  { base: "lists-sequences", routes: listsSequencesRoutes },
];

const toNavItems = (base: string, routes: ComponentRoute[]): NavLeaf[] =>
  routes.map((route) => ({
    id: `${base}-${route.path}`,
    label: route.label,
    to: productPath(PRODUCT, base, route.path),
  }));

export const TRANSITIONS_API_NAV_ID = "transitions-api";

const apiNavItems: NavLeaf[] = transitionsRouteGroups
  .flatMap(({ base, routes }) =>
    routes.map((route) => ({
      id: `api-${base}-${route.path}`,
      label: route.component ?? route.label,
      to: productPath(PRODUCT, base, route.path, "api"),
    })),
  )
  .sort((a, b) => a.label.localeCompare(b.label, "en"));

export const transitionsNavigation: NavEntry[] = [
  {
    id: "getting-started",
    labelKey: "gettingStarted",
    to: productPath(PRODUCT, "getting-started"),
    icon: Home,
  },
  { id: "content", labelKey: "content", items: toNavItems("content", contentRoutes) },
  {
    id: "morphing-layout",
    labelKey: "morphingLayout",
    items: toNavItems("morphing-layout", morphingLayoutRoutes),
  },
  {
    id: "mount-unmount",
    labelKey: "mountUnmount",
    items: toNavItems("mount-unmount", mountUnmountRoutes),
  },
  {
    id: "views-layouts",
    labelKey: "viewsLayouts",
    items: toNavItems("views-layouts", viewsLayoutsRoutes),
  },
  {
    id: "lists-sequences",
    labelKey: "listsSequences",
    items: toNavItems("lists-sequences", listsSequencesRoutes),
  },
  { id: TRANSITIONS_API_NAV_ID, labelKey: "transitionsApi", items: apiNavItems },
];
