import { Spotlight } from "@gem-org/gemffects/spotlight";
import type { IntensityInput } from "@gem-org/gemffects/tokens";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

const intensities: IntensityInput[] = ["sm", "md", "lg", 0.2, 0.62, 0.95];

export function IntensitySpotlight() {
  return (
    <div className="spotlight-demo">
      {intensities.map((intensity) => (
        <SpotlightTile
          key={intensity}
          label={typeof intensity === "number" ? `{${intensity}}` : `"${intensity}"`}
        >
          <Spotlight trigger="always" intensity={intensity} className="spotlight-demo__host">
            <div className="spotlight-demo__tile">
              <p className="spotlight-demo__title">{intensity}</p>
            </div>
          </Spotlight>
        </SpotlightTile>
      ))}
    </div>
  );
}
