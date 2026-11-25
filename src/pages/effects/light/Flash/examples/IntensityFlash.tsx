import { Flash } from "@gem-org/gemffects/flash";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { FlashTile } from "./FlashTile.tsx";
import "./flash-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensityFlash() {
  return (
    <div className="flash-demo">
      {intensities.map((intensity) => (
        <FlashTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Flash intensity={intensity} className="flash-demo__host">
            <span className="flash-demo__target">{intensity}</span>
          </Flash>
        </FlashTile>
      ))}
    </div>
  );
}
