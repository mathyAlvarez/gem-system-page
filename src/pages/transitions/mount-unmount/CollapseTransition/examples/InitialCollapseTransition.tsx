import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";

type InitialCollapseTransitionProps = {
  expand: string;
  collapse: string;
  remount: string;
  title: string;
  panel: string;
  sibling: string;
};

export function InitialCollapseTransition({
  expand,
  collapse,
  remount,
  title,
  panel,
  sibling,
}: InitialCollapseTransitionProps) {
  const [isIn, setIsIn] = useState(true);
  const [key, setKey] = useState(0);

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
        <CollapseTransition key={key} isIn={isIn} initial={false}>
          <div className="collapse-demo__panel">{panel}</div>
        </CollapseTransition>
      </div>
      <p className="collapse-demo__sibling">{sibling}</p>
    </div>
  );
}
