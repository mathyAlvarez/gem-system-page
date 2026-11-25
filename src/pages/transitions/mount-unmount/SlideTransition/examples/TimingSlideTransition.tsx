import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";

type TimingSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  label: string;
};

export function TimingSlideTransition({ slideIn, slideOut, label }: TimingSlideTransitionProps) {
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
      <div className="slide-demo__stage" data-from="right">
        <SlideTransition
          isIn={isIn}
          from="right"
          offset="1.5rem"
          duration={{ enter: 420, exit: 180 }}
          delay={{ enter: 40, exit: 0 }}
          easing={{ enter: "enter", exit: "exit" }}
        >
          <div className="slide-demo__panel">{label}</div>
        </SlideTransition>
      </div>
    </div>
  );
}
