import { Button, ProgressBar, StatisticCard } from "@gem-org/gem-system";
import { MoreHorizontal } from "@gem-org/gem-system/icons";
import type { MetricCopy } from "./demo.ts";
import "./statistic-card-demo.css";

type FooterStatisticCardProps = MetricCopy & { more: string };

export function FooterStatisticCard({ more, ...copy }: FooterStatisticCardProps) {
  return (
    <div className="statistic-card-demo">
      <StatisticCard
        {...copy}
        value={68}
        suffix="%"
        tone="info"
        extra={
          <Button variant="transparent" size="sm" iconOnly aria-label={more}>
            <MoreHorizontal size="sm" />
          </Button>
        }
      >
        <ProgressBar value={68} tone="info" size="sm" aria-label={copy.title} />
      </StatisticCard>
    </div>
  );
}
