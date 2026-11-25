import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";
import "./fade-transition-demo.css";

type CallbacksFadeTransitionProps = {
  fadeIn: string;
  fadeOut: string;
  label: string;
  empty: string;
};

export function CallbacksFadeTransition({
  fadeIn,
  fadeOut,
  label,
  empty,
}: CallbacksFadeTransitionProps) {
  const [isIn, setIsIn] = useState(true);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

  return (
    <div className="fade-demo">
      <div className="fade-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? fadeOut : fadeIn}
        </Button>
      </div>
      <div className="fade-demo__stage">
        <FadeTransition
          isIn={isIn}
          onFade={(event) => push(`onFade · ${event.reason}`)}
          outFade={(event) => push(`outFade · ${event.reason}`)}
          onPhaseChange={(phase) => push(`phase · ${phase}`)}
        >
          <div className="fade-demo__panel">{label}</div>
        </FadeTransition>
      </div>
      <ul className="fade-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
