import { useState } from "react";
import { Button, Drawer, type DrawerProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import type { DrawerCommon } from "./demo.ts";
import "./drawer-demo.css";

const drawerVariants = cva("", {
  variants: {
    surface: {
      default: "",
      inverted:
        "[--gem-color-bg:var(--gem-palette-neutral-900)] [--gem-color-fg:var(--gem-palette-neutral-50)] [--gem-color-fg-muted:var(--gem-palette-neutral-300)] [--gem-color-border:var(--gem-palette-neutral-700)] [--gem-color-bg-subtle:var(--gem-palette-neutral-800)]",
    },
    floating: {
      false: "",
      true: "m-3 h-[calc(100%-1.5rem)] rounded-xl",
    },
  },
  defaultVariants: { surface: "default", floating: false },
});

type PanelDrawerProps = DrawerProps & VariantProps<typeof drawerVariants>;

export function PanelDrawer({ surface, floating, className, ...props }: PanelDrawerProps) {
  return <Drawer className={cn(drawerVariants({ surface, floating }), className)} {...props} />;
}

const variants = [
  { surface: "inverted", floating: false },
  { surface: "default", floating: true },
] as const;

type Variant = (typeof variants)[number];

type VariantDrawerProps = { common: DrawerCommon; title: string; body: string };

export function VariantDrawer({ common, title, body }: VariantDrawerProps) {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<Variant>(variants[0]);

  return (
    <div className="drawer-row">
      {variants.map((next) => (
        <Button
          key={next.surface}
          variant="secondary"
          size="sm"
          onClick={() => {
            setVariant(next);
            setOpen(true);
          }}
        >
          surface="{next.surface}" floating={String(next.floating)}
        </Button>
      ))}
      <PanelDrawer
        surface={variant.surface}
        floating={variant.floating}
        open={open}
        onOpenChange={setOpen}
        title={title}
        subtitle={`surface="${variant.surface}"`}
        closeLabel={common.closeLabel}
        footer={
          <Button size="sm" onClick={() => setOpen(false)}>
            {common.close}
          </Button>
        }
      >
        {body}
      </PanelDrawer>
    </div>
  );
}
