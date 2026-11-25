import { Spotlight, type SpotlightVariant } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

type VariantsSpotlightProps = {
  titles: Record<SpotlightVariant, string>;
};

const variants: SpotlightVariant[] = ["reveal", "glow", "ring"];

export function VariantsSpotlight({ titles }: VariantsSpotlightProps) {
  return (
    <div className="spotlight-demo">
      {variants.map((variant) => (
        <SpotlightTile key={variant} label={`variant="${variant}"`}>
          <Spotlight variant={variant} className="spotlight-demo__host">
            <div className="spotlight-demo__tile">
              <p className="spotlight-demo__kicker">{variant}</p>
              <p className="spotlight-demo__title">{titles[variant]}</p>
            </div>
          </Spotlight>
        </SpotlightTile>
      ))}
    </div>
  );
}
