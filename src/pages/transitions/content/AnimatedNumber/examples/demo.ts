export const NUMBER_EFFECTS = ["count", "fade", "up", "down"] as const;
export const NUMBER_EASINGS = [
  "default",
  "standard",
  "enter",
  "exit",
  "emphasized",
  "linear",
] as const;
export const NUMBER_DURATIONS = ["300", "500", "900"] as const;
export const NUMBER_DELAYS = ["0", "150", "400"] as const;
export const NUMBER_ROUNDS = ["auto", "0", "2"] as const;
export const NUMBER_FORMATS = {
  plain: undefined,
  currency: { style: "currency", currency: "USD" },
  compact: { notation: "compact", maximumFractionDigits: 1 },
} as const satisfies Record<string, Intl.NumberFormatOptions | undefined>;

/** Adds `delta` keeping the decimals of the step, so `0.1 + 0.2` stays `0.3`. */
export function shiftBy(current: number, delta: number) {
  const decimals = (String(Math.abs(delta)).split(".")[1] ?? "").length;
  return Number((current + delta).toFixed(decimals));
}
