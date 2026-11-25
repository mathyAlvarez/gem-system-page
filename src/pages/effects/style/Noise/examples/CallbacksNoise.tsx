import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Noise } from "@gem-org/gemffects/noise";
import { NoiseTile } from "./NoiseTile.tsx";
import "./noise-demo.css";

type CallbacksNoiseProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksNoise({ body, action, clicks, empty }: CallbacksNoiseProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <NoiseTile>
        <Noise
          trigger="hover"
          intensity="lg"
          className="noise-demo__host"
          onNoise={(event) => push(`onNoise · ${event.reason}`)}
          outNoise={(event) => push(`outNoise · ${event.reason}`)}
        >
          <article className="noise-demo__panel">
            <p className="noise-demo__body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="noise-demo__body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Noise>
      </NoiseTile>
      <ul className="noise-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
