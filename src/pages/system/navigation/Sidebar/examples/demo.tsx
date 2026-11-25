import { useState } from "react";
import type { SidebarItem } from "@gem-org/gem-system";
import { Folder, Home, Mail, Settings, Star, Users } from "@gem-org/gem-system/icons";

export type SidebarTexts = {
  navLabel: string;
  expandLabel: string;
  collapseLabel: string;
  menuLabel: string;
  closeLabel: string;
  pageTitle: string;
  user: string;
  newProject: string;
  items: {
    home: string;
    projects: string;
    team: string;
    messages: string;
    starred: string;
    settings: string;
    workspace: string;
    files: string;
    archive: string;
    people: string;
    guests: string;
  };
};

type Labels = SidebarTexts["items"];

export function sidebarLabels(texts: SidebarTexts) {
  return {
    navLabel: texts.navLabel,
    expandLabel: texts.expandLabel,
    collapseLabel: texts.collapseLabel,
    menuLabel: texts.menuLabel,
    closeLabel: texts.closeLabel,
  };
}

function withCurrent(
  items: SidebarItem[],
  current: string,
  select: (id: string) => void,
): SidebarItem[] {
  return items.map((item) =>
    item.items
      ? { ...item, items: withCurrent(item.items, current, select) }
      : { ...item, current: item.id === current, onClick: () => select(item.id) },
  );
}

export function useDemoItems(labels: Labels): SidebarItem[] {
  const [current, setCurrent] = useState("home");

  return withCurrent(
    [
      { id: "home", label: labels.home, icon: <Home size="sm" /> },
      { id: "projects", label: labels.projects, icon: <Folder size="sm" /> },
      { id: "team", label: labels.team, icon: <Users size="sm" /> },
      { id: "messages", label: labels.messages, icon: <Mail size="sm" /> },
      { id: "starred", label: labels.starred, icon: <Star size="sm" /> },
      { id: "settings", label: labels.settings, icon: <Settings size="sm" /> },
    ],
    current,
    setCurrent,
  );
}

export function useNestedItems(labels: Labels): SidebarItem[] {
  const [current, setCurrent] = useState("home");

  return withCurrent(
    [
      { id: "home", label: labels.home, icon: <Home size="sm" /> },
      {
        id: "workspace",
        label: labels.workspace,
        icon: <Folder size="sm" />,
        defaultOpen: true,
        items: [
          { id: "projects", label: labels.projects },
          { id: "files", label: labels.files },
          { id: "archive", label: labels.archive, disabled: true },
        ],
      },
      {
        id: "people",
        label: labels.people,
        icon: <Users size="sm" />,
        items: [
          { id: "team", label: labels.team },
          { id: "guests", label: labels.guests },
        ],
      },
      { id: "settings", label: labels.settings, icon: <Settings size="sm" /> },
    ],
    current,
    setCurrent,
  );
}
