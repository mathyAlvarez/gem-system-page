import { Button, Card, type CardProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { CardCommon } from "./demo.ts";
import "./card-demo.css";

const cardVariants = cva("", {
  variants: {
    tone: {
      neutral: "",
      primary: "border-(--gem-color-primary-500) bg-[color-mix(in_srgb,var(--gem-color-primary-500)_8%,transparent)]",
      secondary:
        "border-(--gem-palette-secondary-400) bg-[color-mix(in_srgb,var(--gem-palette-secondary-500)_8%,transparent)]",
    },
    interactive: {
      true: "transition-shadow hover:shadow-(--gem-shadow-md)",
      false: "",
    },
  },
  defaultVariants: { tone: "neutral", interactive: false },
});

type ToneCardProps = CardProps & VariantProps<typeof cardVariants>;

export function ToneCard({ tone, interactive, className, ...props }: ToneCardProps) {
  return <Card className={cn(cardVariants({ tone, interactive }), className)} {...props} />;
}

type VariantCardProps = { common: CardCommon };

export function VariantCard({ common }: VariantCardProps) {
  return (
    <div className="card-grid">
      <ToneCard tone="primary" title={common.title} subtitle={common.subtitle}>
        {common.body}
      </ToneCard>
      <ToneCard
        tone="secondary"
        interactive
        title={common.title}
        subtitle={common.subtitle}
        footer={<Button size="sm">{common.save}</Button>}
      >
        {common.body}
      </ToneCard>
    </div>
  );
}
