import { Accordion } from "@gem-org/gem-system";
import { ACCORDION_SIZES, toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type SizesAccordionProps = { common: AccordionCommon };

export function SizesAccordion({ common }: SizesAccordionProps) {
  const items = toItems(common.sections);

  return (
    <div className="accordion-demo accordion-demo--wide">
      <div className="accordion-stack">
        {ACCORDION_SIZES.map((size) => (
          <div key={size}>
            <p className="accordion-caption">{size}</p>
            <Accordion size={size} items={items} defaultValue="billing" />
          </div>
        ))}
      </div>
    </div>
  );
}
