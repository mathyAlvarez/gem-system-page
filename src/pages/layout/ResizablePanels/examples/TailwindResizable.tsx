import { ResizableHandle, ResizablePanel, ResizablePanels, type ResizablePanelsProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { Pane, type PaneText } from "./Pane.tsx";

function SplitView({ className, classNames, ...props }: ResizablePanelsProps) {
  return (
    <ResizablePanels
      className={cn(
        "rounded-xl border-2 border-(--gem-color-primary-300) shadow-md",
        "[--gem-resizable-handle:2px] [--gem-resizable-handle-bg:var(--gem-color-primary-200)]",
        className,
      )}
      classNames={{
        ...classNames,
        grip: cn("rounded-full", classNames?.grip),
      }}
      {...props}
    />
  );
}

type TailwindResizableProps = { start: PaneText; end: PaneText };

export function TailwindResizable({ start, end }: TailwindResizableProps) {
  return (
    <div className="flex flex-col gap-4">
      <SplitView height={200} defaultLayout={[40, 60]}>
        <ResizablePanel>
          <Pane {...start} tone="muted" />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Pane {...end} />
        </ResizablePanel>
      </SplitView>

      <SplitView
        height={200}
        defaultLayout={[40, 60]}
        className="rounded-none border-(--gem-color-secondary-400) [--gem-resizable-handle-bg:var(--gem-color-secondary-200)]"
        classNames={{ handle: "hover:bg-(--gem-color-secondary-500)" }}
      >
        <ResizablePanel>
          <Pane {...start} tone="muted" />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Pane {...end} />
        </ResizablePanel>
      </SplitView>
    </div>
  );
}
