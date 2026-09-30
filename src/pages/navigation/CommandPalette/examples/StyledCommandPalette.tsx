import { useState } from "react";
import { Button, CommandPalette } from "@gem-org/gem-system";
import { groupedCommands, paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";
import "./command-palette-overrides.css";

type StyledCommandPaletteProps = { texts: CommandPaletteTexts };

export function StyledCommandPalette({ texts }: StyledCommandPaletteProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="palette-stack">
      <Button onClick={() => setOpen(true)}>{texts.open}</Button>
      <CommandPalette
        className="palette-branded"
        items={groupedCommands(texts)}
        open={open}
        onOpenChange={setOpen}
        shortcut={false}
        {...paletteLabels(texts)}
      />
    </div>
  );
}
