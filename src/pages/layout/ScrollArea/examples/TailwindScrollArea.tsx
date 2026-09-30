import { ScrollArea, type ScrollAreaProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { LongCopy } from "./LongCopy.tsx";

function Scroller({ className, ...props }: ScrollAreaProps) {
  return (
    <ScrollArea
      className={cn(
        "ring-1 ring-(--gem-color-border)",
        "[--gem-scroll-area-size:0.625rem] [--gem-scroll-area-thumb:var(--gem-color-primary-300)] [--gem-scroll-area-thumb-hover:var(--gem-color-primary-500)]",
        className,
      )}
      {...props}
    />
  );
}

type TailwindScrollAreaProps = { label: string; paragraphs: string[] };

export function TailwindScrollArea({ label, paragraphs }: TailwindScrollAreaProps) {
  return (
    <div className="scroll-grid">
      <Scroller type="always" maxHeight={200} label={label}>
        <LongCopy paragraphs={paragraphs} />
      </Scroller>
      <Scroller
        type="always"
        maxHeight={200}
        label={label}
        className="bg-(--gem-color-bg-subtle) [--gem-scroll-area-thumb:var(--gem-color-secondary-400)] [--gem-scroll-area-track:var(--gem-color-border)]"
      >
        <LongCopy paragraphs={paragraphs} />
      </Scroller>
    </div>
  );
}
