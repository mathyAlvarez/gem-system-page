import { StatisticCard } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type GroupStatisticCardProps = {
  users: MetricCopy;
  conversion: MetricCopy;
  churn: MetricCopy;
  separators: Separators;
};

export function GroupStatisticCard({ users, conversion, churn, separators }: GroupStatisticCardProps) {
  return (
    <div className="statistic-card-demo statistic-card-demo--wide">
      <StatisticCard.Group columns={3}>
        <StatisticCard {...users} {...separators} value={12840} icon={<Users />} trend="up" />
        <StatisticCard {...conversion} {...separators} value={4.82} precision={2} suffix="%" tone="success" trend="up" />
        <StatisticCard
          {...churn}
          {...separators}
          value={1.1}
          precision={1}
          suffix="%"
          tone="error"
          trend="down"
          trendInvert
        />
      </StatisticCard.Group>
    </div>
  );
}
