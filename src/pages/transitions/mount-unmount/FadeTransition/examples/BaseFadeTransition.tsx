import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";
import "./fade-transition-demo.css";

type BaseFadeTransitionProps = {
  fadeIn: string;
  fadeOut: string;
  label: string;
};

export function BaseFadeTransition({ fadeIn, fadeOut, label }: BaseFadeTransitionProps) {
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
        <FadeTransition isIn={isIn}>
          <div className="fade-demo__panel">{label}</div>
        </FadeTransition>
      </div>
    </div>
  );
}
