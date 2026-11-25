import { Button, Card } from "@gem-org/gem-system";
import "./card-demo.css";
import "./card-overrides.css";

type StyledCardProps = { title: string; subtitle: string; text: string; open: string };

export function StyledCard({ title, subtitle, text, open }: StyledCardProps) {
  return (
    <div className="card-demo">
      <Card
        className="card-branded"
        title={title}
        subtitle={subtitle}
        footer={
          <Button variant="secondary" size="sm">
            {open}
          </Button>
        }
      >
        {text}
      </Card>
    </div>
  );
}
