import { StatisticCard } from "@gem-org/gem-system";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type TrendStatisticCardProps = { bounce: MetricCopy; nps: MetricCopy; separators: Separators };

export function TrendStatisticCard({ bounce, nps, separators }: TrendStatisticCardProps) {
  return (
    <div className="statistic-card-demo__row">
      <StatisticCard {...bounce} {...separators} value={42.8} precision={1} suffix="%" tone="warning" trend="down" />
      <StatisticCard {...nps} value={62} tone="neutral" trend="neutral" />
    </div>
  );
}
