import type { FloatTrigger, FloatVariant } from "@gem-org/gemffects/float";

export const FLOAT_VARIANTS = [
  "bob",
  "sway",
  "drift",
  "lift",
  "idle",
  "figure8",
  "pendulum",
  "orbit",
] as const satisfies readonly FloatVariant[];

export const FLOAT_TRIGGERS = [
  "always",
  "hover",
  "click",
] as const satisfies readonly FloatTrigger[];

/** Durations the source stories use per variant, so slow paths don't look rushed. */
export const FLOAT_VARIANT_DURATIONS: Partial<Record<FloatVariant, number>> = {
  idle: 3600,
  figure8: 4200,
  pendulum: 3200,
  orbit: 4000,
};
