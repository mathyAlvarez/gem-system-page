import { useState } from "react";
import { TreeView, isTreeBranch, findTreeNode } from "@gem-org/gem-system";
import { PROJECT_ITEMS } from "./demo.tsx";
import "./tree-view-demo.css";

type CheckableTreeViewProps = { listLabel: string; files: string; none: string };

export function CheckableTreeView({ listLabel, files, none }: CheckableTreeViewProps) {
  const [checked, setChecked] = useState<string[]>(["components", "button-tsx", "tree-view-tsx"]);

  const checkedFiles = checked
    .map((id) => findTreeNode(PROJECT_ITEMS, id))
    .filter((node) => node && !isTreeBranch(node))
    .map((node) => String(node?.label));

  return (
    <div className="tree-view-demo">
      <TreeView
        listLabel={listLabel}
        items={PROJECT_ITEMS}
        bordered
        defaultExpandAll
        checkable
        checkedIds={checked}
        onCheckedChange={setChecked}
      />
      <p className="tree-view-demo__status" aria-live="polite">
        {files} {checkedFiles.length ? checkedFiles.join(", ") : none}
      </p>
    </div>
  );
}
