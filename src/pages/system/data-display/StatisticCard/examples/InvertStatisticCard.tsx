import { StatisticCard } from "@gem-org/gem-system";
import { Alert } from "@gem-org/gem-system/icons";
import type { MetricCopy } from "./demo.ts";
import "./statistic-card-demo.css";

export function InvertStatisticCard(copy: MetricCopy) {
  return (
    <div className="statistic-card-demo">
      <StatisticCard {...copy} value={7} icon={<Alert />} tone="error" trend="down" trendInvert />
    </div>
  );
}
