import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Zoom } from "@gem-org/gemffects/zoom";
import { ZoomTile } from "./ZoomTile.tsx";
import "./zoom-demo.css";

type CallbacksZoomProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksZoom({ body, action, clicks, empty }: CallbacksZoomProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <ZoomTile>
        <Zoom
          clip={false}
          intensity="sm"
          onZoom={(event) => push(`onZoom · ${event.reason}`)}
          outZoom={(event) => push(`outZoom · ${event.reason}`)}
        >
          <article className="zoom-demo__card">
            <p className="zoom-demo__card-body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="zoom-demo__card-body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </Zoom>
      </ZoomTile>
      <ul className="zoom-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
