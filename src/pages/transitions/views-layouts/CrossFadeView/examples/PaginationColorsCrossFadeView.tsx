import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import "./cross-fade-view-demo.css";

type PaginationColorsCrossFadeViewProps = {
  firstLabel: string;
  secondLabel: string;
  firstCopy: string;
  secondCopy: string;
  first: string;
  second: string;
};

export function PaginationColorsCrossFadeView({
  firstLabel,
  secondLabel,
  firstCopy,
  secondCopy,
  first,
  second,
}: PaginationColorsCrossFadeViewProps) {
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
        isSecond={isSecond}
        pagination={{
          count: 2,
          placement: "inside-end",
          color: "var(--gem-palette-neutral-400)",
          activeColor: "var(--gem-palette-info-500)",
          size: "0.55rem",
          gap: "0.45rem",
        }}
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
