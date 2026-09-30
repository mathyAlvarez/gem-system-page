import { Timeline } from "@gem-org/gem-system";
import { TIMELINE_SIZES, orderItems, type OrderCopy } from "./demo.ts";
import "./timeline-demo.css";

export function SizesTimeline({ order, label }: { order: OrderCopy; label: string }) {
  return (
    <div className="timeline-demo">
      {TIMELINE_SIZES.map((size) => {
        const name = label.replace("{size}", size);
        return (
          <div key={size}>
            <p className="timeline-demo__label">{name}</p>
            <Timeline size={size} listLabel={name} items={orderItems(order, ["placed", "paid", "packed"])} />
          </div>
        );
      })}
    </div>
  );
}
