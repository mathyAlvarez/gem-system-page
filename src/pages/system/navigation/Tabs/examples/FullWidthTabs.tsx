import { Tabs } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";

type FullWidthTabsProps = { texts: TabsTexts };

export function FullWidthTabs({ texts }: FullWidthTabsProps) {
  return <Tabs items={baseItems(texts)} variant="enclosed" fullWidth listLabel={texts.listLabel} />;
}
