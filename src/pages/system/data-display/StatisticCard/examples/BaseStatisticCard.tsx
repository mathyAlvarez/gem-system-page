import { StatisticCard } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import type { MetricCopy } from "./demo.ts";
import "./statistic-card-demo.css";

export function BaseStatisticCard({ title, trendValue, trendLabel }: MetricCopy) {
  return (
    <div className="statistic-card-demo">
      <StatisticCard
        title={title}
        value={86}
        suffix="%"
        icon={<Users />}
        trend="up"
        trendValue={trendValue}
        trendLabel={trendLabel}
      />
    </div>
  );
}
