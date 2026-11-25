import { ScrollArea } from "@gem-org/gem-system";
import { LongCopy } from "./LongCopy.tsx";
import "./scroll-demo.css";

type BothScrollAreaProps = { label: string; paragraphs: string[] };

export function BothScrollArea({ label, paragraphs }: BothScrollAreaProps) {
  return (
    <div className="scroll-frame">
      <ScrollArea orientation="both" maxHeight={220} maxWidth="100%" label={label}>
        <div className="scroll-sheet">
          <LongCopy paragraphs={paragraphs} />
        </div>
      </ScrollArea>
    </div>
  );
}
