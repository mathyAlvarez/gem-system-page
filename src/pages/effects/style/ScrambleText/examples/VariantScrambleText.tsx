import { ScrambleText, type ScrambleTextProps } from "@gem-org/gemffects/scramble-text";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { ScrambleTile } from "./ScrambleTile.tsx";
import "./scramble-text-demo.css";

const statusVariants = cva(
  "text-[length:var(--gem-font-size-lg)] font-semibold tracking-[0.12em]",
  {
    variants: {
      tone: {
        success: "text-[var(--gem-palette-success-300)]",
        warning: "text-[var(--gem-palette-warning-300)]",
        error: "text-[var(--gem-palette-error-300)]",
      },
    },
    defaultVariants: { tone: "success" },
  },
);

type StatusScrambleProps = Omit<ScrambleTextProps, "children"> &
  VariantProps<typeof statusVariants> & {
    text: string;
  };

export function StatusScramble({ tone, className, ...props }: StatusScrambleProps) {
  return (
    <ScrambleText
      variant="loop"
      hold={1600}
      className={cn(statusVariants({ tone }), className)}
      {...props}
    />
  );
}

const STATUSES = [
  { tone: "success", text: "ONLINE" },
  { tone: "warning", text: "DEGRADED" },
  { tone: "error", text: "OFFLINE" },
] as const;

export function VariantScrambleText() {
  return (
    <div className="scramble-demo">
      {STATUSES.map((status) => (
        <ScrambleTile key={status.tone} label={`tone="${status.tone}"`}>
          <StatusScramble tone={status.tone} text={status.text} />
        </ScrambleTile>
      ))}
    </div>
  );
}
