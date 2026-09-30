import { useState } from "react";
import { Button, CommandPalette, type CommandPaletteSize } from "@gem-org/gem-system";
import { groupedCommands, paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

const sizes: CommandPaletteSize[] = ["sm", "md", "lg"];

type SizesCommandPaletteProps = { texts: CommandPaletteTexts };

export function SizesCommandPalette({ texts }: SizesCommandPaletteProps) {
  const [openSize, setOpenSize] = useState<CommandPaletteSize | null>(null);

  return (
    <div className="palette-row">
      {sizes.map((size) => (
        <div key={size} className="palette-stack">
          <p className="palette-caption">size="{size}"</p>
          <Button variant="secondary" size="sm" onClick={() => setOpenSize(size)}>
            {texts.open}
          </Button>
          <CommandPalette
            items={groupedCommands(texts)}
            size={size}
            open={openSize === size}
            onOpenChange={(next) => setOpenSize(next ? size : null)}
            shortcut={false}
            {...paletteLabels(texts)}
          />
        </div>
      ))}
    </div>
  );
}
