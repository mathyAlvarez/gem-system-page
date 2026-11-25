import { useState } from "react";
import { Button, EmptyState, InputSearch } from "@gem-org/gem-system";
import { Plus } from "@gem-org/gem-system/icons";
import "./empty-state-demo.css";

type SearchEmptyStateProps = {
  label: string;
  placeholder: string;
  title: string;
  description: string;
  invite: string;
  members: string[];
};

export function SearchEmptyState({
  label,
  placeholder,
  title,
  description,
  invite,
  members,
}: SearchEmptyStateProps) {
  const [query, setQuery] = useState("zoe");
  const term = query.trim().toLowerCase();
  const results = members.filter((member) => member.toLowerCase().includes(term));

  return (
    <div className="empty-state-demo">
      <InputSearch
        label={label}
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onClear={() => setQuery("")}
      />
      {results.length > 0 ? (
        <ul className="empty-state-list">
          {results.map((member) => (
            <li key={member} className="empty-state-list__item">
              {member}
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          kind="search"
          title={title}
          description={description.replace("{query}", query.trim())}
          action={
            <Button variant="primary" size="sm" leftIcon={<Plus size="sm" />}>
              {invite}
            </Button>
          }
        />
      )}
    </div>
  );
}
