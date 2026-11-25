import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";

type TailwindAutoAnimateContainerProps = {
  showMore: string;
  showLess: string;
  short: string;
  longFirst: string;
  longSecond: string;
};

export function TailwindAutoAnimateContainer({
  showMore,
  showLess,
  short,
  longFirst,
  longSecond,
}: TailwindAutoAnimateContainerProps) {
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
      <AutoAnimateContainer
        duration={420}
        className="rounded-[var(--gem-radius-lg)] border border-[var(--gem-color-border)] bg-[var(--gem-color-bg-subtle)] [--gemst-auto-animate-easing:var(--gemst-easing-emphasized)]"
      >
        <div className="p-4 text-sm text-[var(--gem-color-fg)]">
          {expanded ? (
            <>
              <p className="m-0">{longFirst}</p>
              <p className="mt-3 mb-0">{longSecond}</p>
            </>
          ) : (
            <p className="m-0">{short}</p>
          )}
        </div>
      </AutoAnimateContainer>
    </div>
  );
}
