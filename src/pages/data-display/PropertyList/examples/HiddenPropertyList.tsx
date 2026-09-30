import { useState } from "react";
import { PropertyList, Switch } from "@gem-org/gem-system";
import type { Row } from "./demo.ts";
import "./property-list-demo.css";

type HiddenPropertyListProps = { title: string; toggle: string; items: Row[]; sensitive: Row[] };

export function HiddenPropertyList({ title, toggle, items, sensitive }: HiddenPropertyListProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="property-list-demo property-list-demo--narrow">
      <Switch label={toggle} checked={showAll} onChange={(event) => setShowAll(event.target.checked)} />
      <PropertyList
        title={title}
        bordered
        items={[...items, ...sensitive.map((row) => ({ ...row, hidden: !showAll }))]}
      />
    </div>
  );
}
