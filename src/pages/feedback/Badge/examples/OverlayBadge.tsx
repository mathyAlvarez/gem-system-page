import { Avatar, Badge, Button } from "@gem-org/gem-system";
import { Bell, Star } from "@gem-org/gem-system/icons";
import "./badge-demo.css";

type OverlayBadgeProps = { notifications: string; favorites: string; unread: string; name: string };

export function OverlayBadge({ notifications, favorites, unread, name }: OverlayBadgeProps) {
  return (
    <div className="badge-row">
      <Badge tone="error" variant="solid" count={8} aria-label={`8 ${unread}`}>
        <Button variant="secondary" iconOnly aria-label={notifications}>
          <Bell />
        </Button>
      </Badge>
      <Badge tone="error" variant="solid" count={128}>
        <Button variant="transparent" iconOnly aria-label={favorites}>
          <Star />
        </Button>
      </Badge>
      <Badge tone="primary" variant="solid" count={3}>
        <Avatar name={name} />
      </Badge>
    </div>
  );
}
