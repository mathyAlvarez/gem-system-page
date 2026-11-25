import { Button, DropdownMenu, type DropdownMenuProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { actionItems, type DropdownMenuTexts } from "./demo.tsx";
import "./dropdown-menu-demo.css";

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

type ActionMenuProps = DropdownMenuProps & VariantProps<typeof menuVariants>;

export function ActionMenu({ surface, density, className, ...props }: ActionMenuProps) {
  return <DropdownMenu className={cn(menuVariants({ surface, density }), className)} {...props} />;
}

const variants = [
  { surface: "inverted", density: "comfortable" },
  { surface: "default", density: "compact" },
] as const;

type VariantDropdownMenuProps = { texts: DropdownMenuTexts };

export function VariantDropdownMenu({ texts }: VariantDropdownMenuProps) {
  const items = actionItems(texts);

  return (
    <div className="menu-row">
      {variants.map(({ surface, density }) => (
        <div key={surface} className="menu-stack">
          <p className="menu-caption">
            surface="{surface}" density="{density}"
          </p>
          <ActionMenu
            surface={surface}
            density={density}
            items={items}
            menuLabel={`${texts.menuLabel} ${surface}`}
            trigger={<Button variant="secondary">{texts.trigger}</Button>}
          />
        </div>
      ))}
    </div>
  );
}
