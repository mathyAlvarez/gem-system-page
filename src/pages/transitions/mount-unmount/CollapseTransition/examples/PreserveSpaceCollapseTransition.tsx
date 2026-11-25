import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CollapseTransition } from "@gem-org/gemsitions/collapse-transition";
import "./collapse-transition-demo.css";

type PreserveSpaceCollapseTransitionProps = {
  show: string;
  hide: string;
  panel: string;
  sibling: string;
};

export function PreserveSpaceCollapseTransition({
  show,
  hide,
  panel,
  sibling,
}: PreserveSpaceCollapseTransitionProps) {
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
          {isIn ? hide : show}
        </Button>
      </div>
      <div className="collapse-demo__stack">
        <CollapseTransition isIn={isIn} preserveSpace asChild>
          <div className="collapse-demo__panel collapse-demo__panel--card">{panel}</div>
        </CollapseTransition>
        <p className="collapse-demo__sibling">{sibling}</p>
      </div>
    </div>
  );
}
