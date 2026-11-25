import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber } from "@gem-org/gemsitions/animated-number";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const STEP = 240;

type CallbacksAnimatedNumberProps = {
  label: string;
  increase: string;
  decrease: string;
  empty: string;
};

export function CallbacksAnimatedNumber({
  label,
  increase,
  decrease,
  empty,
}: CallbacksAnimatedNumberProps) {
  const [visits, setVisits] = useState(1280);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setVisits((value) => shiftBy(value, STEP))}
        >
          {increase}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setVisits((value) => shiftBy(value, -STEP))}
        >
          {decrease}
        </Button>
      </div>
      <NumberPanel label={label}>
        <AnimatedNumber
          value={visits}
          onStart={(from) => push(`onStart(${from})`)}
          onComplete={(to) => push(`onComplete(${to})`)}
          onAnimatedNumber={(event) => push(`onAnimatedNumber · ${event.reason}`)}
          outAnimatedNumber={(event) => push(`outAnimatedNumber · ${event.reason}`)}
        />
      </NumberPanel>
      <ul className="animated-number-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
