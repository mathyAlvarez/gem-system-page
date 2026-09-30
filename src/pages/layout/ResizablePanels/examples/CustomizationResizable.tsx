import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import { GripVertical, Menu } from "@gem-org/gem-system/icons";
import { Pane, type PaneText } from "./Pane.tsx";
import "./resizable-demo.css";

type CustomizationResizableProps = {
  shared: PaneText;
  override: PaneText;
  cssPadding: PaneText;
  handle: PaneText;
};

export function CustomizationResizable({ shared, override, cssPadding, handle }: CustomizationResizableProps) {
  return (
    <div className="resizable-stack">
      <ResizablePanels
        height={260}
        defaultLayout={[36, 64]}
        padding={4}
        icon={<Menu size="sm" />}
        handleColor="var(--gem-color-primary-200)"
        handleHoverColor="var(--gem-color-primary-500)"
        handleThickness={8}
      >
        <ResizablePanel>
          <Pane {...shared} tone="muted" flush />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel padding={8}>
          <Pane {...override} flush />
        </ResizablePanel>
      </ResizablePanels>

      <ResizablePanels
        height={200}
        defaultLayout={[50, 50]}
        padding="12px 16px"
        handleColor="var(--gem-color-neutral-300)"
        handleHoverColor="var(--gem-color-secondary-500)"
      >
        <ResizablePanel>
          <Pane {...cssPadding} tone="muted" flush />
        </ResizablePanel>
        <ResizableHandle
          icon={<GripVertical size="sm" />}
          color="var(--gem-color-secondary-400)"
          hoverColor="var(--gem-color-secondary-600)"
          thickness={10}
          gripStyle={{ color: "var(--gem-color-secondary-600)" }}
        />
        <ResizablePanel>
          <Pane {...handle} flush />
        </ResizablePanel>
      </ResizablePanels>
    </div>
  );
}
