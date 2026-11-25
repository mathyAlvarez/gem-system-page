import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { GradientBorder } from "@gem-org/gemffects/gradient-border";
import { BorderTile } from "./BorderTile.tsx";
import "./gradient-border-demo.css";

type CallbacksGradientBorderProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksGradientBorder({
  body,
  action,
  clicks,
  empty,
}: CallbacksGradientBorderProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <BorderTile>
        <GradientBorder
          trigger="hover"
          className="gb-demo__card-host"
          onGradientBorder={(event) => push(`onGradientBorder · ${event.reason}`)}
          outGradientBorder={(event) => push(`outGradientBorder · ${event.reason}`)}
        >
          <article className="gb-demo__card">
            <p className="gb-demo__body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="gb-demo__body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </GradientBorder>
      </BorderTile>
      <ul className="gb-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
