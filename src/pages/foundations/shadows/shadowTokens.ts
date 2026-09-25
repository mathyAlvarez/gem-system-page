import {
  elevation,
  shadow,
  zIndex,
  type ElevationToken,
  type ShadowToken,
  type ZIndexToken,
} from "@gem-org/gem-system/tokens";

export const shadowOrder: ShadowToken[] = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "inner",
  "focus",
];

export const zIndexOrder: ZIndexToken[] = [
  "base",
  "raised",
  "dropdown",
  "sticky",
  "fixed",
  "overlay",
  "modal",
  "popover",
  "toast",
  "tooltip",
  "max",
];

export const elevationOrder: ElevationToken[] = [
  "flat",
  "raised",
  "card",
  "dropdown",
  "sticky",
  "modal",
  "popover",
  "toast",
  "tooltip",
];

export function elevationZIndexToken(token: ElevationToken): ZIndexToken {
  const value = elevation[token].zIndex;
  return zIndexOrder.find((step) => zIndex[step] === value) ?? "base";
}

/** Shadow step behind an elevation level, so previews can use the theme-aware CSS variable. */
export function elevationShadowToken(token: ElevationToken): ShadowToken {
  const value = elevation[token].shadow;
  return shadowOrder.find((step) => shadow[step] === value) ?? "none";
}
