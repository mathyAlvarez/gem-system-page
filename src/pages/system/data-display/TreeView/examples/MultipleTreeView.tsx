import { useState } from "react";
import { TreeView } from "@gem-org/gem-system";
import { PROJECT_ITEMS } from "./demo.tsx";
import "./tree-view-demo.css";

type MultipleTreeViewProps = { listLabel: string; count: string };

export function MultipleTreeView({ listLabel, count }: MultipleTreeViewProps) {
  const [selected, setSelected] = useState<string[]>(["button-tsx", "readme-md"]);

  return (
    <div className="tree-view-demo">
      <TreeView
        listLabel={listLabel}
        items={PROJECT_ITEMS}
        bordered
        defaultExpandAll
        selectionMode="multiple"
        selectedIds={selected}
        onSelect={setSelected}
      />
      <p className="tree-view-demo__status" aria-live="polite">
        {count.replace("{count}", String(selected.length))}
      </p>
    </div>
  );
}
