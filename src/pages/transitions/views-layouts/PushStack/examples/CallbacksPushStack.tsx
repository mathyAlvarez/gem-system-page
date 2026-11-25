import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PushStack } from "@gem-org/gemsitions/push-stack";
import { PUSH_STACK_STEPS } from "./demo.ts";
import "./push-stack-demo.css";

type CallbacksPushStackProps = {
  back: string;
  next: string;
  empty: string;
  copies: Record<(typeof PUSH_STACK_STEPS)[number], string>;
};

export function CallbacksPushStack({ back, next, empty, copies }: CallbacksPushStackProps) {
  const [step, setStep] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const last = PUSH_STACK_STEPS.length - 1;
  const label = PUSH_STACK_STEPS[Math.min(Math.max(step, 0), last)];

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

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
        onPagination={setStep}
        onViewChange={(nextKey, prev) => push(`view · ${String(prev)} → ${String(nextKey)}`)}
        onPushStack={(event) => push(`onPushStack · ${event.reason}`)}
        outPushStack={(event) => push(`outPushStack · ${event.reason}`)}
      >
        <div className="push-stack-demo__panel">
          {label}
          <span className="push-stack-demo__copy">{copies[label]}</span>
        </div>
      </PushStack>
      <ul className="push-stack-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
