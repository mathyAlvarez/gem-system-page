import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import { Pane, type PaneText } from "./Pane.tsx";

type WithoutGripResizableProps = { start: PaneText; end: PaneText };

export function WithoutGripResizable({ start, end }: WithoutGripResizableProps) {
  return (
    <ResizablePanels height={240} size="sm" defaultLayout={[45, 55]}>
      <ResizablePanel>
        <Pane {...start} tone="muted" />
      </ResizablePanel>
      <ResizableHandle withHandle={false} />
      <ResizablePanel>
        <Pane {...end} />
      </ResizablePanel>
    </ResizablePanels>
  );
}
