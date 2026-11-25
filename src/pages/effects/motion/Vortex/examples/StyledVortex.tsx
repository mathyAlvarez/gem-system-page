import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";
import "./vortex-overrides.css";

type StyledVortexProps = {
  kicker: string;
  title: string;
};

export function StyledVortex({ kicker, title }: StyledVortexProps) {
  return (
    <VortexTile>
      <Vortex trigger="always" intensity="lg" duration={7000} className="vortex-galaxy">
        <div className="vortex-demo__tile vortex-demo__tile--lg">
          <p className="vortex-demo__kicker">{kicker}</p>
          <p className="vortex-demo__title">{title}</p>
        </div>
      </Vortex>
    </VortexTile>
  );
}
