import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import {
  AutoAnimateContainer,
  type AutoAnimateContainerProps,
} from "@gem-org/gemsitions/auto-animate-container";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./auto-animate-container-demo.css";

const panelVariants = cva("border border-[var(--gem-color-border)]", {
  variants: {
    tone: {
      neutral: "bg-[var(--gem-color-bg)]",
      accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_10%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftPanelProps = AutoAnimateContainerProps & VariantProps<typeof panelVariants>;

export function SoftPanel({ tone, className, children, ...props }: SoftPanelProps) {
  return (
    <AutoAnimateContainer
      duration={360}
      className={cn(panelVariants({ tone }), className)}
      {...props}
    >
      <div
        className="auto-animate-demo__panel"
        style={{ border: "none", background: "transparent" }}
      >
        {children}
      </div>
    </AutoAnimateContainer>
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantAutoAnimateContainerProps = {
  showMore: string;
  showLess: string;
  short: string;
  longFirst: string;
  longSecond: string;
};

export function VariantAutoAnimateContainer({
  showMore,
  showLess,
  short,
  longFirst,
  longSecond,
}: VariantAutoAnimateContainerProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="auto-animate-demo auto-animate-demo--wide">
      <div className="auto-animate-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? showLess : showMore}
        </Button>
      </div>
      <div className="auto-animate-demo__compare">
        {TONES.map((item) => (
          <div key={item.tone} className="auto-animate-demo__compare-col">
            <p className="auto-animate-demo__compare-label">{item.label}</p>
            <SoftPanel tone={item.tone}>
              {expanded ? (
                <>
                  <p>{longFirst}</p>
                  <p>{longSecond}</p>
                </>
              ) : (
                <p>{short}</p>
              )}
            </SoftPanel>
          </div>
        ))}
      </div>
    </div>
  );
}
