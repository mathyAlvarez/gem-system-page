import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

type CallbacksBlurUnveilProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksBlurUnveil({ body, action, clicks, empty }: CallbacksBlurUnveilProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <UnveilTile>
        <BlurUnveil
          trigger="hover"
          intensity="sm"
          scale={1}
          className="unveil-demo__host"
          onBlurUnveil={(event) => push(`onBlurUnveil · ${event.reason}`)}
          outBlurUnveil={(event) => push(`outBlurUnveil · ${event.reason}`)}
        >
          <article className="unveil-demo__card">
            <p className="unveil-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="unveil-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </BlurUnveil>
      </UnveilTile>
      <ul className="unveil-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
