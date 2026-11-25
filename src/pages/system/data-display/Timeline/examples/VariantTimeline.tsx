import { Timeline, type TimelineProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { orderItems, type OrderCopy } from "./demo.ts";
import "./timeline-demo.css";

const timelineVariants = cva("", {
  variants: {
    density: {
      comfortable: "",
      compact: "[--gem-timeline-body-pad:0_0_var(--gem-space-2)]",
    },
    rail: {
      solid: "",
      dashed:
        "[&_.gem-timeline__connector]:bg-transparent [&_.gem-timeline__connector]:border-l-2 [&_.gem-timeline__connector]:border-dashed [&_.gem-timeline__connector]:border-(--gem-color-border)",
    },
  },
  defaultVariants: { density: "comfortable", rail: "solid" },
});

type HistoryTimelineProps = TimelineProps & VariantProps<typeof timelineVariants>;

export function HistoryTimeline({ density, rail, className, ...props }: HistoryTimelineProps) {
  return <Timeline className={cn(timelineVariants({ density, rail }), className)} {...props} />;
}

export function VariantTimeline({ order }: { order: OrderCopy }) {
  const items = orderItems(order, ["placed", "paid", "packed"]);

  return (
    <div className="timeline-demo">
      <HistoryTimeline rail="dashed" listLabel={order.listLabel} items={items} />
      <HistoryTimeline density="compact" size="sm" listLabel={order.listLabel} items={items} />
    </div>
  );
}
