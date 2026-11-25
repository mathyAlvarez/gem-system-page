import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Ripple } from "@gem-org/gemffects/ripple";
import "./ripple-demo.css";

type CallbacksRippleProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksRipple({ body, action, clicks, empty }: CallbacksRippleProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

  return (
    <>
      <Ripple
        className="rl-demo__host"
        onRipple={(event) => push(`onRipple → ${event.reason}`)}
        outRipple={(event) => push(`outRipple → ${event.reason}`)}
      >
        <div className="rl-demo__card">
          <p className="rl-demo__body">{body}</p>
          <Button size="sm" variant="primary" onClick={() => setCount((current) => current + 1)}>
            {action}
          </Button>
          <p className="rl-demo__body" aria-live="polite">
            {clicks.replace("{count}", String(count))}
          </p>
        </div>
      </Ripple>
      <ul className="rl-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
