import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type CallbacksMagneticProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksMagnetic({ body, action, clicks, empty }: CallbacksMagneticProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <MagneticTile>
        <Magnetic
          className="magnetic-demo__host"
          onMagnetic={(event) => push(`onMagnetic · ${event.reason}`)}
          outMagnetic={(event) => push(`outMagnetic · ${event.reason}`)}
        >
          <article className="magnetic-demo__card">
            <p className="magnetic-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="magnetic-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Magnetic>
      </MagneticTile>
      <ul className="magnetic-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
