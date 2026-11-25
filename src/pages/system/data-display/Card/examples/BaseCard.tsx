import { Button, Card } from "@gem-org/gem-system";
import { MoreHorizontal } from "@gem-org/gem-system/icons";
import type { CardCommon } from "./demo.ts";
import "./card-demo.css";

type BaseCardProps = { common: CardCommon };

export function BaseCard({ common }: BaseCardProps) {
  return (
    <div className="card-demo">
      <Card
        title={common.title}
        subtitle={common.subtitle}
        extra={
          <Button variant="transparent" size="sm" iconOnly aria-label={common.more}>
            <MoreHorizontal size="sm" />
          </Button>
        }
        footer={
          <>
            <Button variant="secondary" size="sm">
              {common.cancel}
            </Button>
            <Button size="sm">{common.save}</Button>
          </>
        }
      >
        {common.body}
      </Card>
    </div>
  );
}
