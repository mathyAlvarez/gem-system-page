import { PropertyList } from "@gem-org/gem-system";
import type { RowsCopy } from "./demo.ts";
import "./property-list-demo.css";

export function TailwindPropertyList({ title, items }: RowsCopy) {
  return (
    <div className="property-list-demo property-list-demo--narrow">
      <PropertyList
        title={title}
        bordered
        className="rounded-(--gem-radius-lg) shadow-md [--gem-property-list-rule:var(--gem-color-tertiary-200)]"
        classNames={{
          header: "bg-(--gem-color-tertiary-50)",
          title: "text-(--gem-color-tertiary-800)",
          label: "uppercase tracking-wide text-xs",
          value: "font-semibold",
        }}
        items={items}
      />
    </div>
  );
}
