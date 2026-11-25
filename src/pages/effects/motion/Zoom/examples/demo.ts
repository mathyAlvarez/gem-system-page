import type { ZoomOrigin, ZoomTrigger, ZoomVariant } from "@gem-org/gemffects/zoom";

export const ZOOM_VARIANTS = [
  "in",
  "out",
  "pulse",
  "lens",
] as const satisfies readonly ZoomVariant[];

export const ZOOM_TRIGGERS = ["always", "hover", "click"] as const satisfies readonly ZoomTrigger[];

export const ZOOM_ORIGINS = [
  "center",
  "pointer",
  "top",
  "right",
  "bottom",
  "left",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const satisfies readonly ZoomOrigin[];

/** `pulse` needs a longer cycle than the 280ms transition default. */
export const ZOOM_PULSE_DURATION = 1800;

export const ZOOM_IMAGE = "/gem-org-favicon.png";
