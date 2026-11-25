import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition } from "@gem-org/gemsitions/scale-transition";
import "./scale-transition-demo.css";

type TailwindScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
};

export function TailwindScaleTransition({
  scaleIn,
  scaleOut,
  label,
}: TailwindScaleTransitionProps) {
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
          duration={360}
          className="[--gemst-scale-from:0.9] [--gemst-scale-easing:var(--gemst-easing-emphasized)]"
        >
          <div className="rounded-[var(--gem-radius-lg)] border border-[var(--gem-color-border)] bg-[var(--gem-color-bg-subtle)] px-5 py-4 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]">
            {label}
          </div>
        </ScaleTransition>
      </div>
    </div>
  );
}
