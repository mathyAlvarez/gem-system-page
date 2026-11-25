import { Button, Card } from "@gem-org/gem-system";
import "./card-demo.css";

type ElevatedCardProps = { title: string; subtitle: string; text: string; open: string };

export function ElevatedCard({ title, subtitle, text, open }: ElevatedCardProps) {
  return (
    <div className="card-demo">
      <Card
        bordered={false}
        shadow="md"
        title={title}
        subtitle={subtitle}
        footer={<Button size="sm">{open}</Button>}
      >
        {text}
      </Card>
    </div>
  );
}
