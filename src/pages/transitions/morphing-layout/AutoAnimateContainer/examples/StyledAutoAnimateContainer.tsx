import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";
import "./auto-animate-container-overrides.css";

type StyledAutoAnimateContainerProps = {
  showMore: string;
  showLess: string;
  short: string;
  longFirst: string;
  longSecond: string;
};

export function StyledAutoAnimateContainer({
  showMore,
  showLess,
  short,
  longFirst,
  longSecond,
}: StyledAutoAnimateContainerProps) {
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
      <AutoAnimateContainer className="alert-shell">
        {expanded ? (
          <>
            <p style={{ margin: 0 }}>{longFirst}</p>
            <p style={{ margin: "0.75rem 0 0" }}>{longSecond}</p>
          </>
        ) : (
          <p style={{ margin: 0 }}>{short}</p>
        )}
      </AutoAnimateContainer>
    </div>
  );
}
