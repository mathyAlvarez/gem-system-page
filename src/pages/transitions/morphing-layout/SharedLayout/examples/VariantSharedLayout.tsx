import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { SharedLayout, type SharedLayoutProps } from "@gem-org/gemsitions/shared-layout";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./shared-layout-demo.css";

const shellVariants = cva("", {
  variants: {
    tone: {
      neutral: "",
      accent: "[--gemst-shared-layout-z:2]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

const tileVariants = cva("shared-layout-demo__tile", {
  variants: {
    tone: {
      neutral: "",
      accent: "bg-[color-mix(in_srgb,var(--gem-color-accent)_14%,var(--gem-color-bg))]",
    },
  },
  defaultVariants: { tone: "neutral" },
});

type SoftSharedProps = SharedLayoutProps & VariantProps<typeof shellVariants>;

export function SoftShared({ tone, className, ...props }: SoftSharedProps) {
  return (
    <SharedLayout duration={360} className={cn(shellVariants({ tone }), className)} {...props} />
  );
}

const TONES = [
  { tone: "neutral", label: 'tone="neutral"' },
  { tone: "accent", label: 'tone="accent"' },
] as const;

type VariantSharedLayoutProps = {
  expand: string;
  collapse: string;
  tile: string;
  detailTitle: string;
  detailBody: string;
};

export function VariantSharedLayout({
  expand,
  collapse,
  tile,
  detailTitle,
  detailBody,
}: VariantSharedLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="shared-layout-demo shared-layout-demo--wide">
      <div className="shared-layout-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          aria-pressed={isExpanded}
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? collapse : expand}
        </Button>
      </div>
      <div className="shared-layout-demo__compare">
        {TONES.map((item) => (
          <div key={item.tone} className="shared-layout-demo__compare-col">
            <p className="shared-layout-demo__compare-label">{item.label}</p>
            <div className="shared-layout-demo__stage shared-layout-demo__stage--compact">
              <SoftShared
                tone={item.tone}
                isExpanded={isExpanded}
                collapsed={<div className={tileVariants({ tone: item.tone })}>{tile}</div>}
                expanded={
                  <div className="shared-layout-demo__detail">
                    <strong>{detailTitle}</strong>
                    <p>{detailBody}</p>
                  </div>
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
