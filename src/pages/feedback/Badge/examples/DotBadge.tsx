import { Avatar, Badge, Button } from "@gem-org/gem-system";
import { Mail } from "@gem-org/gem-system/icons";
import "./badge-demo.css";

type DotBadgeProps = { name: string; online: string; inbox: string; newMessages: string };

export function DotBadge({ name, online, inbox, newMessages }: DotBadgeProps) {
  return (
    <div className="badge-row">
      <Badge isDot tone="success" placement="bottom-end" offset={4}>
        <Avatar name={name} aria-label={`${name}, ${online}`} />
      </Badge>
      <Badge isDot tone="error">
        <Button variant="secondary" iconOnly aria-label={`${inbox}, ${newMessages}`}>
          <Mail />
        </Button>
      </Badge>
    </div>
  );
}
