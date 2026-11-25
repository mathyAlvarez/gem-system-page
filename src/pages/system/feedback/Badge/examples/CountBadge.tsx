import { Badge } from "@gem-org/gem-system";
import "./badge-demo.css";

export function CountBadge() {
  return (
    <div className="badge-row">
      <Badge tone="error" count={8} />
      <Badge tone="error" variant="solid" count={128} />
      <Badge tone="neutral" count={1250} max={999} />
      <Badge tone="neutral" variant="outline" count={0} showZero />
    </div>
  );
}
