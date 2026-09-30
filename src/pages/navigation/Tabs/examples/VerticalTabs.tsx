import { Tabs } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";

type VerticalTabsProps = { texts: TabsTexts };

export function VerticalTabs({ texts }: VerticalTabsProps) {
  return <Tabs items={baseItems(texts)} orientation="vertical" listLabel={texts.listLabel} />;
}
