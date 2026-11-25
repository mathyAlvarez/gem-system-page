import { PropertyList } from "@gem-org/gem-system";
import { PROPERTY_LIST_SIZES, type Row } from "./demo.ts";
import "./property-list-demo.css";

type SizesPropertyListProps = { items: Row[] };

export function SizesPropertyList({ items }: SizesPropertyListProps) {
  return (
    <div className="property-list-demo property-list-demo--narrow">
      {PROPERTY_LIST_SIZES.map((size) => (
        <PropertyList key={size} size={size} bordered title={`size="${size}"`} items={items} />
      ))}
    </div>
  );
}
