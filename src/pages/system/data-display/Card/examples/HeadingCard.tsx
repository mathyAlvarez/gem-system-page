import { Card } from "@gem-org/gem-system";
import "./card-demo.css";

type HeadingCardProps = { title: string; subtitle: string; text: string };

export function HeadingCard({ title, subtitle, text }: HeadingCardProps) {
  return (
    <div className="card-demo">
      <Card header={<h4 className="card-heading">{title}</h4>} subtitle={subtitle}>
        {text}
      </Card>
    </div>
  );
}
