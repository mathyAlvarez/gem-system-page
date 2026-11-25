import type { BorderBeamTrigger, BorderBeamVariant } from "@gem-org/gemffects/border-beam";

export const BEAM_VARIANTS = [
  "orbit",
  "dual",
  "spark",
  "trace",
  "track",
] as const satisfies readonly BorderBeamVariant[];

export const BEAM_TRIGGERS = [
  "always",
  "hover",
  "click",
] as const satisfies readonly BorderBeamTrigger[];

/** Host palette tokens; the beam reads whatever color the app already uses. */
export const BEAM_COLORS = {
  primary: "var(--gem-palette-primary-400)",
  secondary: "var(--gem-palette-secondary-400)",
  tertiary: "var(--gem-palette-tertiary-400)",
} as const;
