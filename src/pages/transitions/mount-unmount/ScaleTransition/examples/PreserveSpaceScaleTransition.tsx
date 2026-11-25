import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type PreserveSpaceScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
  sibling: string;
};

export function PreserveSpaceScaleTransition({
  scaleIn,
  scaleOut,
  label,
  sibling,
}: PreserveSpaceScaleTransitionProps) {
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
      <div className="scale-demo__stack">
        <ScaleTransition isIn={isIn} preserveSpace>
          <div className="scale-demo__panel">{label}</div>
        </ScaleTransition>
        <p className="scale-demo__sibling">{sibling}</p>
      </div>
    </div>
  );
}
