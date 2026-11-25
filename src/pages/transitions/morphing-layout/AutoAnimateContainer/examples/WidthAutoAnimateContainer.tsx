import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";

type WidthAutoAnimateContainerProps = {
  shortLabel: string;
  longLabel: string;
  short: string;
  long: string;
};

export function WidthAutoAnimateContainer({
  shortLabel,
  longLabel,
  short,
  long,
}: WidthAutoAnimateContainerProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="auto-animate-demo">
      <div className="auto-animate-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? shortLabel : longLabel}
        </Button>
      </div>
      <AutoAnimateContainer axis="width" duration={{ enter: 280, exit: 200 }} easing="emphasized">
        <span className="auto-animate-demo__chip">{expanded ? long : short}</span>
      </AutoAnimateContainer>
    </div>
  );
}
