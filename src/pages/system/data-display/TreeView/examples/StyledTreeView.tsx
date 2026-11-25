import { TreeView } from "@gem-org/gem-system";
import { PROJECT_ITEMS } from "./demo.tsx";
import "./tree-view-demo.css";
import "./tree-view-overrides.css";

export function StyledTreeView({ listLabel }: { listLabel: string }) {
  return (
    <div className="tree-view-demo">
      <TreeView
        className="custom-tree"
        listLabel={listLabel}
        items={PROJECT_ITEMS}
        bordered
        showLines
        defaultSelectedIds={["tree-view-tsx"]}
      />
    </div>
  );
}
