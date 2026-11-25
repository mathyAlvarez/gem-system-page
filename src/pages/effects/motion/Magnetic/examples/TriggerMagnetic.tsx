import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type TriggerMagneticProps = {
  hoverLabel: string;
  pressLabel: string;
};

export function TriggerMagnetic({ hoverLabel, pressLabel }: TriggerMagneticProps) {
  return (
    <div className="magnetic-demo">
      <MagneticTile label='trigger="hover"'>
        <Magnetic trigger="hover" className="magnetic-demo__host">
          <span className="magnetic-demo__target">{hoverLabel}</span>
        </Magnetic>
      </MagneticTile>
      <MagneticTile label='trigger="press"'>
        <Magnetic trigger="press" className="magnetic-demo__host">
          <span className="magnetic-demo__target">{pressLabel}</span>
        </Magnetic>
      </MagneticTile>
    </div>
  );
}
