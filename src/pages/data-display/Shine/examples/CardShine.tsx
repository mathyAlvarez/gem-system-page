import { Button, Card, Shine } from "@gem-org/gem-system";
import "./shine-demo.css";

type CardShineProps = { title: string; subtitle: string; body: string; action: string };

export function CardShine({ title, subtitle, body, action }: CardShineProps) {
  return (
    <div className="shine-demo">
      <Shine block trigger="hover" radius="md">
        <Card
          title={title}
          subtitle={subtitle}
          footer={
            <Button variant="primary" size="sm">
              {action}
            </Button>
          }
        >
          {body}
        </Card>
      </Shine>
    </div>
  );
}
