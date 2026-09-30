import { StatisticCard } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import { STATISTIC_CARD_SIZES, type Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type SizesStatisticCardProps = { trendValue: string; trendLabel: string; separators: Separators };

export function SizesStatisticCard({ trendValue, trendLabel, separators }: SizesStatisticCardProps) {
  return (
    <div className="statistic-card-demo">
      {STATISTIC_CARD_SIZES.map((size) => (
        <StatisticCard
          key={size}
          {...separators}
          size={size}
          title={`size="${size}"`}
          value={12840}
          icon={<Users />}
          trend="up"
          trendValue={trendValue}
          trendLabel={trendLabel}
        />
      ))}
    </div>
  );
}
