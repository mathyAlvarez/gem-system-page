import { Avatar, Badge, Button } from "@gem-org/gem-system";
import "./badge-demo.css";

type ContentBadgeProps = { updates: string; newLabel: string; name: string; attention: string };

export function ContentBadge({ updates, newLabel, name, attention }: ContentBadgeProps) {
  return (
    <div className="badge-row">
      <Badge content={newLabel} tone="secondary" variant="solid" size="sm">
        <Button variant="secondary">{updates}</Button>
      </Badge>
      <Badge content="!" tone="warning" variant="solid" size="sm" role="img" aria-label={attention}>
        <Avatar name={name} />
      </Badge>
    </div>
  );
}
