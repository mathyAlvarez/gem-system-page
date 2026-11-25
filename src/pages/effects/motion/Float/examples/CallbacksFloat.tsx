import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

type CallbacksFloatProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksFloat({ body, action, clicks, empty }: CallbacksFloatProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <FloatTile>
        <Float
          trigger="hover"
          className="float-demo__host"
          onFloat={(event) => push(`onFloat · ${event.reason}`)}
          outFloat={(event) => push(`outFloat · ${event.reason}`)}
        >
          <article className="float-demo__card">
            <p className="float-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="float-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Float>
      </FloatTile>
      <ul className="float-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
