import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Glassmorphism } from "@gem-org/gemffects/glassmorphism";
import { GlassScene } from "./GlassScene.tsx";
import "./glassmorphism-demo.css";

type CallbacksGlassmorphismProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksGlassmorphism({
  body,
  action,
  clicks,
  empty,
}: CallbacksGlassmorphismProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <GlassScene>
        <Glassmorphism
          trigger="hover"
          className="glass-demo__host"
          onGlassmorphism={(event) => push(`onGlassmorphism · ${event.reason}`)}
          outGlassmorphism={(event) => push(`outGlassmorphism · ${event.reason}`)}
        >
          <div className="glass-demo__target">
            <p className="glass-demo__copy">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="glass-demo__copy" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </div>
        </Glassmorphism>
      </GlassScene>
      <ul className="glass-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
