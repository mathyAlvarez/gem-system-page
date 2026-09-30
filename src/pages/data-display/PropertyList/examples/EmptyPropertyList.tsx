import { PropertyList } from "@gem-org/gem-system";
import type { Row } from "./demo.ts";
import "./property-list-demo.css";

type EmptyPropertyListProps = { title: string; emptyText: string; items: Row[] };

export function EmptyPropertyList({ title, emptyText, items }: EmptyPropertyListProps) {
  return (
    <div className="property-list-demo property-list-demo--narrow">
      <PropertyList title={title} items={items} />
      <PropertyList title={title} emptyText={emptyText} items={items} />
    </div>
  );
}
