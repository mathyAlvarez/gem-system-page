import { ContextMenu, type ContextMenuProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { actionItems, type ContextMenuTexts } from "./demo.tsx";
import "./context-menu-demo.css";

const menuVariants = cva("", {
  variants: {
    surface: {
      default: "",
      inverted:
        "[--gem-color-bg:var(--gem-palette-neutral-900)] [--gem-color-bg-subtle:var(--gem-palette-neutral-800)] [--gem-color-border:var(--gem-palette-neutral-700)] [--gem-color-fg:var(--gem-palette-neutral-50)] [--gem-color-fg-muted:var(--gem-palette-neutral-300)]",
    },
    density: {
      comfortable: "",
      compact: "[&_.gem-dropdown-menu__item]:py-1",
    },
  },
  defaultVariants: { surface: "default", density: "comfortable" },
});

type ActionContextMenuProps = ContextMenuProps & VariantProps<typeof menuVariants>;

export function ActionContextMenu({ surface, density, classNames, ...props }: ActionContextMenuProps) {
  return (
    <ContextMenu
      classNames={{ ...classNames, menu: cn(menuVariants({ surface, density }), classNames?.menu) }}
      {...props}
    />
  );
}

const variants = [
  { surface: "inverted", density: "comfortable" },
  { surface: "default", density: "compact" },
] as const;

type VariantContextMenuProps = { texts: ContextMenuTexts };

export function VariantContextMenu({ texts }: VariantContextMenuProps) {
  return (
    <div className="ctx-row">
      {variants.map(({ surface, density }) => (
        <ActionContextMenu
          key={surface}
          surface={surface}
          density={density}
          items={actionItems(texts)}
          menuLabel={`${texts.menuLabel} ${surface}`}
        >
          <div className="ctx-surface">
            <p className="ctx-caption">
              surface="{surface}" density="{density}"
            </p>
            <p className="ctx-surface__hint">{texts.hint}</p>
          </div>
        </ActionContextMenu>
      ))}
    </div>
  );
}
