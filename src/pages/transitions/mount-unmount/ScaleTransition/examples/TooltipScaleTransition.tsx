import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type TooltipScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
};

export function TooltipScaleTransition({ scaleIn, scaleOut, label }: TooltipScaleTransitionProps) {
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
      <div className="scale-demo__stage scale-demo__stage--roomy" data-origin="bottom">
        <ScaleTransition
          isIn={isIn}
          origin="bottom"
          scale={0.96}
          duration={{ enter: 160, exit: 100 }}
          easing={{ enter: "enter", exit: "exit" }}
        >
          <div className="scale-demo__panel scale-demo__panel--large">{label}</div>
        </ScaleTransition>
      </div>
    </div>
  );
}
