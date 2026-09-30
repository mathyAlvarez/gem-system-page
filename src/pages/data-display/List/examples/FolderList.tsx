import { List } from "@gem-org/gem-system";
import { Folder as FolderIcon } from "@gem-org/gem-system/icons";
import type { Folder } from "./demo.ts";
import "./list-demo.css";

type FolderListProps = { folders: Folder[] };

export function FolderList({ folders }: FolderListProps) {
  return (
    <div className="list-demo">
      <List bordered items={folders.map((folder) => ({ ...folder, icon: <FolderIcon size="sm" /> }))} />
    </div>
  );
}
