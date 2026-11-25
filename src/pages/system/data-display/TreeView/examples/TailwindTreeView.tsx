import { TreeView } from "@gem-org/gem-system";
import { PROJECT_ITEMS } from "./demo.tsx";
import "./tree-view-demo.css";

export function TailwindTreeView({ listLabel }: { listLabel: string }) {
  return (
    <div className="tree-view-demo">
      <TreeView
        listLabel={listLabel}
        items={PROJECT_ITEMS}
        defaultSelectedIds={["tree-view-tsx"]}
        showLines
        classNames={{
          root: "rounded-xl p-2 [--gem-tree-bg:var(--gem-color-bg-subtle)] [--gem-tree-indent:1.5rem] [--gem-tree-line:var(--gem-color-primary-200)] [--gem-tree-selected:var(--gem-color-primary-600)] [--gem-tree-selected-fg:white]",
          row: "rounded-lg",
          label: "font-mono text-[0.8125rem]",
        }}
      />
    </div>
  );
}
