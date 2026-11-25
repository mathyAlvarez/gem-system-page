import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

type CallbacksVortexProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksVortex({ body, action, clicks, empty }: CallbacksVortexProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <VortexTile>
        <Vortex
          variant="ring"
          className="vortex-demo__host"
          onVortex={(event) => push(`onVortex · ${event.reason}`)}
          outVortex={(event) => push(`outVortex · ${event.reason}`)}
        >
          <article className="vortex-demo__card">
            <p className="vortex-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="vortex-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Vortex>
      </VortexTile>
      <ul className="vortex-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
