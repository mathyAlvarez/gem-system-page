import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";

type DisabledSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  label: string;
};

export function DisabledSlideTransition({
  slideIn,
  slideOut,
  label,
}: DisabledSlideTransitionProps) {
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
      <div className="slide-demo__stage" data-from="bottom">
        <SlideTransition isIn={isIn} isDisabled>
          <div className="slide-demo__panel">{label}</div>
        </SlideTransition>
      </div>
    </div>
  );
}
