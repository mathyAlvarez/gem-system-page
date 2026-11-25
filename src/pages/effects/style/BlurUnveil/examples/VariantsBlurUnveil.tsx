import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { Replay, UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import { UNVEIL_PULSE_DURATION, UNVEIL_VARIANTS } from "./demo.ts";
import "./blur-unveil-demo.css";

type VariantsBlurUnveilProps = {
  replay: string;
};

export function VariantsBlurUnveil({ replay }: VariantsBlurUnveilProps) {
  return (
    <Replay label={replay}>
      {(replayKey) => (
        <div className="unveil-demo">
          {UNVEIL_VARIANTS.map((variant) => (
            <UnveilTile key={variant} label={`variant="${variant}"`}>
              <BlurUnveil
                key={replayKey}
                variant={variant}
                duration={variant === "pulse" ? UNVEIL_PULSE_DURATION : undefined}
                className="unveil-demo__host"
              >
                <UnveilImage compact />
              </BlurUnveil>
            </UnveilTile>
          ))}
        </div>
      )}
    </Replay>
  );
}
