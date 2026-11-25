import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type ModalPopScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
};

export function ModalPopScaleTransition({
  scaleIn,
  scaleOut,
  label,
}: ModalPopScaleTransitionProps) {
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
      <div className="scale-demo__stage">
        <ScaleTransition
          isIn={isIn}
          origin="center"
          scale={0.88}
          duration={{ enter: 280, exit: 160 }}
          easing={{ enter: "emphasized", exit: "exit" }}
        >
          <div className="scale-demo__panel">{label}</div>
        </ScaleTransition>
      </div>
    </div>
  );
}
