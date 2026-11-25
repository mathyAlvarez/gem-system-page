import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import "./cross-fade-view-demo.css";

type UtilitiesCrossFadeViewProps = {
  firstLabel: string;
  secondLabel: string;
  firstCopy: string;
  secondCopy: string;
  first: string;
  second: string;
};

export function UtilitiesCrossFadeView({
  firstLabel,
  secondLabel,
  firstCopy,
  secondCopy,
  first,
  second,
}: UtilitiesCrossFadeViewProps) {
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
        classNames={{ root: "gemst-relative gemst-overflow-hidden", pane: "gemst-block" }}
        onPagination={(page) => setIsSecond(page >= 1)}
        first={
          <div className="cross-fade-demo__panel">
            {firstLabel}
            <span className="cross-fade-demo__copy">{firstCopy}</span>
          </div>
        }
        second={
          <div className="cross-fade-demo__panel">
            {secondLabel}
            <span className="cross-fade-demo__copy">{secondCopy}</span>
          </div>
        }
      />
    </div>
  );
}
