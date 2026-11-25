import { Button, Card } from "@gem-org/gem-system";
import { BorderBeam } from "@gem-org/gemffects/border-beam";
import "./border-beam-demo.css";

type CardBorderBeamProps = {
  title: string;
  subtitle: string;
  body: string;
  action: string;
};

export function CardBorderBeam({ title, subtitle, body, action }: CardBorderBeamProps) {
  return (
    <BorderBeam
      variant="trace"
      duration={5000}
      className="border-beam-demo__host border-beam-demo__card"
    >
      <Card title={title} subtitle={subtitle} footer={<Button size="sm">{action}</Button>}>
        {body}
      </Card>
    </BorderBeam>
  );
}
