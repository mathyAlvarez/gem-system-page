import { Badge } from "@gem-org/gem-system";
import { BADGE_TONES } from "./demo.ts";
import "./badge-demo.css";

export function TonesBadge() {
  return (
    <div className="badge-row">
      {BADGE_TONES.map((tone) => (
        <Badge key={tone} tone={tone}>
          {tone}
        </Badge>
      ))}
    </div>
  );
}
