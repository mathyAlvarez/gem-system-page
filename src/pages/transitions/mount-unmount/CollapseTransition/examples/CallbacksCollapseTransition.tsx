import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";

type CallbacksCollapseTransitionProps = {
  expand: string;
  collapse: string;
  title: string;
  panel: string;
  measured: string;
  empty: string;
};

export function CallbacksCollapseTransition({
  expand,
  collapse,
  title,
  panel,
  measured,
  empty,
}: CallbacksCollapseTransitionProps) {
  const [isIn, setIsIn] = useState(true);
  const [size, setSize] = useState(0);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

  return (
    <div className="collapse-demo">
      <p className="collapse-demo__measure">
        {measured} <strong>{size}px</strong>
      </p>
      <div className="collapse-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? collapse : expand}
        </Button>
      </div>
      <div className="collapse-demo__accordion">
        <button
          type="button"
          className="collapse-demo__trigger"
          aria-expanded={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {title}
          <span aria-hidden="true">{isIn ? "−" : "+"}</span>
        </button>
        <CollapseTransition
          isIn={isIn}
          onCollapse={(event) => push(`onCollapse · ${event.reason}`)}
          outCollapse={(event) => push(`outCollapse · ${event.reason}`)}
          onPhaseChange={(phase) => push(`phase · ${phase}`)}
          onDimensionChange={setSize}
        >
          <div className="collapse-demo__panel">{panel}</div>
        </CollapseTransition>
      </div>
      <ul className="collapse-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
