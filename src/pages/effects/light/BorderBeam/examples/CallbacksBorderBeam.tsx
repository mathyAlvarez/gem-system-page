import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import { BorderBeam } from "@gem-org/gemffects/border-beam";
import { BeamTile } from "./BeamTile.tsx";
import "./border-beam-demo.css";

type CallbacksBorderBeamProps = {
  title: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksBorderBeam({ title, action, clicks, empty }: CallbacksBorderBeamProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <BeamTile>
        <BorderBeam
          trigger="hover"
          className="border-beam-demo__host border-beam-demo__card"
          onBorderBeam={(event) => push(`onBorderBeam · ${event.reason}`)}
          outBorderBeam={(event) => push(`outBorderBeam · ${event.reason}`)}
        >
          <Card
            title={title}
            footer={
              <Button size="sm" onClick={() => setCount((current) => current + 1)}>
                {action}
              </Button>
            }
          >
            <span aria-live="polite">{clicks.replace("{count}", String(count))}</span>
          </Card>
        </BorderBeam>
      </BeamTile>
      <ul className="border-beam-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
