import { Button, DropdownMenu, type DropdownMenuItem } from "@gem-org/gem-system";
import { Edit, Trash } from "@gem-org/gem-system/icons";
import type { DropdownMenuTexts } from "./demo.tsx";

type DisabledDangerTexts = { archive: string; archiveHint: string; deleteProject: string };

type DisabledDangerDropdownMenuProps = { texts: DropdownMenuTexts } & DisabledDangerTexts;

export function DisabledDangerDropdownMenu({
  texts,
  archive,
  archiveHint,
  deleteProject,
}: DisabledDangerDropdownMenuProps) {
  const items: DropdownMenuItem[] = [
    { id: "edit", label: texts.items.edit, icon: <Edit size="sm" /> },
    { id: "archive", label: archive, description: archiveHint, disabled: true },
    { type: "separator" },
    { id: "delete", label: deleteProject, icon: <Trash size="sm" />, danger: true },
  ];

  return (
    <DropdownMenu
      items={items}
      menuLabel={texts.menuLabel}
      trigger={<Button variant="secondary">{texts.trigger}</Button>}
    />
  );
}
