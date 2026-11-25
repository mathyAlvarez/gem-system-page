import type { IntensityToken } from "@gem-org/gemffects/tokens";

export const intensityOrder = ["sm", "md", "lg"] as const satisfies readonly IntensityToken[];

/** Example token map for `mixIntensity` (a blur radius in px). */
export const blurMap = { sm: 8, md: 16, lg: 28 } as const satisfies Record<IntensityToken, number>;

export const intensityHelpers = [
  { name: "intensity", signature: "{ sm: 0.35; md: 0.55; lg: 0.8 }" },
  { name: "intensityCss", signature: '{ sm: "35%"; md: "55%"; lg: "80%" }' },
  { name: "isIntensityToken", signature: "(value: unknown) => value is IntensityToken" },
  { name: "clampIntensityUnit", signature: "(value: number) => number" },
  { name: "intensityUnit", signature: "(value: IntensityInput) => number" },
  { name: "intensityCssValue", signature: "(value: IntensityInput) => string" },
  {
    name: "mixIntensity",
    signature:
      "(map: Record<IntensityToken, number>, value: IntensityInput, at0?: number) => number",
  },
  { name: "intensitySamples", signature: "readonly [0.2, 0.62, 0.95]" },
] as const;
