import { ScrollArea } from "@gem-org/gem-system";
import { LongCopy } from "./LongCopy.tsx";
import "./scroll-demo.css";

type MobileScrollAreaProps = { label: string; paragraphs: string[] };

export function MobileScrollArea({ label, paragraphs }: MobileScrollAreaProps) {
  return (
    <div className="scroll-frame mx-auto w-full max-w-sm">
      <ScrollArea maxHeight={320} size="lg" label={label}>
        <LongCopy paragraphs={paragraphs} />
      </ScrollArea>
    </div>
  );
}
