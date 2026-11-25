import { Divider } from "@gem-org/gem-system";
import { DIVIDER_VARIANTS } from "./demo.ts";
import "./divider-demo.css";

export function VariantsDivider() {
  return (
    <div className="divider-demo">
      {DIVIDER_VARIANTS.map((variant) => (
        <div key={variant} className="divider-stack">
          <p className="divider-caption">{variant}</p>
          <Divider variant={variant} />
        </div>
      ))}
    </div>
  );
}
