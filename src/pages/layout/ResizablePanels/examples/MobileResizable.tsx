import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import { Pane, type PaneText } from "./Pane.tsx";

type MobileResizableProps = { primary: PaneText; secondary: PaneText };

export function MobileResizable({ primary, secondary }: MobileResizableProps) {
  return (
    <div className="mx-auto w-full max-w-sm">
      <ResizablePanels orientation="vertical" size="lg" height={420} defaultLayout={[55, 45]}>
        <ResizablePanel minSize={20}>
          <Pane {...primary} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel minSize={18}>
          <Pane {...secondary} tone="muted" />
        </ResizablePanel>
      </ResizablePanels>
    </div>
  );
}
