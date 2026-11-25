import { useEffect, useState } from "react";
import { Button, StatisticCard } from "@gem-org/gem-system";
import { Users } from "@gem-org/gem-system/icons";
import type { MetricCopy, Separators } from "./demo.ts";
import "./statistic-card-demo.css";

type LoadingStatisticCardProps = MetricCopy & { reload: string; separators: Separators };

export function LoadingStatisticCard({ reload, separators, ...copy }: LoadingStatisticCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    const timeoutId = window.setTimeout(() => setIsLoading(false), 1500);
    return () => window.clearTimeout(timeoutId);
  }, [isLoading]);

  return (
    <div className="statistic-card-demo">
      <StatisticCard
        {...copy}
        {...separators}
        value={12840}
        icon={<Users />}
        isLoading={isLoading}
      />
      <div className="statistic-card-demo__actions">
        <Button
          size="sm"
          variant="secondary"
          disabled={isLoading}
          onClick={() => setIsLoading(true)}
        >
          {reload}
        </Button>
      </div>
    </div>
  );
}
