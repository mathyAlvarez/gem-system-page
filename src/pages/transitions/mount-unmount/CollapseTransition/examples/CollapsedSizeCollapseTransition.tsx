import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";

type CollapsedSizeCollapseTransitionProps = {
  expand: string;
  collapse: string;
  title: string;
  panelFirst: string;
  panelSecond: string;
  sibling: string;
};

export function CollapsedSizeCollapseTransition({
  expand,
  collapse,
  title,
  panelFirst,
  panelSecond,
  sibling,
}: CollapsedSizeCollapseTransitionProps) {
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
        <CollapseTransition isIn={isIn} collapsedSize={48} duration={{ enter: 320, exit: 240 }}>
          <div className="collapse-demo__panel">
            <p>{panelFirst}</p>
            <p>{panelSecond}</p>
          </div>
        </CollapseTransition>
      </div>
      <p className="collapse-demo__sibling">{sibling}</p>
    </div>
  );
}
