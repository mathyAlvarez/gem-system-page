import { StatisticCard } from "@gem-org/gem-system";
import { Clock, Users } from "@gem-org/gem-system/icons";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type CustomStatisticCardProps = { accent: MetricCopy; percent: MetricCopy; separators: Separators };

export function CustomStatisticCard({ accent, percent, separators }: CustomStatisticCardProps) {
  return (
    <div className="statistic-card-demo">
      <StatisticCard
        {...accent}
        {...separators}
        tone="custom"
        color="var(--gem-palette-secondary-600)"
        rounded
        shadow="sm"
        value={1840}
        icon={<Users />}
      />
      <StatisticCard
        {...percent}
        tone="custom"
        color="var(--gem-palette-tertiary-600)"
        rounded={12}
        bordered={false}
        shadow="md"
        value={392}
        suffix="ms"
        icon={<Clock />}
      />
    </div>
  );
}
