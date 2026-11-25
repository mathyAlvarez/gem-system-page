import { useState } from "react";
import { Button, CommandPalette, type CommandPaletteProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { groupedCommands, paletteLabels, type CommandPaletteTexts } from "./demo.tsx";
import "./command-palette-demo.css";

const paletteVariants = cva("", {
  variants: {
    surface: {
      default: "",
      inverted:
        "[--gem-color-bg:var(--gem-palette-neutral-900)] [--gem-color-bg-subtle:var(--gem-palette-neutral-800)] [--gem-color-border:var(--gem-palette-neutral-700)] [--gem-color-fg:var(--gem-palette-neutral-50)] [--gem-color-fg-muted:var(--gem-palette-neutral-300)]",
    },
    width: {
      narrow: "[--gem-command-palette-width:24rem]",
      auto: "",
      wide: "[--gem-command-palette-width:48rem]",
    },
  },
  defaultVariants: { surface: "default", width: "auto" },
});

type SpotlightProps = CommandPaletteProps & VariantProps<typeof paletteVariants>;

export function Spotlight({ surface, width, className, ...props }: SpotlightProps) {
  return (
    <CommandPalette className={cn(paletteVariants({ surface, width }), className)} {...props} />
  );
}

const variants = [
  { id: "inverted", surface: "inverted", width: "auto" },
  { id: "wide", surface: "default", width: "wide" },
] as const;

type VariantCommandPaletteProps = { texts: CommandPaletteTexts };

export function VariantCommandPalette({ texts }: VariantCommandPaletteProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="palette-row">
      {variants.map((variant) => (
        <div key={variant.id} className="palette-stack">
          <p className="palette-caption">
            surface="{variant.surface}" width="{variant.width}"
          </p>
          <Button variant="secondary" onClick={() => setOpenId(variant.id)}>
            {texts.open}
          </Button>
          <Spotlight
            surface={variant.surface}
            width={variant.width}
            items={groupedCommands(texts)}
            open={openId === variant.id}
            onOpenChange={(next) => setOpenId(next ? variant.id : null)}
            shortcut={false}
            {...paletteLabels(texts)}
          />
        </div>
      ))}
    </div>
  );
}
