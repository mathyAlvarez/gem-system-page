import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Rip } from "@gem-org/gemffects/rip";
import "./rip-demo.css";

type CallbacksRipProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksRip({ body, action, clicks, empty }: CallbacksRipProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <div className="rp-demo__stage">
        <Rip
          veilColor="color-mix(in srgb, var(--gem-palette-neutral-950) 70%, transparent)"
          className="rp-demo__host"
          onRip={(event) => push(`onRip → ${event.reason}`)}
          outRip={(event) => push(`outRip → ${event.reason}`)}
        >
          <div className="rp-demo__card">
            <p className="rp-demo__body">{body}</p>
            <Button size="sm" variant="neutral" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="rp-demo__body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </div>
        </Rip>
      </div>
      <ul className="rp-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
