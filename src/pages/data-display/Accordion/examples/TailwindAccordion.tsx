import { Accordion } from "@gem-org/gem-system";
import { toItems, type AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type TailwindAccordionProps = { common: AccordionCommon };

export function TailwindAccordion({ common }: TailwindAccordionProps) {
  return (
    <div className="accordion-demo">
      <Accordion
        variant="separated"
        items={toItems(common.sections)}
        defaultValue="billing"
        className="[--gem-accordion-radius:var(--gem-radius-lg)] [--gem-accordion-border:var(--gem-palette-tertiary-300)]"
        classNames={{
          item: "shadow-sm",
          title: "uppercase tracking-wider text-xs",
          indicator: "rounded-full bg-(--gem-accordion-subtle) p-1",
          content: "border-t border-dashed border-(--gem-accordion-border) pt-3",
        }}
      />
    </div>
  );
}
