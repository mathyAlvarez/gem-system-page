import { Card } from "@gem-org/gem-system";
import "./card-demo.css";

type BorderShadowCardProps = { title: string; subtitle: string; text: string };

export function BorderShadowCard({ title, subtitle, text }: BorderShadowCardProps) {
  return (
    <div className="card-demo">
      <Card shadow="sm" title={title} subtitle={subtitle}>
        {text}
      </Card>
    </div>
  );
}
