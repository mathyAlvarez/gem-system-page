import { Accordion } from "@gem-org/gem-system";
import { toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type SingleAccordionProps = { common: AccordionCommon };

export function SingleAccordion({ common }: SingleAccordionProps) {
  return (
    <div className="accordion-demo">
      <Accordion type="single" items={toItems(common.sections)} defaultValue="billing" />
    </div>
  );
}
