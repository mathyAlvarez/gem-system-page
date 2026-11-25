import type { ComponentType } from "react";
import type commonEs from "../locales/es/common.json";
import type { IconProps } from "@gem-org/gem-system/icons";

export type NavIcon = ComponentType<IconProps>;

export type NavLabelKey = keyof (typeof commonEs)["nav"];

/** `labelKey` is translated from `common.nav`; `label` is shown as-is (component names). */
type NavLabel = { label: string; labelKey?: never } | { labelKey: NavLabelKey; label?: never };

export type NavLeaf = NavLabel & {
  id: string;
  to: string;
  /** Only used by top-level links; nested items render a middle dot. */
  icon?: NavIcon;
};

export type NavGroup = NavLabel & {
  id: string;
  items: NavLeaf[];
};

export type NavEntry = NavLeaf | NavGroup;

export type ComponentRoute = {
  path: string;
  label: string;
  /** Exported component name when it differs from the label. */
  component?: string;
};

export type DocsRouteGroup = {
  base: string;
  routes: readonly ComponentRoute[];
};
