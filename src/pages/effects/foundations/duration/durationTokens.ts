import type { DurationToken } from "@gem-org/gemffects/tokens";

export const durationOrder = [
  "instant",
  "fastest",
  "fast",
  "normal",
  "moderate",
  "slow",
  "slower",
] as const satisfies readonly DurationToken[];
