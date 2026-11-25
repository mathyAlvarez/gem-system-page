import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";
import "./shared-layout-overrides.css";

type StyledSharedLayoutProps = {
  expand: string;
  collapse: string;
  tile: string;
  detailTitle: string;
  detailBody: string;
};

export function StyledSharedLayout({
  expand,
  collapse,
  tile,
  detailTitle,
  detailBody,
}: StyledSharedLayoutProps) {
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
          className="card-shell"
          isExpanded={isExpanded}
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
