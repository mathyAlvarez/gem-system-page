import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";
import "./fade-transition-demo.css";

type TimingFadeTransitionProps = {
  fadeIn: string;
  fadeOut: string;
  label: string;
};

export function TimingFadeTransition({ fadeIn, fadeOut, label }: TimingFadeTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="fade-demo">
      <div className="fade-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? fadeOut : fadeIn}
        </Button>
      </div>
      <div className="fade-demo__stage">
        <FadeTransition
          isIn={isIn}
          duration={{ enter: 420, exit: 180 }}
          delay={{ enter: 80, exit: 0 }}
          easing={{ enter: "enter", exit: "exit" }}
        >
          <div className="fade-demo__panel">{label}</div>
        </FadeTransition>
      </div>
    </div>
  );
}
