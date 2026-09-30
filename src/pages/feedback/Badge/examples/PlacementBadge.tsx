import { Avatar, Badge } from "@gem-org/gem-system";
import { BADGE_PLACEMENTS } from "./demo.ts";
import "./badge-demo.css";

type PlacementBadgeProps = { name: string };

export function PlacementBadge({ name }: PlacementBadgeProps) {
  return (
    <div className="badge-stack">
      <div className="badge-row">
        {BADGE_PLACEMENTS.map((placement) => (
          <div key={placement} className="badge-caption">
            <Badge tone="error" variant="solid" size="sm" count={3} placement={placement}>
              <Avatar name={name} radius="md" size="lg" />
            </Badge>
            <code>{placement}</code>
          </div>
        ))}
      </div>
      <div className="badge-row">
        {[0, 4].map((offset) => (
          <div key={offset} className="badge-caption">
            <Badge tone="success" isDot size="lg" offset={offset}>
              <Avatar name={name} size="lg" />
            </Badge>
            <code>offset={`{${offset}}`}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
