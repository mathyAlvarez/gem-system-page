import { StatisticCard } from "@gem-org/gem-system";
import { Percent, Users } from "@gem-org/gem-system/icons";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";
import "./statistic-card-overrides.css";

type StyledStatisticCardProps = { branded: MetricCopy; pill: MetricCopy; separators: Separators };

export function StyledStatisticCard({ branded, pill, separators }: StyledStatisticCardProps) {
  return (
    <div className="statistic-card-demo">
      <StatisticCard {...branded} {...separators} className="statistic-card-branded" value={9200} icon={<Users />} />
      <StatisticCard {...pill} className="statistic-card-pill" tone="tertiary" value="4.1x" icon={<Percent />} />
    </div>
  );
}
