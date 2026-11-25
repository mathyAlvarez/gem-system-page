import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AutoAnimateContainer } from "@gem-org/gemsitions/auto-animate-container";
import { AUTO_ANIMATE_PANELS, type AutoAnimatePanelId } from "./demo.ts";
import "./auto-animate-container-demo.css";

type PanelsAutoAnimateContainerProps = {
  groupLabel: string;
  brief: string;
  detail: string;
  full: string;
  briefBody: string;
  detailBody: string;
  fullBody: string;
  sibling: string;
};

export function PanelsAutoAnimateContainer({
  groupLabel,
  brief,
  detail,
  full,
  briefBody,
  detailBody,
  fullBody,
  sibling,
}: PanelsAutoAnimateContainerProps) {
  const [active, setActive] = useState<AutoAnimatePanelId>("brief");
  const labels = { brief, detail, full };
  const bodies = { brief: briefBody, detail: detailBody, full: fullBody };

  return (
    <div className="auto-animate-demo">
      <div className="auto-animate-demo__controls" role="group" aria-label={groupLabel}>
        {AUTO_ANIMATE_PANELS.map((panel) => (
          <Button
            key={panel.id}
            size="sm"
            variant={active === panel.id ? "primary" : "secondary"}
            aria-pressed={active === panel.id}
            onClick={() => setActive(panel.id)}
          >
            {labels[panel.labelKey]}
          </Button>
        ))}
      </div>
      <div className="auto-animate-demo__stage">
        <AutoAnimateContainer axis="height">
          <div className="auto-animate-demo__panel">
            <p>{bodies[active]}</p>
          </div>
        </AutoAnimateContainer>
      </div>
      <p className="auto-animate-demo__sibling">{sibling}</p>
    </div>
  );
}
