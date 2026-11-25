import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition } from "@gem-org/gemsitions/view-transition";
import { VIEW_TRANSITION_TABS, type ViewTransitionTab } from "./demo.ts";
import "./view-transition-demo.css";

type TailwindViewTransitionProps = {
  copies: Record<ViewTransitionTab, string>;
};

export function TailwindViewTransition({ copies }: TailwindViewTransitionProps) {
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
        name="docs-vt-tailwind"
        viewKey={tab}
        duration={360}
        className="[--gemst-view-transition-enter-easing:var(--gemst-easing-emphasized)]"
      >
        <div className="min-h-[8.5rem] rounded-[var(--gem-radius-lg)] bg-[var(--gem-color-bg-subtle)] px-5 py-4 text-sm font-semibold text-[var(--gem-color-fg)] shadow-[var(--gem-shadow-sm)]">
          {tab}
          <span className="mt-2 block text-xs font-normal text-[var(--gem-color-fg-muted)]">
            {copies[tab]}
          </span>
        </div>
      </ViewTransition>
    </div>
  );
}
