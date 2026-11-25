import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { Replay, UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

type ImageBlurUnveilProps = {
  alt: string;
  replay: string;
};

export function ImageBlurUnveil({ alt, replay }: ImageBlurUnveilProps) {
  return (
    <Replay label={replay}>
      {(replayKey) => (
        <UnveilTile>
          <BlurUnveil key={replayKey} className="unveil-demo__host">
            <UnveilImage alt={alt} />
          </BlurUnveil>
        </UnveilTile>
      )}
    </Replay>
  );
}
