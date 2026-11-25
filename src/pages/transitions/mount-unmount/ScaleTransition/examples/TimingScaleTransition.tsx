import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type TimingScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
};

export function TimingScaleTransition({ scaleIn, scaleOut, label }: TimingScaleTransitionProps) {
  const [isIn, setIsIn] = useState(true);

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
          scale={0.9}
          duration={{ enter: 420, exit: 180 }}
          delay={{ enter: 40, exit: 0 }}
          easing={{ enter: "enter", exit: "exit" }}
        >
          <div className="scale-demo__panel">{label}</div>
        </ScaleTransition>
      </div>
    </div>
  );
}
