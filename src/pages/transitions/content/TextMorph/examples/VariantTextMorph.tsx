import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { TextMorph, type TextMorphProps } from "@gem-org/gemsitions/text-morph";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { TEXT_MORPH_TITLES } from "./demo.ts";
import { MorphPanel } from "./MorphPanel.tsx";

const statusVariants = cva("font-semibold", {
  variants: {
    size: {
      sm: "text-[length:var(--gem-font-size-lg)]",
      md: "text-[length:var(--gem-font-size-2xl)]",
      lg: "text-[length:var(--gem-font-size-4xl)]",
    },
    tone: {
      neutral: "text-[var(--gem-color-fg)]",
      accent: "text-[var(--gem-color-accent)]",
    },
  },
  defaultVariants: { size: "md", tone: "neutral" },
});

type StatusMorphProps = TextMorphProps & VariantProps<typeof statusVariants>;

export function StatusMorph({ size, tone, className, ...props }: StatusMorphProps) {
  return (
    <TextMorph
      duration={360}
      className={cn(statusVariants({ size, tone }), className)}
      {...props}
    />
  );
}

const VARIANTS = [
  { size: "sm", tone: "neutral" },
  { size: "md", tone: "neutral" },
  { size: "lg", tone: "accent" },
] as const;

type VariantTextMorphProps = {
  groupLabel: string;
};

export function VariantTextMorph({ groupLabel }: VariantTextMorphProps) {
  const [title, setTitle] = useState<(typeof TEXT_MORPH_TITLES)[number]>(TEXT_MORPH_TITLES[0]);

  return (
    <div className="text-morph-demo">
      <div className="text-morph-demo__controls" role="group" aria-label={groupLabel}>
        {TEXT_MORPH_TITLES.map((item) => (
          <Button
            key={item}
            size="sm"
            variant={title === item ? "primary" : "secondary"}
            aria-pressed={title === item}
            onClick={() => setTitle(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="text-morph-demo__row">
        {VARIANTS.map((variant) => (
          <MorphPanel key={variant.size} label={`size="${variant.size}" tone="${variant.tone}"`}>
            <StatusMorph value={title} size={variant.size} tone={variant.tone} />
          </MorphPanel>
        ))}
      </div>
    </div>
  );
}
