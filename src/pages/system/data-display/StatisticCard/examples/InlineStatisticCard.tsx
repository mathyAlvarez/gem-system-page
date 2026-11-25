import { StatisticCard } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import type { MetricCopy } from "./demo.ts";
import "./statistic-card-demo.css";

export function InlineStatisticCard(copy: MetricCopy) {
  return (
    <div className="statistic-card-demo">
      <StatisticCard
        {...copy}
        layout="inline"
        value={24}
        suffix="/ 40"
        icon={<Users />}
        tone="secondary"
      />
    </div>
  );
}
