import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition } from "@gem-org/gemsitions/view-transition";
import { VIEW_TRANSITION_TABS, type ViewTransitionTab } from "./demo.ts";
import "./view-transition-demo.css";

type CallbacksViewTransitionProps = {
  empty: string;
  copies: Record<ViewTransitionTab, string>;
};

export function CallbacksViewTransition({ empty, copies }: CallbacksViewTransitionProps) {
  const [tab, setTab] = useState<ViewTransitionTab>("Inbox");
  const [log, setLog] = useState<string[]>([]);

  const push = (entry: string) => setLog((current) => [entry, ...current].slice(0, 5));

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
        name="docs-vt-callbacks"
        viewKey={tab}
        onViewTransition={(event) => push(`onViewTransition · ${event.reason}`)}
        outViewTransition={(event) => push(`outViewTransition · ${event.reason}`)}
      >
        <div className="view-transition-demo__panel">
          {tab}
          <span className="view-transition-demo__copy">{copies[tab]}</span>
        </div>
      </ViewTransition>
      <ul className="view-transition-demo__log" aria-live="polite">
        {log.length === 0 ? (
          <li>{empty}</li>
        ) : (
          log.map((entry, index) => <li key={`${entry}-${index}`}>{entry}</li>)
        )}
      </ul>
    </div>
  );
}
