import { useState } from "react";
import { SwipeToDismiss, type SwipeToDismissProps } from "@gem-org/gemsitions/swipe-to-dismiss";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { SwipeControls } from "./SwipeControls.tsx";
import "./swipe-to-dismiss-demo.css";

const panelVariants = cva("swipe-to-dismiss-demo__panel", {
  variants: {
    tone: {
      neutral: "",
      accent:
        "bg-[color-mix(in_srgb,var(--gem-palette-primary-500)_14%,var(--gem-color-bg-subtle))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftSwipeProps = SwipeToDismissProps &
  VariantProps<typeof panelVariants> & {
    title: string;
    copy: string;
  };

export function SoftSwipe({
  tone,
  className,
  title,
  copy,
  children: _children,
  ...props
}: SoftSwipeProps) {
  return (
    <SwipeToDismiss className={cn(className)} {...props}>
      <div className={panelVariants({ tone })}>
        {title}
        <span className="swipe-to-dismiss-demo__copy">{copy}</span>
      </div>
    </SwipeToDismiss>
  );
}

type VariantSwipeToDismissProps = {
  restore: string;
  dismiss: string;
  title: string;
  copy: string;
};

export function VariantSwipeToDismiss({
  restore,
  dismiss,
  title,
  copy,
}: VariantSwipeToDismissProps) {
  const [isIn, setIsIn] = useState(true);

  return (
    <div className="swipe-to-dismiss-demo swipe-to-dismiss-demo--wide">
      <SwipeControls
        restore={restore}
        dismiss={dismiss}
        isIn={isIn}
        onRestore={() => setIsIn(true)}
        onDismiss={() => setIsIn(false)}
      />
      <div className="swipe-to-dismiss-demo__compare">
        {(
          [
            { tone: "neutral" as const, label: 'tone="neutral"' },
            { tone: "accent" as const, label: 'tone="accent"' },
          ] as const
        ).map((item) => (
          <div key={item.tone}>
            <p className="swipe-to-dismiss-demo__compare-label">{item.label}</p>
            <div className="swipe-to-dismiss-demo__stage">
              <SoftSwipe
                tone={item.tone}
                isIn={isIn}
                title={title}
                copy={copy}
                onDismiss={() => setIsIn(false)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
