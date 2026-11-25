import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

type CallbacksFlickerProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksFlicker({ body, action, clicks, empty }: CallbacksFlickerProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <FlickerTile>
        <Flicker
          trigger="hover"
          edge="bottom"
          className="flicker-demo__host"
          onFlicker={(event) => push(`onFlicker · ${event.reason}`)}
          outFlicker={(event) => push(`outFlicker · ${event.reason}`)}
        >
          <article className="flicker-demo__card">
            <p className="flicker-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="flicker-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Flicker>
      </FlickerTile>
      <ul className="flicker-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
