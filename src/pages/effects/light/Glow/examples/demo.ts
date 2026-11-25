import type { GlowEdge, GlowTrigger, GlowVariant } from "@gem-org/gemffects/glow";

export const GLOW_VARIANTS = [
  "halo",
  "outline",
  "inner",
  "edge",
  "dual",
  "pulse",
  "text",
] as const satisfies readonly GlowVariant[];

export const GLOW_EDGES = ["top", "right", "bottom", "left"] as const satisfies readonly GlowEdge[];

export const GLOW_TRIGGERS = ["always", "hover", "click"] as const satisfies readonly GlowTrigger[];

/** Host palette tokens; the glow reads whatever color the app already uses. */
export const GLOW_COLORS = {
  primary: "var(--gem-palette-primary-400)",
  secondary: "var(--gem-palette-secondary-400)",
  tertiary: "var(--gem-palette-tertiary-400)",
} as const;
