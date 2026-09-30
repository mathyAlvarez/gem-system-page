import { TreeView } from "@gem-org/gem-system";
import { PROJECT_ITEMS, TREE_SIZES } from "./demo.tsx";
import "./tree-view-demo.css";

export function SizesTreeView({ label }: { label: string }) {
  return (
    <div className="tree-view-demo__columns">
      {TREE_SIZES.map((size) => {
        const name = label.replace("{size}", size);
        return (
          <div key={size}>
            <p className="tree-view-demo__label">{name}</p>
            <TreeView
              size={size}
              listLabel={name}
              items={PROJECT_ITEMS.slice(0, 2)}
              bordered
              defaultSelectedIds={["button-tsx"]}
            />
          </div>
        );
      })}
    </div>
  );
}
