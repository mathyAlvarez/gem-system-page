import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import { Pane, type PaneText } from "./Pane.tsx";

type ThreePanesResizableProps = { list: PaneText; detail: PaneText; inspector: PaneText };

export function ThreePanesResizable({ list, detail, inspector }: ThreePanesResizableProps) {
  return (
    <ResizablePanels height={320} defaultLayout={[22, 48, 30]}>
      <ResizablePanel minSize={12}>
        <Pane {...list} tone="muted" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={20}>
        <Pane {...detail} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={16} maxSize={40}>
        <Pane {...inspector} tone="accent" />
      </ResizablePanel>
    </ResizablePanels>
  );
}
