import { Vortex } from "@gem-org/gemffects/vortex";
import { VortexTile } from "./VortexTile.tsx";
import "./vortex-demo.css";

type CardVortexProps = {
  kicker: string;
  title: string;
};

export function CardVortex({ kicker, title }: CardVortexProps) {
  return (
    <VortexTile>
      <Vortex className="vortex-demo__host">
        <div className="vortex-demo__tile vortex-demo__tile--lg">
          <p className="vortex-demo__kicker">{kicker}</p>
          <p className="vortex-demo__title">{title}</p>
        </div>
      </Vortex>
    </VortexTile>
  );
}
