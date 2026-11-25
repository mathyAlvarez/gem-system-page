import { Timeline } from "@gem-org/gem-system";
import { orderItems, type OrderCopy } from "./demo.ts";
import "./timeline-demo.css";

export function EndTimeline({ order }: { order: OrderCopy }) {
  return (
    <div className="timeline-demo">
      <Timeline
        align="end"
        listLabel={order.listLabel}
        items={orderItems(order, ["placed", "paid", "packed"])}
      />
    </div>
  );
}
