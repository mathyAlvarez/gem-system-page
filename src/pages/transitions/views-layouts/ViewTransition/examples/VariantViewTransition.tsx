import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { ViewTransition, type ViewTransitionProps } from "@gem-org/gemsitions/view-transition";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { VIEW_TRANSITION_TABS, type ViewTransitionTab } from "./demo.ts";
import "./view-transition-demo.css";

const panelVariants = cva("view-transition-demo__panel", {
  variants: {
    tone: {
      neutral: "",
      accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_14%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftViewProps = ViewTransitionProps &
  VariantProps<typeof panelVariants> & {
    label: string;
    copy: string;
  };

export function SoftView({
  tone,
  className,
  label,
  copy,
  children: _children,
  ...props
}: SoftViewProps) {
  return (
    <ViewTransition duration={360} className={cn(className)} {...props}>
      <div className={panelVariants({ tone })}>
        {label}
        <span className="view-transition-demo__copy">{copy}</span>
      </div>
    </ViewTransition>
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantViewTransitionProps = {
  copies: Record<ViewTransitionTab, string>;
};

export function VariantViewTransition({ copies }: VariantViewTransitionProps) {
  const [tab, setTab] = useState<ViewTransitionTab>("Inbox");

  return (
    <div className="view-transition-demo view-transition-demo--wide">
      <div className="view-transition-demo__controls">
        {VIEW_TRANSITION_TABS.map((label) => (
          <Button
            key={label}
            size="sm"
            variant="secondary"
            aria-pressed={tab === label}
            onClick={() => setTab(label)}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="view-transition-demo__compare">
        {TONES.map((item) => (
          <div key={item.tone}>
            <p className="view-transition-demo__compare-label">{item.label}</p>
            <SoftView
              name={`docs-vt-variant-${item.tone}`}
              tone={item.tone}
              viewKey={`${item.tone}-${tab}`}
              label={tab}
              copy={copies[tab]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
