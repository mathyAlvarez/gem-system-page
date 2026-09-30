import { Tabs, type TabItem } from "@gem-org/gem-system";
import { Calendar, Folder, Home, Settings } from "@gem-org/gem-system/icons";
import type { TabsTexts } from "./demo.ts";

type IconsTabsProps = { texts: TabsTexts };

export function IconsTabs({ texts }: IconsTabsProps) {
  const { icons } = texts;
  const items: TabItem[] = [
    { id: "home", ...icons.home, icon: <Home size="sm" /> },
    { id: "files", ...icons.files, icon: <Folder size="sm" /> },
    { id: "calendar", ...icons.calendar, icon: <Calendar size="sm" /> },
    { id: "settings", ...icons.settings, icon: <Settings size="sm" /> },
  ];

  return <Tabs items={items} listLabel={texts.listLabel} />;
}
