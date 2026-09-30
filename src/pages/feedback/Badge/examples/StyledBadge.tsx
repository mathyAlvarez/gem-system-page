import { Badge, Button } from "@gem-org/gem-system";
import { Bell, Star } from "@gem-org/gem-system/icons";
import "./badge-demo.css";
import "./badge-overrides.css";

type StyledBadgeProps = { label: string; notifications: string };

export function StyledBadge({ label, notifications }: StyledBadgeProps) {
  return (
    <div className="badge-row">
      <Badge className="badge-branded" icon={<Star size="sm" strokeWidth={2} />}>
        {label}
      </Badge>
      <Badge count={12} classNames={{ indicator: "badge-glow" }}>
        <Button variant="secondary" iconOnly aria-label={notifications}>
          <Bell />
        </Button>
      </Badge>
    </div>
  );
}
