import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { GradientText } from "@gem-org/gemffects/gradient-text";
import { TextTile } from "./TextTile.tsx";
import "./gradient-text-demo.css";

type CallbacksGradientTextProps = {
  title: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

/** The button sits inside the gradient and keeps its solid label. */
export function CallbacksGradientText({
  title,
  action,
  clicks,
  empty,
}: CallbacksGradientTextProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <TextTile>
        <div className="gt-demo__card">
          <GradientText
            trigger="hover"
            onGradientText={(event) => push(`onGradientText → ${event.reason}`)}
            outGradientText={(event) => push(`outGradientText → ${event.reason}`)}
          >
            <span className="gt-demo__copy">{title}</span>{" "}
            <Button size="sm" variant="neutral" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
          </GradientText>
          <p className="gt-demo__body" aria-live="polite">
            {clicks.replace("{count}", String(count))}
          </p>
        </div>
      </TextTile>
      <ul className="gt-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
