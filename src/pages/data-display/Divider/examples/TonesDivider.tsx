import { Divider } from "@gem-org/gem-system";
import { DIVIDER_TONES } from "./demo.ts";
import "./divider-demo.css";

export function TonesDivider() {
  return (
    <div className="divider-demo">
      {DIVIDER_TONES.map((tone) => (
        <div key={tone} className="divider-stack">
          <p className="divider-caption">{tone}</p>
          <Divider tone={tone} size="md" />
        </div>
      ))}
    </div>
  );
}
