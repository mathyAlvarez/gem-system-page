import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

const blurs: (number | string)[] = [4, 12, "1.5rem"];

export function BlurBlurUnveil() {
  return (
    <div className="unveil-demo">
      {blurs.map((blur) => (
        <UnveilTile
          key={blur}
          label={typeof blur === "number" ? `blur={${blur}}` : `blur="${blur}"`}
        >
          <BlurUnveil trigger="hover" blur={blur} className="unveil-demo__host">
            <UnveilImage compact />
          </BlurUnveil>
        </UnveilTile>
      ))}
    </div>
  );
}
