import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition, runViewTransition } from "@gem-org/gemsitions/view-transition";
import "./view-transition-demo.css";

type SharedNameViewTransitionProps = {
  expand: string;
  collapse: string;
  thumb: string;
  detail: string;
  detailCopy: string;
};

export function SharedNameViewTransition({
  expand,
  collapse,
  thumb,
  detail,
  detailCopy,
}: SharedNameViewTransitionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="view-transition-demo">
      <div className="view-transition-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={expanded}
          onClick={() => {
            void runViewTransition(() => setExpanded((value) => !value));
          }}
        >
          {expanded ? collapse : expand}
        </Button>
      </div>
      {expanded ? (
        <ViewTransition name="gemst-hero" viewKey="detail">
          <div className="view-transition-demo__panel view-transition-demo__panel--tall">
            {detail}
            <span className="view-transition-demo__copy">{detailCopy}</span>
          </div>
        </ViewTransition>
      ) : (
        <ViewTransition name="gemst-hero" viewKey="thumb">
          <div className="view-transition-demo__thumb">{thumb}</div>
        </ViewTransition>
      )}
    </div>
  );
}
