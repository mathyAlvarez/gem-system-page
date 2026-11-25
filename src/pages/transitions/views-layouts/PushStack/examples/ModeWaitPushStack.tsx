import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PushStack } from "@gem-org/gemsitions/push-stack";
import { PUSH_STACK_STEPS } from "./demo.ts";
import "./push-stack-demo.css";

type ModeWaitPushStackProps = {
  back: string;
  next: string;
  copies: Record<(typeof PUSH_STACK_STEPS)[number], string>;
};

export function ModeWaitPushStack({ back, next, copies }: ModeWaitPushStackProps) {
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
        mode="wait"
        index={step}
        viewKey={label}
        pagination={3}
        duration={{ enter: 300, exit: 240 }}
        onPagination={setStep}
      >
        <div className="push-stack-demo__panel">
          {label}
          <span className="push-stack-demo__copy">{copies[label]}</span>
        </div>
      </PushStack>
    </div>
  );
}
