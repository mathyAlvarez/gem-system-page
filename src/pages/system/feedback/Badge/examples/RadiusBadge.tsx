import { Badge } from "@gem-org/gem-system";
import { BADGE_RADII } from "./demo.ts";
import "./badge-demo.css";

export function RadiusBadge() {
  return (
    <div className="badge-row">
      {BADGE_RADII.map((radius) => (
        <Badge key={radius} radius={radius} variant="outline">
          {radius}
        </Badge>
      ))}
    </div>
  );
}
