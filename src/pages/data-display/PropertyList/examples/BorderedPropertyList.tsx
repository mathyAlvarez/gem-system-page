import { PropertyList } from "@gem-org/gem-system";
import type { RowsCopy } from "./demo.ts";
import "./property-list-demo.css";

export function BorderedPropertyList({ title, items }: RowsCopy) {
  return (
    <div className="property-list-demo">
      <PropertyList title={title} bordered columns={2} items={items} />
    </div>
  );
}
