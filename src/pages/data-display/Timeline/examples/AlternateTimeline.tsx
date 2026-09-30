import { Timeline } from "@gem-org/gem-system";
import { orderItems, type OrderCopy } from "./demo.ts";
import "./timeline-demo.css";

export function AlternateTimeline({ order }: { order: OrderCopy }) {
  return (
    <div className="timeline-demo timeline-demo--wide">
      <Timeline align="alternate" listLabel={order.listLabel} items={orderItems(order)} />
    </div>
  );
}
