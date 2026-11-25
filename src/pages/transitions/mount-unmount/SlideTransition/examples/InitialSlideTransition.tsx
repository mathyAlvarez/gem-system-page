import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";

type InitialSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  remount: string;
  label: string;
};

export function InitialSlideTransition({
  slideIn,
  slideOut,
  remount,
  label,
}: InitialSlideTransitionProps) {
  const [isIn, setIsIn] = useState(true);
  const [key, setKey] = useState(0);

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
      <div className="slide-demo__stage" data-from="bottom">
        <SlideTransition key={key} isIn={isIn} initial={false}>
          <div className="slide-demo__panel">{label}</div>
        </SlideTransition>
      </div>
    </div>
  );
}
