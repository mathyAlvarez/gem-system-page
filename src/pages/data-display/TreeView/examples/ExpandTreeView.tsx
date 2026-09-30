import { useState } from "react";
import { Button, TreeView, collectBranchIds } from "@gem-org/gem-system";
import { PROJECT_ITEMS } from "./demo.tsx";
import "./tree-view-demo.css";

type ExpandTreeViewProps = { listLabel: string; expandAll: string; collapseAll: string };

export function ExpandTreeView({ listLabel, expandAll, collapseAll }: ExpandTreeViewProps) {
  const [expanded, setExpanded] = useState<string[]>(["src"]);

  return (
    <div className="tree-view-demo">
      <div className="tree-view-demo__row">
        <Button size="sm" variant="secondary" onClick={() => setExpanded(collectBranchIds(PROJECT_ITEMS))}>
          {expandAll}
        </Button>
        <Button size="sm" variant="transparent" onClick={() => setExpanded([])}>
          {collapseAll}
        </Button>
      </div>
      <TreeView
        listLabel={listLabel}
        items={PROJECT_ITEMS}
        bordered
        expandedIds={expanded}
        onExpandedChange={setExpanded}
      />
    </div>
  );
}
