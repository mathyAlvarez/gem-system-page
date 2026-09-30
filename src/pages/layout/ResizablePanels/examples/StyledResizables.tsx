import { ResizableHandle, ResizablePanel, ResizablePanels } from "@gem-org/gem-system";
import "./resizable-overrides.css";

type StyledResizablesProps = { explorer: string; editor: string; files: string[] };

export function StyledResizables({ explorer, editor, files }: StyledResizablesProps) {
  return (
    <ResizablePanels height={240} defaultLayout={[28, 72]} className="ide-split">
      <ResizablePanel minSize={15}>
        <p className="m-0 mb-3 opacity-60">{explorer}</p>
        {files.map((file) => (
          <p key={file} className="m-0 py-0.5">
            {file}
          </p>
        ))}
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={30}>
        <p className="m-0 mb-3 opacity-60">{editor}</p>
        <pre className="m-0 whitespace-pre-wrap">{`export function App() {\n  return <Layout />;\n}`}</pre>
      </ResizablePanel>
    </ResizablePanels>
  );
}
