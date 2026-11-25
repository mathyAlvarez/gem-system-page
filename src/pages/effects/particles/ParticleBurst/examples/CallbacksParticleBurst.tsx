import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ParticleBurst } from "@gem-org/gemffects/particle-burst";
import "./particle-burst-demo.css";

type CallbacksParticleBurstProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksParticleBurst({
  body,
  action,
  clicks,
  empty,
}: CallbacksParticleBurstProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <div className="pb-demo__stage">
        <ParticleBurst
          onParticleBurst={(event) => push(`onParticleBurst → ${event.reason}`)}
          outParticleBurst={(event) => push(`outParticleBurst → ${event.reason}`)}
        >
          <div className="pb-demo__card">
            <p className="pb-demo__body">{body}</p>
            <Button size="sm" variant="neutral" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="pb-demo__body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </div>
        </ParticleBurst>
      </div>
      <ul className="pb-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
