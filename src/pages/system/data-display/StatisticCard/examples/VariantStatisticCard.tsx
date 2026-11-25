import { StatisticCard, type StatisticCardProps } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";

const statisticCardVariants = cva("", {
  variants: {
    emphasis: {
      default: "",
      highlight: "border-l-4 border-l-(--gem-color-primary-500)",
    },
    surface: {
      plain: "",
      tinted: "bg-(--gem-color-bg-subtle)",
    },
  },
  defaultVariants: { emphasis: "default", surface: "plain" },
});

type KpiCardProps = StatisticCardProps & VariantProps<typeof statisticCardVariants>;

export function KpiCard({ emphasis, surface, className, ...props }: KpiCardProps) {
  return (
    <StatisticCard
      className={cn(statisticCardVariants({ emphasis, surface }), className)}
      {...props}
    />
  );
}

type VariantStatisticCardProps = MetricCopy & { separators: Separators };

export function VariantStatisticCard({ separators, ...copy }: VariantStatisticCardProps) {
  return (
    <div className="statistic-card-demo">
      <KpiCard
        {...copy}
        {...separators}
        emphasis="highlight"
        value={12840}
        icon={<Users />}
        trend="up"
      />
      <KpiCard
        {...copy}
        {...separators}
        surface="tinted"
        bordered={false}
        value={12840}
        trend="up"
      />
    </div>
  );
}
