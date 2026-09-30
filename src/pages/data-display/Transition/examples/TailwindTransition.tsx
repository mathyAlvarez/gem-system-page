import { useState } from "react";
import { Button, Transition } from "@gem-org/gem-system";
import { DemoPanel } from "./DemoPanel.tsx";
import type { PanelCopy, ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

export function TailwindTransition({ show, hide, title, body }: ToggleCopy & PanelCopy) {
  const [open, setOpen] = useState(true);

  return (
    <div className="transition-demo">
      <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
        {open ? hide : show}
      </Button>
      <div className="transition-demo__stage">
        <Transition
          in={open}
          effect="slide-up"
          duration={400}
          className="[--gem-transition-offset:2.5rem] [--gem-transition-easing:cubic-bezier(0.34,1.56,0.64,1)]"
        >
          <DemoPanel title={title}>{body}</DemoPanel>
        </Transition>
      </div>
    </div>
  );
}
