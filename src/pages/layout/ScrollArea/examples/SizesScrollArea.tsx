import { ScrollArea, type ScrollAreaSize } from "@gem-org/gem-system";
import { LongCopy } from "./LongCopy.tsx";
import "./scroll-demo.css";

const sizes: ScrollAreaSize[] = ["sm", "md", "lg"];

type SizesScrollAreaProps = { paragraphs: string[] };

export function SizesScrollArea({ paragraphs }: SizesScrollAreaProps) {
  return (
    <div className="scroll-grid">
      {sizes.map((size) => (
        <div key={size}>
          <p className="scroll-caption">size="{size}"</p>
          <div className="scroll-frame">
            <ScrollArea size={size} type="always" maxHeight={160} label={size}>
              <LongCopy paragraphs={paragraphs} />
            </ScrollArea>
          </div>
        </div>
      ))}
    </div>
  );
}
