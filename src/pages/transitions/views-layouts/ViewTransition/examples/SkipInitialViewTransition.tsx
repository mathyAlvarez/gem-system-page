import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition } from "@gem-org/gemsitions/view-transition";
import { VIEW_TRANSITION_TABS, type ViewTransitionTab } from "./demo.ts";
import "./view-transition-demo.css";

type SkipInitialViewTransitionProps = {
  remount: string;
  copies: Record<ViewTransitionTab, string>;
};

export function SkipInitialViewTransition({ remount, copies }: SkipInitialViewTransitionProps) {
  const [tab, setTab] = useState<ViewTransitionTab>("Inbox");
  const [key, setKey] = useState(0);

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
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            setTab("Inbox");
            setKey((value) => value + 1);
          }}
        >
          {remount}
        </Button>
      </div>
      <ViewTransition key={key} name="docs-vt-skip-initial" viewKey={tab} skipInitial={false}>
        <div className="view-transition-demo__panel">
          {tab}
          <span className="view-transition-demo__copy">{copies[tab]}</span>
        </div>
      </ViewTransition>
    </div>
  );
}
