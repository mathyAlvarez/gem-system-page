import { StatisticCard } from "@gem-org/gem-system";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type DividedStatisticCardProps = {
  sessions: MetricCopy;
  duration: MetricCopy & { value: string };
  nps: MetricCopy;
  separators: Separators;
};

export function DividedStatisticCard({ sessions, duration, nps, separators }: DividedStatisticCardProps) {
  return (
    <div className="statistic-card-demo statistic-card-demo--wide">
      <StatisticCard.Group divided>
        <StatisticCard {...sessions} {...separators} value={94211} bordered={false} />
        <StatisticCard {...duration} bordered={false} />
        <StatisticCard {...nps} value={62} trend="neutral" bordered={false} />
      </StatisticCard.Group>
    </div>
  );
}
