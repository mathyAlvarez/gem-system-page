import { ScrollArea } from "@gem-org/gem-system";
import { LongCopy } from "./LongCopy.tsx";
import "./scroll-demo.css";

type HeightScrollAreaProps = { fixed: string; short: string; long: string; paragraphs: string[] };

export function HeightScrollArea({ fixed, short, long, paragraphs }: HeightScrollAreaProps) {
  const examples = [
    {
      id: "fixed",
      caption: "height={200}",
      label: fixed,
      props: { height: 200 },
      content: paragraphs.slice(0, 1),
    },
    {
      id: "short",
      caption: "maxHeight={200}",
      label: short,
      props: { maxHeight: 200 },
      content: paragraphs.slice(0, 1),
    },
    {
      id: "long",
      caption: "maxHeight={200}",
      label: long,
      props: { maxHeight: 200 },
      content: paragraphs,
    },
  ];

  return (
    <div className="scroll-grid">
      {examples.map((example) => (
        <div key={example.id}>
          <p className="scroll-caption">
            {example.caption} · {example.label}
          </p>
          <div className="scroll-frame">
            <ScrollArea {...example.props} label={example.label}>
              <LongCopy paragraphs={example.content} />
            </ScrollArea>
          </div>
        </div>
      ))}
    </div>
  );
}
