import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilTile } from "./UnveilTile.tsx";
import { UNVEIL_IMAGE } from "./demo.ts";
import "./blur-unveil-demo.css";

type AsChildBlurUnveilProps = {
  alt: string;
};

export function AsChildBlurUnveil({ alt }: AsChildBlurUnveilProps) {
  return (
    <UnveilTile>
      <BlurUnveil asChild trigger="hover" scale={1}>
        <img className="unveil-demo__image" src={UNVEIL_IMAGE} alt={alt} draggable={false} />
      </BlurUnveil>
    </UnveilTile>
  );
}
