import { useState } from "react";
import { Button, EmptyState } from "@gem-org/gem-system";
import "./empty-state-demo.css";

type FilterEmptyStateProps = {
  title: string;
  description: string;
  clear: string;
  restore: string;
  rows: string[];
};

export function FilterEmptyState({
  title,
  description,
  clear,
  restore,
  rows,
}: FilterEmptyStateProps) {
  const [filtered, setFiltered] = useState(true);

  return (
    <div className="empty-state-demo">
      {filtered ? (
        <EmptyState
          kind="filter"
          bordered
          title={title}
          description={description}
          action={
            <Button variant="secondary" size="sm" onClick={() => setFiltered(false)}>
              {clear}
            </Button>
          }
        />
      ) : (
        <>
          <ul className="empty-state-list">
            {rows.map((row) => (
              <li key={row} className="empty-state-list__item">
                {row}
              </li>
            ))}
          </ul>
          <div>
            <Button variant="link" size="sm" onClick={() => setFiltered(true)}>
              {restore}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
