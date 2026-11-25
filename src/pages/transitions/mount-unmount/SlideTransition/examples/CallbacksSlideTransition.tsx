import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";

type CallbacksSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  label: string;
  empty: string;
};

export function CallbacksSlideTransition({
  slideIn,
  slideOut,
  label,
  empty,
}: CallbacksSlideTransitionProps) {
  const [isIn, setIsIn] = useState(true);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

  return (
    <div className="slide-demo">
      <div className="slide-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? slideOut : slideIn}
        </Button>
      </div>
      <div className="slide-demo__stage" data-from="bottom">
        <SlideTransition
          isIn={isIn}
          onSlide={(event) => push(`onSlide · ${event.reason}`)}
          outSlide={(event) => push(`outSlide · ${event.reason}`)}
          onPhaseChange={(phase) => push(`phase · ${phase}`)}
        >
          <div className="slide-demo__panel">{label}</div>
        </SlideTransition>
      </div>
      <ul className="slide-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
