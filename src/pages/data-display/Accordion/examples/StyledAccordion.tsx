import { Accordion } from "@gem-org/gem-system";
import { toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";
import "./accordion-overrides.css";

type StyledAccordionProps = { common: AccordionCommon };

export function StyledAccordion({ common }: StyledAccordionProps) {
  return (
    <div className="accordion-demo">
      <Accordion className="accordion-branded" items={toItems(common.sections)} defaultValue="billing" />
    </div>
  );
}
