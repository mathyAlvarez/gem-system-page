import { Spotlight } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

type TailwindSpotlightProps = {
  title: string;
};

export function TailwindSpotlight({ title }: TailwindSpotlightProps) {
  return (
    <SpotlightTile>
      <Spotlight
        trigger="always"
        intensity="lg"
        className="rounded-3xl [--gemfx-spotlight-veil:var(--gem-palette-primary-950)]"
      >
        <div className="spotlight-demo__tile rounded-3xl">
          <p className="spotlight-demo__title">{title}</p>
        </div>
      </Spotlight>
    </SpotlightTile>
  );
}
