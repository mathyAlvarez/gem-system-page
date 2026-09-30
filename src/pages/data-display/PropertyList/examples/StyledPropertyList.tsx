import { Button, PropertyList } from "@gem-org/gem-system";
import type { Row } from "./demo.ts";
import "./property-list-demo.css";
import "./property-list-overrides.css";

type StyledPropertyListProps = { title: string; edit: string; items: Row[] };

export function StyledPropertyList({ title, edit, items }: StyledPropertyListProps) {
  return (
    <div className="property-list-demo property-list-demo--narrow">
      <PropertyList
        className="property-list-branded"
        bordered
        radius="lg"
        title={title}
        extra={
          <Button size="sm" variant="transparent">
            {edit}
          </Button>
        }
        items={items}
      />
      <PropertyList className="property-list-pill" colon={false} align="end" title={title} items={items} />
    </div>
  );
}
