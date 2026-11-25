import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { RipZone } from "@gem-org/gemffects/rip-zone";
import "./rip-zone-demo.css";

type CallbacksRipZoneProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksRipZone({ body, action, clicks, empty }: CallbacksRipZoneProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

  return (
    <>
      <RipZone
        className="rz-demo__host"
        onRipZone={(event) => push(`onRipZone → ${event.reason}`)}
        outRipZone={(event) => push(`outRipZone → ${event.reason}`)}
        onScratchStart={(event) =>
          push(`onScratchStart → ${Math.round(event.x)}, ${Math.round(event.y)}`)
        }
        onComplete={(event) => push(`onComplete → ${Math.round(event.progress * 100)}%`)}
      >
        <div className="rz-demo__card">
          <p className="rz-demo__body">{body}</p>
          <Button size="sm" variant="primary" onClick={() => setCount((current) => current + 1)}>
            {action}
          </Button>
          <p className="rz-demo__body" aria-live="polite">
            {clicks.replace("{count}", String(count))}
          </p>
        </div>
      </RipZone>
      <ul className="rz-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
