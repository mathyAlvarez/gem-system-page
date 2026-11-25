import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";

type TailwindCollapseTransitionProps = {
  expand: string;
  collapse: string;
  title: string;
  panel: string;
};

export function TailwindCollapseTransition({
  expand,
  collapse,
  title,
  panel,
}: TailwindCollapseTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="collapse-demo">
      <div className="collapse-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? collapse : expand}
        </Button>
      </div>
      <div className="overflow-hidden rounded-[var(--gem-radius-lg)] border border-[var(--gem-color-border)]">
        <button
          type="button"
          className="collapse-demo__trigger"
          aria-expanded={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {title}
          <span aria-hidden="true">{isIn ? "−" : "+"}</span>
        </button>
        <CollapseTransition
          isIn={isIn}
          duration={360}
          className="[--gemst-collapse-easing:var(--gemst-easing-emphasized)]"
        >
          <div className="bg-[var(--gem-color-bg)] p-4 text-sm text-[var(--gem-color-fg)]">
            {panel}
          </div>
        </CollapseTransition>
      </div>
    </div>
  );
}
