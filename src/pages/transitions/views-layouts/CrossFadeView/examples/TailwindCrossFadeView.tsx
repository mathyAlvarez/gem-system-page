import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import "./cross-fade-view-demo.css";

type TailwindCrossFadeViewProps = {
  firstLabel: string;
  secondLabel: string;
  firstCopy: string;
  secondCopy: string;
  first: string;
  second: string;
};

export function TailwindCrossFadeView({
  firstLabel,
  secondLabel,
  firstCopy,
  secondCopy,
  first,
  second,
}: TailwindCrossFadeViewProps) {
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
        duration={360}
        className="[--gemst-cross-fade-enter-easing:var(--gemst-easing-emphasized)] [--gemst-cross-fade-pagination-active-color:var(--gem-color-info)]"
        onPagination={(page) => setIsSecond(page >= 1)}
        first={
          <div className="rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] px-5 py-4 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]">
            {firstLabel}
            <span className="mt-2 block text-xs font-normal text-[var(--gem-color-fg-muted)]">
              {firstCopy}
            </span>
          </div>
        }
        second={
          <div className="rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] px-5 py-4 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]">
            {secondLabel}
            <span className="mt-2 block text-xs font-normal text-[var(--gem-color-fg-muted)]">
              {secondCopy}
            </span>
          </div>
        }
      />
    </div>
  );
}
