import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Spotlight } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

type CallbacksSpotlightProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksSpotlight({ body, action, clicks, empty }: CallbacksSpotlightProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <SpotlightTile>
        <Spotlight
          variant="glow"
          className="spotlight-demo__host"
          onSpotlight={(event) => push(`onSpotlight · ${event.reason}`)}
          outSpotlight={(event) => push(`outSpotlight · ${event.reason}`)}
        >
          <article className="spotlight-demo__card">
            <p className="spotlight-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="spotlight-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Spotlight>
      </SpotlightTile>
      <ul className="spotlight-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
