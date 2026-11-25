import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";

type AxisSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  label: string;
};

export function AxisSlideTransition({ slideIn, slideOut, label }: AxisSlideTransitionProps) {
  const [isIn, setIsIn] = useState(true);

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
      <div className="slide-demo__stage slide-demo__stage--roomy" data-from="left">
        <SlideTransition isIn={isIn} axis="x">
          <div className="slide-demo__panel slide-demo__panel--large">{label}</div>
        </SlideTransition>
      </div>
    </div>
  );
}
