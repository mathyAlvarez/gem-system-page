import type { ContextMenuItem } from "@gem-org/gem-system";
import { Copy, Download, Edit, ExternalLink, Share, Trash } from "@gem-org/gem-system/icons";

export type ContextMenuTexts = {
  menuLabel: string;
  lastAction: string;
  none: string;
  hint: string;
  items: {
    edit: string;
    duplicate: string;
    share: string;
    download: string;
    guide: string;
    delete: string;
  };
};

export const MDN_CONTEXTMENU = "https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event";

export function actionItems({ items }: ContextMenuTexts): ContextMenuItem[] {
  return [
    { id: "edit", label: items.edit, icon: <Edit size="sm" />, shortcut: "Ctrl+E" },
    { id: "duplicate", label: items.duplicate, icon: <Copy size="sm" />, shortcut: "Ctrl+D" },
    { id: "share", label: items.share, icon: <Share size="sm" /> },
    { type: "separator" },
    { id: "download", label: items.download, icon: <Download size="sm" /> },
    { id: "guide", label: items.guide, icon: <ExternalLink size="sm" />, href: MDN_CONTEXTMENU, target: "_blank" },
    { type: "separator" },
    { id: "delete", label: items.delete, icon: <Trash size="sm" />, danger: true },
  ];
}
