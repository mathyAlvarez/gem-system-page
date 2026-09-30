import { Button, Card } from "@gem-org/gem-system";
import type { CardCommon } from "./demo.ts";
import "./card-demo.css";

type ExpandableCardProps = { common: CardCommon; text: string };

export function ExpandableCard({ common, text }: ExpandableCardProps) {
  return (
    <div className="card-stack">
      <Card
        expandable
        title={common.title}
        subtitle={common.subtitle}
        footer={
          <>
            <Button variant="secondary" size="sm">
              {common.cancel}
            </Button>
            <Button size="sm">{common.save}</Button>
          </>
        }
      >
        {text}
      </Card>
      <Card expandable defaultExpanded={false} size="sm" title={common.title}>
        {text}
      </Card>
    </div>
  );
}
