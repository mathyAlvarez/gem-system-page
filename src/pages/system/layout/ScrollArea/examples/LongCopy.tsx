import { Typography } from "@gem-org/gem-system";
import "./scroll-demo.css";

type LongCopyProps = { paragraphs: string[] };

export function LongCopy({ paragraphs }: LongCopyProps) {
  return (
    <div className="scroll-copy">
      {paragraphs.map((text) => (
        <Typography key={text} variant="body" as="p">
          {text}
        </Typography>
      ))}
    </div>
  );
}
