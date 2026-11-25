import { useState } from "react";
import { Button, ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import {
  ChevronRight,
  GripVertical,
  Menu,
  MoreVertical,
  Settings,
} from "@gem-org/gem-system/icons";
import { Pane, type PaneText } from "./Pane.tsx";
import "./resizable-demo.css";

const icons = [
  { id: "MoreVertical", Icon: MoreVertical },
  { id: "GripVertical", Icon: GripVertical },
  { id: "Menu", Icon: Menu },
  { id: "Settings", Icon: Settings },
  { id: "ChevronRight", Icon: ChevronRight },
] as const;

type CustomIconResizableProps = {
  group: PaneText;
  perHandle: string;
  first: PaneText;
  second: PaneText;
  third: PaneText;
};

export function CustomIconResizable({
  group,
  perHandle,
  first,
  second,
  third,
}: CustomIconResizableProps) {
  const [iconId, setIconId] = useState<(typeof icons)[number]["id"]>("GripVertical");
  const Active = icons.find((item) => item.id === iconId)?.Icon ?? GripVertical;

  return (
    <div className="resizable-stack">
      <div className="resizable-toolbar">
        {icons.map(({ id, Icon }) => (
          <Button
            key={id}
            size="sm"
            variant={id === iconId ? "primary" : "secondary"}
            leftIcon={<Icon size="sm" />}
            onClick={() => setIconId(id)}
          >
            {id}
          </Button>
        ))}
      </div>
      <ResizablePanels
        height={200}
        defaultLayout={[38, 62]}
        handleThickness={8}
        icon={<Active size="sm" />}
      >
        <ResizablePanel>
          <Pane title={group.title} body={`icon={<${iconId} size="sm" />}`} tone="muted" />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Pane {...group} />
        </ResizablePanel>
      </ResizablePanels>

      <div>
        <p className="resizable-caption">{perHandle}</p>
        <ResizablePanels height={200} defaultLayout={[28, 44, 28]} handleThickness={8}>
          <ResizablePanel>
            <Pane {...first} tone="muted" />
          </ResizablePanel>
          <ResizableHandle
            icon={<Menu size="sm" />}
            color="var(--gem-color-primary-300)"
            hoverColor="var(--gem-color-primary-500)"
          />
          <ResizablePanel>
            <Pane {...second} />
          </ResizablePanel>
          <ResizableHandle
            icon={<GripVertical size="sm" />}
            color="var(--gem-color-secondary-400)"
            hoverColor="var(--gem-color-secondary-600)"
          />
          <ResizablePanel>
            <Pane {...third} tone="accent" />
          </ResizablePanel>
        </ResizablePanels>
      </div>
    </div>
  );
}
