import type { MagneticAxis, MagneticTrigger } from "@gem-org/gemffects/magnetic";

export const MAGNETIC_TRIGGERS = [
  "hover",
  "press",
  "proximity",
] as const satisfies readonly MagneticTrigger[];

export const MAGNETIC_AXES = ["both", "x", "y"] as const satisfies readonly MagneticAxis[];
