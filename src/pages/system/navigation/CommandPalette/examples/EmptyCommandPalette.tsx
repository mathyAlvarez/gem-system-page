import { useState } from "react";
import { Button, CommandPalette } from "@gem-org/gem-system";
import { paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

type EmptyCommandPaletteProps = { texts: CommandPaletteTexts; emptyText: string };

export function EmptyCommandPalette({ texts, emptyText }: EmptyCommandPaletteProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="palette-stack">
      <Button variant="secondary" onClick={() => setOpen(true)}>
        {texts.open}
      </Button>
      <CommandPalette
        items={[]}
        open={open}
        onOpenChange={setOpen}
        shortcut={false}
        {...paletteLabels(texts)}
        emptyText={emptyText}
      />
    </div>
  );
}
