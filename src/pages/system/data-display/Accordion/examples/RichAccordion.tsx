import { Accordion, Badge, Button } from "@gem-org/gem-system";
import type { AccordionCommon } from "./demo.ts";
import "./accordion-demo.css";

type RichAccordionProps = {
  common: AccordionCommon;
  title: string;
  badge: string;
  steps: string[];
  action: string;
};

export function RichAccordion({ common, title, badge, steps, action }: RichAccordionProps) {
  const [first] = common.sections;

  return (
    <div className="accordion-demo">
      <Accordion
        defaultValue="integrations"
        items={[
          {
            id: "integrations",
            ariaLabel: `${title}, ${badge}`,
            title: (
              <span className="accordion-rich-title">
                {title}
                <Badge size="sm" tone="success">
                  {badge}
                </Badge>
              </span>
            ),
            content: (
              <div className="accordion-rich-content">
                <ul>
                  {steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
                <Button size="sm">{action}</Button>
              </div>
            ),
          },
          { id: first.id, title: first.title, content: first.content },
        ]}
      />
    </div>
  );
}
