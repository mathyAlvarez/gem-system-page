import { useState } from "react";
import { Button, CommandPalette } from "@gem-org/gem-system";
import { actionCommands, navigationCommands, paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

type BaseCommandPaletteProps = { texts: CommandPaletteTexts };

export function BaseCommandPalette({ texts }: BaseCommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [lastId, setLastId] = useState<string | null>(null);

  return (
    <div className="palette-stack">
      <div className="palette-row">
        <Button onClick={() => setOpen(true)}>{texts.open}</Button>
        <p className="palette-status">
          {texts.shortcutHint} <kbd className="palette-kbd">Ctrl</kbd> + <kbd className="palette-kbd">K</kbd>
        </p>
      </div>
      {lastId && (
        <p className="palette-status">
          {texts.lastCommand} {lastId}
        </p>
      )}
      <CommandPalette
        items={[...navigationCommands(texts), ...actionCommands(texts)]}
        open={open}
        onOpenChange={setOpen}
        onSelect={(id) => setLastId(id)}
        {...paletteLabels(texts)}
      />
    </div>
  );
}
