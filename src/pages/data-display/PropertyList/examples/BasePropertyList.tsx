import { PropertyList } from "@gem-org/gem-system";
import type { RowsCopy } from "./demo.ts";
import "./property-list-demo.css";

export function BasePropertyList({ title, items }: RowsCopy) {
  return (
    <div className="property-list-demo property-list-demo--narrow">
      <PropertyList title={title} items={items} />
    </div>
  );
}
