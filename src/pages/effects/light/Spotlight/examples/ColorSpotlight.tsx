import { Spotlight } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

type ColorSpotlightProps = {
  beam: string;
  veil: string;
};

export function ColorSpotlight({ beam, veil }: ColorSpotlightProps) {
  return (
    <div className="spotlight-demo">
      <SpotlightTile label='color="var(--gem-palette-tertiary-400)"'>
        <Spotlight
          variant="glow"
          trigger="always"
          color="var(--gem-palette-tertiary-400)"
          className="spotlight-demo__host"
        >
          <div className="spotlight-demo__tile">
            <p className="spotlight-demo__title">{beam}</p>
          </div>
        </Spotlight>
      </SpotlightTile>
      <SpotlightTile label='veilColor="var(--gem-palette-primary-950)"'>
        <Spotlight
          trigger="always"
          veilColor="var(--gem-palette-primary-950)"
          className="spotlight-demo__host"
        >
          <div className="spotlight-demo__tile">
            <p className="spotlight-demo__title">{veil}</p>
          </div>
        </Spotlight>
      </SpotlightTile>
    </div>
  );
}
