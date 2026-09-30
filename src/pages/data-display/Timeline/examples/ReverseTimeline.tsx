import { Timeline } from "@gem-org/gem-system";
import { orderItems, type OrderCopy } from "./demo.ts";
import "./timeline-demo.css";

export function ReverseTimeline({ order }: { order: OrderCopy }) {
  return (
    <div className="timeline-demo">
      <Timeline reverse listLabel={order.listLabel} items={orderItems(order)} />
    </div>
  );
}
