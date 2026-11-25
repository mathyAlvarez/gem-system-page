import type { FabAction } from "@gem-org/gem-system";
import { Copy, Edit, Mail, Print, Save, Share, Trash } from "@gem-org/gem-system/icons";

export type FabTexts = {
  create: string;
  created: string;
  newRecord: string;
  actionsLabel: string;
  lastAction: string;
  none: string;
  hint: string;
  actions: {
    edit: string;
    share: string;
    email: string;
    delete: string;
    print: string;
    save: string;
    copy: string;
  };
};

export const FAB_TONES = [
  "primary",
  "secondary",
  "tertiary",
  "danger",
  "success",
  "warning",
  "info",
  "neutral",
] as const;
export const FAB_SIZES = ["sm", "md", "lg"] as const;
export const FAB_PLACEMENTS = ["top-start", "top-end", "bottom-start", "bottom-end"] as const;

export function speedDialActions({ actions }: FabTexts): FabAction[] {
  return [
    { id: "edit", label: actions.edit, icon: <Edit size="sm" /> },
    { id: "share", label: actions.share, icon: <Share size="sm" />, tone: "secondary" },
    { id: "email", label: actions.email, icon: <Mail size="sm" />, tone: "info" },
    { id: "delete", label: actions.delete, icon: <Trash size="sm" />, tone: "danger" },
  ];
}

export function quickActions({ actions }: FabTexts): FabAction[] {
  return [
    { id: "share", label: actions.share, icon: <Share size="sm" /> },
    { id: "print", label: actions.print, icon: <Print size="sm" /> },
    { id: "save", label: actions.save, icon: <Save size="sm" /> },
    { id: "copy", label: actions.copy, icon: <Copy size="sm" /> },
  ];
}
