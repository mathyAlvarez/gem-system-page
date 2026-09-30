import { TreeView } from "@gem-org/gem-system";
import { teamItems, type TeamCopy } from "./demo.tsx";
import "./tree-view-demo.css";

type DisabledTreeViewProps = { listLabel: string; teams: TeamCopy; whole: string };

export function DisabledTreeView({ listLabel, teams, whole }: DisabledTreeViewProps) {
  const items = teamItems(teams);

  return (
    <div className="tree-view-demo__columns">
      <div>
        <TreeView listLabel={listLabel} items={items} bordered showLines defaultSelectedIds={["maya"]} />
      </div>
      <div>
        <p className="tree-view-demo__label">{whole}</p>
        <TreeView listLabel={`${listLabel} (${whole})`} items={items} bordered isDisabled />
      </div>
    </div>
  );
}
