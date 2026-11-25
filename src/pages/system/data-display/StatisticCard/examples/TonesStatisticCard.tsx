import { StatisticCard } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import { STATISTIC_CARD_TONES, type Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type TonesStatisticCardProps = { separators: Separators };

export function TonesStatisticCard({ separators }: TonesStatisticCardProps) {
  return (
    <div className="statistic-card-demo__row">
      {STATISTIC_CARD_TONES.map((tone) => (
        <StatisticCard
          key={tone}
          {...separators}
          size="sm"
          tone={tone}
          title={tone}
          value={2400}
          icon={<Users />}
        />
      ))}
    </div>
  );
}
