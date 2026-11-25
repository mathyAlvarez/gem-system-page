import { Meteors } from "@gem-org/gemffects/meteors";
import { MeteorTile } from "./MeteorTile.tsx";
import "./meteors-demo.css";

type TriggerMeteorsProps = {
  hoverLabel: string;
  clickLabel: string;
};

export function TriggerMeteors({ hoverLabel, clickLabel }: TriggerMeteorsProps) {
  return (
    <div className="mt-demo">
      <MeteorTile label='trigger="hover"'>
        <Meteors trigger="hover" intensity="lg" className="mt-demo__host mt-demo__host--sm">
          <p className="mt-demo__copy">{hoverLabel}</p>
        </Meteors>
      </MeteorTile>
      <MeteorTile label='trigger="click"'>
        <Meteors trigger="click" intensity="lg" className="mt-demo__host mt-demo__host--sm">
          <p className="mt-demo__copy">{clickLabel}</p>
        </Meteors>
      </MeteorTile>
    </div>
  );
}
