import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type CallbacksScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
  empty: string;
};

export function CallbacksScaleTransition({
  scaleIn,
  scaleOut,
  label,
  empty,
}: CallbacksScaleTransitionProps) {
  const [isIn, setIsIn] = useState(true);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

  return (
    <div className="scale-demo">
      <div className="scale-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? scaleOut : scaleIn}
        </Button>
      </div>
      <div className="scale-demo__stage">
        <ScaleTransition
          isIn={isIn}
          onScale={(event) => push(`onScale · ${event.reason}`)}
          outScale={(event) => push(`outScale · ${event.reason}`)}
          onPhaseChange={(phase) => push(`phase · ${phase}`)}
        >
          <div className="scale-demo__panel">{label}</div>
        </ScaleTransition>
      </div>
      <ul className="scale-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
