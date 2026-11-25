import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";
import "./slide-transition-overrides.css";

type StyledSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  label: string;
};

export function StyledSlideTransition({ slideIn, slideOut, label }: StyledSlideTransitionProps) {
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
        <SlideTransition className="drawer-shell" isIn={isIn} from="right">
          <div className="slide-demo__panel">{label}</div>
        </SlideTransition>
      </div>
    </div>
  );
}
