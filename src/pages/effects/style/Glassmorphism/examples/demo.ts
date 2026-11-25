import type { GlassmorphismTrigger, GlassmorphismVariant } from "@gem-org/gemffects/glassmorphism";

export const GLASS_VARIANTS = [
  "frost",
  "clear",
  "tinted",
  "heavy",
  "sheen",
] as const satisfies readonly GlassmorphismVariant[];

export const GLASS_TRIGGERS = [
  "always",
  "hover",
  "click",
] as const satisfies readonly GlassmorphismTrigger[];

export const GLASS_COLORS = {
  primary: "var(--gem-palette-primary-400)",
  secondary: "var(--gem-palette-secondary-400)",
  tertiary: "var(--gem-palette-tertiary-400)",
} as const;

export const GLASS_SCENE_SRC = "/gem-org-favicon.png";
