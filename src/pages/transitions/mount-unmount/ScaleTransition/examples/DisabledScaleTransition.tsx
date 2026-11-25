import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type DisabledScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
};

export function DisabledScaleTransition({
  scaleIn,
  scaleOut,
  label,
}: DisabledScaleTransitionProps) {
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
        <ScaleTransition isIn={isIn} isDisabled>
          <div className="scale-demo__panel">{label}</div>
        </ScaleTransition>
      </div>
    </div>
  );
}
