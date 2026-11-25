import type { TabItem } from "@gem-org/gem-system";

type TabText = { label: string; content: string };

export type TabsTexts = {
  listLabel: string;
  tabs: {
    overview: TabText;
    activity: TabText;
    settings: TabText;
    members: TabText;
    billing: TabText;
  };
  icons: {
    home: TabText;
    files: TabText;
    calendar: TabText;
    settings: TabText;
  };
};

export function baseItems({ tabs }: TabsTexts): TabItem[] {
  return [
    { id: "overview", ...tabs.overview },
    { id: "activity", ...tabs.activity },
    { id: "settings", ...tabs.settings },
  ];
}

export function manyItems(texts: TabsTexts): TabItem[] {
  return [
    ...baseItems(texts),
    { id: "members", ...texts.tabs.members },
    { id: "billing", ...texts.tabs.billing },
  ];
}
