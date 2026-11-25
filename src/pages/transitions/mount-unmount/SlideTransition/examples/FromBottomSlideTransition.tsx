import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";

type FromBottomSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  label: string;
};

export function FromBottomSlideTransition({
  slideIn,
  slideOut,
  label,
}: FromBottomSlideTransitionProps) {
  const [isIn, setIsIn] = useState(false);

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
      <div className="slide-demo__stage slide-demo__stage--roomy" data-from="bottom">
        <SlideTransition isIn={isIn} from="bottom">
          <div className="slide-demo__panel slide-demo__panel--large">{label}</div>
        </SlideTransition>
      </div>
    </div>
  );
}
