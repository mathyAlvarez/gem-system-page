import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";
import "./collapse-transition-overrides.css";

type StyledCollapseTransitionProps = {
  expand: string;
  collapse: string;
  title: string;
  panel: string;
};

export function StyledCollapseTransition({
  expand,
  collapse,
  title,
  panel,
}: StyledCollapseTransitionProps) {
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
      <div className="collapse-demo__accordion">
        <button
          type="button"
          className="collapse-demo__trigger"
          aria-expanded={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {title}
          <span aria-hidden="true">{isIn ? "−" : "+"}</span>
        </button>
        <CollapseTransition className="faq-shell" isIn={isIn}>
          <div className="collapse-demo__panel">{panel}</div>
        </CollapseTransition>
      </div>
    </div>
  );
}
