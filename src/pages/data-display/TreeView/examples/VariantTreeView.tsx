import { TreeView, type TreeViewProps } from "@gem-org/gem-system";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { PROJECT_ITEMS } from "./demo.tsx";
import "./tree-view-demo.css";

const navTreeVariants = cva("", {
  variants: {
    density: {
      compact: "[--gem-tree-row-y:0.125rem] [--gem-tree-indent:0.875rem]",
      comfortable: "",
      spacious: "[--gem-tree-row-y:0.5rem] [--gem-tree-indent:1.5rem]",
    },
    accent: {
      primary: "",
      neutral:
        "[--gem-tree-selected:var(--gem-color-neutral-200)] [--gem-tree-selected-fg:var(--gem-color-neutral-900)]",
    },
  },
  defaultVariants: { density: "comfortable", accent: "primary" },
});

type NavTreeProps = TreeViewProps & VariantProps<typeof navTreeVariants>;

export function NavTree({ density, accent, className, ...props }: NavTreeProps) {
  return <TreeView className={cn(navTreeVariants({ density, accent }), className)} {...props} />;
}

type VariantTreeViewProps = { listLabel: string; compact: string; spacious: string };

export function VariantTreeView({ listLabel, compact, spacious }: VariantTreeViewProps) {
  return (
    <div className="tree-view-demo__columns">
      <div>
        <p className="tree-view-demo__label">{compact}</p>
        <NavTree
          listLabel={`${listLabel} (${compact})`}
          items={PROJECT_ITEMS}
          density="compact"
          accent="neutral"
          bordered
          defaultSelectedIds={["button-tsx"]}
        />
      </div>
      <div>
        <p className="tree-view-demo__label">{spacious}</p>
        <NavTree
          listLabel={`${listLabel} (${spacious})`}
          items={PROJECT_ITEMS}
          density="spacious"
          bordered
          defaultSelectedIds={["button-tsx"]}
        />
      </div>
    </div>
  );
}
