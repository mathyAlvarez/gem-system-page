import { Spotlight } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

type ImageSpotlightProps = {
  alt: string;
};

export function ImageSpotlight({ alt }: ImageSpotlightProps) {
  return (
    <SpotlightTile>
      <Spotlight intensity="lg" size={160} className="spotlight-demo__host">
        <img className="spotlight-demo__image" src="/gem-org-favicon.png" alt={alt} />
      </Spotlight>
    </SpotlightTile>
  );
}
