import { useState } from "react";
import { Button } from "@gem-org/gem-system";
import { AnimatedNumber, type AnimatedNumberProps } from "@gem-org/gemsitions/animated-number";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { shiftBy } from "./demo.ts";
import { NumberPanel } from "./NumberPanel.tsx";

const metricVariants = cva("font-semibold", {
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

type MetricNumberProps = AnimatedNumberProps & VariantProps<typeof metricVariants>;

export function MetricNumber({ size, tone, className, ...props }: MetricNumberProps) {
  return (
    <AnimatedNumber
      duration={600}
      className={cn(metricVariants({ size, tone }), className)}
      {...props}
    />
  );
}

const METRICS = [
  { size: "sm", tone: "neutral" },
  { size: "md", tone: "neutral" },
  { size: "lg", tone: "accent" },
] as const;

type VariantAnimatedNumberProps = {
  increase: string;
};

export function VariantAnimatedNumber({ increase }: VariantAnimatedNumberProps) {
  const [sales, setSales] = useState(1280);

  return (
    <div className="animated-number-demo">
      <div className="animated-number-demo__controls">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setSales((value) => shiftBy(value, 240))}
        >
          {increase}
        </Button>
      </div>
      <div className="animated-number-demo__row">
        {METRICS.map((metric) => (
          <NumberPanel key={metric.size} label={`size="${metric.size}" tone="${metric.tone}"`}>
            <MetricNumber value={sales} size={metric.size} tone={metric.tone} />
          </NumberPanel>
        ))}
      </div>
    </div>
  );
}
