import { useState } from "react";
import { Button, ResizableHandle, ResizablePanel, ResizablePanels, Typography } from "@gem-org/gem-system";
import { Pane, type PaneText } from "./Pane.tsx";
import "./resizable-demo.css";

type ControlledResizableProps = {
  reset: string;
  split: string;
  sidebar: PaneText;
  main: PaneText;
};

export function ControlledResizable({ reset, split, sidebar, main }: ControlledResizableProps) {
  const [layout, setLayout] = useState([30, 70]);

  return (
    <div className="resizable-stack">
      <div className="resizable-toolbar">
        <Button variant="secondary" size="sm" onClick={() => setLayout([30, 70])}>
          {reset}
        </Button>
        <Button variant="secondary" size="sm" onClick={() => setLayout([50, 50])}>
          {split}
        </Button>
        <Typography variant="caption" as="p">
          {layout.map((size) => `${Math.round(size)}%`).join(" · ")}
        </Typography>
      </div>
      <ResizablePanels height={280} layout={layout} onLayoutChange={setLayout} keyboardStep={5}>
        <ResizablePanel minSize={15}>
          <Pane {...sidebar} tone="muted" />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={20}>
          <Pane {...main} />
        </ResizablePanel>
      </ResizablePanels>
    </div>
  );
}
