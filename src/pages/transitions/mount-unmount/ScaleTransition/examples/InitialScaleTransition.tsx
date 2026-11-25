import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type InitialScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  remount: string;
  label: string;
};

export function InitialScaleTransition({
  scaleIn,
  scaleOut,
  remount,
  label,
}: InitialScaleTransitionProps) {
  const [isIn, setIsIn] = useState(true);
  const [key, setKey] = useState(0);

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
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            setIsIn(true);
            setKey((value) => value + 1);
          }}
        >
          {remount}
        </Button>
      </div>
      <div className="scale-demo__stage">
        <ScaleTransition key={key} isIn={isIn} initial={false}>
          <div className="scale-demo__panel">{label}</div>
        </ScaleTransition>
      </div>
    </div>
  );
}
