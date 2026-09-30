import { useState } from "react";
import { Button, Transition } from "@gem-org/gem-system";
import { DemoPanel } from "./DemoPanel.tsx";
import type { PanelCopy, ToggleCopy } from "./demo.ts";
import "./transition-demo.css";

export function BaseTransition({ show, hide, title, body }: ToggleCopy & PanelCopy) {
  const [open, setOpen] = useState(true);

  return (
    <div className="transition-demo">
      <Button size="sm" variant={open ? "secondary" : "primary"} onClick={() => setOpen(!open)}>
        {open ? hide : show}
      </Button>
      <div className="transition-demo__stage">
        <Transition in={open}>
          <DemoPanel title={title}>{body}</DemoPanel>
        </Transition>
      </div>
    </div>
  );
}
