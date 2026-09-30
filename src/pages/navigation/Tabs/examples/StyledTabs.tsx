import { Tabs } from "@gem-org/gem-system";
import { baseItems, type TabsTexts } from "./demo.ts";
import "./tabs-overrides.css";

type StyledTabsProps = { texts: TabsTexts };

export function StyledTabs({ texts }: StyledTabsProps) {
  return <Tabs className="tabs-branded" items={baseItems(texts)} listLabel={texts.listLabel} />;
}
