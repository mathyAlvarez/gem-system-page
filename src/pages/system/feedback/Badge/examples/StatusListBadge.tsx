import { Badge, type BadgeTone } from "@gem-org/gem-system";
import "./badge-demo.css";

type Status = "online" | "away" | "offline";

const tones: Record<Status, BadgeTone> = { online: "success", away: "warning", offline: "neutral" };

type StatusListBadgeProps = { statuses: Record<Status, string> };

export function StatusListBadge({ statuses }: StatusListBadgeProps) {
  return (
    <ul className="badge-status-list">
      {(Object.keys(tones) as Status[]).map((status) => (
        <li key={status}>
          <Badge isDot tone={tones[status]} />
          {statuses[status]}
        </li>
      ))}
    </ul>
  );
}
