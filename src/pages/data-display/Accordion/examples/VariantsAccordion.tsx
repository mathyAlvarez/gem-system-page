import { Accordion } from "@gem-org/gem-system";
import { ACCORDION_VARIANTS, toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type VariantsAccordionProps = { common: AccordionCommon };

export function VariantsAccordion({ common }: VariantsAccordionProps) {
  const items = toItems(common.sections);

  return (
    <div className="accordion-demo accordion-demo--wide">
      <div className="accordion-stack">
        {ACCORDION_VARIANTS.map((variant) => (
          <div key={variant}>
            <p className="accordion-caption">{variant}</p>
            <Accordion variant={variant} items={items} defaultValue="billing" />
          </div>
        ))}
      </div>
    </div>
  );
}
