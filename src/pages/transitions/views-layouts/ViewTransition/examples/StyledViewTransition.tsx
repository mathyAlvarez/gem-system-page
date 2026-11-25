import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition } from "@gem-org/gemsitions/view-transition";
import { VIEW_TRANSITION_TABS, type ViewTransitionTab } from "./demo.ts";
import "./view-transition-demo.css";
import "./view-transition-overrides.css";

type StyledViewTransitionProps = {
  copies: Record<ViewTransitionTab, string>;
};

export function StyledViewTransition({ copies }: StyledViewTransitionProps) {
  const [tab, setTab] = useState<ViewTransitionTab>("Inbox");

  return (
    <div className="view-transition-demo">
      <div className="view-transition-demo__controls">
        {VIEW_TRANSITION_TABS.map((label) => (
          <Button
            key={label}
            size="sm"
            variant="secondary"
            aria-pressed={tab === label}
            onClick={() => setTab(label)}
          >
            {label}
          </Button>
        ))}
      </div>
      <ViewTransition name="docs-vt-styled" className="card-shell" viewKey={tab}>
        <div className="view-transition-demo__panel">
          {tab}
          <span className="view-transition-demo__copy">{copies[tab]}</span>
        </div>
      </ViewTransition>
    </div>
  );
}
