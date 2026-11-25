import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanels,
  type ResizableSize,
} from "@gem-org/gem-system";
import { Pane } from "./Pane.tsx";
import "./resizable-demo.css";

const sizes: ResizableSize[] = ["sm", "md", "lg"];

type SizesResizableProps = { start: string; end: string; hint: string };

export function SizesResizable({ start, end, hint }: SizesResizableProps) {
  return (
    <div className="resizable-stack">
      {sizes.map((size) => (
        <div key={size}>
          <p className="resizable-caption">size="{size}"</p>
          <ResizablePanels size={size} height={120} defaultLayout={[40, 60]}>
            <ResizablePanel>
              <Pane title={start} body={`size="${size}"`} tone="muted" />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <Pane title={end} body={hint} />
            </ResizablePanel>
          </ResizablePanels>
        </div>
      ))}
    </div>
  );
}
