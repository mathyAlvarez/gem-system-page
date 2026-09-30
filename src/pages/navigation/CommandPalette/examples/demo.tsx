import type { CommandPaletteCommand, CommandPaletteItem } from "@gem-org/gem-system";
import { Calendar, File, Folder, Home, Settings, Trash, User } from "@gem-org/gem-system/icons";

type CommandText = { label: string; description?: string; keywords?: string[] };

export type CommandPaletteTexts = {
  open: string;
  placeholder: string;
  label: string;
  empty: string;
  loading: string;
  lastCommand: string;
  shortcutHint: string;
  groups: { navigation: string; actions: string };
  items: {
    home: CommandText;
    projects: CommandText;
    calendar: CommandText;
    profile: CommandText;
    settings: CommandText;
    docs: CommandText;
    delete: CommandText;
  };
  hints: { navigate: string; select: string; close: string };
};

export const MDN_DIALOG = "https://developer.mozilla.org/docs/Web/HTML/Element/dialog";

export function navigationCommands({ items }: CommandPaletteTexts): CommandPaletteCommand[] {
  return [
    { id: "home", ...items.home, icon: <Home size="sm" />, shortcut: ["G", "H"] },
    { id: "projects", ...items.projects, icon: <Folder size="sm" />, shortcut: ["G", "P"] },
    { id: "calendar", ...items.calendar, icon: <Calendar size="sm" /> },
  ];
}

export function actionCommands({ items }: CommandPaletteTexts): CommandPaletteCommand[] {
  return [
    { id: "profile", ...items.profile, icon: <User size="sm" /> },
    { id: "settings", ...items.settings, icon: <Settings size="sm" />, shortcut: ["Ctrl", ","] },
    { id: "docs", ...items.docs, icon: <File size="sm" />, href: MDN_DIALOG, target: "_blank" },
    { id: "delete", ...items.delete, icon: <Trash size="sm" />, danger: true },
  ];
}

export function groupedCommands(texts: CommandPaletteTexts): CommandPaletteItem[] {
  return [
    { type: "group", id: "navigation", label: texts.groups.navigation, items: navigationCommands(texts) },
    { type: "group", id: "actions", label: texts.groups.actions, items: actionCommands(texts) },
  ];
}

export function paletteFooter({ hints }: CommandPaletteTexts) {
  return (
    <span className="gem-command-palette__hints">
      <span className="gem-command-palette__hint">
        <kbd className="gem-command-palette__kbd">↑</kbd>
        <kbd className="gem-command-palette__kbd">↓</kbd>
        {hints.navigate}
      </span>
      <span className="gem-command-palette__hint">
        <kbd className="gem-command-palette__kbd">↵</kbd>
        {hints.select}
      </span>
      <span className="gem-command-palette__hint">
        <kbd className="gem-command-palette__kbd">esc</kbd>
        {hints.close}
      </span>
    </span>
  );
}

export function paletteLabels(texts: CommandPaletteTexts) {
  return {
    placeholder: texts.placeholder,
    label: texts.label,
    emptyText: texts.empty,
    loadingText: texts.loading,
    footer: paletteFooter(texts),
  };
}
