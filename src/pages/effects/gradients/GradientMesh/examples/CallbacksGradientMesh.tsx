import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { GradientMesh } from "@gem-org/gemffects/gradient-mesh";
import { MeshTile } from "./MeshTile.tsx";
import "./gradient-mesh-demo.css";

type CallbacksGradientMeshProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksGradientMesh({ body, action, clicks, empty }: CallbacksGradientMeshProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <MeshTile>
        <GradientMesh
          trigger="hover"
          className="gm-demo__hero"
          onGradientMesh={(event) => push(`onGradientMesh → ${event.reason}`)}
          outGradientMesh={(event) => push(`outGradientMesh → ${event.reason}`)}
        >
          <div className="gm-demo__hero-content">
            <p className="gm-demo__body">{body}</p>
            <Button size="sm" variant="neutral" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="gm-demo__body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </div>
        </GradientMesh>
      </MeshTile>
      <ul className="gm-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
