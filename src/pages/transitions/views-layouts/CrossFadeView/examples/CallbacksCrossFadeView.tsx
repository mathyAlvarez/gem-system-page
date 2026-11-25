import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import "./cross-fade-view-demo.css";

type CallbacksCrossFadeViewProps = {
  firstLabel: string;
  secondLabel: string;
  firstCopy: string;
  secondCopy: string;
  first: string;
  second: string;
  empty: string;
};

export function CallbacksCrossFadeView({
  firstLabel,
  secondLabel,
  firstCopy,
  secondCopy,
  first,
  second,
  empty,
}: CallbacksCrossFadeViewProps) {
  const [isSecond, setIsSecond] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

  return (
    <div className="cross-fade-demo">
      <div className="cross-fade-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={!isSecond}
          onClick={() => setIsSecond(false)}
        >
          {first}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isSecond}
          onClick={() => setIsSecond(true)}
        >
          {second}
        </Button>
      </div>
      <CrossFadeView
        isSecond={isSecond}
        pagination={2}
        onPagination={(page) => setIsSecond(page >= 1)}
        onViewChange={(next, prev) => push(`view · ${String(prev)} → ${String(next)}`)}
        onCrossFade={(event) => push(`onCrossFade · ${event.reason}`)}
        outCrossFade={(event) => push(`outCrossFade · ${event.reason}`)}
        first={
          <div className="cross-fade-demo__panel">
            {firstLabel}
            <span className="cross-fade-demo__copy">{firstCopy}</span>
          </div>
        }
        second={
          <div className="cross-fade-demo__panel">
            {secondLabel}
            <span className="cross-fade-demo__copy">{secondCopy}</span>
          </div>
        }
      />
      <ul className="cross-fade-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
