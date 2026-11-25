import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";

type DisabledAutoAnimateContainerProps = {
  showMore: string;
  showLess: string;
  short: string;
  longFirst: string;
  longSecond: string;
  sibling: string;
};

export function DisabledAutoAnimateContainer({
  showMore,
  showLess,
  short,
  longFirst,
  longSecond,
  sibling,
}: DisabledAutoAnimateContainerProps) {
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
          {expanded ? showLess : showMore}
        </Button>
      </div>
      <div className="auto-animate-demo__stage">
        <AutoAnimateContainer isDisabled>
          <div className="auto-animate-demo__panel">
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
      <p className="auto-animate-demo__sibling">{sibling}</p>
    </div>
  );
}
