export const STATISTIC_CARD_TONES = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
] as const;
export const STATISTIC_CARD_SIZES = ["sm", "md", "lg"] as const;
export const STATISTIC_CARD_SHADOWS = ["none", "xs", "sm", "md", "lg", "xl"] as const;
export const STATISTIC_CARD_LAYOUTS = ["stacked", "inline"] as const;
export const STATISTIC_CARD_TRENDS = ["up", "down", "neutral"] as const;
export const STATISTIC_CARD_RADII = ["sm", "md", "lg"] as const;

export type Separators = { groupSeparator: string; decimalSeparator: string };

export type MetricCopy = {
  title: string;
  description?: string;
  trendValue?: string;
  trendLabel?: string;
};
