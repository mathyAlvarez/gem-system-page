import type { SpotlightTrigger, SpotlightVariant } from "@gem-org/gemffects/spotlight";

export const SPOTLIGHT_VARIANTS = [
  "reveal",
  "glow",
  "ring",
] as const satisfies readonly SpotlightVariant[];

export const SPOTLIGHT_TRIGGERS = [
  "hover",
  "always",
  "press",
] as const satisfies readonly SpotlightTrigger[];

/** Host palette tokens; the beam reads whatever color the app already uses. */
export const SPOTLIGHT_COLORS = {
  primary: "var(--gem-palette-primary-300)",
  secondary: "var(--gem-palette-secondary-400)",
  tertiary: "var(--gem-palette-tertiary-400)",
} as const;
