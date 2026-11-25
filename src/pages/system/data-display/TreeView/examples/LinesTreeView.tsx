import { TreeView } from "@gem-org/gem-system";
import { PROJECT_ITEMS } from "./demo.tsx";
import "./tree-view-demo.css";

export function LinesTreeView({ listLabel }: { listLabel: string }) {
  return (
    <div className="tree-view-demo">
      <TreeView listLabel={listLabel} items={PROJECT_ITEMS} bordered showLines defaultExpandAll />
    </div>
  );
}
