import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView } from "@gem-org/gemsitions/cross-fade-view";
import { CROSS_FADE_TABS, type CrossFadeTab } from "./demo.ts";
import "./cross-fade-view-demo.css";

type KeepStateCrossFadeViewProps = {
  noteLabel: string;
  placeholder: string;
  changeLabel: string;
};

export function KeepStateCrossFadeView({
  noteLabel,
  placeholder,
  changeLabel,
}: KeepStateCrossFadeViewProps) {
  const [tab, setTab] = useState<CrossFadeTab>("Inbox");
  const [log, setLog] = useState("—");

  return (
    <div className="cross-fade-demo">
      <p className="cross-fade-demo__copy">
        {changeLabel}: <strong>{log}</strong>
      </p>
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
        keepState
        viewKey={tab}
        pagination={CROSS_FADE_TABS.length}
        paginationIndex={CROSS_FADE_TABS.indexOf(tab)}
        onViewChange={(next, prev) => setLog(`${String(prev)} → ${String(next)}`)}
        onPagination={(page) => {
          const next = CROSS_FADE_TABS[page];
          if (next) setTab(next);
        }}
      >
        <div className="cross-fade-demo__panel">
          {tab}
          <label className="cross-fade-demo__field">
            {noteLabel.replace("{tab}", tab)}
            <input type="text" defaultValue="" placeholder={placeholder} />
          </label>
        </div>
      </CrossFadeView>
    </div>
  );
}
