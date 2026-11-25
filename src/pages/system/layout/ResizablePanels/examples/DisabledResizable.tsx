import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import { Pane, type PaneText } from "./Pane.tsx";
import "./resizable-demo.css";

type DisabledResizableProps = {
  group: string;
  handle: string;
  start: PaneText;
  middle: PaneText;
  end: PaneText;
};

export function DisabledResizable({ group, handle, start, middle, end }: DisabledResizableProps) {
  return (
    <div className="resizable-stack">
      <div>
        <p className="resizable-caption">{group}</p>
        <ResizablePanels height={160} isDisabled>
          <ResizablePanel>
            <Pane {...start} tone="muted" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <Pane {...end} />
          </ResizablePanel>
        </ResizablePanels>
      </div>
      <div>
        <p className="resizable-caption">{handle}</p>
        <ResizablePanels height={160}>
          <ResizablePanel>
            <Pane {...start} tone="muted" />
          </ResizablePanel>
          <ResizableHandle isDisabled />
          <ResizablePanel>
            <Pane {...middle} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <Pane {...end} tone="accent" />
          </ResizablePanel>
        </ResizablePanels>
      </div>
    </div>
  );
}
