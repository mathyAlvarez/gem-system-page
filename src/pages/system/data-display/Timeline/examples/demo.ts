import type { TimelineItem, TimelineTone } from "@gem-org/gem-system";

export const TIMELINE_SIZES = ["sm", "md", "lg"] as const;
export const TIMELINE_ALIGNS = ["start", "end", "alternate"] as const;
export const TIMELINE_TONES = [
  "neutral",
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
] as const;

export const ORDER_STEPS = ["placed", "paid", "packed", "shipped", "delivered"] as const;

export type OrderStep = (typeof ORDER_STEPS)[number];

export type EventCopy = { title: string; description: string; time: string };

export type OrderCopy = { listLabel: string; steps: Record<OrderStep, EventCopy> };

const ORDER_TONES: Record<OrderStep, TimelineTone> = {
  placed: "info",
  paid: "success",
  packed: "primary",
  shipped: "secondary",
  delivered: "success",
};

export function orderItems(
  copy: OrderCopy,
  steps: readonly OrderStep[] = ORDER_STEPS,
): TimelineItem[] {
  return steps.map((id) => ({ id, ...copy.steps[id], tone: ORDER_TONES[id] }));
}
