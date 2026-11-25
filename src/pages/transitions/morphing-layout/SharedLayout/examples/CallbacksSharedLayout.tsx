import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";

type CallbacksSharedLayoutProps = {
  expand: string;
  collapse: string;
  tile: string;
  detailTitle: string;
  detailBody: string;
  empty: string;
};

export function CallbacksSharedLayout({
  expand,
  collapse,
  tile,
  detailTitle,
  detailBody,
  empty,
}: CallbacksSharedLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 6));

  return (
    <div className="shared-layout-demo">
      <div className="shared-layout-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isExpanded}
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? collapse : expand}
        </Button>
      </div>
      <div className="shared-layout-demo__stage">
        <SharedLayout
          isExpanded={isExpanded}
          duration={400}
          onStart={() => push("onStart")}
          onComplete={() => push("onComplete")}
          onSharedLayout={(event) => push(`onSharedLayout · ${event.reason}`)}
          outSharedLayout={(event) => push(`outSharedLayout · ${event.reason}`)}
          collapsed={<div className="shared-layout-demo__tile">{tile}</div>}
          expanded={
            <div className="shared-layout-demo__detail">
              <strong>{detailTitle}</strong>
              <p>{detailBody}</p>
            </div>
          }
        />
      </div>
      <ul className="shared-layout-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
