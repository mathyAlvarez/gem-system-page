import { Tabs } from "@gem-org/gem-system";
import { manyItems, type TabsTexts } from "./demo.ts";
import "./tabs-demo.css";

type MobileTabsProps = { texts: TabsTexts };

export function MobileTabs({ texts }: MobileTabsProps) {
  return (
    <div className="tabs-phone">
      <Tabs items={manyItems(texts)} size="sm" listLabel={texts.listLabel} />
    </div>
  );
}
