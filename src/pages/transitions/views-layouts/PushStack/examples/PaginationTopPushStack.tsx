import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PushStack } from "@gem-org/gemsitions/push-stack";
import { PUSH_STACK_STEPS } from "./demo.ts";
import "./push-stack-demo.css";

type PaginationTopPushStackProps = {
  back: string;
  next: string;
  copies: Record<(typeof PUSH_STACK_STEPS)[number], string>;
};

export function PaginationTopPushStack({ back, next, copies }: PaginationTopPushStackProps) {
  const [step, setStep] = useState(0);
  const last = PUSH_STACK_STEPS.length - 1;
  const label = PUSH_STACK_STEPS[Math.min(Math.max(step, 0), last)];

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
        index={step}
        viewKey={label}
        pagination={{ count: 3, placement: "inside-start" }}
        onPagination={setStep}
      >
        <div className="push-stack-demo__panel push-stack-demo__panel--overlay-start">
          {label}
          <span className="push-stack-demo__copy">{copies[label]}</span>
        </div>
      </PushStack>
    </div>
  );
}
