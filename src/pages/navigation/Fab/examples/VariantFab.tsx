import { Fab, type FabProps } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { FabTexts } from "./demo.tsx";
import { FabStage } from "./FabStage.tsx";
import "./fab-demo.css";

const fabVariants = cva("", {
  variants: {
    intent: {
      brand:
        "[--gem-fab-bg:var(--gem-palette-tertiary-600)] [--gem-fab-border:var(--gem-palette-tertiary-600)] [--gem-fab-bg-hover:var(--gem-palette-tertiary-700)] [--gem-fab-border-hover:var(--gem-palette-tertiary-700)] [--gem-fab-fg:white] [--gem-fab-fg-hover:white]",
      ink: "[--gem-fab-bg:var(--gem-palette-neutral-900)] [--gem-fab-border:var(--gem-palette-neutral-900)] [--gem-fab-bg-hover:var(--gem-palette-neutral-700)] [--gem-fab-border-hover:var(--gem-palette-neutral-700)] [--gem-fab-fg:white] [--gem-fab-fg-hover:white]",
    },
    shape: {
      circle: "",
      squircle: "[&_.gem-fab__trigger]:rounded-2xl",
    },
  },
  defaultVariants: { intent: "brand", shape: "circle" },
});

type BrandFabProps = FabProps & VariantProps<typeof fabVariants>;

export function BrandFab({ intent, shape, className, ...props }: BrandFabProps) {
  return <Fab className={cn(fabVariants({ intent, shape }), className)} {...props} />;
}

const variants = [
  { intent: "brand", shape: "circle", placement: "bottom-start" },
  { intent: "ink", shape: "squircle", placement: "bottom-end" },
] as const;

type VariantFabProps = { texts: FabTexts };

export function VariantFab({ texts }: VariantFabProps) {
  return (
    <FabStage className="fab-stage--compact">
      <p className="fab-caption">
        {variants.map(({ intent, shape }) => `intent="${intent}" shape="${shape}"`).join(" · ")}
      </p>
      {variants.map(({ intent, shape, placement }) => (
        <BrandFab
          key={intent}
          intent={intent}
          shape={shape}
          position="absolute"
          placement={placement}
          icon={<Plus />}
          label={texts.newRecord}
        />
      ))}
    </FabStage>
  );
}
