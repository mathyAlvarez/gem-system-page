import { Badge } from "@gem-org/gem-system";
import { BADGE_TONES, BADGE_VARIANTS } from "./demo.ts";
import "./badge-demo.css";

export function VariantsBadge() {
  return (
    <div className="badge-stack">
      {BADGE_VARIANTS.map((variant) => (
        <div key={variant} className="badge-stack">
          <p className="badge-label">{variant}</p>
          <div className="badge-row">
            {BADGE_TONES.map((tone) => (
              <Badge key={tone} variant={variant} tone={tone}>
                {tone}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
