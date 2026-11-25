import type { Tilt3DTrigger } from "@gem-org/gemffects/tilt-3d";

export const TILT_TRIGGERS = ["hover", "press"] as const satisfies readonly Tilt3DTrigger[];

/** Host palette tokens; the glare reads whatever color the app already uses. */
export const TILT_GLARE_COLORS = {
  primary: "var(--gem-palette-primary-300)",
  tertiary: "var(--gem-palette-tertiary-300)",
} as const;
