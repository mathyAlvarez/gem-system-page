import type { DropdownMenuItem } from "@gem-org/gem-system";
import { Copy, Download, Edit, ExternalLink, Share, Trash } from "@gem-org/gem-system/icons";

export type DropdownMenuTexts = {
  trigger: string;
  menuLabel: string;
  moreActions: string;
  lastAction: string;
  none: string;
  items: {
    edit: string;
    duplicate: string;
    share: string;
    download: string;
    guide: string;
    delete: string;
  };
};

export const MDN_MENU_ROLE = "https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/menu_role";

export function actionItems({ items }: DropdownMenuTexts): DropdownMenuItem[] {
  return [
    { id: "edit", label: items.edit, icon: <Edit size="sm" />, shortcut: "Ctrl+E" },
    { id: "duplicate", label: items.duplicate, icon: <Copy size="sm" />, shortcut: "Ctrl+D" },
    { id: "share", label: items.share, icon: <Share size="sm" /> },
    { type: "separator" },
    { id: "download", label: items.download, icon: <Download size="sm" /> },
    { id: "guide", label: items.guide, icon: <ExternalLink size="sm" />, href: MDN_MENU_ROLE, target: "_blank" },
    { type: "separator" },
    { id: "delete", label: items.delete, icon: <Trash size="sm" />, danger: true },
  ];
}
