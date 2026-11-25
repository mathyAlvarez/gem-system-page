import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";

type TimingSharedLayoutProps = {
  expand: string;
  collapse: string;
  tile: string;
  detailTitle: string;
  detailBody: string;
};

export function TimingSharedLayout({
  expand,
  collapse,
  tile,
  detailTitle,
  detailBody,
}: TimingSharedLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

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
          duration={{ enter: 420, exit: 240 }}
          easing={{ enter: "emphasized", exit: "exit" }}
          collapsed={<div className="shared-layout-demo__tile">{tile}</div>}
          expanded={
            <div className="shared-layout-demo__detail">
              <strong>{detailTitle}</strong>
              <p>{detailBody}</p>
            </div>
          }
        />
      </div>
    </div>
  );
}
