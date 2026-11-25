import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";
import "./scale-transition-overrides.css";

type StyledScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
};

export function StyledScaleTransition({ scaleIn, scaleOut, label }: StyledScaleTransitionProps) {
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
        <ScaleTransition className="popover-shell" isIn={isIn}>
          <div className="scale-demo__panel">{label}</div>
        </ScaleTransition>
      </div>
    </div>
  );
}
