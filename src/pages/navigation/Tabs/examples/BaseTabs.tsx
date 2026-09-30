import { Tabs } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";

type BaseTabsProps = { texts: TabsTexts };

export function BaseTabs({ texts }: BaseTabsProps) {
  return <Tabs items={baseItems(texts)} listLabel={texts.listLabel} />;
}
