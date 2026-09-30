import { PropertyList } from "@gem-org/gem-system";
import type { RowsCopy } from "./demo.ts";
import "./property-list-demo.css";

export function StripedPropertyList({ title, items }: RowsCopy) {
  return (
    <div className="property-list-demo property-list-demo--narrow">
      <PropertyList title={title} striped divided={false} items={items} />
    </div>
  );
}
