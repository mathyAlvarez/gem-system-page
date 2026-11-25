import { useState } from "react";
import { Button, Timeline } from "@gem-org/gem-system";
import { ArrowRight, Clock, Refresh } from "@gem-org/gem-system/icons";
import { ORDER_STEPS, orderItems, type OrderCopy, type OrderStep } from "./demo.ts";
import "./timeline-demo.css";

type PendingTimelineProps = {
  order: OrderCopy;
  advance: string;
  restart: string;
  status: string;
  waiting: Record<Exclude<OrderStep, "placed">, string>;
};

export function PendingTimeline({
  order,
  advance,
  restart,
  status,
  waiting,
}: PendingTimelineProps) {
  const [count, setCount] = useState(2);
  const steps = ORDER_STEPS.slice(0, count);
  const next = ORDER_STEPS[count] as Exclude<OrderStep, "placed"> | undefined;
  const last = order.steps[steps[steps.length - 1]];

  return (
    <div className="timeline-demo">
      <div className="timeline-demo__actions">
        <Button
          size="sm"
          rightIcon={<ArrowRight size="sm" />}
          disabled={!next}
          onClick={() => setCount(count + 1)}
        >
          {advance}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          leftIcon={<Refresh size="sm" />}
          onClick={() => setCount(2)}
        >
          {restart}
        </Button>
      </div>
      <p className="timeline-demo__label" aria-live="polite">
        {status.replace("{step}", last.title)}
      </p>
      <Timeline
        listLabel={order.listLabel}
        items={orderItems(order, steps)}
        pending={next ? waiting[next] : undefined}
        pendingDot={<Clock size="sm" />}
      />
    </div>
  );
}
