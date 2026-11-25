import { Accordion } from "@gem-org/gem-system";
import { toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type DisabledAccordionProps = { common: AccordionCommon; itemLabel: string; allLabel: string };

export function DisabledAccordion({ common, itemLabel, allLabel }: DisabledAccordionProps) {
  const items = toItems(common.sections);

  return (
    <div className="accordion-demo">
      <div>
        <p className="accordion-caption">{itemLabel}</p>
        <Accordion
          items={items.map((item) => (item.id === "members" ? { ...item, disabled: true } : item))}
        />
      </div>
      <div>
        <p className="accordion-caption">{allLabel}</p>
        <Accordion isDisabled items={items} defaultValue="billing" />
      </div>
    </div>
  );
}
