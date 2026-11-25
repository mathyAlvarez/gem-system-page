import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import "./cross-fade-view-demo.css";

type SwipeCrossFadeViewProps = {
  firstLabel: string;
  secondLabel: string;
  firstCopy: string;
  secondCopy: string;
  first: string;
  second: string;
};

export function SwipeCrossFadeView({
  firstLabel,
  secondLabel,
  firstCopy,
  secondCopy,
  first,
  second,
}: SwipeCrossFadeViewProps) {
  const [isSecond, setIsSecond] = useState(false);

  return (
    <div className="cross-fade-demo">
      <div className="cross-fade-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={!isSecond}
          onClick={() => setIsSecond(false)}
        >
          {first}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isSecond}
          onClick={() => setIsSecond(true)}
        >
          {second}
        </Button>
      </div>
      <CrossFadeView
        swipe
        isSecond={isSecond}
        pagination={{ count: 2, placement: "inside-end" }}
        onPagination={(page) => setIsSecond(page >= 1)}
        first={
          <div className="cross-fade-demo__panel cross-fade-demo__panel--overlay">
            {firstLabel}
            <span className="cross-fade-demo__copy">{firstCopy}</span>
          </div>
        }
        second={
          <div className="cross-fade-demo__panel cross-fade-demo__panel--overlay">
            {secondLabel}
            <span className="cross-fade-demo__copy">{secondCopy}</span>
          </div>
        }
      />
    </div>
  );
}
