import { Button, Card } from "@gem-org/gem-system";
import type { CardCommon } from "./demo.ts";
import "./card-demo.css";

type TailwindCardProps = { common: CardCommon };

export function TailwindCard({ common }: TailwindCardProps) {
  return (
    <div className="card-demo">
      <Card
        title={common.title}
        subtitle={common.subtitle}
        className="border-(--gem-palette-tertiary-400)"
        rounded="1rem"
        classNames={{
          header:
            "bg-(--gem-color-bg-subtle) [&_.gem-card__title]:uppercase [&_.gem-card__title]:tracking-wider",
          body: "text-(--gem-color-fg-muted)",
          footer: "justify-start border-dashed",
        }}
        footer={<Button size="sm">{common.save}</Button>}
      >
        {common.body}
      </Card>
    </div>
  );
}
