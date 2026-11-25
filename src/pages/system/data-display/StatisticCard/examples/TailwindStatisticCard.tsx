import { StatisticCard } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type TailwindStatisticCardProps = MetricCopy & { separators: Separators };

export function TailwindStatisticCard({ separators, ...copy }: TailwindStatisticCardProps) {
  return (
    <div className="statistic-card-demo">
      <StatisticCard
        {...copy}
        {...separators}
        value={12840}
        icon={<Users />}
        trend="up"
        className="bg-(--gem-color-neutral-900) border-(--gem-color-neutral-700) [--gem-statistic-card-icon-bg:var(--gem-color-tertiary-400)] [--gem-statistic-card-icon-fg:var(--gem-color-neutral-900)]"
        classNames={{
          title: "text-(--gem-color-neutral-300) uppercase tracking-wide",
          value: "[&_.gem-statistic-card__value]:text-(--gem-palette-neutral-0)",
          trend: "text-(--gem-color-tertiary-300)",
          description: "text-(--gem-color-neutral-400)",
        }}
      />
    </div>
  );
}
