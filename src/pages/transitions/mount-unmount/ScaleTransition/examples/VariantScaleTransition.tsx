import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ScaleTransition, type ScaleTransitionProps } from "@gem-org/gemsitions/scale-transition";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./scale-transition-demo.css";

const panelVariants = cva("scale-demo__panel", {
  variants: {
    tone: {
      neutral: "",
      accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_14%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftScaleProps = ScaleTransitionProps & VariantProps<typeof panelVariants>;

export function SoftScale({ tone, className, children, ...props }: SoftScaleProps) {
  return (
    <ScaleTransition duration={360} className={cn(className)} {...props}>
      <div className={panelVariants({ tone })}>{children}</div>
    </ScaleTransition>
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantScaleTransitionProps = {
  scaleIn: string;
  scaleOut: string;
  label: string;
};

export function VariantScaleTransition({ scaleIn, scaleOut, label }: VariantScaleTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="scale-demo scale-demo--wide">
      <div className="scale-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? scaleOut : scaleIn}
        </Button>
      </div>
      <div className="scale-demo__compare">
        {TONES.map((item) => (
          <div key={item.tone}>
            <p className="scale-demo__compare-label">{item.label}</p>
            <div className="scale-demo__stage">
              <SoftScale tone={item.tone} isIn={isIn}>
                {label}
              </SoftScale>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
