import { BlurUnveil } from "@gem-org/gemffects/blur-unveil";
import { Replay, UnveilImage, UnveilTile } from "./UnveilTile.tsx";
import "./blur-unveil-demo.css";

const durations = [280, 700, 1400];

type DurationBlurUnveilProps = {
  replay: string;
};

export function DurationBlurUnveil({ replay }: DurationBlurUnveilProps) {
  return (
    <Replay label={replay}>
      {(replayKey) => (
        <div className="unveil-demo">
          {durations.map((duration) => (
            <UnveilTile key={duration} label={`duration={${duration}}`}>
              <BlurUnveil key={replayKey} duration={duration} className="unveil-demo__host">
                <UnveilImage compact />
              </BlurUnveil>
            </UnveilTile>
          ))}
        </div>
      )}
    </Replay>
  );
}
