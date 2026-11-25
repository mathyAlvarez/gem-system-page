import type { EasingToken } from "@gem-org/gemffects/tokens";

export const easingOrder = [
  "standard",
  "enter",
  "exit",
  "emphasized",
  "linear",
] as const satisfies readonly EasingToken[];
