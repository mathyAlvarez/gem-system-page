import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Glitch } from "@gem-org/gemffects/glitch";
import { GlitchTile } from "./GlitchTile.tsx";
import "./glitch-demo.css";

type CallbacksGlitchProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksGlitch({ body, action, clicks, empty }: CallbacksGlitchProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <GlitchTile>
        <Glitch
          trigger="hover"
          intensity="sm"
          className="glitch-demo__host"
          onGlitch={(event) => push(`onGlitch · ${event.reason}`)}
          outGlitch={(event) => push(`outGlitch · ${event.reason}`)}
        >
          <article className="glitch-demo__card">
            <p className="glitch-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="glitch-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Glitch>
      </GlitchTile>
      <ul className="glitch-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
