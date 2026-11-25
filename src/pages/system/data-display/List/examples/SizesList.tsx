import { List } from "@gem-org/gem-system";
import { Folder as FolderIcon } from "@gem-org/gem-system/icons";
import { LIST_SIZES, type Folder } from "./demo.ts";
import "./list-demo.css";

type SizesListProps = { folders: Folder[] };

export function SizesList({ folders }: SizesListProps) {
  return (
    <div className="list-demo list-demo--wide">
      {LIST_SIZES.map((size) => (
        <div key={size} className="list-demo">
          <p className="list-caption">{size}</p>
          <List
            size={size}
            bordered
            items={folders.map((folder) => ({
              ...folder,
              icon: <FolderIcon size={size === "lg" ? "md" : "sm"} />,
            }))}
          />
        </div>
      ))}
    </div>
  );
}
