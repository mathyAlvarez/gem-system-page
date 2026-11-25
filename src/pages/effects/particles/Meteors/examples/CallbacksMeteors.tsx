import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { Meteors } from "@gem-org/gemffects/meteors";
import "./meteors-demo.css";

type CallbacksMeteorsProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksMeteors({ body, action, clicks, empty }: CallbacksMeteorsProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <Meteors
        trigger="hover"
        intensity="lg"
        className="mt-demo__host"
        onMeteors={(event) => push(`onMeteors → ${event.reason}`)}
        outMeteors={(event) => push(`outMeteors → ${event.reason}`)}
      >
        <div className="mt-demo__card">
          <p className="mt-demo__body">{body}</p>
          <Button size="sm" variant="neutral" onClick={() => setCount((current) => current + 1)}>
            {action}
          </Button>
          <p className="mt-demo__body" aria-live="polite">
            {clicks.replace("{count}", String(count))}
          </p>
        </div>
      </Meteors>
      <ul className="mt-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
