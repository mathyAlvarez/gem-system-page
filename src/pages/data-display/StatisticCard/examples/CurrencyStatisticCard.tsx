import { StatisticCard } from "@gem-org/gem-system";
import { Percent } from "@gem-org/gem-system/icons";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type CurrencyStatisticCardProps = MetricCopy & { separators: Separators };

export function CurrencyStatisticCard({ separators, ...copy }: CurrencyStatisticCardProps) {
  return (
    <div className="statistic-card-demo">
      <StatisticCard
        {...copy}
        {...separators}
        value={24850.4}
        precision={2}
        prefix="USD"
        tone="success"
        icon={<Percent />}
        trend="up"
      />
    </div>
  );
}
