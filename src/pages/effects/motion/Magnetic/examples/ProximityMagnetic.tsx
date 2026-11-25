import { Magnetic } from "@gem-org/gemffects/magnetic";
import { MagneticTile } from "./MagneticTile.tsx";
import "./magnetic-demo.css";

type ProximityMagneticProps = {
  label: string;
};

export function ProximityMagnetic({ label }: ProximityMagneticProps) {
  return (
    <MagneticTile field>
      <Magnetic trigger="proximity" radius={96} intensity="lg" className="rounded-full">
        <span className="magnetic-demo__pill">{label}</span>
      </Magnetic>
    </MagneticTile>
  );
}
