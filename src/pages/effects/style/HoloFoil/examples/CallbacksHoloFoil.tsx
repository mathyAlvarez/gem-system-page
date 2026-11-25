import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { HoloFoil } from "@gem-org/gemffects/holo-foil";
import { FoilTile } from "./FoilTile.tsx";
import "./holofoil-demo.css";

type CallbacksHoloFoilProps = {
  body: string;
  action: string;
  /** Uses `{count}` as the placeholder. */
  clicks: string;
  empty: string;
};

export function CallbacksHoloFoil({ body, action, clicks, empty }: CallbacksHoloFoilProps) {
  const [log, setLog] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 4));

  return (
    <>
      <FoilTile>
        <HoloFoil
          className="foil-demo__host"
          onHoloFoil={(event) => push(`onHoloFoil · ${event.reason}`)}
          outHoloFoil={(event) => push(`outHoloFoil · ${event.reason}`)}
        >
          <article className="foil-demo__panel">
            <p className="foil-demo__body">{body}</p>
            <Button size="sm" onClick={() => setCount((current) => current + 1)}>
              {action}
            </Button>
            <p className="foil-demo__body" aria-live="polite">
              {clicks.replace("{count}", String(count))}
            </p>
          </article>
        </HoloFoil>
      </FoilTile>
      <ul className="foil-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </>
  );
}
