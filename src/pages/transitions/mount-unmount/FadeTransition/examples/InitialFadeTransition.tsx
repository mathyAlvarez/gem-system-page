import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";
import "./fade-transition-demo.css";

type InitialFadeTransitionProps = {
  fadeIn: string;
  fadeOut: string;
  remount: string;
  label: string;
};

export function InitialFadeTransition({
  fadeIn,
  fadeOut,
  remount,
  label,
}: InitialFadeTransitionProps) {
  const [isIn, setIsIn] = useState(true);
  const [key, setKey] = useState(0);

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
      <div className="fade-demo__stage">
        <FadeTransition key={key} isIn={isIn} initial={false}>
          <div className="fade-demo__panel">{label}</div>
        </FadeTransition>
      </div>
    </div>
  );
}
