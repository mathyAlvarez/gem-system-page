import { Timeline } from "@gem-org/gem-system";
import { orderItems, type OrderCopy } from "./demo.ts";
import "./timeline-demo.css";

export function TailwindTimeline({ order }: { order: OrderCopy }) {
  return (
    <div className="timeline-demo">
      <Timeline
        listLabel={order.listLabel}
        items={orderItems(order, ["placed", "paid", "packed", "shipped"])}
        className="[--gem-timeline-dot:0.875rem] [--gem-timeline-line:var(--gem-color-primary-200)]"
        classNames={{
          marker: "shadow-none",
          title: "uppercase tracking-wide text-xs",
          time: "font-mono text-(--gem-color-primary-700)",
          description: "text-sm",
        }}
      />
    </div>
  );
}
