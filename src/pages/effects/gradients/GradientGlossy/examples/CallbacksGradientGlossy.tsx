import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { GradientGlossy } from "@gem-org/gemffects/gradient-glossy";
import { GlossyTile } from "./GlossyTile.tsx";
import "./gradient-glossy-demo.css";

type CallbacksGradientGlossyProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksGradientGlossy({
  body,
  action,
  clicks,
  empty,
}: CallbacksGradientGlossyProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <GlossyTile>
        <GradientGlossy
          trigger="hover"
          variant="soft"
          className="gg-demo__card-host"
          onGradientGlossy={(event) => push(`onGradientGlossy → ${event.reason}`)}
          outGradientGlossy={(event) => push(`outGradientGlossy → ${event.reason}`)}
        >
          <article className="gg-demo__card">
            <p className="gg-demo__body">{body}</p>
            <Button size="sm" variant="neutral" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="gg-demo__body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </GradientGlossy>
      </GlossyTile>
      <ul className="gg-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
