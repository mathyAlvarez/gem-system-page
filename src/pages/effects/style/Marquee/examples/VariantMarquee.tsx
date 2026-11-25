import { Marquee, type MarqueeProps } from "@gem-org/gemffects/marquee";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { MARQUEE_LABELS } from "./demo.ts";
import "./marquee-demo.css";

const tickerVariants = cva("rounded-full border py-[var(--gem-space-2)]", {
  variants: {
    tone: {
      neutral:
        "border-[var(--gem-color-border)] bg-[var(--gem-color-bg-subtle)] text-[var(--gem-color-fg)]",
      primary:
        "border-[var(--gem-palette-primary-400)] bg-[var(--gem-palette-primary-950)] text-[var(--gem-palette-primary-200)]",
      warning:
        "border-[var(--gem-palette-warning-400)] bg-[var(--gem-palette-warning-950)] text-[var(--gem-palette-warning-200)]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type TickerProps = MarqueeProps & VariantProps<typeof tickerVariants>;

export function Ticker({ tone, className, ...props }: TickerProps) {
  return <Marquee gap="2rem" className={cn(tickerVariants({ tone }), className)} {...props} />;
}

export function VariantMarquee() {
  return (
    <div className="marquee-demo">
      {(["neutral", "primary", "warning"] as const).map((tone) => (
        <Ticker key={tone} tone={tone} variant={tone === "primary" ? "right" : "left"}>
          {MARQUEE_LABELS.map((label) => (
            <span key={label} className="marquee-demo__word">
              {label}
            </span>
          ))}
        </Ticker>
      ))}
    </div>
  );
}
