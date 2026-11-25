import type { BlurUnveilTrigger, BlurUnveilVariant } from "@gem-org/gemffects/blur-unveil";

export const UNVEIL_VARIANTS = [
  "in",
  "out",
  "pulse",
] as const satisfies readonly BlurUnveilVariant[];

export const UNVEIL_TRIGGERS = [
  "always",
  "hover",
  "click",
] as const satisfies readonly BlurUnveilTrigger[];

/** `pulse` needs a longer cycle than the 700ms default. */
export const UNVEIL_PULSE_DURATION = 1800;

export const UNVEIL_IMAGE = "/gem-org-favicon.png";
