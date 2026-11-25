import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

type TriggerVortexProps = {
  hoverLabel: string;
  clickLabel: string;
  alwaysLabel: string;
};

export function TriggerVortex({ hoverLabel, clickLabel, alwaysLabel }: TriggerVortexProps) {
  return (
    <div className="vortex-demo">
      <VortexTile label='trigger="hover"'>
        <Vortex trigger="hover" className="vortex-demo__host">
          <div className="vortex-demo__tile">{hoverLabel}</div>
        </Vortex>
      </VortexTile>
      <VortexTile label='trigger="click"'>
        <Vortex trigger="click" className="vortex-demo__host">
          <div className="vortex-demo__tile">{clickLabel}</div>
        </Vortex>
      </VortexTile>
      <VortexTile label='trigger="always"'>
        <Vortex trigger="always" className="vortex-demo__host">
          <div className="vortex-demo__tile">{alwaysLabel}</div>
        </Vortex>
      </VortexTile>
    </div>
  );
}
