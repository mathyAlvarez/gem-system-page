import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { FadeTransition, type FadeTransitionProps } from "@gem-org/gemsitions/fade-transition";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./fade-transition-demo.css";

const panelVariants = cva("fade-demo__panel", {
  variants: {
    tone: {
      neutral: "",
      accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_14%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftFadeProps = FadeTransitionProps & VariantProps<typeof panelVariants>;

export function SoftFade({ tone, className, children, ...props }: SoftFadeProps) {
  return (
    <FadeTransition duration={360} className={cn(className)} {...props}>
      <div className={panelVariants({ tone })}>{children}</div>
    </FadeTransition>
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantFadeTransitionProps = {
  fadeIn: string;
  fadeOut: string;
  label: string;
};

export function VariantFadeTransition({ fadeIn, fadeOut, label }: VariantFadeTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="fade-demo fade-demo--wide">
      <div className="fade-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? fadeOut : fadeIn}
        </Button>
      </div>
      <div className="fade-demo__compare">
        {TONES.map((item) => (
          <div key={item.tone}>
            <p className="fade-demo__compare-label">{item.label}</p>
            <div className="fade-demo__stage">
              <SoftFade tone={item.tone} isIn={isIn}>
                {label}
              </SoftFade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
