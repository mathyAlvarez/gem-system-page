import { Badge } from "@gem-org/gem-system";
import { BADGE_SIZES } from "./demo.ts";
import "./badge-demo.css";

export function SizesBadge() {
  return (
    <div className="badge-row">
      {BADGE_SIZES.map((size) => (
        <Badge key={size} size={size}>
          {size}
        </Badge>
      ))}
      {BADGE_SIZES.map((size) => (
        <Badge key={`count-${size}`} size={size} tone="error" variant="solid" count={8} />
      ))}
    </div>
  );
}
