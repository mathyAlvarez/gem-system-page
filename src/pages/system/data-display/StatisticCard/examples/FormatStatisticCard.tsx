import { StatisticCard } from "@gem-org/gem-system";
import "./statistic-card-demo.css";

type FormatStatisticCardProps = {
  locale: string;
  defaults: string;
  separators: string;
  compact: string;
  currency: string;
};

export function FormatStatisticCard({
  locale,
  defaults,
  separators,
  compact,
  currency,
}: FormatStatisticCardProps) {
  const compactFormat = new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1,
  });
  const currencyFormat = new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" });

  return (
    <div className="statistic-card-demo__row">
      <StatisticCard title={defaults} value={1234567.891} precision={2} />
      <StatisticCard
        title={separators}
        value={1234567.891}
        precision={2}
        groupSeparator="."
        decimalSeparator=","
      />
      <StatisticCard
        title={compact}
        value={1234567}
        formatValue={(value) => compactFormat.format(value)}
      />
      <StatisticCard
        title={currency}
        value={1234.5}
        formatValue={(value) => currencyFormat.format(value)}
      />
    </div>
  );
}
