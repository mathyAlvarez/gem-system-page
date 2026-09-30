import { useState } from "react";
import { Badge, Button } from "@gem-org/gem-system";
import "./badge-demo.css";

type ClosableBadgeProps = { tags: string[]; remove: string; reset: string };

export function ClosableBadge({ tags, remove, reset }: ClosableBadgeProps) {
  const [active, setActive] = useState(tags);

  if (active.length === 0) {
    return (
      <Button variant="secondary" size="sm" onClick={() => setActive(tags)}>
        {reset}
      </Button>
    );
  }

  return (
    <div className="badge-row">
      {active.map((tag) => (
        <Badge
          key={tag}
          tone="neutral"
          isClosable
          closeAriaLabel={`${remove} ${tag}`}
          onClose={() => setActive((current) => current.filter((item) => item !== tag))}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
