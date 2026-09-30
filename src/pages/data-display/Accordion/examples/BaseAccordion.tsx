import { Accordion } from "@gem-org/gem-system";
import { toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type BaseAccordionProps = { common: AccordionCommon };

export function BaseAccordion({ common }: BaseAccordionProps) {
  return (
    <div className="accordion-demo">
      <Accordion items={toItems(common.sections)} defaultValue="billing" />
    </div>
  );
}
