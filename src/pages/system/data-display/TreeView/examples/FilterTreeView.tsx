import { useMemo, useState } from "react";
import { InputSearch, TreeView, collectBranchIds } from "@gem-org/gem-system";
import { PROJECT_ITEMS, filterTree } from "./demo.tsx";
import "./tree-view-demo.css";

type FilterTreeViewProps = {
  listLabel: string;
  search: string;
  placeholder: string;
  noMatches: string;
};

export function FilterTreeView({ listLabel, search, placeholder, noMatches }: FilterTreeViewProps) {
  const [query, setQuery] = useState("ts");
  const items = useMemo(() => filterTree(PROJECT_ITEMS, query), [query]);

  return (
    <div className="tree-view-demo">
      <InputSearch
        label={search}
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {items.length ? (
        <TreeView
          key={query}
          listLabel={listLabel}
          items={items}
          bordered
          defaultExpandedIds={collectBranchIds(items)}
        />
      ) : (
        <p className="tree-view-demo__status" role="status">
          {noMatches.replace("{query}", query)}
        </p>
      )}
    </div>
  );
}
