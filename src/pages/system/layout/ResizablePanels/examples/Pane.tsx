import { Typography } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import "./resizable-demo.css";

export type PaneText = { title: string; body: string };

type PaneProps = PaneText & {
  tone?: "default" | "muted" | "accent";
  flush?: boolean;
};

export function Pane({ title, body, tone = "default", flush }: PaneProps) {
  return (
    <div
      className={cn(
        "resizable-pane",
        tone !== "default" && `resizable-pane--${tone}`,
        flush && "resizable-pane--flush",
      )}
    >
      <Typography variant="label" as="span">
        {title}
      </Typography>
      <Typography variant="bodySm" as="p">
        {body}
      </Typography>
    </div>
  );
}
