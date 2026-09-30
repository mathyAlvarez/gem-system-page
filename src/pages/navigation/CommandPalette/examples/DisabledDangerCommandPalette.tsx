import { useState } from "react";
import { Button, CommandPalette, type CommandPaletteItem } from "@gem-org/gem-system";
import { File, Folder, Trash } from "@gem-org/gem-system/icons";
import { paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

type DisabledDangerCommandPaletteProps = {
  texts: CommandPaletteTexts;
  rename: string;
  archive: string;
  archiveHint: string;
  deleteProject: string;
};

export function DisabledDangerCommandPalette({
  texts,
  rename,
  archive,
  archiveHint,
  deleteProject,
}: DisabledDangerCommandPaletteProps) {
  const [open, setOpen] = useState(false);

  const items: CommandPaletteItem[] = [
    { id: "rename", label: rename, icon: <File size="sm" /> },
    { id: "archive", label: archive, description: archiveHint, icon: <Folder size="sm" />, disabled: true },
    { id: "delete", label: deleteProject, icon: <Trash size="sm" />, danger: true },
  ];

  return (
    <div className="palette-stack">
      <Button onClick={() => setOpen(true)}>{texts.open}</Button>
      <CommandPalette items={items} open={open} onOpenChange={setOpen} shortcut={false} {...paletteLabels(texts)} />
    </div>
  );
}
