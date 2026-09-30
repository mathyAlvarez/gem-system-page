import type { AlertStatus } from "@gem-org/gem-system";

export const ALERT_STATUSES = ["info", "success", "warning", "error"] as const satisfies readonly AlertStatus[];
export const ALERT_VARIANTS = ["soft", "solid", "outline"] as const;
export const ALERT_SIZES = ["sm", "md", "lg"] as const;
export const ALERT_RADII = ["sm", "md", "lg"] as const;

export type AlertCopy = Record<AlertStatus, { title: string; description: string }>;
