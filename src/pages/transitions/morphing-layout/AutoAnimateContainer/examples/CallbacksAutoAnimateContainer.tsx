import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";

type CallbacksAutoAnimateContainerProps = {
  enable: string;
  disable: string;
  showMore: string;
  showLess: string;
  short: string;
  longFirst: string;
  longSecond: string;
  empty: string;
};

export function CallbacksAutoAnimateContainer({
  enable,
  disable,
  showMore,
  showLess,
  short,
  longFirst,
  longSecond,
  empty,
}: CallbacksAutoAnimateContainerProps) {
  const [enabled, setEnabled] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <div className="auto-animate-demo">
      <div className="auto-animate-demo__controls">
        <Button size="sm" variant="secondary" onClick={() => setEnabled((value) => !value)}>
          {enabled ? disable : enable}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? showLess : showMore}
        </Button>
      </div>
      <div className="auto-animate-demo__stage">
        <AutoAnimateContainer
          isDisabled={!enabled}
          onAutoAnimate={(event) => push(`onAutoAnimate · ${event.reason}`)}
          outAutoAnimate={(event) => push(`outAutoAnimate · ${event.reason}`)}
        >
          <div className="auto-animate-demo__panel">
            {expanded ? (
              <>
                <p>{longFirst}</p>
                <p>{longSecond}</p>
              </>
            ) : (
              <p>{short}</p>
            )}
          </div>
        </AutoAnimateContainer>
      </div>
      <ul className="auto-animate-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
