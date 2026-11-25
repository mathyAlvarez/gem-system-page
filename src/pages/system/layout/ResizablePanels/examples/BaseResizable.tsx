import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import { Pane, type PaneText } from "./Pane.tsx";

type BaseResizableProps = { navigation: PaneText; canvas: PaneText };

export function BaseResizable({ navigation, canvas }: BaseResizableProps) {
  return (
    <ResizablePanels height={320} defaultLayout={[32, 68]}>
      <ResizablePanel minSize={16}>
        <Pane {...navigation} tone="muted" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={24}>
        <Pane {...canvas} />
      </ResizablePanel>
    </ResizablePanels>
  );
}
