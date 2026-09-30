import { ResizableHandle, ResizablePanel, ResizablePanels, ScrollArea } from "@gem-org/gem-system";
import { Pane, type PaneText } from "./Pane.tsx";

type CollapsibleResizableProps = { files: PaneText; editor: PaneText; terminal: PaneText };

export function CollapsibleResizable({ files, editor, terminal }: CollapsibleResizableProps) {
  return (
    <ResizablePanels height={400} defaultLayout={[26, 74]}>
      <ResizablePanel minSize={14} collapsible collapsedSize={0}>
        <Pane {...files} tone="muted" />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={40}>
        <ResizablePanels
          orientation="vertical"
          height="100%"
          radius="none"
          defaultLayout={[70, 30]}
          className="border-0"
        >
          <ResizablePanel minSize={24}>
            <ScrollArea height="100%" radius="none" label={editor.title}>
              <Pane {...editor} />
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel minSize={12} collapsible>
            <Pane {...terminal} tone="accent" />
          </ResizablePanel>
        </ResizablePanels>
      </ResizablePanel>
    </ResizablePanels>
  );
}
