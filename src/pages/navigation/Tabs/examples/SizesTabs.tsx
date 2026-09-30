import { Tabs, type TabsSize } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";
import "./tabs-demo.css";

const sizes: TabsSize[] = ["sm", "md", "lg"];

type SizesTabsProps = { texts: TabsTexts };

export function SizesTabs({ texts }: SizesTabsProps) {
  const items = baseItems(texts);

  return (
    <div className="tabs-stack">
      {sizes.map((size) => (
        <div key={size}>
          <p className="tabs-caption">size="{size}"</p>
          <Tabs items={items} size={size} listLabel={`${texts.listLabel} ${size}`} />
        </div>
      ))}
    </div>
  );
}
