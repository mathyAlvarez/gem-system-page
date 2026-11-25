import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PushStack } from "@gem-org/gemsitions/push-stack";
import { PUSH_STACK_STEPS, type PushStackStep } from "./demo.ts";
import "./push-stack-demo.css";

type DirectionPushStackProps = {
  copies: Record<PushStackStep, string>;
};

export function DirectionPushStack({ copies }: DirectionPushStackProps) {
  const [tab, setTab] = useState<PushStackStep>("Account");
  const [direction, setDirection] = useState<"push" | "pop">("push");

  return (
    <div className="push-stack-demo">
      <div className="push-stack-demo__controls">
        {PUSH_STACK_STEPS.map((label, order) => (
          <Button
            key={label}
            size="sm"
            variant="secondary"
            aria-pressed={tab === label}
            onClick={() => {
              const current = PUSH_STACK_STEPS.indexOf(tab);
              setDirection(order < current ? "pop" : "push");
              setTab(label);
            }}
          >
            {label}
          </Button>
        ))}
      </div>
      <PushStack
        viewKey={tab}
        direction={direction}
        pagination={PUSH_STACK_STEPS.length}
        paginationIndex={PUSH_STACK_STEPS.indexOf(tab)}
        onPagination={(page) => {
          const next = PUSH_STACK_STEPS[page];
          if (!next) return;
          const current = PUSH_STACK_STEPS.indexOf(tab);
          setDirection(page < current ? "pop" : "push");
          setTab(next);
        }}
      >
        <div className="push-stack-demo__panel">
          {tab}
          <span className="push-stack-demo__copy">{copies[tab]}</span>
        </div>
      </PushStack>
    </div>
  );
}
