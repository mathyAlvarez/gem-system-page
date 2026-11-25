import { Accordion } from "@gem-org/gem-system";
import { toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type RequiredOpenAccordionProps = { common: AccordionCommon };

export function RequiredOpenAccordion({ common }: RequiredOpenAccordionProps) {
  return (
    <div className="accordion-demo">
      <Accordion
        type="single"
        collapsible={false}
        items={toItems(common.sections)}
        defaultValue="billing"
      />
    </div>
  );
}
