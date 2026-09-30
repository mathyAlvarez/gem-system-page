import { useState } from "react";
import { Button, CommandPalette } from "@gem-org/gem-system";
import { groupedCommands, paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

type GroupedCommandPaletteProps = { texts: CommandPaletteTexts };

export function GroupedCommandPalette({ texts }: GroupedCommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [lastId, setLastId] = useState<string | null>(null);

  return (
    <div className="palette-stack">
      <Button onClick={() => setOpen(true)}>{texts.open}</Button>
      {lastId && (
        <p className="palette-status">
          {texts.lastCommand} {lastId}
        </p>
      )}
      <CommandPalette
        items={groupedCommands(texts)}
        open={open}
        onOpenChange={setOpen}
        onSelect={(id) => setLastId(id)}
        shortcut={false}
        {...paletteLabels(texts)}
      />
    </div>
  );
}
