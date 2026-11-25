import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type FromTopScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
};

export function FromTopScaleTransition({ scaleIn, scaleOut, label }: FromTopScaleTransitionProps) {
  const [isIn, setIsIn] = useState(false);

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
      <div className="scale-demo__stage scale-demo__stage--roomy" data-origin="top">
        <ScaleTransition isIn={isIn} origin="top" easing="enter">
          <div className="scale-demo__panel scale-demo__panel--large">{label}</div>
        </ScaleTransition>
      </div>
    </div>
  );
}
