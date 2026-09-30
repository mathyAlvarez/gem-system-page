import { ScrollArea, type ScrollAreaType } from "@gem-org/gem-system";
import { LongCopy } from "./LongCopy.tsx";
import "./scroll-demo.css";

const types: ScrollAreaType[] = ["auto", "always", "hover", "hidden"];

type TypesScrollAreaProps = { paragraphs: string[] };

export function TypesScrollArea({ paragraphs }: TypesScrollAreaProps) {
  return (
    <div className="scroll-grid">
      {types.map((type) => (
        <div key={type}>
          <p className="scroll-caption">type="{type}"</p>
          <div className="scroll-frame">
            <ScrollArea type={type} maxHeight={180} label={type} tabIndex={0}>
              <LongCopy paragraphs={paragraphs} />
            </ScrollArea>
          </div>
        </div>
      ))}
    </div>
  );
}
