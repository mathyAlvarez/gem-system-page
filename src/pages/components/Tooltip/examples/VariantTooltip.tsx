import { Button, Tooltip, type TooltipProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const tooltipVariants = cva("", {
  variants: {
    tone: {
      neutral: "",
      primary: "bg-(--gem-palette-primary-600) text-(--gem-palette-neutral-50)",
      warning: "bg-(--gem-palette-warning-500) text-(--gem-palette-neutral-950)",
      info: "bg-(--gem-palette-info-600) text-(--gem-palette-neutral-50)",
    },
    size: {
      sm: "",
      lg: "max-w-80 px-4 py-3 text-sm",
    },
  },
  defaultVariants: { tone: "neutral", size: "sm" },
});

type VariantTooltipProps = TooltipProps & VariantProps<typeof tooltipVariants>;

export function VariantTooltip({ tone, size, className, ...props }: VariantTooltipProps) {
  return <Tooltip className={cn(tooltipVariants({ tone, size }), className)} {...props} />;
}

type VariantTooltipsProps = { content: string };

export function VariantTooltips({ content }: VariantTooltipsProps) {
  return (
    <>
      <VariantTooltip tone="primary" content={content}>
        <Button variant="secondary" size="sm">tone="primary"</Button>
      </VariantTooltip>
      <VariantTooltip tone="warning" content={content}>
        <Button variant="secondary" size="sm">tone="warning"</Button>
      </VariantTooltip>
      <VariantTooltip tone="info" size="lg" content={content}>
        <Button variant="secondary" size="sm">tone="info" size="lg"</Button>
      </VariantTooltip>
    </>
  );
}
