import { Spotlight } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

const sizes = [80, 180, 280];

export function SizeSpotlight() {
  return (
    <div className="spotlight-demo">
      {sizes.map((size) => (
        <SpotlightTile key={size} label={`size={${size}}`}>
          <Spotlight trigger="always" size={size} className="spotlight-demo__host">
            <div className="spotlight-demo__tile">
              <p className="spotlight-demo__title">{size} px</p>
            </div>
          </Spotlight>
        </SpotlightTile>
      ))}
    </div>
  );
}
