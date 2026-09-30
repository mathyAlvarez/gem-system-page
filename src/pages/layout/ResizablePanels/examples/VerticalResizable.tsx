import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import { Pane, type PaneText } from "./Pane.tsx";

type VerticalResizableProps = { editor: PaneText; output: PaneText };

export function VerticalResizable({ editor, output }: VerticalResizableProps) {
  return (
    <ResizablePanels orientation="vertical" height={360} defaultLayout={[58, 42]}>
      <ResizablePanel minSize={20}>
        <Pane {...editor} />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={16}>
        <Pane {...output} tone="muted" />
      </ResizablePanel>
    </ResizablePanels>
  );
}
