import { Tabs } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";

type ManualTabsProps = { texts: TabsTexts };

export function ManualTabs({ texts }: ManualTabsProps) {
  return <Tabs items={baseItems(texts)} activation="manual" listLabel={texts.listLabel} />;
}
