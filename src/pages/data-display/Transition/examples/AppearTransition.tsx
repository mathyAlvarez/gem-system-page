import { useState } from "react";
import { Button, Transition } from "@gem-org/gem-system";
import { Refresh } from "@gem-org/gem-system/icons";
import { DemoPanel } from "./DemoPanel.tsx";
import type { PanelCopy } from "./demo.ts";
import "./transition-demo.css";

export function AppearTransition({ replay, title, body }: PanelCopy & { replay: string }) {
  const [mount, setMount] = useState(0);

  return (
    <div className="transition-demo">
      <Button size="sm" variant="secondary" leftIcon={<Refresh size="sm" />} onClick={() => setMount(mount + 1)}>
        {replay}
      </Button>
      <div className="transition-demo__stage">
        <Transition key={mount} in appear effect="scale" duration={360}>
          <DemoPanel title={title}>{body}</DemoPanel>
        </Transition>
      </div>
    </div>
  );
}
