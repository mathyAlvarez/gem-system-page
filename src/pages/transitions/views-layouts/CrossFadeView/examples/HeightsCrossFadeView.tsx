import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import "./cross-fade-view-demo.css";

type HeightsCrossFadeViewProps = {
  shortLabel: string;
  tallLabel: string;
  shortCopy: string;
  tallCopy: string;
  first: string;
  second: string;
  sibling: string;
};

export function HeightsCrossFadeView({
  shortLabel,
  tallLabel,
  shortCopy,
  tallCopy,
  first,
  second,
  sibling,
}: HeightsCrossFadeViewProps) {
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
        pagination={2}
        onPagination={(page) => setIsSecond(page >= 1)}
        first={
          <div className="cross-fade-demo__panel">
            {shortLabel}
            <span className="cross-fade-demo__copy">{shortCopy}</span>
          </div>
        }
        second={
          <div className="cross-fade-demo__panel">
            {tallLabel}
            <span className="cross-fade-demo__copy">{tallCopy}</span>
          </div>
        }
      />
      <p className="cross-fade-demo__sibling">{sibling}</p>
    </div>
  );
}
