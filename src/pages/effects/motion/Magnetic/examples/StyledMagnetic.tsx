import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";
import "./magnetic-overrides.css";

type StyledMagneticProps = {
  label: string;
};

export function StyledMagnetic({ label }: StyledMagneticProps) {
  return (
    <MagneticTile>
      <Magnetic intensity="lg" className="magnetic-elastic">
        <span className="magnetic-demo__pill">{label}</span>
      </Magnetic>
    </MagneticTile>
  );
}
