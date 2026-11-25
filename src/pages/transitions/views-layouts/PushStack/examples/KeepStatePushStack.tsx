import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PushStack } from "@gem-org/gemsitions/push-stack";
import { PUSH_STACK_STEPS } from "./demo.ts";
import "./push-stack-demo.css";

type KeepStatePushStackProps = {
  back: string;
  next: string;
  fieldLabel: string;
  placeholder: string;
  changeLabel: string;
};

export function KeepStatePushStack({
  back,
  next,
  fieldLabel,
  placeholder,
  changeLabel,
}: KeepStatePushStackProps) {
  const [step, setStep] = useState(0);
  const [log, setLog] = useState("—");
  const last = PUSH_STACK_STEPS.length - 1;
  const label = PUSH_STACK_STEPS[Math.min(Math.max(step, 0), last)];

  return (
    <div className="push-stack-demo">
      <p className="push-stack-demo__copy">
        {changeLabel}: <strong>{log}</strong>
      </p>
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
        keepState
        index={step}
        viewKey={label}
        pagination={3}
        onViewChange={(nextKey, prev) => setLog(`${String(prev)} → ${String(nextKey)}`)}
        onPagination={setStep}
      >
        <div className="push-stack-demo__panel">
          {label}
          <label className="push-stack-demo__field">
            {fieldLabel.replace("{step}", label)}
            <input type="text" defaultValue="" placeholder={placeholder} />
          </label>
        </div>
      </PushStack>
    </div>
  );
}
