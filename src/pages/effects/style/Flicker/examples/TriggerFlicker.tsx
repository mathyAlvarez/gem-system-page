import { Flicker } from "@gem-org/gemffects/flicker";
import { FlickerTile } from "./FlickerTile.tsx";
import "./flicker-demo.css";

type TriggerFlickerProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerFlicker({ hoverLabel, clickLabel }: TriggerFlickerProps) {
  return (
    <div className="flicker-demo">
      <FlickerTile label='trigger="hover"'>
        <Flicker trigger="hover" className="flicker-demo__host">
          <span className="flicker-demo__target">{hoverLabel}</span>
        </Flicker>
      </FlickerTile>
      <FlickerTile label='trigger="click"'>
        <Flicker trigger="click" className="flicker-demo__host">
          <span className="flicker-demo__target">{clickLabel}</span>
        </Flicker>
      </FlickerTile>
    </div>
  );
}
