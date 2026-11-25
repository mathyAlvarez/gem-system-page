import { Divider } from "@gem-org/gem-system";
import { DIVIDER_SIZES } from "./demo.ts";
import "./divider-demo.css";

export function SizesDivider() {
  return (
    <div className="divider-demo">
      {DIVIDER_SIZES.map((size) => (
        <div key={size} className="divider-stack">
          <p className="divider-caption">{size}</p>
          <Divider size={size} />
        </div>
      ))}
    </div>
  );
}
