import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import { CROSS_FADE_TABS, type CrossFadeTab } from "./demo.ts";
import "./cross-fade-view-demo.css";

type ViewKeyCrossFadeViewProps = {
  copy: string;
};

export function ViewKeyCrossFadeView({ copy }: ViewKeyCrossFadeViewProps) {
  const [tab, setTab] = useState<CrossFadeTab>("Inbox");

  return (
    <div className="cross-fade-demo">
      <div className="cross-fade-demo__controls">
        {CROSS_FADE_TABS.map((label) => (
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
      <CrossFadeView
        viewKey={tab}
        pagination={CROSS_FADE_TABS.length}
        paginationIndex={CROSS_FADE_TABS.indexOf(tab)}
        duration={{ enter: 380, exit: 280 }}
        easing={{ enter: "enter", exit: "exit" }}
        onPagination={(page) => {
          const next = CROSS_FADE_TABS[page];
          if (next) setTab(next);
        }}
      >
        <div className="cross-fade-demo__panel">
          {tab}
          <span className="cross-fade-demo__copy">{copy.replace("{tab}", tab)}</span>
        </div>
      </CrossFadeView>
    </div>
  );
}
