import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { PulseScale } from "@gem-org/gemffects/pulse-scale";
import { PulseTile } from "./PulseTile.tsx";
import "./pulse-scale-demo.css";

type CallbacksPulseScaleProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksPulseScale({ body, action, clicks, empty }: CallbacksPulseScaleProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <PulseTile>
        <PulseScale
          trigger="hover"
          variant="breathe"
          scale={1.04}
          className="rounded-[var(--gem-radius-lg)]"
          onPulseScale={(event) => push(`onPulseScale · ${event.reason}`)}
          outPulseScale={(event) => push(`outPulseScale · ${event.reason}`)}
        >
          <article className="pulse-demo__card">
            <p className="pulse-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="pulse-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </PulseScale>
      </PulseTile>
      <ul className="pulse-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
