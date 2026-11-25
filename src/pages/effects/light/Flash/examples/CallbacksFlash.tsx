import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Flash } from "@gem-org/gemffects/flash";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

type CallbacksFlashProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksFlash({ body, action, clicks, empty }: CallbacksFlashProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <FlashTile>
        <Flash
          origin="pointer"
          className="flash-demo__host"
          onFlash={(event) => push(`onFlash · ${event.reason}`)}
          outFlash={(event) => push(`outFlash · ${event.reason}`)}
        >
          <article className="flash-demo__card">
            <p className="flash-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="flash-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Flash>
      </FlashTile>
      <ul className="flash-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
