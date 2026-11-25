import { useState } from "react";
import { TreeView, findTreePath } from "@gem-org/gem-system";
import { PROJECT_ITEMS } from "./demo.tsx";
import "./tree-view-demo.css";

const pathOf = (id: string) =>
  findTreePath(PROJECT_ITEMS, id)
    ?.map((node) => String(node.label))
    .join("/") ?? "";

type BaseTreeViewProps = { listLabel: string; selected: string };

export function BaseTreeView({ listLabel, selected }: BaseTreeViewProps) {
  const [path, setPath] = useState(() => pathOf("tree-view-tsx"));

  return (
    <div className="tree-view-demo">
      <TreeView
        listLabel={listLabel}
        items={PROJECT_ITEMS}
        bordered
        defaultSelectedIds={["tree-view-tsx"]}
        onSelect={(ids) => setPath(ids[0] ? pathOf(ids[0]) : "")}
      />
      <p className="tree-view-demo__status" aria-live="polite">
        {selected} <span className="tree-view-demo__path">{path}</span>
      </p>
    </div>
  );
}
