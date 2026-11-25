import type { GlitchTrigger, GlitchVariant } from "@gem-org/gemffects/glitch";

export const GLITCH_VARIANTS = [
  "cyber",
  "rgb",
  "slice",
  "noise",
] as const satisfies readonly GlitchVariant[];

export const GLITCH_TRIGGERS = [
  "always",
  "hover",
  "click",
] as const satisfies readonly GlitchTrigger[];

export const GLITCH_IMAGE_SRC = "/gem-org-favicon.png";
