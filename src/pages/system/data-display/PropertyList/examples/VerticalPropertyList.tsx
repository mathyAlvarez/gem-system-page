import { PropertyList } from "@gem-org/gem-system";
import type { RowsCopy } from "./demo.ts";
import "./property-list-demo.css";

export function VerticalPropertyList({ title, items }: RowsCopy) {
  return (
    <div className="property-list-demo">
      <PropertyList title={title} layout="vertical" colon={false} columns={3} items={items} />
    </div>
  );
}
