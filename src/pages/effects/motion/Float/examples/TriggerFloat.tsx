import { Float } from "@gem-org/gemffects/float";
import { FloatTile } from "./FloatTile.tsx";
import "./float-demo.css";

type TriggerFloatProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerFloat({ hoverLabel, clickLabel }: TriggerFloatProps) {
  return (
    <div className="float-demo">
      <FloatTile label='trigger="hover"'>
        <Float trigger="hover" className="float-demo__host">
          <span className="float-demo__target">{hoverLabel}</span>
        </Float>
      </FloatTile>
      <FloatTile label='trigger="click"'>
        <Float trigger="click" className="float-demo__host">
          <span className="float-demo__target">{clickLabel}</span>
        </Float>
      </FloatTile>
    </div>
  );
}
