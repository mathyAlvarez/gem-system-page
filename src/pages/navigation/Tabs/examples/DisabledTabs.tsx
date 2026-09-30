import { Tabs } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";

type DisabledTabsProps = { texts: TabsTexts };

export function DisabledTabs({ texts }: DisabledTabsProps) {
  const items = baseItems(texts).map((item) =>
    item.id === "activity" ? { ...item, disabled: true } : item,
  );

  return <Tabs items={items} listLabel={texts.listLabel} />;
}
