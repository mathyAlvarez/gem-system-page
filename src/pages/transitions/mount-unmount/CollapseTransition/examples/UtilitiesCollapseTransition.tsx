import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";

type UtilitiesCollapseTransitionProps = {
  expand: string;
  collapse: string;
  title: string;
  panel: string;
  sibling: string;
};

export function UtilitiesCollapseTransition({
  expand,
  collapse,
  title,
  panel,
  sibling,
}: UtilitiesCollapseTransitionProps) {
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
        <CollapseTransition
          isIn={isIn}
          classNames={{ root: "gemst-relative gemst-overflow-hidden", surface: "gemst-block" }}
        >
          <div className="collapse-demo__panel">{panel}</div>
        </CollapseTransition>
      </div>
      <p className="collapse-demo__sibling">{sibling}</p>
    </div>
  );
}
