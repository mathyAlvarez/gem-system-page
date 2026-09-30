import { ScrollArea, Typography } from "@gem-org/gem-system";
import "./scroll-demo.css";

type HorizontalScrollAreaProps = { label: string; item: string; hint: string };

export function HorizontalScrollArea({ label, item, hint }: HorizontalScrollAreaProps) {
  return (
    <div className="scroll-frame">
      <ScrollArea orientation="horizontal" maxWidth="100%" label={label}>
        <div className="scroll-rail">
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index} className="scroll-chip">
              <Typography variant="label" as="span">
                {item} {index + 1}
              </Typography>
              <Typography variant="caption" as="p">
                {hint}
              </Typography>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
