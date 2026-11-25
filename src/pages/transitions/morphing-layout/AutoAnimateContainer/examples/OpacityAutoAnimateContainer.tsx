import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";

type OpacityAutoAnimateContainerProps = {
  showMore: string;
  showLess: string;
  short: string;
  longFirst: string;
  longSecond: string;
  withoutFade: string;
  withFade: string;
};

export function OpacityAutoAnimateContainer({
  showMore,
  showLess,
  short,
  longFirst,
  longSecond,
  withoutFade,
  withFade,
}: OpacityAutoAnimateContainerProps) {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const body = (expanded: boolean) =>
    expanded ? (
      <>
        <p>{longFirst}</p>
        <p>{longSecond}</p>
      </>
    ) : (
      <p>{short}</p>
    );

  return (
    <div className="auto-animate-demo auto-animate-demo--wide">
      <div className="auto-animate-demo__compare">
        <div className="auto-animate-demo__compare-col">
          <p className="auto-animate-demo__compare-label">{withoutFade}</p>
          <div className="auto-animate-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={left}
              onClick={() => setLeft((value) => !value)}
            >
              {left ? showLess : showMore}
            </Button>
          </div>
          <div className="auto-animate-demo__stage">
            <AutoAnimateContainer duration={420}>
              <div className="auto-animate-demo__panel">{body(left)}</div>
            </AutoAnimateContainer>
          </div>
        </div>
        <div className="auto-animate-demo__compare-col">
          <p className="auto-animate-demo__compare-label">{withFade}</p>
          <div className="auto-animate-demo__controls">
            <Button
              size="sm"
              variant="secondary"
              aria-pressed={right}
              onClick={() => setRight((value) => !value)}
            >
              {right ? showLess : showMore}
            </Button>
          </div>
          <div className="auto-animate-demo__stage">
            <AutoAnimateContainer animateOpacity duration={420}>
              <div className="auto-animate-demo__panel">{body(right)}</div>
            </AutoAnimateContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
