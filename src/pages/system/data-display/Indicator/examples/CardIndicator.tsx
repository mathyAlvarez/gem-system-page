import { Card, Indicator } from "@gem-org/gem-system";
import "./indicator-demo.css";

type CardIndicatorProps = { label: string; title: string; subtitle: string; body: string };

export function CardIndicator({ label, title, subtitle, body }: CardIndicatorProps) {
  return (
    <div className="indicator-card">
      <Indicator block label={label}>
        <Card title={title} subtitle={subtitle} shadow="sm">
          {body}
        </Card>
      </Indicator>
    </div>
  );
}
