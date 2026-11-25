import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SlideTransition, type SlideTransitionProps } from "@gem-org/gemsitions/slide-transition";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./slide-transition-demo.css";

const panelVariants = cva("slide-demo__panel", {
  variants: {
    tone: {
      neutral: "",
      accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_14%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftSlideProps = SlideTransitionProps & VariantProps<typeof panelVariants>;

export function SoftSlide({ tone, className, children, ...props }: SoftSlideProps) {
  return (
    <SlideTransition from="bottom" duration={360} className={cn(className)} {...props}>
      <div className={panelVariants({ tone })}>{children}</div>
    </SlideTransition>
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantSlideTransitionProps = {
  slideIn: string;
  slideOut: string;
  label: string;
};

export function VariantSlideTransition({ slideIn, slideOut, label }: VariantSlideTransitionProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="slide-demo slide-demo--wide">
      <div className="slide-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isIn}
          onClick={() => setIsIn((value) => !value)}
        >
          {isIn ? slideOut : slideIn}
        </Button>
      </div>
      <div className="slide-demo__compare">
        {TONES.map((item) => (
          <div key={item.tone}>
            <p className="slide-demo__compare-label">{item.label}</p>
            <div className="slide-demo__stage" data-from="bottom">
              <SoftSlide tone={item.tone} isIn={isIn}>
                {label}
              </SoftSlide>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
