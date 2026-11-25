import type { HoloFoilBlend, HoloFoilTrigger, HoloFoilVariant } from "@gem-org/gemffects/holo-foil";

export const FOIL_VARIANTS = [
  "rainbow",
  "iridescent",
  "sparkle",
] as const satisfies readonly HoloFoilVariant[];

export const FOIL_BLENDS = [
  "color-dodge",
  "overlay",
  "soft-light",
  "screen",
] as const satisfies readonly HoloFoilBlend[];

export const FOIL_TRIGGERS = ["hover", "always"] as const satisfies readonly HoloFoilTrigger[];

export const FOIL_IMAGE_SRC = "/gem-org-favicon.png";
