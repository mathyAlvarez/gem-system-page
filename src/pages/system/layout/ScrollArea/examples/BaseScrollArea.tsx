import { ScrollArea } from "@gem-org/gem-system";
import { LongCopy } from "./LongCopy.tsx";
import "./scroll-demo.css";

type BaseScrollAreaProps = { label: string; paragraphs: string[] };

export function BaseScrollArea({ label, paragraphs }: BaseScrollAreaProps) {
  return (
    <div className="scroll-frame">
      <ScrollArea maxHeight={240} label={label}>
        <LongCopy paragraphs={paragraphs} />
      </ScrollArea>
    </div>
  );
}
