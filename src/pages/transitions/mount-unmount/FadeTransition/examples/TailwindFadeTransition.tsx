import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { FadeTransition } from "@gem-org/gemsitions/fade-transition";
import "./fade-transition-demo.css";

type TailwindFadeTransitionProps = {
  fadeIn: string;
  fadeOut: string;
  label: string;
};

export function TailwindFadeTransition({ fadeIn, fadeOut, label }: TailwindFadeTransitionProps) {
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
      <FadeTransition
        isIn={isIn}
        duration={360}
        className="rounded-[var(--gem-radius-lg)] [--gemst-fade-easing:var(--gemst-easing-emphasized)]"
      >
        <div className="border border-[var(--gem-color-border)] bg-[var(--gem-color-bg-subtle)] px-4 py-3 text-sm font-semibold text-[var(--gem-color-fg)]">
          {label}
        </div>
      </FadeTransition>
    </div>
  );
}
