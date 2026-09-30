import { Timeline } from "@gem-org/gem-system";
import { orderItems, type OrderCopy } from "./demo.ts";
import "./timeline-demo.css";
import "./timeline-overrides.css";

export function StyledTimeline({ order }: { order: OrderCopy }) {
  return (
    <div className="timeline-demo">
      <Timeline
        className="timeline-branded"
        listLabel={order.listLabel}
        items={orderItems(order, ["placed", "paid", "packed"])}
      />
    </div>
  );
}
