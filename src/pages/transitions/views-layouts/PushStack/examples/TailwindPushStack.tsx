import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PushStack } from "@gem-org/gemsitions/push-stack";
import { PUSH_STACK_STEPS } from "./demo.ts";
import "./push-stack-demo.css";

type TailwindPushStackProps = {
  back: string;
  next: string;
  copies: Record<(typeof PUSH_STACK_STEPS)[number], string>;
};

export function TailwindPushStack({ back, next, copies }: TailwindPushStackProps) {
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
        pagination={3}
        duration={360}
        className="[--gemst-push-stack-enter-easing:var(--gemst-easing-emphasized)] [--gemst-push-stack-pagination-active-color:var(--gem-color-info)]"
        onPagination={setStep}
      >
        <div className="min-h-[8.5rem] rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] px-5 py-4 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]">
          {label}
          <span className="mt-2 block text-xs font-normal text-[var(--gem-color-fg-muted)]">
            {copies[label]}
          </span>
        </div>
      </PushStack>
    </div>
  );
}
