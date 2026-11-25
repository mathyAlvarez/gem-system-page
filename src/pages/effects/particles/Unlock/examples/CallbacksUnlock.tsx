import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Unlock } from "@gem-org/gemffects/unlock";
import "./unlock-demo.css";

type CallbacksUnlockProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksUnlock({ body, action, clicks, empty }: CallbacksUnlockProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

  return (
    <>
      <Unlock
        className="ul-demo__host"
        onUnlock={(event) => push(`onUnlock → ${event.reason}`)}
        outUnlock={(event) => push(`outUnlock → ${event.reason}`)}
      >
        <div className="ul-demo__panel-card">
          <p className="ul-demo__body">{body}</p>
          <Button size="sm" variant="primary" onClick={() => setCount((current) => current + 1)}>
            {action}
          </Button>
          <p className="ul-demo__body" aria-live="polite">
            {clicks.replace("{count}", String(count))}
          </p>
        </div>
      </Unlock>
      <ul className="ul-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
