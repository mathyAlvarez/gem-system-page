import type { FlickerEdge, FlickerTrigger, FlickerVariant } from "@gem-org/gemffects/flicker";

export const FLICKER_VARIANTS = [
  "neon",
  "buzz",
  "strobe",
  "fault",
  "text",
] as const satisfies readonly FlickerVariant[];

export const FLICKER_EDGES = [
  "all",
  "top",
  "right",
  "bottom",
  "left",
  "x",
  "y",
] as const satisfies readonly FlickerEdge[];

export const FLICKER_TRIGGERS = [
  "always",
  "hover",
  "click",
] as const satisfies readonly FlickerTrigger[];

/** Cycles the source stories use per variant. */
export const FLICKER_VARIANT_DURATIONS: Partial<Record<FlickerVariant, number>> = {
  strobe: 900,
  fault: 4200,
};

export const FLICKER_COLORS = {
  secondary: "var(--gem-palette-secondary-400)",
  tertiary: "var(--gem-palette-tertiary-400)",
  error: "var(--gem-palette-error-400)",
} as const;
