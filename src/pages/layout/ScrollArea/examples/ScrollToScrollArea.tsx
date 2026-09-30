import { useRef, useState } from "react";
import { Button, ScrollArea, Typography } from "@gem-org/gem-system";
import { LongCopy } from "./LongCopy.tsx";
import "./scroll-demo.css";

type ScrollToScrollAreaProps = {
  label: string;
  top: string;
  bottom: string;
  progress: string;
  paragraphs: string[];
};

export function ScrollToScrollArea({ label, top, bottom, progress, paragraphs }: ScrollToScrollAreaProps) {
  const ref = useRef<HTMLElement>(null);
  const [percent, setPercent] = useState(0);

  const scrollTo = (edge: "top" | "bottom") => {
    const node = ref.current;
    if (!node) return;
    node.scrollTo({ top: edge === "top" ? 0 : node.scrollHeight, behavior: "smooth" });
  };

  const handleScroll = () => {
    const node = ref.current;
    if (!node) return;
    const max = node.scrollHeight - node.clientHeight;
    setPercent(max > 0 ? Math.round((node.scrollTop / max) * 100) : 0);
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="secondary" size="sm" onClick={() => scrollTo("top")}>
          {top}
        </Button>
        <Button variant="secondary" size="sm" onClick={() => scrollTo("bottom")}>
          {bottom}
        </Button>
        <Typography variant="caption" as="p" className="m-0">
          {progress}: {percent}%
        </Typography>
      </div>
      <div className="scroll-frame">
        <ScrollArea ref={ref} maxHeight={220} label={label} tabIndex={0} onScroll={handleScroll}>
          <LongCopy paragraphs={[...paragraphs, ...paragraphs]} />
        </ScrollArea>
      </div>
    </div>
  );
}
