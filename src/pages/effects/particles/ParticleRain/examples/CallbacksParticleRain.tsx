import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ParticleRain } from "@gem-org/gemffects/particle-rain";
import "./particle-rain-demo.css";

type CallbacksParticleRainProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksParticleRain({ body, action, clicks, empty }: CallbacksParticleRainProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <ParticleRain
        trigger="click"
        className="pr-demo__host"
        onParticleRain={(event) => push(`onParticleRain → ${event.reason}`)}
        outParticleRain={(event) => push(`outParticleRain → ${event.reason}`)}
      >
        <div className="pr-demo__card">
          <p className="pr-demo__body">{body}</p>
          <Button size="sm" variant="neutral" onClick={() => setCount((current) => current + 1)}>
            {action}
          </Button>
          <p className="pr-demo__body" aria-live="polite">
            {clicks.replace("{count}", String(count))}
          </p>
        </div>
      </ParticleRain>
      <ul className="pr-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
