import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanels,
  ScrollArea,
  Typography,
} from "@gem-org/gem-system";
import "./resizable-demo.css";

const components = [
  "AspectRatio",
  "Button",
  "Checkbox",
  "Combobox",
  "Container",
  "DatePicker",
  "Flex",
  "Grid",
  "InputText",
  "Modal",
  "ResizablePanels",
  "ScrollArea",
  "Select",
  "Table",
  "Tabs",
  "Toast",
];

type ScrollAreaResizableProps = { indexTitle: string; articleTitle: string; paragraphs: string[] };

export function ScrollAreaResizable({
  indexTitle,
  articleTitle,
  paragraphs,
}: ScrollAreaResizableProps) {
  return (
    <ResizablePanels height={360} defaultLayout={[32, 68]}>
      <ResizablePanel minSize={18} className="resizable-fill">
        <ScrollArea height="100%" radius="none" label={indexTitle}>
          <div className="resizable-pane resizable-pane--muted">
            <Typography variant="label" as="span">
              {indexTitle}
            </Typography>
            {components.map((name) => (
              <Typography key={name} variant="bodySm" as="p">
                {name}
              </Typography>
            ))}
          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={28} className="resizable-fill">
        <ScrollArea height="100%" radius="none" label={articleTitle}>
          <div className="resizable-pane">
            <Typography variant="label" as="span">
              {articleTitle}
            </Typography>
            {[...paragraphs, ...paragraphs].map((text, index) => (
              <Typography key={index} variant="body" as="p">
                {text}
              </Typography>
            ))}
          </div>
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanels>
  );
}
