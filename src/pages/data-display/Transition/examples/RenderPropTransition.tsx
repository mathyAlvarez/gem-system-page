import { useState } from "react";
import { Badge, Button, Transition, type TransitionStatus } from "@gem-org/gem-system";
import { DemoPanel } from "./DemoPanel.tsx";
import type { PanelCopy, ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

const STATUS_TONE = {
  entering: "info",
  entered: "success",
  exiting: "warning",
  exited: "neutral",
} as const satisfies Record<TransitionStatus, string>;

type RenderPropTransitionProps = ToggleCopy & PanelCopy & { statuses: Record<TransitionStatus, string> };

export function RenderPropTransition({ show, hide, title, body, statuses }: RenderPropTransitionProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className="transition-demo">
      <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
        {open ? hide : show}
      </Button>
      <div className="transition-demo__stage">
        <Transition in={open} effect="scale" duration={600} unmountOnExit={false}>
          {(status) => (
            <DemoPanel title={title}>
              {body}{" "}
              <Badge size="sm" tone={STATUS_TONE[status]} variant="soft">
                {statuses[status]}
              </Badge>
            </DemoPanel>
          )}
        </Transition>
      </div>
    </div>
  );
}
