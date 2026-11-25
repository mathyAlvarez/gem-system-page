import type { PulseScaleTrigger, PulseScaleVariant } from "@gem-org/gemffects/pulse-scale";

export const PULSE_VARIANTS = [
  "heartbeat",
  "breathe",
  "pop",
  "ping",
] as const satisfies readonly PulseScaleVariant[];

export const PULSE_TRIGGERS = [
  "always",
  "hover",
  "click",
] as const satisfies readonly PulseScaleTrigger[];

/** Durations the source stories use per variant. */
export const PULSE_VARIANT_DURATIONS: Partial<Record<PulseScaleVariant, number>> = {
  breathe: 1800,
  pop: 1600,
  ping: 1600,
};
