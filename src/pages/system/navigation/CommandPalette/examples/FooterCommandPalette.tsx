import { useState, type ReactNode } from "react";
import { Button, CommandPalette } from "@gem-org/gem-system";
import { groupedCommands, paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

type FooterId = "tip" | "none";

type FooterCommandPaletteProps = {
  texts: CommandPaletteTexts;
  tip: string;
  labels: Record<FooterId, string>;
};

export function FooterCommandPalette({ texts, tip, labels }: FooterCommandPaletteProps) {
  const [footerId, setFooterId] = useState<FooterId | null>(null);

  const footers: Record<FooterId, ReactNode> = { tip, none: null };

  return (
    <div className="palette-row">
      {(Object.keys(footers) as FooterId[]).map((id) => (
        <Button key={id} variant="secondary" onClick={() => setFooterId(id)}>
          {labels[id]}
        </Button>
      ))}
      <CommandPalette
        items={groupedCommands(texts)}
        open={footerId !== null}
        onOpenChange={(next) => !next && setFooterId(null)}
        shortcut={false}
        {...paletteLabels(texts)}
        footer={footerId ? footers[footerId] : undefined}
      />
    </div>
  );
}
