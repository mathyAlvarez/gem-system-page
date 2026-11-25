import { useState } from "react";
import { Button, CommandPalette, type CommandPaletteProps } from "@gem-org/gem-system";
import { cn } from "@/lib/cn";
import { groupedCommands, paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

function SoftCommandPalette({ classNames, ...props }: CommandPaletteProps) {
  return (
    <CommandPalette
      radius="lg"
      classNames={{
        ...classNames,
        root: cn("border-(--gem-color-primary-200) backdrop:backdrop-blur-sm", classNames?.root),
        input: cn("text-base", classNames?.input),
        group: cn("normal-case tracking-normal text-(--gem-color-primary-600)", classNames?.group),
        item: cn("rounded-lg aria-selected:bg-(--gem-color-primary-50)", classNames?.item),
        shortcut: cn("opacity-70", classNames?.shortcut),
      }}
      {...props}
    />
  );
}

type TailwindCommandPaletteProps = { texts: CommandPaletteTexts };

export function TailwindCommandPalette({ texts }: TailwindCommandPaletteProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="palette-stack">
      <Button onClick={() => setOpen(true)}>{texts.open}</Button>
      <SoftCommandPalette
        items={groupedCommands(texts)}
        open={open}
        onOpenChange={setOpen}
        shortcut={false}
        {...paletteLabels(texts)}
      />
    </div>
  );
}
