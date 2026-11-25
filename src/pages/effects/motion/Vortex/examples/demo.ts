import type { VortexTrigger, VortexVariant } from "@gem-org/gemffects/vortex";

export const VORTEX_VARIANTS = [
  "swirl",
  "warp",
  "ring",
] as const satisfies readonly VortexVariant[];

export const VORTEX_TRIGGERS = [
  "always",
  "hover",
  "click",
] as const satisfies readonly VortexTrigger[];

export const VORTEX_COLORS = {
  secondary: "var(--gem-palette-secondary-400)",
  tertiary: "var(--gem-palette-tertiary-400)",
  warning: "var(--gem-palette-warning-400)",
} as const;
