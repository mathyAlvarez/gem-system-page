import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";

type TimingAutoAnimateContainerProps = {
  showMore: string;
  showLess: string;
  short: string;
  longFirst: string;
  longSecond: string;
  sibling: string;
};

export function TimingAutoAnimateContainer({
  showMore,
  showLess,
  short,
  longFirst,
  longSecond,
  sibling,
}: TimingAutoAnimateContainerProps) {
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
        <AutoAnimateContainer
          duration={{ enter: 420, exit: 200 }}
          delay={{ enter: 40, exit: 0 }}
          easing={{ enter: "enter", exit: "exit" }}
        >
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
