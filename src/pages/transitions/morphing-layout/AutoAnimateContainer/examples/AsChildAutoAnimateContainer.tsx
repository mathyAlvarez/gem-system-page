import { useState } from "react";
import { Button, Card } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import "./auto-animate-container-demo.css";

type AsChildAutoAnimateContainerProps = {
  showMore: string;
  showLess: string;
  title: string;
  short: string;
  longFirst: string;
  longSecond: string;
};

export function AsChildAutoAnimateContainer({
  showMore,
  showLess,
  title,
  short,
  longFirst,
  longSecond,
}: AsChildAutoAnimateContainerProps) {
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
      <AutoAnimateContainer asChild axis="height">
        <Card title={title} bordered shadow="sm">
          {expanded ? (
            <>
              <p>{longFirst}</p>
              <p>{longSecond}</p>
            </>
          ) : (
            <p>{short}</p>
          )}
        </Card>
      </AutoAnimateContainer>
    </div>
  );
}
