import { Indicator, type IndicatorProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import "./indicator-demo.css";

const indicatorVariants = cva("", {
  variants: {
    promo: {
      sale: "[--gem-indicator-bg:var(--gem-color-error-600)] [--gem-indicator-fg:var(--gem-palette-neutral-0)]",
      limited:
        "[--gem-indicator-bg:var(--gem-palette-neutral-950)] [--gem-indicator-fg:var(--gem-palette-tertiary-400)]",
      eco: "[--gem-indicator-bg:var(--gem-color-success-700)] [--gem-indicator-fg:var(--gem-palette-neutral-0)]",
    },
  },
  defaultVariants: { promo: "sale" },
});

type PromoIndicatorProps = IndicatorProps & VariantProps<typeof indicatorVariants>;

export function PromoIndicator({ promo, className, ...props }: PromoIndicatorProps) {
  return <Indicator className={cn(indicatorVariants({ promo }), className)} {...props} />;
}

type VariantIndicatorProps = { sale: string; limited: string; eco: string };

export function VariantIndicator({ sale, limited, eco }: VariantIndicatorProps) {
  return (
    <div className="indicator-row">
      <PromoIndicator promo="sale" variant="flag" label={sale}>
        <span className="indicator-tile indicator-tile--muted" />
      </PromoIndicator>
      <PromoIndicator promo="limited" label={limited}>
        <span className="indicator-tile indicator-tile--muted" />
      </PromoIndicator>
      <PromoIndicator promo="eco" variant="flag" placement="bottom-start" label={eco}>
        <span className="indicator-tile indicator-tile--muted" />
      </PromoIndicator>
    </div>
  );
}
