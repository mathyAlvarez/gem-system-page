import { useState } from "react";
import { Accordion, Button } from "@gem-org/gem-system";
import { toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type ControlledAccordionProps = {
  common: AccordionCommon;
  openMembers: string;
  expandAll: string;
  collapseAll: string;
};

export function ControlledAccordion({
  common,
  openMembers,
  expandAll,
  collapseAll,
}: ControlledAccordionProps) {
  const items = toItems(common.sections);
  const [value, setValue] = useState<string[]>(["billing"]);

  return (
    <div className="accordion-demo">
      <Accordion items={items} value={value} onChange={setValue} />
      <div className="accordion-actions">
        <Button size="sm" variant="secondary" onClick={() => setValue(["members"])}>
          {openMembers}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setValue(items.map((item) => item.id))}
        >
          {expandAll}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setValue([])}>
          {collapseAll}
        </Button>
      </div>
    </div>
  );
}
