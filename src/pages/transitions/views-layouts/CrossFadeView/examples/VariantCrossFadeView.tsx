import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { CrossFadeView, type CrossFadeViewProps } from "@gem-org/gemsitions/cross-fade-view";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./cross-fade-view-demo.css";

const panelVariants = cva("cross-fade-demo__panel", {
  variants: {
    tone: {
      neutral: "",
      accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_14%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftCrossFadeProps = CrossFadeViewProps &
  VariantProps<typeof panelVariants> & {
    firstLabel: string;
    secondLabel: string;
    firstCopy: string;
    secondCopy: string;
  };

export function SoftCrossFade({
  tone,
  className,
  firstLabel,
  secondLabel,
  firstCopy,
  secondCopy,
  ...props
}: SoftCrossFadeProps) {
  return (
    <CrossFadeView
      duration={360}
      pagination={2}
      className={cn(className)}
      first={
        <div className={panelVariants({ tone })}>
          {firstLabel}
          <span className="cross-fade-demo__copy">{firstCopy}</span>
        </div>
      }
      second={
        <div className={panelVariants({ tone })}>
          {secondLabel}
          <span className="cross-fade-demo__copy">{secondCopy}</span>
        </div>
      }
      {...props}
    />
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantCrossFadeViewProps = {
  firstLabel: string;
  secondLabel: string;
  firstCopy: string;
  secondCopy: string;
  first: string;
  second: string;
};

export function VariantCrossFadeView({
  firstLabel,
  secondLabel,
  firstCopy,
  secondCopy,
  first,
  second,
}: VariantCrossFadeViewProps) {
  const [isSecond, setIsSecond] = useState(false);

  return (
    <div className="cross-fade-demo cross-fade-demo--wide">
      <div className="cross-fade-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={!isSecond}
          onClick={() => setIsSecond(false)}
        >
          {first}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isSecond}
          onClick={() => setIsSecond(true)}
        >
          {second}
        </Button>
      </div>
      <div className="cross-fade-demo__compare">
        {TONES.map((item) => (
          <div key={item.tone}>
            <p className="cross-fade-demo__compare-label">{item.label}</p>
            <SoftCrossFade
              tone={item.tone}
              isSecond={isSecond}
              firstLabel={firstLabel}
              secondLabel={secondLabel}
              firstCopy={firstCopy}
              secondCopy={secondCopy}
              onPagination={(page) => setIsSecond(page >= 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
