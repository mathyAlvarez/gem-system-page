import { Badge, Button } from "@gem-org/gem-system";
import { Bell, Star } from "@gem-org/gem-system/icons";
import "./badge-demo.css";

type TailwindBadgeProps = { pro: string; notifications: string };

export function TailwindBadge({ pro, notifications }: TailwindBadgeProps) {
  return (
    <div className="badge-row">
      <Badge
        icon={<Star size="sm" strokeWidth={2} />}
        classNames={{
          root: "border-0 bg-linear-to-r from-violet-500 to-fuchsia-500 text-white shadow-sm",
          label: "uppercase tracking-widest",
        }}
      >
        {pro}
      </Badge>
      <Badge count={5} classNames={{ indicator: "border-0 bg-fuchsia-500 text-white" }}>
        <Button variant="secondary" iconOnly aria-label={notifications}>
          <Bell />
        </Button>
      </Badge>
    </div>
  );
}
