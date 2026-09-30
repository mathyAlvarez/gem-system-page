import { ContextMenu, type ContextMenuItem } from "@gem-org/gem-system";
import { Edit, Folder, Trash } from "@gem-org/gem-system/icons";
import type { ContextMenuTexts } from "./demo.tsx";
import "./context-menu-demo.css";

type DisabledDangerContextMenuProps = {
  texts: ContextMenuTexts;
  title: string;
  hint: string;
  edit: string;
  archive: string;
  archiveHint: string;
  deleteProject: string;
};

export function DisabledDangerContextMenu({
  texts,
  title,
  hint,
  edit,
  archive,
  archiveHint,
  deleteProject,
}: DisabledDangerContextMenuProps) {
  const items: ContextMenuItem[] = [
    { id: "edit", label: edit, icon: <Edit size="sm" /> },
    { id: "archive", label: archive, description: archiveHint, icon: <Folder size="sm" />, disabled: true },
    { type: "separator" },
    { id: "delete", label: deleteProject, icon: <Trash size="sm" />, danger: true },
  ];

  return (
    <ContextMenu items={items} menuLabel={texts.menuLabel} className="w-full">
      <div className="ctx-surface ctx-surface--compact">
        <p className="ctx-surface__title">{title}</p>
        <p className="ctx-surface__hint">{hint}</p>
      </div>
    </ContextMenu>
  );
}
