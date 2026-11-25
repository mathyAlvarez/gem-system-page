import type { FlashOrigin, FlashTrigger, FlashVariant } from "@gem-org/gemffects/flash";

export const FLASH_VARIANTS = ["burst", "wash", "bloom"] as const satisfies readonly FlashVariant[];

export const FLASH_TRIGGERS = [
  "click",
  "hover",
  "press",
  "always",
] as const satisfies readonly FlashTrigger[];

export const FLASH_ORIGINS = ["center", "pointer"] as const satisfies readonly FlashOrigin[];

/** Host palette tokens; the flash reads whatever color the app already uses. */
export const FLASH_COLORS = {
  primary: "var(--gem-palette-primary-300)",
  secondary: "var(--gem-palette-secondary-400)",
  tertiary: "var(--gem-palette-tertiary-300)",
} as const;
