import { Badge } from "@gem-org/gem-system";
import { Check, Clock, Star } from "@gem-org/gem-system/icons";
import "./badge-demo.css";

type IconBadgeProps = { paid: string; pending: string; featured: string };

export function IconBadge({ paid, pending, featured }: IconBadgeProps) {
  return (
    <div className="badge-row">
      <Badge tone="success" icon={<Check size="sm" strokeWidth={2} />}>
        {paid}
      </Badge>
      <Badge tone="warning" icon={<Clock size="sm" strokeWidth={2} />}>
        {pending}
      </Badge>
      <Badge tone="info" variant="solid" icon={<Star size="sm" strokeWidth={2} />}>
        {featured}
      </Badge>
    </div>
  );
}
