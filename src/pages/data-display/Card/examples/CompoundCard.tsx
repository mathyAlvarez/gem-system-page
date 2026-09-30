import { Button, Card } from "@gem-org/gem-system";
import "./card-demo.css";

type CompoundCardProps = {
  title: string;
  subtitle: string;
  text: string;
  manage: string;
  dismiss: string;
  next: string;
};

export function CompoundCard({ title, subtitle, text, manage, dismiss, next }: CompoundCardProps) {
  return (
    <div className="card-demo">
      <Card shadow="sm">
        <Card.Header
          title={title}
          subtitle={subtitle}
          extra={
            <Button variant="secondary" size="sm">
              {manage}
            </Button>
          }
        />
        <Card.Body>{text}</Card.Body>
        <Card.Footer>
          <Button variant="transparent" size="sm">
            {dismiss}
          </Button>
          <Button size="sm">{next}</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
