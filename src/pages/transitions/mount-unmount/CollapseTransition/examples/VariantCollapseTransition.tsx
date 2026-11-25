import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import {
  CollapseTransition,
  type CollapseTransitionProps,
} from "@gem-org/gemsitions/collapse-transition";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./collapse-transition-demo.css";

const shellVariants = cva(
  "overflow-hidden rounded-[var(--gem-radius-lg)] border border-[var(--gem-color-border)]",
  {
    variants: {
      tone: {
        neutral: "bg-[var(--gem-color-bg)]",
        accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_10%,var(--gem-color-bg))]",
      },
    },
    defaultVariants: { tone: "neutral" },
  },
);

type SoftCollapseProps = CollapseTransitionProps & VariantProps<typeof shellVariants>;

export function SoftCollapse({ tone, className, children, ...props }: SoftCollapseProps) {
  return (
    <div className={cn(shellVariants({ tone }), className)}>
      <CollapseTransition duration={360} {...props}>
        <div className="collapse-demo__panel" style={{ background: "transparent" }}>
          {children}
        </div>
      </CollapseTransition>
    </div>
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantCollapseTransitionProps = {
  expand: string;
  collapse: string;
  panel: string;
};

export function VariantCollapseTransition({
  expand,
  collapse,
  panel,
}: VariantCollapseTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="collapse-demo collapse-demo--wide">
      <div className="collapse-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? collapse : expand}
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
          gap: "1rem",
        }}
      >
        {TONES.map((item) => (
          <div key={item.tone}>
            <p className="collapse-demo__measure" style={{ marginBottom: "0.75rem" }}>
              {item.label}
            </p>
            <SoftCollapse tone={item.tone} isIn={isIn}>
              {panel}
            </SoftCollapse>
          </div>
        ))}
      </div>
    </div>
  );
}
