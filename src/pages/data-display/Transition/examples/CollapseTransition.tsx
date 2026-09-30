import { useId, useState } from "react";
import { Button, Transition } from "@gem-org/gem-system";
import { ChevronDown } from "@gem-org/gem-system/icons";
import { DemoPanel } from "./DemoPanel.tsx";
import type { PanelCopy } from "./demo.ts";
import "./transition-demo.css";

type CollapseTransitionProps = PanelCopy & { trigger: string };

export function CollapseTransition({ trigger, title, body }: CollapseTransitionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="transition-demo">
      <Button
        size="sm"
        variant="secondary"
        rightIcon={<ChevronDown size="sm" className={open ? "rotate-180" : undefined} />}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        {trigger}
      </Button>
      <Transition id={panelId} in={open} effect="collapse" unmountOnExit={false}>
        <DemoPanel block title={title}>
          {body}
        </DemoPanel>
      </Transition>
    </div>
  );
}
