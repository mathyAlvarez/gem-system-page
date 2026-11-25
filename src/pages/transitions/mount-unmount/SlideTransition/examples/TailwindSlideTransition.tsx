import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition } from "@gem-org/gemsitions/slide-transition";
import "./slide-transition-demo.css";

type TailwindSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  label: string;
};

export function TailwindSlideTransition({
  slideIn,
  slideOut,
  label,
}: TailwindSlideTransitionProps) {
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
      <div className="slide-demo__stage" data-from="left">
        <SlideTransition
          isIn={isIn}
          from="left"
          duration={360}
          className="[--gemst-slide-offset:1.75rem] [--gemst-slide-easing:var(--gemst-easing-emphasized)]"
        >
          <div className="rounded-[var(--gem-radius-lg)] border border-[var(--gem-color-border)] bg-[var(--gem-color-bg-subtle)] px-5 py-4 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]">
            {label}
          </div>
        </SlideTransition>
      </div>
    </div>
  );
}
