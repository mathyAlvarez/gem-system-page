import { Spotlight, type SpotlightTrigger } from "@gem-org/gemffects/spotlight";
import { SpotlightTile } from "./SpotlightTile.tsx";
import "./spotlight-demo.css";

type TriggerSpotlightProps = {
  labels: Record<SpotlightTrigger, string>;
};

const triggers: SpotlightTrigger[] = ["hover", "always", "press"];

export function TriggerSpotlight({ labels }: TriggerSpotlightProps) {
  return (
    <div className="spotlight-demo">
      {triggers.map((trigger) => (
        <SpotlightTile key={trigger} label={`trigger="${trigger}"`}>
          <Spotlight trigger={trigger} variant="glow" className="spotlight-demo__host">
            <span className="spotlight-demo__target">{labels[trigger]}</span>
          </Spotlight>
        </SpotlightTile>
      ))}
    </div>
  );
}
