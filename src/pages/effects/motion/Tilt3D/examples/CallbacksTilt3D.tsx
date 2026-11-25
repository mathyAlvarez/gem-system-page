import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Tilt3D } from "@gem-org/gemffects/tilt-3d";
import { TiltTile } from "./TiltTile.tsx";
import "./tilt-3d-demo.css";

type CallbacksTilt3DProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksTilt3D({ body, action, clicks, empty }: CallbacksTilt3DProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <TiltTile>
        <Tilt3D
          className="rounded-[var(--gem-radius-lg)]"
          onTilt3D={(event) => push(`onTilt3D · ${event.reason}`)}
          outTilt3D={(event) => push(`outTilt3D · ${event.reason}`)}
        >
          <article className="tilt-demo__card">
            <p className="tilt-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="tilt-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Tilt3D>
      </TiltTile>
      <ul className="tilt-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
