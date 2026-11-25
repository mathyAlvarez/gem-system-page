import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition, supportsViewTransition } from "@gem-org/gemsitions/view-transition";
import { VIEW_TRANSITION_TABS, type ViewTransitionTab } from "./demo.ts";
import "./view-transition-demo.css";

type BaseViewTransitionProps = {
  sibling: string;
  noApi: string;
  copies: Record<ViewTransitionTab, string>;
};

export function BaseViewTransition({ sibling, noApi, copies }: BaseViewTransitionProps) {
  const [tab, setTab] = useState<ViewTransitionTab>("Inbox");
  const native = supportsViewTransition();

  return (
    <div className="view-transition-demo">
      {!native ? <p className="view-transition-demo__badge">{noApi}</p> : null}
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
      <ViewTransition name="docs-vt-base" viewKey={tab}>
        <div
          className={
            tab === "Sent"
              ? "view-transition-demo__panel view-transition-demo__panel--tall"
              : "view-transition-demo__panel"
          }
        >
          {tab}
          <span className="view-transition-demo__copy">{copies[tab]}</span>
        </div>
      </ViewTransition>
      <p className="view-transition-demo__sibling">{sibling}</p>
    </div>
  );
}
