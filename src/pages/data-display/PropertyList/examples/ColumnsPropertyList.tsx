import { PropertyList } from "@gem-org/gem-system";
import type { RowsCopy } from "./demo.ts";
import "./property-list-demo.css";

export function ColumnsPropertyList({ title, items }: RowsCopy) {
  return (
    <div className="property-list-demo">
      <PropertyList title={title} columns={2} items={items} />
    </div>
  );
}
