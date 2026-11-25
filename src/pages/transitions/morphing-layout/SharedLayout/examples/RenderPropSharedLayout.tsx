import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SharedLayout } from "@gem-org/gemsitions/shared-layout";
import "./shared-layout-demo.css";

type RenderPropSharedLayoutProps = {
  expand: string;
  collapse: string;
  summary: string;
  detailTitle: string;
  detailBody: string;
};

export function RenderPropSharedLayout({
  expand,
  collapse,
  summary,
  detailTitle,
  detailBody,
}: RenderPropSharedLayoutProps) {
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
      <div className="shared-layout-demo__stage shared-layout-demo__stage--center">
        <SharedLayout isExpanded={isExpanded}>
          {({ isExpanded: open }) =>
            open ? (
              <div className="shared-layout-demo__detail">
                <strong>{detailTitle}</strong>
                <p>{detailBody}</p>
              </div>
            ) : (
              <div className="shared-layout-demo__tile">{summary}</div>
            )
          }
        </SharedLayout>
      </div>
    </div>
  );
}
