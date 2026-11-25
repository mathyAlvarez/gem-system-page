import { Spotlight } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";
import "./spotlight-overrides.css";

type StyledSpotlightProps = {
  kicker: string;
  title: string;
};

export function StyledSpotlight({ kicker, title }: StyledSpotlightProps) {
  return (
    <SpotlightTile>
      <Spotlight variant="glow" trigger="always" intensity="lg" className="spotlight-lamp">
        <div className="spotlight-demo__tile">
          <p className="spotlight-demo__kicker">{kicker}</p>
          <p className="spotlight-demo__title">{title}</p>
        </div>
      </Spotlight>
    </SpotlightTile>
  );
}
