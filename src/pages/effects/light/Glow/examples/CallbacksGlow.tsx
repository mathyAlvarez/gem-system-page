import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Glow } from "@gem-org/gemffects/glow";
import { GlowTile } from "./GlowTile.tsx";
import "./glow-demo.css";

type CallbacksGlowProps = {
  title: string;
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksGlow({ title, body, action, clicks, empty }: CallbacksGlowProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <GlowTile>
        <Glow
          trigger="hover"
          className="glow-demo__host"
          onGlow={(event) => push(`onGlow · ${event.reason}`)}
          outGlow={(event) => push(`outGlow · ${event.reason}`)}
        >
          <article className="glow-demo__card">
            <h4 className="glow-demo__card-title">{title}</h4>
            <p className="glow-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="glow-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Glow>
      </GlowTile>
      <ul className="glow-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
