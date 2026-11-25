import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PushStack } from "@gem-org/gemsitions/push-stack";
import { PUSH_STACK_STEPS } from "./demo.ts";
import "./push-stack-demo.css";

type SwipePushStackProps = {
  back: string;
  next: string;
  sibling: string;
  copies: Record<(typeof PUSH_STACK_STEPS)[number], string>;
};

export function SwipePushStack({ back, next, sibling, copies }: SwipePushStackProps) {
  const [step, setStep] = useState(0);
  const last = PUSH_STACK_STEPS.length - 1;
  const label = PUSH_STACK_STEPS[Math.min(Math.max(step, 0), last)];
  const views = PUSH_STACK_STEPS.map((item) => (
    <div key={item} className="push-stack-demo__panel push-stack-demo__panel--overlay">
      {item}
      <span className="push-stack-demo__copy">{copies[item]}</span>
    </div>
  ));

  return (
    <div className="push-stack-demo">
      <div className="push-stack-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          disabled={step <= 0}
          onClick={() => setStep((v) => Math.max(0, v - 1))}
        >
          {back}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          disabled={step >= last}
          onClick={() => setStep((v) => Math.min(last, v + 1))}
        >
          {next}
        </Button>
      </div>
      <PushStack
        swipe
        index={step}
        viewKey={label}
        views={views}
        pagination={{ count: 3, placement: "inside-end" }}
        onPagination={setStep}
      />
      <p className="push-stack-demo__sibling">{sibling}</p>
    </div>
  );
}
