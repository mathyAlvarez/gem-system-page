import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";

type BothAutoAnimateContainerProps = {
  expand: string;
  compact: string;
  short: string;
  longFirst: string;
  longSecond: string;
};

export function BothAutoAnimateContainer({
  expand,
  compact,
  short,
  longFirst,
  longSecond,
}: BothAutoAnimateContainerProps) {
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
          {expanded ? compact : expand}
        </Button>
      </div>
      <AutoAnimateContainer axis="both" duration={320} easing="emphasized">
        <div className="auto-animate-demo__panel" style={{ width: expanded ? "16rem" : "9rem" }}>
          {expanded ? (
            <>
              <p>{longFirst}</p>
              <p>{longSecond}</p>
            </>
          ) : (
            <p>{short}</p>
          )}
        </div>
      </AutoAnimateContainer>
    </div>
  );
}
