import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition } from "@gem-org/gemsitions/view-transition";
import { VIEW_TRANSITION_TABS, type ViewTransitionTab } from "./demo.ts";
import "./view-transition-demo.css";

type AsChildViewTransitionProps = {
  copy: string;
};

export function AsChildViewTransition({ copy }: AsChildViewTransitionProps) {
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
      <ViewTransition
        asChild
        name="docs-vt-as-child"
        viewKey={tab}
        view={
          <div className="view-transition-demo__panel">
            {tab}
            <span className="view-transition-demo__copy">{copy}</span>
          </div>
        }
      >
        <section className="view-transition-demo__stage" />
      </ViewTransition>
    </div>
  );
}
