import { Tabs, type TabsVariant } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";
import "./tabs-demo.css";

const variants: TabsVariant[] = ["line", "enclosed", "pills"];

type VariantsTabsProps = { texts: TabsTexts };

export function VariantsTabs({ texts }: VariantsTabsProps) {
  const items = baseItems(texts);

  return (
    <div className="tabs-stack">
      {variants.map((variant) => (
        <div key={variant}>
          <p className="tabs-caption">variant="{variant}"</p>
          <Tabs items={items} variant={variant} listLabel={`${texts.listLabel} ${variant}`} />
        </div>
      ))}
    </div>
  );
}
